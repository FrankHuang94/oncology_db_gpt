# 第03章：CAR-T细胞治疗

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2025.Q2 · 证据截止：2025-06-30。

## 学习目标

- 理解CAR-T的结构与基本原理的核心概念、证据边界与临床转化逻辑。
- 理解CAR-T制备流程的核心概念、证据边界与临床转化逻辑。
- 理解已批准CAR-T产品的核心概念、证据边界与临床转化逻辑。
- 理解实体瘤中的挑战与创新的核心概念、证据边界与临床转化逻辑。
- 理解CRS与ICANS毒性管理的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：肿瘤免疫治疗——免疫检查点抑制剂](02-immunotherapy.md) · [下一章：抗体药物偶联物（ADC）](04-adc.md)

## 03.1 CAR-T的结构与基本原理

嵌合抗原受体T细胞（Chimeric Antigen Receptor T-cell，**CAR-T**）把抗体样识别与T细胞信号装入同一合成受体。典型CAR由四部分组成：胞外抗原结合域决定识别对象；铰链或间隔区调节结合域与细胞膜的距离；跨膜域影响受体稳定、聚集和内源蛋白互作；胞内信号域把结合事件转化为激活。与天然TCR不同，CAR通常直接识别细胞表面蛋白而不依赖HLA呈递，因此可绕过部分MHC-I下调，却无法直接识别绝大多数胞内突变蛋白。

最常用结合域是单链可变片段（single-chain Variable Fragment，**scFv**），它用柔性连接肽把抗体重链和轻链可变区串联。scFv具有成熟抗体来源和较高亲和力，但可能发生自聚集、非特异性tonic signaling或产生抗药抗体。Nanobody体积更小、稳定性较高，适合多靶点串联；受体配体型CAR则使用天然配体或受体结构域，例如NKG2D配体识别。亲和力并非越高越好：过高可能攻击低水平表达靶点的正常组织，也可能延长免疫突触造成耗竭。

第一代CAR只有CD3ζ及其免疫受体酪氨酸活化基序，体内扩增和持续性不足。第二代加入一个共刺激域，形成当前获批产品主体；第三代串联两个共刺激域，但增加信号并未在所有情境中转化为更好疗效。第四代常称TRUCK或“装甲型CAR”，在激活后表达IL-12、IL-18、趋化因子、检查点阻断蛋白或其他转基因，以改造肿瘤微环境。所谓第五代通常在第二代骨架上加入细胞因子受体样JAK–STAT模块；代际是教学分类，不代表后一代必然优于前一代。

CD28与4-1BB（CD137）是最常见共刺激域。CD28产生快速、强烈的PI3K–AKT和糖酵解信号，常带来较快扩增和效应分化；4-1BB通过TRAF等通路支持线粒体代谢、记忆样状态和较长期持续。临床差异不能只由结构域解释，因为病毒载体、结合域、制造工艺、细胞组成、疾病负荷和清淋方案同时变化。Yescarta采用CD28，Kymriah采用4-1BB，它们来自不同试验和适应症，不能据此做单因素头对头结论。

> **图示：四代CAR结构横向比较**
> 菱形代表结合域，蓝色为跨膜域，紫色为CD3ζ，金色为共刺激模块；第四代额外携带可诱导效应分子。

### 表3-2：CAR结构代际与设计特征

**八种CAR结构或识别设计比较**

