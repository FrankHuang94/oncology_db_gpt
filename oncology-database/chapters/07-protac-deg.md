# 第07章：蛋白降解技术（PROTAC与分子胶）

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解PROTAC的原理与设计的核心概念、证据边界与临床转化逻辑。
- 理解主要E3连接酶的核心概念、证据边界与临床转化逻辑。
- 理解分子胶降解剂的核心概念、证据边界与临床转化逻辑。
- 理解临床管线与主要公司的核心概念、证据边界与临床转化逻辑。
- 理解局限与下一代技术的核心概念、证据边界与临床转化逻辑。
- 理解首个获批PROTAC（vepdegestrant）与首个获批CELMoD（iberdomide）对靶向降解领域的意义与局限。

## 章节导航

[返回总目录](../index.md) · [上一章：靶向小分子治疗](06-targeted-therapy.md) · [下一章：基因治疗与细胞治疗](08-gene-therapy.md)

## 07.1 PROTAC的原理与设计：从占位抑制到事件驱动药理

泛素–蛋白酶体系统（Ubiquitin–Proteasome System，**UPS**）负责选择性清除大部分短寿命或损伤胞内蛋白。E1利用ATP激活泛素，E2携带泛素，E3连接酶识别底物并促进泛素转移；形成适当链型后，26S蛋白酶体展开并降解底物。人类拥有少数E1、数十E2和数百E3，E3提供大部分底物选择性。靶向蛋白降解利用这套细胞质控，不必长期占据蛋白功能口袋。

蛋白水解靶向嵌合体（Proteolysis-Targeting Chimera，**PROTAC**）是异双功能分子：一端结合目标蛋白（Protein of Interest，POI），另一端结合E3连接酶，中间由连接子控制距离、柔性和理化性质。PROTAC诱导POI–PROTAC–E3三元复合物，使POI表面可接近的赖氨酸被泛素化；POI进入蛋白酶体后，PROTAC理论上可释放并催化下一轮降解。实际循环受细胞通透、三元复合物停留时间、泛素链编辑、蛋白再合成和分子被困等限制。

传统抑制剂依赖占位驱动（Occupancy-driven）药理：足够比例靶点需在足够时间被药物占据。降解剂更接近事件驱动（Event-driven）：短暂诱导一次有效泛素化即可移除整个蛋白，包括催化功能、支架功能和蛋白互作。降解可克服部分高配体浓度或靶点过表达，但并非天然优越；若POI快速再合成、缺少可泛素化几何、位于不可达细胞区室或疾病由下游变异驱动，降解同样失效。

三元复合物的协同性比二元亲和力更重要。正协同意味着POI与E3形成有利蛋白–蛋白界面，使看似较弱的配体也能产生稳定复合物；负协同则需要更高浓度。高浓度下PROTAC可分别饱和POI和E3，形成无效二元复合物并减少三元复合物，产生钩状效应（Hook Effect）。优化策略包括调整两端亲和力、连接子出口向量、长度、刚性和暴露，而不是一味提高剂量。

> **图示：PROTAC催化降解循环**
> 金色/青色圆端表示双功能配体，虚线回路表示理论催化循环。有效降解需要三元复合物、泛素链形成和蛋白酶体均可用。

### 表7-1：PROTAC与传统抑制剂核心比较

**八个维度比较异双功能降解剂与占位抑制剂**

| 维度 | 传统抑制剂 | PROTAC降解剂 | 开发含义 |
| --- | --- | --- | --- |
| 药理驱动 | 持续占位 | 诱导降解事件 | PK与PD可时间解耦 |
| 作用结果 | 抑制特定功能 | 移除完整蛋白 | 可消除支架功能 |
| 催化潜力 | 通常1:1占位 | 可亚化学计量循环 | 细胞内循环效率需实测 |
| 耐药 | 结合位点/旁路 | POI配体、E3、UPS与旁路 | 增加新耐药节点 |
| 分子量 | 常符合Ro5 | 常700–1100 Da | 渗透和口服暴露困难 |
| 选择性 | 二元亲和力主导 | 三元界面可增选择性 | 蛋白组学需验证新底物 |
| 剂量效应 | 多为单调增加 | 可出现Hook effect | 高浓度未必更强 |
| 可测PD | 磷酸化/功能 | Dmax、DC50、持续时间 | 组织靶蛋白定量关键 |

PROTAC的一端决定目标，另一端决定招募哪种E3；E3选择会改变组织、亚细胞定位和可降解底物谱。

