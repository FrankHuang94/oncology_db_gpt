# 第14章：前沿探索路线

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解人工智能与药物发现的核心概念、证据边界与临床转化逻辑。
- 理解合成致死与DDR靶点的核心概念、证据边界与临床转化逻辑。
- 理解表观遗传学靶向治疗的核心概念、证据边界与临床转化逻辑。
- 理解肿瘤代谢靶向治疗的核心概念、证据边界与临床转化逻辑。
- 理解RNA靶向新路线的核心概念、证据边界与临床转化逻辑。
- 理解2025下半年—2026年PARP抑制剂前移、menin抑制剂扩展和线粒体靶点首个获批药物的监管含义。

## 章节导航

[返回总目录](../index.md) · [上一章：FDA政策与监管框架](13-fda-policy.md) · [下一章：市场格局与投资动态](15-market-landscape.md)

## 14.1 人工智能在药物发现中的应用：缩小搜索空间，不取消实验

人工智能（Artificial Intelligence，**AI**）在药物研发中的核心价值是把结构、化学、组学、影像和临床数据转化为可排序假设。它可预测蛋白结构、生成分子、优化多参数性质、识别患者亚群和自动化试验流程，但每一步都受训练数据偏差和分布外预测影响。AI输出是实验优先级，不是药物有效性的替代证据。

AlphaFold2显著提高单体蛋白结构预测准确度，AlphaFold3进一步建模部分蛋白–核酸–小分子复合物。结构预测让无实验结构的靶点更早进入口袋分析和虚拟筛选，也帮助解释突变；但柔性构象、变构状态、共价化学、膜环境和结合自由能仍需冷冻电镜、晶体学、NMR及生化验证。高置信骨架不等于高置信药物结合模式。

生成化学模型在给定口袋或性质约束下提出分子，强化学习和多目标优化平衡效力、选择性、溶解度、代谢和可合成性。真正瓶颈常从“生成多少结构”转为“哪批结构值得合成”。若训练集集中在已知药化空间，模型可能复制熟悉骨架；若奖励函数不完整，则会优化一个指标而牺牲未测毒性。

Insilico Medicine、Recursion和Exscientia代表不同路线：前者强调生成设计与靶点发现，Recursion以高通量细胞影像和多组学建立表型地图，Exscientia聚焦AI辅助小分子设计，并已于2024年并入Recursion。进入临床的“AI发现”分子证明流程可行，却尚未证明总体临床成功率高于传统项目；对照基线、项目选择和失败披露决定是否能验证生产率提升。

2025—2026年AI药物发现的变化更多体现在资本和管线取舍上，而不是肿瘤领域的确证性临床结果。Recursion于2025年5月终止11个项目中的4个并暂停1个，管线收缩为6个（4个肿瘤、2个罕见病）；Insilico于2025-12-30在港交所主板上市，募资约22.8亿港元，其最领先的生成式AI设计分子rentosertib（TNIK抑制剂）适应症是特发性肺纤维化，而不是肿瘤；Isomorphic Labs已把首批人体试验目标从2025年推迟到2026年底前，并优先推进肿瘤候选药，截至2026-11的公开报道仍未确认首例人体给药。本库检索范围内，尚未见AI主导设计的肿瘤分子取得III期阳性结果。

临床开发中，AI可从电子病历预筛选入组、预测研究中心招募、识别影像终点和模拟方案修订。敏感健康数据、算法漂移、不同人群代表性和可解释性必须治理。患者招募模型若只学习历史入组，可能复制少数族群和大型中心偏倚。

### 表14-1：AI驱动药物发现代表公司与平台

**十个AI药物研发平台的主要数据、输出和验证瓶颈**

| 公司/平台 | 核心数据 | 主要环节 | 代表能力 | 验证标准 | 局限 |
| --- | --- | --- | --- | --- | --- |
| Google DeepMind/AlphaFold | 序列+结构 | 结构预测 | 蛋白/复合物模型 | 实验结构与功能 | 构象/亲和力非天然可靠 |
| Insilico Medicine | 组学+化学 | 靶点到生成设计 | 候选分子推进临床；2025-12港股上市 | 前瞻临床成功 | 归因和样本选择；领先分子为非肿瘤适应症 |
| Recursion | 细胞影像+组学 | 表型发现/重定位 | 大规模扰动图谱 | 机制与人体疗效 | 模型细胞外推；2025-05管线收缩至6个项目 |
| Exscientia（2024年并入Recursion） | 药化/活性 | 分子设计 | 多参数优化 | 合成周期与候选质量 | 项目临床失败仍可能 |
| Schrödinger | 物理模拟+ML | 虚拟筛选/FEP | 结合自由能排序 | 盲法前瞻预测 | 计算成本与构象采样 |
| Isomorphic Labs | 结构+化学 | 结构驱动设计 | 生成与预测整合 | 公开候选和临床数据 | 披露有限；首批人体试验目标推迟至2026年底 |
| Generate Biomedicines | 蛋白序列/结构 | 生成蛋白 | 抗体/蛋白设计 | 表达、免疫原性、效力 | 序列可行不等于可制造 |
| Owkin | 多中心临床/病理 | 标志物与试验 | 联邦学习 | 外部队列复现 | 数据异质与偏倚 |
| PathAI | 数字病理 | 病理标志物 | 定量IHC/组织特征 | 病理金标准与结局 | 扫描/染色漂移 |
| Tempus | 临床+分子 | 患者匹配/RWE | 多模态临床数据 | 前瞻效用 | 缺失和治疗选择偏倚 |

