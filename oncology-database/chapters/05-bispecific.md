# 第05章：双特异性抗体

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解双特异性抗体的设计原理的核心概念、证据边界与临床转化逻辑。
- 理解T细胞衔接器的核心概念、证据边界与临床转化逻辑。
- 理解NK与髓系细胞衔接器的核心概念、证据边界与临床转化逻辑。
- 理解双通路阻断型双抗的核心概念、证据边界与临床转化逻辑。
- 理解已批准双特异性抗体的核心概念、证据边界与临床转化逻辑。
- 掌握2025下半年—2026年双抗从加速批准走向随机确证、皮下化和实体瘤扩展的关键事件。

## 章节导航

[返回总目录](../index.md) · [上一章：抗体药物偶联物（ADC）](04-adc.md) · [下一章：靶向小分子治疗](06-targeted-therapy.md)

## 05.1 双特异性抗体的设计原理

双特异性抗体（Bispecific Antibody，**bsAb**）在同一分子中结合两个不同抗原或同一抗原的两个表位。它可以把免疫效应细胞拉到肿瘤旁边，也可以同时阻断两条受体通路、把共刺激限制在肿瘤局部，或通过双表位结合提高受体聚簇和内吞。设计问题远不止“选两个靶点”：每个结合臂的价态、亲和力、表位距离、分子柔性、Fc功能和给药暴露共同决定是否形成有效而安全的免疫突触。

IgG-like格式保留Fc和接近常规抗体的体积，通常具有FcRn回收和较长半衰期。制造时必须解决重链与轻链错误配对：knobs-into-holes通过CH3互补突变促进异二聚，CrossMab交换一个Fab臂的结构域，DuoBody利用受控Fab-arm exchange，common light chain则让两个重链共用轻链。Fc可保留ADCC，也可通过LALA-PG等突变降低Fcγ受体结合，避免CD3双抗被非目标免疫细胞交联。

非IgG格式以BiTE最具代表性。它把两个scFv串联，分子小、组织扩散较快，却缺少FcRn回收，早期blinatumomab需持续静脉输注。半衰期延长BiTE加入Fc或白蛋白结合模块；DART通过链间稳定结构控制两个结合位点几何；TandAb形成四价二聚体；Nanobody多特异结构则以紧凑VHH提高模块化。小分子量可能提高渗透，也可能加快肾清除，不能把“更小”简单等同于“更适合实体瘤”。

FcRn在酸性内体中结合IgG Fc并把抗体回收到血液，是长半衰期基础。半衰期工程减少输注频率，却可能让细胞因子释放综合征（CRS）更难通过停药快速终止。相反，短半衰期BiTE可精细调节暴露，但依赖泵持续给药。临床设计需要在可控性、便利性、组织渗透和免疫突触停留时间之间取舍。

> **图示：六种主要双抗格式结构比较**
> 颜色代表不同结合特异性或结构模块，文字同时标注格式。示意不反映真实尺寸与键角。

### 表5-1：双抗结构格式比较

**八类双特异抗体结构格式的工程与药理差异**

| 格式 | Fc | 价态 | 半衰期 | 代表平台/药物 | 主要优势 | 主要限制 |
| --- | --- | --- | --- | --- | --- | --- |
| BiTE | 无 | 1+1 | 短 | Blinatumomab | 紧凑、T细胞突触成熟 | 持续输注、稳定性 |
| HLE-BiTE | 有/类Fc | 1+1 | 长 | Tarlatamab | 间歇给药 | CRS暴露不易快速撤回 |
| DART | 可选 | 1+1 | 可调 | MacroGenics平台 | 结合几何稳定 | 制造复杂 |
| DuoBody | 有 | 1+1 | 长 | Epcoritamab | 受控Fab-arm exchange | 链交换工艺控制 |
| 2:1 IgG-like | 有 | 2+1 | 长 | Glofitamab | 提高肿瘤抗原亲合力 | 免疫突触和CRS需平衡 |
| CrossMab | 有 | 多种 | 长 | Roche平台 | 解决轻链错配 | 结构/分析复杂 |
| DVD-Ig | 有 | 2+2 | 长 | AbbVie平台 | 四价双通路 | 外层结构域遮挡 |
| TandAb/VHH多抗 | 无或可选 | 2+2及以上 | 中等/可调 | AFM/多VHH平台 | 高亲合力、模块紧凑 | 聚集和PK优化 |

格式工程解决“如何同时结合”，T细胞衔接器进一步回答“如何把结合转化为杀伤”。

## 05.2 T细胞衔接器：绕过TCR特异性的免疫突触

T细胞衔接器一端结合CD3ε，另一端结合肿瘤表面抗原，把多克隆T细胞拉到靶细胞旁。近距离交联可在不依赖特定肽–MHC的情况下形成细胞毒突触，引发穿孔素/颗粒酶释放和靶细胞裂解。它并非完全“不需要共刺激”：初始激活阈值、T细胞状态、抗原密度和抑制性微环境仍决定反应。CD3臂亲和力过高可能造成外周T细胞滞留和系统细胞因子释放，肿瘤臂亲合力与价态则影响低抗原细胞覆盖。

Blinatumomab（CD19×CD3）是BiTE范式，分子量小、半衰期短，通常持续静脉输注。它在B细胞前体ALL中可清除微小残留病并改善部分患者生存，但神经毒性、CRS、感染和CD19阴性复发要求规范监测。血液瘤中的高可及抗原和循环/骨髓空间有利于突触形成，也解释了双抗在实体瘤复制成功更困难。