## 07.2 主要E3连接酶：远不止CRBN与VHL

CRBN是CRL4复合物的底物受体，沙利度胺及其类似物结合后可招募IKZF1/3等新底物。CRBN配体化学成熟、细胞通透性较好，因此临床PROTAC和分子胶大量使用；但血液肿瘤既往IMiD暴露、CRBN低表达或通路突变可产生交叉耐药。VHL属于CRL2复合物，配体源于HIF-α识别基序，具有不同组织表达和三元复合几何，可作为CRBN互补。

MDM2本身调节p53，招募它可能同时稳定p53并降解POI，产生双重药理；IAP配体形成SNIPER，可能诱导cIAP自身降解并激活炎症信号。DCAF15由aryl sulfonamide分子胶招募RBM39，DCAF16定位核内，RNF114、KEAP1、FEM1B等提供新的组织和区室机会。数百E3中只有少数有高质量小分子配体，扩大“可配体E3组”是平台竞争重点。

E3并非仅按表达量选择。开发者还要考虑E3是否在疾病细胞中形成活性复合物、POI与E3是否共定位、三元复合物是否呈递合适赖氨酸、配体是否改变E3天然功能，以及正常组织表达是否扩大毒性。获得性耐药可来自CRBN、CUL4、DDB1或VHL通路改变，因此基线与进展时需要把E3机器纳入机制分析。

### 表7-2：E3连接酶配体与降解案例

**十类用于或正在探索靶向降解的E3连接酶**

| E3/底物受体 | 代表配体 | 组织/区室特点 | 代表降解案例 | 优势 | 限制 |
| --- | --- | --- | --- | --- | --- |
| CRBN | Thalidomide/lenalidomide衍生 | 广泛；核/胞质 | ER/AR/BTK PROTAC、CELMoD | 配体成熟、临床验证 | 新底物与CRBN耐药 |
| VHL | Hydroxyproline衍生 | 广泛；组织差异 | BRD4/AR等PROTAC | 三元界面丰富 | 配体极性和分子量 |
| MDM2 | Nutlin类 | p53网络 | BRD4等研究 | 可同时稳定p53 | 双重药理与血液毒性 |
| cIAP1/XIAP | Bestatin/SMAC mimetic | 凋亡/炎症通路 | SNIPER | 可利用IAP生物学 | 自身降解和非线性效应 |
| DCAF15 | Indisulam/E7820 | CRL4；核内底物 | RBM39分子胶 | 临床分子胶先例 | 底物谱有限 |
| DCAF16 | 共价片段 | 核内 | 核蛋白降解研究 | 区室选择性 | 配体成熟度低 |
| RNF114 | Nimbolide衍生 | RING E3 | BCR-ABL等研究 | 共价招募 | 反应性和脱靶 |
| KEAP1 | 共价/非共价配体 | 氧化应激网络 | 多POI研究 | 肿瘤背景相关 | NRF2通路扰动 |
| FEM1B | 半胱氨酸配体 | 还原应激感知 | 研究型PROTAC | 新E3空间 | 人体药理未验证 |
| KLHDC2 | C端降解子配体 | CRL2复合物 | 研究型降解 | C-degron机制 | 递送和选择性早期 |

异双功能分子显式连接两端，分子胶则用更小分子诱导原本不存在或很弱的蛋白界面。

## 07.3 分子胶降解剂：小分子如何重写底物选择

分子胶通常不是两端通过连接子连接，而是结合E3或目标表面，创造新的互补界面，使原本不会被该E3识别的蛋白成为新底物。它们分子量较小、口服性质常优于PROTAC，但发现更具偶然性，目标和降解机制可能在临床使用多年后才被解释。分子胶并非都通过UPS，也不应把所有诱导蛋白互作的小分子都叫降解剂。

Thalidomide、lenalidomide和pomalidomide结合CRBN，改变CRL4CRBN底物识别并降解转录因子IKZF1/3；在多发性骨髓瘤中，下游IRF4和MYC程序下降，同时存在免疫调节效应。药物的致畸性也来自新底物降解，说明“增加选择性”不等同于安全。CRBN、CUL4复合物或底物degron改变可导致耐药。