> **图示：AI辅助药物研发的证据漏斗**
> AI主要提高漏斗上游排序效率；合成可行性、复杂生物学、毒理和人体疗效仍会淘汰大多数候选。

AI可帮助寻找条件依赖脆弱性，合成致死是其中最清晰的精准治疗框架之一。

## 14.2 合成致死与DDR：从BRCA–PARP扩展到WRN–MSI

合成致死指单独破坏两个基因中的任意一个细胞仍可生存，同时破坏二者则死亡。*BRCA1/2*缺陷削弱同源重组修复，PARP抑制导致单链损伤、复制叉问题和双链断裂累积，从而选择性杀伤同源重组缺陷细胞。Olaparib、niraparib、rucaparib和talazoparib验证该框架，但骨髓毒性、继发MDS/AML和耐药要求精确选择。

“HRD阳性”不是统一生物状态。基因突变、基因组疤痕和当前功能可能不一致；*BRCA*回复突变、复制叉保护、药物外排和PARP1改变可恢复耐药。既往铂敏感性提供功能线索，但不能取代分子检测。不同PARP药物的捕获能力、药代和标签也不可简单视为同类互换。

2025下半年至2026年，PARP抑制剂在前列腺癌呈现“前移但按基因收窄”的监管模式。Rucaparib用于既往AR靶向治疗的BRCA突变mCRPC于2025-12-17由加速批准转为常规批准（TRITON3，BRCA亚组rPFS 11.2对6.4个月，HR 0.50）；niraparib+阿比特龙（Akeega）于2025-12-12扩展至BRCA2突变的转移性去势敏感前列腺癌（mCSPC），依据AMPLITUDE中探索性BRCA2亚组rPFS HR 0.46，标签没有覆盖全部HRR突变；talazoparib+enzalutamide于2026-10-26凭TALAPRO-3扩展至HRR突变mCSPC（rPFS HR 0.48），而FDA此前已在2025年6月拒绝把TALAPRO-2适应症扩展至非HRR突变mCRPC。监管一致要求“按基因证据给标签”，而不是按药物类别外推。

ATR感知复制压力并协调检查点，ATM主要响应双链断裂，DNA-PK参与非同源末端连接，WEE1控制G2/M进入。ATR抑制剂可能在ATM缺失或复制压力高肿瘤有效，DNA-PK与放疗协同，WEE1在*TP53*缺陷背景有理论吸引力；正常增殖组织同样依赖这些通路，因此骨髓和胃肠毒性常限制组合。2025年底的两件事说明这一窗口仍很窄：ceralasertib+durvalumab的III期LATIFY（n=594，经治晚期NSCLC）对比多西他赛未达到OS主要终点（中位OS 11.1对10.0个月，HR约0.9），且ORR低于多西他赛（7.7%对17.3%）；Repare Therapeutics于2025-11-14同意被非营利机构XenoTherapeutics收购（每股1.82美元加或有价值权），此前已把PKMYT1抑制剂lunresertib以1000万美元首付转让给Debiopharm，ATR抑制剂camonsertib则寻求对外授权。

Werner解旋酶（**WRN**）是MSI-H/dMMR癌症的合成致死依赖。重复序列结构在错配修复缺陷细胞中产生特殊DNA压力，WRN抑制导致染色体断裂。HRO761和VVD-133214分别以非共价变构和共价方式捕获WRN不活跃构象，并进入临床。VVD-133214（曾称RO7589831，最初由Roche资助，Vividion/Bayer于2025年6月取得全球权益）首次人体I期在35例MSI-H患者中ORR 14%，以轻度胃肠反应为主、未见剂量限制性毒性，后续开展联合贝伐珠单抗等Ib/II期研究；HRO761的I/Ib期（单药及联合pembrolizumab或伊立替康）在ESMO 2025报告以低级别胃肠不良事件为主，并有持久抗肿瘤活性信号。它们是有强遗传和药理依据的热点，但单药缓解率有限，尚不是已验证临床标准。

### 表14-2：DDR与合成致死抑制剂临床管线

**十五个DDR靶点代表项目与选择标志物（更新至2026.Q4）**

