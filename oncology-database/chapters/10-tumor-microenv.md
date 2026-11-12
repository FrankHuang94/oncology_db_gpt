# 第10章：肿瘤微环境干预

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解TME的组成与功能的核心概念、证据边界与临床转化逻辑。
- 理解巨噬细胞靶向策略的核心概念、证据边界与临床转化逻辑。
- 理解髓系来源抑制细胞的核心概念、证据边界与临床转化逻辑。
- 理解肿瘤相关成纤维细胞的核心概念、证据边界与临床转化逻辑。
- 理解TME代谢干预的核心概念、证据边界与临床转化逻辑。
- 了解2025下半年—2026年PD-1×VEGF双抗、局部先天免疫刺激与溶瘤病毒等微环境组合的进展与证据边界。

## 章节导航

[返回总目录](../index.md) · [上一章：放射性药物治疗](09-radiopharm.md) · [下一章：新抗原与个性化癌症疫苗](11-neoantigen.md)

## 10.1 TME的组成与功能：肿瘤不是孤立的癌细胞团

肿瘤微环境（Tumor Microenvironment，**TME**）包括恶性细胞、免疫细胞、成纤维细胞、血管与淋巴内皮、周细胞、神经、细胞外基质（Extracellular Matrix，**ECM**）以及缺氧、酸性和营养梯度。癌细胞通过细胞因子、趋化因子、代谢物和基质力学持续重塑这些成分；非恶性细胞也会改变药物分布、抗原呈递和转移生态位。因此，基因组相似的癌细胞在不同器官中可对同一治疗产生不同反应。

CD8+ T细胞是直接杀伤主力，但需要树突细胞交叉呈递、CXCL9/10趋化和合适共刺激。CD4+辅助T细胞支持记忆和抗体反应，调节性T细胞（Regulatory T cell，**Treg**）则通过CTLA-4、IL-10、TGF-β和代谢竞争抑制效应细胞。自然杀伤（Natural Killer，**NK**）细胞识别MHC-I缺失与应激配体，能补偿部分T细胞逃逸，却会被TGF-β、腺苷和缺氧压制。

髓系群体高度异质。肿瘤相关巨噬细胞（Tumor-Associated Macrophage，**TAM**）可吞噬、呈递抗原，也可分泌VEGF、IL-10、TGF-β并促进血管生成和转移；髓系来源抑制细胞（Myeloid-Derived Suppressor Cell，**MDSC**）通过精氨酸消耗、活性氧和PD-L1限制T细胞。把所有TAM简化为M2、所有抗肿瘤巨噬细胞简化为M1有教学便利，却不能覆盖单细胞研究揭示的连续状态和组织特异程序。

癌相关成纤维细胞（Cancer-Associated Fibroblast，**CAF**）产生胶原、透明质酸和基质金属蛋白酶，可形成物理屏障并通过TGF-β造成免疫排斥；部分CAF亚群也能限制肿瘤扩散，全面清除可能适得其反。异常血管高渗漏但灌注差，导致缺氧、酸化和药物分布不均。所谓血管正常化不是简单“切断血供”，而是在适当剂量和时间窗改善灌注与免疫细胞进入。

免疫炎症型“热肿瘤”有较多肿瘤内CD8 T细胞、干扰素信号和抗原呈递，通常更可能响应ICI；免疫排斥型的T细胞停留在基质边缘；免疫荒漠型“冷肿瘤”缺少启动与浸润。热/冷是连续谱且会随治疗变化，不能用单一CD8密度替代完整空间评估。

> **图示：TME细胞生态地图**
> 蓝/绿免疫细胞和紫色基质并非固定“好”或“坏”；其空间位置、状态和相互作用共同决定治疗反应。

### 表10-1：TME主要细胞与结构功能

**十类微环境成分的抗肿瘤与促肿瘤作用**

