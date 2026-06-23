# 第04章：抗体药物偶联物（ADC）

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2025.Q2 · 证据截止：2025-06-30。

## 学习目标

- 理解ADC的结构与作用机制的核心概念、证据边界与临床转化逻辑。
- 理解连接子技术的演进的核心概念、证据边界与临床转化逻辑。
- 理解毒素载荷技术的核心概念、证据边界与临床转化逻辑。
- 理解已批准ADC药物的核心概念、证据边界与临床转化逻辑。
- 理解差异化策略与竞争格局的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：CAR-T细胞治疗](03-car-t.md) · [下一章：双特异性抗体](05-bispecific.md)

## 04.1 ADC的结构与作用机制：把识别、释放与杀伤做成一个系统

抗体药物偶联物（Antibody–Drug Conjugate，**ADC**）由单克隆抗体（monoclonal Antibody，mAb）、化学连接子（Linker）和细胞毒载荷（Payload）组成。抗体决定组织分布和细胞表面靶点识别，连接子决定血液中稳定性与细胞内释放条件，载荷决定杀伤机制和可耐受暴露。三者不是可独立替换的零件：更强亲和力可能降低肿瘤穿透，过稳定连接子可能释放不足，过易裂解则造成系统毒性；高效载荷要求更严格的偶联均一性和游离药控制。

典型路径从ADC结合细胞表面抗原开始。受体–ADC复合物通过网格蛋白依赖或其他内吞路径进入早期内体，再转运至晚期内体和溶酶体。抗体被蛋白酶降解，可裂解连接子由酸性环境、cathepsin或还原环境触发，不可裂解连接子则通常以“氨基酸–连接子–载荷”残基形式释放。载荷进入胞质后抑制微管、拓扑异构酶或直接损伤DNA，最终触发有丝分裂灾难、复制压力和凋亡。抗原是否快速内吞、是否循环回膜面、胞内运输到何处，都会改变有效递送。

药物抗体比（Drug-to-Antibody Ratio，**DAR**）表示平均每个抗体携带的载荷数。传统赖氨酸或半胱氨酸偶联产生DAR分布而非单一值；高DAR提高单抗体效力，却可能增加疏水性、聚集、清除和非特异摄取。T-DM1平均DAR约3.5，T-DXd约8，这一差异不能单独解释临床优劣，因为载荷效力、膜通透性、连接子、抗体和给药剂量同时改变。位点特异偶联通过工程半胱氨酸、非天然氨基酸、糖链或酶促标签降低异质性，使暴露–效应关系更可控。

旁观者效应（Bystander Effect）指靶抗原阳性细胞释放的膜通透载荷扩散至邻近低表达或阴性细胞。它可缓解实体瘤空间异质性，也是T-DXd在HER2-low乳腺癌中有效的重要药理基础之一；但扩散不识别邻近细胞是否恶性，也可能扩大肺、骨髓或黏膜毒性。不可裂解连接子生成的带电代谢物通常膜通透性较低，旁观者效应较弱，却可能提高靶内特异性。

> **图示：ADC结构、内吞和载荷释放机制**
> 结构示意不按真实比例。ADC的完整药理包括完整ADC、总抗体、游离载荷及代谢物，开发时需分别测量暴露。

> **关键概念：** ADC不是“带着化疗的抗体”这么简单，而是一个多分析物药物系统。完整ADC决定靶向递送，游离载荷和含载荷代谢物常决定系统安全性，抗体与靶点周转又决定组织分布。

连接子位于循环稳定与肿瘤内释放的矛盾中心，是ADC代际演化的关键。

## 04.2 连接子技术的演进

不可裂解连接子依赖抗体在溶酶体中完全降解，典型代表是T-DM1的SMCC硫醚连接子。释放产物保留氨基酸和连接子残基，常带电且膜通透性低，因此旁观者效应较弱。其优势是血浆稳定、游离载荷较少；限制是需要有效内吞和溶酶体降解，且某些细胞无法把带残基载荷高效运出溶酶体。