| 项目 | 靶点 | 公司 | 标志物/场景 | 阶段 | 关键风险 |
| --- | --- | --- | --- | --- | --- |
| Olaparib | PARP1/2 | AstraZeneca/MSD | BRCA/HRR | 已批准 | 骨髓/MDS与耐药 |
| Niraparib | PARP1/2 | GSK；J&J（Akeega组合） | 卵巢癌/HRD；BRCA2m mCSPC联合阿比特龙（2025-12） | 已批准 | 血小板/标签收缩 |
| Rucaparib | PARP1/2 | pharmaand | BRCAm mCRPC（2025-12转常规批准）/卵巢癌 | 已批准 | MDS/AML与骨髓毒性 |
| Talazoparib | PARP1/2 | Pfizer | BRCA乳腺/HRR前列腺（mCRPC；2026-10扩展至HRRm mCSPC） | 已批准 | 强PARP trapping毒性与贫血 |
| Saruparib (AZD5305) | PARP1选择性 | AstraZeneca | mHSPC联合ARPI（HRRm及非HRRm）；BRCA/PALB2乳腺癌 | III期（EvoPAR-Prostate01等） | 血液毒性优势待随机验证 |
| Ceralasertib | ATR | AstraZeneca | ATM缺失/复制压力 | III期LATIFY阴性（2025-12，OS未改善） | 组合骨髓毒性 |
| Camonsertib | ATR | Repare（2025-11同意被XenoTherapeutics收购） | DDR缺陷 | I/II期；寻求对外授权 | 标志物异质 |
| Elimusertib | ATR | Bayer | ATM缺失等 | I期 | 间歇给药窗口 |
| Peposertib | DNA-PK | Merck KGaA | 放疗/双链断裂 | I期 | 正常组织放射增敏 |
| Adavosertib | WEE1 | 外部开发/历史AZ | TP53/复制压力 | II期 | 胃肠与骨髓毒性 |
| Azenosertib | WEE1 | Zentalis | CCNE1高等 | II期 | 安全事件与剂量 |
| Lunresertib | PKMYT1 | Debiopharm（2025年自Repare购入） | CCNE1扩增/FBXW7改变等 | 早期临床 | 组合血液毒性 |
| HRO761 | WRN | Novartis | MSI-H/dMMR | I/Ib期（单药及联合） | 临床效力/耐药 |
| VVD-133214（RO7589831） | WRN | Vividion/Bayer | MSI-H/dMMR | I期ORR 14%；Ib/II期组合 | 单药效力有限/组合 |
| IDE275/GSK4418959 | WRN | IDEAYA/GSK | MSI-H | 早期临床 | 同类差异化 |

表14-2中PARP、ATR（ceralasertib、camonsertib）、PKMYT1和WRN项目已于2026.Q4复核；elimusertib、peposertib、adavosertib、azenosertib和IDE275阶段沿用2025.Q2信息 [待核实]。

> **临床/研究亮点：** **WRN是从CRISPR依赖图到临床分子的完整路线。**多个筛选独立发现MSI细胞依赖WRN，2024年结构研究揭示HRO761和VVD-133214以不同方式捕获解旋酶；当前I期正在检验遗传选择性是否转化为人体窗口。

DNA序列之外，染色质和转录状态提供另一类可逆但系统性更强的依赖。

## 14.3 表观遗传靶向：从广谱酶抑制到基因背景选择

表观遗传药物改变染色质可及、组蛋白修饰和转录程序，不直接修改DNA序列。早期DNA甲基转移酶和HDAC抑制剂在血液瘤成功，但广泛转录影响造成骨髓、疲劳和胃肠毒性。新路线试图用突变背景、融合蛋白或特定转录依赖建立更窄治疗窗。

EZH2是PRC2复合物催化亚基，写入H3K27me3。Tazemetostat获批用于EZH2突变或特定情境滤泡淋巴瘤及上皮样肉瘤，证明表观遗传靶点可用基因和组织学选择。耐药可来自EZH2二次突变、PRC2重组和旁路转录，因此组合需避免把广泛表达变化误作特异机制。

BET家族BRD4读取乙酰化赖氨酸并维持超级增强子转录，抑制剂可压低MYC等程序，但血小板减少和有限单药窗口阻碍早期热潮。BET降解剂可能更深移除支架功能，却同样面对正常转录依赖。LSD1/KDM1A抑制在AML/SCLC中促进分化，menin抑制剂则通过KMT2A/NPM1转录复合物取得更明确标志物成功：revumenib在2024年获批KMT2A重排急性白血病后，于2025-10-24扩展至复发/难治NPM1突变AML（AUGMENT-101，CR+CRh 23.1%）；ziftomenib（Komzifti）于2025-11-13获批复发/难治NPM1突变AML（KOMET-001，CR+CRh 21.4%），标签带分化综合征黑框警告。两药均需监测分化综合征和QTc延长。

HDAC抑制剂正在组合中重新定位：提高抗原呈递、改变Treg或逆转耐药。它们也可能抑制效应T细胞，时序和剂量比“增加组蛋白乙酰化”更重要。DOT1L抑制在KMT2A重排中有机制基础，但第一代临床效力有限，提醒靶点依赖与可实现暴露之间存在鸿沟。

