# OncoAtlas — 癌症治疗前沿知识数据库

OncoAtlas 是一个 Markdown 版癌症治疗前沿知识数据库，面向具有生命科学本科基础的研究生、药物研发从业者和转化医学学习者。内容覆盖肿瘤生物学、免疫治疗、CAR-T、ADC、双抗、小分子靶向、蛋白降解、基因/细胞治疗、放射性药物、TME、新抗原疫苗、药企管线、FDA监管和市场格局。

## 阅读入口

- [总目录 Index](oncology-database/index.md)
- [药物数据库 JSON](oncology-database/data/drugs.json)
- [管线数据库 JSON](oncology-database/data/pipelines.json)
- [公司数据库 JSON](oncology-database/data/companies.json)
- [FDA 批准记录 JSON](oncology-database/data/fda_approvals.json)
- [术语缩写表 JSON](oncology-database/data/terms.json)

## 有链接的章节目录 Index

| 章号 | 章节 | 主要内容 |
| --- | --- | --- |
| 00 | [总览与导言](oncology-database/chapters/00-overview.md) | 癌症全球负担数据；现代癌症治疗体系框架；本数据库使用指南 |
| 01 | [癌症生物学基础](oncology-database/chapters/01-cancer-biology.md) | 癌症的分子基础；癌症的标志性特征；肿瘤异质性 |
| 02 | [肿瘤免疫治疗——免疫检查点抑制剂](oncology-database/chapters/02-immunotherapy.md) | 免疫检查点的生物学原理；已批准的免疫检查点抑制剂；临床应用与疗效 |
| 03 | [CAR-T细胞治疗](oncology-database/chapters/03-car-t.md) | CAR-T的结构与基本原理；CAR-T制备流程；已批准CAR-T产品 |
| 04 | [抗体药物偶联物（ADC）](oncology-database/chapters/04-adc.md) | ADC的结构与作用机制；连接子技术的演进；毒素载荷技术 |
| 05 | [双特异性抗体](oncology-database/chapters/05-bispecific.md) | 双特异性抗体的设计原理；T细胞衔接器；NK与髓系细胞衔接器 |
| 06 | [靶向小分子治疗](oncology-database/chapters/06-targeted-therapy.md) | 激酶抑制剂的代际演变；KRAS靶向突破；靶点—药物—适应症全景 |
| 07 | [蛋白降解技术（PROTAC与分子胶）](oncology-database/chapters/07-protac-deg.md) | PROTAC的原理与设计；主要E3连接酶；分子胶降解剂 |
| 08 | [基因治疗与细胞治疗](oncology-database/chapters/08-gene-therapy.md) | 基因治疗的递送系统；CRISPR在肿瘤学中的应用；TCR-T疗法 |
| 09 | [放射性药物治疗](oncology-database/chapters/09-radiopharm.md) | 放射性药物的基本原理；已批准放射性药物；PSMA靶向治疗革命 |
| 10 | [肿瘤微环境干预](oncology-database/chapters/10-tumor-microenv.md) | TME的组成与功能；巨噬细胞靶向策略；髓系来源抑制细胞 |
| 11 | [新抗原与个性化癌症疫苗](oncology-database/chapters/11-neoantigen.md) | 新抗原的生成与识别；个性化疫苗设计流程；临床里程碑与关键数据 |
| 12 | [主要药企管线与战略布局](oncology-database/chapters/12-pipelines.md) | 免疫肿瘤学巨头；ADC专注公司；CAR-T与细胞治疗格局 |
| 13 | [FDA政策与监管框架](oncology-database/chapters/13-fda-policy.md) | 肿瘤药物加速审批机制；加速批准争议与改革；生物标志物与伴随诊断政策 |
| 14 | [前沿探索路线](oncology-database/chapters/14-emerging-routes.md) | 人工智能与药物发现；合成致死与DDR靶点；表观遗传学靶向治疗 |
| 15 | [市场格局与投资动态](oncology-database/chapters/15-market-landscape.md) | 全球市场规模与增长；重大并购交易；授权合作热点 |

## 仓库结构

```text
oncology-database/
├── index.md
├── README.md
├── chapters/
│   ├── 00-overview.md
│   └── ... 15-market-landscape.md
├── data/
│   ├── drugs.json
│   ├── pipelines.json
│   ├── companies.json
│   ├── fda_approvals.json
│   └── terms.json
└── assets/
    ├── logo.svg
    └── favicon.svg
```

## 使用说明

- 直接在 GitHub 中打开 `README.md` 或 `index.md` 即可阅读。
- 每章为独立 Markdown 文件，便于复制、批注和版本比较。
- 原交互图表已转写为“图示说明”文字块；原 HTML 表格已转换为 Markdown 表格。
- JSON 文件保留结构化数据用途，可用于后续重新生成网站或接入检索系统。

## 数据口径与责任边界

- 内容版本：2025.Q2；部分监管和市场章节含 2025 全年回顾补充。
- 药物、临床试验、FDA 批准和公司信息优先参考 FDA、ClinicalTrials.gov、公司公告、NEJM、Nature、Lancet、JCO 等来源。
- 本项目仅供教育和研究使用，不构成医疗建议、投资建议或监管意见。

## 许可证

MIT License。
