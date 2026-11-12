# 第08章：基因治疗与细胞治疗

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解基因治疗的递送系统的核心概念、证据边界与临床转化逻辑。
- 理解CRISPR在肿瘤学中的应用的核心概念、证据边界与临床转化逻辑。
- 理解TCR-T疗法的核心概念、证据边界与临床转化逻辑。
- 理解TIL疗法的核心概念、证据边界与临床转化逻辑。
- 理解溶瘤病毒的核心概念、证据边界与临床转化逻辑。
- 理解2025—2026年细胞与基因治疗的商业重组、区域审批分化与溶瘤病毒首个联合获批的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：蛋白降解技术（PROTAC与分子胶）](07-protac-deg.md) · [下一章：放射性药物治疗](09-radiopharm.md)

## 08.1 基因治疗的递送系统：把正确载荷送到正确细胞

基因治疗不是单一药物类型，而是一组用核酸改变细胞状态的工程方法。载荷可以是补充型DNA、短暂表达的信使RNA（messenger RNA，**mRNA**）、基因编辑器、调控RNA或可整合表达盒；递送系统决定它们到达哪些组织、持续多久以及产生何种免疫和基因组风险。肿瘤学尤其困难，因为治疗既可能要直接覆盖高度异质的肿瘤细胞，也可能要在体外稳定改造少量免疫细胞后再回输。

腺相关病毒（Adeno-Associated Virus，**AAV**）通常以非整合的环状游离体长期表达，AAV5、AAV8和AAV9等血清型具有不同组织嗜性。其主要限制是约4.7 kb包装容量、既存中和抗体、重复给药困难及高剂量系统给药的肝脏或补体风险。AAV在单基因病中成熟，但实体瘤内部压力、血管异常和细胞快速分裂会稀释游离体，因此并非肿瘤递送的通用答案。

慢病毒载体（Lentiviral Vector，**LV**）可转导分裂和非分裂细胞，并把表达盒整合到宿主基因组，适合体外制造CAR-T或TCR-T。稳定表达的代价是插入突变风险，虽然自失活设计、分裂包装系统和拷贝数控制已显著降低风险，制造仍需进行复制型病毒、载体拷贝数和插入位点相关质量检测。γ-逆转录病毒也用于部分CAR-T，但主要转导分裂细胞，历史基因治疗中的白血病事件促成了更严格的长期随访。

腺病毒载量较大、表达强且不依赖基因组整合，适合局部溶瘤或疫苗平台；强先天免疫原性既可成为抗肿瘤优势，也会造成系统毒性。脂质纳米颗粒（Lipid Nanoparticle，**LNP**）把mRNA或编辑器短暂递送至胞质，不发生DNA整合，制造可扩展，但天然偏向肝脏且重复给药、肿瘤外渗和内体逃逸仍需优化。外泌体、细菌来源囊泡、病毒样颗粒和靶向聚合物希望改善细胞选择性，目前大多仍在早期开发。

体内（In Vivo）治疗直接向患者给药，省去个体化细胞制造，却必须在人体内同时解决分布、细胞选择和可控表达。体外（Ex Vivo）治疗先分离T细胞或造血干细胞，在受控环境中编辑、扩增和放行，再回输患者；它允许深度质控，却带来单采、桥接治疗、淋巴清除、批次失败和高成本。选择路线的核心不是“病毒还是非病毒”，而是所需细胞、表达持续时间、载荷尺寸和可接受风险的联合约束。

> **关键概念：** **递送即药理。**同一编辑器由LNP短暂表达与由整合型LV长期表达，会形成完全不同的靶组织、暴露时程和风险。开发者必须把载体、载荷和目标细胞作为一个整体产品评估。

### 表8-1：基因递送载体技术对比

**八类基因递送系统在肿瘤与细胞工程中的关键差异**

| 载体 | 典型载荷 | 容量/持续性 | 整合风险 | 优势 | 主要限制 | 肿瘤学场景 |
| --- | --- | --- | --- | --- | --- | --- |
| AAV5/8/9 | DNA表达盒 | 约4.7 kb；较长期 | 低，主要游离体 | 组织嗜性可工程化 | 中和抗体、再给药与容量 | 局部基因表达/研究 |
| 慢病毒LV | DNA表达盒 | 约8–10 kb；长期 | 有 | 稳定转导、可转非分裂细胞 | 插入位点与复杂CMC | CAR-T/TCR-T |
| γ-逆转录病毒 | DNA表达盒 | 约8 kb；长期 | 有 | 成熟细胞制造经验 | 偏好分裂细胞、插入风险 | 部分已上市CAR-T |
| 腺病毒 | DNA/溶瘤基因 | 较大；短暂 | 低 | 高表达、可装载多基因 | 免疫原性和系统给药 | 溶瘤病毒/疫苗 |
| LNP | mRNA/siRNA/编辑器 | 较灵活；短暂 | 无 | 可扩展、无病毒生产 | 肝脏偏向与内体逃逸 | 疫苗/体内编辑 |
| 外泌体/细胞外囊泡 | RNA/蛋白 | 依平台；短暂 | 无 | 潜在低免疫原性 | 装载、纯化和效力标准 | 靶向RNA递送研究 |
| Minicircle/环状DNA | 非病毒DNA | 大于AAV；中期 | 通常低 | 无病毒、载荷较大 | 体内入胞效率低 | 细胞工程/局部递送 |
| 电穿孔+转座子 | mRNA/RNP/DNA | 短暂或整合 | 取决于转座子 | 快速、无病毒 | 细胞损伤与插入控制 | CRISPR和CAR细胞制造 |

