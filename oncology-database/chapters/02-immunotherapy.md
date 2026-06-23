# 第02章：肿瘤免疫治疗——免疫检查点抑制剂

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2025.Q2 · 证据截止：2025-06-30。

## 学习目标

- 理解免疫检查点的生物学原理的核心概念、证据边界与临床转化逻辑。
- 理解已批准的免疫检查点抑制剂的核心概念、证据边界与临床转化逻辑。
- 理解临床应用与疗效的核心概念、证据边界与临床转化逻辑。
- 理解生物标志物与患者选择的核心概念、证据边界与临床转化逻辑。
- 理解免疫相关不良反应的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：癌症生物学基础](01-cancer-biology.md) · [下一章：CAR-T细胞治疗](03-car-t.md)

## 02.1 免疫检查点的生物学原理：激活阈值与外周耐受

T细胞并不会因为“看到异常蛋白”就自动完成杀伤。初始T细胞的充分激活至少需要两类信号：第一信号来自T细胞受体（T-cell Receptor，**TCR**）识别抗原呈递细胞表面的肽–主要组织相容性复合体；第二信号来自CD28与CD80/CD86结合形成的共刺激。TCR提供抗原特异性，CD28通过PI3K–AKT、NF-κB和代谢重编程提高增殖与存活。若只有第一信号而缺少共刺激，细胞可能进入无反应；若促炎细胞因子参与，则进一步决定效应和记忆分化。这套多信号门控保护机体免受自体反应，却也给肿瘤留下操纵空间。

细胞毒性T淋巴细胞相关蛋白4（Cytotoxic T-Lymphocyte-Associated Protein 4，**CTLA-4**）与CD28共享CD80/CD86配体，但亲和力和聚集能力更高。它在T细胞启动阶段限制共刺激，并可由调节性T细胞通过跨胞吞噬减少抗原呈递细胞表面的配体。伊匹木单抗（Ipilimumab，商品名Yervoy，BMS）阻断CTLA-4后扩大T细胞克隆谱，但也削弱广泛的外周耐受，因此结肠炎、垂体炎等免疫相关不良反应较突出。

程序性细胞死亡蛋白1（Programmed Cell Death Protein 1，**PD-1**）更多作用于外周组织和持续抗原暴露环境。PD-1与PD-L1/PD-L2结合后，其ITIM/ITSM基序招募SHP2等磷酸酶，降低TCR和CD28近端磷酸化，抑制细胞因子、增殖与细胞毒颗粒释放。肿瘤可由致癌信号内源性上调PD-L1，也可在IFN-γ压力下适应性上调。帕博利珠单抗（Pembrolizumab，商品名Keytruda，MSD）和纳武利尤单抗（Nivolumab，商品名Opdivo，BMS）阻断PD-1；阿替利珠单抗、度伐利尤单抗等阻断PD-L1。两类药都依赖既存抗肿瘤免疫，不能替代抗原呈递或T细胞浸润。

LAG-3与MHC-II及FGL1等配体相关，常与PD-1共同标记慢性刺激下的耗竭T细胞；瑞拉利单抗与纳武利尤单抗固定组合成为首个获批LAG-3路径。TIM-3可结合Galectin-9、CEACAM1等，TIGIT与CD226竞争CD155/CD112，VISTA在髓系丰富、酸性微环境中可能更重要，B7-H3则兼具免疫调节与肿瘤高表达特征。新靶点的关键不是“再找到一个刹车”，而是证明其在特定患者中构成非冗余抑制，并建立可预测组合获益的标志物。

> **图示：T细胞—肿瘤细胞—抗原呈递细胞的检查点网络**
> 绿色/蓝色实线表示激活，红色虚线和终止符表示抑制。CTLA-4偏向启动阶段，PD-1偏向外周效应阶段；真实生物学存在重叠。

> **关键概念：** 检查点阻断是“解除抑制”，不是向肿瘤递送直接毒性。若肿瘤缺失抗原、MHC-I、IFN信号或T细胞被物理排斥，即使药物完全占据PD-1也可能没有临床反应。

机制说明了药物为何可能有效，批准标签则规定它在什么癌种、线次、组合和标志物条件下被证明收益风险可接受。

## 02.2 已批准免疫检查点抑制剂全览

