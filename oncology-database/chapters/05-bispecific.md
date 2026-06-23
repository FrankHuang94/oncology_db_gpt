# 第05章：双特异性抗体

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2025.Q2 · 证据截止：2025-06-30。

## 学习目标

- 理解双特异性抗体的设计原理的核心概念、证据边界与临床转化逻辑。
- 理解T细胞衔接器的核心概念、证据边界与临床转化逻辑。
- 理解NK与髓系细胞衔接器的核心概念、证据边界与临床转化逻辑。
- 理解双通路阻断型双抗的核心概念、证据边界与临床转化逻辑。
- 理解已批准双特异性抗体的核心概念、证据边界与临床转化逻辑。

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
| Mosunetuzumab | CD20×CD3 / IgG-like | 2022 | 多线FL | GO29781 | ORR约80%、CR约60% | CRS、感染 |
| Teclistamab | BCMA×CD3 / IgG-like | 2022 | 多线MM | MajesTEC-1 | ORR约63% | CRS、感染、低Ig |
| Epcoritamab | CD20×CD3 / DuoBody | 2023 | DLBCL、FL | EPCORE NHL-1 | DLBCL ORR约61% | CRS、感染、ICANS |
| Glofitamab | CD20×CD3 / 2:1 | 2023 | DLBCL | NP30179 | ORR约56%、CR约43% | CRS、感染、神经毒性 |
| Talquetamab | GPRC5D×CD3 / IgG-like | 2023 | 多线MM | MonumenTAL-1 | ORR约73% | CRS、味觉/皮肤/甲毒性 |
| Elranatamab | BCMA×CD3 / IgG-like | 2023 | 多线MM | MagnetisMM-3 | ORR约58% | CRS、感染、神经毒性 |
| Tarlatamab | DLL3×CD3 / HLE-BiTE | 2024 | 铂后ES-SCLC | DeLLphi-301 | ORR约40% | CRS、神经毒性 |
| Tebentafusp | gp100–HLA-A*02:01×CD3 / ImmTAC | 2022 | 葡萄膜黑色素瘤 | IMCgp100-202 | OS改善；影像ORR较低 | CRS、皮肤反应 |
| Linvoseltamab | BCMA×CD3 / IgG-like | 2025-07 | 多线MM | LINKER-MM1 | Q2后FDA批准，单独标注 | CRS、感染、神经毒性 |

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

Ivonescimab（AK112）把PD-1阻断与VEGF中和集中在一个四价分子中，理论上利用肿瘤高VEGF环境提高局部结合，同时改善血管和免疫抑制。中国HARMONi-2研究在PD-L1阳性晚期NSCLC中与pembrolizumab比较显示PFS优势，但截至2025.Q2其全球监管外推仍需等待完整OS、毒性和不同人群研究。它不应写作“IBI315（PD-1×HER2）”的同类：IBI315为PD-1×HER2，药理问题完全不同。

Cadonilimab为PD-1×CTLA-4四价双抗，目标是提高肿瘤共定位并降低游离CTLA-4系统暴露。PD-L1×4-1BB、HER2×4-1BB等“检查点+共刺激”双抗进一步要求共刺激只在肿瘤抗原存在时发生，以避免早期4-1BB激动抗体的肝毒性。条件性激动是否真正扩大治疗窗，必须由剂量–暴露–受体占有和随机疗效共同证明。

> **图示：双抗临床机制分布**
> 展示截至2025.Q2的代表性项目数量级，不是商业数据库实时全量统计。每类至少含已批准或临床项目。

> **临床/研究亮点：** **HARMONi-2提出了高标准问题。**Ivonescimab不是与化疗对照，而是在PD-L1阳性NSCLC中与pembrolizumab单药比较。PFS结果支持PD-1×VEGF共定位策略，但成熟OS、出血/高血压与免疫毒性以及跨地区重复验证决定其最终位置。

双通路产品加入已批准细胞衔接器后，监管清单需要按机制、地区和时间点拆分。

## 05.5 已批准双特异性抗体全览