| 成分 | 抗肿瘤功能 | 促肿瘤/抑制功能 | 代表标志 | 干预方向 |
| --- | --- | --- | --- | --- |
| CD8 T细胞 | 颗粒酶/穿孔素杀伤 | 耗竭后功能下降 | CD8、GZMB、TCF1 | ICI、疫苗、双抗 |
| Treg | 限制过度炎症 | 抑制效应T细胞 | FOXP3、CD25、CTLA-4 | 选择性耗竭/重编程 |
| NK细胞 | 识别MHC-I缺失 | 可被TGF-β抑制 | CD56、NKG2D、CD16 | CAR-NK、衔接器 |
| 树突细胞 | 交叉呈递和启动 | 耐受性状态 | cDC1、XCR1、BATF3 | FLT3L、疫苗、STING |
| TAM | 吞噬和呈递 | 血管生成、IL-10/TGF-β | CSF1R、SPP1、CD68 | CSF1R、CD47、重极化 |
| MDSC | 特定条件可分化 | ARG1、ROS、NO抑制 | LOX-1、S100A8/9 | 募集/代谢/分化干预 |
| CAF | 部分亚群限制扩散 | ECM屏障、TGF-β | FAP、αSMA、PDGFR | FAP、TGF-β、基质调节 |
| 内皮细胞 | 支持免疫细胞进入 | 异常血管和免疫排斥 | VEGFR2、CD31 | 抗VEGF/正常化 |
| ECM | 维持组织结构 | 高压、药物/细胞屏障 | 胶原、HA、纤连蛋白 | 酶解/力学调节 |
| 神经/周细胞 | 组织稳态 | 神经营养与血管异常 | NGF、RGS5 | 神经信号/血管稳定 |

在髓系生态中，TAM最丰富也最具可塑性，因此“去除还是重编程”成为首要策略分歧。

## 10.2 巨噬细胞靶向：从耗竭到吞噬检查点

M1/M2模型分别代表IFN-γ/LPS驱动的促炎状态与IL-4/IL-13驱动的修复状态，但人体TAM通常同时表达多种程序。临床开发若只用单一M1/M2标志，容易忽略来源、空间和治疗诱导变化。更合理的问题是：某一TAM状态是否排斥T细胞、支持血管或抑制吞噬，以及干预后由什么细胞补位。

CSF1–CSF1R维持多种巨噬细胞存活，抑制剂可减少或重编程TAM。Pexidartinib在腱鞘巨细胞瘤（TGCT）证明CSF1R生物学可成药，但实体瘤中单药活性有限，且肝毒性和组织驻留巨噬细胞损失限制剂量。2025-02，选择性CSF1R抑制剂vimseltinib（Romvimza）基于MOTION研究获FDA批准用于症状性TGCT，2025-12，另一选择性CSF1R抑制剂pimicotinib基于全球III期MANEUVER（第25周ORR 54.0% vs 安慰剂3.2%）在中国获批TGCT，FDA已于2026-01受理其新药申请。这进一步说明CSF1R配体驱动的肿瘤（而非一般实体瘤中的TAM）是该机制最清晰的适应证。CCR2/CCR5或CXCR2阻断试图减少单核细胞和中性粒细胞样MDSC募集，肿瘤可能通过替代趋化轴补偿。

CD47与巨噬细胞SIRPα结合传递“不要吃我”信号。阻断后只有同时存在促吞噬信号——例如肿瘤特异抗体Fc、钙网蛋白或应激信号——才更可能选择性清除癌细胞。CD47广泛表达于红细胞，第一代抗体可导致贫血、血凝和输血检测干扰；低起始“priming”剂量或SIRPα-Fc融合蛋白旨在减轻抗原汇和红细胞毒性。

Magrolimab早期组合数据引发关注，但后续髓系肿瘤III期项目因无效或安全问题终止，说明早期单臂信号不能替代随机验证。Evorpacept采用低活性Fc以减少正常细胞吞噬，lemzoparlimab设计为减少红细胞结合；这些差异是否转化为疗效仍需具体癌种和抗体组合证据。

### 表10-2：CD47/SIRPα与TAM靶向主要管线

**十一个髓系检查点或巨噬细胞干预项目**