截至2025年第二季度，PD-1/PD-L1与CTLA-4药物已经覆盖数十个适应症，但“同靶点”不等于标签可互换。抗体亚型、Fc设计、剂量、联合伙伴和证据包不同；同一药物也可能在某癌种要求PD-L1阈值，在另一癌种不要求。下表将美国FDA状态和其他主要监管机构状态分开，避免把中国或欧盟批准误写成FDA批准。具体用药必须以最新版标签为准。

### 表2-1：主要已批准ICI药物全览

**二十二个已获至少一个主要监管机构批准的免疫检查点产品**

| 药物/商品名/代码 | 靶点 | 公司 | 首次批准 | 监管状态 | 代表适应症 | 标志物/CDx | 关键试验 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ipilimumab / Yervoy / MDX-010 | CTLA-4 | BMS | 2011 | FDA | 黑色素瘤；多癌种联合 | 依组合适应症 | MDX010-20 |
| Pembrolizumab / Keytruda / MK-3475 | PD-1 | MSD | 2014 | FDA | NSCLC、黑色素瘤、HNSCC、泛癌种等 | PD-L1、MSI/dMMR、TMB依标签 | KEYNOTE系列 |
| Nivolumab / Opdivo / BMS-936558 | PD-1 | BMS | 2014 | FDA | 黑色素瘤、NSCLC、RCC、胃癌等 | 依适应症 | CheckMate系列 |
| Atezolizumab / Tecentriq / MPDL3280A | PD-L1 | Roche | 2016 | FDA | NSCLC、SCLC、HCC等 | 部分标签用SP142/SP263 | IMpower/IMbrave |
| Avelumab / Bavencio / MSB0010718C | PD-L1 | Merck KGaA/Pfizer | 2017 | FDA | MCC、尿路上皮癌维持、RCC联合 | 通常无强制CDx | JAVELIN |
| Durvalumab / Imfinzi / MEDI4736 | PD-L1 | AstraZeneca | 2017 | FDA | III期NSCLC、SCLC、胆道癌、HCC | 依适应症 | PACIFIC/CASPIAN/TOPAZ-1 |
| Cemiplimab / Libtayo / REGN2810 | PD-1 | Regeneron | 2018 | FDA | 皮肤鳞癌、基底细胞癌、NSCLC | NSCLC单药按PD-L1 | EMPOWER |
| Dostarlimab / Jemperli / TSR-042 | PD-1 | GSK | 2021 | FDA | 子宫内膜癌、dMMR实体瘤 | dMMR/MSI-H依标签 | GARNET/RUBY |
| Retifanlimab / Zynyz / INCMGA00012 | PD-1 | Incyte | 2023 | FDA | MCC、肛管鳞癌 | 通常无强制CDx | POD1UM |
| Toripalimab / Loqtorzi / JS001 | PD-1 | Junshi/Coherus | 2018/2023 | FDA 2023 | 鼻咽癌 | 无强制PD-L1 | JUPITER-02/POLARIS-02 |
| Tislelizumab / Tevimbra / BGB-A317 | PD-1 | BeiGene | 2019/2024 | FDA 2024 | 食管鳞癌；全球多标签 | 依标签 | RATIONALE-302 |
| Penpulimab / AK105 | PD-1 | Akeso | 2021/2025 | FDA 2025 | 鼻咽癌 | 无强制PD-L1 | AK105-304/202 |
| Cosibelimab / Unloxcyt / CK-301 | PD-L1 | Checkpoint | 2024 | FDA | 晚期皮肤鳞癌 | 无强制CDx | CK-301-101 |
| Nivolumab+Relatlimab / Opdualag | PD-1+LAG-3 | BMS | 2022 | FDA | 不可切除/转移性黑色素瘤 | 无强制LAG-3检测 | RELATIVITY-047 |
| Tremelimumab / Imjudo | CTLA-4 | AstraZeneca | 2022 | FDA组合 | HCC与NSCLC组合 | 无强制CDx | HIMALAYA/POSEIDON |
| Sintilimab / Tyvyt / IBI308 | PD-1 | Innovent/Lilly | 2018 | NMPA | cHL、NSCLC、HCC等 | 依中国标签 | ORIENT系列 |
| Camrelizumab / AiRuiKa / SHR-1210 | PD-1 | Hengrui | 2019 | NMPA | cHL、HCC、食管癌等 | 依中国标签 | ESCORT系列 |
| Serplulimab / HANSIZHUANG / HLX10 | PD-1 | Henlius | 2022 | NMPA | MSI-H实体瘤、SCLC等 | MSI-H依标签 | ASTRUM-005 |
| Sugemalimab / Cejemly / CS1001 | PD-L1 | CStone | 2021 | NMPA/EMA | NSCLC等 | 依地区标签 | GEMSTONE-301/302 |
| Envafolimab / 恩维达 / KN035 | PD-L1 | Alphamab/3D | 2021 | NMPA | MSI-H/dMMR实体瘤 | MSI-H/dMMR | KN035-CN-006 |
| Zimberelimab / 誉妥 / GLS-010 | PD-1 | Gloria/Arcus | 2021 | NMPA | 复发/难治cHL | 无强制CDx | 中国注册研究 |
| Cadonilimab / 开坦尼 / AK104 | PD-1+CTLA-4 | Akeso | 2022 | NMPA | 复发/转移宫颈癌 | 依中国标签 | COMPASSION-13 |

