# OncoAtlas — 癌症治疗前沿知识数据库

OncoAtlas 是一个 Markdown 版癌症治疗前沿知识数据库，面向具有生命科学本科基础的研究生、药物研发从业者和转化医学学习者。内容覆盖肿瘤生物学、免疫治疗、CAR-T、ADC、双抗、小分子靶向、蛋白降解、基因/细胞治疗、放射性药物、TME、新抗原疫苗、药企管线、FDA监管和市场格局。

## 阅读入口

- [总目录 Index](index.md)
- [数据目录](data/README.md)
- [药物数据库](data/drugs.md)
- [管线数据库](data/pipelines.md)
- [公司数据库](data/companies.md)
- [FDA 批准记录](data/fda_approvals.md)
- [术语缩写表](data/terms.md)

## 有链接的章节目录 Index

| 章号 | 章节 | 主要内容 |
| --- | --- | --- |
| 00 | [总览与导言](chapters/00-overview.md) | 癌症全球负担数据；现代癌症治疗体系框架；本数据库使用指南 |
| 01 | [癌症生物学基础](chapters/01-cancer-biology.md) | 癌症的分子基础；癌症的标志性特征；肿瘤异质性 |
| 02 | [肿瘤免疫治疗——免疫检查点抑制剂](chapters/02-immunotherapy.md) | 免疫检查点的生物学原理；已批准的免疫检查点抑制剂；临床应用与疗效 |
| 03 | [CAR-T细胞治疗](chapters/03-car-t.md) | CAR-T的结构与基本原理；CAR-T制备流程；已批准CAR-T产品 |
| 04 | [抗体药物偶联物（ADC）](chapters/04-adc.md) | ADC的结构与作用机制；连接子技术的演进；毒素载荷技术 |
| 05 | [双特异性抗体](chapters/05-bispecific.md) | 双特异性抗体的设计原理；T细胞衔接器；NK与髓系细胞衔接器 |
| 06 | [靶向小分子治疗](chapters/06-targeted-therapy.md) | 激酶抑制剂的代际演变；KRAS靶向突破；靶点—药物—适应症全景 |
| 07 | [蛋白降解技术（PROTAC与分子胶）](chapters/07-protac-deg.md) | PROTAC的原理与设计；主要E3连接酶；分子胶降解剂 |
| 08 | [基因治疗与细胞治疗](chapters/08-gene-therapy.md) | 基因治疗的递送系统；CRISPR在肿瘤学中的应用；TCR-T疗法 |
| 09 | [放射性药物治疗](chapters/09-radiopharm.md) | 放射性药物的基本原理；已批准放射性药物；PSMA靶向治疗革命 |
| 10 | [肿瘤微环境干预](chapters/10-tumor-microenv.md) | TME的组成与功能；巨噬细胞靶向策略；髓系来源抑制细胞 |
| 11 | [新抗原与个性化癌症疫苗](chapters/11-neoantigen.md) | 新抗原的生成与识别；个性化疫苗设计流程；临床里程碑与关键数据 |
| 12 | [主要药企管线与战略布局](chapters/12-pipelines.md) | 免疫肿瘤学巨头；ADC专注公司；CAR-T与细胞治疗格局 |
| 13 | [FDA政策与监管框架](chapters/13-fda-policy.md) | 肿瘤药物加速审批机制；加速批准争议与改革；生物标志物与伴随诊断政策 |
| 14 | [前沿探索路线](chapters/14-emerging-routes.md) | 人工智能与药物发现；合成致死与DDR靶点；表观遗传学靶向治疗 |
| 15 | [市场格局与投资动态](chapters/15-market-landscape.md) | 全球市场规模与增长；重大并购交易；授权合作热点 |

## 仓库结构

```text
oncology-database/
├── index.md
├── README.md
├── chapters/
│   ├── 00-overview.md
│   └── ... 15-market-landscape.md
├── data/
│   ├── README.md
│   ├── drugs.md
│   ├── pipelines.md
│   ├── companies.md
│   ├── fda_approvals.md
│   └── terms.md
└── assets/
    ├── logo.svg
    └── favicon.svg
```