| 项目 | 公司 | 机制 | 主要场景 | 状态（截至2026.Q4） | 核心风险/问题 |
| --- | --- | --- | --- | --- | --- |
| Magrolimab | Gilead/Forty Seven | 抗CD47 IgG4 | MDS/AML/实体瘤历史研究 | 关键项目终止 | 贫血、随机试验失败 |
| Evorpacept / ALX148 | ALX Oncology | 低活性Fc SIRPα融合蛋白 | 与抗HER2/ICI组合 | II期：聚焦CD47高表达；ASPEN-09（Enhertu后HER2+乳腺癌）顶线预计2027年中 | 组合增量贡献与CD47检测切点 |
| Lemzoparlimab | AbbVie/I-Mab | 抗CD47 | 血液瘤/实体瘤 | AbbVie 2023年退出；中国高危MDS III期（NCT05709093）2023年启动，后续进展未见公开更新 | 红细胞保护与合作变动 |
| Maplirpacept / TTI-621 | Pfizer/Trillium | SIRPα-Fc | 淋巴瘤等 | 早期/调整 | 血小板与疗效窗口 |
| TTI-622 | Pfizer/Trillium | SIRPα-IgG4 Fc | 血液瘤 | 早期/调整 | 临床差异化 |
| BI 765063 | Boehringer/OSE | 抗SIRPα | 实体瘤 | I期 | 髓系亚群选择 |
| Pexidartinib | Daiichi Sankyo | CSF1R TKI | TGCT；实体瘤组合研究 | TGCT获批 | 严重肝毒性、实体瘤效力 |
| Vimseltinib / Romvimza | Deciphera/Ono | 选择性CSF1R TKI | 症状性TGCT | FDA获批（2025-02-14，MOTION） | 长期安全性与实体瘤外推 |
| Pimicotinib / ABSK021 | Abbisko/Merck KGaA | 选择性CSF1R TKI | TGCT | NMPA获批（2025-12，MANEUVER）；FDA新药申请审评中（2026-01受理） | 与已上市CSF1R抑制剂差异化 |
| Cabiralizumab | BMS/Five Prime | 抗CSF1R | 胰腺癌组合 | 开发受挫 | 随机证据不足 |
| PF-04136309 | Pfizer | CCR2抑制 | 胰腺癌历史研究 | 历史项目 | 募集轴补偿与肺毒性 |

> **临床/研究亮点：** **CD47赛道说明靶点验证不等于方案验证。**吞噬检查点机制明确，但正常红细胞抗原汇、组合依赖和疾病背景使治疗窗复杂；magrolimab后期项目终止要求全赛道重新重视随机数据。

与可塑性TAM相邻，MDSC是一组按功能定义、难以用单一表面标志锁定的抑制性髓系细胞。

## 10.3 MDSC：代谢剥夺与氧化抑制网络

MDSC分为单核细胞样M-MDSC与多形核/粒细胞样PMN-MDSC。它们不是稳定谱系名称，而是病理条件下扩增、具有T细胞抑制功能的未成熟髓系状态。PMN-MDSC与普通中性粒细胞表型高度重叠，临床样本必须结合密度、LOX-1等标志及功能实验，单靠CD11b或CD33不能证明抑制性。

MDSC通过精氨酸酶1（ARG1）消耗L-精氨酸，使TCR ζ链表达和T细胞增殖下降；诱导型一氧化氮合酶、活性氧和过氧亚硝酸盐可硝化TCR/趋化因子，阻止识别和迁移。它们还表达PD-L1、分泌IL-10/TGF-β并诱导Treg。缺氧、肿瘤GM-CSF、G-CSF、IL-6和S100A8/9促进扩增与募集。

策略包括CXCR2/CCR2阻断募集、全反式维甲酸促分化、低剂量化疗选择性减少髓系细胞、PI3Kγ抑制重编程，以及ARG1或ROS通路抑制。失败原因常是替代募集通路、组织内药物暴露不足和缺少可靠伴随标志。临床研究应同时测量外周血和肿瘤空间变化，避免把外周计数下降误当作TME解除抑制。

> **关键概念：** **MDSC是功能状态，不是一个药靶。**治疗必须说明针对哪一亚群、阻断何种抑制机制，并证明肿瘤组织内T细胞功能恢复。

髓系细胞构成可移动屏障，CAF和ECM则形成更稳定的空间与力学屏障。

## 10.4 CAF靶向：拆墙还是改造基质

CAF可来自组织驻留成纤维细胞、周细胞、间充质细胞及其他来源，分为肌成纤维样、炎症型、抗原呈递样等状态。FAP、αSMA或PDGFR并不能一对一标记所有亚群。胰腺癌研究提示某些αSMA高CAF可能限制侵袭，粗暴清除全部基质反而增加缺氧和免疫抑制，因此“间质越少越好”并不成立。

成纤维细胞活化蛋白（Fibroblast Activation Protein，**FAP**）在多种肿瘤CAF中表达，可用FAP PET进行全身成像，也成为FAP-CAR-T、FAP×CD3双抗和放射性配体靶点。主要安全问题是FAP在伤口愈合、骨髓基质和部分正常组织中的表达；细胞治疗可能持续存在，风险不同于快速清除的小分子放射配体。

