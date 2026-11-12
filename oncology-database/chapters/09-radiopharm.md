# 第09章：放射性药物治疗

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解放射性药物的基本原理的核心概念、证据边界与临床转化逻辑。
- 理解已批准放射性药物的核心概念、证据边界与临床转化逻辑。
- 理解PSMA靶向治疗革命的核心概念、证据边界与临床转化逻辑。
- 理解α放射性核素治疗的核心概念、证据边界与临床转化逻辑。
- 理解临床管线与公司布局的核心概念、证据边界与临床转化逻辑。
- 理解2025下半年—2026年PSMA治疗前移、177Lu-DOTATATE等效产品、CMC相关CRL与核药并购整合的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：基因治疗与细胞治疗](08-gene-therapy.md) · [下一章：肿瘤微环境干预](10-tumor-microenv.md)

## 09.1 放射性药物的基本原理：把辐射剂量变成可靶向药理

靶向放射性核素治疗（Targeted Radionuclide Therapy，**TRT**）把能识别肿瘤的配体、肽或抗体与放射性核素连接，使电离辐射在肿瘤及其邻近细胞中沉积。它与外照射不同：药物经血流分布，靶点表达、灌注、内吞、清除和核素物理衰变共同决定每个器官的吸收剂量。因而“给了多少GBq”只是起点，真正药理量是肿瘤、骨髓、肾脏、唾液腺等组织吸收的Gy。

β粒子如177Lu和90Y射程通常为毫米级，可产生交叉火力（cross-fire）：即使配体没有进入每个肿瘤细胞，邻近靶阳性细胞释放的电子也能杀伤抗原较低的细胞。这对异质性和较大病灶有利，却增加正常邻近组织剂量。177Lu同时释放可用于成像的γ光子，半衰期约6.65天，便于物流和治疗后剂量学。

α粒子由两个质子和两个中子组成，线性能量转移（Linear Energy Transfer，**LET**）高、射程约数十微米，可在少数径迹中造成难修复DNA双链断裂。225Ac半衰期约9.9天，并经多级子体衰变释放多个α粒子，理论上适合微小病灶和耐β治疗克隆；但子体可能从螯合物反冲逸出并在非靶器官重分布。211At半衰期仅约7.2小时，近距离生产和快速物流成为主要约束。

俄歇电子射程为纳米至微米级，只有核素非常接近DNA时才高效，因此内吞、核转运和亚细胞定位比单纯肿瘤摄取更重要。碘-131兼具β治疗和γ成像，成熟用于甲状腺组织；镭-223像钙一样进入成骨活跃区域，不依赖肿瘤表面抗原。核素选择必须匹配载体半衰期：快速清除的小分子适合中等半衰期核素，循环数日的抗体若配短半衰期核素会在到达肿瘤前损失活度。

治疗诊断一体化（Theranostics）先用同一靶点的PET/SPECT示踪剂确认表达和全身分布，再用治疗核素给药。例如PSMA PET用于Pluvicto选择，SSTR成像用于Lutathera选择。这比单次组织活检更能反映全身异质性，但成像阳性阈值、仪器、重建和扫描时间都会影响入组；“看得见”也不等于必然达到治疗剂量。

> **关键概念：** **TRT是药代、核物理与放射生物学的乘积。**疗效取决于靶向载体把多少活度带入肿瘤、停留多久，以及每次衰变在多大空间沉积多少能量。

### 表9-1：主要治疗性放射性核素物理性质

**八种肿瘤治疗核素的衰变、射程和适用场景**