新一代CELMoD（Cereblon E3 Ligase Modulator）如iberdomide、mezigdomide（CC-92480）和golcadomide通过更强或不同动力学的CRBN调节实现深度底物降解。它们在IMiD耐药骨髓瘤或淋巴瘤中进入中晚期研究。2026-08-13，iberdomide（Zenbexus）联合皮下达雷妥尤单抗和地塞米松获FDA加速批准，用于既往至少一线（含蛋白酶体抑制剂和免疫调节剂）治疗的复发/难治多发性骨髓瘤。依据是III期EXCALIBER-RRMM中任意时间MRD阴性完全缓解率41%对21%（对照为达雷妥尤单抗+硼替佐米+地塞米松，DVd；主要疗效人群n=420），这使iberdomide成为首个获批CELMoD，也是骨髓瘤首个以MRD为早期终点的加速批准；PFS作为双主要终点之一仍在随访。Mezigdomide的III期SUCCESSOR-2（联合卡非佐米+地塞米松）中位PFS 18.0对8.3个月（进展或死亡风险降低52%），但3–4级治疗期不良事件83.7%对56.5%，SUCCESSOR-1读出已推迟至2027年；golcadomide正在III期GOLSEEK-1中联合R-CHOP用于初治高危大B细胞淋巴瘤。感染、骨髓抑制和继发肿瘤风险仍需与疗效共同评估。它们是分子胶，不是经典双功能PROTAC。

发现方法包括表型筛选、CRISPR耐药筛选、化学蛋白组学和结构设计。若某化合物的细胞活性依赖特定E3，耐药克隆富集E3或底物界面突变，且蛋白组显示选择性降解，就可建立机制链。结构预测可帮助优化已知胶界面，但从任意蛋白表面设计分子胶仍比优化传统口袋困难。

> **临床/研究亮点：** **IMiD是“先有药、后懂胶”的经典。**Lenalidomide已用于多发性骨髓瘤后，研究才揭示其结合CRBN并诱导IKZF1/3降解。该机制解释疗效、耐药和部分毒性，也让CRBN配体成为后续PROTAC最常用E3端之一。

从机制进入临床时，管线状态变化很快，必须区分活跃、降优先级和终止项目。

## 07.4 临床管线与主要公司

第一波临床PROTAC集中在已有配体和成熟生物学的核受体。Vepdegestrant（ARV-471）降解ER，III期VERITAC-2在ESR1突变人群中相对氟维司群改善PFS，并于2026-05-01获FDA批准（Veppanu），成为首个获批PROTAC；bavdegalutamide（ARV-110）和luxdegalutamide（ARV-766）面向AR耐药谱：Arvinas已计划在现有试验完成后收尾bavdegalutamide，luxdegalutamide则于2024年以1.5亿美元首付授权给Novartis（代号JSB462），目前处于I/II期并开展联合Lu-177 PSMA的II期研究；BMS的AR配体导向降解剂BMS-986365已进入III期rechARge（NCT06764485，对比研究者选择的ARPI或多西他赛）。第二波扩展至BTK、BRAF、EGFR、STAT3、BCL6和KRAS G12D，希望通过移除支架或耐药突变蛋白获得差异。

Arvinas建立PROTAC Discovery Engine；C4 Therapeutics使用TORPEDO平台；Kymera以Pegasus平台探索STAT3、MDM2等；Nurix的DELigase结合E3发现和降解/抑制，bexobrutideg（NX-5948）为可脑穿透BTK降解剂。2025—2026年各平台公司明显收缩聚焦：Kymera自2024年起把资源转向免疫学，KT-333和KT-253仅在有合作方时推进到I期之后；C4 Therapeutics于2025-05停止投入CFT1946（不推进至I期以后、寻求合作），集中资源于cemsidomide；Nurix于2026-10终止NX-2127，把资源集中于bexobrutideg；J&J于2025-12-29以30.5亿美元现金完成收购Halda Therapeutics，获得RIPTAC诱导邻近平台及前列腺癌口服候选药HLD-0915（RIPTAC通过诱导靶蛋白与必需蛋白形成复合物杀伤肿瘤细胞，并不以降解为机制）。Foghorn主要聚焦染色质调控系统，其BRD9项目属于相邻降解路线，但公司不能简单归类为纯PROTAC。Cullgen由Yue Xiong、Jian Jin等共同创立并获得GNI集团早期资金支持，公开资料不支持“百济神州分拆”说法。