TGF-β阻断可解除T细胞排斥，却影响组织稳态、伤口愈合和心血管功能。透明质酸酶试图降低间质压力，但在未经生物标志物选择的人群中未必改善生存。Navicixizumab实际是同时靶向DLL4与VEGF的双特异抗体，主要作用于血管生成，不能归为“抗基质药”；严谨分类有助于识别真正作用环节。

更可行的思路是状态和空间选择：短暂开放基质、抑制特定CAF分泌程序、用FAP靶向递送载荷，或在放射药/双抗中利用局部高表达，而不是永久清空所有成纤维细胞。疗效评价应包含灌注、免疫浸润和肿瘤力学，而不只看基质染色下降。

除细胞和基质外，低氧、营养竞争和代谢废物构成了可药物干预的化学微环境。

## 10.5 TME代谢干预：色氨酸、腺苷、乳酸与血管

肿瘤和髓系细胞可通过IDO1/TDO把色氨酸转化为犬尿氨酸。色氨酸下降激活应激反应，犬尿氨酸经芳烃受体促进Treg与耐受。机制促成IDO1抑制剂与PD-1联合热潮，但epacadostat+pembrolizumab在III期ECHO-301/KEYNOTE-252黑色素瘤研究未改善PFS或OS。可能原因包括靶点抑制不足、TDO补偿、患者未按通路活性选择以及小型早期研究高估效应。

细胞外ATP经CD39和CD73转化为腺苷，A2A/A2B受体提高免疫细胞cAMP并抑制TCR、NK和髓系功能。CD73抗体、A2AR小分子及双靶点分子进入临床，但正常心血管和神经系统也依赖腺苷。通路冗余和肿瘤内浓度测量困难，使外周药代不能直接证明局部解除抑制。

肿瘤糖酵解产生乳酸和酸性环境，与T细胞竞争葡萄糖并改变巨噬细胞；缺氧诱导HIF程序、VEGF和腺苷轴。直接抑制乳酸转运蛋白MCT1/4或乳酸脱氢酶面临正常组织代谢窗口。HIF-2α抑制剂belzutifan已在VHL相关肿瘤和晚期透明细胞肾癌获批，2025-05扩展至嗜铬细胞瘤/副神经节瘤（PPGL，LITESPARK-015，ORR 26%），2026年又先后获批联合帕博利珠单抗用于透明细胞肾癌术后辅助（2026-06-12，LITESPARK-022）和联合lenvatinib用于PD-(L)1治疗后晚期透明细胞肾癌（2026-09-24，LITESPARK-011）。同类药物casdatifan正在III期PEAK-1（NCT07011719，约720例，PD-(L)1治疗后ccRCC，联合cabozantinib对比安慰剂+cabozantinib）中评估。HIF-2α抑制主要作用于肿瘤细胞自身的缺氧转录程序，而非直接改造免疫细胞，但其下游VEGF等因子会重塑血管微环境。相比单点抑制，改善灌注和氧合可能同时缓解多种抑制，但过度抗血管会加剧缺氧。

VEGF不只是血管生成因子，也抑制树突细胞成熟、促进Treg/MDSC并形成异常内皮屏障。适度抗VEGF可产生血管正常化窗口，解释atezolizumab+bevacizumab在肝细胞癌等场景的免疫–血管协同；同时出血、血栓、高血压和蛋白尿要求按癌种和患者风险选择。PD-1×VEGF双特异抗体（如ivonescimab）把这一免疫–血管协同写进单一分子：中国HARMONi-A最终OS HR 0.74，而多区域HARMONi的OS未达统计学显著，说明“共定位”机制同样需要多区域随机OS验证，详见[第5章](05-bispecific.md)。

### 表10-3：TME代谢与血管通路抑制剂管线

**十二类微环境代谢/血管策略及临床教训**