| 核素 | 主要衰变 | 物理半衰期 | 组织射程（近似） | LET特征 | 代表场景 | 关键限制 |
| --- | --- | --- | --- | --- | --- | --- |
| 177Lu | β−+γ | 6.65天 | 平均约0.7 mm | 低LET | PSMA、SSTR2 | 骨髓/肾脏剂量与供应 |
| 90Y | β− | 64.1小时 | 平均约2.5 mm | 低LET、较高能 | 肝内微球、抗CD20 | 纯β剂量学和非靶栓塞 |
| 131I | β−+γ | 8.02天 | 约0.4 mm | 低LET | 甲状腺、MIBG | 辐射防护与甲状腺/唾液腺 |
| 223Ra | α（衰变链共4次α） | 11.4天 | <0.1 mm | 高LET | 有症状骨转移mCRPC | 仅骨靶向；骨髓抑制 |
| 225Ac | α（衰变链共4次α） | 9.9天 | 约0.05–0.1 mm | 高LET | PSMA、SSTR2 | 供应受限；子体反冲重分布；口干症 |
| 212Pb | β−→212Bi/212Po α（体内α发生器） | 10.6小时 | α约0.05–0.1 mm | 高LET | SSTR2、MC1R | 半衰期短需就近生产；212Bi子体逸出 |
| 211At | α（经EC/α分支） | 7.2小时 | 约0.05–0.08 mm | 高LET | 早期临床（抗体、PSMA等） | α束回旋加速器产能；脱砹不稳定 |
| 161Tb | β−+转换/俄歇电子+γ | 约6.9天 | β亚毫米；俄歇纳米至微米级 | 低LET+俄歇局部高LET | PSMA、SSTR（早期临床） | 生产规模与临床证据尚早 |

> **图示：核素半衰期与有效射程**
> 横轴为物理半衰期（小时，对数尺度），纵轴为主要治疗粒子近似射程；点形标签区分α、β及混合衰变，数值用于建立量级概念。

物理性质只有与临床可验证靶点、生产和患者选择连接后，才会形成可批准产品。

## 09.2 已批准放射性药物：从器官摄取到受体靶向

放射性碘利用甲状腺钠碘同向转运体，是最早的治疗诊断一体化范式。此后90Y-ibritumomab tiuxetan（Zevalin）把抗CD20抗体与β核素结合，223Ra dichloride（Xofigo）利用骨代谢定位，131I-iobenguane（Azedra）利用去甲肾上腺素转运进入嗜铬细胞瘤。不同产品不可只按“放射性药”横比，因为靶组织、粒子、疾病负荷和终点完全不同。

Lutetium Lu 177 dotatate（Lutathera）由177Lu、螯合剂DOTA和生长抑素类似物TATE组成，结合SSTR2并内吞，用于SSTR阳性胃肠胰神经内分泌肿瘤。NETTER-1随机研究奠定成人批准，2024年FDA把适应症扩展至12岁及以上患者。标准方案为7.4 GBq每8周一次、共4次，并合用氨基酸保护肾脏；骨髓抑制、肾毒性及迟发骨髓增生异常综合征/白血病需长期监测。2026年起177Lu-DOTATATE出现首批“放射性等效”竞争：Lantheus的PNT2003（ANDA）于2026-03-02获FDA暂定批准，正式批准受专利诉讼30个月遏制期约束；Curium的Bexlutry于2026-09-14经505(b)(2)途径获批用于成人SSTR阳性GEP-NET，此前Curium在2026年6月的专利侵权诉讼中胜诉（Novartis上诉）。放射性药物首次“仿制化”，但核素供应、GMP热室和限时配送仍构成远高于小分子仿制药的进入门槛。

Lutetium Lu 177 vipivotide tetraxetan（Pluvicto，亦称177Lu-PSMA-617）把小分子PSMA配体与177Lu连接。FDA于2022年依据VISION批准既往ARPI和紫杉类治疗后的PSMA阳性mCRPC，2025年3月又依据PSMAfore扩展至接受过ARPI、适合延迟紫杉类化疗的人群。治疗前需用Locametz或其他获批PSMA PET产品确认表达，体现伴随影像作为药物选择工具。2026-07-31，FDA再依据III期PSMAddition批准Pluvicto联合ARPI用于PSMA阳性转移性激素敏感前列腺癌，标签改用“雄激素通路调节未治或敏感（mAPMN/S）”术语替代mHSPC，且较目标日期提前约1个月获批；其适应症由此覆盖从激素敏感到紫杉类后去势抵抗的转移性病程。

### 表9-2：已批准或历史批准的治疗性放射性药物

**十种美国批准或历史批准的代表性肿瘤放射性药物**