中国公司与跨国药企同步布局。BeiGene/BeOne的BGB-16673为BTK降解剂，Astellas的ASP3082靶向KRAS G12D；海思科等开发BTK降解项目，Hinova/海创药业推进AR降解。项目代码、合作方和阶段频繁变化。表中主要项目阶段已于2026.Q4按公司披露和注册信息复核；ARV-393、CFT8919、ASP3082、AC682、HSK29116、HP518和ORM-5029等早期项目沿用2025.Q2信息 [待核实]，不把临床前项目写成临床资产。

### 表7-3：PROTAC/分子胶临床管线

**二十三个临床阶段或历史临床阶段靶向降解项目（含2个已获FDA批准）**

| 项目 | 公司 | 类型/E3 | 靶点 | 适应症 | 阶段（截至2026.Q4） | 试验/备注 | 关键问题 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vepdegestrant / ARV-471 | Arvinas/Pfizer（2026-05与Rigel签署全球权益授权） | PROTAC/CRBN | ER | ESR1m ER+/HER2−乳腺癌 | FDA批准（2026-05-01，Veppanu） | VERITAC-2；Guardant360 CDx | 仅ESR1突变获批；与口服SERD及ctDNA策略竞争 |
| Bavdegalutamide / ARV-110 | Arvinas | PROTAC/CRBN | AR | mCRPC | 收尾（现有试验完成后停止） | ARDENT | AR突变选择与组合 |
| Luxdegalutamide / ARV-766（JSB462） | Novartis（自Arvinas授权） | PROTAC/CRBN | AR | mCRPC | I/II期；联合Lu-177 PSMA的II期（NCT07047118） | NCT05067140 | 广谱AR降解和口服暴露 |
| BMS-986365 / CC-94676 | BMS | 配体导向AR降解剂 | AR | mCRPC | III期（rechARge，NCT06764485） | 降解+拮抗双机制 | QTc延长/心动过缓 |
| ARV-393 | Arvinas | PROTAC | BCL6 | B细胞淋巴瘤 | I期 | 早期临床 | 正常生发中心生物学 |
| Cemsidomide / CFT7455 | C4 Therapeutics | MonoDAC/CRBN | IKZF1/3 | MM/NHL | II期MOMENTUM（2026-02首例给药；数据2027） | NCT04756726；计划≥4线加速批准申报 | 与CELMoD差异化 |
| CFT1946 | C4 Therapeutics | BiDAC | BRAF V600X | 实体瘤 | 停止投入（2025-05，不推进I期以后，寻求合作） | NCT05668585 | 突变选择和MAPK反馈 |
| CFT8919 | C4 Therapeutics | BiDAC | EGFR L858R | NSCLC | I期 | 早期临床 | 脑暴露与共突变 |
| CFT8634 | C4 Therapeutics | BiDAC | BRD9 | SMARCB1缺失肿瘤 | 项目终止 | 历史I期 | 暴露/疗效窗口 |
| KT-333 | Kymera | PROTAC | STAT3 | 血液瘤/实体瘤 | I期；仅在合作下推进 | NCT05225584 | 正常免疫功能和组织PD |
| KT-253 | Kymera | PROTAC | MDM2 | AML/实体瘤 | I期；仅在合作下推进 | NCT05775406 | p53背景与骨髓毒性 |
| NX-2127 | Nurix | 降解剂/CRBN | BTK+IKZF1/3 | B细胞恶性肿瘤 | 已终止（2026-10） | NCT04830137 | 多底物贡献与毒性 |
| Bexobrutideg / NX-5948 | Nurix | 降解剂/CRBN | BTK | CLL/WM等 | 关键II期DAYBreak CLL-201+III期DAYBreak CLL-306（对pirtobrutinib，2026启动） | NCT07221500；可脑穿透 | 耐药BTK覆盖与持续性 |
| Tacabrutideg / BGB-16673 | BeOne/BeiGene | BTK degrader | BTK | B细胞恶性肿瘤 | III期（R/R CLL，含对pirtobrutinib头对头，2025Q4起入组） | CaDAnCe-101；III期编号各来源不一 | 多线BTKi后活性 |
| ASP3082 | Astellas | PROTAC | KRAS G12D | 实体瘤 | I期 | NCT05382559 | RAS降解深度与输注/给药 |
| Mezigdomide / CC-92480 | BMS/Celgene | CELMoD/CRBN胶 | IKZF1/3 | 多发性骨髓瘤 | III期SUCCESSOR-2阳性（2026）；SUCCESSOR-1推迟至2027 | SUCCESSOR系列 | 骨髓抑制与感染 |
| Iberdomide / CC-220 | BMS/Celgene | CELMoD/CRBN胶 | IKZF1/3 | 多发性骨髓瘤 | FDA加速批准（2026-08-13，Zenbexus） | EXCALIBER-RRMM；联合Dara-SC+Dex | MRD终点需PFS确证 |
| Golcadomide / CC-99282 | BMS | CELMoD/CRBN胶 | IKZF1/3 | 初治高危LBCL等NHL | III期（GOLSEEK-1，联合R-CHOP） | NCT06356129 | 免疫效应与骨髓毒性 |
| FHD-609 | Foghorn | 异双功能降解剂 | BRD9 | 滑膜肉瘤 | 临床项目终止 | 历史I期 | QT/治疗窗与暴露 |
| AC682 | Accutar | 嵌合降解剂 | ER | ER+乳腺癌 | I期 | NCT05489679 | 同赛道差异化 |
| HSK29116 | Haisco | PROTAC | BTK | B细胞恶性肿瘤 | I期 | 中国/全球早期 | 代码与阶段需持续复核 |
| HP518 | Hinova | PROTAC | AR | mCRPC | I期 | 澳洲/中国开发 | 口服暴露与AR突变 |
| ORM-5029 | Orum/BMS | 抗体偶联GSPT1降解剂 | HER2→GSPT1 | HER2+实体瘤 | I期 | DAC路线 | 递送与分子胶载荷归因 |