> **图示：递送平台的工程权衡**
> 评分为教学性相对比较（1低、5高），不是临床优劣排名；疾病、给药途径与载荷会改变实际表现。

当递送系统把编辑器带入细胞后，下一问题是如何精确改变序列而不过度扰动基因组。

## 08.2 CRISPR在肿瘤学中的应用：编辑免疫细胞与发现脆弱性

成簇规律间隔短回文重复序列及其相关蛋白9（Clustered Regularly Interspaced Short Palindromic Repeats–Cas9，**CRISPR-Cas9**）由向导RNA识别互补DNA，Cas9还要求邻近的PAM序列并切割双链。细胞可用非同源末端连接（NHEJ）修复，常产生移码敲除；若提供模板，也可通过同源定向修复（HDR）进行精准插入。碱基编辑和先导编辑减少双链断裂，但会引入各自的旁观者编辑、编辑窗口和递送限制。

肿瘤领域最接近临床的用途是体外免疫细胞工程。敲除*TRAC*可减少异体T细胞受体引发的移植物抗宿主病，敲除*B2M*或调整HLA可降低宿主T细胞识别，敲除*PDCD1*、*CISH*或腺苷通路基因旨在解除耗竭。多重编辑扩大功能，但每增加一个切口都可能增加染色体易位、大片段缺失和细胞适应性损失，因此必须进行全基因组脱靶、核型、易位和长期克隆监测。

直接“修复”肿瘤抑制基因在概念上有吸引力，却比敲除免疫抑制基因困难。肿瘤细胞分散、克隆异质且可能携带多个等位基因和拷贝数改变，递送系统还必须覆盖足够比例细胞。更现实的近期方向是利用全基因组CRISPR筛选发现合成致死：在特定突变背景下系统敲除基因，寻找只对癌细胞必要的依赖，再用小分子或降解剂开发药物。

CASGEVY（exagamglogene autotemcel）于2023年成为美国首个采用CRISPR/Cas9技术获批的疗法之一。它在自体造血干细胞中编辑红系增强子以提高胎儿血红蛋白，用于镰状细胞病，**并非癌症治疗**；其意义是证明编辑细胞产品可以建立制造、脱靶、长期随访和监管框架，为肿瘤细胞治疗提供制度与CMC先例。

> **图示：CRISPR肿瘤学应用闭环**
> 多重编辑的价值必须与染色体结构风险共同评估；放行检测不能替代治疗后的长期克隆监测。

### 表8-3：CRISPR在免疫细胞工程中的应用案例

**九类肿瘤免疫细胞编辑目的及主要风险**

| 编辑目标 | 细胞/产品场景 | 预期功能 | 技术形式 | 主要风险 | 开发状态 |
| --- | --- | --- | --- | --- | --- |
| *TRAC* | 异体CAR-T/TCR-T | 去除内源TCR，降低GvHD | Cas9或碱基编辑 | 残留TCR阳性细胞 | 临床 |
| *B2M* | 通用T细胞 | 降低HLA-I呈递 | Cas9敲除 | 诱发NK“missing-self”杀伤 | 临床/研究 |
| *PDCD1* | CAR-T/TIL/TCR-T | 减少PD-1抑制 | Cas9敲除 | 过度激活或分化 | 早期临床 |
| *CISH* | TIL/NK | 增强细胞因子信号 | Cas9敲除 | 持续激活与毒性 | 早期临床 |
| *CD52* | 异体CAR-T | 耐受alemtuzumab清淋 | 多重编辑 | 免疫重建延迟 | 临床 |
| *CIITA*/HLA-II | 通用细胞 | 降低宿主CD4识别 | Cas9敲除 | 免疫逃逸与感染监测 | 研究/临床前 |
| CAR定点插入*TRAC* | CAR-T | 均一表达、降低耗竭 | HDR/非病毒模板 | 插入效率与模板毒性 | 早期临床 |
| TCR定点替换 | TCR-T | 减少错配、统一表达 | 多位点编辑 | 易位与编辑不完全 | 早期临床 |
| 全基因组筛选 | 药物靶点发现 | 识别耐药与合成致死 | CRISPR文库 | 模型依赖与脱靶偏差 | 广泛研究 |

> **临床/研究亮点：** **CASGEVY提供的是平台先例，不是肿瘤疗效证据。**其批准证明自体编辑细胞可形成从采集、编辑、放行到15年长期随访的产品链；肿瘤产品还需额外面对多重编辑、肿瘤负荷和免疫效应毒性。

CRISPR可改变细胞底盘，而决定T细胞识别范围的核心元件仍是CAR或天然TCR。

## 08.3 TCR-T疗法：进入细胞内抗原空间

