# 第04章：抗体药物偶联物（ADC）

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解ADC的结构与作用机制的核心概念、证据边界与临床转化逻辑。
- 理解连接子技术的演进的核心概念、证据边界与临床转化逻辑。
- 理解毒素载荷技术的核心概念、证据边界与临床转化逻辑。
- 理解已批准ADC药物的核心概念、证据边界与临床转化逻辑。
- 理解差异化策略与竞争格局的核心概念、证据边界与临床转化逻辑。
- 理解2025下半年—2026年ADC监管决定（早期乳腺癌、一线TNBC、MIBC围手术期扩展与加速批准申请撤回）的核心概念、证据边界与临床转化逻辑。

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

FDA在2024年指南中指出，截至2024年1月已批准11个肿瘤ADC；随后Datroway和Emrelis等扩充类别。历史计数会因撤市与重新批准而变化：Lumoxiti在美国停止商业供应；Blenrep的2020年加速批准于2022年撤回，2025-10-23又依据随机III期DREAMM-7以联合硼替佐米+地塞米松（BVd）方案重新获FDA批准，并通过REMS管理眼毒性。Mylotarg曾于2010年撤市，后以不同剂量和证据在2017年重新批准。这些案例说明产品状态必须绑定日期和地区。2025下半年—2026年新增的FDA决定主要是既有ADC的适应症扩展（HER2+一线与早期乳腺癌、一线TNBC、MIBC围手术期），而非新靶点分子上市，详见04.8。

### 表4-1：美国及主要市场批准ADC全览（截至2026.Q4）

**十七个曾获主要监管机构批准的ADC产品及状态**