> **图示：靶向降解临床项目阶段与靶点分布**
> 基于本章表7-3代表项目，不是全行业实时项目总数；终止项目单独显示以避免幸存者偏倚。

临床管线证明降解可实现口服暴露，但大分子量、细胞通透和组织分布仍是整个模式的物理上限。

## 07.5 局限与下一代降解技术

经典PROTAC常具有700–1100 Da分子量、较高极性和大量可旋转键，明显超出Lipinski Rule of Five。它们可通过折叠、分子内氢键和“chameleonicity”在不同环境暴露或隐藏极性，但口服吸收、细胞通透和组织分布仍难预测。提高脂溶性可能增加非特异结合和代谢，缩短连接子可能破坏三元几何；药化优化必须同时观察生化三元复合物、细胞Dmax/DC50、游离暴露和体内组织PD。

蛋白降解还依赖细胞机器。蛋白酶体活性、E3表达、neddylation、去泛素化酶和POI再合成均可限制深度；长期治疗可选择E3复合物突变。降解完整蛋白也可能消除正常组织所需支架功能，产生抑制剂没有的毒性。催化概念不能被误解为“无限循环、极低剂量必然有效”。

LYTAC（Lysosome-Targeting Chimera）把胞外或膜蛋白连接到溶酶体运输受体，如CI-M6PR或肝细胞ASGPR，内吞后在溶酶体降解；AbTAC使用双特异抗体招募膜E3；ATTEC把POI连接LC3并进入自噬体，AUTAC/AUTOTAC利用自噬清除蛋白聚集或细胞器；RIBOTAC招募RNase降解特定RNA。每种路线使用不同机器和细胞区室，不能把“降解”当作单一药物类别。

### 表7-4：下一代靶向降解技术平台

**八类蛋白或RNA靶向降解技术的比较**

| 技术 | 目标空间 | 招募机器 | 分子形式 | 优势 | 主要限制 | 成熟度 | 代表方向 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PROTAC | 胞内蛋白 | E3–蛋白酶体 | 异双功能小分子 | 事件驱动、移除支架 | 大分子/通透/E3依赖 | 已获批（2026，vepdegestrant） | ER/AR/BTK |
| 分子胶 | 胞内蛋白 | E3–蛋白酶体 | 单价小分子 | 较小、口服友好 | 发现与可编程性难 | IMiD已批准；首个CELMoD 2026加速批准 | IKZF/RBM39 |
| LYTAC | 胞外/膜蛋白 | 溶酶体受体 | 抗体/糖肽嵌合 | 拓展胞外靶点 | 组织受体表达与大分子递送 | 临床前 | EGFR/PD-L1等研究 |
| AbTAC/PROTAB | 膜蛋白 | 膜E3 | 双特异抗体 | 抗体选择性 | 可用膜E3有限 | 临床前 | PD-L1等 |
| ATTEC | 蛋白/聚集 | LC3–自噬 | 双功能小分子 | 非蛋白酶体底物 | 自噬通量和选择性 | 临床前 | 突变蛋白/聚集体 |
| AUTAC/AUTOTAC | 蛋白/细胞器 | 选择性自噬 | 嵌合分子 | 可清除细胞器 | 机制与人体药理早期 | 临床前 | 线粒体/聚集蛋白 |
| RIBOTAC | RNA | 内源RNase | RNA配体–RNase招募 | 直达RNA功能 | RNA结构、递送与脱靶 | 临床前 | 致癌RNA/重复序列 |
| DAC/Degrader-antibody conjugate | 特定细胞内蛋白 | 抗体递送+胞内降解 | 抗体偶联降解载荷 | 改善细胞选择性 | 内吞释放、载荷效力和CMC | I期 | ORM-5029 |