可裂解连接子利用肿瘤细胞与血液环境差异。酸敏感腙键在低pH中水解，但早期产品曾受循环稳定性不足困扰；二硫键利用胞内还原环境，裂解速度受位阻调节；肽连接子如valine–citrulline由溶酶体蛋白酶裂解，并配合PABC自毁间隔臂释放原始载荷。DXd平台使用四肽连接子，目标是在循环中稳定、进入细胞后高效释放。所谓“cathepsin B特异”常是简化说法，多种半胱氨酸蛋白酶可能参与。

偶联化学决定产品异质性。赖氨酸偶联可在大量表面胺基中随机反应；部分还原链间二硫键后偶联马来酰亚胺可得到较窄DAR，但仍存在位置异质和逆Michael反应风险。THIOMAB工程半胱氨酸、转谷氨酰胺酶标签、糖链重塑和非天然氨基酸可固定偶联位点。位点特异并不自动提高疗效，只有当它改善稳定性、暴露、效力或制造一致性时才产生临床价值。

### 表4-2：连接子与偶联技术比较

**八种ADC连接子或偶联技术的触发机制与工程权衡**

| 类型 | 触发/化学 | 循环稳定性 | 旁观者效应 | 代表产品/平台 | 主要限制 |
| --- | --- | --- | --- | --- | --- |
| 不可裂解硫醚 | 抗体完全降解 | 高 | 低 | T-DM1 | 依赖溶酶体处理 |
| Val-Cit-PABC | 溶酶体蛋白酶 | 中高 | 取决于载荷 | Adcetris/Padcev/Polivy | 物种和组织蛋白酶差异 |
| 四肽-DXd | 溶酶体酶切 | 高设计目标 | 强 | Enhertu/Datroway | ILD与系统载荷暴露 |
| 水解型CL2A | 可水解键 | 相对较低 | 强 | Trodelvy | 中性粒细胞减少/腹泻 |
| 腙键 | 酸性pH | 较低至中 | 可有 | Mylotarg/Besponsa组件 | 血浆早释风险 |
| 二硫键 | 还原环境 | 可调 | 常较强 | DM4类设计 | 循环硫醇交换 |
| 工程半胱氨酸 | 固定巯基位点 | 可优化 | 由载荷决定 | THIOMAB平台 | 抗体工程和工艺复杂 |
| 酶促/非天然氨基酸 | 位点特异反应 | 可优化 | 由载荷决定 | 下一代平台 | 规模化、免疫原性与成本 |

连接子决定何时释放，载荷则决定释放后癌细胞以何种方式死亡。

## 04.3 毒素载荷技术：效力、膜通透与治疗窗

微管抑制剂是第一波成熟载荷。MMAE与MMAF源自auristatin，抑制微管聚合；MMAE膜通透性较高，可形成旁观者效应，MMAF带电、旁观者效应较弱。DM1和DM4源自maytansine，结合微管并阻断有丝分裂。微管载荷适合快速分裂细胞，但周围神经病、骨髓抑制和角膜毒性可能来自游离载荷、非特异摄取或组织敏感性。

DNA损伤载荷具有更高效力。Calicheamicin结合DNA小沟并产生双链断裂，用于Mylotarg和Besponsa，但可出现肝窦阻塞综合征。PBD二聚体形成DNA交联，极高效力允许低DAR，却对暴露控制要求严苛。拓扑异构酶I抑制载荷已成为实体瘤主流：SN-38是伊立替康活性代谢物，DXd为exatecan衍生物，后者兼具高效力、膜通透和可调半衰期。相同Topo-I类别仍可能因连接子和载荷化学表现不同毒性。

新型载荷尝试突破“只杀快速分裂细胞”。α-amanitin抑制RNA聚合酶II，可作用于低增殖细胞；BCL-xL抑制载荷借助靶向递送降低血小板系统暴露；免疫刺激型抗体偶联物（Immune-Stimulating Antibody Conjugate，**ISAC**）递送TLR或STING激动剂以启动先天免疫。载荷越新，越需要证明连接后仍保持化学稳定、局部活性和可接受系统暴露。