截至2025年第二季度，肿瘤双抗已从一个持续输注BiTE扩展到CD20、BCMA、GPRC5D、DLL3、EGFR×MET、HER2双表位和HER2×HER3。下表把FDA批准与中国NMPA批准分开，并将2025年7月的linvoseltamab作为截止日后更新标记，不计入Q2批准数量。Tebentafusp是TCR–抗CD3融合蛋白而非传统IgG，但功能上属于双特异T细胞衔接器。

### 表5-4：肿瘤学已批准双特异产品

**十六个已获主要监管机构批准或截止日后更新的肿瘤双特异产品**

| 产品 | 靶点 | 格式 | 公司 | 首次批准 | 代表适应症 | 关键试验 | 状态 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Blinatumomab / Blincyto | CD19×CD3 | BiTE | Amgen | FDA 2014 | B-ALL | TOWER/E1910 | FDA |
| Amivantamab / Rybrevant | EGFR×MET | IgG-like | Janssen | FDA 2021 | EGFRm NSCLC | CHRYSALIS/MARIPOSA | FDA |
| Tebentafusp / Kimmtrak | gp100–HLA×CD3 | ImmTAC | Immunocore | FDA 2022 | 葡萄膜黑色素瘤 | IMCgp100-202 | FDA |
| Teclistamab / Tecvayli | BCMA×CD3 | IgG-like | Janssen | FDA 2022 | 多发性骨髓瘤 | MajesTEC-1 | FDA |
| Mosunetuzumab / Lunsumio | CD20×CD3 | IgG-like | Roche | FDA 2022 | 滤泡性淋巴瘤 | GO29781 | FDA |
| Epcoritamab / Epkinly | CD20×CD3 | DuoBody | Genmab/AbbVie | FDA 2023 | DLBCL、FL | EPCORE NHL-1 | FDA |
| Glofitamab / Columvi | CD20×CD3 | 2:1 IgG-like | Roche | FDA 2023 | DLBCL | NP30179 | FDA |
| Talquetamab / Talvey | GPRC5D×CD3 | IgG-like | Janssen | FDA 2023 | 多发性骨髓瘤 | MonumenTAL-1 | FDA |
| Elranatamab / Elrexfio | BCMA×CD3 | IgG-like | Pfizer | FDA 2023 | 多发性骨髓瘤 | MagnetisMM-3 | FDA |
| Tarlatamab / Imdelltra | DLL3×CD3 | HLE-BiTE | Amgen | FDA 2024 | ES-SCLC | DeLLphi-301 | FDA |
| Zanidatamab / Ziihera | HER2双表位 | Biparatopic IgG | Jazz/Zymeworks | FDA 2024 | HER2+胆道癌 | HERIZON-BTC-01 | FDA |
| Zenocutuzumab / Bizengri | HER2×HER3 | Biclonics | Merus | FDA 2024 | NRG1融合肺/胰腺癌 | eNRGy | FDA |
| Cadonilimab / 开坦尼 | PD-1×CTLA-4 | 四价IgG-scFv | Akeso | NMPA 2022 | 宫颈癌 | COMPASSION-13等 | NMPA |
| Ivonescimab / 依达方 | PD-1×VEGF | 四价Tetrabody | Akeso/Summit | NMPA 2024 | EGFR-TKI后NSCLC | HARMONi-A | NMPA |
| Catumaxomab / Removab | EpCAM×CD3+FcγR | 三功能杂交IgG | 历史Fresenius/Neovii | EMA 2009 | EpCAM+癌恶性腹水 | 注册随机研究 | 欧盟商业撤回 |
| Linvoseltamab / Lynozyfic | BCMA×CD3 | IgG-like | Regeneron | FDA 2025-07 | 多发性骨髓瘤 | LINKER-MM1 | Q2后更新 |

批准产品集中于血液瘤，实体瘤双抗还要克服渗透、抗原异质和系统毒性。

## 05.6 双抗毒性与开发挑战

