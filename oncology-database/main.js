/* OncoAtlas global client runtime — static, dependency-light, GitHub Pages compatible. */
(() => {
  'use strict';

  const ROOT = document.documentElement;
  const BODY = document.body;
  const PAGE_SIZE = 15;
  const CHAPTER_COUNT = 16;
  const FONT_SIZES = [14, 16, 18];
  const STORAGE = {
    theme: 'oncoatlas-theme',
    fontSize: 'oncoatlas-font-size',
    completed: 'oncoatlas-completed-chapters',
    highlights: 'oncoatlas-highlights'
  };

  const chapterManifest = [
    ['00', '总览与导言', '00-overview.html'],
    ['01', '癌症生物学基础', '01-cancer-biology.html'],
    ['02', '肿瘤免疫治疗', '02-immunotherapy.html'],
    ['03', 'CAR-T细胞治疗', '03-car-t.html'],
    ['04', '抗体药物偶联物', '04-adc.html'],
    ['05', '双特异性抗体', '05-bispecific.html'],
    ['06', '靶向小分子治疗', '06-targeted-therapy.html'],
    ['07', '蛋白降解技术', '07-protac-deg.html'],
    ['08', '基因与细胞治疗', '08-gene-therapy.html'],
    ['09', '放射性药物治疗', '09-radiopharm.html'],
    ['10', '肿瘤微环境干预', '10-tumor-microenv.html'],
    ['11', '新抗原与个性化疫苗', '11-neoantigen.html'],
    ['12', '主要药企管线', '12-pipelines.html'],
    ['13', 'FDA政策与监管', '13-fda-policy.html'],
    ['14', '前沿探索路线', '14-emerging-routes.html'],
    ['15', '市场格局与投资动态', '15-market-landscape.html']
  ];

  const runtime = {
    chartRegistry: new Map(),
    chartInstances: new Map(),
    searchDocuments: [],
    searchIndex: null,
    terms: {},
    currentSelection: null,
    tableControllers: new WeakMap()
  };

  const selectors = {
    sidebar: '#sidebar',
    sidebarToggle: '.sidebar-toggle',
    mobileNavToggle: '.mobile-nav-toggle',
    progress: '#reading-progress',
    toc: '#article-toc',
    article: 'article',
    searchModal: '#search-modal',
    searchInput: '#global-search-input',
    searchResults: '#search-results',
    backToTop: '#back-to-top'
  };

  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
      return;
    }
    callback();
  }

  function select(selector, root = document) {
    return root.querySelector(selector);
  }

  function selectAll(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function escapeHtml(value) {
    const node = document.createElement('div');
    node.textContent = String(value ?? '');
    return node.innerHTML;
  }

  function debounce(callback, delay = 180) {
    let timer;
    return (...args) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => callback(...args), delay);
    };
  }

  function throttle(callback, delay = 80) {
    let waiting = false;
    return (...args) => {
      if (waiting) return;
      waiting = true;
      window.requestAnimationFrame(() => {
        callback(...args);
        window.setTimeout(() => {
          waiting = false;
        }, delay);
      });
    };
  }

  function safeJsonParse(value, fallback) {
    try {
      return JSON.parse(value) ?? fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function dataRoot() {
    return BODY.dataset.root || (location.pathname.includes('/chapters/') ? '..' : '.');
  }

  function currentChapterId() {
    return BODY.dataset.chapter || '';
  }

  function isActivationKey(event) {
    return event.key === 'Enter' || event.key === ' ';
  }

  function cssColor(variable) {
    return getComputedStyle(ROOT).getPropertyValue(variable).trim();
  }

  function initTheme() {
    const stored = localStorage.getItem(STORAGE.theme);
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    applyTheme(stored || preferred);
    selectAll('[data-action="theme"]').forEach((button) => {
      button.addEventListener('click', toggleTheme);
    });
  }

  function applyTheme(theme) {
    ROOT.dataset.theme = theme;
    localStorage.setItem(STORAGE.theme, theme);
    selectAll('[data-action="theme"]').forEach((button) => {
      button.setAttribute('aria-pressed', String(theme === 'light'));
      button.setAttribute('aria-label', theme === 'light' ? '切换到暗色模式' : '切换到亮色模式');
      const label = select('[data-theme-label]', button);
      if (label) label.textContent = theme === 'light' ? '暗色' : '亮色';
    });
    refreshChartsForTheme();
  }

  function toggleTheme() {
    applyTheme(ROOT.dataset.theme === 'light' ? 'dark' : 'light');
  }

  function initFontControls() {
    const stored = Number(localStorage.getItem(STORAGE.fontSize));
    const initialIndex = FONT_SIZES.includes(stored) ? FONT_SIZES.indexOf(stored) : 1;
    applyFontSize(initialIndex);
    selectAll('[data-font-adjust]').forEach((button) => {
      button.addEventListener('click', () => {
        const current = Number(localStorage.getItem(STORAGE.fontSize)) || FONT_SIZES[1];
        const direction = Number(button.dataset.fontAdjust);
        const nextIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, FONT_SIZES.indexOf(current) + direction));
        applyFontSize(nextIndex);
      });
    });
  }

  function applyFontSize(index) {
    const size = FONT_SIZES[index] || FONT_SIZES[1];
    ROOT.style.setProperty('--body-font-size', `${size}px`);
    localStorage.setItem(STORAGE.fontSize, String(size));
    selectAll('[data-font-size-output]').forEach((node) => {
      node.textContent = `${size}px`;
    });
  }

  function initSidebar() {
    const sidebar = select(selectors.sidebar);
    if (!sidebar) return;
    const toggle = () => {
      if (window.innerWidth <= 1024) {
        const open = sidebar.classList.toggle('open');
        selectAll('[aria-controls="sidebar"]').forEach((button) => button.setAttribute('aria-expanded', String(open)));
      } else {
        BODY.classList.toggle('sidebar-collapsed');
      }
    };
    selectAll(`${selectors.sidebarToggle}, ${selectors.mobileNavToggle}`).forEach((button) => {
      button.addEventListener('click', toggle);
    });
    document.addEventListener('click', (event) => {
      if (window.innerWidth > 1024 || !sidebar.classList.contains('open')) return;
      if (!sidebar.contains(event.target) && !event.target.closest(selectors.mobileNavToggle)) {
        sidebar.classList.remove('open');
      }
    });
    const search = select('#chapter-search');
    if (search) {
      search.addEventListener('input', () => {
        const query = normalize(search.value);
        selectAll('.chapter-item', sidebar).forEach((item) => {
          item.hidden = !normalize(item.textContent).includes(query);
        });
      });
    }
    markCurrentChapter();
    restoreCompletionState();
  }

  function markCurrentChapter() {
    const chapter = currentChapterId();
    if (!chapter) return;
    selectAll('.chapter-item').forEach((item) => {
      const current = item.dataset.chapter === chapter;
      item.classList.toggle('active', current);
      const link = select('a', item);
      if (link && current) link.setAttribute('aria-current', 'page');
    });
  }

  function completedChapters() {
    return safeJsonParse(sessionStorage.getItem(STORAGE.completed), []);
  }

  function saveCompletedChapters(chapters) {
    sessionStorage.setItem(STORAGE.completed, JSON.stringify([...new Set(chapters)]));
  }

  function restoreCompletionState() {
    const completed = completedChapters();
    selectAll('.chapter-item').forEach((item) => {
      item.classList.toggle('completed', completed.includes(item.dataset.chapter));
    });
    updateCompletionMeter(completed.length);
  }

  function updateCompletionMeter(count) {
    selectAll('.sidebar-progress').forEach((node) => {
      node.textContent = `阅读进度: ${count}/${CHAPTER_COUNT}章`;
    });
    selectAll('.sidebar-progress-meter span').forEach((node) => {
      node.style.width = `${(count / CHAPTER_COUNT) * 100}%`;
    });
  }

  function markChapterComplete() {
    const chapter = currentChapterId();
    if (!chapter) return;
    const completed = completedChapters();
    if (!completed.includes(chapter)) {
      completed.push(chapter);
      saveCompletedChapters(completed);
      restoreCompletionState();
      document.dispatchEvent(new CustomEvent('oncoatlas:chapter-complete', { detail: { chapter } }));
    }
  }

  function initReadingProgress() {
    const progress = select(selectors.progress);
    if (!progress) return;
    const update = throttle(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 1;
      progress.style.width = `${ratio * 100}%`;
      progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
      if (ratio >= 0.985) markChapterComplete();
    });
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function ensureHeadingIds(headings) {
    const seen = new Set();
    headings.forEach((heading, index) => {
      if (!heading.id) {
        const base = slugify(heading.textContent) || `section-${index + 1}`;
        let candidate = base;
        let suffix = 2;
        while (seen.has(candidate) || document.getElementById(candidate)) {
          candidate = `${base}-${suffix++}`;
        }
        heading.id = candidate;
      }
      seen.add(heading.id);
    });
  }

  function slugify(value) {
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[\s/—–]+/g, '-')
      .replace(/[^\w\-\u4e00-\u9fff]/g, '')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '');
  }

  function initToc() {
    const toc = select(selectors.toc);
    const article = select(selectors.article);
    if (!toc || !article) return;
    const headings = selectAll('h2, h3', article).filter((heading) => !heading.closest('.table-wrapper'));
    ensureHeadingIds(headings);
    const list = document.createElement('ul');
    list.className = 'toc-list';
    headings.forEach((heading) => {
      const item = document.createElement('li');
      item.className = heading.tagName === 'H3' ? 'toc-h3' : 'toc-h2';
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      item.append(link);
      list.append(item);
    });
    toc.replaceChildren(list);
    const links = new Map(selectAll('a', toc).map((link) => [decodeURIComponent(link.hash.slice(1)), link]));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      selectAll('a', toc).forEach((link) => link.classList.remove('active'));
      const active = links.get(visible[0].target.id);
      if (active) active.classList.add('active');
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
  }

  function normalize(value) {
    return String(value ?? '')
      .normalize('NFKC')
      .toLowerCase()
      .replace(/[\s\-_/.]+/g, ' ')
      .trim();
  }

  const PINYIN_GROUPS = {
    a: '癌安奥阿艾',
    b: '靶病胞白贝比表',
    c: '查成程肠传存',
    d: '的单导代蛋毒对多',
    e: '额恶',
    f: '分放肺非复法',
    g: '个共干高骨管',
    h: '化核合黑红环',
    j: '基激剂疾甲结检进',
    k: '抗克口可',
    l: '疗临淋粒联流路',
    m: '免膜酶美毛',
    n: '内耐脑拟',
    o: '欧',
    p: '排皮平评',
    q: '前强清全期',
    r: '乳热人',
    s: '生双受试神适食实体',
    t: '特体突糖通同',
    w: '微胃外网',
    x: '细腺小新血信性胸',
    y: '药液疫抑异移原因',
    z: '治肿转制植质中组增',
  };

  const PINYIN_LOOKUP = Object.entries(PINYIN_GROUPS).reduce((lookup, [initial, chars]) => {
    [...chars].forEach((char) => {
      lookup[char] = initial;
    });
    return lookup;
  }, {});

  function pinyinInitials(value) {
    return [...String(value)].map((char) => PINYIN_LOOKUP[char] || (/\w/.test(char) ? char.toLowerCase() : '')).join('');
  }

  async function fetchJson(path) {
    const response = await fetch(path, { credentials: 'same-origin' });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${path}`);
    return response.json();
  }

  async function buildSearchDocuments() {
    const root = dataRoot();
    const documents = [];
    chapterManifest.forEach(([id, title, file]) => {
      documents.push({
        id: `chapter-${id}`,
        title,
        type: '章节',
        url: `${root}/chapters/${file}`,
        body: `${title} ${pinyinInitials(title)}`,
        terms: ''
      });
    });
    const sources = [
      ['drugs.json', 'drugs', '药物'],
      ['pipelines.json', 'pipelines', '管线'],
      ['companies.json', 'companies', '公司'],
      ['fda_approvals.json', 'approvals', 'FDA批准']
    ];
    const results = await Promise.allSettled(sources.map(([file]) => fetchJson(`${root}/data/${file}`)));
    results.forEach((result, index) => {
      if (result.status !== 'fulfilled') return;
      const [, key, type] = sources[index];
      const items = result.value[key] || [];
      items.forEach((item) => {
        const title = item.generic_name || item.drug_name || item.name || item.product || item.id;
        const fields = Object.values(item).flat().filter((value) => typeof value !== 'object').join(' ');
        const chapterRef = item.chapter_ref || '';
        documents.push({
          id: `${type}-${item.id || slugify(title)}`,
          title,
          type,
          url: chapterRef ? `${root}/chapters/${chapterRef}` : `${root}/index.html`,
          body: `${fields} ${pinyinInitials(fields)}`,
          terms: [item.target, item.company, item.category, item.indication].filter(Boolean).join(' ')
        });
      });
    });
    selectAll('[data-search-entry]').forEach((node, index) => {
      const heading = select('h2, h3, h4', node);
      if (!heading) return;
      documents.push({
        id: `page-${currentChapterId()}-${index}`,
        title: heading.textContent,
        type: '正文',
        url: `${location.pathname.split('/').pop()}#${heading.id}`,
        body: `${node.textContent} ${pinyinInitials(node.textContent)}`,
        terms: node.dataset.terms || ''
      });
    });
    runtime.searchDocuments = documents;
    if (window.lunr) {
      runtime.searchIndex = window.lunr(function createIndex() {
        this.ref('id');
        this.field('title', { boost: 12 });
        this.field('terms', { boost: 7 });
        this.field('body');
        documents.forEach((document) => this.add(document));
      });
    }
  }

  function initSearch() {
    const modal = select(selectors.searchModal);
    const input = select(selectors.searchInput);
    const results = select(selectors.searchResults);
    if (!modal || !input || !results) return;
    const open = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      BODY.classList.add('modal-open');
      window.setTimeout(() => input.focus(), 20);
      if (!runtime.searchDocuments.length) {
        results.innerHTML = '<div class="search-empty">正在构建检索索引…</div>';
        buildSearchDocuments().then(() => renderSearchResults(input.value));
      }
    };
    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      BODY.classList.remove('modal-open');
    };
    selectAll('[data-action="search"]').forEach((button) => button.addEventListener('click', open));
    selectAll('[data-action="close-search"]', modal).forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('click', (event) => {
      if (event.target === modal) close();
    });
    input.addEventListener('input', debounce(() => renderSearchResults(input.value), 120));
    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        open();
      }
      if (event.key === 'Escape' && modal.classList.contains('open')) close();
    });
    buildSearchDocuments().catch((error) => {
      console.warn('OncoAtlas search index unavailable:', error);
    });
  }

  function searchDocuments(query) {
    const normalized = normalize(query);
    if (!normalized) return runtime.searchDocuments.slice(0, 12);
    const terms = normalized.split(' ').filter(Boolean);
    let refs = [];
    if (runtime.searchIndex) {
      try {
        const lunrQuery = terms.map((term) => `${term}* ${term}~1`).join(' ');
        refs = runtime.searchIndex.search(lunrQuery).map((result) => result.ref);
      } catch (_error) {
        refs = [];
      }
    }
    const ranked = runtime.searchDocuments
      .map((document) => {
        const haystack = normalize(`${document.title} ${document.terms} ${document.body}`);
        const initials = pinyinInitials(haystack);
        const score = terms.reduce((total, term) => {
          let value = total;
          if (normalize(document.title).includes(term)) value += 20;
          if (normalize(document.terms).includes(term)) value += 12;
          if (haystack.includes(term)) value += 5;
          if (initials.includes(term)) value += 3;
          if (refs.includes(document.id)) value += Math.max(2, 10 - refs.indexOf(document.id));
          return value;
        }, 0);
        return { document, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score);
    return ranked.slice(0, 30).map((entry) => entry.document);
  }

  function highlightSnippet(value, query) {
    let output = escapeHtml(String(value).slice(0, 180));
    normalize(query).split(' ').filter((term) => term.length > 1).forEach((term) => {
      const expression = new RegExp(`(${escapeRegExp(term)})`, 'ig');
      output = output.replace(expression, '<mark>$1</mark>');
    });
    return output;
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function renderSearchResults(query) {
    const results = select(selectors.searchResults);
    if (!results) return;
    const matches = searchDocuments(query);
    if (!matches.length) {
      results.innerHTML = '<div class="search-empty">未找到结果。可尝试药物通用名、靶点、公司或英文缩写。</div>';
      return;
    }
    results.innerHTML = matches.map((document) => `
      <a class="search-result-card" href="${escapeHtml(document.url)}">
        <span class="search-result-meta">${escapeHtml(document.type)}</span>
        <strong>${highlightSnippet(document.title, query)}</strong>
        <div class="search-result-snippet">${highlightSnippet(document.body, query)}…</div>
      </a>
    `).join('');
  }

  class TableController {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.table = select('table', wrapper);
      this.tbody = select('tbody', this.table);
      this.search = select('.table-search', wrapper);
      this.exportButton = select('.table-export', wrapper);
      this.count = select('.table-count', wrapper);
      this.pagination = select('.table-pagination', wrapper);
      this.rows = selectAll('tr', this.tbody);
      this.filteredRows = [...this.rows];
      this.page = 1;
      this.pageSize = Number(wrapper.dataset.pageSize) || PAGE_SIZE;
      this.sortColumn = -1;
      this.sortDirection = 1;
      this.bind();
      this.render();
    }

    bind() {
      if (this.search) {
        this.search.addEventListener('input', debounce(() => {
          this.page = 1;
          this.filter(this.search.value);
        }, 100));
      }
      if (this.exportButton) {
        this.exportButton.addEventListener('click', () => this.exportCsv());
      }
      selectAll('th[data-sort]', this.table).forEach((header, index) => {
        header.tabIndex = 0;
        header.setAttribute('role', 'button');
        const activate = () => this.sort(index, header.dataset.sort || 'string');
        header.addEventListener('click', activate);
        header.addEventListener('keydown', (event) => {
          if (isActivationKey(event)) {
            event.preventDefault();
            activate();
          }
        });
      });
      this.rows.forEach((row) => {
        row.tabIndex = 0;
        row.addEventListener('click', () => row.classList.toggle('selected'));
        row.addEventListener('keydown', (event) => {
          if (isActivationKey(event)) {
            event.preventDefault();
            row.classList.toggle('selected');
          }
        });
      });
    }

    filter(query) {
      const normalized = normalize(query);
      this.filteredRows = this.rows.filter((row) => normalize(row.textContent).includes(normalized));
      this.render();
    }

    sort(index, type) {
      if (this.sortColumn === index) {
        this.sortDirection *= -1;
      } else {
        this.sortColumn = index;
        this.sortDirection = 1;
      }
      const value = (row) => row.cells[index]?.dataset.value || row.cells[index]?.textContent.trim() || '';
      const compare = type === 'number'
        ? (a, b) => (parseFloat(value(a).replace(/[^\d.-]/g, '')) || 0) - (parseFloat(value(b).replace(/[^\d.-]/g, '')) || 0)
        : (a, b) => value(a).localeCompare(value(b), 'zh-CN', { numeric: true, sensitivity: 'base' });
      this.rows.sort((a, b) => compare(a, b) * this.sortDirection);
      this.rows.forEach((row) => this.tbody.append(row));
      this.filteredRows.sort((a, b) => compare(a, b) * this.sortDirection);
      this.page = 1;
      selectAll('th[data-sort]', this.table).forEach((header, headerIndex) => {
        header.setAttribute('aria-sort', headerIndex === index ? (this.sortDirection === 1 ? 'ascending' : 'descending') : 'none');
        const icon = select('.sort-icon', header);
        if (icon) icon.textContent = headerIndex === index ? (this.sortDirection === 1 ? '↑' : '↓') : '↕';
      });
      this.render();
    }

    render() {
      const paginate = this.rows.length > this.pageSize;
      const pageCount = Math.max(1, Math.ceil(this.filteredRows.length / this.pageSize));
      this.page = Math.min(this.page, pageCount);
      const start = (this.page - 1) * this.pageSize;
      const visibleRows = new Set(paginate ? this.filteredRows.slice(start, start + this.pageSize) : this.filteredRows);
      this.rows.forEach((row) => {
        row.hidden = !visibleRows.has(row);
      });
      if (this.count) {
        this.count.textContent = `共 ${this.filteredRows.length} 条数据${paginate ? ` · 第 ${this.page}/${pageCount} 页` : ''}`;
      }
      this.renderPagination(pageCount, paginate);
    }

    renderPagination(pageCount, paginate) {
      if (!this.pagination) return;
      if (!paginate || pageCount <= 1) {
        this.pagination.replaceChildren();
        return;
      }
      const fragment = document.createDocumentFragment();
      const pages = new Set([1, pageCount, this.page - 1, this.page, this.page + 1]);
      [...pages].filter((page) => page >= 1 && page <= pageCount).sort((a, b) => a - b).forEach((page) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = String(page);
        button.classList.toggle('active', page === this.page);
        button.setAttribute('aria-label', `第 ${page} 页`);
        button.addEventListener('click', () => {
          this.page = page;
          this.render();
        });
        fragment.append(button);
      });
      this.pagination.replaceChildren(fragment);
    }

    exportCsv() {
      const headers = selectAll('thead th', this.table).map((cell) => cleanCsvValue(cell.textContent.replace(/[↕↑↓]/g, '')));
      const rows = this.filteredRows.map((row) => selectAll('th, td', row).map((cell) => cleanCsvValue(cell.textContent)));
      const csv = `\uFEFF${[headers, ...rows].map((row) => row.join(',')).join('\r\n')}`;
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
      const link = document.createElement('a');
      const title = select('.table-title', this.wrapper)?.textContent || 'oncoatlas-table';
      link.href = URL.createObjectURL(blob);
      link.download = `${slugify(title)}.csv`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(link.href);
    }
  }

  function cleanCsvValue(value) {
    return `"${String(value).replace(/\s+/g, ' ').trim().replace(/"/g, '""')}"`;
  }

  function initTables() {
    selectAll('.table-wrapper').forEach((wrapper) => {
      if (runtime.tableControllers.has(wrapper)) return;
      const controller = new TableController(wrapper);
      runtime.tableControllers.set(wrapper, controller);
    });
  }

  function chartDefaults() {
    return {
      responsive: true,
      maintainAspectRatio: true,
      interaction: { mode: 'nearest', intersect: false },
      animation: { duration: 300, easing: 'easeOutCubic' },
      plugins: {
        legend: {
          labels: {
            color: cssColor('--color-text'),
            font: { family: 'IBM Plex Sans', size: 13 },
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: cssColor('--color-surface-offset'),
          titleColor: cssColor('--color-primary'),
          bodyColor: cssColor('--color-text'),
          borderColor: cssColor('--color-border'),
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        x: {
          ticks: { color: cssColor('--color-text-muted') },
          grid: { color: 'rgba(128,128,128,0.12)' }
        },
        y: {
          ticks: { color: cssColor('--color-text-muted') },
          grid: { color: 'rgba(128,128,128,0.12)' }
        }
      }
    };
  }

  function deepMerge(target, source) {
    const output = { ...target };
    Object.entries(source || {}).forEach(([key, value]) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        output[key] = deepMerge(output[key] || {}, value);
      } else {
        output[key] = value;
      }
    });
    return output;
  }

  function registerChart(id, factory) {
    runtime.chartRegistry.set(id, factory);
  }

  function createChart(id, configuration) {
    const canvas = document.getElementById(id);
    if (!canvas || !window.Chart || runtime.chartInstances.has(id)) return null;
    const config = {
      ...configuration,
      options: deepMerge(chartDefaults(), configuration.options || {})
    };
    const instance = new window.Chart(canvas.getContext('2d'), config);
    runtime.chartInstances.set(id, instance);
    return instance;
  }

  function initLazyCharts() {
    const targets = selectAll('[data-chart-id]');
    if (!targets.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.dataset.chartId;
        const factory = runtime.chartRegistry.get(id) || window.OncoAtlasCharts?.[id];
        if (typeof factory === 'function') {
          factory({ createChart, chartDefaults, cssColor, d3: window.d3 });
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '240px 0px', threshold: 0.01 });
    targets.forEach((target) => observer.observe(target));
  }

  function refreshChartsForTheme() {
    runtime.chartInstances.forEach((chart) => {
      const defaults = chartDefaults();
      chart.options.plugins.legend.labels.color = defaults.plugins.legend.labels.color;
      chart.options.plugins.tooltip.backgroundColor = defaults.plugins.tooltip.backgroundColor;
      chart.options.plugins.tooltip.titleColor = defaults.plugins.tooltip.titleColor;
      chart.options.plugins.tooltip.bodyColor = defaults.plugins.tooltip.bodyColor;
      if (chart.options.scales?.x) Object.assign(chart.options.scales.x.ticks, defaults.scales.x.ticks);
      if (chart.options.scales?.y) Object.assign(chart.options.scales.y.ticks, defaults.scales.y.ticks);
      chart.update('none');
    });
    document.dispatchEvent(new CustomEvent('oncoatlas:themechange', { detail: { theme: ROOT.dataset.theme } }));
  }

  async function initTerms() {
    const termNodes = selectAll('[data-term]');
    if (!termNodes.length) return;
    try {
      const payload = await fetchJson(`${dataRoot()}/data/terms.json`);
      runtime.terms = payload.terms || payload;
    } catch (_error) {
      runtime.terms = {};
    }
    let tooltip = select('#term-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'term-tooltip';
      tooltip.className = 'term-tooltip';
      tooltip.setAttribute('role', 'tooltip');
      document.body.append(tooltip);
    }
    termNodes.forEach((node) => {
      node.tabIndex = 0;
      const show = () => showTermTooltip(node, tooltip);
      const hide = () => tooltip.classList.remove('visible');
      node.addEventListener('mouseenter', show);
      node.addEventListener('focus', show);
      node.addEventListener('mouseleave', hide);
      node.addEventListener('blur', hide);
    });
  }

  function showTermTooltip(node, tooltip) {
    const key = node.dataset.term;
    const definition = runtime.terms[key] || node.dataset.definition || '术语释义正在补充。';
    tooltip.innerHTML = `<strong>${escapeHtml(key)}</strong><br>${escapeHtml(definition)}`;
    const rect = node.getBoundingClientRect();
    tooltip.style.left = `${Math.min(window.innerWidth - 316, Math.max(16, rect.left))}px`;
    tooltip.style.top = `${Math.max(16, rect.bottom + 10)}px`;
    tooltip.classList.add('visible');
  }

  function initHighlighting() {
    const article = select(selectors.article);
    const toolbar = select('#highlight-toolbar');
    if (!article || !toolbar) return;
    article.addEventListener('mouseup', () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.rangeCount) {
        hideHighlightToolbar(toolbar);
        return;
      }
      const range = selection.getRangeAt(0);
      if (!article.contains(range.commonAncestorContainer) || selection.toString().trim().length < 2) {
        hideHighlightToolbar(toolbar);
        return;
      }
      runtime.currentSelection = range.cloneRange();
      const rect = range.getBoundingClientRect();
      toolbar.style.left = `${Math.min(window.innerWidth - 150, Math.max(12, rect.left + rect.width / 2 - 55))}px`;
      toolbar.style.top = `${Math.max(8, rect.top - 48)}px`;
      toolbar.classList.add('visible');
    });
    selectAll('[data-highlight-color]', toolbar).forEach((button) => {
      button.addEventListener('click', () => applyHighlight(button.dataset.highlightColor));
    });
    document.addEventListener('mousedown', (event) => {
      if (!toolbar.contains(event.target)) hideHighlightToolbar(toolbar);
    });
  }

  function hideHighlightToolbar(toolbar = select('#highlight-toolbar')) {
    if (toolbar) toolbar.classList.remove('visible');
  }

  function applyHighlight(color) {
    const range = runtime.currentSelection;
    if (!range || range.collapsed) return;
    try {
      const mark = document.createElement('mark');
      mark.className = `user-highlight-${color}`;
      mark.dataset.userHighlight = 'true';
      range.surroundContents(mark);
      persistHighlights();
    } catch (_error) {
      // Browser Range cannot wrap a selection spanning incompatible block nodes.
    }
    window.getSelection()?.removeAllRanges();
    hideHighlightToolbar();
  }

  function persistHighlights() {
    const chapter = currentChapterId();
    if (!chapter) return;
    const values = selectAll('[data-user-highlight]').map((mark) => mark.textContent);
    const all = safeJsonParse(sessionStorage.getItem(STORAGE.highlights), {});
    all[chapter] = values;
    sessionStorage.setItem(STORAGE.highlights, JSON.stringify(all));
  }

  function initBackToTop() {
    const button = select(selectors.backToTop);
    if (!button) return;
    const update = throttle(() => button.classList.toggle('visible', window.scrollY > 200));
    window.addEventListener('scroll', update, { passive: true });
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    update();
  }

  async function initGlossary() {
    const modal = select('#glossary-modal');
    if (!modal) return;
    const open = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      BODY.classList.add('modal-open');
    };
    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      BODY.classList.remove('modal-open');
    };
    selectAll('[data-action="glossary"]').forEach((button) => button.addEventListener('click', open));
    selectAll('[data-action="close-glossary"]', modal).forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('click', (event) => {
      if (event.target === modal) close();
    });
    const target = select('#glossary-dynamic', modal);
    if (target) {
      try {
        const payload = await fetchJson(`${dataRoot()}/data/terms.json`);
        const entries = Object.entries(payload.terms || payload).sort(([a], [b]) => a.localeCompare(b));
        target.innerHTML = `<table class="data-table"><caption>OncoAtlas术语缩写速查表，共${entries.length}项</caption><thead><tr><th scope="col">缩写</th><th scope="col">英文全称与中文释义</th></tr></thead><tbody>${entries.map(([term, definition]) => `<tr><th scope="row">${escapeHtml(term)}</th><td>${escapeHtml(definition)}</td></tr>`).join('')}</tbody></table>`;
      } catch (_error) {
        target.textContent = '术语表加载失败；请通过本地HTTP服务器访问站点。';
      }
    }
  }

  function initHomeFilters() {
    const cards = selectAll('.chapter-card');
    const tags = selectAll('.filter-tag[data-filter]');
    if (!cards.length || !tags.length) return;
    tags.forEach((tag) => {
      tag.addEventListener('click', () => {
        const active = tag.classList.toggle('active');
        tags.forEach((other) => {
          if (other !== tag) other.classList.remove('active');
        });
        const filter = active ? normalize(tag.dataset.filter) : '';
        cards.forEach((card) => {
          card.hidden = filter && !normalize(`${card.dataset.tags} ${card.textContent}`).includes(filter);
        });
      });
    });
  }

  function initDisclosureButtons() {
    selectAll('[data-disclosure]').forEach((button) => {
      const target = document.getElementById(button.dataset.disclosure);
      if (!target) return;
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        target.hidden = expanded;
      });
    });
  }

  function initExternalLinks() {
    selectAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      link.setAttribute('rel', [...rel].join(' '));
    });
  }

  function initAccessibleFigures() {
    selectAll('figure').forEach((figure, index) => {
      if (!figure.getAttribute('aria-labelledby')) {
        const caption = select('figcaption', figure);
        if (caption) {
          caption.id ||= `figure-caption-${currentChapterId() || 'home'}-${index + 1}`;
          figure.setAttribute('aria-labelledby', caption.id);
        }
      }
    });
  }

  function validatePageStructure() {
    if (!BODY.dataset.dev) return;
    const warnings = [];
    selectAll('img:not([alt])').forEach((node) => warnings.push(['缺少 alt', node]));
    selectAll('svg:not([aria-label]):not([aria-labelledby])').forEach((node) => warnings.push(['SVG 缺少无障碍标签', node]));
    selectAll('.table-wrapper table:not(:has(caption))').forEach((node) => warnings.push(['表格缺少 caption', node]));
    const ids = new Set();
    selectAll('[id]').forEach((node) => {
      if (ids.has(node.id)) warnings.push([`重复 id: ${node.id}`, node]);
      ids.add(node.id);
    });
    warnings.forEach(([message, node]) => console.warn(`[OncoAtlas QA] ${message}`, node));
  }

  ready(() => {
    initTheme();
    initFontControls();
    initSidebar();
    initReadingProgress();
    initToc();
    initSearch();
    initTables();
    initTerms();
    initHighlighting();
    initBackToTop();
    initGlossary();
    initHomeFilters();
    initDisclosureButtons();
    initExternalLinks();
    initAccessibleFigures();
    initLazyCharts();
    validatePageStructure();
  });

  window.OncoAtlas = Object.freeze({
    registerChart,
    createChart,
    chartDefaults,
    cssColor,
    initTables,
    chapterManifest,
    version: '2025.Q2'
  });
})();