> **使用边界：** 表中“首次批准”可指产品在任一主要市场首次获批；斜杠后的年份表示FDA年份。适应症经过压缩，不能替代处方信息。皮下制剂和固定组合并未重复计入独立分子数量。

批准列表展示广度，但临床决策仍要回到具体癌种、治疗线次和随机对照证据。

## 02.3 临床应用与疗效：癌种、线次与组合决定解释

非小细胞肺癌（Non-Small Cell Lung Cancer，**NSCLC**）是ICI分层最复杂的场景之一。无EGFR/ALK等可操作驱动时，PD-L1 TPS≥50%的患者可考虑PD-1/PD-L1单药，但快速进展、高肿瘤负荷或较低PD-L1时常采用化疗联合。KEYNOTE-024在PD-L1 TPS≥50%人群建立帕博利珠单抗单药一线地位；KEYNOTE-189在非鳞NSCLC显示帕博利珠单抗加培美曲塞/铂类相对单纯化疗改善OS与PFS。两个结论对应不同人群和治疗目标，不能仅比较ORR决定方案。

黑色素瘤对免疫治疗高度敏感，但疗效与毒性存在梯度。PD-1单药可获得持久缓解，纳武利尤单抗加伊匹木单抗提高疾病控制深度，同时显著增加3–4级不良事件；纳武利尤单抗加瑞拉利单抗在RELATIVITY-047中将独立评审PFS中位数从纳武利尤单抗组约4.6个月提高至约10.1个月，提供了另一种双检查点路径。BRAF V600突变患者还需在靶向联合与免疫治疗之间考虑症状、疾病速度和后续治疗顺序。

尿路上皮癌已经从后线ICI发展到维持和一线组合。JAVELIN Bladder 100确立含铂化疗未进展后阿维鲁单抗维持；EV-302则显示恩诺单抗维多汀（Enfortumab vedotin）联合帕博利珠单抗相对含铂化疗显著改善OS与PFS，把ADC与ICI前移到一线。头颈鳞癌中KEYNOTE-048按PD-L1 CPS分层选择帕博利珠单抗单药或联合化疗；胃/胃食管结合部癌的PD-L1阈值、HER2状态和地区标签必须同时考虑。

MSI-H/dMMR泛癌种批准改变了按器官分科的监管范式。错配修复缺陷产生大量移码新抗原，提高免疫识别概率；但反应仍受抗原呈递、器官背景和既往治疗影响。“泛癌种”表示标签跨组织，不代表所有癌种具有相同缓解率。类似地，TMB-H适应症使用特定面板和阈值，临床解释应避免把不同平台的mut/Mb直接互换。

> **图示：代表性ICI研究ORR概览**
> 数值为不同试验、线次和标志物人群的近似公开结果，只展示量级，不构成头对头比较；标签注明方案和研究。

### 表2-2：主要癌种一线ICI关键试验

**十项改变主要癌种一线或维持治疗的随机试验**