BCMA×CD3药物teclistamab和elranatamab用于多线复发/难治多发性骨髓瘤，GPRC5D×CD3 talquetamab提供与BCMA不同的靶点。BCMA表达于浆细胞谱系，持续治疗可导致低免疫球蛋白、感染和抗原逃逸；GPRC5D在角化组织表达相关味觉、皮肤和指甲毒性。固定疗程、持续疗程与序贯CAR-T的最优顺序仍在研究。

CD20×CD3药物mosunetuzumab、epcoritamab和glofitamab在B细胞淋巴瘤中使用不同格式、给药途径和预处理。Glofitamab采用2:1 CD20:CD3结构，并以obinutuzumab预处理降低外周B细胞负荷；epcoritamab皮下注射；mosunetuzumab采用固定疗程。结构差异必须与具体试验解释，不能把同靶点药物视为可自由替换。

### 表5-2：已批准双特异性T细胞衔接器

**十个FDA批准T细胞衔接器的格式、适应症和代表数据**

| 药物 | 靶点/格式 | 首次FDA批准 | 代表适应症 | 关键试验 | 代表结果 | 主要风险 |
| --- | --- | --- | --- | --- | --- | --- |
| Blinatumomab | CD19×CD3 / BiTE | 2014 | B细胞前体ALL | TOWER/E1910 | 复发ALL中OS改善 | CRS、神经毒性 |
| Mosunetuzumab | CD20×CD3 / IgG-like | 2022 | 多线FL（静脉；皮下VELO 2025-12） | GO29781 | ORR约80%、CR约60% | CRS、感染 |
| Teclistamab | BCMA×CD3 / IgG-like | 2022 | 多线MM；≥1线后联合达雷妥尤单抗SC（2026-03） | MajesTEC-1/MajesTEC-3 | ORR约63%；MajesTEC-3 PFS HR 0.17 | CRS、感染、低Ig |
| Epcoritamab | CD20×CD3 / DuoBody | 2023 | DLBCL、FL（含二线联合R2，2025-11） | EPCORE NHL-1/EPCORE FL-1 | DLBCL ORR约61%；FL-1 PFS HR 0.21 | CRS、感染、ICANS |
| Glofitamab | CD20×CD3 / 2:1 | 2023 | DLBCL | NP30179 | ORR约56%、CR约43% | CRS、感染、神经毒性 |
| Talquetamab | GPRC5D×CD3 / IgG-like | 2023 | 多线MM | MonumenTAL-1 | ORR约73% | CRS、味觉/皮肤/甲毒性 |
| Elranatamab | BCMA×CD3 / IgG-like | 2023 | 多线MM | MagnetisMM-3 | ORR约58% | CRS、感染、神经毒性 |
| Tarlatamab | DLL3×CD3 / HLE-BiTE | 2024 | 铂后ES-SCLC（2025-11转常规批准） | DeLLphi-301/304 | ORR约40%；304中mOS 13.6 vs 8.3月 | CRS、神经毒性 |
| Tebentafusp | gp100–HLA-A*02:01×CD3 / ImmTAC | 2022 | 葡萄膜黑色素瘤 | IMCgp100-202 | OS改善；影像ORR较低 | CRS、皮肤反应 |
| Linvoseltamab | BCMA×CD3 / IgG-like | 2025-07 | ≥4线MM（加速批准） | LINKER-MM1 | ORR约70% | CRS、感染、神经毒性 |

> **临床/研究亮点：** **Tebentafusp证明“双特异性”不只等于抗体。**它以高亲和可溶性TCR识别gp100肽–HLA-A*02:01，再用抗CD3招募T细胞；在转移性葡萄膜黑色素瘤中改善OS，但仅适用于特定HLA人群，而且影像ORR不能完全捕捉生存获益。

CD3并非唯一可募集效应端，NK和髓系衔接器试图降低T细胞相关CRS并利用先天免疫。

## 05.3 NK细胞与髓系细胞衔接器

NK细胞衔接器通常同时结合肿瘤抗原和CD16A、NKp46或其他NK激活受体。CD16A介导抗体依赖性细胞毒，工程化双抗/多抗可提高选择性突触并避免CD16B“诱饵”；NKp46为更具NK限制性的激活受体。Innate Pharma与Sanofi等开发NKp46×肿瘤抗原×CD16多特异结构，Affimed的ICE平台采用CD16A×肿瘤抗原。NK不依赖克隆性TCR，理论上较少引发GVHD，但仍受肿瘤TGF-β、腺苷和代谢抑制。

NKG2A是NK和部分T细胞的抑制受体，monalizumab阻断HLA-E–NKG2A轴，属于检查点抗体而非典型细胞衔接器。髓系衔接思路则利用CD47–SIRPα“不要吃我”信号、Fcγ受体或吞噬检查点，促进巨噬细胞吞噬和抗原呈递。CD47广泛表达于红细胞，首剂贫血和抗原汇效应限制治疗窗；肿瘤条件性或双特异设计试图让阻断集中在靶细胞表面。

> **使用边界：** **Tafasitamab不是CD19×CD3双抗。**它是Fc工程增强的单特异性抗CD19抗体，通过提高Fcγ受体结合增强ADCC/ADCP。它可用于讨论先天效应功能工程，但不应收入双特异抗体产品表。