| 产品 | 核素/载体 | 靶向机制 | 主要适应症 | 美国状态 | 关键风险/备注 |
| --- | --- | --- | --- | --- | --- |
| Pluvicto | 177Lu-PSMA-617 | PSMA小分子配体 | PSMA+ mCRPC；PSMA+ mHSPC（联合ARPI） | 2022；2025、2026-07扩展 | 骨髓抑制、肾毒性、辐射防护 |
| Lutathera | 177Lu-DOTATATE | SSTR2肽 | SSTR+ GEP-NET | 2018；2024儿科扩展 | 氨基酸肾保护、迟发MDS |
| Bexlutry | 177Lu-DOTATATE（Curium） | SSTR2肽 | 成人SSTR+ GEP-NET | 2026-09；505(b)(2)等效产品 | 与Lutathera同活性成分；专利诉讼仍在上诉 |
| Xofigo | 223RaCl2 | 成骨区钙模拟 | 有症状骨转移mCRPC、无已知内脏转移 | 2013 | 骨髓抑制；不与abiraterone/prednisone联用 |
| Azedra | 131I-iobenguane | 去甲肾上腺素转运体 | 高风险嗜铬细胞瘤/副神经节瘤 | 2018；商业供应已停 | 甲状腺阻断、骨髓抑制 |
| Zevalin | 90Y-抗CD20抗体 | CD20 | 部分B细胞NHL | 2002 | 长期骨髓抑制、使用有限 |
| Bexxar | 131I-tositumomab | CD20 | NHL | 历史批准/停产 | 复杂剂量学和商业采用不足 |
| Sodium iodide I-131 | 131I | 甲状腺主动摄取 | 分化型甲状腺癌 | 长期标准 | 唾液腺、甲状腺和继发肿瘤风险 |
| Quadramet | 153Sm-EDTMP | 骨矿化表面 | 骨转移疼痛缓解 | 姑息治疗 | 骨髓抑制；非肿瘤控制终点 |
| Metastron | 89SrCl2 | 骨转换区域 | 骨转移疼痛缓解 | 历史/有限使用 | 半衰期长、骨髓剂量 |

Pluvicto的成功来自PSMA生物学、伴随影像和随机生存证据三者同时成熟。

## 09.3 PSMA靶向放射性治疗：全身成像引导的精准辐射

前列腺特异性膜抗原（Prostate-Specific Membrane Antigen，**PSMA**）由*FOLH1*编码，是具有谷氨酸羧肽酶活性的跨膜蛋白。正常前列腺、肾近端小管、唾液腺和小肠也可表达，但前列腺癌尤其去势抵抗阶段常高表达并发生配体诱导内吞。雄激素受体抑制可能短期调节PSMA，肿瘤分化丢失或神经内分泌转化则可形成PSMA低表达克隆。

VISION纳入831例既往接受ARPI和1–2种紫杉类、PSMA PET阳性的mCRPC患者，按2:1随机至177Lu-PSMA-617加协议允许标准治疗或标准治疗。放射性配体显著改善影像学PFS与OS：中位OS约15.3个月对11.3个月，死亡HR 0.62；中位影像学PFS约8.7个月对3.4个月。开放标签设计和对照组早期退出需要注意，但双主要终点、中心影像和生存结果支持了临床意义。

PSMAfore把治疗前移至ARPI进展、未接受紫杉类且适合延迟化疗的人群。2025年FDA扩展适应症说明放射性配体不再只作为末线“抢救”，但治疗排序仍需考虑疾病速度、基因组特征、骨髓储备、既往PARP抑制剂和患者偏好。较早线使用也意味着更长生存期内要关注累积肾脏、骨髓及继发肿瘤风险。

PSMAddition进一步把177Lu-PSMA-617前移到激素敏感阶段：在ARPI为基础的标准治疗上加用Pluvicto改善了主要终点影像学PFS，并据此获批。该人群PSMA PET阳性比例高、预期生存长，潜在患者数显著扩大，但OS仍在随访，累积肾脏、唾液腺和骨髓毒性，以及进展后PARP抑制剂、紫杉类或α治疗的序贯都需要长期数据。同期PSMA-I&T竞品分化：Lantheus因SPLASH的OS受交叉混杂且未显示获益而放弃PNT2002的NDA；Curium的177Lu-PSMA-I&T（lutetium Lu 177 zadavotide guraxetan）III期ECLIPSE达到主要终点，并依据剂量学把方案上限由4周期修订为6周期。