| 药物/商品名/代码 | 靶点 | 抗体/连接子 | 载荷/DAR | 公司 | 首次批准 | 代表适应症 | 关键试验/数据 | 重大毒性 | 2026.Q4状态 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Gemtuzumab ozogamicin / Mylotarg | CD33 | 人源化IgG4/酸裂解 | Calicheamicin/异质 | Pfizer | FDA 2000；2017重批 | CD33+ AML | ALFA-0701 | 肝窦阻塞、骨髓抑制 | FDA获批 |
| Brentuximab vedotin / Adcetris / SGN-35 | CD30 | 嵌合IgG1/vc-PABC | MMAE/约4 | Pfizer/Seagen, Takeda | FDA 2011 | cHL、sALCL、CD30+ PTCL | ECHELON-1/2 | 周围神经病 | FDA获批 |
| Ado-trastuzumab emtansine / Kadcyla / T-DM1 | HER2 | Trastuzumab/SMCC | DM1/约3.5 | Roche | FDA 2013 | HER2+乳腺癌 | EMILIA/KATHERINE | 肝毒性、血小板减少 | FDA获批 |
| Inotuzumab ozogamicin / Besponsa | CD22 | IgG4/酸裂解 | Calicheamicin/约6 | Pfizer | FDA 2017 | B细胞前体ALL | INO-VATE | 肝窦阻塞 | FDA获批 |
| Polatuzumab vedotin / Polivy | CD79b | IgG1/vc-PABC | MMAE/约3.5 | Roche | FDA 2019 | DLBCL | GO29365/POLARIX | 神经病、骨髓抑制 | FDA获批 |
| Enfortumab vedotin / Padcev / ASG-22ME | Nectin-4 | IgG1/vc-PABC | MMAE/约3.8 | Astellas/Pfizer | FDA 2019 | 晚期尿路上皮癌；不适合顺铂MIBC围手术期（联合帕博利珠单抗） | EV-301/302；KEYNOTE-905/EV-303 | 严重皮肤反应、神经病、高血糖 | FDA获批（2025-11 MIBC扩展） |
| Trastuzumab deruxtecan / Enhertu / DS-8201 | HER2 | Trastuzumab样/四肽 | DXd/约8 | Daiichi Sankyo/AZ | FDA 2019 | HER2+（含一线联合帕妥珠单抗、早期新辅助/辅助）及HER2-low乳腺癌、胃癌、肺癌、泛实体瘤 | DESTINY系列（含Breast09/05/11） | ILD/肺炎 | FDA获批（2025-12一线；2026-05早期乳腺癌） |
| Sacituzumab govitecan / Trodelvy / IMMU-132 | TROP-2 | IgG1/CL2A | SN-38/约7.6 | Gilead | FDA 2020 | TNBC（含一线）、HR+/HER2−乳腺癌 | ASCENT/TROPiCS-02/ASCENT-03/ASCENT-04 | 中性粒细胞减少、腹泻 | FDA获批（2026-06一线TNBC） |
| Loncastuximab tesirine / Zynlonta / ADCT-402 | CD19 | IgG1/可裂解 | PBD tesirine/约2.3 | ADC Therapeutics | FDA 2021 | 复发/难治LBCL | LOTIS-2，ORR约48% | 水肿、骨髓抑制、肝酶 | FDA获批 |
| Tisotumab vedotin / Tivdak | Tissue Factor | IgG1/vc-PABC | MMAE/约4 | Pfizer/Genmab | FDA 2021 | 宫颈癌 | innovaTV 204/301 | 眼毒性、出血 | FDA获批 |
| Mirvetuximab soravtansine / Elahere / IMGN853 | FRα | IgG1/二硫键 | DM4/约3.5 | AbbVie/ImmunoGen | FDA 2022 | FRα+铂耐药卵巢癌 | SORAYA/MIRASOL | 眼毒性 | FDA获批 |
| Datopotamab deruxtecan / Datroway / DS-1062 | TROP-2 | IgG1/四肽 | DXd/约4 | Daiichi Sankyo/AZ | FDA 2025 | HR+/HER2−乳腺癌；EGFRm NSCLC加速批准；不适合PD-(L)1抑制剂的一线TNBC | TROPION-Breast01/Lung05/Breast02 | 口腔炎、眼表事件、ILD | FDA获批（2026-05一线TNBC） |
| Telisotuzumab vedotin / Emrelis / ABBV-399 | c-Met | IgG1/vc-PABC | MMAE/约3.1 | AbbVie | FDA 2025 | 高c-Met蛋白过表达非鳞NSCLC | LUMINOSITY | 神经病、ILD、低白蛋白 | FDA加速批准 |
| Moxetumomab pasudotox / Lumoxiti | CD22 | 抗体片段融合 | PE38毒素/非典型ADC | AstraZeneca | FDA 2018 | 毛细胞白血病 | Study 1053 | 毛细血管渗漏、HUS | 美国停止销售 |
| Belantamab mafodotin / Blenrep | BCMA | IgG1/不可裂解 | MMAF/约4 | GSK | FDA 2020（AA，2022撤回）；2025重新批准 | ≥2线后RRMM（联合硼替佐米+地塞米松） | DREAMM-2；DREAMM-7 | 角膜/眼表毒性（REMS） | FDA获批（2025-10-23重新批准） |
| Disitamab vedotin / Aidixi / RC48 | HER2 | Hertuzumab/vc | MMAE/约4 | RemeGen | NMPA 2021 | 胃癌、尿路上皮癌等地区标签 | 中国注册研究 | 神经病、骨髓抑制 | NMPA获批 |
| Sacituzumab tirumotecan / SKB264 | TROP-2 | IgG1/稳定CL2A样平台 | Topo-I KL610023/约7.4 | Kelun-Biotech/MSD | NMPA 2024 | 晚期TNBC（中国首批）；全球开发含子宫内膜癌 | OptiTROP-Breast01；TroFuse-005 | 骨髓抑制、口腔炎 | NMPA获批；美国BLA优先审评（PDUFA 2027-06-15） |

> **临床/研究亮点：** **DESTINY-Breast04重新定义HER2-low。**既往“HER2阴性”中的IHC 1+或IHC 2+/ISH−患者接受T-DXd相对医生选择化疗获得PFS和OS改善。研究证明低表达可作为ADC递送入口，却不意味着HER2-low是与HER2扩增同样稳定、同样可重复的独立生物亚型。

批准数量增加后，竞争不再只看靶点，还要比较连接子、载荷、DAR、剂量和适应症定位。

## 04.5 差异化策略与竞争格局