| 靶点/通路 | 代表项目 | 机制 | 阶段/结果 | 关键标志物 | 主要挑战 |
| --- | --- | --- | --- | --- | --- |
| IDO1 | Epacadostat | 减少犬尿氨酸 | III期阴性 | Kyn/Trp比值 | TDO补偿与选择不足 |
| IDO1 | Linrodostat | IDO1抑制 | 临床研究 | 肿瘤IDO1 | 组合增量 |
| TDO2 | 多项早期小分子 | 阻断肝/肿瘤犬尿氨酸 | 早期 | TDO2表达 | 系统代谢与冗余 |
| CD73 | Oleclumab | 阻止AMP→腺苷 | II期 | CD73/腺苷签名 | CD39与替代来源 |
| A2AR | Ciforadenant | 阻断腺苷受体 | II期开发 | 腺苷基因签名 | 受体冗余 |
| A2AR/A2BR | Etrumadenant | 双受体拮抗 | II期 | 免疫浸润 | 心血管/组合毒性 |
| VEGF-A | Bevacizumab | 中和VEGF | 多癌种获批 | 尚无统一预测标志 | 出血、高血压、窗口 |
| VEGFR TKI | Axitinib/lenvatinib | 血管生成激酶抑制 | 与ICI多方案 | 灌注/血压 | 剂量与正常化窗口 |
| MCT1 | AZD3965 | 抑制乳酸转运 | I期 | MCT1高、MCT4低 | 视网膜/代谢适应 |
| ARG1 | INCB001158 | 恢复精氨酸 | I/II期 | ARG1/精氨酸 | 多细胞来源和补偿 |
| HIF-2α | Belzutifan | 阻断HIF-2α转录程序 | VHL/RCC/PPGL获批；2026年获批联合pembrolizumab辅助及联合lenvatinib | VHL失活/ccRCC | 贫血、低氧血症 |
| HIF-2α | Casdatifan (AB521) | HIF-2α抑制 | III期PEAK-1（NCT07011719）入组中 | ccRCC | 与已上市同类差异化 |

单一代谢节点容易被补偿，因此“冷转热”通常需要按缺陷组合启动、浸润与解除抑制。

## 10.6 Turning Cold to Hot：组合必须匹配免疫循环缺口

“冷转热”不是把任意炎症药与ICI叠加，而是诊断癌症免疫循环在哪一步中断：抗原不足可用放疗、溶瘤病毒或疫苗；树突细胞启动不足可用STING/TLR激动或CD40激动；血管和基质排斥可用抗VEGF、TGF-β或FAP策略；已有浸润但耗竭则更适合检查点阻断。若缺陷识别错误，组合会增加毒性而不增加有效T细胞。

局部放疗造成DNA损伤、免疫原性死亡和cGAS–STING信号，偶尔引发未照射病灶退缩的远隔效应（abscopal effect）。但临床上远隔反应并不常见，剂量分割、照射病灶、淋巴结保护和ICI时序均影响结果。大范围照射也会清除淋巴细胞，因此“放疗天然免疫激活”是过度简化。

溶瘤病毒可释放抗原与I型干扰素，疫苗可扩增特定克隆，双抗可直接搭桥；这些方法都可能与ICI协同。2026-08-06，FDA加速批准溶瘤HSV-1病毒vusolimogene oderparepvec（RP1，Tudriqev）联合nivolumab用于PD-1治疗后进展的不可切除晚期皮肤黑色素瘤（单臂IGNYTE，n=140，ORR 24.2%；见[第8章](08-gene-therapy.md)），成为“原位疫苗+PD-1”路线的监管节点，但此前曾两次收到CRL，继续批准取决于确证研究IGNYTE-3。相反，ECHO-301表明有合理机制和早期ORR仍可能在III期失败。组合开发需要治疗前后活检证明通路调节、预设生物标志物、足够对照组和可归因毒性监测。

空间转录组、单细胞测序和多重成像正在把“热/冷”拆为可测状态，例如T细胞位于肿瘤巢内还是被CAF包围、cDC1是否与TCF1+干样T细胞共定位。未来患者选择应从单一PD-L1百分比转向细胞、空间和功能的组合指标，但高维标志物仍需跨平台标准化。

### 表10-4：Cold→Hot转化策略与临床证据

**十一种微环境转化策略的作用环节和证据边界**