### 表5-3：主要双抗/多抗平台技术比较

**十个主要双特异或多特异抗体平台**

| 公司 | 平台 | 核心工程 | 代表产品 | 主要用途 | 关键权衡 |
| --- | --- | --- | --- | --- | --- |
| Amgen | BiTE/HLE-BiTE | 串联scFv±Fc | Blinatumomab/Tarlatamab | CD3衔接 | 暴露与CRS |
| Genmab | DuoBody | 受控Fab-arm exchange | Epcoritamab | IgG-like双抗 | 链交换与分析 |
| Roche | CrossMab/2:1 | 结构域交换、非对称价态 | Glofitamab | CD20衔接/双通路 | 几何和Fc调节 |
| Merus | Biclonics | 全长IgG双抗 | Zenocutuzumab | 受体双阻断 | 表位与受体依赖 |
| Zymeworks | Azymetric | Fc异二聚/双表位 | Zanidatamab | HER2双表位 | 受体聚簇与毒性 |
| MacroGenics | DART | 稳定双链构型 | 多个临床项目 | CD3/免疫双抗 | 项目成败差异 |
| Akeso | Tetrabody | 四价IgG-scFv | Ivonescimab/Cadonilimab | 双通路阻断 | 复杂PK与靶点共定位 |
| Affimed | ICE | CD16A双/多特异 | Acimtamig | NK衔接 | NK数量和持续性 |
| Innate/Sanofi | ANKET | NKp46×CD16×肿瘤抗原 | SAR443579等 | NK多特异 | 先天免疫抑制 |
| WuXiBody等 | 多种异二聚 | 通用抗体工程 | 多合作项目 | 灵活格式 | 每个分子仍需独立验证 |

除细胞衔接外，双抗还可在同一分子中阻断两条肿瘤或免疫通路，借共定位提高治疗窗。

## 05.4 双通路阻断型双抗

双通路双抗的价值主张是让两个作用在空间上或药代上绑定。Amivantamab同时结合EGFR与MET，阻断信号、促进受体内化并保留Fc效应；zenocutuzumab结合HER2与HER3，阻止NRG1融合驱动的HER2–HER3二聚；zanidatamab识别HER2两个非重叠表位，增强聚簇、内吞和效应功能。它们不是CD3衔接器，CRS仍可能发生但机制和强度不同。

Ivonescimab（AK112）把PD-1阻断与VEGF中和集中在一个四价分子中，理论上利用肿瘤高VEGF环境提高局部结合，同时改善血管和免疫抑制。中国HARMONi-2研究在PD-L1阳性晚期NSCLC中与pembrolizumab比较显示PFS优势。截至2026.Q4，证据呈现“中国研究OS阳性、全球研究OS未达显著”的分化：中国HARMONi-A最终OS HR 0.74（p=0.019，SITC 2025），HARMONi-6在鳞状NSCLC中对比替雷利珠单抗+化疗的OS HR 0.66（ASCO 2026），HARMONi-2对比帕博利珠单抗单药的OS HR 0.73（P=0.009，WCLC 2026）；而多区域HARMONi研究PFS达标、OS HR 0.79未达统计学显著（P=0.0570）。Summit基于HARMONi提交的BLA（EGFR突变NSCLC经TKI治疗后联合铂类化疗）PDUFA日期为2026-11-14，晚于本库证据截止日。它不应写作“IBI315（PD-1×HER2）”的同类：IBI315为PD-1×HER2，药理问题完全不同。

Ivonescimab带动了PD-(L)1×VEGF双抗的授权与开发浪潮：Merck于2024年第四季度以5.88亿美元首付款（另含最高27亿美元里程碑）获得LaNova的LM-299全球权益；Pfizer于2025年5月以12.5亿美元首付款（最高48亿美元里程碑，另有1亿美元股权投资）获得三生制药SSGJ-707中国以外权益；BMS于2025-06-02与BioNTech就PD-L1×VEGF-A双抗BNT327（pumitamig）达成共同开发协议，包括15亿美元首付款、20亿美元非或有周年付款和最高76亿美元里程碑（总额最高约111亿美元），其III期ROSETTA Lung-01正在一线ES-SCLC中对比阿替利珠单抗+化疗。这些分子的共同考验是能否在全球多区域随机研究中对标准PD-1方案证明OS获益，而不仅是PFS；全球HARMONi-3（对比帕博利珠单抗+化疗）鳞癌队列的预设中期PFS分析未达成功界值，最终PFS分析计划于2026年下半年进行；针对PD-L1 TPS≥50%人群对比帕博利珠单抗的全球HARMONi-7（NCT06767514）仍在入组。

Cadonilimab为PD-1×CTLA-4四价双抗，目标是提高肿瘤共定位并降低游离CTLA-4系统暴露。PD-L1×4-1BB、HER2×4-1BB等“检查点+共刺激”双抗进一步要求共刺激只在肿瘤抗原存在时发生，以避免早期4-1BB激动抗体的肝毒性。Genmab已于2025-12-29宣布停止PD-L1×4-1BB双抗acasunlimab的开发（此前处于联合帕博利珠单抗的NSCLC III期）。条件性激动是否真正扩大治疗窗，必须由剂量–暴露–受体占有和随机疗效共同证明。

> **图示：双抗临床机制分布**
> 展示截至2026.Q4的代表性项目数量级，不是商业数据库实时全量统计。每类至少含已批准或临床项目。