| 设计 | 结合模块 | 胞内信号 | 主要优势 | 主要风险 | 开发状态 |
| --- | --- | --- | --- | --- | --- |
| 第一代CAR | scFv | CD3ζ | 结构简单 | 扩增和持续性不足 | 历史/研究 |
| 第二代CD28 | scFv | CD28+CD3ζ | 快速效应 | 耗竭/炎症需平衡 | 多产品获批 |
| 第二代4-1BB | scFv | 4-1BB+CD3ζ | 记忆和持续 | 起效动力学不同 | 多产品获批 |
| 第三代 | scFv | 双共刺激+CD3ζ | 理论上多通路 | 过强/复杂信号 | 早期临床 |
| TRUCK/装甲型 | scFv | 第二代+诱导载荷 | 改造TME | 系统性细胞因子毒性 | I/II期 |
| Tandem CAR | 串联双scFv | 第二代 | 降低单抗原逃逸 | 几何和亲和力复杂 | 早期临床 |
| Nanobody CAR | VHH | 多种 | 紧凑、易多价化 | 免疫原性/特异性验证 | 早期临床 |
| Receptor-based CAR | 天然受体/配体 | 多种 | 可识别配体家族 | 正常组织表达谱宽 | 探索 |

受体设计只有被稳定、无菌且一致地制造出来，才能成为可输注的活细胞药物。

## 03.2 CAR-T制备流程：患者细胞如何成为批次唯一的药物

自体CAR-T从单采（Leukapheresis）开始，采集患者外周血单个核细胞并送往制造中心。工厂富集T细胞，以抗CD3/CD28磁珠或其他试剂激活，再用慢病毒或γ-逆转录病毒转导CAR。细胞在封闭或半封闭系统中扩增，完成活率、身份、CAR表达、效力、无菌、支原体、内毒素和复制型病毒等放行检测后冷冻运输。患者在回输前接受氟达拉滨/环磷酰胺等清淋，降低内源淋巴细胞竞争并提高IL-7、IL-15等稳态细胞因子可用性。

“静脉到静脉”周转时间（vein-to-vein Time，TAT）不仅是培养天数，还包括排期、跨境物流、质量调查和医院准备。患者在等待期可能疾病进展，需要桥接治疗；过强桥接又可能损害T细胞或增加感染。制造失败可来自起始细胞少、既往治疗导致T细胞衰竭、扩增不足、污染或不符合效力标准。产品放行是多属性控制，而非只确认“有CAR表达”。

异体CAR-T使用健康供者或标准化细胞库，可预先制造、冷冻并更快使用，但供者TCR可能引发移植物抗宿主病，受者免疫系统也会清除产品。常见工程包括敲除TRAC消除内源TCR、改变B2M/HLA降低宿主识别，并加入安全开关。HLA降低会增加NK细胞清除风险，基因编辑也带来脱靶和染色体重排监测，因此“现货”并不等于制造简单。

> **图示：自体CAR-T制造与临床流程时间轴**
> 各平台培养与放行流程不同，图中天数是常见范围而非产品承诺。回输后还需CRS/ICANS监测、感染预防和长期随访。

> **关键概念：** CAR-T的关键质量属性包括身份、纯度、活率、效力、转导水平、细胞亚群和安全性。最终细胞数相同的两个批次，若记忆表型或单位细胞效力不同，临床行为仍可能不同。

制造平台决定可及性，而监管批准数据说明哪些产品已经在特定血液肿瘤中建立收益风险。

## 03.3 已批准CAR-T产品：靶点相似，产品并不等价

截至2025年第二季度，FDA已批准七个自体CAR-T产品：五个CD19路径产品（Kymriah、Yescarta、Tecartus、Breyanzi、Aucatzyl）和两个BCMA产品（Abecma、Carvykti）。中国NMPA还批准了relma-cel、Fucaso、CNCT19等产品。标签随时间前移，例如Yescarta和Breyanzi进入部分大B细胞淋巴瘤二线，BCMA产品也从四线后向更早线次扩展。下表使用代表性获批场景和关键注册研究，完整适应症需查最新版标签。

跨产品比较受到严重混杂。ZUMA、JULIET、TRANSCEND、KarMMa和CARTITUDE的入组、桥接治疗、中心经验、随访和终点评估不同。ORR与CR可描述抗肿瘤活性，但长期价值取决于缓解持续时间、无进展生存、总生存和后续移植。上市价格也只是产品采购部分，不包含单采、清淋、住院、ICU、感染治疗和长期随访；不同支付体系下净成本差异很大。