| 癌种/场景 | 试验 | 实验方案 | 对照 | 核心结果摘要 | 选择条件 |
| --- | --- | --- | --- | --- | --- |
| NSCLC高PD-L1 | KEYNOTE-024 | Pembrolizumab | 铂化疗 | OS/PFS改善 | TPS≥50%，无EGFR/ALK |
| 非鳞NSCLC | KEYNOTE-189 | Pembro+培美曲塞+铂 | 化疗 | OS HR约0.49（初次分析） | 无EGFR/ALK |
| 鳞状NSCLC | KEYNOTE-407 | Pembro+卡铂+紫杉类 | 化疗 | OS/PFS改善 | 不依赖PD-L1入组 |
| 转移黑色素瘤 | CheckMate-067 | Nivo+Ipi / Nivo | Ipi | 长期生存平台期 | 权衡联合毒性 |
| 转移黑色素瘤 | RELATIVITY-047 | Nivo+Relatlimab | Nivo | 中位PFS 10.1 vs 4.6月（初始） | 无强制LAG-3 |
| 尿路上皮癌维持 | JAVELIN Bladder 100 | Avelumab+BSC | BSC | OS改善 | 含铂化疗未进展 |
| 尿路上皮癌一线 | EV-302 | EV+Pembro | 含铂化疗 | OS/PFS显著改善 | 适用晚期UC |
| HNSCC一线 | KEYNOTE-048 | Pembro±化疗 | EXTREME | 按CPS分层OS获益 | CPS及疾病速度 |
| 胃/GEJ腺癌 | CheckMate-649 | Nivo+化疗 | 化疗 | CPS≥5人群OS/PFS改善 | HER2阴性；地区标签不同 |
| HCC一线 | IMbrave150 | Atezo+Bevacizumab | Sorafenib | OS/PFS改善 | 治疗前评估出血风险 |

> **临床/研究亮点：** **KEYNOTE-189的意义不只在高缓解率。**在转移性非鳞NSCLC中，把帕博利珠单抗加入培美曲塞和铂类，使免疫治疗无需等待高PD-L1即可服务更广人群。其代价是化疗与免疫毒性叠加，也要求先排除EGFR/ALK等更适合靶向治疗的驱动。

同一癌种内疗效差异促使研究者寻找生物标志物，但每个标志物都只是免疫循环的一段代理。

## 02.4 生物标志物与患者选择

PD-L1肿瘤比例评分（Tumor Proportion Score，**TPS**）以膜染色肿瘤细胞占全部存活肿瘤细胞的百分比计算，主要用于NSCLC等场景。联合阳性评分（Combined Positive Score，**CPS**）把PD-L1阳性的肿瘤细胞、淋巴细胞和巨噬细胞计入分子，再除以存活肿瘤细胞数并乘100，常用于HNSCC、胃癌、宫颈癌等。CPS可超过100但通常封顶100；TPS与CPS不是换算关系，同一切片也可能因克隆、平台、取样和阅片差异产生不同结果。

伴随诊断不是泛称“做了PD-L1”。Dako 22C3、28-8与Ventana SP142、SP263由不同药物项目共同开发，染色强度、细胞类型和阈值各异。实验室开发检测可能通过桥接验证支持使用，但监管标签通常指向特定平台。样本应记录原发或转移、治疗前后、固定时间和肿瘤细胞量；脱钙骨标本尤其可能影响抗原性。

TMB尝试用突变数量代理潜在新抗原，但只有部分突变表达、加工、结合HLA并被TCR识别。MSI-H/dMMR提供更清晰的致因机制，常伴随移码突变和免疫浸润，却仍可能因*B2M*、JAK1/2或HLA丢失耐药。其他候选包括POLE/POLD1致病变异、IFN-γ转录签名、TCR克隆性、肠道微生物组和循环肿瘤DNA清除。临床上最可靠的是把癌种、驱动、PD-L1、MSI/MMR、TMB和患者状态组合解释，而非追求单一万能分数。

> **图示：标志物富集与代表性缓解率关系**
> x轴为教学性“免疫富集等级”而非统一实验室值；气泡大小表示研究样本量级。图用于说明相关性与异质性并存。

### 表2-3：PD-L1检测平台与评分体系

**八种常见PD-L1检测配置**