PSMA-617与PSMA-I&T都包含结合PSMA活性口袋的尿素基团、连接区和DOTA类螯合单元，但连接子、脂溶性、器官摄取和临床证据体系不同，不能按“都靶向PSMA”互换。伴随PET还可能发现FDG阳性而PSMA阴性的异质病灶；此类不一致常提示更侵袭生物学和较差TRT获益。

联合策略有明确但尚未完全验证的机制。PARP抑制剂可能削弱DNA损伤修复，紫杉类可控制PSMA低表达克隆，ARPI可能调节PSMA与疾病驱动，ICI则试图利用辐射诱导抗原释放。组合也会叠加骨髓抑制、疲劳或免疫毒性，随机试验必须证明增量获益，而不能只根据机制叙事。

> **图示：VISION试验设计与关键结果**
> VISION确立了PSMA PET选择后的177Lu-PSMA-617生存获益；数据应结合开放标签设计和既往重度治疗背景解释。

> **临床/研究亮点：** **VISION使核医学进入随机生存终点时代。**与对照相比，Pluvicto把中位OS从11.3个月延长至15.3个月（HR 0.62），同时改善影像学PFS；这不仅是“PSA下降”，而是可改变治疗路径的III期证据。

β射线证明了全身放射性配体价值，α核素则试图用更短射程和更高LET提高微小病灶杀伤。

## 09.4 α放射性核素治疗的兴起：高LET与供应链现实

靶向α治疗（Targeted Alpha Therapy，**TAT**）以高LET和短射程在单细胞尺度沉积能量。相较177Lu，225Ac可能对微小转移、低氧和部分DNA修复完整细胞更有效，也能减少毫米级交叉照射。然而高LET没有“免费午餐”：唾液腺等正常PSMA表达组织只需较少衰变即可受损，口干症是225Ac-PSMA开发中的突出限制。

早期225Ac-PSMA-617病例系列显示深度PSA下降和影像缓解，包括部分177Lu后进展患者，但多为选择性强、样本较小的单中心或回顾性研究。最佳活度、给药间隔、子体剂量学和长期肾脏/骨髓风险尚未由大型随机研究确定。将“高LET”直接翻译成“临床优于β”是不充分的，必须等待头对头或可靠对照证据。

225Ac供应来自229Th发生器、质子照射232Th或其他加速器/反应堆路线，全球产量、纯度和废物处理制约试验扩展。半衰期虽利于跨区域运输，但放射化学需在有限时间内完成，医院还需具备热室、质控、剂量校准和废物许可。核素生产不是后台采购问题，而是产品可及性和商业规模的组成部分。

企业通过不同靶点与载体分散风险：Fusion Pharmaceuticals（后被AstraZeneca收购）开发α发射偶联物，RayzeBio被BMS收购后推进SSTR2等项目，Janssen研究225Ac标记hK2抗体，RadioMedix与Orano Med探索212Pb-DOTAMTATE。2026-10-12，BMS宣布RYZ101（225Ac-DOTATATE）III期ACTION-1在既往177Lu标记SSA治疗后进展的SSTR阳性GEP-NET中，于计划期中分析达到BICR评估PFS主要终点（对照为研究者选择的高剂量SSA、依维莫司或舒尼替尼），这是225Ac放射性配体首个公布阳性的III期研究；具体疗效数字尚未公布，OS仍在随访，BMS将与FDA讨论申报路径。抗体循环更久、肿瘤停留高，但骨髓暴露也更长；小分子清除快，却可能出现肾脏或唾液腺摄取。

### 表9-4：α与β放射性核素治疗临床特性比较

**八个临床开发维度比较α与β治疗**