| 策略 | 主要缺陷 | 机制 | 代表组合 | 证据状态 | 主要风险 |
| --- | --- | --- | --- | --- | --- |
| 放疗+ICI | 抗原/启动不足 | 免疫原性死亡、STING | SBRT+PD-1 | 癌种依赖 | 淋巴细胞减少、器官炎症 |
| 溶瘤病毒+ICI | 抗原与浸润不足 | 病毒炎症+原位疫苗 | T-VEC+pembrolizumab；RP1+nivolumab | RP1+nivolumab获FDA加速批准（2026-08，PD-1后晚期黑色素瘤）；仍需随机确证 | 病毒安全、局部可及性 |
| 疫苗+ICI | 克隆频率低 | 扩增肿瘤特异T细胞 | V940+pembrolizumab | 后期开发 | 制造延迟、免疫选择 |
| 抗VEGF+ICI | 异常血管排斥 | 血管正常化/髓系调节 | Atezolizumab+bevacizumab；PD-1×VEGF双抗 | 多场景已验证；双抗全球OS待确证 | 出血、血栓、高血压 |
| TGF-β+ICI | CAF/排斥 | 解除基质边缘滞留 | 双功能陷阱/抗体 | 尚未普遍验证 | 组织稳态毒性 |
| CD40激动+ICI | 树突启动不足 | 激活APC | CD40 mAb+PD-1 | 早中期 | 细胞因子与肝毒性 |
| STING激动+ICI | 先天感知不足 | I型干扰素/cDC1 | 瘤内STING+PD-1 | 早期、系统递送难 | 全身炎症/耐受 |
| IDO1+ICI | 犬尿氨酸抑制 | 恢复色氨酸轴 | Epacadostat+pembro | III期阴性 | 通路冗余 |
| CD47+肿瘤抗体 | 吞噬不足 | 解除SIRPα检查点 | Evorpacept+trastuzumab | 早中期 | 贫血与组合依赖 |
| FAP/基质+ICI | 物理排斥 | 重塑CAF/递送载荷 | FAP双抗/放射配体+ICI | 早期 | 正常修复组织 |
| IL-15激动+BCG | NK/T细胞活化不足 | IL-15超激动剂扩增NK与CD8 T细胞 | Nogapendekin alfa inbakicept（Anktiva）+BCG | BCG无应答NMIBC获批（CIS 2024；单纯乳头状2026-10） | 局部灌注场景，外推有限 |

> **图示：Cold-to-Hot策略的免疫循环覆盖**
> 颜色深浅表示主要作用强度，并辅以轴标签；策略通常覆盖多个环节，但临床证据强度不能由机制覆盖度推断。

> **临床/研究亮点：** **ECHO-301是组合开发的反例教材。**Epacadostat与pembrolizumab有完整机制和早期响应信号，却在未经通路标志物选择的III期黑色素瘤研究中未改善PFS或OS，终结了“机制合理即可叠加ICI”的假设。

## 10.7 2025下半年—2026年关键进展（截至2026-11-12）

2025年7月至2026年11月，微环境干预领域新增的“硬证据”主要来自与ICI组合的血管、先天免疫和溶瘤病毒策略，而不是单独的髓系或代谢靶点。本次检索未见CD47/SIRPα、IDO1或腺苷通路的新III期阳性结果；CSF1R与HIF-2α则在明确依赖相应通路的肿瘤中继续获批。

### 表10-5：2025下半年—2026年TME相关关键事件

**十项与微环境调节直接相关的监管和数据事件**

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-11（SITC 2025） | HARMONi-A最终OS：ivonescimab+化疗 vs 化疗 HR 0.74（p=0.019） | III期数据（中国） | PD-1×VEGF共定位策略首个III期OS阳性 |
| 2025-11-21 / 2026-07-10 | EV+帕博利珠单抗相继获批不适合/适合顺铂MIBC围手术期 | FDA批准 | ADC诱导的抗原释放与PD-1阻断组合进入可治愈场景，见[第2章](02-immunotherapy.md) |
| 2025-12 | Pimicotinib（CSF1R）在中国获批TGCT；FDA于2026-01受理NDA | NMPA批准 | MANEUVER：第25周ORR 54.0% vs 3.2% |
| 2026-01 | FDA受理ivonescimab BLA（PDUFA 2026-11-14） | 监管 | 多区域HARMONi的OS HR 0.79未达显著，审评结果晚于本库截止日 |
| 2026-05-28 | 度伐利尤单抗+BCG获批BCG初治高危NMIBC | FDA批准 | 局部先天免疫刺激与PD-L1阻断组合；POTOMAC DFS HR 0.68 |
| 2026年中（ASCO 2026） | HARMONi-6：ivonescimab+化疗对比替雷利珠单抗+化疗，鳞状NSCLC OS HR 0.66 | III期数据（中国） | ≥3级出血3% vs 1%，血管相关毒性需随访 |
| 2026-06-12 | Belzutifan+帕博利珠单抗获批中高危/高危透明细胞RCC术后辅助 | FDA批准 | LITESPARK-022（n=1841）：DFS HR 0.72 |
| 2026-08-06 | RP1（vusolimogene oderparepvec）联合nivolumab获加速批准，PD-1治疗后进展的不可切除晚期皮肤黑色素瘤 | FDA加速批准 | IGNYTE（n=140）ORR 24.2%；细胞、组织与基因治疗咨询委员会10:3支持；确证研究IGNYTE-3 |
| 2026-09-24 | Belzutifan+lenvatinib获批PD-(L)1治疗后晚期透明细胞RCC | FDA批准 | LITESPARK-011（n=747）：对比cabozantinib PFS HR 0.74，ORR 53% vs 40% |
| 2026-10-14 | Anktiva（IL-15超激动剂）+BCG扩展至BCG无应答的高级别单纯乳头状NMIBC | FDA批准（适应症扩展） | 依据2024年CIS队列证据外推，未新增临床试验；较PDUFA日期（2027-01-06）提前 |