### 表14-3：表观遗传靶向药物与晚期管线

**十类表观遗传药物的标志物和成熟度**

| 药物/类别 | 靶点 | 主要场景 | 状态 | 生物标志物 | 限制 |
| --- | --- | --- | --- | --- | --- |
| Tazemetostat | EZH2 | FL/上皮样肉瘤 | 已批准 | EZH2/组织学 | 缓解深度与耐药 |
| Revumenib | Menin | KMT2A重排急性白血病；R/R NPM1突变AML | 已批准（2024；NPM1m 2025-10扩展） | KMT2A重排/NPM1突变 | 分化综合征/QTc/耐药 |
| Ziftomenib | Menin | R/R NPM1突变AML | 已批准（2025-11-13，Komzifti） | NPM1突变 | 分化综合征黑框/组合定位 |
| Mivebresib | BET | 血液瘤/实体瘤 | 早期 | 转录依赖 | 血小板减少 |
| Pelabresib | BET | 骨髓纤维化 | III期/监管评估 | 非肿瘤特异 | 增量获益 |
| Iadademstat | LSD1 | AML/SCLC | II期 | 分化状态 | 骨髓毒性 |
| Bomedemstat | LSD1 | 髓系肿瘤 | II期 | 克隆/血象 | 剂量滴定 |
| Pinometostat | DOT1L | KMT2A重排白血病 | 历史早期 | KMT2A融合 | 单药效力有限 |
| Vorinostat | HDAC | CTCL | 已批准 | 无强预测标志 | 广谱毒性 |
| Entinostat | HDAC1/3 | 实体瘤组合 | II期/历史III期 | 免疫/髓系签名 | 随机结果不一致 |

表观遗传重编程改变燃料使用，而肿瘤代谢药直接利用癌细胞与正常组织的营养依赖差异。

## 14.4 肿瘤代谢：从突变代谢酶到营养生态

突变IDH1/2将α-酮戊二酸转化为致癌代谢物2-羟基戊二酸（2-HG），抑制双加氧酶并锁定异常分化。Ivosidenib、enasidenib和olutasidenib在AML等场景证明突变代谢酶可成药，疗效表现为分化而非立即细胞毒，需警惕分化综合征；脑渗透性IDH1/2双抑制剂vorasidenib则于2024年基于INDIGO获批用于术后IDH突变2级胶质瘤。肿瘤可通过同工酶、第二位点或克隆演进耐药。

线粒体蛋白质稳态提供了另一类可药节点。Dordaviprone（ONC201，Modeyso）激活线粒体蛋白酶ClpP并拮抗多巴胺D2/3受体，于2025-08-06获FDA加速批准，用于既往治疗后进展的H3 K27M突变弥漫性中线胶质瘤（成人及≥1岁儿童），5项开放标签研究汇总的50例中ORR 22%，确证试验ACTION在新诊断患者中进行。它是该病首个获批的系统治疗，其精确抗肿瘤机制仍在研究中。

葡萄糖转运蛋白GLUT1、乳酸转运MCT1/4和谷氨酰胺酶是广泛代谢靶点，但正常脑、红细胞、肌肉和免疫细胞也依赖这些通路。代谢可塑性使癌细胞在葡萄糖、脂肪酸和氨基酸之间切换，单药常被旁路补偿。适合开发的场景需要遗传缺陷、组织环境或组合治疗形成窄依赖。

用户规范中的“氩化物代谢”应为**精氨酸代谢**。ASS1缺失肿瘤不能自主合成精氨酸，可用ADI-PEG20消耗循环精氨酸；相反，TME中的ARG1由髓系细胞消耗精氨酸并抑制T细胞，ARG1抑制剂旨在恢复免疫。两种策略方向相反，必须区分“饿死肿瘤”与“喂回免疫细胞”。

MTA协同PRMT5抑制剂利用MTAP缺失细胞内甲硫腺苷（MTA）蓄积，选择性抑制肿瘤细胞中的PRMT5–MTA复合物，是“代谢缺失造成药理窗口”的代表。2026年Tango的vopimetostat（TNG462）联合daraxonrasib在MTAP缺失、RAS突变转移性胰腺癌的小样本中报告ORR约82%–92%（不同数据截点），公司计划在2026下半年确定一线随机III期设计；数据非随机、样本小，组合中皮疹和口腔炎等剂量限制性毒性仍需关注。

### 表14-4：肿瘤代谢靶点与在研药物

**十二个代谢/线粒体靶点的代表药物、选择标志物与挑战**