> **图示：主要载荷的效力—旁观者效应教学图**
> x轴为膜通透/旁观者倾向，y轴为相对细胞毒效力等级，气泡大小代表已上市/临床使用广度；均为教学尺度。

### 表4-3：主要Payload机制与代表ADC

**十类ADC载荷的机制、通透性和代表产品**

| 载荷 | 机制 | 膜通透/旁观者 | 代表ADC | 典型毒性 | 工程要点 |
| --- | --- | --- | --- | --- | --- |
| MMAE | 微管聚合抑制 | 较高 | Adcetris/Padcev/Polivy/Tivdak | 神经病、骨髓抑制 | 常用可裂解连接子 |
| MMAF | 微管聚合抑制 | 低 | 部分眼毒性ADC | 角膜病变 | 带电降低扩散 |
| DM1 | 微管抑制 | 低至中 | Kadcyla | 血小板减少、肝毒性 | 不可裂解连接子 |
| DM4 | 微管抑制 | 较高 | Elahere | 眼毒性、神经病 | 可裂解二硫键 |
| Calicheamicin | DNA双链断裂 | 有限 | Mylotarg/Besponsa | 肝窦阻塞、骨髓抑制 | 极高效力 |
| SN-38 | Topo-I抑制 | 高 | Trodelvy | 中性粒细胞减少、腹泻 | 较高DAR与可水解连接 |
| DXd | Topo-I抑制 | 高 | Enhertu/Datroway | ILD、恶心、骨髓抑制 | 高DAR、四肽连接子 |
| PBD二聚体 | DNA交联 | 可高 | Zynlonta | 水肿、肝酶、骨髓抑制 | 低暴露即可高效 |
| α-Amanitin | RNA Pol II抑制 | 依设计 | HD P-101等在研 | 肝毒性关注 | 低增殖细胞潜力 |
| 免疫激动剂 | TLR/STING激活 | 局部免疫扩散 | ISAC在研 | 系统炎症 | 需严格肿瘤内释放 |

这些工程组合最终必须在人体中证明治疗窗，批准产品提供了最直接的成败样本。

## 04.4 已批准ADC药物全览

FDA在2024年指南中指出，截至2024年1月已批准11个肿瘤ADC；随后Datroway和Emrelis等扩充类别。历史计数会因撤市与重新批准而变化：Lumoxiti在美国停止商业供应，Blenrep在美国加速批准撤回后于2025年第三季度以后出现新的监管变化，不应写入2025.Q2“当前获批”清单。Mylotarg曾于2010年撤市，后以不同剂量和证据在2017年重新批准。这些案例说明产品状态必须绑定日期和地区。

### 表4-1：美国及主要市场批准ADC全览（截至2025.Q2）

**十七个曾获主要监管机构批准的ADC产品及状态**