T细胞受体工程化T细胞（T-cell Receptor-engineered T cell，**TCR-T**）导入具有确定肽–人类白细胞抗原（Human Leukocyte Antigen，**HLA**）特异性的α/β TCR。肿瘤蛋白在蛋白酶体中被切割，肽段经TAP转运并装载到MHC-I，TCR识别表面的肽–HLA复合物。因此TCR-T可以攻击MAGE-A4、NY-ESO-1、PRAME、AFP以及突变KRAS等胞内来源抗原，而CAR通常只能识别完整细胞表面分子。

这种广阔靶点空间伴随HLA限制性。一个针对HLA-A*02:01呈递肽的TCR不能直接用于其他HLA人群；肿瘤还可通过丢失HLA、β2微球蛋白或抗原加工机器逃逸。TCR亲和力过低可能无效，人工亲和力成熟过强则可能识别正常蛋白的相似肽，历史上曾造成致命心脏或神经脱靶。开发必须用人类蛋白组交叉反应筛选、正常组织表达、肽替换扫描和多种原代细胞验证。

FDA于2024年8月批准afamitresgene autoleucel（商品名Tecelra），这是美国首个获批的TCR基因治疗。适用于HLA-A*02:01P、A*02:02P、A*02:03P或A*02:06P阳性、MAGE-A4阳性、既往化疗后不可切除或转移性滑膜肉瘤成人。加速批准依据总体缓解率43.2%和中位缓解持续时间6个月；患者选择同时依赖HLA分型和经验证的MAGE-A4检测。

TCR-T的2025—2026年主题是“资产换手”而非“疗效飞跃”。Adaptimmune于2025-07-28签署协议、2025-08-04完成把Tecelra、lete-cel、afami-cel和uza-cel整体出售给US WorldMeds，交易为5,500万美元现金加最高3,000万美元里程碑；约一半美国员工随资产转移，Adaptimmune仅保留临床前PRAME与CD70项目。这说明首个获批TCR-T的商业化难度被低估：窄适应症、HLA加抗原双重筛选和中心化制造共同压缩了商业空间。收购方计划推进lete-cel上市，该产品已于2025-01获FDA突破性疗法认定（用于既往含蒽环类化疗后的不可切除/转移性黏液样/圆细胞脂肪肉瘤），关键II期IGNYTE-ESO在64例接受治疗患者中ORR为42%（滑膜肉瘤14/34，MRCLS 13/30）；截至2026-11-12未检索到FDA批准公告，BLA受理与审评进度`[待核实]`。

另一条晚期管线是Immatics的IMA203（anzu-cel，anzutresgene autoleucel），靶向PRAME肽–HLA-A*02:01，用于二线及以上皮肤黑色素瘤的III期SUPRAME。公司在2026年第二季度更新中表示，由于进展与死亡事件累积慢于建模预期，将取消原定的PFS中期分析，改为按更低的预设事件数进行单次最终分析，顶线数据预计在2027年上半年、BLA提交预计在2027年。这类“把两次分析合并为一次”的调整常被解读为利空，但其直接含义是事件累积慢（可能与人群预后较好或治疗线次有关），需要等最终分析才能判断疗效。

必须纠正一个常见分类错误：Tebentafusp（Kimmtrak）不是TCR-T，也不是回输细胞。它是可溶性双特异ImmTAC蛋白，一端为亲和力增强TCR，识别HLA-A*02:01呈递的gp100肽，另一端结合CD3招募患者自身T细胞，用于葡萄膜黑色素瘤。它证明肽–HLA可成药，却不属于细胞治疗制造范畴。

### 表8-2：已批准或晚期细胞/基因治疗及相邻产品

**十个肿瘤细胞、基因与相邻免疫产品的分类和证据边界（截至2026.Q4）**