| 平台/克隆 | 染色系统 | 主要评分 | 典型关联药物 | 常见场景 | 注意事项 |
| --- | --- | --- | --- | --- | --- |
| Dako 22C3 pharmDx | Autostainer Link 48 | TPS/CPS | Pembrolizumab | NSCLC/HNSCC/胃癌等 | 阈值依标签 |
| Dako 28-8 pharmDx | Autostainer Link 48 | TC%/CPS依癌种 | Nivolumab | NSCLC/胃癌等 | 部分为补充诊断 |
| Ventana SP142 | BenchMark | TC/IC面积 | Atezolizumab | 历史TNBC/UC等 | 肿瘤细胞染色偏低 |
| Ventana SP263 | BenchMark | TC% | Durvalumab等 | NSCLC | 与22C3较接近但非全等 |
| Ventana SP1 | BenchMark | 研究性/特定验证 | 非单一绑定 | 实验室应用 | 须本地验证 |
| Dako 73-10 | Autostainer | TC% | Avelumab开发项目 | 部分试验 | 临床使用较少 |
| E1L3N | 多平台LDT | TPS/CPS研究 | 非FDA CDx绑定 | 研究/实验室开发 | 需桥接和质控 |
| JS311等地区试剂 | 地区批准平台 | 依标签 | Toripalimab等 | 地区适应症 | 不可直接跨平台套阈值 |

患者选择提高获益概率，但免疫系统解除耐受后会产生一类不同于化疗的器官炎症毒性。

## 02.5 免疫相关不良反应：识别、分级与免疫抑制

免疫相关不良反应（immune-related Adverse Event，**irAE**）可累及几乎所有器官，常见于皮肤、胃肠、肝、肺和内分泌系统。时间窗并不固定：皮疹和甲状腺异常可较早出现，肺炎、肾炎或神经毒性可在数月后出现，停药后仍可能新发。任何新症状都应先排除感染、肿瘤进展、血栓、其他药物和基础病；把所有发热或影像变化都归因于ICI会延误抗感染或抗肿瘤处理。

CTCAE分级把症状、功能影响和干预需求转化为严重度。一般原则是1级多数可监测并继续治疗；2级常暂缓ICI，器官炎症明显时使用泼尼松约0.5–1 mg/kg/日等效剂量；3级通常停药、住院评估并给予1–2 mg/kg/日甲泼尼龙等效剂量；4级多数永久停用并实施专科抢救。这里的剂量只是框架，心肌炎、神经毒性、肺炎和内分泌危象具有不同紧急度，必须遵循器官特异指南。

激素无反应通常指足量糖皮质激素后48–72小时仍无改善，但不同器官窗口不同。结肠炎可考虑英夫利昔单抗或维多珠单抗，肝炎通常避免英夫利昔单抗并考虑麦考酚酯，肺炎可在多学科评估后升级免疫抑制。内分泌腺破坏常不可逆，治疗重点是激素替代而非长期大剂量免疫抑制。重新挑战要权衡原irAE严重度、是否完全恢复、替代疗法和既往抗肿瘤获益。

> **图示：代表性irAE发生频率与严重度**
> x轴为任意级别近似发生率，y轴为严重事件相对关注度，气泡大小表示临床监测负担；不同药物和联合方案差异显著。

### 表2-4：主要irAE分级与处理框架

**八类免疫相关不良反应的识别和处理原则**

| 器官/综合征 | 关键检查 | 1级框架 | 2级框架 | 3–4级框架 | 激素难治选项 |
| --- | --- | --- | --- | --- | --- |
| 肺炎 | CT、血氧、感染评估 | 密切监测 | 暂缓；口服激素 | 住院、静脉激素；重症永久停药 | 专科评估后MMF/IVIG等 |
| 结肠炎 | 粪便感染、钙卫蛋白、内镜 | 补液监测 | 暂缓；激素 | 住院静脉激素 | Infliximab或Vedolizumab |
| 肝炎 | AST/ALT/胆红素、病毒和影像 | 增加监测 | 暂缓；按趋势激素 | 高剂量激素 | Mycophenolate；避免Infliximab |
| 甲状腺炎 | TSH、FT4 | 监测 | 症状治疗/替代 | 危象住院 | 通常不需二线免疫抑制 |
| 垂体炎 | 皮质醇、ACTH、电解质、MRI | 按症状评估 | 激素替代 | 肾上腺危象急救 | 长期内分泌随访 |
| 心肌炎 | 肌钙蛋白、ECG、超声/MRI | 异常即升级 | 通常住院 | 立即高剂量静脉激素/监护 | 多学科强化免疫抑制 |
| 神经毒性 | 神经查体、MRI、CSF、肌电 | 低阈值会诊 | 暂缓并激素 | 住院、IVIG/血浆置换视综合征 | 神经专科方案 |
| 肾炎 | 肌酐、尿检、药物排查 | 监测 | 暂缓；激素 | 高剂量激素、肾科会诊 | MMF等个体化 |