| 药物/商品名/代码 | 靶点 | 抗体/连接子 | 载荷/DAR | 公司 | 首次批准 | 代表适应症 | 关键试验/数据 | 重大毒性 | 2025.Q2状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemtuzumab ozogamicin / Mylotarg | CD33 | 人源化IgG4/酸裂解 | Calicheamicin/异质 | Pfizer | FDA 2000；2017重批 | CD33+ AML | ALFA-0701 | 肝窦阻塞、骨髓抑制 | FDA获批 |
| Brentuximab vedotin / Adcetris / SGN-35 | CD30 | 嵌合IgG1/vc-PABC | MMAE/约4 | Pfizer/Seagen, Takeda | FDA 2011 | cHL、sALCL、CD30+ PTCL | ECHELON-1/2 | 周围神经病 | FDA获批 |
| Ado-trastuzumab emtansine / Kadcyla / T-DM1 | HER2 | Trastuzumab/SMCC | DM1/约3.5 | Roche | FDA 2013 | HER2+乳腺癌 | EMILIA/KATHERINE | 肝毒性、血小板减少 | FDA获批 |
| Inotuzumab ozogamicin / Besponsa | CD22 | IgG4/酸裂解 | Calicheamicin/约6 | Pfizer | FDA 2017 | B细胞前体ALL | INO-VATE | 肝窦阻塞 | FDA获批 |
| Polatuzumab vedotin / Polivy | CD79b | IgG1/vc-PABC | MMAE/约3.5 | Roche | FDA 2019 | DLBCL | GO29365/POLARIX | 神经病、骨髓抑制 | FDA获批 |
| Enfortumab vedotin / Padcev / ASG-22ME | Nectin-4 | IgG1/vc-PABC | MMAE/约3.8 | Astellas/Pfizer | FDA 2019 | 尿路上皮癌 | EV-301/302 | 严重皮肤反应、神经病、高血糖 | FDA获批 |
| Trastuzumab deruxtecan / Enhertu / DS-8201 | HER2 | Trastuzumab样/四肽 | DXd/约8 | Daiichi Sankyo/AZ | FDA 2019 | HER2+及HER2-low乳腺癌、胃癌、肺癌、泛实体瘤 | DESTINY系列 | ILD/肺炎 | FDA获批 |
| Sacituzumab govitecan / Trodelvy / IMMU-132 | TROP-2 | IgG1/CL2A | SN-38/约7.6 | Gilead | FDA 2020 | TNBC、HR+/HER2−乳腺癌 | ASCENT/TROPiCS-02 | 中性粒细胞减少、腹泻 | FDA获批 |
| Loncastuximab tesirine / Zynlonta / ADCT-402 | CD19 | IgG1/可裂解 | PBD tesirine/约2.3 | ADC Therapeutics | FDA 2021 | 复发/难治LBCL | LOTIS-2，ORR约48% | 水肿、骨髓抑制、肝酶 | FDA获批 |
| Tisotumab vedotin / Tivdak | Tissue Factor | IgG1/vc-PABC | MMAE/约4 | Pfizer/Genmab | FDA 2021 | 宫颈癌 | innovaTV 204/301 | 眼毒性、出血 | FDA获批 |
| Mirvetuximab soravtansine / Elahere / IMGN853 | FRα | IgG1/二硫键 | DM4/约3.5 | AbbVie/ImmunoGen | FDA 2022 | FRα+铂耐药卵巢癌 | SORAYA/MIRASOL | 眼毒性 | FDA获批 |
| Datopotamab deruxtecan / Datroway / DS-1062 | TROP-2 | IgG1/四肽 | DXd/约4 | Daiichi Sankyo/AZ | FDA 2025 | HR+/HER2−乳腺癌；EGFRm NSCLC加速批准 | TROPION-Breast01/Lung05 | 口腔炎、眼表事件、ILD | FDA获批 |
| Telisotuzumab vedotin / Emrelis / ABBV-399 | c-Met | IgG1/vc-PABC | MMAE/约3.1 | AbbVie | FDA 2025 | 高c-Met蛋白过表达非鳞NSCLC | LUMINOSITY | 神经病、ILD、低白蛋白 | FDA加速批准 |
| Moxetumomab pasudotox / Lumoxiti | CD22 | 抗体片段融合 | PE38毒素/非典型ADC | AstraZeneca | FDA 2018 | 毛细胞白血病 | Study 1053 | 毛细血管渗漏、HUS | 美国停止销售 |
| Belantamab mafodotin / Blenrep | BCMA | IgG1/不可裂解 | MMAF/约4 | GSK | FDA 2020 | 多发性骨髓瘤 | DREAMM-2 | 角膜病变 | FDA AA撤回（Q2状态） |
| Disitamab vedotin / Aidixi / RC48 | HER2 | Hertuzumab/vc | MMAE/约4 | RemeGen | NMPA 2021 | 胃癌、尿路上皮癌等地区标签 | 中国注册研究 | 神经病、骨髓抑制 | NMPA获批 |
| Sacituzumab tirumotecan / SKB264 | TROP-2 | IgG1/稳定CL2A样平台 | Topo-I KL610023/约7.4 | Kelun-Biotech/MSD | NMPA 2024 | 晚期TNBC | OptiTROP-Breast01 | 骨髓抑制、口腔炎 | NMPA获批 |