| 维度 | α核素 | β核素 | 开发含义 |
| --- | --- | --- | --- |
| LET | 高 | 低 | α用较少径迹可致复杂DNA损伤 |
| 组织射程 | 约细胞直径 | 亚毫米至毫米 | β交叉火力更强 |
| 适合病灶 | 微小转移/单细胞 | 异质性较大病灶 | 病灶尺度影响核素选择 |
| 正常组织风险 | 局部摄取可严重损伤 | 邻近组织交叉照射 | 两者风险形态不同 |
| 剂量学 | 微剂量学复杂 | 宏观器官剂量较成熟 | 平均Gy可能低估α异质分布 |
| 子体问题 | 衰变反冲可释放子体 | 通常较少 | 螯合稳定不等于子体固定 |
| 供应 | 多种α核素受限 | 177Lu供应链较成熟 | 决定试验和商业容量 |
| 临床成熟度 | 223Ra已批，其余多早期 | 多个受体靶向产品已批 | 不可跨核素外推疗效 |

核素平台竞争最终体现为靶点、载体、生产网络和临床阶段组成的完整管线。

## 09.5 临床管线与公司布局：从PSMA扩展到泛肿瘤靶点

放射性药物并购热潮反映大型药企希望同时获得配体、螯合化学、核素供应和专科商业网络。Novartis通过Advanced Accelerator Applications与Endocyte建立Lutathera/Pluvicto体系，并于2024年以约17.5亿美元收购Mariana Oncology；Eli Lilly于2023年收购POINT Biopharma（约14亿美元；其PNT2002/PNT2003权利此前已授权Lantheus），BMS收购RayzeBio，AstraZeneca收购Fusion。2025–2026年交易进一步从“买管线”转向“买产能与全链条”：RayzeBio（BMS）于2025-06获得Philochem的ACP3靶向OncoACP3全球权利（首付3.5亿美元、里程碑最高10亿美元），Curium于2026-08宣布以最高约80亿美元（含CVR）收购Lantheus，Telix于2026-09宣布以16.5亿美元首付收购ITM。交易价值不只在单个项目，还包括生产站点、放射药质量体系和与核医学中心协作能力。

靶点扩展需满足高肿瘤摄取、低关键器官表达和足够内化/停留。SSTR2在神经内分泌肿瘤已验证；FAP在多种肿瘤基质表达广，但正常修复组织和快速洗脱影响治疗窗；HER2与DLL3可借助抗体或肽，CAIX在肾癌有较高表达。抗体、肽、小分子各有不同循环时间，需与核素半衰期匹配，而非只追逐热门靶点。

读管线表时应区分“放射性配体已进入患者”与“公司宣布平台”。早期项目的剂量递增首先回答器官剂量和推荐活度，ORR只是探索；同一项目换核素后属于新的药理实体。下表以2026-11-12（2026.Q4）公开状态为截点，阶段变化快的项目保留审慎措辞。

### 表9-3：放射性药物临床管线

**二十个代表性治疗放射性药物项目**