> **使用边界：** 本表是教学框架，不构成处理医嘱。疑似心肌炎、重症肌无力/肌炎重叠、格林–巴利样综合征、严重肺炎或肾上腺危象需要紧急专科处置，不能等待常规复诊。

毒性和疗效都来自免疫网络被重新设定，因此联合治疗必须证明增加的获益足以覆盖新的风险。

## 02.6 联合治疗策略与耐药机制

ICI加化疗的理论基础包括免疫原性细胞死亡、肿瘤抗原释放、髓系抑制减少和快速减瘤。KEYNOTE-189、407等研究证明这种组合可在多个NSCLC人群改善生存，但并非所有化疗都具有同等免疫效应，剂量与激素预处理也可能改变免疫环境。临床价值来自随机证据，而不是“抗原释放”这一机制叙述本身。

ICI加抗血管生成可同时改善血管异常、降低缺氧与髓系抑制。阿替利珠单抗加贝伐珠单抗在IMbrave150中改变不可切除HCC一线治疗，但治疗前要评估食管胃底静脉曲张和出血风险。PD-1加CTLA-4从启动和效应阶段双重解除抑制，在黑色素瘤、RCC、间皮瘤和部分NSCLC形成方案；更高免疫毒性使剂量、给药次数和患者基础状态成为核心。

ICI加ADC把靶向递送的细胞毒性与免疫解除抑制连接。恩诺单抗维多汀加帕博利珠单抗在EV-302中成为尿路上皮癌代表，但联合的皮疹、周围神经病、代谢异常和免疫毒性需要分别识别。ADC造成的抗原释放是否构成普遍协同仍需逐药验证；载荷、旁观者效应、肿瘤靶点和给药时序均会改变结果。相关ADC工程原理见[第4章：ADC联合与下一代策略](04-adc.md)。