## 使用说明

- 直接在 GitHub 中打开 `README.md` 或 `index.md` 即可阅读。
- 每章为独立 Markdown 文件，便于复制、批注和版本比较。
- 原交互图表已转写为“图示说明”文字块；原 HTML 表格已转换为 Markdown 表格。
- 数据文件已转换为 Markdown 表格，便于在 GitHub 中直接浏览、搜索和引用。

## 如何刷新/更新整个数据库

建议每次更新按“先更新数据，再更新章节，最后校验链接”的顺序执行，避免章节正文和数据表记录不一致。

1. 从仓库根目录拉取最新状态：

   ```bash
   git pull origin main
   ```

2. 更新数据表文件：

   - `data/drugs.md`：新增或修订药物、靶点、适应症、关键试验和章节引用。
   - `data/pipelines.md`：更新临床阶段、试验编号、预计读出时间和合作方。
   - `data/companies.md`：更新公司管线、并购、授权和战略布局。
   - `data/fda_approvals.md`：更新 FDA 批准、撤销、适应症扩展和标签变化。
   - `data/terms.md`：补充新术语、缩写和中文解释。
   - `data/README.md`：如新增或删除数据表，需要同步更新数据目录。

3. 更新 Markdown 正文：

   - 总目录：`index.md`
   - 章节正文：`chapters/*.md`
   - 如果新增章节，需同步更新仓库根目录 `README.md`、本文件和 `index.md` 中的目录链接。

4. 回到仓库根目录执行校验：

   ```bash
   python3 - <<'PY'
   from pathlib import Path
   import re, sys

   files = [Path("README.md"), *Path("oncology-database").rglob("*.md")]
   required_data = [
       Path("oncology-database/data/drugs.md"),
       Path("oncology-database/data/pipelines.md"),
       Path("oncology-database/data/companies.md"),
       Path("oncology-database/data/fda_approvals.md"),
       Path("oncology-database/data/terms.md"),
   ]
   broken = []
   missing = [str(path) for path in required_data if not path.exists()]
   malformed = []
   for path in required_data:
       if path.exists():
           text = path.read_text(encoding="utf-8")
           if "| --- |" not in text:
               malformed.append(str(path))
   for file in files:
       text = file.read_text(encoding="utf-8")
       for match in re.finditer(r"\[[^\]]+\]\(([^)]+)\)", text):
           target = match.group(1).strip()
           if target.startswith(("http://", "https://", "mailto:", "#")):
               continue
           path = target.split("#", 1)[0]
           if path and not (file.parent / path).resolve().exists():
               broken.append(f"{file}: {target}")

   print(f"checked {len(files)} markdown files; broken relative links: {len(broken)}")
   print(f"required data files missing: {len(missing)}")
   print(f"data tables missing markdown separators: {len(malformed)}")
   for item in missing:
       print(f"missing data file: {item}")
   for item in malformed:
       print(f"malformed data table: {item}")
   for item in broken:
       print(item)
   sys.exit(1 if broken or missing or malformed else 0)
   PY
   ```

5. 提交并发布：

   ```bash
   git status -sb
   git add README.md oncology-database
   git commit -m "Refresh OncoAtlas database"
   git push origin main
   ```

更新原则：所有新增临床数据必须写明来源和数据截止时间；不确定信息使用 `[待核实]` 标注；涉及 FDA 批准、适应症、价格、公司交易和临床阶段的信息，应优先回到 FDA、ClinicalTrials.gov、公司公告和同行评议论文复核。

## 数据口径与责任边界

- 内容版本：2025.Q2；部分监管和市场章节含 2025 全年回顾补充。
- 药物、临床试验、FDA 批准和公司信息优先参考 FDA、ClinicalTrials.gov、公司公告、NEJM、Nature、Lancet、JCO 等来源。
- 本项目仅供教育和研究使用，不构成医疗建议、投资建议或监管意见。

## 许可证

MIT License。