CD3双抗最具代表性的急性毒性是CRS。首次给药时外周T细胞与大量靶细胞突然交联，IL-6、IFN-γ等上升；递增给药（step-up dosing）先用较低剂量激活和再分布免疫细胞，再达到治疗剂量，可降低峰值。住院观察、预处理和tocilizumab可及性由产品标签规定。皮下注射降低吸收峰值但不消除CRS，长半衰期也意味着停药后分子不会立刻清除。

ICANS在不同双抗中的频率通常低于部分CAR-T，但失语、意识改变、癫痫等需要使用ASTCT/产品框架评估。BCMA和CD20持续靶向会造成正常B/浆细胞减少、低免疫球蛋白和严重感染；机会性感染风险随既往治疗、淋巴细胞减少和持续疗程累积。预防包括疫苗、抗病毒/肺孢子菌策略、免疫球蛋白替代和剂量间隔个体化，须按当地指南。

实体瘤中，分子扩散、间质压力和抗原空间异质限制有效突触。CD3臂过强会在肿瘤外激活，肿瘤臂过弱则无法在低抗原区域停留。2:1价态、掩蔽前药、蛋白酶激活和肿瘤内给药试图提高局部治疗指数。另一难题是肿瘤T细胞数量和质量不足：把衔接器送到“免疫荒漠”并不能凭空产生可用T细胞。

### 表5-5：实体瘤双抗临床管线

**十条实体瘤双抗代表管线及开发问题**

| 项目 | 靶点 | 公司 | 癌种 | 阶段（2025.Q2） | 核心问题 |
| --- | --- | --- | --- | --- | --- |
| Ivonescimab | PD-1×VEGF | Akeso/Summit | NSCLC | III期/地区获批 | OS与全球重复验证 |
| Amivantamab | EGFR×MET | Janssen | NSCLC | 已批准 | 输注反应、皮肤/静脉血栓 |
| Zenocutuzumab | HER2×HER3 | Merus | NRG1融合肿瘤 | 已批准 | 罕见融合筛查 |
| Zanidatamab | HER2×HER2 | Jazz/Zymeworks | 胆道/胃/乳腺癌 | 获批+III期 | HER2异质性与组合 |
| Tarlatamab | DLL3×CD3 | Amgen | SCLC | 加速批准 | CRS、神经毒性和早线验证 |
| BI 764532 | DLL3×CD3 | Boehringer Ingelheim | SCLC/神经内分泌癌 | II期 | 同靶点差异化 |
| Glofitamab衍生实体瘤策略 | 肿瘤抗原×CD3 | 多公司 | 多实体瘤 | 早期 | 外周靶表达 |
| IBI315 | PD-1×HER2 | Innovent | HER2表达实体瘤 | I期 | 共定位与HER2阈值 |
| Acasunlimab | PD-L1×4-1BB | Genmab/BioNTech | NSCLC | II期 | 条件性共刺激与肝毒性 |
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

## 主要参考来源

- U.S. FDA. Bispecific Antibody Development Programs: Guidance for Industry. 2021. [FDA](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/bispecific-antibody-development-programs-guidance-industry)
- Kantarjian H, et al. Blinatumomab versus Chemotherapy for Advanced Acute Lymphoblastic Leukemia. NEJM. 2017;376:836–847. [DOI](https://doi.org/10.1056/NEJMoa1609783)
- Moreau P, et al. Teclistamab in Relapsed or Refractory Multiple Myeloma. NEJM. 2022;387:495–505. [DOI](https://doi.org/10.1056/NEJMoa2203478)
- Kroemer G, et al. T-cell-engaging bispecific antibodies in cancer therapy. Nature Reviews Clinical Oncology. 2024. [Nature](https://www.nature.com/subjects/bispecific-antibodies)
- U.S. FDA. Oncology Approval Notifications: Tarlatamab, Zanidatamab and Zenocutuzumab. 2024. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications)
- Middleton MR, et al. Tebentafusp in Metastatic Uveal Melanoma. NEJM. 2021;385:1196–1206. [DOI](https://doi.org/10.1056/NEJMoa2103485)


---

内容版本：2025.Q2。下次更新建议：2025.Q4，重点复核 FDA 标签、临床阶段和公司交易状态。