PD-1×VEGF双抗是本期最受关注的TME相关分子类别。它把抗VEGF的血管正常化与PD-1阻断绑定在同一分子上，理论上利用肿瘤高VEGF环境实现共定位；但中国HARMONi-A、HARMONi-6的OS获益与多区域HARMONi的OS未达显著并存，提示人群、对照方案和后续治疗都可能改变“免疫–血管协同”的净效应。出血等血管相关毒性也必须与ICI免疫毒性分开评估。

局部先天免疫刺激、细胞因子和溶瘤病毒则从“启动不足”环节切入：POTOMAC把BCG灌注与PD-L1阻断结合，Anktiva以IL-15超激动剂增强BCG的NK/T细胞效应，RP1把溶瘤病毒的原位疫苗效应与PD-1阻断结合。它们都对应表10-4中“抗原/启动不足”的缺口，但POTOMAC有随机DFS证据，Anktiva乳头状适应症依据CIS队列外推，RP1属于单臂加速批准，证据强度不同，不能等量齐观。

髓系与代谢靶点仍处于“机制明确、随机证据不足”的阶段。CSF1R在TGCT等CSF1驱动肿瘤中继续获益（vimseltinib 2025-02获FDA批准，pimicotinib 2025-12获NMPA批准、FDA审评中），但在一般实体瘤TAM重编程上尚无随机阳性；CD47/SIRPα赛道在magrolimab终止后整体收缩，evorpacept转向CD47高表达人群富集，lemzoparlimab未见公开进展更新。HIF-2α抑制剂在2026年获得两项肾癌新批准（联合帕博利珠单抗辅助、联合lenvatinib后线），casdatifan进入III期，但其作用主要属于肿瘤细胞内在缺氧信号，教学上应与“改造免疫微环境”区分。

> **临床/研究亮点：** **PD-1×VEGF双抗把“血管正常化+解除抑制”压缩进一个分子。**HARMONi-A最终OS HR 0.74显示机制可转化为生存获益，但多区域HARMONi的OS未达统计学显著，说明微环境组合的获益高度依赖人群与对照设计；在FDA作出决定前，不宜把区域性研究结论直接外推到全球标准治疗。

## 主要参考来源