> **临床/研究亮点：** **HARMONi-2提出了高标准问题。**Ivonescimab不是与化疗对照，而是在PD-L1阳性NSCLC中与pembrolizumab单药比较。PFS结果支持PD-1×VEGF共定位策略，但成熟OS、出血/高血压与免疫毒性以及跨地区重复验证决定其最终位置；2025–2026年中国研究陆续报告OS获益而全球HARMONi的OS未达显著，正是这一问题的现实版本。

双通路产品加入已批准细胞衔接器后，监管清单需要按机制、地区和时间点拆分。

## 05.5 已批准双特异性抗体全览

截至2026年第四季度（证据截止2026-11-12），肿瘤双抗已从一个持续输注BiTE扩展到CD20、BCMA、GPRC5D、DLL3、EGFR×MET、HER2双表位和HER2×HER3，并出现皮下制剂（Rybrevant Faspro、Lunsumio VELO）和基于随机III期的加速→常规批准转换（tarlatamab、epcoritamab FL、teclistamab）。下表把FDA批准与中国NMPA批准分开；2025年7月获批的linvoseltamab已并入正式清单。Tebentafusp是TCR–抗CD3融合蛋白而非传统IgG，但功能上属于双特异T细胞衔接器。

### 表5-4：肿瘤学已批准双特异产品

**十六个已获主要监管机构批准的肿瘤双特异产品（截至2026.Q4）**

| 产品 | 靶点 | 格式 | 公司 | 首次批准 | 代表适应症 | 关键试验 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Blinatumomab / Blincyto | CD19×CD3 | BiTE | Amgen | FDA 2014 | B-ALL | TOWER/E1910 | FDA |
| Amivantamab / Rybrevant | EGFR×MET | IgG-like | Janssen | FDA 2021 | EGFRm NSCLC；铂类及抗PD-(L)1后HNSCC（皮下，2026-11加速） | CHRYSALIS/MARIPOSA/PALOMA-3/OrigAMI-4 | FDA（皮下Faspro 2025-12） |
| Tebentafusp / Kimmtrak | gp100–HLA×CD3 | ImmTAC | Immunocore | FDA 2022 | 葡萄膜黑色素瘤 | IMCgp100-202 | FDA |
| Teclistamab / Tecvayli | BCMA×CD3 | IgG-like | Janssen | FDA 2022 | 多发性骨髓瘤（含≥1线后联合达雷妥尤单抗） | MajesTEC-1/MajesTEC-3 | FDA（2026-03转常规） |
| Mosunetuzumab / Lunsumio | CD20×CD3 | IgG-like | Roche | FDA 2022 | 滤泡性淋巴瘤 | GO29781 | FDA（皮下VELO 2025-12，加速） |
| Epcoritamab / Epkinly | CD20×CD3 | DuoBody | Genmab/AbbVie | FDA 2023 | DLBCL、FL（含二线联合R2） | EPCORE NHL-1/EPCORE FL-1 | FDA（FL单药2025-11转常规） |
| Glofitamab / Columvi | CD20×CD3 | 2:1 IgG-like | Roche | FDA 2023 | DLBCL | NP30179/STARGLO | FDA（联合GemOx申请2025-07获CRL） |
| Talquetamab / Talvey | GPRC5D×CD3 | IgG-like | Janssen | FDA 2023 | 多发性骨髓瘤 | MonumenTAL-1 | FDA |
| Elranatamab / Elrexfio | BCMA×CD3 | IgG-like | Pfizer | FDA 2023 | 多发性骨髓瘤 | MagnetisMM-3 | FDA |
| Tarlatamab / Imdelltra | DLL3×CD3 | HLE-BiTE | Amgen | FDA 2024 | ES-SCLC | DeLLphi-301/304 | FDA（2025-11转常规） |
| Zanidatamab / Ziihera | HER2双表位 | Biparatopic IgG | Jazz/Zymeworks | FDA 2024 | HER2+胆道癌；HER2+胃食管腺癌一线（2026-08） | HERIZON-BTC-01/HERIZON-GEA-01 | FDA |
| Zenocutuzumab / Bizengri | HER2×HER3 | Biclonics | Merus（美国商业化：Partner Therapeutics） | FDA 2024 | NRG1融合肺/胰腺癌；NRG1融合胆管癌（2026-05） | eNRGy | FDA |
| Cadonilimab / 开坦尼 | PD-1×CTLA-4 | 四价IgG-scFv | Akeso | NMPA 2022 | 宫颈癌 | COMPASSION-13等 | NMPA |
| Ivonescimab / 依达方 | PD-1×VEGF | 四价Tetrabody | Akeso/Summit | NMPA 2024 | EGFR-TKI后NSCLC；PD-L1阳性NSCLC一线单药（NMPA 2025-04） | HARMONi-A/HARMONi-2/HARMONi | NMPA；FDA BLA审评中（PDUFA 2026-11-14） |
| Catumaxomab / Removab | EpCAM×CD3+FcγR | 三功能杂交IgG | 历史Fresenius/Neovii | EMA 2009 | EpCAM+癌恶性腹水 | 注册随机研究 | 欧盟商业撤回 |
| Linvoseltamab / Lynozyfic | BCMA×CD3 | IgG-like | Regeneron | FDA 2025-07 | 多发性骨髓瘤（≥4线） | LINKER-MM1 | FDA（加速批准） |