> **临床/研究亮点：** **Vepdegestrant把PROTAC带到获批终点。**VERITAC-2在既往CDK4/6抑制剂联合内分泌治疗后的ER+/HER2−晚期乳腺癌中比较vepdegestrant与氟维司群：ESR1突变人群中位PFS 5.0对2.1个月（HR 0.57），ORR 19%对4%，OS尚不成熟；FDA于2026-05-01仅批准ESR1突变适应症，并配套Guardant360 CDx。它证明口服PROTAC可以通过注册级随机试验，也显示降解剂的优势首先出现在耐药突变人群，而非“对所有ER+患者都更强”。

## 07.6 2025下半年—2026年关键进展（截至2026-11-12）

2026年是靶向蛋白降解从“临床概念验证”走到“监管获批”的分界年：异双功能PROTAC和CRBN分子胶各有首个产品获得FDA批准。本节汇总已核实的监管、临床与交易事件，并把同一ER赛道的竞争药物一并列出，以便评估降解剂的真实定位。

### 表7-5：2025下半年—2026年靶向降解及相关竞争事件

**已核实的监管、临床与交易事件（按日期）**

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-09-25 | Imlunestrant（Inluriyo）获批ESR1m ER+/HER2−乳腺癌 | 竞争药物（口服SERD） | 口服SERD先于PROTAC进入ESR1突变后线 |
| 2025-12-29 | J&J完成以30.5亿美元收购Halda Therapeutics | 交易 | 获得RIPTAC诱导邻近平台（非降解机制） |
| 2026-02 | Cemsidomide II期MOMENTUM首例给药 | 临床进展 | C4计划2028年底前申报≥4线加速批准 |
| 2026-03 | Mezigdomide III期SUCCESSOR-2中期阳性 | 关键III期数据 | ASCO 2026：PFS 18.0对8.3个月 |
| 2026-05-01 | Vepdegestrant（Veppanu）获FDA批准 | 首个获批PROTAC | VERITAC-2 ESR1m PFS 5.0对2.1个月（HR 0.57）；早于PDUFA目标日约1个月 |
| 2026-05-12 | Arvinas/Pfizer将Veppanu全球权益授权Rigel | 交易 | 8500万美元首付及过渡付款，至多3.2亿美元里程碑 |
| 2026-08-13 | Iberdomide（Zenbexus）获FDA加速批准 | 首个获批CELMoD | EXCALIBER-RRMM MRD阴性CR 41%对21%（对DVd） |
| 2026（Q3披露） | Bexobrutideg III期DAYBreak CLL-306启动 | 临床进展 | 对pirtobrutinib，约620例 |
| 2026-09-04 | Camizestrant（Etcamah）加速批准 | 竞争药物（ctDNA引导SERD） | 在影像进展前按ESR1突变换药 |
| 2026-09-18 | Imlunestrant+abemaciclib获批 | 竞争药物（SERD组合） | 口服SERD与CDK4/6i组合进入ESR1m后线 |
| 2026-10 | Nurix终止NX-2127 | 管线收缩 | 聚焦bexobrutideg |
| 2026-12-18（PDUFA） | Giredestrant+依维莫司（evERA）待决定 | 竞争药物（待批） | 截至2026-11-12尚无FDA决定 |

> **临床/研究亮点：** **Iberdomide让“分子胶”从老药机制变成新药类别。**IMiD的CRBN机制是在上市后才被解释的；iberdomide则是按CRBN结合与IKZF1/3深度降解目标设计并获批的CELMoD。它以MRD阴性完全缓解率获得加速批准，延续了骨髓瘤领域把MRD作为早期终点的监管趋势，但最终价值仍取决于PFS和OS确证。