### 表3-1：FDA及主要地区已批准CAR-T产品

**十个已批准CAR-T产品的靶点、适应症、试验、制造和定价比较**

| 产品/通用名/代码 | 靶点/共刺激 | 公司 | 首次批准 | 代表适应症 | 关键试验 | 代表数据 | 载体/制造 | 美国标价 | 黑框警告摘要 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Kymriah / tisagenlecleucel / CTL019 | CD19 / 4-1BB | Novartis | FDA 2017 | ≤25岁B-ALL；LBCL；FL | ELIANA/JULIET/ELARA | ALL缓解率约81%（早期注册） | 慢病毒/自体 | 约$475k起，需核最新 | CRS、神经毒性、T细胞恶性肿瘤 |
| Yescarta / axi-cel / KTE-C19 | CD19 / CD28 | Kite/Gilead | FDA 2017 | LBCL；FL | ZUMA-1/7/5 | ZUMA-1 ORR约82%、CR约54% | γ逆转录病毒/自体 | 约$424k，需核最新 | 同类黑框 |
| Tecartus / brexu-cel / KTE-X19 | CD19 / CD28 | Kite/Gilead | FDA 2020 | MCL；成人B-ALL | ZUMA-2/3 | ZUMA-2 ORR约93%、CR约67% | γ逆转录病毒/自体富集 | 约$462k，需核最新 | 同类黑框 |
| Breyanzi / liso-cel / JCAR017 | CD19 / 4-1BB | BMS/Juno | FDA 2021 | LBCL；CLL/SLL；FL | TRANSCEND/TRANSFORM | TRANSCEND ORR约73%、CR约53% | 慢病毒；固定CD4:CD8 | 约$488k，需核最新 | 同类黑框 |
| Abecma / ide-cel / bb2121 | BCMA / 4-1BB | BMS/2seventy | FDA 2021 | 复发/难治多发性骨髓瘤 | KarMMa/KarMMa-3 | KarMMa ORR约72%、CR约28% | 慢病毒/自体 | 约$498k，需核最新 | 同类黑框 |
| Carvykti / cilta-cel / JNJ-68284528 | BCMA双表位 / 4-1BB | Janssen/Legend | FDA 2022 | 复发/难治多发性骨髓瘤 | CARTITUDE-1/4 | CARTITUDE-1 ORR约98%、sCR约80% | 慢病毒/自体 | 约$465k，需核最新 | 同类黑框；迟发神经事件关注 |
| Aucatzyl / obe-cel / AUTO1 | CD19 / 4-1BB | Autolus | FDA 2024 | 成人复发/难治B-ALL | FELIX | 总体缓解约63%（标签人群口径） | 慢病毒/自体 | 约$525k，需核最新 | CRS、神经毒性等 |
| Carteyva / relma-cel | CD19 / 4-1BB | JW Therapeutics | NMPA 2021 | 复发/难治LBCL | RELIANCE | 以中国标签为准 | 慢病毒/自体 | 中国定价另见市场章 | 地区标签警告 |
| Fucaso / equecabtagene autoleucel | BCMA / 4-1BB | IASO/Innovent | NMPA 2023 | 复发/难治多发性骨髓瘤 | FUMANBA-1 | 以中国标签为准 | 慢病毒/自体 | 地区价格 | 地区标签警告 |
| Fuda-cel / CNCT19 | CD19 / 4-1BB | Juventas | NMPA 2023 | 成人复发/难治B-ALL | 中国注册研究 | 以中国标签为准 | 慢病毒/自体 | 地区价格 | 地区标签警告 |

> **使用边界：** FDA于2024年要求当时获批的BCMA或CD19定向基因修饰自体CAR-T加入治疗后T细胞恶性肿瘤严重风险黑框警告，并建议终生监测继发恶性肿瘤。绝对风险评估仍需长期药物警戒，但不能因罕见风险忽略晚期恶性肿瘤中的已证实获益。