HER2赛道展示了ADC工程如何改变可治疗人群。Kadcyla使用不可裂解连接子和DM1，适合高HER2表达并在残余病辅助治疗中建立价值；Enhertu使用高DAR、可裂解连接子和膜通透DXd，覆盖HER2-low和部分HER2突变肿瘤，同时要求主动管理ILD。2025-12至2026-05，Enhertu先后依据DESTINY-Breast09（联合帕妥珠单抗一线）、DESTINY-Breast11（新辅助，T-DXd序贯THP）和DESTINY-Breast05（新辅助后残留病灶辅助，头对头优于T-DM1）获FDA批准，HER2+疾病中的T-DXd从晚期二线前移到一线和可治愈阶段，也直接挑战了Kadcyla依据KATHERINE确立的残留病辅助地位。Trastuzumab duocarmazine（SYD985）在III期显示活性但截至2025.Q2未获FDA批准，不能与前两者并列为上市“三雄”。更准确的竞争框架是“已批准标准+区域产品+在研差异化”。

TROP-2赛道中，Trodelvy以SN-38和较高DAR在TNBC、HR+/HER2−乳腺癌建立标签；Datroway使用DXd衍生载荷和较低DAR，毒性中口腔炎和眼表事件更突出。Sacituzumab tirumotecan来自中国平台并进入全球合作。2026年两款TROP-2 ADC同时进入一线TNBC：Datroway依据TROPION-Breast02（2026-05-22）、Trodelvy依据ASCENT-03单药与ASCENT-04联合帕博利珠单抗（2026-06-24）获批，使“能否接受PD-(L)1抑制剂、PD-L1 CPS是否≥10”成为一线TNBC分层关键；sac-TMT则以TroFuse-005在既往铂类和PD-(L)1治疗后的子宫内膜癌取得PFS与OS双阳性，美国BLA获优先审评。Nectin-4方面，Padcev是成熟标杆，联合帕博利珠单抗已改变晚期尿路上皮癌一线，并于2025-11依据KEYNOTE-905/EV-303前移至不适合顺铂MIBC的围手术期；RC88等项目尝试不同载荷和适应症。靶点竞争图需要同时显示临床阶段、项目数和已验证癌种，单看“同靶点数量”会高估拥挤度。

> **图示：主要ADC靶点竞争格局**
> x轴为临床成熟度（1=临床前，4=已批准），y轴为估计活跃项目数量级，气泡大小为适应症广度；数字用于格局教学，非商业数据库实时计数。

### 表4-4：HER2靶向ADC临床定位对比

**八个HER2 ADC的工程特征与临床状态**

| 产品 | 载荷/平均DAR | 旁观者效应 | 代表人群 | 关键证据 | 状态 |
| --- | --- | --- | --- | --- | --- |
| Kadcyla | DM1/~3.5 | 弱 | HER2+乳腺癌 | EMILIA/KATHERINE | FDA获批 |
| Enhertu | DXd/~8 | 强 | HER2+（晚期一线至早期新辅助/辅助）、low/ultralow、突变 | DESTINY系列（含Breast09/05/11） | FDA获批（2025-12、2026-05扩展） |
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
| Trodelvy | SN-38 | 约7.6 | TNBC（含一线）、HR+/HER2−乳腺癌 | 一线TNBC单药与联合ICI证据 | FDA获批（2026-06一线TNBC） |
| Datroway | DXd | 约4 | HR+/HER2−乳腺癌、EGFRm NSCLC、一线TNBC（不适合ICI） | DXd平台；TROPION-Breast02报告OS获益 | FDA获批（2026-05一线TNBC） |
| Sacituzumab tirumotecan | KL610023 Topo-I | 约7.4 | TNBC、NSCLC、子宫内膜癌 | 中国到全球授权；TroFuse-005 OS阳性 | NMPA获批；美国BLA优先审评 |
| SHR-A1921 | Topo-I类 | [待核实] | 实体瘤 | 新连接子/载荷 | 临床开发 |
| ESG401 | SN-38类 | 约8 | 乳腺癌等 | 安全窗探索 | II期 |
| TORL-1-23 | MMAE | [待核实] | 卵巢/实体瘤 | 不同表位与载荷类别 | I期 |
| BAT8008 | Topo-I类 | [待核实] | 实体瘤 | 中国平台 | I/II期 |
| PF-06664178 | Auristatin类 | [待核实] | 实体瘤 | 早期世代经验 | 开发终止 |

