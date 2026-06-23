# OncoAtlas — 癌症治疗前沿知识数据库

OncoAtlas 是一个可直接部署到 GitHub Pages 的静态中文知识数据库，面向具有生命科学本科基础的研究生和研发从业者，系统整理现代肿瘤治疗的机制、临床证据、药企管线、FDA监管和市场格局。

内容版本：2025.Q2；部分FDA与市场章节包含2025全年回顾补充，并在正文中标注口径。

## 已交付内容

- 主页：`index.html`
- 章节：`chapters/00-overview.html` 至 `chapters/15-market-landscape.html` 共16章
- 样式：`style.css`，包含暗/亮主题、响应式布局、表格、图表、打印样式
- 交互：`main.js`，包含全文搜索、表格排序/筛选/导出、TOC、阅读进度、主题切换和术语提示
- 数据：`data/drugs.json`、`data/pipelines.json`、`data/companies.json`、`data/fda_approvals.json`
- 术语：`data/terms.json`
- 组件：`components/nav.html`、`components/search.html`、`components/drug-card.html`
- 资产：`assets/logo.svg`、`assets/favicon.svg`

## 内容框架

1. 项目总览与导言
2. 癌症生物学基础
3. 肿瘤免疫治疗
4. CAR-T细胞治疗
5. 抗体药物偶联物（ADC）
6. 双特异性抗体
7. 靶向小分子治疗
8. 蛋白降解技术（PROTAC/分子胶）
9. 基因治疗与细胞治疗
10. 放射性药物治疗
11. 肿瘤微环境干预
12. 新抗原与个性化疫苗
13. 主要药企管线与布局
14. FDA政策与监管框架
15. 前沿探索路线
16. 市场格局与投资动态

## 本地运行

这是纯静态网站，不需要构建步骤。

推荐方式：

1. 用 VS Code 打开仓库。
2. 安装 Live Server 扩展。
3. 右键 `oncology-database/index.html`，选择 “Open with Live Server”。

也可以使用 Python：

```bash
cd oncology-database
python3 -m http.server 8000
```

然后访问 `http://127.0.0.1:8000/`。

## GitHub Pages 部署

1. 将仓库推送到 GitHub。
2. 进入 GitHub 仓库 Settings → Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择主分支，目录选择 `/root`。
5. 站点入口为 `oncology-database/index.html`。

如果希望根路径直接打开 OncoAtlas，可将 `oncology-database/` 内文件移动到仓库根目录，或在根目录添加跳转页。

## 数据口径与引用

- 药物、管线、公司和FDA批准信息优先采用 FDA、ClinicalTrials.gov、公司年报/公告、NEJM、Nature、Lancet、JCO 等来源。
- 快速变化或无法完全核实的数据以 `[待核实]` 标注。
- 市场收入、交易金额和融资趋势按公开披露近似整理，潜在交易总额不等于已支付现金。
- 本站为教育和研究用途，不构成医疗建议、投资建议或监管意见。

## 交互功能

- `Ctrl+K` / `Cmd+K` 打开全局搜索。
- 表格支持筛选、点击表头排序、CSV导出和行选中。
- 图表使用 Chart.js 和 D3.js 按视口懒加载。
- 侧边栏章节导航、右侧文章目录、顶部阅读进度条和底部章节跳转均为客户端实现。
- 术语提示从 `data/terms.json` 按需读取。

## 无障碍与兼容性

- SVG图示包含 `role="img"` 与 `aria-label`。
- 数据表包含 `caption`、`th` 与可键盘访问控件。
- 图表配有 `figcaption`，避免只依赖颜色传达信息。
- 打印样式会隐藏导航与交互组件，优化正文和表格分页。
- 所有路径使用相对路径，兼容 GitHub Pages 静态托管。

## 贡献指南

1. 新增内容时优先更新对应 `chapter-content/*.html`，再运行 `node tools/generate-chapter-shells.mjs` 生成章节页。
2. 新增药物或公司请同步更新 `data/*.json`，保持 `id` 唯一。
3. 新增图表需提供文字说明和来源，并使用站点CSS变量。
4. 新增表格需使用 `.table-wrapper` 模板，以自动获得排序、筛选和导出功能。
5. 所有临床数据需写明试验名称、终点和来源；不确定项标注 `[待核实]`。

## 许可证

MIT License。

本项目内容仅供教育与研究使用。引用第三方数据和文献时请遵守原始来源许可和版权要求。