批准产品集中于血液瘤，实体瘤双抗还要克服渗透、抗原异质和系统毒性。

## 05.6 双抗毒性与开发挑战

CD3双抗最具代表性的急性毒性是CRS。首次给药时外周T细胞与大量靶细胞突然交联，IL-6、IFN-γ等上升；递增给药（step-up dosing）先用较低剂量激活和再分布免疫细胞，再达到治疗剂量，可降低峰值。住院观察、预处理和tocilizumab可及性由产品标签规定。皮下注射降低吸收峰值但不消除CRS，长半衰期也意味着停药后分子不会立刻清除。

ICANS在不同双抗中的频率通常低于部分CAR-T，但失语、意识改变、癫痫等需要使用ASTCT/产品框架评估。BCMA和CD20持续靶向会造成正常B/浆细胞减少、低免疫球蛋白和严重感染；机会性感染风险随既往治疗、淋巴细胞减少和持续疗程累积。预防包括疫苗、抗病毒/肺孢子菌策略、免疫球蛋白替代和剂量间隔个体化，须按当地指南。

实体瘤中，分子扩散、间质压力和抗原空间异质限制有效突触。CD3臂过强会在肿瘤外激活，肿瘤臂过弱则无法在低抗原区域停留。2:1价态、掩蔽前药、蛋白酶激活和肿瘤内给药试图提高局部治疗指数。另一难题是肿瘤T细胞数量和质量不足：把衔接器送到“免疫荒漠”并不能凭空产生可用T细胞。

### 表5-5：实体瘤双抗临床管线

**十一条实体瘤双抗代表管线及开发问题**

| 项目 | 靶点 | 公司 | 癌种 | 阶段（截至2026.Q4） | 核心问题 |
| --- | --- | --- | --- | --- | --- |
| Ivonescimab | PD-1×VEGF | Akeso/Summit | NSCLC | NMPA获批；FDA BLA审评中（PDUFA 2026-11-14） | 全球HARMONi OS未达显著；HARMONi-3待最终分析 |
| Amivantamab | EGFR×MET | Janssen | NSCLC/HNSCC | 已批准（皮下制剂；HNSCC 2026-11加速批准） | 输注反应、皮肤/静脉血栓 |
| Zenocutuzumab | HER2×HER3 | Merus/Partner Therapeutics | NRG1融合肿瘤 | 已批准（2026-05扩展至胆管癌） | 罕见融合筛查 |
| Zanidatamab | HER2×HER2 | Jazz/Zymeworks | 胆道/胃/乳腺癌 | 胆道癌加速批准；胃食管腺癌一线2026-08获批；乳腺癌III期 | HER2异质性与组合 |
| Tarlatamab | DLL3×CD3 | Amgen | SCLC | 常规批准（2025-11）；早线III期 | CRS、神经毒性和早线验证 |
| BI 764532 | DLL3×CD3 | Boehringer Ingelheim | SCLC/神经内分泌癌 | II期 | 同靶点差异化 |
| Glofitamab衍生实体瘤策略 | 肿瘤抗原×CD3 | 多公司 | 多实体瘤 | 早期 | 外周靶表达 |
| IBI315 | PD-1×HER2 | Innovent | HER2表达实体瘤 | I期 | 共定位与HER2阈值 |
| Acasunlimab | PD-L1×4-1BB | Genmab/BioNTech | NSCLC | 已停止开发（2025-12-29） | 条件性共刺激与肝毒性 |
| Petosemtamab | EGFR×LGR5 | Genmab（原Merus） | HNSCC/CRC | III期（LiGeR-HN1中期分析达OS与ORR主要终点，2026-10） | 注册路径与联合毒性 |
| Tebotelimab类 | PD-1×LAG-3 | 多公司 | 实体瘤 | 早期/调整 | 相对固定组合优势 |

> **图示：代表性实体瘤双抗临床阶段分布**
> 按机制展示代表项目阶段数量级，颜色之外同时由图例和阶段文字区分。

### 表5-6：双抗与单抗毒性谱比较

**八类毒性在CD3双抗、双通路双抗和普通单抗中的相对特征**

| 毒性 | CD3衔接双抗 | 双通路双抗 | 普通肿瘤单抗 | 监测/缓解 |
| --- | --- | --- | --- | --- |
| CRS | 常见，早周期集中 | 依靶点，通常较低 | 较少 | step-up、观察、Tocilizumab |
| ICANS | 可见，频率依产品 | 较少 | 罕见 | 神经评估、激素 |
| 感染 | 显著，持续靶向时累积 | 组合相关 | 依靶点 | 预防、Ig替代、剂量间隔 |
| 低免疫球蛋白 | BCMA/CD20路径突出 | 通常不突出 | B细胞单抗可见 | IgG监测与替代 |
| 靶器官毒性 | 由肿瘤抗原正常表达决定 | 两靶点叠加 | 单靶点 | 表达图谱和剂量管理 |
| 输注反应 | 可与CRS重叠 | 可见 | 常见于部分单抗 | 鉴别时间和症状 |
| 血细胞减少 | 既往治疗/炎症/骨髓病 | 组合相关 | 较少或靶点特异 | CBC、感染防治 |
| 免疫相关毒性 | CD3效应为主 | 含PD-1/CTLA-4时突出 | ICI单抗突出 | 器官特异irAE指南 |