工程差异最终以毒性谱和耐药路径体现，二者常可反向揭示ADC在人体中的真实分布。

## 04.6 ADC毒性与耐药机制

ADC毒性可来自靶点介导的正常组织摄取、Fc或非特异内吞、连接子早释、游离载荷和载荷类别效应。Enhertu的间质性肺疾病（Interstitial Lung Disease，**ILD**）可致死，要求基线症状评估、每次访视询问咳嗽呼吸困难并对影像变化低阈值处理；疑似1级通常暂停并评估，≥2级通常永久停药并及时使用全身糖皮质激素，具体按标签。眼毒性在Tivdak、Elahere和MMAF类ADC中表现不同，需眼科检查、润滑/局部措施和剂量调整，不能以一个统一机制概括；Blenrep在DREAMM-7中眼毒性发生率92%（3–4级77%），83%患者因此调整剂量，2025年重新批准时仍须通过BLENREP REMS管理。适应症前移放大了ILD的风险收益权衡：DESTINY-Breast05中经判定的药物相关ILD/肺炎为9.6%（含2例5级），DESTINY-Breast11中T-DXd序贯THP组为4.4%（1例致死），B7-H3 ADC I-DXd在IDeate-Lung01中经判定ILD为12.4%。在可治愈人群中，ILD基线筛查、早期影像和停药规则与疗效同等决定净获益。

MMAE产品常见周围神经病，Topo-I载荷常见骨髓抑制、恶心或口腔炎；Trodelvy对UGT1A1功能降低者可能增加SN-38相关毒性。靶向tissue factor的Tivdak可出血，Mylotarg/Besponsa需关注肝窦阻塞。既往早期CD33 ADC gemtuzumab ozogamicin曾出现撤市再获批，说明分次剂量、患者选择和支持治疗可以改变同一分子的治疗窗。

耐药可发生在递送链每一步：靶抗原下调或剪接改变降低结合，内吞与溶酶体运输改变减少释放，蛋白酶或还原环境变化影响裂解，ABC转运体外排膜通透载荷，微管或拓扑异构酶改变降低药效，凋亡阈值上升让损伤不再致死。抗原异质性使高表达克隆先被清除，残余低表达病灶扩张。再活检应同时评估靶点、组织学和潜在旁路，而不是只问“是否对ADC耐药”。

### 表4-6：ADC主要毒性分级与处理原则

**八类ADC重要毒性的监测与处理框架**

| 毒性 | 高关联产品/载荷 | 监测 | 早期处理 | 重症原则 | 不可忽略的鉴别 |
| --- | --- | --- | --- | --- | --- |
| ILD/肺炎 | DXd类（含早期乳腺癌新辅助/辅助）、Emrelis等 | 症状、血氧、CT | 暂停、快速评估；按标签激素 | ≥2级通常永久停药 | 感染、肿瘤、肺栓塞 |
| 角膜/眼表毒性 | Elahere、Tivdak、MMAF类（Blenrep需REMS） | 视力、裂隙灯、症状 | 眼科方案、润滑、延迟/减量 | 严重事件停药 | 感染、干眼基础病 |
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

ISAC把STING或TLR激动剂递送到肿瘤，诱导树突细胞和髓系细胞激活，目标是把“冷”肿瘤转为可被ICI利用的炎症环境。ADC加ICI则利用细胞死亡、抗原释放和PD-1解除抑制；EV-302已经证明特定组合可改变实践，2025-11的KEYNOTE-905/EV-303又把EV+帕博利珠单抗推进到不适合顺铂MIBC的围手术期（EFS HR 0.40，OS HR 0.50），2026-06的ASCENT-04使SG+帕博利珠单抗进入PD-L1 CPS≥10的一线TNBC；但这并不保证所有ADC–ICI都协同。放射免疫偶联物使用抗体递送核素，物理射程产生跨火力效应，严格来说与小分子细胞毒ADC在剂量学、制造和监管上不同，详见[第9章放射性药物](09-radiopharm.md)。

> **临床/研究亮点：** **EV-302是联合策略的验证样本。**Enfortumab vedotin加帕博利珠单抗在未经治疗的晚期尿路上皮癌中相对铂类化疗显著改善PFS和OS。其成功来自具体靶点、载荷、癌种和方案，而不是“ADC释放抗原”这一通用叙述。