| 靶点 | 代表药物 | 癌种 | 状态 | 选择标志物 | 挑战 |
| --- | --- | --- | --- | --- | --- |
| 突变IDH1 | Ivosidenib | AML/胆管癌 | 已批准 | IDH1突变 | 分化综合征/耐药 |
| 突变IDH2 | Enasidenib | AML | 已批准 | IDH2突变 | 分化与克隆旁路 |
| 突变IDH1/2（脑渗透） | Vorasidenib | IDH突变2级胶质瘤 | 已批准（2024） | IDH1/2突变 | 长期随访与肝毒性 |
| 线粒体ClpP（及DRD2） | Dordaviprone | H3 K27M弥漫性中线胶质瘤 | FDA加速批准（2025-08） | H3 K27M突变 | 单臂证据；确证试验ACTION |
| GLS1 | Telaglenastat | 肾癌等 | II期/开发受挫 | 谷氨酰胺依赖 | 代谢补偿 |
| MCT1 | AZD3965 | 淋巴瘤/实体瘤 | I期 | MCT1高/MCT4低 | 视网膜与旁路 |
| GLUT1 | 多项早期抑制剂 | 实体瘤 | 临床前/I期 | 高糖酵解 | 正常组织窗口 |
| ARG1 | INCB001158 | 实体瘤组合 | I/II期 | ARG1/精氨酸 | 来源异质与冗余 |
| 精氨酸消耗 | ADI-PEG20 | ASS1缺失肿瘤 | II/III期研究 | ASS1低 | 重表达和免疫影响 |
| MAT2A | AG-270/IDE397 | MTAP缺失肿瘤 | I/II期 | MTAP缺失 | 治疗窗/组合 |
| PRMT5（MTA协同） | MRTX1719(BMS-986504)/AMG 193/vopimetostat(TNG462) | MTAP缺失肿瘤 | I/II期；vopimetostat+daraxonrasib胰腺癌III期筹备中 | MTAP缺失 | 小样本数据；选择性和耐药 |
| DHODH | Brequinar等 | AML | 早期 | 分化依赖 | 骨髓与暴露 |

代谢改变蛋白合成原料，RNA靶向则直接干预信息载体、剪接和翻译。

## 14.5 RNA靶向治疗：把不可成药蛋白上移到转录本

癌症可由异常剪接、融合RNA、重复序列或难以小分子结合的转录因子驱动。剪接体突变*SF3B1*、*U2AF1*和*SRSF2*改变外显子选择并产生依赖；H3B-6545等SF3B调节剂尝试利用这一窗口，但正常造血同样依赖剪接，剂量限制明显。更精确策略是纠正特定异常剪接或降解特定融合转录本。

小干扰RNA（siRNA）通过RISC切割互补RNA，反义寡核苷酸（ASO）可诱导RNase H、阻断翻译或改变剪接。肝脏递送已有成熟GalNAc范式，实体瘤细胞内递送仍受内体逃逸、间质和免疫刺激限制。用户规范举例的alisertib是Aurora A激酶小分子抑制剂，**不是siRNA或ASO**，因此不列作RNA药物案例。

RIBOTAC（Ribonuclease-Targeting Chimera）一端结合目标RNA结构，另一端招募内源RNase L等核糖核酸酶，使RNA发生事件驱动降解。它可能攻击miRNA前体、重复RNA或致癌转录本，但RNA动态结构、细胞选择性和RNase表达决定效果。与PROTAC类似，“招募降解机器”概念清楚，临床可成药性仍需证明。

mRNA替代可短暂表达p53等肿瘤抑制因子、细胞因子或双抗，避免永久整合。挑战是正常细胞同样接收载荷，强先天免疫会抑制翻译。环状RNA和自扩增RNA可延长表达，却增加序列纯度、异常副产物和持续时间控制问题。

> **图示：RNA治疗模式的作用层级与成熟度**
> 评分为相对教学值；肝脏适应症的递送成熟度不能直接外推到实体瘤。

如果RNA递送到免疫细胞仍困难，现成NK细胞提供另一种无需患者特异HLA的活体药物底盘。

## 14.6 NK细胞与先天免疫激活：现货潜力与持久性难题

NK细胞通过激活与抑制受体平衡识别应激细胞，不依赖经典抗原特异TCR，也通常不引发严重移植物抗宿主病。这使脐带血、外周血和诱导多能干细胞（iPSC）来源的异体现货产品成为可能。NK还通过CD16介导抗体依赖细胞毒，可与单抗或NK细胞衔接器组合。

CAR-NK可加入抗原识别和IL-15等存活信号，并敲除CISH等负调节基因。与CAR-T相比，早期研究中CRS和神经毒性可能较低，但体内扩增与持久性通常也更弱，需要重复给药。冻融恢复、宿主免疫清除和大规模扩增是关键CMC指标。

Fate Therapeutics的FT516和FT596建立iPSC克隆化制造概念，后续项目优先级和合作变化说明平台可制造不等于临床可持续。Nkarta、Artiva、Century、Takeda/MD Anderson等继续探索CD19、CD33和实体瘤靶点。项目状态变化快，下表按2026.Q4可核实信息更新并保留终止/调整项目，避免幸存者偏倚。2025—2026年的共同趋势是：多家NK/iPSC平台公司把主要资源从肿瘤转向自身免疫，或直接停止NK项目。