## 05.7 2025下半年—2026年关键进展（截至2026-11-12）

2025年7月至2026年11月，双抗领域的主线从“加速批准新分子”转为“随机确证、皮下化和实体瘤扩展”。新分子方面，linvoseltamab成为第三个获FDA批准的BCMA×CD3双抗；更多决定来自已上市产品的常规批准转换、早线联合和新剂型，同时也出现了因数据外推或生产场地问题导致的完全回应函（Complete Response Letter，**CRL**）。

### 表5-7：2025下半年—2026年双抗关键事件

**二十项监管、数据与交易事件；数值来自FDA公告、公司新闻稿或专业媒体报道**

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-07-02 | Linvoseltamab（Lynozyfic）获加速批准，用于≥4线（含PI、IMiD、抗CD38）RRMM | 新分子 | LINKER-MM1 ORR约70%；黑框警告CRS与神经毒性，REMS管理 |
| 2025-07 | Glofitamab+GemOx二线DLBCL补充申请收到CRL | CRL | STARGLO虽OS获益（HR 0.59），FDA认为其数据对美国患者的适用性不足；ODAC 8:1 |
| 2025-08 | Odronextamab复发/难治FL申请再次收到CRL | CRL | 原因为第三方生产场地（Catalent Indiana）检查发现问题，非疗效或安全性 |
| 2025-09-29 | Genmab宣布以每股97美元现金收购Merus | 交易 | 获得petosemtamab（EGFR×LGR5）；2025-12-12完成要约收购（约94.2%股份已提交） |
| 2025-11-18 | Epcoritamab+来那度胺+利妥昔单抗获批复发/难治FL；≥2线后FL单药转常规批准 | 适应症扩展/转换 | EPCORE FL-1（n=488）：ORR 89% vs 74%，PFS HR 0.21 |
| 2025-11-19 | Tarlatamab转为常规批准 | 转换 | DeLLphi-304（n=509）：mOS 13.6 vs 8.3月，死亡风险降低40% |
| 2025-11（SITC） | HARMONi-A最终OS：ivonescimab+化疗 vs 化疗 HR 0.74（p=0.019） | III期数据（中国） | Ivonescimab首个III期OS阳性结果 |
| 2025-12-17 | 皮下amivantamab（Rybrevant Faspro）获批，覆盖静脉制剂全部适应症 | 新剂型 | PALOMA-3达PK共同主要终点；给药相关反应13% vs 静脉66% |
| 2025-12 | 皮下mosunetuzumab（Lunsumio VELO）获加速批准，≥2线后FL | 新剂型 | ORR 75%、CR 59%；Roche于2025-12-22公告 |
| 2025-12-29 | Genmab停止acasunlimab（PD-L1×4-1BB）开发 | 管线终止 | 资源集中于epcoritamab、petosemtamab与Rina-S |
| 2026-01 | Summit宣布提交、FDA随后受理ivonescimab BLA（PDUFA 2026-11-14） | 监管 | 依据多区域HARMONi：PFS达标，OS HR 0.79未达显著 |
| 2026-02-17 | Rybrevant Faspro获批每月一次给药方案（联合lazertinib一线EGFRm NSCLC） | 给药方案更新 | PALOMA-2数据 |
| 2026-03-05 | Teclistamab+达雷妥尤单抗SC获批≥1线后RRMM；单药转常规批准 | 适应症扩展/转换 | MajesTEC-3：PFS HR 0.17，36个月OS 83.3% vs 65.0% |
| 2026-05-08 | Zenocutuzumab获批既往系统治疗后进展的NRG1融合胆管癌 | 适应症扩展 | 单臂n=19，ORR 36.8%；CNPV试点，较目标日期提前逾5个月；美国商业化方Partner Therapeutics |
| 2026年中 | HARMONi-6（中国，鳞状NSCLC）OS HR 0.66（ASCO 2026）；全球HARMONi-3鳞癌队列中期PFS未达成功界值 | III期数据 | 区域研究与全球研究结论继续分化 |
| 2026-07 | MonumenTAL-6：teclistamab+talquetamab对比研究者选择标准方案，早线RRMM显著改善PFS与OS | III期顶线 | 公司公告称PFS风险降低89%、死亡风险降低62%；两种T细胞衔接器联用，全文数据待公布 |
| 2026-08-25 | Zanidatamab+替雷利珠单抗+化疗（IHC3+或IHC2+/ISH+）及zanidatamab+化疗（IHC3+）获批HER2+胃食管腺癌一线 | 适应症扩展 | HERIZON-GEA-01：三药组mPFS 12.4 vs 8.1月；中期OS在PFS分析时未达显著 |
| 2026-09（WCLC 2026） | HARMONi-2 OS：ivonescimab对比帕博利珠单抗单药（PD-L1阳性NSCLC一线）HR 0.73（P=0.009） | III期数据（中国） | mOS 30.8 vs 22.6月；TPS≥50%亚组HR 0.58；全球验证依赖HARMONi-7 |
| 2026-10 | LiGeR-HN1：petosemtamab+帕博利珠单抗一线PD-L1阳性R/M HNSCC达OS与ORR双主要终点 | III期顶线 | 首次中期分析即显示死亡风险降低约50%；全文数据待会议公布 |
| 2026-11-05 | 皮下amivantamab获加速批准用于铂类及抗PD-(L)1后复发/转移HNSCC（不含HPV相关口咽鳞癌） | 适应症扩展（加速） | OrigAMI-4队列1（n=102）：ORR 42%、CR 15%；确证研究OrigAMI-5 |