- Hanahan D. Hallmarks of Cancer: New Dimensions. Cancer Discovery. 2022;12:31–46. [DOI](https://doi.org/10.1158/2159-8290.CD-21-1059)
- Bied M, et al. Roles of macrophages in tumor development: a spatiotemporal perspective. Cell Mol Immunol. 2023;20:983–992. [DOI](https://doi.org/10.1038/s41423-023-01061-6)
- Mempel TR, Lill JK, Altenburger LM. How chemokines organize the tumour microenvironment. Nat Rev Cancer. 2024;24:28–50. [DOI](https://doi.org/10.1038/s41568-023-00635-w)
- Long GV, et al. Epacadostat plus pembrolizumab versus placebo plus pembrolizumab in unresectable or metastatic melanoma. Lancet Oncology. 2019;20:1083–1097. [DOI](https://doi.org/10.1016/S1470-2045(19)30274-8)
- Finn RS, et al. Atezolizumab plus Bevacizumab in Unresectable Hepatocellular Carcinoma. N Engl J Med. 2020;382:1894–1905. [DOI](https://doi.org/10.1056/NEJMoa1915745)
- Binnewies M, et al. Understanding the tumor immune microenvironment for effective therapy. Nat Med. 2018;24:541–550. [DOI](https://doi.org/10.1038/s41591-018-0014-x)
- U.S. FDA. Oncology (Cancer)/Hematologic Malignancies Approval Notifications（vimseltinib 2025-02-14等）. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications)
- Fierce Pharma. Akeso, Summit's PD-1xVEGF drug meets overall survival goal for the first time in a lung cancer trial (HARMONi-A). 2025. [Fierce](https://www.fiercepharma.com/pharma/akeso-summit-pd-1xvegf-meets-overall-survival-goal-first-time-lung-cancer-trial)
- Targeted Oncology. FDA Accepts BLA for Ivonescimab in Pretreated EGFR-Mutated NSCLC. 2026. [Targeted Oncology](https://www.targetedonc.com/view/fda-accepts-bla-for-ivonescimab-in-pretreated-egfr-mutated-nsclc)
- Managed Healthcare Executive. Ivonescimab reduced the risk of death by 34% in squamous NSCLC (HARMONi-6, ASCO 2026). 2026. [MHE](https://www.managedhealthcareexecutive.com/view/ivonescimab-reduced-the-risk-of-death-by-34-in-squamous-nsclc-asco-2026)
- U.S. FDA. FDA approves durvalumab in combination with Bacillus Calmette-Guerin for high-risk non-muscle invasive bladder cancer. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-durvalumab-combination-bacillus-calmette-guerin-high-risk-non-muscle-invasive-bladder)
- AACR. FDA Approvals in Oncology: July-September 2026（含vusolimogene oderparepvec加速批准）. 2026. [AACR](https://www.aacr.org/blog/2026/10/05/fda-approvals-in-oncology-july-september-2026/)
- OncLive. China's NMPA Approves Pimicotinib for Symptomatic Tenosynovial Giant Cell Tumor. 2025. [OncLive](https://www.onclive.com/view/china-s-nmpa-approves-pimicotinib-for-symptomatic-tenosynovial-giant-cell-tumor)
- CancerNetwork. FDA Accepts NDA for Pimicotinib in Tenosynovial Giant Cell Tumors. 2026. [CancerNetwork](https://www.cancernetwork.com/view/fda-accepts-nda-for-pimicotinib-in-tenosynovial-giant-cell-tumors)
- U.S. FDA. FDA approves belzutifan for pheochromocytoma or paraganglioma. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-belzutifan-pheochromocytoma-or-paraganglioma)
- Targeted Oncology. FDA Approves Adjuvant Belzutifan Plus Pembrolizumab for Kidney Cancer (LITESPARK-022). 2026. [Targeted Oncology](https://www.targetedonc.com/view/fda-approves-adjuvant-belzutifan-plus-pembro-for-kidney-cancer)
- U.S. FDA. FDA approves belzutifan in combination with lenvatinib for advanced renal cell carcinoma with a clear cell component. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-belzutifan-combination-lenvatinib-advanced-renal-cell-carcinoma-clear-cell-component)
- UroToday. ASCO 2026: PEAK-1, a randomized phase 3 trial of casdatifan and cabozantinib versus placebo and cabozantinib in advanced clear cell RCC. 2026. [UroToday](https://www.urotoday.com/conference-highlights/asco-2026/asco-2026-kidney-cancer/169374-asco-2026-peak-1-a-randomized-double-blind-active-control-multicenter-phase-3-trial-of-casdatifan-and-cabozantinib-versus-placebo-and-cabozantinib-in-patients-with-advanced-clear-cell-rcc.html)
- Targeted Oncology. FDA Grants Accelerated Approval to RP1 Plus Nivolumab in Advanced Melanoma. 2026. [Targeted Oncology](https://www.targetedonc.com/view/fda-grants-accelerated-approval-to-rp1-plus-nivolumab-in-advanced-melanoma)
- OncLive. FDA Approves Nogapendekin Alfa Inbakicept Plus BCG for High-Grade Papillary-Only BCG-Unresponsive NMIBC. 2026. [OncLive](https://www.onclive.com/view/fda-approves-nogapendekin-alfa-inbakicept-plus-bcg-for-high-grade-papillary-only-bcg-unresponsive-nmibc)
- ALX Oncology. First Quarter 2026 Financial Results and Corporate Update (evorpacept ASPEN-09). 2026. [Press release](https://www.barchart.com/story/news/1799817/alx-oncology-reports-first-quarter-2026-financial-results-and-provides-corporate-update)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