## 04.8 2025下半年—2026年关键进展（截至2026-11-12）

本节补记2025-07-01至2026-11-12期间ADC领域的主要监管决定与关键读出。该时期的主线不是新靶点ADC批量上市，而是已获批的HER2、TROP-2和Nectin-4 ADC向一线及可治愈阶段前移；与此同时，基于II期数据或未获OS支持的新靶点ADC申请在与FDA沟通后撤回，显示监管对“新靶点+非随机数据”的容忍度在下降。日期以FDA公告、公司新闻稿或会议报道为准，适应症措辞以最终标签为准。

### 表4-7：2025下半年—2026年ADC关键事件

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-09-15 | Raludotatug deruxtecan（R-DXd）获FDA突破性疗法认定：CDH6表达、既往贝伐珠单抗治疗的铂耐药卵巢癌 | 监管认定 | 依据I期及REJOICE-Ovarian01 II/III期；I期铂耐药亚组确认ORR 46% |
| 2025-10-23 | Blenrep联合硼替佐米+地塞米松获FDA重新批准（既往≥2线、含PI和IMiD的RRMM） | FDA批准 | DREAMM-7中位PFS 31.3 vs 10.4个月（对照DVd），PFS与OS支持批准；眼毒性须REMS |
| 2025-11-21 | 帕博利珠单抗（含Keytruda Qlex）+Padcev获批用于不适合顺铂MIBC的新辅助+膀胱切除术后辅助 | FDA批准（适应症扩展） | KEYNOTE-905/EV-303（n=344）：EFS HR 0.40，OS HR 0.50；优先审评+Project Orbis，较目标日期提前约5个月 |
| 2025-12-15 | Enhertu+帕妥珠单抗一线治疗不可切除/转移性HER2+（IHC 3+或ISH+）乳腺癌 | FDA批准（适应症扩展） | DESTINY-Breast09：中位PFS 40.7 vs 26.9个月（对照THP），HR 0.56；同步批准伴随诊断 |
| 2026-04 | I-DXd用于铂类后进展ES-SCLC的BLA获优先审评（PDUFA 2026-10-10） | 监管受理 | 依据II期IDeate-Lung01；经判定ILD 12.4% |
| 2026-05-15 | Enhertu获批HER2+ II–III期乳腺癌新辅助（DESTINY-Breast11）与新辅助后残留浸润病灶辅助（DESTINY-Breast05） | FDA批准（适应症扩展） | DB-11（n=927）pCR 67.3% vs 56.3%（对照ddAC-THP）；DB-05（n=1635）3年IDFS 92.4% vs 83.7%（对照T-DM1），HR 0.47 |
| 2026-05-22 | Datroway获批不适合PD-(L)1抑制剂的一线不可切除/转移性TNBC | FDA批准（适应症扩展） | TROPION-Breast02（n=644）：中位OS 23.7 vs 18.7个月，进展或死亡风险降低约43%；优先审评 |
| 2026-06-24 | Trodelvy获批一线TNBC：PD-L1 CPS≥10联合帕博利珠单抗（ASCENT-04/KEYNOTE-D19）；不适合PD-(L)1抑制剂者单药（ASCENT-03） | FDA批准（适应症扩展） | 一线TNBC形成“可用ICI/不可用ICI”双路径；欧盟委员会2026-08批准联合方案 |
| 2026-09-25 | I-DXd加速批准BLA自愿撤回 | 申请撤回 | 与FDA讨论后认为包括IDeate-Lung01在内的数据不足以支持该适应症加速批准；III期IDeate-Lung02继续 |
| 2026-10 | Sac-TMT TroFuse-005（既往铂类及PD-(L)1治疗的晚期/复发子宫内膜癌，n=776）PFS与OS双阳性；BLA获优先审评（PDUFA 2027-06-15） | 关键读出/监管受理 | 死亡风险降低32%、进展或死亡风险降低41%；ESMO 2026报告并发表于Lancet |