| 产品/项目 | 类别 | 靶点/载荷 | 疾病 | 状态 | 关键证据或说明 |
| --- | --- | --- | --- | --- | --- |
| Tecelra | 自体TCR-T | MAGE-A4/HLA-A*02 | 滑膜肉瘤 | FDA 2024；2025-08资产转至US WorldMeds | ORR 43.2%；首个FDA TCR基因治疗 |
| Amtagvi | 自体TIL | 多克隆肿瘤反应T细胞 | 黑色素瘤 | FDA 2024；加拿大2025-08附条件批准；EU申请2025-07撤回 | 首个FDA TIL疗法；区域审批出现分化 |
| Kimmtrak | 可溶性ImmTAC，非TCR-T | gp100/HLA-A*02×CD3 | 葡萄膜黑色素瘤 | FDA 2022 | 现成蛋白药，不需采集患者T细胞 |
| Imlygic / T-VEC | 溶瘤病毒 | 改造HSV-1+GM-CSF | 黑色素瘤局部病灶 | FDA 2015 | 病灶内注射；未证实改善总生存 |
| Tudriqev / RP1 | 溶瘤病毒（联合nivolumab） | HSV-1+GALV-GP R−+GM-CSF | 抗PD-1治疗后进展的晚期黑色素瘤 | FDA加速批准 2026-08-06 | ORR 24.2%、中位DOR 14.1个月；经两次CRL后获批 |
| Papzimeos | 非复制腺病毒载体免疫治疗 | HPV 6/11融合抗原 | 复发性呼吸道乳头状瘤病（非恶性） | FDA 2025-08 | 完全缓解51.4%（12个月内无需手术）；提示HPV驱动非肿瘤适应症 |
| Letetresgene autoleucel | 自体TCR-T | NY-ESO-1 | 滑膜肉瘤/MRCLS | 关键II期完成；BLA进度`[待核实]` | IGNYTE-ESO ORR 42%；2025-01获MRCLS突破性疗法认定 |
| Autogene cevumeran | 个体化mRNA疫苗 | 患者新抗原 | 胰腺癌等 | 胰腺癌II期进行中；结直肠癌II期2026-08终止 | 术后免疫原性研究；CRC终止因总生存数值失衡 |
| V940 / mRNA-4157（intismeran autogene） | 个体化mRNA疫苗 | 最多34个新抗原 | 黑色素瘤等 | III期达主要终点（2026-08顶线，2026-10 ESMO详细数据） | RFS HR 0.58；与pembrolizumab联合 |
| CASGEVY | CRISPR编辑自体HSC | BCL11A红系增强子 | 镰状细胞病/β地贫 | FDA批准 | 非肿瘤；编辑制造与监管先例 |

### 表8-6：CAR-T与TCR-T关键特征比较

**八个维度比较嵌合抗原受体与T细胞受体工程**

| 维度 | CAR-T | TCR-T | 临床含义 |
| --- | --- | --- | --- |
| 识别对象 | 完整表面抗原 | 肽–HLA复合物 | TCR可进入胞内蛋白空间 |
| HLA限制 | 通常无 | 严格依赖等位基因 | 缩小可治疗人群 |
| 抗原密度 | 常需较高表面密度 | 可响应较低肽–HLA密度 | 效力与安全窗均需验证 |
| 信号结构 | 人工CD3ζ+共刺激 | 天然CD3复合物 | 动力学和耗竭不同 |
| 主要成功癌种 | B细胞血液瘤 | 特定肉瘤/实体瘤探索 | 临床成熟度不同 |
| 逃逸机制 | 表面抗原丢失 | 抗原或HLA/加工机器丢失 | TCR多一个呈递依赖层 |
| 脱靶风险 | 正常组织同抗原 | 正常肽交叉反应 | TCR需系统肽组筛查 |
| 伴随检测 | 抗原表达 | HLA分型+抗原表达 | 患者筛选更复杂 |

> **临床/研究亮点：** **Tecelra把TCR-T从概念推进到监管产品。**43.2%的ORR说明针对胞内癌睾抗原可以产生实体瘤缓解，但6个月中位DOR也提示抗原/HLA逃逸、细胞持久性和肿瘤微环境仍限制长期控制。

TCR-T预先定义单个受体；TIL则从患者肿瘤中直接收集天然存在的多克隆反应。

## 08.4 TIL疗法：从肿瘤病灶扩增天然反应克隆

肿瘤浸润淋巴细胞（Tumor-Infiltrating Lymphocyte，**TIL**）疗法从手术切除或粗针活检获得肿瘤组织，将其中已进入肿瘤并识别抗原的T细胞分离扩增。与单靶点工程细胞不同，TIL通常包含多个TCR克隆，可同时识别共享抗原和私人新抗原，理论上降低单一抗原逃逸。代价是产品组成随患者而变，效力、分化状态和克隆谱更难标准化。

典型流程包括取材、组织碎片培养、快速扩增、冻存放行、患者非清髓性淋巴清除、TIL回输以及短程高剂量IL-2支持。淋巴清除减少竞争性淋巴细胞和免疫抑制细胞，并提高稳态细胞因子可用性；IL-2促进扩增，却可造成毛细血管渗漏、低血压和器官毒性。因此TIL不是“只输一次细胞”，而是一套需要有经验中心、住院支持和跨学科管理的治疗方案。

Lifileucel（商品名Amtagvi）于2024年2月获得FDA加速批准，用于既往接受PD-1阻断，且存在*BRAF* V600突变时已接受BRAF抑制剂±MEK抑制剂的不可切除或转移性黑色素瘤成人。它是首个FDA批准的TIL细胞治疗。产品标签剂量为7.5×109至72×109个活细胞，并带有治疗相关死亡、长期严重血细胞减少、严重感染及心肺肾损害黑框警告。

实体瘤扩展的关键是取得可制造组织、缩短周转时间、提高真正肿瘤反应克隆比例并减少终末分化。候选策略包括按PD-1、CD39/CD103或新抗原反应富集TIL，使用更温和细胞因子，敲除*CISH*，以及与ICI联合。疗效比较必须考虑单臂研究、既往治疗和可进入制造流程的选择偏倚，不能直接把不同癌种ORR横向排名。