随机确证成为CD3双抗的新门槛。Tarlatamab凭DeLLphi-304、epcoritamab凭EPCORE FL-1、teclistamab凭MajesTEC-3相继完成加速→常规转换，其中teclistamab是首个基于随机III期生存数据转为常规批准的骨髓瘤T细胞衔接器。早线联合也暴露新的安全问题：MajesTEC-3联合组7.1%患者死于不良事件（主要为血细胞减少和感染），感染预防、免疫球蛋白替代和剂量间隔策略必须随疗效同步前移。

数据外推与生产质量同样决定批准。Glofitamab+GemOx在STARGLO中有OS获益，但FDA认为其数据对美国患者的适用性不足而发出CRL；odronextamab则因第三方生产场地检查问题再次收到CRL。Ivonescimab面临相同的外推问题：中国HARMONi-A与HARMONi-6报告OS获益，而多区域HARMONi的OS未达显著，FDA对其BLA的决定（PDUFA 2026-11-14）将是PD-(L)1×VEGF赛道的关键监管信号，需在下次更新中复核。

实体瘤双抗明显提速。Zanidatamab联合替雷利珠单抗和化疗进入HER2阳性胃食管腺癌一线；皮下amivantamab以单臂ORR获批铂类和抗PD-(L)1后HNSCC；Genmab收购Merus后，petosemtamab（EGFR×LGR5）联合帕博利珠单抗在LiGeR-HN1首次中期分析即达到OS和ORR双主要终点。HNSCC由此成为EGFR靶向双抗的竞争焦点，后续需关注一线随机数据与皮肤、输注毒性管理。

给药形式方面，Rybrevant Faspro与Lunsumio VELO把输注数小时缩短至数分钟，皮下amivantamab的给药相关反应约13%，显著低于静脉制剂历史上的66%。皮下化并不消除CRS或EGFR相关皮肤毒性，但降低了首剂输注反应和椅旁资源负担，使双抗更适合门诊和社区使用。

> **临床/研究亮点：** **MajesTEC-3让T细胞衔接器“前移”有了随机生存证据。**Teclistamab联合皮下达雷妥尤单抗在1–3线后复发/难治多发性骨髓瘤中把PFS风险降低约83%（HR 0.17），36个月OS 83.3% vs 65.0%，并带动单药加速批准转为常规批准；但联合组感染与血细胞减少相关死亡提示，早线使用必须配套系统性感染防控。

## 主要参考来源