> **临床/研究亮点：** **DESTINY-Breast04重新定义HER2-low。**既往“HER2阴性”中的IHC 1+或IHC 2+/ISH−患者接受T-DXd相对医生选择化疗获得PFS和OS改善。研究证明低表达可作为ADC递送入口，却不意味着HER2-low是与HER2扩增同样稳定、同样可重复的独立生物亚型。

批准数量增加后，竞争不再只看靶点，还要比较连接子、载荷、DAR、剂量和适应症定位。

## 04.5 差异化策略与竞争格局

HER2赛道展示了ADC工程如何改变可治疗人群。Kadcyla使用不可裂解连接子和DM1，适合高HER2表达并在残余病辅助治疗中建立价值；Enhertu使用高DAR、可裂解连接子和膜通透DXd，覆盖HER2-low和部分HER2突变肿瘤，同时要求主动管理ILD。Trastuzumab duocarmazine（SYD985）在III期显示活性但截至2025.Q2未获FDA批准，不能与前两者并列为上市“三雄”。更准确的竞争框架是“已批准标准+区域产品+在研差异化”。

TROP-2赛道中，Trodelvy以SN-38和较高DAR在TNBC、HR+/HER2−乳腺癌建立标签；Datroway使用DXd衍生载荷和较低DAR，毒性中口腔炎和眼表事件更突出。Sacituzumab tirumotecan来自中国平台并进入全球合作。Nectin-4方面，Padcev是成熟标杆，联合帕博利珠单抗已改变晚期尿路上皮癌一线；RC88等项目尝试不同载荷和适应症。靶点竞争图需要同时显示临床阶段、项目数和已验证癌种，单看“同靶点数量”会高估拥挤度。

> **图示：主要ADC靶点竞争格局**
> x轴为临床成熟度（1=临床前，4=已批准），y轴为估计活跃项目数量级，气泡大小为适应症广度；数字用于格局教学，非商业数据库实时计数。

### 表4-4：HER2靶向ADC临床定位对比

**八个HER2 ADC的工程特征与临床状态**

| 产品 | 载荷/平均DAR | 旁观者效应 | 代表人群 | 关键证据 | 状态 |
| --- | --- | --- | --- | --- | --- |
| Kadcyla | DM1/~3.5 | 弱 | HER2+乳腺癌 | EMILIA/KATHERINE | FDA获批 |
| Enhertu | DXd/~8 | 强 | HER2+、low/ultralow、突变 | DESTINY系列 | FDA获批 |
| Disitamab vedotin | MMAE/~4 | 有 | 胃癌/尿路上皮癌等 | 中国注册研究 | NMPA获批/全球开发 |
| Trastuzumab duocarmazine | Duocarmycin/~2.8 | 强 | HER2表达乳腺癌 | TULIP | 未获FDA批准 |
| ARX788 | AS269/位点特异 | 较低 | HER2+乳腺癌 | ACE-Breast系列 | III期/地区申报 |
| Trastuzumab rezetecan | Topo-I/高DAR | 有 | HER2表达实体瘤 | 中国研究 | 地区获批/开发 |
| BB-1701 | Eribulin | 有 | HER2表达实体瘤 | 早期临床 | II期 |
| DB-1303/BNT323 | Topo-I | 有 | HER2表达实体瘤 | 全球临床 | III期 |

### 表4-5：TROP-2靶向ADC竞争格局

**八个TROP-2 ADC的载荷、定位与状态**