TIL在2025—2026年的最大变化是区域监管出现分化。Iovance于2025-07-22主动撤回Amtagvi的欧盟上市许可申请，EMA在撤回信中记录的意见是现有临床数据不足以评估疗效、支持所提剂量的数据不充分，且基于当时资料认为获益未超过风险（包括致死性不良事件）；随后Amtagvi于2025-08-15获加拿大附条件批准（NOC/c，须以确证性数据维持），并在2026年获澳大利亚TGA批准，成为其第三个获批地区；英国申请于2026-05因程序原因撤回并于2026-07重新提交进入加速审评，瑞士预计2027年上半年。商业端，公司2026年第二季度报告美国Amtagvi收入约9,100万美元、总收入9,900万美元（同比增长66%）。确证性与扩展研究方面，III期TILVANCE-301（lifileucel联合pembrolizumab用于一线晚期黑色素瘤）既承担二线完全批准的确证任务，又设有基于ORR的早期中期分析以支持一线sBLA，尚无结果读出；非小细胞肺癌的IOV-LUN-202此前报告ORR 26%，公司计划以其支持非鳞NSCLC的sBLA。同一产品在不同监管体系得到相反判断，提示单臂TIL证据对剂量合理性和获益风险描述的要求正在提高。

### 表8-4：TIL疗法关键临床项目与证据

**八个TIL产品或研究方向的临床定位**

| 产品/方案 | 公司/机构 | 癌种 | 阶段 | 设计特征 | 证据解读 |
| --- | --- | --- | --- | --- | --- |
| Lifileucel / LN-144 | Iovance | 黑色素瘤 | FDA加速批准；加拿大、澳大利亚已批准；欧盟申请撤回 | 中心化自体TIL | 首个批准TIL；需验证性证据 |
| LN-145 | Iovance | 宫颈癌 | II期 | 既往治疗后TIL | 单臂信号需随机研究确认 |
| Lifileucel+pembrolizumab（TILVANCE-301） | Iovance/MSD | 黑色素瘤 | III期进行中，尚无读出 | 细胞+PD-1阻断 | 既是二线完全批准的确证研究，又含一线ORR中期分析 |
| LN-145 / IOV-LUN-202 | Iovance | NSCLC | II期，ORR 26% | ICI后人群 | 计划支持非鳞NSCLC的sBLA；组织获取和制造可行性关键 |
| ITIL-168 | Instil Bio | 黑色素瘤 | 开发调整 | 选定TIL平台 | 项目状态需持续复核 |
| OBX-115 | Obsidian | 黑色素瘤/NSCLC | I期 | 膜结合IL-15调控TIL | 尝试降低外源高剂量IL-2依赖 |
| KSQ-001EX | KSQ Therapeutics | 实体瘤 | I/II期 | *CISH*编辑TIL | 增强功能与安全窗并重 |
| 新抗原选择TIL | NCI/学术中心 | 多种实体瘤 | 探索性 | 筛选突变反应克隆 | 个体化程度高、周期长 |

> **图示：TIL个体化制造与治疗时间轴**
> TIL制造以患者肿瘤组织为起点；任何取材不足、微生物污染或扩增失败都可能阻止回输。

TIL把细胞从肿瘤带到体外再送回患者；溶瘤病毒则尝试直接把肿瘤变成原位疫苗工厂。

## 08.5 溶瘤病毒：选择性复制与原位免疫

溶瘤病毒（Oncolytic Virus，**OV**）通过天然或工程化肿瘤嗜性在癌细胞内复制，导致裂解并释放肿瘤抗原、病原相关分子模式和损伤相关分子模式。树突细胞摄取这些信号后可启动T细胞反应，使局部注射病灶成为“原位疫苗”。这种双重机制要求病毒既有足够复制和扩散，又不能在正常组织造成不可控感染。

Talimogene laherparepvec（T-VEC，商品名Imlygic）由HSV-1改造：删除与致病性相关基因并插入GM-CSF，以病灶内注射治疗黑色素瘤皮肤、皮下或淋巴结病灶。它可提高持久缓解，但标签明确指出尚未证明改善总生存或影响内脏转移。临床选择需考虑可注射病灶、疱疹病毒传播、防护与免疫抑制患者风险。

工程化设计可加入GM-CSF、IL-12、趋化因子、双特异衔接器或检查点抗体，也可删除病毒免疫逃逸基因以提高选择性。载荷越多并不必然越好：强先天免疫可能在扩散前迅速清除病毒，既存抗体会限制系统给药，肿瘤间质和坏死区妨碍传播。制造还需稳定控制感染滴度、复制能力、基因组完整性和脱落。

与ICI联合的理论是OV先提高抗原释放、I型干扰素和T细胞浸润，再由PD-1/PD-L1阻断维持效应。然而“冷转热”不保证临床获益，病毒平台、给药病灶和患者免疫状态差异很大。随机对照研究比小型单臂ORR更能区分病毒贡献与ICI本身作用。