cGAS感知胞质DNA并生成cGAMP，激活STING–TBK1–IRF3和I型干扰素，促进树突细胞启动和NK/T细胞募集。第一代瘤内STING激动剂全身分布有限、重复刺激可诱导负反馈，临床效力弱于动物模型。下一代策略包括系统递送、抗体/纳米颗粒靶向和溶瘤病毒编码，同时需避免全身炎症和T细胞死亡。

### 表14-5：NK细胞治疗主要管线

**十个NK或CAR-NK代表项目的来源、工程和状态**

| 项目 | 公司/机构 | 来源 | 靶点/工程 | 状态（截至2026.Q4） | 核心问题 |
| --- | --- | --- | --- | --- | --- |
| FT516 | Fate | iPSC-NK | 高亲和非切割CD16 | 历史项目/停止 | 持久性与战略调整 |
| FT596 | Fate | iPSC CAR-NK | CD19+CD16+IL-15 | 历史项目/停止 | 多工程临床价值 |
| FT819 | Fate | iPSC CAR-T（非NK） | CD19/TRAC | 转向SLE/狼疮肾炎（II期RECLAIM-LN，2026） | 分类与平台取舍 |
| NKX101 | Nkarta | 供者NK | NKG2D CAR | 降优先级（AML缓解率下降） | AML活性和持久性 |
| NKX019 | Nkarta | 供者NK | CD19 CAR | 肿瘤开发停止；转向狼疮等自身免疫（Ntrust-1/2） | 重复给药/免疫清除 |
| AlloNK / AB-101 | Artiva | 脐带血NK | 现货+抗体组合 | 2026-10-27停止开发 | 与rituximab/双抗协同 |
| CNTY-101 | Century | iPSC CAR-NK | CD19+多重编辑 | I期 | 细胞扩增和重复给药 |
| TAK-007 | Takeda/MD Anderson | 脐带血CAR-NK | CD19 | 早期/状态需复核 | 商业制造路径 |
| HN001 | 学术/产业合作 | 脐带血NK | CD19 CAR+IL-15 | 早期 | 持久缓解与安全 |
| AFM13+NK | Affimed/MD Anderson | 脐带血NK | CD30×CD16A衔接器 | I/II期 | 预复合细胞与现货物流 |

2026.Q4注：Fate、Nkarta和Artiva项目状态已按公司披露更新；FT516、FT596沿用历史状态，CNTY-101、TAK-007、HN001和AFM13+NK状态沿用2025.Q2信息 [待核实]。

> **临床/研究亮点：** **FT516/FT596是平台与产品分离的案例。**iPSC可建立均一主细胞库并进行多重工程，但Fate后续停止这些项目，说明可规模化制造仍需匹配持久临床效力、资本和合作战略。

## 14.7 2025下半年—2026年关键进展（截至2026-11-12）

本节汇总2025-07-01至2026-11-12期间与本章路线相关、且已由FDA公告、公司披露或可靠报道核实的事件。合成致死与表观遗传路线在这一时期的主要变化来自已上市机制的“前移”和“扩展”，而不是全新靶点获批；早期合成致死项目、AI药物发现和NK细胞平台则以失败、收缩和转向为主。

### 表14-6：2025下半年—2026年前沿路线关键事件

**已核实的监管、临床与产业事件（按日期）**

| 日期 | 事件 | 路线 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-08-06 | Dordaviprone（Modeyso）加速批准用于H3 K27M弥漫性中线胶质瘤 | 线粒体ClpP/代谢 | 该病首个获批系统治疗；ORR 22%（11/50） |
| 2025-10-24 | Revumenib扩展至R/R NPM1突变AML | 表观遗传/menin | AUGMENT-101 CR+CRh 23.1%；成人及≥1岁儿童 |
| 2025-11-13 | Ziftomenib（Komzifti）获批R/R NPM1突变AML | 表观遗传/menin | 第二个menin抑制剂；分化综合征黑框警告 |
| 2025-11-14 | Repare同意被XenoTherapeutics收购 | 合成致死公司整合 | lunresertib此前已转让Debiopharm；camonsertib寻求授权 |
| 2025-12-12 | Niraparib+阿比特龙（Akeega）扩展至BRCA2m mCSPC | 合成致死/PARP | AMPLITUDE；BRCA2亚组rPFS HR 0.46 |
| 2025-12-17 | Rucaparib BRCAm mCRPC转常规批准 | 合成致死/PARP | TRITON3 BRCA亚组rPFS HR 0.50 |
| 2025-12-22 | Ceralasertib+durvalumab III期LATIFY未达OS终点 | ATR | OS 11.1对10.0个月；ELCC 2026公布全文 |
| 2025-12-30 | Insilico Medicine港交所上市 | AI药物发现 | 募资约22.8亿港元；领先分子为IPF适应症 |
| 2026-06-12 | Capivasertib+阿比特龙获批PTEN缺失mHSPC | 通路依赖（交叉见第06章） | 首个按PTEN蛋白缺失选择的前列腺癌靶向方案 |
| 2026（ASCO/ESMO） | Vopimetostat+daraxonrasib在MTAP缺失胰腺癌小样本ORR约82%–92% | MTA协同PRMT5 | 计划一线随机III期 |
| 2026-10-26 | Talazoparib+enzalutamide扩展至HRRm mCSPC | 合成致死/PARP | TALAPRO-3 rPFS HR 0.48；≥3级贫血51% |
| 2026-10-27 | Artiva停止AlloNK（AB-101）开发 | NK细胞 | 取消计划中的类风湿关节炎III期，裁员约94% |