> **临床/研究亮点：** **ZUMA-7推动CAR-T前移。**在一线化免疫治疗后12个月内难治或复发的大B细胞淋巴瘤中，axi-cel相对挽救化疗后自体移植路径改善事件无发生生存，说明CAR-T不再只是“所有方案失败后的最后一步”。这项结论不能自动外推到所有复发时点或所有CAR-T产品。

血液瘤成功依赖可接受的B细胞靶点和细胞可达性，实体瘤同时缺乏这两项便利。

## 03.4 实体瘤中的五大障碍与工程化解法

实体瘤的第一道障碍是缺少“肿瘤必需且正常组织可牺牲”的表面抗原。CD19靶向会造成B细胞缺乏，但可用免疫球蛋白替代；HER2、EGFR、间皮素、GD2、GPC3和Claudin18.2在正常组织存在不同程度表达，过强CAR可能导致on-target/off-tumor毒性。第二道障碍是抗原空间异质性：只清除高表达克隆会选择抗原阴性细胞。Tandem CAR、双CAR或OR-gate识别可扩大覆盖，NOT-gate抑制受体则尝试用正常组织标志限制激活。

第三道障碍是归巢与物理屏障。异常血管、致密胶原、癌相关成纤维细胞和不匹配的趋化因子使输注细胞难以进入肿瘤。区域给药、表达CXCR2/CCR2b、靶向FAP或分泌基质降解酶是探索方向，但增加浸润也可能增加正常组织损伤。第四道障碍是免疫抑制微环境：TGF-β、腺苷、缺氧、低葡萄糖、Treg、TAM和MDSC共同降低效应。装甲型CAR可分泌IL-12/IL-18、局部检查点抗体或显性负TGF-β受体，必须控制载荷的空间和时间。

第五道障碍是持续刺激导致耗竭。CAR密度、亲和力、tonic signaling、启动子和共刺激域都会改变耗竭轨迹。可药物开关、逻辑门、诱导表达和短寿命mRNA CAR允许调节暴露；TRUCK通过招募内源免疫尝试让CAR-T不必直接识别每个细胞。实体瘤产品的早期ORR信号必须结合持续时间、靶点表达、剂量限制毒性和制造可行性解释。

### 表3-4：代表性实体瘤CAR-T临床管线

**八条实体瘤CAR-T代表管线**

| 项目/公司 | 靶点 | 癌种 | 工程特点 | 阶段 | 主要挑战 |
| --- | --- | --- | --- | --- | --- |
| Satri-cel / CARsgen | Claudin18.2 | 胃/胰腺癌 | 人源化自体CAR | II期 | 异质性、胃黏膜表达、制造 |
| GD2-CAR / 学术与多公司 | GD2 | 神经母细胞瘤/胶质瘤 | 多代结构 | I/II期 | 神经毒性和持续性 |
| GPC3-CAR / 多公司 | GPC3 | HCC | 装甲/区域给药探索 | I期 | 肝功能与TME |
| Mesothelin-CAR | MSLN | 间皮瘤/胰腺/卵巢 | 区域给药/安全开关 | I/II期 | 抗原密度和正常间皮 |
| EGFRvIII-CAR | EGFRvIII | 胶质母细胞瘤 | 肿瘤特异变体 | I期 | 快速抗原丢失 |
| B7-H3-CAR | B7-H3 | 脑瘤/儿科实体瘤 | 局部给药 | I期 | 正常组织表达和CNS炎症 |
| HER2-CAR | HER2 | 肉瘤/脑瘤 | 低亲和/区域策略 | I/II期 | on-target/off-tumor |
| PSMA-CAR | PSMA | 前列腺癌 | TGF-β抗性装甲 | I期 | 耗竭、血管表达与炎症 |

