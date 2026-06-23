import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const chapters = [
  ['00','overview','总览与导言',['癌症全球负担数据','现代癌症治疗体系框架','本数据库使用指南','特色可视化：治疗方法时间轴','证据等级与数据边界']],
  ['01','cancer-biology','癌症生物学基础',['癌症的分子基础','癌症的标志性特征','肿瘤异质性','肿瘤免疫逃逸机制','癌症分子分型体系']],
  ['02','immunotherapy','肿瘤免疫治疗——免疫检查点抑制剂',['免疫检查点的生物学原理','已批准的免疫检查点抑制剂','临床应用与疗效','生物标志物与患者选择','免疫相关不良反应','联合治疗与耐药机制']],
  ['03','car-t','CAR-T细胞治疗',['CAR-T的结构与基本原理','CAR-T制备流程','已批准CAR-T产品','实体瘤中的挑战与创新','CRS与ICANS毒性管理','下一代与通用型CAR-T']],
  ['04','adc','抗体药物偶联物（ADC）',['ADC的结构与作用机制','连接子技术的演进','毒素载荷技术','已批准ADC药物','差异化策略与竞争格局','毒性与耐药机制','双靶点与下一代ADC']],
  ['05','bispecific','双特异性抗体',['双特异性抗体的设计原理','T细胞衔接器','NK与髓系细胞衔接器','双通路阻断型双抗','已批准双特异性抗体','毒性与开发挑战']],
  ['06','targeted-therapy','靶向小分子治疗',['激酶抑制剂的代际演变','KRAS靶向突破','靶点—药物—适应症全景','CDK4/6抑制剂','BCL-2抑制剂与BH3模拟物','耐药机制与监测策略']],
  ['07','protac-deg','蛋白降解技术（PROTAC与分子胶）',['PROTAC的原理与设计','主要E3连接酶','分子胶降解剂','临床管线与主要公司','局限与下一代技术']],
  ['08','gene-therapy','基因治疗与细胞治疗',['基因治疗的递送系统','CRISPR在肿瘤学中的应用','TCR-T疗法','TIL疗法','溶瘤病毒','mRNA疗法的扩展']],
  ['09','radiopharm','放射性药物治疗',['放射性药物的基本原理','已批准放射性药物','PSMA靶向治疗革命','α放射性核素治疗','临床管线与公司布局']],
  ['10','tumor-microenv','肿瘤微环境干预',['TME的组成与功能','巨噬细胞靶向策略','髓系来源抑制细胞','肿瘤相关成纤维细胞','TME代谢干预','Cold-to-Hot组合策略']],
  ['11','neoantigen','新抗原与个性化癌症疫苗',['新抗原的生成与识别','个性化疫苗设计流程','临床里程碑与关键数据','共享肿瘤抗原','疫苗与免疫治疗联合']],
  ['12','pipelines','主要药企管线与战略布局',['免疫肿瘤学巨头','ADC专注公司','CAR-T与细胞治疗格局','中国药企的崛起','管线与并购可视化']],
  ['13','fda-policy','FDA政策与监管框架',['肿瘤药物加速审批机制','加速批准争议与改革','生物标志物与伴随诊断政策','细胞与基因治疗监管','2024—2025年批准回顾']],
  ['14','emerging-routes','前沿探索路线',['人工智能与药物发现','合成致死与DDR靶点','表观遗传学靶向治疗','肿瘤代谢靶向治疗','RNA靶向新路线','NK细胞与先天免疫']],
  ['15','market-landscape','市场格局与投资动态',['全球市场规模与增长','重大并购交易','授权合作热点','风险投资与融资趋势','定价支付与市场准入']]
];

const filename = ([num, slug]) => `${num}-${slug}.html`;
const nav = (active) => chapters.map(([num,, title]) => `<li class="chapter-item${num === active ? ' active' : ''}" data-chapter="${num}"><a href="${filename(chapters.find(c => c[0] === num))}" class="chapter-link"${num === active ? ' aria-current="page"' : ''}><span class="chapter-num">${num}</span><span class="chapter-title">${title}</span></a></li>`).join('');
const pagination = (index) => {
  const prev = chapters[index - 1];
  const next = chapters[index + 1];
  return `<nav class="chapter-pagination" aria-label="章节翻页">${prev ? `<a class="prev" href="${filename(prev)}"><span class="pagination-label">← 上一章</span><strong>${prev[0]} · ${prev[2]}</strong></a>` : '<span></span>'}${next ? `<a class="next" href="${filename(next)}"><span class="pagination-label">下一章 →</span><strong>${next[0]} · ${next[2]}</strong></a>` : '<span></span>'}</nav>`;
};