- U.S. FDA. Bispecific Antibody Development Programs: Guidance for Industry. 2021. [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bispecific-antibody-development-programs-guidance-industry)
- Kantarjian H, et al. Blinatumomab versus Chemotherapy for Advanced Acute Lymphoblastic Leukemia. NEJM. 2017;376:836–847. [DOI](https://doi.org/10.1056/NEJMoa1609783)
- Moreau P, et al. Teclistamab in Relapsed or Refractory Multiple Myeloma. NEJM. 2022;387:495–505. [DOI](https://doi.org/10.1056/NEJMoa2203478)
- Kroemer G, et al. T-cell-engaging bispecific antibodies in cancer therapy. Nature Reviews Clinical Oncology. 2024. [Nature](https://www.nature.com/subjects/bispecific-antibodies)
- U.S. FDA. Oncology Approval Notifications: Tarlatamab, Zanidatamab and Zenocutuzumab. 2024. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications)
- Middleton MR, et al. Tebentafusp in Metastatic Uveal Melanoma. NEJM. 2021;385:1196–1206. [DOI](https://doi.org/10.1056/NEJMoa2103485)
- U.S. FDA. FDA grants accelerated approval to linvoseltamab-gcpt for relapsed or refractory multiple myeloma. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-linvoseltamab-gcpt-relapsed-or-refractory-multiple-myeloma)
- Roche. Genentech provides update on supplemental BLA for Columvi combination in R/R DLBCL. 2025. [Press release](https://www.roche.com/investors/updates/inv-update-2025-07-18)
- CancerNetwork. FDA Issues CRL to Odronextamab in Pretreated Follicular Lymphoma. 2025. [CancerNetwork](https://www.cancernetwork.com/view/fda-issues-crl-to-odronextamab-in-pretreated-follicular-lymphoma)
- CancerNetwork. FDA Approves Epcoritamab Combo in R/R Follicular Lymphoma (EPCORE FL-1). 2025. [CancerNetwork](https://www.cancernetwork.com/view/fda-approves-epcoritamab-combo-in-r-r-follicular-lymphoma)
- Amgen. FDA Grants Full Approval to Amgen's IMDELLTRA in Extensive Stage Small Cell Lung Cancer. 2025. [Press release](https://www.amgen.com/newsroom/press-releases/2025/11/fda-grants-full-approval-to-amgens-imdelltra-in-extensive-stage-small-cell-lung-cancer)
- U.S. FDA. FDA approves amivantamab and hyaluronidase-lpuj subcutaneous injection. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-amivantamab-and-hyaluronidase-lpuj-subcutaneous-injection)
- Roche. FDA approves Roche's Lunsumio VELO for subcutaneous use in relapsed or refractory follicular lymphoma. 2025. [Press release](https://www.roche.com/media/releases/med-cor-2025-12-22)
- Genmab. Genmab Announces Completion of Tender Offer for Outstanding Common Shares of Merus N.V. 2025. [Press release](https://www.businesswire.com/news/home/20251211298604/en/Genmab-Announces-Completion-of-Tender-Offer-for-Outstanding-Common-Shares-of-Merus-N.V.-and-Commencement-of-Subsequent-Offering-Period)
- Fierce Pharma. Akeso, Summit's PD-1xVEGF drug meets overall survival goal for the first time in a lung cancer trial (HARMONi-A). 2025. [Fierce](https://www.fiercepharma.com/pharma/akeso-summit-pd-1xvegf-meets-overall-survival-goal-first-time-lung-cancer-trial)
- Summit Therapeutics. Summit Therapeutics Announces Submission of Biologics License Application for ivonescimab. 2026. [Press release](https://www.businesswire.com/news/home/20260112655330/en)
- Targeted Oncology. FDA Accepts BLA for Ivonescimab in Pretreated EGFR-Mutated NSCLC. 2026. [Targeted Oncology](https://www.targetedonc.com/view/fda-accepts-bla-for-ivonescimab-in-pretreated-egfr-mutated-nsclc)
- Johnson & Johnson. FDA approves RYBREVANT FASPRO as the only EGFR-targeted therapy that can be administered once a month. 2026. [Press release](https://www.jnj.com/media-center/press-releases/fda-approves-rybrevant-faspro-amivantamab-and-hyaluronidase-lpuj-as-the-only-egfr-targeted-therapy-that-can-be-administered-once-a-month)
- ASCO Post. FDA Approves Teclistamab and Daratumumab for Relapsed or Refractory Multiple Myeloma (MajesTEC-3). 2026. [ASCO Post](https://ascopost.com/issues/march-25-2026/fda-approves-teclistamab-and-daratumumab-for-relapsed-or-refractory-multiple-myeloma/)
- Managed Healthcare Executive. Ivonescimab reduced the risk of death by 34% in squamous NSCLC (HARMONi-6, ASCO 2026). 2026. [MHE](https://www.managedhealthcareexecutive.com/view/ivonescimab-reduced-the-risk-of-death-by-34-in-squamous-nsclc-asco-2026)
- U.S. FDA. FDA approves zanidatamab-hrii and tislelizumab-jsgr for HER2-positive gastric, gastroesophageal junction or esophageal adenocarcinoma. 2026. [FDA](https://fda.gov/drugs/resources-information-approved-drugs/fda-approves-zanidatamab-hrii-and-tislelizumab-jsgr-her2-positive-gastric-gastroesophageal-junction)
- BioPharm International. Genmab's petosemtamab plus pembrolizumab cuts risk of death by 50% in phase 3 head and neck cancer trial (LiGeR-HN1). 2026. [BioPharm International](https://www.biopharminternational.com/view/genmab-s-petosemtamab-plus-pembrolizumab-cuts-risk-of-death-by-50-in-phase-3-head-and-neck-cancer-trial)
- Targeted Oncology. FDA Approves Amivantamab and Hyaluronidase for Recurrent/Metastatic HNSCC (OrigAMI-4). 2026. [Targeted Oncology](https://www.targetedonc.com/view/fda-approves-amivantamab-and-hyaluronidase-for-recurrent-metastatic-hnscc)
- Merck. Merck Enters Into Exclusive Global License for LM-299, an Investigational Anti-PD-1/VEGF Bispecific Antibody From LaNova Medicines. 2024. [Press release](https://www.merck.com/news/merck-enters-into-exclusive-global-license-for-lm-299-an-investigational-anti-pd-1-vegf-bispecific-antibody-from-lanova-medicines-ltd/)
- BioPharma Dive. Pfizer, 3SBio PD-1/VEGF cancer licensing deal (SSGJ-707). 2025. [BioPharma Dive](https://www.biopharmadive.com/news/pfizer-3sbio-pd1-vegf-cancer-licensing-deal/748559/)
- BioSpace. BMS Commits up to $11B+ To Work With BioNTech on Solid Tumor Bispecific (BNT327). 2025. [BioSpace](https://www.biospace.com/deals/bms-commits-up-to-11b-to-work-with-biontech-on-solid-tumor-bispecific)
- Genmab. Genmab Portfolio Prioritization Update (acasunlimab). 2025. [Press release](https://www.biospace.com/press-releases/genmab-portfolio-prioritization-update-december-29-2025)
- U.S. FDA. FDA approves zenocutuzumab-zbco for advanced unresectable or metastatic cholangiocarcinoma. 2026. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-zenocutuzumab-zbco-advanced-unresectable-or-metastatic-cholangiocarcinoma)
- OncLive. Teclistamab Plus Talquetamab Yields Significant Survival Benefits in Earlier-Line R/R Myeloma (MonumenTAL-6). 2026. [OncLive](https://www.onclive.com/view/teclistamab-plus-talquetamab-yields-significant-survival-benefits-in-earlier-line-r-r-myeloma)
- ASCO Post. Ivonescimab Significantly Improves Overall Survival vs Pembrolizumab in PD-L1-Positive Advanced NSCLC (HARMONi-2, WCLC 2026). 2026. [ASCO Post](https://ascopost.com/news/september-2026/ivonescimab-significantly-improves-overall-survival-vs-pembrolizumab-in-pd-l1-positive-advanced-nsclc/)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