| 项目 | 公司 | 核素 | 靶点/载体 | 适应症 | 阶段（2026.Q4） | 关键开发问题 |
| --- | --- | --- | --- | --- | --- | --- |
| Pluvicto | Novartis | 177Lu | PSMA小分子 | 前列腺癌 | 已批准；2026-07扩展至mHSPC | 治疗排序、容量与早线长期毒性 |
| Lutathera | Novartis/AAA | 177Lu | SSTR2肽 | GEP-NET | 已批准；2026年出现等效产品 | 更早线、个体剂量学与等效竞争 |
| PNT2002 | Lantheus（源自POINT，现属Lilly） | 177Lu | PSMA-I&T小分子 | mCRPC | III期SPLASH完成；不申报NDA | OS受交叉混杂、未显示获益 |
| PNT2003 | Lantheus（源自POINT） | 177Lu | SSTR2（DOTATATE等效） | GEP-NET | ANDA暂定批准（2026-03） | 专利遏制期后上市；与Bexlutry等效竞争 |
| RYZ101 | RayzeBio/BMS | 225Ac | SSTR2肽 | GEP-NET/SCLC | III期ACTION-1达PFS主要终点（2026-10） | 申报路径；α供应、肾脏与血液毒性 |
| FPI-2265 | Fusion/AstraZeneca | 225Ac | PSMA-I&T | mCRPC | II/III期（AlphaBreak） | 既往177Lu后活性；读出时间[待核实] |
| FPI-1434 | Fusion/AZ | 225Ac | IGF-1R抗体 | 实体瘤 | I期/项目状态需复核 | 抗体骨髓暴露 |
| JNJ-69086420 | Janssen | 225Ac | hK2抗体 | 前列腺癌 | I期 | 剂量递增与长期安全 |
| AlphaMedix | RadioMedix/Orano Med | 212Pb | SSTR2肽 | 神经内分泌瘤 | II期 | 发生器供应和子体剂量学 |
| VMT01 | Perspective Therapeutics | 212Pb | MC1R肽 | 黑色素瘤 | I/II期 | 色素/靶表达选择 |
| VMT-α-NET | Perspective | 212Pb | SSTR2 | 神经内分泌瘤 | I/II期 | 与177Lu序贯 |
| TLX591 | Telix | 177Lu | PSMA抗体 | 前列腺癌 | III期开发 | 抗体循环与骨髓剂量 |
| TLX250 | Telix | 177Lu | CAIX抗体 | 肾细胞癌 | II期 | 诊疗配对；89Zr诊断剂TLX250-CDx于2025-08获CRL（CMC） |
| 177Lu-FAP-2286 | Clovis/Novartis资产 | 177Lu | FAP肽 | 实体瘤 | I/II期 | 肿瘤停留与正常修复组织 |
| 225Ac-PSMA-I&T | 学术/多方 | 225Ac | PSMA小分子 | mCRPC | I期 | 推荐活度与口干症 |
| ITM-11（177Lu-edotreotide） | ITM（Telix拟收购） | 177Lu | SSTR2肽 | GEP-NET | NDA获CRL（2026-08，CMC） | 第三方设施整改与再提交 |
| 177Lu-PSMA-I&T（zadavotide guraxetan） | Curium | 177Lu | PSMA小分子 | mCRPC | III期ECLIPSE达主要终点 | 6周期方案与申报时间 |
| OncoACP3 | Philochem/RayzeBio（BMS） | 225Ac（治疗）/68Ga（诊断） | ACP3小分子 | 前列腺癌 | 诊断I期；治疗IND准备（2025） | 新靶点验证 |
| Iomab-B | Actinium Pharmaceuticals | 131I | CD45抗体 | AML移植前调理 | III期/监管讨论 | 桥接移植与终点解释 |
| Betalutin | Nordic Nanovector | 177Lu | CD37抗体 | NHL | 项目停止 | 商业与临床开发失败教训 |

> **临床/研究亮点：** **Lutathera展示受体靶向可跨成人与儿科扩展。**2024年FDA基于NETTER-P药代、剂量学和安全数据，并外推NETTER-1成人疗效，将其用于12岁及以上SSTR阳性GEP-NET患者；这也说明儿科放射药批准需要专门器官剂量证据。

## 09.6 2025下半年—2026年关键进展（截至2026-11-12）

本节补记2025-07-01至2026-11-12期间放射性药物领域的监管决定、关键读出与交易。三条主线清晰可见：PSMA放射性配体前移至激素敏感阶段；177Lu-DOTATATE出现首批等效产品，而多项新申请因CMC或第三方设施问题收到CRL；行业整合从大型药企“买平台”转向核药公司之间“买同位素产能与全链条”。日期以FDA文件、公司公告或会议报道为准。

### 表9-5：2025下半年—2026年放射性药物关键事件

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025-08 | Telix 89Zr-girentuximab（TLX250-CDx，Zircaix）获CRL | FDA CRL | 主要涉及临床与商业工艺可比性及两家第三方生产商Form 483；2025-12 Type A会议后准备再提交 |
| 2025-11 | FDA受理ITM-11（n.c.a. 177Lu-edotreotide）NDA，PDUFA 2026-08-28 | 监管受理 | COMPETE III期（n=309，G1/G2 GEP-NET）：中位PFS 23.9 vs 14.1个月（对照依维莫司） |
| 2026-03-02 | Lantheus PNT2003（177Lu-DOTATATE）ANDA获暂定批准 | FDA暂定批准 | 首个获暂定批准的Lutathera放射性等效产品；正式批准受30个月遏制期约束 |
| 2026-07-31 | Pluvicto联合ARPI获批PSMA阳性mHSPC（标签称mAPMN/S） | FDA批准（适应症扩展） | PSMAddition；较目标日期提前约1个月 |
| 2026-08-03 | Curium宣布收购Lantheus | 并购 | 每股102.50美元现金+最高12美元CVR，总值最高约80亿美元；预计2027上半年完成 |
| 2026-08-07 | ITM-11 NDA获CRL | FDA CRL | 涉及CMC及第三方商业生产设施检查，未提出临床或安全性问题；ITM计划再提交 |
| 2026-09-14 | Curium Bexlutry（177Lu-DOTATATE）经505(b)(2)获批 | FDA批准 | 首个“放射性配体等效”产品；Novartis对专利判决上诉 |
| 2026-09 | Telix宣布以16.5亿美元首付收购ITM | 并购 | 约12.5亿美元Telix股票并承担约3.02亿美元净债务；ITM-11相关或有对价最高7亿美元；预计2026年底完成 |
| 2026-10-12 | RYZ101 III期ACTION-1期中分析达PFS主要终点 | 关键读出 | 首个阳性的225Ac放射性配体III期；177Lu-SSA后进展人群；数据待会议公布 |