| 产品 | 载荷 | DAR | 代表癌种 | 差异化 | 状态 |
| --- | --- | --- | --- | --- | --- |
| Trodelvy | SN-38 | 约7.6 | TNBC、HR+/HER2−乳腺癌 | 成熟乳腺癌证据 | FDA获批 |
| Datroway | DXd | 约4 | HR+/HER2−乳腺癌、EGFRm NSCLC | DXd平台；口腔/眼表管理 | FDA获批 |
| Sacituzumab tirumotecan | KL610023 Topo-I | 约7.4 | TNBC、NSCLC | 中国到全球授权 | NMPA获批/III期 |
| SHR-A1921 | Topo-I类 | [待核实] | 实体瘤 | 新连接子/载荷 | 临床开发 |
| ESG401 | SN-38类 | 约8 | 乳腺癌等 | 安全窗探索 | II期 |
| TORL-1-23 | MMAE | [待核实] | 卵巢/实体瘤 | 不同表位与载荷类别 | I期 |
| BAT8008 | Topo-I类 | [待核实] | 实体瘤 | 中国平台 | I/II期 |
| PF-06664178 | Auristatin类 | [待核实] | 实体瘤 | 早期世代经验 | 开发终止 |

工程差异最终以毒性谱和耐药路径体现，二者常可反向揭示ADC在人体中的真实分布。

## 04.6 ADC毒性与耐药机制

ADC毒性可来自靶点介导的正常组织摄取、Fc或非特异内吞、连接子早释、游离载荷和载荷类别效应。Enhertu的间质性肺疾病（Interstitial Lung Disease，**ILD**）可致死，要求基线症状评估、每次访视询问咳嗽呼吸困难并对影像变化低阈值处理；疑似1级通常暂停并评估，≥2级通常永久停药并及时使用全身糖皮质激素，具体按标签。眼毒性在Tivdak、Elahere和MMAF类ADC中表现不同，需眼科检查、润滑/局部措施和剂量调整，不能以一个统一机制概括。

MMAE产品常见周围神经病，Topo-I载荷常见骨髓抑制、恶心或口腔炎；Trodelvy对UGT1A1功能降低者可能增加SN-38相关毒性。靶向tissue factor的Tivdak可出血，Mylotarg/Besponsa需关注肝窦阻塞。既往早期CD33 ADC gemtuzumab ozogamicin曾出现撤市再获批，说明分次剂量、患者选择和支持治疗可以改变同一分子的治疗窗。

耐药可发生在递送链每一步：靶抗原下调或剪接改变降低结合，内吞与溶酶体运输改变减少释放，蛋白酶或还原环境变化影响裂解，ABC转运体外排膜通透载荷，微管或拓扑异构酶改变降低药效，凋亡阈值上升让损伤不再致死。抗原异质性使高表达克隆先被清除，残余低表达病灶扩张。再活检应同时评估靶点、组织学和潜在旁路，而不是只问“是否对ADC耐药”。

### 表4-6：ADC主要毒性分级与处理原则

**八类ADC重要毒性的监测与处理框架**

| 毒性 | 高关联产品/载荷 | 监测 | 早期处理 | 重症原则 | 不可忽略的鉴别 |
| --- | --- | --- | --- | --- | --- |
| ILD/肺炎 | DXd类、Emrelis等 | 症状、血氧、CT | 暂停、快速评估；按标签激素 | ≥2级通常永久停药 | 感染、肿瘤、肺栓塞 |
| 角膜/眼表毒性 | Elahere、Tivdak、MMAF类 | 视力、裂隙灯、症状 | 眼科方案、润滑、延迟/减量 | 严重事件停药 | 感染、干眼基础病 |
| 周围神经病 | MMAE | 感觉/运动查体 | 延迟、减量 | 重度停药 | 糖尿病、铂/紫杉类累积 |
| 中性粒细胞减少 | SN-38/DXd/多载荷 | CBC、发热 | 延迟、G-CSF依方案 | 发热性中性粒细胞减少急治 | 感染、骨髓浸润 |
| 血小板减少 | T-DM1等 | CBC、出血 | 延迟/减量 | 输注及停药依严重度 | 肝病、免疫性血小板减少 |
| 肝窦阻塞 | Calicheamicin ADC | 体重、胆红素、肝大 | 风险分层、暂停 | 专科支持；避免高风险移植时序 | 感染、疾病浸润 |
| 严重皮肤反应 | Padcev | 皮疹、黏膜、全身症状 | 暂停并皮肤科评估 | 疑SJS/TEN永久停药 | 感染、ICI皮炎 |
| 腹泻/口腔炎 | SN-38/Datroway等 | 排便、摄入、黏膜 | 支持、排除感染、剂量调整 | 补液住院/停药依标签 | ICI结肠炎、感染 |