for (const [index, chapter] of chapters.entries()) {
  const [num,, title, sections] = chapter;
  let sectionHtml;
  try {
    sectionHtml = await readFile(resolve(root, 'chapter-content', `${num}-${chapter[1]}.html`), 'utf8');
  } catch {
    sectionHtml = sections.map((section, sectionIndex) => `<section id="section-${sectionIndex + 1}" data-search-entry data-terms="${section}"><h2>${num}.${sectionIndex + 1} ${section}</h2><div class="evidence-note"><span class="box-label">Editorial status</span><p>本节已建立正式内容结构，研究证据、数据表和可视化将按章节顺序完成校验后写入；该说明不计入正式内容字数。</p></div></section>`).join('\n');
  }
  const referencesHtml = sectionHtml.includes('class="references"') ? '' : '<section class="references"><h2>主要参考来源</h2><ol><li>FDA. Oncology approval notifications. 2025.</li><li>WHO/IARC. Global Cancer Observatory. 2024.</li><li>National Cancer Institute. Cancer treatment resources. 2025.</li><li>Nature Reviews Cancer. Topic reviews and perspectives.</li><li>New England Journal of Medicine. Pivotal oncology trials.</li></ol></section>';
  const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="OncoAtlas 第${num}章：${title}"><title>${title} | OncoAtlas</title><link rel="icon" href="../assets/favicon.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="../style.css"><script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js" defer></script><script src="https://d3js.org/d3.v7.min.js" defer></script><script src="https://unpkg.com/lunr/lunr.js" defer></script><script src="../main.js" defer></script></head>
<body data-root=".." data-chapter="${num}"><a class="skip-link" href="#main">跳到主要内容</a><div class="reading-progress" id="reading-progress" role="progressbar" aria-label="阅读进度" aria-valuemin="0" aria-valuemax="100"></div><div class="layout"><nav class="sidebar" id="sidebar" aria-label="章节目录"><div class="sidebar-header"><a href="../index.html" class="sidebar-logo"><img src="../assets/logo.svg" alt=""><span>OncoAtlas</span></a><button class="sidebar-toggle" type="button" aria-label="折叠侧边栏">←</button></div><div class="sidebar-search"><label class="sr-only" for="chapter-search">搜索章节</label><input type="search" placeholder="搜索章节…" id="chapter-search"></div><ul class="sidebar-chapters">${nav(num)}</ul><div class="sidebar-footer"><span class="sidebar-progress">阅读进度: 0/16章</span><div class="sidebar-progress-meter"><span></span></div></div></nav><header class="topbar"><button class="icon-button mobile-nav-toggle" type="button" aria-controls="sidebar" aria-expanded="false" aria-label="打开章节目录">☰</button><a class="topbar-brand" href="../index.html"><img src="../assets/logo.svg" alt=""><span>OncoAtlas</span></a><button class="topbar-search" type="button" data-action="search"><span>⌕</span><span class="topbar-search-label">全局搜索…</span><kbd>⌘K</kbd></button><div class="topbar-actions"><div class="font-controls"><button type="button" data-font-adjust="-1" aria-label="减小字号">A−</button><span data-font-size-output class="sr-only">16px</span><button type="button" data-font-adjust="1" aria-label="增大字号">A+</button></div><button class="icon-button" type="button" data-action="theme" aria-label="切换主题">◐</button></div></header><main class="main-content" id="main"><article class="article"><header class="article-header"><span class="chapter-kicker">Chapter ${num}</span><h1>${title}</h1><p class="article-subtitle">OncoAtlas 癌症治疗前沿知识数据库 · 面向生命科学研究生的机制—临床—管线一体化章节。</p><div class="article-meta"><span>内容版本：2025.Q2</span><span>证据截止：2025-06-30</span></div></header><aside class="learning-objectives"><span class="box-label">Learning objectives</span><ul>${sections.slice(0,5).map(s => `<li>理解${s}的核心概念、证据边界与临床转化逻辑。</li>`).join('')}</ul></aside>${sectionHtml}${referencesHtml}<div class="chapter-version"><span>内容版本：2025.Q2</span><span>下次更新建议：2025.Q4（需复核FDA标签与临床试验状态）</span></div>${pagination(index)}</article></main><aside class="right-toc" aria-label="本页目录"><p class="toc-title">本章目录</p><nav id="article-toc"></nav></aside></div><div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="全文搜索" aria-hidden="true"><div class="modal-panel"><div class="modal-header"><label class="sr-only" for="global-search-input">搜索</label><input class="modal-search-input" id="global-search-input" type="search" placeholder="药物、靶点、公司或术语…"><button class="modal-close" type="button" data-action="close-search" aria-label="关闭">Esc</button></div><div class="search-results" id="search-results"></div></div></div><div class="highlight-toolbar" id="highlight-toolbar" role="toolbar" aria-label="文本高亮"><button class="highlight-color user-highlight-yellow" data-highlight-color="yellow" aria-label="黄色高亮"></button><button class="highlight-color user-highlight-green" data-highlight-color="green" aria-label="绿色高亮"></button><button class="highlight-color user-highlight-blue" data-highlight-color="blue" aria-label="蓝色高亮"></button></div><button class="back-to-top" id="back-to-top" type="button" aria-label="返回顶部">↑</button></body></html>`;
  await writeFile(resolve(root, 'chapters', filename(chapter)), html);
}

console.log(`Generated ${chapters.length} chapter shells.`);