**PSMA治疗完成“全程覆盖”，但证据重心转向长期安全与序贯。**Pluvicto在VISION（紫杉类后）、PSMAfore（紫杉类前）之后，又凭PSMAddition进入激素敏感阶段。越早使用，暴露于累积辐射的生存时间越长，PSMA PET阳性人群越大，核医学中心容量和核素供应越成为可及性瓶颈。与此同时，同类177Lu-PSMA-I&T出现分化：SPLASH因交叉混杂未能显示OS获益而被放弃申报，ECLIPSE则达到主要终点，说明同靶点放射性配体的注册成败同样取决于对照设计和交叉处理，而不只是配体结构。

**SSTR赛道同时出现“等效化”和“α升级”。**Bexlutry与PNT2003使177Lu-DOTATATE从单一品牌走向等效竞争，价格和供应可靠性将成为医院选择变量；ITM-11则以无载体添加177Lu和随机对照依维莫司的COMPETE数据寻求差异化，却因CMC与第三方设施问题获CRL。RYZ101在177Lu-SSA进展后取得阳性III期，为“β后用α”的序贯提供首个随机证据，但其肾脏、血液学和长期安全性仍待完整数据。

**CMC已成为核药监管的主要失败点，整合因此加速。**TLX250-CDx、ITM-11以及Lantheus诊断剂LNTH-2501（68Ga-edotreotide，2026年6月下旬[待核实]）的CRL均指向工艺可比性或第三方设施，而非临床疗效。短半衰期产品依赖同位素供应、放射性标记和限时配送多个外部环节，任何一个设施的检查缺陷都会阻断批准。Curium–Lantheus与Telix–ITM两笔交易的共同逻辑正是把同位素生产、放射性标记、诊断与治疗产品纳入同一体系；与2023–2024年Lilly、BMS、AstraZeneca和Novartis的“平台收购”相比，2026年的整合更像供应链和制造能力的纵向整合。

> **临床/研究亮点：** **Bexlutry标志放射性药物进入“等效竞争”时代。**它与Lutathera活性成分相同，经505(b)(2)途径依靠文献和桥接数据获批，而非重新开展随机III期；但核素来源、放化纯度、比活度和配送时效仍可能造成产品间差异，临床切换时需核对标签剂量、肾保护方案和供应可靠性。

## 主要参考来源