**早线化是本期最重要的变化。**约5个月内，Enhertu在HER2+乳腺癌中先进入晚期一线（DESTINY-Breast09），随后进入新辅助（DESTINY-Breast11）和新辅助后残留病灶辅助（DESTINY-Breast05）。后者以T-DM1为对照，意味着同为HER2 ADC的“新一代对上一代”头对头取胜，而不是与化疗比较。ADC的价值模型因此从“晚期长期用药”部分转向“可治愈阶段固定疗程”，ILD也从晚期可接受风险变成可治愈人群中的致死性代价：DESTINY-Breast05经判定ILD 9.6%且含2例5级。临床问题不再是“T-DXd是否有效”，而是哪些残留病灶负荷和复发风险足以抵消ILD风险，以及新辅助pCR能否支持后续降阶梯。

**一线TNBC出现两款TROP-2 ADC并行。**对不适合ICI的患者，Datroway（TROPION-Breast02，报告OS改善）和Trodelvy单药（ASCENT-03）几乎同时获批；对PD-L1 CPS≥10者，ASCENT-04把SG与帕博利珠单抗组合为一线标准选项之一。两药的载荷均为Topo-I抑制剂，但DAR、连接子稳定性和毒性谱不同（SN-38相关中性粒细胞减少/腹泻 vs DXd相关口腔炎/眼表事件），一线用过TROP-2 ADC后再用另一款Topo-I载荷ADC是否仍有效缺乏随机证据，序贯与交叉耐药成为下一阶段关键问题。

**新靶点加速批准门槛抬高。**HER3-DXd在HERTHENA-Lung02未达OS统计学显著后于2025-05撤回BLA；I-DXd在PDUFA日期前约两周撤回基于II期IDeate-Lung01的SCLC加速批准申请（FDA具体考量未完全公开）。相比之下，Blenrep是凭随机III期DREAMM-7的PFS和OS重新获批。这提示在可开展随机研究的疾病中，仅凭非随机ORR和可管理的ILD可能已不足以支撑加速上市，确证性III期最好在申请时已充分入组并能提供时间-事件终点；中国来源ADC如sac-TMT则以随机III期TroFuse-005（PFS与OS双阳性）作为美国BLA的基础。

> **临床/研究亮点：** **DESTINY-Breast05把ADC头对头带入可治愈场景。**在新辅助后残留浸润病灶的HER2+早期乳腺癌中，T-DXd对比T-DM1使3年IDFS从83.7%提高至92.4%（HR 0.47），但经判定药物相关ILD为9.6%且含2例死亡；这要求把ILD筛查、症状随访和停药规则视为辅助方案本身的一部分。

## 主要参考来源