> **临床/研究亮点：** **AMPLITUDE说明“亚组决定标签”。**试验在HRR突变mCSPC总体人群中达到rPFS主要终点，但FDA只批准了BRCA2突变人群，依据是探索性BRCA2亚组的更大获益（HR 0.46）。合成致死药物的监管单位已从“HRR阳性”细化到具体基因，伴随诊断和基因层面的效应量越来越决定适应症边界。

**PARP前移到激素敏感阶段，但标签更窄。**2025—2026年三项前列腺癌PARP决定（rucaparib转换、Akeega BRCA2 mCSPC、talazoparib TALAPRO-3）都把适应症绑在BRCA或HRR突变上，非HRR人群的扩展已被拒绝。前移意味着更长的暴露时间，贫血、MDS/AML等长期风险在早期疾病中的权重随之上升；PARP1选择性抑制剂能否改善这一治疗窗，是下一阶段的关键问题。

**Menin抑制剂完成“KMT2A到NPM1”的扩展。**两种口服menin抑制剂在一年内都获得R/R NPM1突变AML适应症，单药CR+CRh约21%–23%，缓解持续时间约4.5–5个月，说明单药更适合作为桥接或组合基础。下一步是与强化疗、低甲基化药物或venetoclax组合进入前线，同时监测MEN1耐药突变和分化综合征。

**早期合成致死、AI和NK平台：从扩张转向收缩。**ATR抑制剂在LATIFY中未能把复制压力假说转化为OS获益，Repare被收购、资产分拆转让；WRN抑制剂单药ORR约14%，更可能以组合形式推进；MTA协同PRMT5是这一时期最受关注的新合成致死路线，但关键证据来自与RAS(ON)抑制剂联合的小样本。AI药物发现以上市融资和管线削减为主要事件，NK平台则普遍转向自身免疫或停止项目。仍待核实的事项包括：AMG 193、BMS-986504和AZD3470的最新数据、saruparib III期读出时间、KAT6抑制剂等新表观遗传靶点进展，以及Isomorphic Labs首例人体给药时间 [待核实]。

## 主要参考来源