**首个PROTAC获批证明了什么、没有证明什么。**Vepdegestrant的获批确认口服异双功能降解剂可以在随机III期中达到注册标准，700–1100 Da分子量并非口服给药的绝对障碍。但获益局限于ESR1突变人群，中位PFS绝对延长约3个月，与同期获批的口服SERD处于相近量级（跨试验比较仅供参考）；这说明在ER这类已有成熟配体的靶点上，“降解”本身尚未显示超越“拮抗+降解”型SERD的普遍优势。降解路线更大的差异化机会，仍在缺乏功能口袋、需要移除支架或对抑制剂耐药的靶点。

**ER赛道的竞争决定降解剂的商业空间。**一年内ESR1突变后线出现SERD单药、SERD+CDK4/6抑制剂、ctDNA引导换药和PROTAC四类方案，且伴随诊断均为Guardant360 CDx。Vepdegestrant的位置将取决于组合数据、序贯顺序、支付方选择以及Rigel的商业化执行，而不只是单药PFS。

**BTK降解剂与CELMoD进入注册阶段，平台公司收缩聚焦。**BTK降解剂已进入头对头III期：BeOne的tacabrutideg（BGB-16673）包括与pirtobrutinib比较的III期，Nurix的bexobrutideg同时以关键II期DAYBreak CLL-201支持加速批准、以III期DAYBreak CLL-306（对pirtobrutinib）支持完全批准，说明降解剂必须证明优于非共价BTK抑制剂，而不只是“能覆盖耐药突变”。CELMoD方面，iberdomide已获批，mezigdomide在SUCCESSOR-2中取得PFS获益，但骨髓抑制明显更重。与此同时，Arvinas/Pfizer把首个获批PROTAC的全球商业化交给Rigel，Kymera、C4和Nurix都缩减了肿瘤降解管线，说明“首个获批”并未自动带来平台估值或商业化能力。BTK降解剂III期编号（CaDAnCe-302/303/304）在不同来源中不一致，以注册信息为准 [待核实]。

## 主要参考来源