无论血液瘤或实体瘤，细胞扩增带来的系统炎症和神经毒性都是临床实施的核心能力。

## 03.5 毒性管理：CRS与ICANS不是同一种综合征

细胞因子释放综合征（Cytokine Release Syndrome，**CRS**）由CAR-T激活后T细胞、单核/巨噬细胞和内皮细胞形成的炎症放大引起。ASTCT定义要求发热≥38°C，排除其他原因后按低血压和低氧需求分级：只有发热为1级；不需血管升压药的低血压和/或低流量氧为2级；一种血管升压药或高流量氧为3级；多种升压药或正压通气为4级。分级取最严重表现，不按细胞因子实验室峰值决定。

Tocilizumab阻断IL-6受体，是CRS的核心干预，可快速改善发热和低血压；重症或反复CRS常加糖皮质激素。CRS处理同时包括培养、经验性抗感染、液体和器官支持，因为中性粒细胞减少患者的脓毒症可与CRS共存。过量补液可能加重毛细血管渗漏。部分难治病例在专科方案中考虑anakinra等，但证据和产品路径仍在演化。

免疫效应细胞相关神经毒性综合征（Immune Effector Cell-Associated Neurotoxicity Syndrome，**ICANS**）可表现为注意力下降、失语、书写障碍、意识改变、癫痫、运动无力或脑水肿。成人ICE评分评估定向、命名、执行指令、书写和注意；最终分级还结合意识、癫痫、运动和颅压/脑水肿。Tocilizumab对孤立ICANS穿过血脑屏障有限，不能代替糖皮质激素和神经重症支持；CRS并存时仍可用于CRS。

> **图示：发热后CRS/ICANS评估与处理流程**
> 流程为教学性概览；药物剂量、重复间隔和ICU标准必须遵循产品标签、ASTCT分级和机构方案。

更快可及、更标准化的异体与体内平台，必须在降低制造负担的同时保留对这些毒性的控制。

## 03.6 下一代、通用型与In Vivo CAR-T

通用型CAR-T的目标是从健康供者一次采集制造多个批次，减少等待并提高起始T细胞质量。Allogene的AlloCAR T使用基因编辑降低内源TCR并配合抗CD52清淋；Caribou以CRISPR平台开发CB-010、CB-011；Precision BioSciences使用ARCUS核酸酶。核心挑战是宿主排斥造成持续时间短，强化清淋又增加感染。TRAC敲除降低GVHD，B2M敲除降低HLA-I却可能触发NK清除，PDCD1敲除可增强功能但可能增加失控激活。多位点编辑需要监测脱靶、易位和克隆优势。

In vivo CAR-T试图在患者体内直接把CAR遗传信息递送给T细胞，省去单采和体外扩增。递送载体可为T细胞嗜性的慢病毒、包膜病毒样颗粒或靶向脂质纳米颗粒。Umoja的VivoVec等平台通过表面配体选择T细胞并递送转基因；其他路线使用可降解mRNA获得短暂CAR表达。体内转导的难点包括细胞类型特异性、剂量不可回收、抗载体免疫、插入风险和批间体内暴露变异。它更接近“给药即制造”，监管上需同时评价载体和最终生成细胞。

### 表3-3：自体、异体与In Vivo CAR-T平台比较

**三类CAR-T平台在八个维度的比较**

| 维度 | 自体CAR-T | 异体CAR-T | In Vivo CAR-T | 评价要点 |
| --- | --- | --- | --- | --- |
| 起始材料 | 患者T细胞 | 健康供者/细胞库 | 患者体内T细胞 | 疾病和既往治疗影响质量 |
| 可及速度 | 周级 | 现货，日级 | 理论上直接给药 | 实际排期与准备仍重要 |
| 批次规模 | 一人一批 | 一批多剂 | 载体批次多人用 | 成本结构不同 |
| GVHD | 低 | 需TCR编辑 | 自体体内生成，理论较低 | 细胞来源必须确认 |
| 宿主排斥 | 较低 | 核心限制 | 载体免疫/细胞状态影响 | 决定持续性 |
| 基因工程 | 常为单一CAR | 常需多位点编辑 | 受载荷和靶向限制 | 复杂度增加安全检测 |
| 剂量控制 | 回输前可测 | 回输前可测 | 体内生成量间接控制 | 药代概念改变 |
| 成熟度 | 多产品获批 | I/II期 | 早期临床/临床前 | 不能按理论成本替代临床证据 |