- Sartor O, et al. Lutetium-177–PSMA-617 for Metastatic Castration-Resistant Prostate Cancer. N Engl J Med. 2021;385:1091–1103. [DOI](https://doi.org/10.1056/NEJMoa2107322)
- U.S. Food and Drug Administration. FDA expands Pluvicto’s metastatic castration-resistant prostate cancer indication. 2025. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-expands-pluvictos-metastatic-castration-resistant-prostate-cancer-indication)
- U.S. Food and Drug Administration. Drug Trials Snapshot: Pluvicto. 2022. [FDA](https://www.fda.gov/drugs/drug-safety-and-availability/drug-trials-snapshots-pluvicto)
- Strosberg J, et al. Phase 3 Trial of 177Lu-Dotatate for Midgut Neuroendocrine Tumors. N Engl J Med. 2017;376:125–135. [DOI](https://doi.org/10.1056/NEJMoa1607427)
- U.S. Food and Drug Administration. FDA approves lutetium Lu 177 dotatate for pediatric patients 12 years and older with GEP-NETs. 2024. [FDA](https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-dotatate-pediatric-patients-12-years-and-older-gep-nets)
- Kratochwil C, et al. Targeted α-Therapy of Metastatic Castration-Resistant Prostate Cancer with 225Ac-PSMA-617. J Nucl Med. 2016;57:1941–1944. [DOI](https://doi.org/10.2967/jnumed.116.178673)
- Urology Times. FDA approves lutetium Lu 177 vipivotide tetraxetan for PSMA-positive mHSPC. 2026. [News](https://www.urologytimes.com/view/fda-approves-lutetium-lu-177-vipivotide-tetraxetan-for-psma-positive-mhspc)
- Fierce Pharma. FDA approves first radioligand equivalent, Curium's copycat of Novartis' Lutathera. 2026. [News](https://www.fiercepharma.com/pharma/fda-approves-first-radioligand-equivalent-curiums-copycat-novartis-lutathera)
- Lantheus. Lantheus Receives FDA Tentative Approval for Lutetium Lu 177 Dotatate (PNT2003), Radioequivalent to LUTATHERA. 2026. [Press release](https://investor.lantheus.com/node/16836)
- ITM. ITM Announces FDA Acceptance of New Drug Application (NDA) and PDUFA Date for n.c.a. 177Lu-edotreotide (ITM-11) in GEP-NETs. 2025. [Press release](https://www.biospace.com/press-releases/itm-announces-fda-acceptance-of-new-drug-application-nda-and-pdufa-date-for-n-c-a-177lu-edotreotide-itm-11-in-gastroenteropancreatic-neuroendocrine-tumors-gep-nets)
- U.S. FDA. Complete Response Letter, NDA 218705 (177Lu-edotreotide). 2026. [FDA](https://download.open.fda.gov/crl/CRL_NDA218705_20260807.pdf)
- Fierce Biotech. ITM neuroendocrine tumor drug spurned by FDA over manufacturing qualms. 2026. [News](https://www.fiercebiotech.com/manufacturing/itm-neuroendocrine-tumor-drug-spurned-fda-over-manufacturing-qualms)
- OncLive. RYZ101 Meets Primary PFS End Point in Phase 3 ACTION-1 Trial for Post–Lutetium-177 GEP-NETs. 2026. [News](https://www.onclive.com/view/ryz101-meets-primary-pfs-end-point-in-phase-3-action-1-trial-for-post-lutetium-177-gep-nets)
- Lantheus Holdings. Form DEFA14A: Curium merger communication. 2026. [SEC](https://www.sec.gov/Archives/edgar/data/0001521036/000119312526330716/d120569dex991.htm)
- Pharmaceutical Technology. Curium to buy Lantheus in deal worth up to $8bn. 2026. [News](https://www.pharmaceutical-technology.com/news/curium-to-buy-lantheus-8bn/)
- pharmaphorum. Telix to buy radiopharma rival ITM for $1.65bn upfront. 2026. [News](https://pharmaphorum.com/news/telix-buy-radiopharma-rival-itm-165bn-upfront)
- Urology Times. FDA issues complete response letter for 89Zr-DFO-girentuximab in ccRCC. 2025. [News](https://www.urologytimes.com/view/fda-issues-complete-response-letter-for-89zr-dfo-girentuximab-in-ccrcc)
- Telix Pharmaceuticals. Precision Medicine Portfolio Update: TLX101-CDx and TLX250-CDx FDA Resubmissions. 2025. [Press release](https://telixpharma.com/news-views/precision-medicine-portfolio-update-illuccix-china-phase-3-study-tlx101-cdx-and-tlx250-cdx-fda-resubmissions/)
- ApexOnco. Lantheus calls time on me-too Pluvicto. 2025. [News](https://www.oncologypipeline.com/apexonco/node/1301)
- pharmaphorum. BMS' radiopharma unit builds with $1.35bn Philochem deal. 2025. [News](https://pharmaphorum.com/news/bms-radiopharma-unit-builds-135bn-philochem-deal)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