- Tsai JM, Nowak RP, Ebert BL, Fischer ES. Targeted protein degradation: from mechanisms to clinic. Nature Reviews Molecular Cell Biology. 2024;25:740–757. [DOI](https://doi.org/10.1038/s41580-024-00729-9)
- Békés M, Langley DR, Crews CM. PROTAC targeted protein degraders: the past is prologue. Nature Reviews Drug Discovery. 2022;21:181–200. [DOI](https://doi.org/10.1038/s41573-021-00371-6)
- Chamberlain PP, Hamann LG. Development of targeted protein degradation therapeutics. Nature Chemical Biology. 2019;15:937–944. [DOI](https://doi.org/10.1038/s41589-019-0362-y)
- Burslem GM, Crews CM. Proteolysis-Targeting Chimeras as Therapeutics and Tools for Biological Discovery. Cell. 2020;181:102–114. [DOI](https://doi.org/10.1016/j.cell.2019.11.031)
- Alabi SB, Crews CM. Major advances in targeted protein degradation: PROTACs, LYTACs and MADTACs. J Biol Chem. 2021;296:100647. [DOI](https://doi.org/10.1016/j.jbc.2021.100647)
- Nurix Therapeutics. FDA Orphan Drug Designation for Bexobrutideg (NX-5948). 2025. [Company primary source](https://ir.nurixtx.com/news-releases/news-release-details/nurix-announces-us-fda-orphan-drug-designation-granted/)
- U.S. FDA. FDA approves vepdegestrant for ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-vepdegestrant-er-positive-her2-negative-esr1-mutated-advanced-or-metastatic-breast)
- Consultant360. FDA approves vepdegestrant (Veppanu) for ESR1-mutated ER-positive, HER2-negative advanced breast cancer. 2026. [News](https://www.consultant360.com/fda-alerts/fda-approves-vepdegestrant-veppanu-esr1-mutated-er-positive-her2-negative-advanced)
- Targeted Oncology. May 2026 FDA oncology actions at a glance. 2026. [News](https://www.targetedonc.com/view/may-2026-fda-oncology-actions-at-a-glance)
- Blood Cancer United. FDA approves first-of-its-kind treatment for multiple myeloma (iberdomide). 2026. [News](https://bloodcancerunited.org/resources/newsroom/fda-approves-first-its-kind-treatment-multiple-myeloma)
- Targeted Oncology. August 2026 in oncology: a look back at FDA approvals and decisions. 2026. [News](https://www.targetedonc.com/view/august-2026-in-oncology-a-look-back-at-fda-approvals-and-decisions)
- U.S. FDA. FDA approves imlunestrant for ER-positive, HER2-negative, ESR1-mutated advanced or metastatic breast cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-imlunestrant-er-positive-her2-negative-esr1-mutated-advanced-or-metastatic-breast)
- CancerNetwork. FDA approves camizestrant for ESR1-mutated HR+/HER2− advanced breast cancer. 2026. [News](https://www.cancernetwork.com/view/fda-approves-camizestrant-for-esr1-mutated-hr-her2-advanced-breast-cancer)
- Roche. FDA accepts New Drug Application for giredestrant in ESR1-mutated, ER-positive advanced breast cancer. 2026. [Press release](https://www.roche.com/media/releases/med-cor-2026-02-20)
- Targeted Oncology. FDA approves iberdomide, first CELMoD, in relapsed multiple myeloma. 2026. [News](https://www.targetedonc.com/view/fda-approves-iberdomide-first-celmod-relapsed-multiple-myeloma)
- International Myeloma Foundation. FDA accelerated approval of iberdomide-dara-dex for RRMM. 2026. [News](https://www.myeloma.org/news-events/multiple-myeloma-news/fda-accelerated-approval-iberdomide-dara-dex-rrmm)
- Bristol Myers Squibb. CELMoD mezigdomide reduces risk of disease progression or death by more than 50% vs standard of care in RRMM (SUCCESSOR-2). 2026. [Press release](https://www.biospace.com/press-releases/bristol-myers-squibb-announces-celmod-mezigdomide-reduces-risk-of-disease-progression-or-death-by-more-than-50-vs-standard-of-care-in-relapsed-or-refractory-multiple-myeloma)
- ClinicalTrials.gov. Golcadomide plus R-CHOP vs placebo plus R-CHOP in high-risk LBCL (GOLSEEK-1), NCT06356129. [Registry](https://clinicaltrials.gov/study/NCT06356129)
- ClinicalTrials.gov. BMS-986365 vs investigator's choice in mCRPC (rechARge), NCT06764485. [Registry](https://clinicaltrials.gov/study/NCT06764485)
- Fierce Biotech. Novartis pays $150M for Arvinas' phase 3-ready prostate cancer protein degrader. 2024. [News](https://www.fiercebiotech.com/biotech/novartis-pays-150m-arvinas-phase-3-ready-prostate-cancer-protein-degrader)
- Arvinas. Arvinas and Pfizer enter into a transaction with Rigel Pharmaceuticals for the exclusive global rights of VEPPANU. 2026. [Press release](https://ir.arvinas.com/news-releases/news-release-details/arvinas-and-pfizer-enter-transaction-rigel-pharmaceuticals)
- Johnson & Johnson. Johnson & Johnson completes acquisition of Halda Therapeutics. 2025. [Press release](https://www.jnj.com/media-center/press-releases/johnson-johnson-completes-acquisition-of-halda-therapeutics-and-its-novel-platform-to-revolutionize-cancer-treatment-and-enable-next-generation-oral-therapies)
- Nurix Therapeutics. Nurix outlines 2026 goals and objectives for advancing bexobrutideg. 2026. [Press release](https://ir.nurixtx.com/news-releases/news-release-details/nurix-therapeutics-outlines-2026-goals-and-objectives-advancing)
- Nurix Therapeutics. Third quarter 2026 financial results and corporate update. 2026. [Press release](https://finviz.com/news/401394/nurix-therapeutics-reports-third-quarter-2026-financial-results-and-provides-corporate-update)
- BeOne Medicines. Pipeline (tacabrutideg/BGB-16673). 2026. [Company primary source](https://beonemedicines.com/science/pipeline/)
- C4 Therapeutics. Second quarter 2026 financial results and recent business highlights. 2026. [Press release](https://ir.c4therapeutics.com/news-releases/news-release-details/c4-therapeutics-reports-second-quarter-2026-financial-results)
- Fierce Biotech. C4 Therapeutics halts BRAF degrader work to save cash for cemsidomide. 2025. [News](https://www.fiercebiotech.com/biotech/c4-therapeutics-halts-braf-degrader-work-save-cash-cemsidomide)
- Fierce Biotech. Kymera zeros in on immunology, seeks partners for cancer candidates. 2024. [News](https://www.fiercebiotech.com/biotech/kymera-zeros-immunology-seeks-partners-cancer-candidates)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