下一代ADC试图通过双靶点、双载荷和免疫激活突破异质性，却也增加质量控制和安全归因难度。

## 04.7 双靶点ADC、双载荷与免疫激活型偶联物

双特异性ADC可让一个抗体识别两个抗原或同一抗原两个表位，提高内吞、选择性或异质覆盖。例如HER2双表位设计可能增强受体聚簇；EGFR×HER3等组合可针对受体冗余。它不同于把两个单抗简单混合，因为几何、价态、Fc和DAR集中在同一分子。开发难点包括链配对、偶联位点、每个结合臂亲和力和复杂分析方法。

双载荷ADC在同一抗体上携带两种机制载荷，理论上降低单一耐药，但必须控制两个DAR分布、连接子正交释放和总疏水性。若两种载荷释放动力学不同，平均DAR无法描述真正批次。另一方向是degrader-antibody conjugate、oligonucleotide conjugate和蛋白毒素偶联，将“载荷”扩展到蛋白降解、RNA调控或免疫通路。

ISAC把STING或TLR激动剂递送到肿瘤，诱导树突细胞和髓系细胞激活，目标是把“冷”肿瘤转为可被ICI利用的炎症环境。ADC加ICI则利用细胞死亡、抗原释放和PD-1解除抑制；EV-302已经证明特定组合可改变实践，但并不保证所有ADC–ICI都协同。放射免疫偶联物使用抗体递送核素，物理射程产生跨火力效应，严格来说与小分子细胞毒ADC在剂量学、制造和监管上不同，详见[第9章放射性药物](09-radiopharm.md)。

> **临床/研究亮点：** **EV-302是联合策略的验证样本。**Enfortumab vedotin加帕博利珠单抗在未经治疗的晚期尿路上皮癌中相对铂类化疗显著改善PFS和OS。其成功来自具体靶点、载荷、癌种和方案，而不是“ADC释放抗原”这一通用叙述。

## 主要参考来源

- U.S. FDA. Clinical Pharmacology Considerations for Antibody-Drug Conjugates: Guidance for Industry. 2024. [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-pharmacology-considerations-antibody-drug-conjugates-guidance-industry)
- Modi S, et al. Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer. NEJM. 2022;387:9–20. [DOI](https://doi.org/10.1056/NEJMoa2203690)
- Powles T, et al. Enfortumab Vedotin and Pembrolizumab in Untreated Advanced Urothelial Cancer. NEJM. 2024;390:875–888. [DOI](https://doi.org/10.1056/NEJMoa2312117)
- Bardia A, et al. Sacituzumab Govitecan in Metastatic Triple-Negative Breast Cancer. NEJM. 2021;384:1529–1541. [DOI](https://doi.org/10.1056/NEJMoa2028485)
- U.S. FDA. FDA approves datopotamab deruxtecan for HR-positive, HER2-negative breast cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-datopotamab-deruxtecan-dlnk-unresectable-or-metastatic-hr-positive-her2-negative-breast)
- Drago JZ, Modi S, Chandarlapaty S. Unlocking the potential of antibody-drug conjugates for cancer therapy. Nature Reviews Clinical Oncology. 2021;18:327–344. [DOI](https://doi.org/10.1038/s41571-021-00470-8)


---

内容版本：2025.Q2。下次更新建议：2025.Q4，重点复核 FDA 标签、临床阶段和公司交易状态。