2026年8月，这一联合逻辑第一次得到监管认可，同时也暴露了它的方法学软肋。FDA于2026-08-06对Replimune的vusolimogene oderparepvec-wtpg（RP1，商品名Tudriqev）联合nivolumab给予加速批准，用于既往抗PD-1治疗后进展的不可切除或转移性（晚期皮肤）黑色素瘤成人，依据为IGNYTE研究的ORR 24.2%与中位缓解持续时间14.1个月，确证研究为正在进行的IGNYTE-3。审批过程历经三轮：FDA分别于2025-07和2026-04发出完全回应函（Complete Response Letter，**CRL**），第三次提交于2026-06-26获受理并定于2026-08-02为目标决定日；细胞、组织与基因治疗咨询委员会在2026-07-30以10票对3票认为获益风险有利。FDA在会上明确指出，单臂设计无法判定缓解来自RP1还是nivolumab——这正是OV联合ICI的核心证据难题，也解释了为何批准是加速而非常规。

另一条接近注册的路线是膀胱癌内灌注。CG Oncology的cretostimogene grenadenorepvec在BOND-003队列C（BCG无应答、含原位癌的高危非肌层浸润性膀胱癌）报告24个月完全缓解率41.8%（46/110）且未出现≥3级治疗相关不良事件，队列P（仅乳头状病变）3/6/9个月高级别无复发生存分别为95.7%、84.6%和80.4%；公司2026年第一季度指引为在完成剩余CMC模块后于2026年第四季度完成BLA提交，因此截至2026-11-12尚未进入审评决定阶段。

### 表8-5：溶瘤病毒主要产品与临床管线

**十二个溶瘤病毒或瘤内基因治疗产品的载体和开发重点（截至2026.Q4）**

| 产品 | 公司/机构 | 病毒骨架 | 工程载荷/特点 | 癌种 | 状态 |
| --- | --- | --- | --- | --- | --- |
| T-VEC / Imlygic | Amgen | HSV-1 | GM-CSF；病灶内 | 黑色素瘤 | FDA批准 |
| Teserpaturev / Delytact | Daiichi Sankyo | HSV-1 | 三重突变 | 恶性胶质瘤 | 日本条件批准 |
| Pelareorep | Oncolytics Biotech | 呼肠孤病毒 | 天然溶瘤偏好 | 乳腺癌等 | II期 |
| RP1 / Tudriqev | Replimune | HSV-1 | GALV-GP R−+GM-CSF | 抗PD-1后进展的晚期黑色素瘤 | FDA加速批准（2026-08-06，联合nivolumab） |
| RP2 | Replimune | HSV-1 | 抗CTLA-4样分子 | 实体瘤 | I/II期 |
| ONCR-177 | Oncorus | HSV-1 | 多免疫载荷 | 实体瘤 | 项目停止 |
| Adstiladrin | Ferring | 非复制腺病毒 | IFNα2b基因 | 膀胱癌 | 基因治疗获批 |
| Cretostimogene grenadenorepvec | CG Oncology | 腺病毒（选择性复制） | 瘤内灌注 | BCG无应答高危NMIBC | BLA提交预计2026年第四季度完成 |
| Papzimeos / zopapogene imadenovec | Precigen | 非复制腺病毒 | HPV 6/11融合抗原 | 复发性呼吸道乳头状瘤病（非恶性） | FDA批准（2025-08） |
| VCN-01 | Theriva Biologics | 腺病毒 | 透明质酸酶PH20 | 胰腺癌等 | II期 |
| Pexa-Vec / JX-594 | SillaJen/合作方 | 痘苗病毒 | GM-CSF | 肝癌等 | 晚期失败/研究 |
| CAN-2409 | Candel | 腺病毒 | HSV-tk+前药 | 前列腺癌/胶质瘤 | III期开发 |

病毒可在病灶内表达免疫载荷；mRNA平台则以短暂、可编程表达支持个体化抗原组合。

## 08.6 mRNA疗法：从通用载荷到个体化癌症疫苗

mRNA平台把抗原序列直接交给患者细胞翻译，避免永久整合，并可在一条分子中编码多个表位。序列优化、修饰核苷、帽结构、poly(A)尾和LNP共同决定稳定性、翻译与先天免疫。肿瘤疫苗需要在足够免疫刺激与过强RNA感知导致翻译受抑之间取得平衡。

V940（mRNA-4157，通用名intismeran autogene）是基于患者肿瘤测序设计的个体化新抗原疗法，可编码最多34个候选新抗原，与pembrolizumab联合用于高风险切除黑色素瘤。2026-08-19，Merck与Moderna宣布III期INTerpath-001在预设中期分析达到主要终点无复发生存（RFS）及关键次要终点无远处转移生存（DMFS）；2026-10的ESMO详细数据显示RFS HR为0.58（95% CI 0.45–0.75，p<0.001），这是个体化癌症疫苗首个III期阳性结果。Autogene cevumeran在胰腺导管腺癌术后研究中诱导部分患者持久T细胞反应，但其在ctDNA阳性切除结直肠癌的II期研究已于2026-08因独立数据安全监查委员会提示总生存数值失衡而终止。两者都说明“疫苗”不是预防感染式的单一抗原制剂，而是测序、算法、快速生产和免疫联合构成的闭环，并且同一平台在不同癌种、不同是否联合ICI的设计下结果可能相反。