- Jumper J, et al. Highly accurate protein structure prediction with AlphaFold. Nature. 2021;596:583–589. [DOI](https://doi.org/10.1038/s41586-021-03819-2)
- Ferretti S, et al. Discovery of WRN inhibitor HRO761 with synthetic lethality in MSI cancers. Nature. 2024;629:443–449. [DOI](https://doi.org/10.1038/s41586-024-07350-y)
- Baltgalvis KA, et al. Chemical proteomics identifies covalent WRN helicase inhibitors in MSI cancer. Nature. 2024;629:435–442. [DOI](https://doi.org/10.1038/s41586-024-07354-8)
- Lord CJ, Ashworth A. PARP inhibitors: Synthetic lethality in the clinic. Science. 2017;355:1152–1158. [DOI](https://doi.org/10.1126/science.aam7344)
- Liu E, et al. Use of CAR-Transduced Natural Killer Cells in CD19-Positive Lymphoid Tumors. N Engl J Med. 2020;382:545–553. [DOI](https://doi.org/10.1056/NEJMoa1910607)
- ClinicalTrials.gov. VVD-133214 in MSI/dMMR advanced solid tumors, NCT06004245. [Registry](https://clinicaltrials.gov/study/NCT06004245)
- U.S. FDA. FDA grants regular approval to rucaparib for metastatic castration-resistant prostate cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-regular-approval-rucaparib-metastatic-castration-resistant-prostate-cancer)
- U.S. FDA. FDA approves niraparib and abiraterone acetate plus prednisone for BRCA2-mutated metastatic castration-sensitive prostate cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-niraparib-and-abiraterone-acetate-plus-prednisone-brca2-mutated-metastatic-castration)
- Pharmacy Times. FDA approves talazoparib with enzalutamide for HRR-mutated metastatic prostate cancer (TALAPRO-3). 2026. [News](https://www.pharmacytimes.com/view/fda-approves-talazoparib-with-enzalutamide-for-hrr-mutated-metastatic-prostate-cancer)
- OncLive. FDA declines to expand label for talazoparib/enzalutamide in mCRPC. 2025. [News](https://www.onclive.com/view/fda-declines-to-expand-label-for-talazoparib-enzalutamide-in-mcrpc)
- U.S. FDA. FDA approves revumenib for relapsed or refractory acute myeloid leukemia with a susceptible NPM1 mutation. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-revumenib-relapsed-or-refractory-acute-myeloid-leukemia-susceptible-npm1-mutation)
- U.S. FDA. FDA approves ziftomenib for relapsed or refractory acute myeloid leukemia with an NPM1 mutation. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-ziftomenib-relapsed-or-refractory-acute-myeloid-leukemia-npm1-mutation)
- U.S. FDA. FDA grants accelerated approval to dordaviprone for diffuse midline glioma. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-dordaviprone-diffuse-midline-glioma)
- U.S. FDA. FDA approves capivasertib with abiraterone and prednisone for PTEN-deficient androgen pathway modulation-naive or -sensitive prostate cancer. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-capivasertib-abiraterone-and-prednisone-pten-deficient-androgen-pathway-modulation)
- OncLive. Ceralasertib plus durvalumab misses OS end point in previously treated advanced NSCLC (LATIFY). 2025. [News](https://www.onclive.com/view/ceralasertib-plus-durvalumab-misses-os-end-point-in-previously-treated-advanced-nsclc)
- Repare Therapeutics. Repare Therapeutics enters into definitive agreement to be acquired by XenoTherapeutics. 2025. [Press release](https://www.businesswire.com/news/home/20251114715824/en/Repare-Therapeutics-Enters-into-Definitive-Agreement-to-be-Acquired-by-XenoTherapeutics-Inc.)
- Fierce Biotech. Repare finds fix as biotech agrees to XenoTherapeutics buyout. 2025. [News](https://www.fiercebiotech.com/biotech/repare-finds-fix-biotech-agrees-xenotherapeutics-buyout)
- MD Anderson. AACR: First-in-class covalent Werner helicase inhibitor shows clinical proof-of-concept in Phase I trial. 2025. [News](https://www.mdanderson.org/newsroom/2025/04/aacr-first-in-class-covalent-werner-helicase-inhibitor-shows-clinical-proof-of-concept-in-phase-I-trial.html)
- Novartis. HRO761 alone or in combination in MSI-high/dMMR solid tumors, NCT05838768. 2026. [Registry](https://www.novartis.com/clinicaltrials/study/nct05838768)
- AstraZeneca. EvoPAR-Prostate01: saruparib plus ARPI in mHSPC (D9722C00001). [Registry](https://www.astrazenecaclinicaltrials.com/study/D9722C00001/)
- CancerNetwork. Daraxonrasib plus vopimetostat yields high response rate in MTAP-deleted pancreatic cancer. 2026. [News](https://www.cancernetwork.com/view/daraxonrasib-vopimetostat-stunning-response-rate-mtap-del-pancreatic-cancer)
- pharmaphorum. ESMO26: Tango sees 82% ORR with combo in pancreatic cancer. 2026. [News](https://pharmaphorum.com/news/esmo26-tango-sees-82-orr-combo-pancreatic-cancer)
- pharmaphorum. Insilico ends 2025 with $293m Hong Kong IPO. 2025. [News](https://pharmaphorum.com/news/insilico-ends-2025-293m-hong-kong-ipo)
- GEN. Recursion halts four pipeline programs, sharpening cancer and rare disease focus. 2025. [News](https://www.genengnews.com/topics/artificial-intelligence/recursion-halts-four-pipeline-programs-sharpening-cancer-rare-disease-focus/)
- Fortune. Isomorphic Labs interview on timing of first human trials of AI-designed drugs. 2025. [News](https://fortune.com/2025/07/06/deepmind-isomorphic-labs-cure-all-diseases-ai-now-first-human-trials/)
- Fierce Biotech. Nkarta's blood cancer CAR stalls again, with falling response rate forcing it out of the race. [News](https://www.fiercebiotech.com/biotech/nkartas-blood-cancer-car-stalls-again-falling-response-rate-forcing-it-out-race)
- Fierce Biotech. Nkarta continues pivot to autoimmune by shelving lymphoma program for CAR NK candidate. [News](https://www.fiercebiotech.com/biotech/nkartas-continues-pivot-autoimmune-disease-shelving-lymphoma-program-car-nk-candidate)
- Fate Therapeutics. FT819 Phase 2 RECLAIM-LN trial initiation. 2026. [Press release](https://fatetherapeuticsinc.gcs-web.com/node/14641)
- Artiva Biotherapeutics. Strategic update and discontinuation of AlloNK development. 2026. [Press release](https://finviz.com/news/408610/artiva-biotherapeutics-announces-strategic-update-and-discontinues-development-of-allonk)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