- U.S. FDA. Clinical Pharmacology Considerations for Antibody-Drug Conjugates: Guidance for Industry. 2024. [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-pharmacology-considerations-antibody-drug-conjugates-guidance-industry)
- Modi S, et al. Trastuzumab Deruxtecan in Previously Treated HER2-Low Advanced Breast Cancer. NEJM. 2022;387:9–20. [DOI](https://doi.org/10.1056/NEJMoa2203690)
- Powles T, et al. Enfortumab Vedotin and Pembrolizumab in Untreated Advanced Urothelial Cancer. NEJM. 2024;390:875–888. [DOI](https://doi.org/10.1056/NEJMoa2312117)
- Bardia A, et al. Sacituzumab Govitecan in Metastatic Triple-Negative Breast Cancer. NEJM. 2021;384:1529–1541. [DOI](https://doi.org/10.1056/NEJMoa2028485)
- U.S. FDA. FDA approves datopotamab deruxtecan for HR-positive, HER2-negative breast cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-datopotamab-deruxtecan-dlnk-unresectable-or-metastatic-hr-positive-her2-negative-breast)
- Drago JZ, Modi S, Chandarlapaty S. Unlocking the potential of antibody-drug conjugates for cancer therapy. Nature Reviews Clinical Oncology. 2021;18:327–344. [DOI](https://doi.org/10.1038/s41571-021-00470-8)
- U.S. FDA. FDA approves belantamab mafodotin-blmf for relapsed or refractory multiple myeloma. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-belantamab-mafodotin-blmf-relapsed-or-refractory-multiple-myeloma)
- ASCO Post. FDA Approves Belantamab Mafodotin for Relapsed or Refractory Multiple Myeloma. 2025. [News](https://ascopost.com/news/october-2025/fda-approves-belantamab-mafodotin-for-relapsed-or-refractory-multiple-myeloma/)
- U.S. FDA. FDA approves pembrolizumab with enfortumab vedotin-ejfv for muscle invasive bladder cancer. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-pembrolizumab-enfortumab-vedotin-ejfv-muscle-invasive-bladder-cancer)
- OncLive. FDA Approves T-DXd Plus Pertuzumab for HER2+ Breast Cancer. 2025. [News](https://www.onclive.com/view/fda-approves-t-dxd-plus-pertuzumab-for-her2-breast-cancer)
- Targeted Oncology. FDA Accepts sBLA of T-DXd Plus THP in HER2+ Breast Cancer. 2025. [News](https://www.targetedonc.com/view/fda-accepts-sbla-of-t-dxd-plus-thp-in-her2-breast-cancer)
- ASCO Post. FDA Approves Fam-Trastuzumab Deruxtecan-nxki Indications in HER2-Positive Early Breast Cancer. 2026. [News](https://ascopost.com/news/may-2026/fda-approves-fam-trastuzumab-deruxtecan-nxki-indications-in-her2-positive-early-breast-cancer/)
- Daiichi Sankyo/AstraZeneca. Enhertu approved in the US for two new indications for patients with HER2-positive early breast cancer. 2026. [Press release](https://www.biospace.com/press-releases/enhertu-fam-trastuzumab-deruxtecan-nxki-approved-in-the-us-for-two-new-indications-for-patients-with-her2-positive-early-breast-cancer)
- OncLive. FDA Approves Datopotamab Deruxtecan for Unresectable or Metastatic TNBC. 2026. [News](https://www.onclive.com/view/fda-approves-datopotamab-deruxtecan-for-unresectable-or-metastatic-tnbc)
- OncLive. FDA Approves Sacituzumab Govitecan Monotherapy and in Combination With Pembrolizumab in Frontline TNBC. 2026. [News](https://www.onclive.com/view/fda-approves-sacituzumab-govitecan-monotherapy-and-in-combination-with-pembrolizumab-in-frontline-tnbc)
- OncLive. European Commission Approves Sacituzumab Govitecan Plus Pembrolizumab for Frontline PD-L1+ mTNBC. 2026. [News](https://onclive.com/view/european-commission-approves-sacituzumab-govitecan-plus-pembrolizumab-for-frontline-pd-l1-mtnbc)
- Merck. Ifinatamab Deruxtecan Granted Priority Review in the U.S. for Previously Treated Extensive-Stage Small Cell Lung Cancer. 2026. [Press release](https://www.merck.com/news/ifinatamab-deruxtecan-granted-priority-review-in-the-u-s-for-adult-patients-with-previously-treated-extensive-stage-small-cell-lung-cancer-who-experienced-disease-progression-on-or-after-platinum-bas/)
- Daiichi Sankyo. Ifinatamab Deruxtecan Biologics License Application for Certain Patients with Previously Treated Extensive-Stage Small Cell Lung Cancer Voluntarily Withdrawn. 2026. [Press release](https://daiichisankyo.us/press-releases/-/article/ifinatamab-deruxtecan-biologics-license-application-for-certain-patients-with-previously-treated-extensive-stage-small-cell-lung-cancer-voluntarily-withdrawn)
- OncLive. BLA Is Withdrawn for Patritumab Deruxtecan in EGFR-Mutated NSCLC. 2025. [News](https://www.onclive.com/view/bla-is-withdrawn-for-patritumab-deruxtecan-in-egfr-mutated-nsclc)
- OncLive. FDA Grants Breakthrough Therapy Designation to R-DXd in CDH6-Expressing Ovarian Cancer. 2025. [News](https://www.onclive.com/view/fda-grants-breakthrough-therapy-designation-to-r-dxd-in-cdh6-expressing-ovarian-cancer)
- OncLive. Sac-TMT Improves PFS and OS, Is Under FDA Priority Review in Previously Treated Endometrial Cancer. 2026. [News](https://www.onclive.com/view/sac-tmt-improves-pfs-and-os-is-under-fda-priority-review-in-previously-treated-endometrial-cancer)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