### 表3-5：通用与体内CAR-T公司平台

**八家通用或体内CAR-T公司的代表技术**

| 公司 | 平台/项目 | 细胞/递送 | 关键编辑 | 代表靶点 | 主要风险 |
| --- | --- | --- | --- | --- | --- |
| Allogene | AlloCAR T / cema-cel | 供者T细胞 | TRAC/CD52 | CD19 | 排斥与清淋感染 |
| Caribou | chRDNA / CB-010/011 | 供者T细胞 | TRAC及项目特异编辑 | CD19/BCMA | 持续性和编辑安全 |
| Precision BioSciences | ARCUS / azer-cel | 供者T细胞 | TCR等 | CD19 | 排斥 |
| Cellectis | TALEN / UCART | 供者T细胞 | TRAC/CD52等 | CD19/其他 | 感染与GVHD |
| CRISPR Therapeutics | CTX平台 | 供者T细胞 | CRISPR多位点 | CD70等 | 编辑与持久性 |
| Umoja | VivoVec / UB-VV111 | 体内靶向病毒载体 | 通常无体外编辑 | CD19 | 脱靶转导和剂量控制 |
| Interius | In vivo lentiviral platform | 体内靶向载体 | 载体编码CAR | CD20等 | 组织特异性与免疫 |
| Capstan | tLNP / mRNA CAR | 靶向LNP短暂表达 | 非整合mRNA | CD19等 | 表达持续和重复给药 |

> **临床/研究亮点：** **实体瘤GD2-CAR提供“可行但未定型”的证据。**神经母细胞瘤研究显示部分患者可获得深度缓解，证明CAR-T能够在实体瘤中扩增并产生临床活性；但小样本、产品差异、既往治疗和持续性限制意味着它尚不能复制CD19 CAR-T的普遍范式。

## 主要参考来源

- U.S. FDA. Considerations for the Development of CAR T Cell Products: Guidance for Industry. 2024. [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-development-chimeric-antigen-receptor-car-t-cell-products)
- Lee DW, et al. ASTCT Consensus Grading for Cytokine Release Syndrome and Neurologic Toxicity. Biol Blood Marrow Transplant. 2019;25:625–638. [DOI](https://doi.org/10.1016/j.bbmt.2018.12.758)
- Locke FL, et al. Axicabtagene Ciloleucel as Second-Line Therapy for Large B-Cell Lymphoma. NEJM. 2022;386:640–654. [DOI](https://doi.org/10.1056/NEJMoa2116133)
- Berdeja JG, et al. Ciltacabtagene autoleucel in relapsed or refractory multiple myeloma. Lancet. 2021;398:314–324. [DOI](https://doi.org/10.1016/S0140-6736(21)00933-8)
- U.S. FDA. Boxed warning for T-cell malignancies following BCMA- or CD19-directed autologous CAR-T. 2024. [FDA](https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/fda-requires-boxed-warning-t-cell-malignancies-following-treatment-bcma-directed-or-cd19-directed)
- Majzner RG, Mackall CL. Clinical lessons learned from the first leg of the CAR T cell journey. Nature Medicine. 2019;25:1341–1355. [DOI](https://doi.org/10.1038/s41591-019-0564-6)


---

内容版本：2025.Q2。下次更新建议：2025.Q4，重点复核 FDA 标签、临床阶段和公司交易状态。