原发性耐药发生于初始即无临床反应，可能来自低抗原性、MHC-I缺失、T细胞排斥、髓系抑制、WNT/β-catenin、*STK11*/*KEAP1*背景或肠道/宿主因素。获得性耐药发生在缓解后进展，可由*B2M*或JAK1/2改变、HLA等位基因丢失、抗原免疫编辑、替代检查点上调和克隆演化产生。寡进展可考虑局部治疗维持系统控制；广泛进展应再取样寻找驱动或组织学转化。仅凭进展后活检PD-L1升高，不能证明换用另一PD-1抗体有效。

### 表2-5：ICI联合治疗关键随机试验

**十项免疫联合治疗关键试验及生存结果摘要**

| 试验 | 癌种 | 联合方案 | 对照 | OS/PFS摘要 | 关键风险 |
| --- | --- | --- | --- | --- | --- |
| KEYNOTE-189 | 非鳞NSCLC | Pembro+培美曲塞+铂 | 化疗 | OS/PFS显著改善 | 骨髓抑制、肾毒性、irAE |
| KEYNOTE-407 | 鳞状NSCLC | Pembro+卡铂+紫杉类 | 化疗 | OS/PFS改善 | 神经病、骨髓抑制、irAE |
| CheckMate-227 | NSCLC | Nivo+Ipi | 化疗 | 部分人群长期OS获益 | 双ICI毒性 |
| CheckMate-9LA | NSCLC | Nivo+Ipi+2周期化疗 | 化疗 | OS改善 | 早期联合毒性 |
| IMbrave150 | HCC | Atezo+Bevacizumab | Sorafenib | OS/PFS改善 | 出血、高血压、irAE |
| HIMALAYA | HCC | Durva+单次Treme | Sorafenib | OS改善 | 肝功能与irAE |
| CheckMate-214 | RCC | Nivo+Ipi | Sunitinib | 中高危OS/ORR改善 | 双ICI毒性 |
| EV-302 | 尿路上皮癌 | EV+Pembro | 铂+Gem | OS/PFS显著改善 | 皮疹、神经病、高血糖、irAE |
| CheckMate-649 | 胃/GEJ癌 | Nivo+化疗 | 化疗 | CPS富集人群OS/PFS改善 | 胃肠和免疫毒性 |
| KEYNOTE-811 | HER2+胃/GEJ癌 | Pembro+Trastuzumab+化疗 | Trastuzumab+化疗 | PD-L1标签下改善PFS/ORR | 多药毒性与心脏监测 |

### 表2-6：新兴检查点靶点与临床管线

**十个新兴免疫检查点或共刺激靶点的代表项目**

| 靶点 | 代表药物 | 公司 | 组合 | 阶段（2025.Q2） | 关键问题 |
| --- | --- | --- | --- | --- | --- |
| LAG-3 | Relatlimab | BMS | Nivolumab | 已批准 | 预测标志物与最优序贯 |
| TIGIT | Domvanalimab | Arcus/Gilead | Zimberelimab | III期 | 多项阴性试验后的患者选择 |
| TIGIT | Belrestotug | GSK/iTeos | Dostarlimab | III期 | Fc功能与CD226轴 |
| TIM-3 | Sabatolimab | Novartis | HMA等 | II期/调整 | 髓系肿瘤终点验证 |
| VISTA | KVA12123 | Kineta | Pembrolizumab | I期 | 酸性TME与髓系选择 |
| B7-H3 | Enoblituzumab | MacroGenics | PD-1阻断 | II期 | 配体功能与毒性 |
| NKG2A | Monalizumab | Innate/AZ | Cetuximab/Durva | II/III期 | NK与T细胞双重解除抑制 |
| 4-1BB | Acasunlimab | Genmab/BioNTech | PD-L1×4-1BB双抗 | II期 | 肝毒性与条件性激动 |
| OX40 | 多项目 | 多家公司 | PD-1阻断 | 早期/重评 | 激动时序与受体占有 |
| CD73/A2A | Oleclumab/Quemliclustat | AZ/Arcus | ICI/化疗 | II/III期 | 腺苷通路冗余 |

> **临床/研究亮点：** **EV-302体现“机制合理+随机验证”。**Enfortumab vedotin递送MMAE造成快速肿瘤杀伤，帕博利珠单抗解除PD-1抑制；随机研究相对铂类化疗的显著生存改善使组合成为实践改变，而不仅是早期缓解率信号。联合后仍须区分ADC皮疹/神经病与免疫性皮炎或神经毒性。

## 主要参考来源

- Pardoll DM. The blockade of immune checkpoints in cancer immunotherapy. Nature Reviews Cancer. 2012;12:252–264. [DOI](https://doi.org/10.1038/nrc3239)

- Gandhi L, et al. Pembrolizumab plus Chemotherapy in Metastatic Non-Small-Cell Lung Cancer. NEJM. 2018;378:2078–2092. [DOI](https://doi.org/10.1056/NEJMoa1801005)

- Tawbi HA, et al. Relatlimab and Nivolumab versus Nivolumab in Untreated Advanced Melanoma. NEJM. 2022;386:24–34. [DOI](https://doi.org/10.1056/NEJMoa2109970)

- Schneider BJ, et al. Management of Immune-Related Adverse Events: ASCO Guideline Update. J Clin Oncol. 2021;39:4073–4126. [DOI](https://doi.org/10.1200/JCO.21.01440)

- Powles T, et al. Enfortumab Vedotin and Pembrolizumab in Untreated Advanced Urothelial Cancer. NEJM. 2024;390:875–888. [DOI](https://doi.org/10.1056/NEJMoa2312117)

- U.S. Food and Drug Administration. Oncology approval notifications and Drugs@FDA labels. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications)


---

内容版本：2025.Q2。下次更新建议：2025.Q4，重点复核 FDA 标签、临床阶段和公司交易状态。