个体化制造从肿瘤与正常样本测序开始，识别体细胞突变并确认表达，再预测HLA结合、抗原加工和克隆性，选择有限表位编码入mRNA。时间延迟会使快速进展患者在产品完成前失去治疗机会，因此算法准确性、并行质控、模块化生产和桥接治疗同样属于临床效力的一部分。更完整的新抗原选择与KEYNOTE-942证据见[第11章个性化疫苗设计流程](11-neoantigen.md)。

mRNA也可编码细胞因子、双特异蛋白、肿瘤抑制因子或体内CAR元件。短暂表达有利于控制毒性，却意味着需要重复给药；LNP组织分布和先天免疫会决定治疗窗。2025—2026年，靶向LNP递送CAR mRNA和环状RNA递送CAR成为大型药企并购的焦点（AbbVie收购Capstan、BMS收购Orbital、Eli Lilly收购Orna），但这些项目的首个适应症多为B细胞驱动的自身免疫病，详见[第03章体内CAR-T](03-car-t.md)。现阶段应把mRNA视为可编程表达平台，而不是默认具有肿瘤选择性的药物。

> **图示：细胞与基因治疗模式的开发权衡**
> 相对评分用于展示开发权衡，不代表跨产品疗效比较；数值越高表示该特征越强或要求越高。

> **关键概念：** **平台不等于产品。**“CRISPR”“mRNA”或“溶瘤病毒”只描述技术底盘；最终临床价值取决于具体靶点、递送、剂量、制造一致性、患者筛选和对照试验证据。

> **临床/研究亮点：** **RP1的三轮审评是“单臂联合用药”证据边界的教科书案例。**同一套IGNYTE数据（ORR 24.2%、中位DOR 14.1个月）在2025-07和2026-04两次收到CRL，在2026-07-30的咨询委员会上以10比3获得支持后于2026-08-06获加速批准；FDA同时指出单臂设计无法区分RP1与nivolumab各自的贡献，因此确证研究IGNYTE-3的随机结果才是这一联合策略的最终判决。

## 08.7 2025下半年—2026年关键进展（截至2026-11-12）

与CAR-T相比，细胞与基因治疗的其他路线在这18个月里更多经历“结构性调整”：首个获批TCR-T整体易主、首个获批TIL在不同监管体系得到相反结论、溶瘤病毒终于拿到首个与ICI联合的加速批准、而个体化mRNA疫苗首次拿出III期阳性结果。下表汇总可核实的关键事件。

### 表8-7：细胞与基因治疗关键进展（2025-07至2026-11）

**十项可核实的监管、临床与交易事件**

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-07-22 | Iovance撤回Amtagvi的欧盟上市许可申请 | 监管 | EMA记录的意见是疗效与剂量数据不足、获益未超风险 |
| 2025-07-28 / 2025-08-04 | Adaptimmune与US WorldMeds签署并完成细胞治疗资产出售 | 交易 | Tecelra、lete-cel、afami-cel、uza-cel；5,500万美元现金加最高3,000万美元里程碑 |
| 2025-08 | FDA批准Papzimeos（zopapogene imadenovec）用于成人复发性呼吸道乳头状瘤病 | 监管 | HPV驱动的非恶性疾病；完全缓解51.4%，四次皮下注射给药 |
| 2025-08-15 | 加拿大附条件批准（NOC/c）Amtagvi用于晚期黑色素瘤 | 监管 | Iovance首个美国以外上市许可，需确证性数据维持 |
| 2026-04 | FDA对RP1发出第二封完全回应函 | 监管 | 第一封为2025-07；同一数据集经三轮审评 |
| 2026-06-26 | FDA受理RP1第三次BLA提交，目标决定日2026-08-02 | 监管 | 并安排细胞、组织与基因治疗咨询委员会 |
| 2026-07-30 | 咨询委员会以10比3支持RP1联合nivolumab的获益风险 | 监管 | FDA同时指出单臂设计无法区分两药贡献 |
| 2026-08-06 | FDA加速批准Tudriqev（RP1）联合nivolumab用于抗PD-1后进展的晚期黑色素瘤 | 监管 | ORR 24.2%、中位DOR 14.1个月；确证研究IGNYTE-3 |
| 2026-08-19 / 2026-10 | INTerpath-001顶线达主要终点，ESMO公布RFS HR 0.58 | 临床 | 个体化mRNA疫苗首个III期阳性结果，详见[第11章](11-neoantigen.md) |
| 2026-08-28 | BioNTech终止autogene cevumeran在ctDNA阳性切除结直肠癌的II期研究 | 临床 | 依据独立数据安全监查委员会提示的总生存数值失衡 |

TCR-T与TIL的共同教训是“获批不等于可持续”。Tecelra作为首个FDA批准的TCR基因治疗，在上市不到一年后随整条管线被出售，对价（5,500万美元现金加最高3,000万美元里程碑）远低于其研发投入；Amtagvi虽在美国持续增长（2026年第二季度美国收入约9,100万美元），却在欧盟因剂量合理性与获益风险描述不足而撤回申请，同时在加拿大和澳大利亚获批。这提示个体化细胞治疗的商业模型高度依赖适应症宽度、支付环境和制造规模，而非仅取决于首次获批。

溶瘤病毒的进展把“证据等级”问题摆到了台面上。RP1的加速批准建立在单臂ORR之上，FDA在咨询委员会上直接指出无法区分RP1与nivolumab的贡献；在同一领域，cretostimogene的膀胱内灌注路线选择了相对更清晰的单药场景（BCG无应答NMIBC，24个月完全缓解率41.8%），但其BLA直到2026年第四季度才计划完成提交。换言之，OV领域目前的监管进展更多依赖“没有更好选择”的适应症定位，确证性随机研究（IGNYTE-3、PIVOT-006）仍是分水岭。

需要特别区分的是Papzimeos：它是腺病毒载体免疫治疗，获批适应症为HPV 6/11驱动的复发性呼吸道乳头状瘤病——一种**非恶性**但高度致残的疾病。把它当作“肿瘤疫苗获批”会造成误读；其真正意义是证明病毒载体表达共享病毒抗原可以消除对反复手术的依赖，并为HPV相关癌前/癌症适应症提供免疫学与制造先例。

## 主要参考来源

- U.S. Food and Drug Administration. FDA Approves First Gene Therapy to Treat Adults with Metastatic Synovial Sarcoma. 2024. [FDA](https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapy-treat-adults-metastatic-synovial-sarcoma)
- U.S. Food and Drug Administration. FDA grants accelerated approval to lifileucel for unresectable or metastatic melanoma. 2024. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-lifileucel-unresectable-or-metastatic-melanoma)
- U.S. Food and Drug Administration. FDA Approves First Gene Therapies to Treat Patients with Sickle Cell Disease. 2023. [FDA](https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease)
- U.S. Food and Drug Administration. IMLYGIC (talimogene laherparepvec) product information. [FDA](https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/imlygic)
- Rosenberg SA, Restifo NP. Adoptive cell transfer as personalized immunotherapy for human cancer. Science. 2015;348:62–68. [DOI](https://doi.org/10.1126/science.aaa4967)
- June CH, Sadelain M. Chimeric Antigen Receptor Therapy. New England Journal of Medicine. 2018;379:64–73. [DOI](https://doi.org/10.1056/NEJMra1706169)
- Rojas LA, et al. Personalized RNA neoantigen vaccines stimulate T cells in pancreatic cancer. Nature. 2023;618:144–150. [DOI](https://doi.org/10.1038/s41586-023-06063-y)
- U.S. Food and Drug Administration. FDA grants accelerated approval to vusolimogene oderparepvec-wtpg in combination with nivolumab for melanoma. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-vusolimogene-oderparepvec-wtpg-combination-nivolumab-melanoma)
- Medscape. FDA Advisory Panel Backs Replimune's Melanoma Drug. 2026. [Press release](https://www.medscape.com/viewarticle/fda-advisory-panel-backs-replimunes-melanoma-drug-2026a1000q6u)
- Drugs.com. FDA Approves Papzimeos for Adults With Recurrent Respiratory Papillomatosis. 2025. [Press release](https://www.drugs.com/news/fda-approves-papzimeos-adults-recurrent-respiratory-papillomatosis-126350.html)
- European Medicines Agency. Amtagvi: withdrawal of the marketing authorisation application. 2025. [EMA](https://www.ema.europa.eu/en/medicines/human/EPAR/amtagvi)
- Health Canada. Summary Basis of Decision for Amtagvi. 2025. [Regulatory](https://dhpp.hpfb-dgpsa.ca/review-documents/resource/SBD1759755218605)
- Iovance Biotherapeutics. Iovance Biotherapeutics Reports Record Second Quarter 2026 Revenue. 2026. [Press release](https://www.biospace.com/press-releases/iovance-biotherapeutics-reports-record-second-quarter-2026-revenue-of-99m-business-achievements-and-corporate-updates)
- Adaptimmune Therapeutics. Adaptimmune Announces Entry into Definitive Agreement for Sale of TECELRA, lete-cel, afami-cel and uza-cel Cell Therapies to US WorldMeds. 2025. [Press release](https://www.newsfilecorp.com/release/260248/Adaptimmune-Announces-Entry-into-Definitive-Agreement-for-Sale-of-TECELRA-letecel-afamicel-and-uzacel-Cell-Therapies-to-US-WorldMeds)
- CancerNetwork. Lete-cel Earns FDA Breakthrough Therapy Designation in Pretreated MRCLS. 2025. [Press release](https://www.cancernetwork.com/view/lete-cel-earns-fda-breakthrough-therapy-designation-in-pretreated-mrcls)
- Immatics. Immatics Announces Second Quarter 2026 Financial Results and Business Update. 2026. [Press release](https://www.1stoncology.com/blog/?p=112944)
- CG Oncology. CG Oncology Reports First Quarter 2026 Financial Results and Provides Business Updates. 2026. [Press release](https://www.barchart.com/story/news/1800334/cg-oncology-reports-first-quarter-2026-financial-results-and-provides-business-updates)
- CancerNetwork. Autogene Cevumeran Trial Terminated in Resected Colorectal Cancer. 2026. [Press release](https://www.cancernetwork.com/view/autogene-cevumeran-trial-terminated-in-resected-colorectal-cancer)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
