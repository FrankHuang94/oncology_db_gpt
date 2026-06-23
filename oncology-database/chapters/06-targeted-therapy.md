# 第06章：靶向小分子治疗

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2025.Q2 · 证据截止：2025-06-30。

## 学习目标

- 理解激酶抑制剂的代际演变的核心概念、证据边界与临床转化逻辑。
- 理解KRAS靶向突破的核心概念、证据边界与临床转化逻辑。
- 理解靶点—药物—适应症全景的核心概念、证据边界与临床转化逻辑。
- 理解CDK4/6抑制剂的核心概念、证据边界与临床转化逻辑。
- 理解BCL-2抑制剂与BH3模拟物的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：双特异性抗体](05-bispecific.md) · [下一章：蛋白降解技术（PROTAC与分子胶）](07-protac-deg.md)

## 06.1 激酶抑制剂的代际演变：耐药塑造下一轮药物设计

蛋白激酶把ATP的磷酸基团转移到底物，是细胞信号中的可药靶节点。多数小分子激酶抑制剂占据保守ATP口袋：I型抑制剂偏好活性构象，II型同时进入邻近疏水后袋并稳定非活性构象。共价抑制剂先由可逆识别获得选择性，再以亲电“弹头”与特定半胱氨酸形成键；变构抑制剂则结合ATP口袋之外的调节位点。所谓第一至第四代不是跨靶点统一药理分类，而是针对某一靶点、尤其EGFR或ALK的临床迭代叙事。

第一代EGFR酪氨酸激酶抑制剂（Tyrosine Kinase Inhibitor，**TKI**）gefitinib和erlotinib可逆结合ATP位点，对*EGFR* exon 19缺失和L858R敏感，却也抑制野生型EGFR，产生皮疹和腹泻。治疗后最经典的靶内耐药是T790M：“门控”位点改变ATP亲和和口袋空间，使一代药相对竞争力下降。第二代afatinib、dacomitinib不可逆结合C797并广谱抑制ErbB家族，能够在模型中抑制T790M，但临床剂量受野生型EGFR毒性限制。

第三代osimertinib以突变选择性共价结合C797，最初用于T790M阳性耐药，随后凭FLAURA和ADAURA进入晚期一线与可切除辅助治疗，并表现出中枢神经系统活性。第三代压力又选择C797S、L718Q、G724S等靶内改变，以及*MET*扩增、HER2扩增、RAS–MAPK激活和小细胞转化。C797S是否与T790M位于同一等位基因会影响一代与三代药组合的理论敏感性，说明“检测到两个突变”仍需单倍型信息。

第四代策略试图覆盖C797S和复合突变，包含变构、非共价ATP竞争和双位点组合。BLU-945是研究性突变选择抑制剂的代表，不是获批药，其开发状态和组合策略已发生调整；其他项目如BBT-176、JIN-A02等仍需临床验证。下一代药物还需抑制脑转移、避免野生型毒性，并防止更复杂的旁路与谱系转化。耐药迭代不是无限“换更强药”，而是药物、克隆生态和治疗顺序共同优化。

> **图示：EGFR TKI代际—耐药—应对策略演进**
> 绿色节点为FDA获批药物阶段，紫色节点为研究性策略；BLU-945等不应解释为已上市产品。

### 表6-2：EGFR TKI代际与关键临床证据

**八个EGFR抑制剂或策略的机制、证据和耐药**

| 药物/策略 | 代际/结合 | 主要覆盖 | 关键试验 | 代表结果 | 关键耐药 | 状态 |
| --- | --- | --- | --- | --- | --- | --- |
| Gefitinib | 一代/可逆ATP | Ex19del/L858R | IPASS | 突变人群PFS优于化疗 | T790M、MET扩增 | 已批准 |
| Erlotinib | 一代/可逆ATP | Ex19del/L858R | EURTAC | PFS优于化疗 | T790M、旁路 | 已批准 |
| Afatinib | 二代/不可逆pan-ErbB | 常见及部分罕见EGFR | LUX-Lung 3/6 | PFS改善 | T790M、毒性限制 | 已批准 |
| Dacomitinib | 二代/不可逆pan-HER | 敏感EGFR | ARCHER 1050 | 对gefitinib PFS/OS改善 | T790M、旁路 | 已批准 |
| Osimertinib | 三代/C797共价 | 敏感突变、T790M | FLAURA/ADAURA/LAURA | 晚期一线OS、辅助DFS等改善 | C797S、MET、转化 | 已批准 |
| Amivantamab+lazertinib | 抗体+三代TKI | 常见EGFR/旁路 | MARIPOSA | 相对osimertinib PFS改善 | 复杂毒性/后续耐药 | 已批准组合 |
| BLU-945 | 研究性四代/非共价选择 | T790M/C797S谱 | SYMPHONY | 早期药效探索 | 临床开发调整 | 非上市/项目调整 |
| BBT-176/JIN-A02等 | 研究性四代 | C797S/复合突变 | 早期试验 | 尚无确证性结果 | 旁路、脑暴露、治疗窗 | I期 |

> **临床/研究亮点：** **FLAURA建立三代药前移逻辑。**Osimertinib相对一代EGFR TKI改善PFS和OS，并具有更好的CNS控制。前移也改变了耐药谱：T790M不再是主导，MET扩增、C797S和组织学转化更重要，因此进展后需要组织与ctDNA互补分型。

EGFR拥有可见ATP口袋，而KRAS长期被视为缺少稳定口袋的“不可成药”小GTP酶。

## 06.2 KRAS靶向：“不可成药”如何被化学反应性突破

KRAS在GDP与GTP结合态之间切换，GTP态招募RAF、PI3K和RALGDS。蛋白表面平坦、对GTP/GDP亲和力极高且细胞内核苷酸浓度高，使传统竞争性抑制困难。G12C把甘氨酸替换为半胱氨酸，提供野生型KRAS没有的亲核硫醇。研究者发现switch-II pocket（S-IIP）可被小分子诱导并靠近Cys12；亲电丙烯酰胺先可逆定位，再与Cys12共价结合，把KRAS G12C锁在GDP态。选择性来自“突变半胱氨酸+诱导口袋+构象循环”的组合。

Sotorasib（AMG 510）和adagrasib（MRTX849）在既往治疗KRAS G12C NSCLC中建立临床活性。结直肠癌单药反应较低，因为EGFR反馈迅速恢复RAS–MAPK信号；sotorasib加panitumumab、adagrasib加cetuximab通过同步阻断上游反馈提高疗效。这是组织背景改变同一突变药理的典型。耐药包括KRAS二级突变、G12C扩增、新RAS突变、NRAS/BRAF/MAP2K1改变、MET扩增及组织学转变。

G12D以带负电的天冬氨酸替换甘氨酸，没有可直接利用的半胱氨酸，且switch-II口袋构象与反应性不同；G12V为疏水缬氨酸，同样缺少共价把手。MRTX1133以高亲和非共价方式靶向G12D，zoldonrasib等RAS(ON)抑制剂尝试结合活化复合物；G12V选择性项目仍处早期。Pan-KRAS/Pan-RAS策略、RAS(ON)多突变抑制剂和蛋白降解尝试扩大覆盖，但正常RAS信号的治疗窗成为核心。

SHP2和SOS1抑制剂从上游降低RAS核苷酸交换，可增加GDP态G12C比例并延缓反馈；它们也可能与EGFR、MEK或免疫治疗组合。联合不是越多越好：皮疹、腹泻、骨髓抑制和肝毒性可能重叠，且KRAS等位基因、共突变*STK11*/*KEAP1*/*TP53*和组织背景影响获益。

> **图示：KRAS信号通路与抑制策略**
> 红色“⊣”标记药物干预点，橙色虚线表示反馈。KRAS G12C抑制后上游RTK/SHP2/SOS1可重新增加通路输出。

### 表6-3：KRAS突变与抑制剂开发状态

**十条KRAS直接或间接抑制策略**

| 突变/策略 | 代表药物 | 结合方式 | 代表癌种 | 阶段（2025.Q2） | 关键限制 |
| --- | --- | --- | --- | --- | --- |
| G12C | Sotorasib | GDP态S-IIP共价 | NSCLC/CRC组合 | 已批准 | 反馈与多类二级耐药 |
| G12C | Adagrasib | GDP态S-IIP共价 | NSCLC/CRC组合 | 已批准 | 胃肠、肝和QT风险 |
| G12C | Divarasib | GDP态共价 | 实体瘤 | III期 | 同类差异化 |
| G12C | Olomorasib | GDP态共价 | NSCLC | III期 | 前线组合治疗窗 |
| G12D | MRTX1133 | 非共价选择性 | 胰腺/结直肠等 | I/II期 | 临床暴露和反馈 |
| G12D RAS(ON) | Zoldonrasib/RMC-9805 | 活性复合物抑制 | 胰腺等 | I期 | 成熟疗效待证 |
| 多RAS突变 | Daraxonrasib/RMC-6236 | RAS(ON)多选择 | 胰腺/NSCLC | III期 | 正常RAS治疗窗 |
| G12V | 多项选择性项目 | 非共价/RAS(ON) | 胰腺/结直肠 | 临床前/I期 | 缺少共价把手 |
| SOS1 | BI-1701963等 | 阻断GEF–KRAS | KRAS突变实体瘤 | I期 | 单药活性与冗余 |
| SHP2 | TNO155/RMC-4630等 | 变构抑制 | RTK/RAS驱动肿瘤 | I/II期 | 毒性和旁路 |

EGFR和KRAS是代表案例，临床靶向治疗还覆盖融合激酶、代谢酶、细胞周期和凋亡网络。

## 06.3 主要靶点—药物—适应症全景

靶向药的“选择性”有三个层次：生化选择性描述对激酶家族的抑制谱，细胞选择性描述在不同基因背景中的杀伤，临床选择性则取决于患者筛选、组织暴露和安全窗。融合激酶如ALK、ROS1、RET和NTRK常形成强驱动依赖，抑制后可出现高缓解率；PI3K、JAK等节点在正常造血和免疫中也重要，治疗窗更窄。判断一个药物不能只看体外IC50，还要看未结合暴露、靶点占有、脑穿透和有效剂量下的旁靶。

融合检测需要方法匹配。DNA面板可同时发现多种改变，但大内含子或复杂断点会漏检部分融合；RNA测序直接观察表达融合，却受RNA质量影响。MET exon14 skipping既可由剪接位点SNV也可由插入缺失产生；HER2既有扩增、过表达也有激酶结构域突变，对应不同药物证据。肿瘤知情的“靶点名称”必须拆成具体改变。

### 表6-1：已上市靶向小分子全景

**三十二个代表性已上市靶向小分子**

| 靶点 | 药物 | 类型/代际 | 机制 | 代表适应症 | 关键耐药 | 上市公司 |
| --- | --- | --- | --- | --- | --- | --- |
| EGFR | Gefitinib | 一代 | 可逆ATP竞争 | EGFRm NSCLC | T790M | AstraZeneca |
| EGFR | Erlotinib | 一代 | 可逆ATP竞争 | EGFRm NSCLC | T790M | Roche |
| EGFR | Afatinib | 二代 | pan-ErbB共价 | EGFRm NSCLC | T790M/旁路 | Boehringer |
| EGFR | Osimertinib | 三代 | C797共价突变选择 | EGFRm NSCLC | C797S/MET/转化 | AstraZeneca |
| ALK | Crizotinib | 一代 | ALK/ROS1/MET | ALK/ROS1+ NSCLC | L1196M/CNS | Pfizer |
| ALK | Alectinib | 二代 | 选择性ALK | ALK+ NSCLC | G1202R等 | Roche |
| ALK | Brigatinib | 二代 | ALK多突变覆盖 | ALK+ NSCLC | 复合突变 | Takeda |
| ALK/ROS1 | Lorlatinib | 三代大环 | 脑穿透ALK/ROS1 | ALK+ NSCLC | 复合ALK突变 | Pfizer |
| ROS1 | Entrectinib | 多靶点 | ROS1/TRK/ALK | ROS1 NSCLC/NTRK肿瘤 | 溶剂前沿突变 | Roche |
| ROS1 | Repotrectinib | 下一代大环 | ROS1/TRK | ROS1 NSCLC/NTRK肿瘤 | 复合突变 | BMS |
| MET | Capmatinib | Type Ib | 选择性MET | METex14 NSCLC | D1228/Y1230/旁路 | Novartis |
| MET | Tepotinib | Type Ib | 选择性MET | METex14 NSCLC | D1228/Y1230 | Merck KGaA |
| RET | Selpercatinib | 选择性 | RET抑制 | RET融合/突变癌 | G810溶剂前沿 | Eli Lilly |
| RET | Pralsetinib | 选择性 | RET抑制 | RET融合NSCLC/甲状腺癌 | G810/旁路 | Rigel/Genentech历史 |
| NTRK | Larotrectinib | 一代TRK | TRKA/B/C | NTRK融合泛癌种 | 溶剂前沿/门控 | Bayer |
| BRAF | Dabrafenib | Type I | BRAF V600 | 黑色素瘤/NSCLC等 | MAPK再激活 | Novartis |
| BRAF | Encorafenib | Type I | BRAF V600 | 黑色素瘤/CRC组合 | EGFR反馈 | Pfizer |
| MEK1/2 | Trametinib | 变构 | MEK1/2抑制 | BRAF V600组合 | MAPK旁路 | Novartis |
| KRAS G12C | Sotorasib | 共价 | GDP态S-IIP | NSCLC/CRC组合 | 靶内/旁路 | Amgen |
| KRAS G12C | Adagrasib | 共价 | GDP态S-IIP | NSCLC/CRC组合 | 靶内/旁路 | BMS |
| PI3Kα | Alpelisib | 亚型选择 | PI3Kα抑制 | PIK3CAm HR+乳腺癌 | PTEN/通路再激活 | Novartis |
| AKT | Capivasertib | ATP竞争 | AKT1/2/3抑制 | 通路改变HR+乳腺癌 | 通路反馈 | AstraZeneca |
| CDK4/6 | Palbociclib | 选择性 | RB磷酸化抑制 | HR+/HER2−乳腺癌 | RB1丢失/周期旁路 | Pfizer |
| CDK4/6 | Ribociclib | 选择性 | RB磷酸化抑制 | HR+/HER2−乳腺癌 | RB1/CCNE1 | Novartis |
| CDK4/6 | Abemaciclib | CDK4偏好 | RB磷酸化抑制 | 早期/晚期HR+乳腺癌 | RB1/周期旁路 | Eli Lilly |
| IDH1 | Ivosidenib | 变构 | 突变IDH1抑制 | AML/胆管癌 | 二聚界面/克隆演化 | Servier |
| IDH2 | Enasidenib | 变构 | 突变IDH2抑制 | AML | 异构体切换 | BMS/Servier |
| FLT3 | Gilteritinib | Type I | FLT3 ITD/TKD | 复发/难治AML | RAS/MAPK、F691L | Astellas |
| BCR-ABL | Imatinib | Type II | 非活性构象 | CML/GIST | T315I等 | Novartis |
| BCR-ABL | Asciminib | 变构STAMP | 肉豆蔻酰口袋 | CML | ABL变构位点/复合突变 | Novartis |
| BTK | Zanubrutinib | 共价 | C481结合 | CLL/MCL/WM等 | C481/PLCG2 | BeiGene |
| BTK | Pirtobrutinib | 非共价 | 可逆BTK | 既往共价BTKi后淋巴瘤 | BTK非C481突变 | Eli Lilly |

全景表中的CDK4/6路径已改变HR阳性乳腺癌自然史，但三种药物不是按“代际”排列。

## 06.4 CDK4/6抑制剂：细胞周期制动与乳腺癌治疗重构

雌激素受体信号上调Cyclin D，激活CDK4/6并磷酸化RB，使E2F释放、细胞进入S期。CDK4/6抑制剂维持RB低磷酸化，建立G1停滞；因此功能性RB是必要生物学基础。与内分泌治疗联合既降低Cyclin D驱动，又抑制周期执行，形成机制互补。长期压力可通过*RB1*丢失、Cyclin E–CDK2上调、FGFR/PI3K信号和谱系状态改变耐药。

Palbociclib、ribociclib和abemaciclib是三种药，不是“一、二、三代”。Palbociclib间歇给药、以中性粒细胞减少为主要剂量限制；ribociclib需关注QTc和肝功能，并在多项MONALEESA研究中显示OS获益；abemaciclib对CDK4相对偏好、可连续给药，腹泻和静脉血栓更突出，并凭monarchE进入高危早期辅助。药物选择取决于证据场景、合并症、药物相互作用和患者偏好。

### 表6-4：三种CDK4/6抑制剂关键差异

**CDK4/6抑制剂在转移和早期乳腺癌的证据及安全性**

| 药物/场景 | 给药特征 | 关键试验 | OS证据摘要 | 突出毒性 | 关键监测 |
| --- | --- | --- | --- | --- | --- |
| Palbociclib一线 | 3周用/1周停 | PALOMA-2 | PFS改善；OS未达显著 | 中性粒细胞减少 | CBC |
| Palbociclib后线 | 间歇 | PALOMA-3 | 总体OS解释依亚组/随访 | 中性粒细胞减少 | CBC |
| Ribociclib绝经后 | 3周用/1周停 | MONALEESA-2 | OS改善 | 中性粒细胞减少、QT、肝酶 | CBC/ECG/LFT |
| Ribociclib绝经前 | 间歇+卵巢抑制 | MONALEESA-7 | OS改善 | QT、肝酶 | ECG/电解质/LFT |
| Ribociclib早期 | 较低剂量长期 | NATALEE | iDFS改善；OS未成熟 | 肝酶、中性粒细胞减少 | CBC/LFT/ECG |
| Abemaciclib一线 | 连续 | MONARCH 3 | PFS改善；OS长期更新 | 腹泻、VTE | 腹泻/CBC/LFT |
| Abemaciclib后线 | 连续 | MONARCH 2 | OS改善 | 腹泻、VTE | CBC/LFT |
| Abemaciclib早期 | 连续2年 | monarchE | iDFS/DRFS改善；OS随访 | 腹泻、VTE | 风险分层与依从性 |

细胞周期药让癌细胞停止增殖，BH3模拟物则把存活依赖直接转化为线粒体凋亡。

## 06.5 BCL-2抑制剂与BH3模拟物

BCL-2家族控制线粒体外膜通透化。BAX/BAK是形成膜孔的效应蛋白，BIM、PUMA等BH3-only蛋白感知应激并激活效应器，BCL-2、BCL-xL和MCL-1则结合并扣留促凋亡蛋白。Venetoclax（ABT-199）模拟BH3结构选择性占据BCL-2疏水槽，释放BIM并允许BAX/BAK寡聚。它避免早期navitoclax强烈BCL-xL抑制造成的血小板减少，展示“同家族选择性”如何扩大治疗窗。

CLL细胞高度依赖BCL-2，venetoclax可造成快速深度杀伤，也带来肿瘤溶解综合征（Tumor Lysis Syndrome，**TLS**）。分级递增、肿瘤负荷评估、补液、降尿酸和实验室监测把早期严重风险转化为可管理流程。AML中venetoclax与azacitidine或低剂量阿糖胞苷联合，为不适合强化化疗患者建立标准；“VenAza”并非单纯两药相加，低甲基化药可改变凋亡依赖和分化状态。

耐药包括*BCL2* G101V降低药物结合、MCL-1/BCL-xL上调、线粒体代谢重编程和克隆演化。BH3 profiling可功能性测量细胞对不同抗凋亡蛋白的依赖，但常规临床标准化仍有限。MCL-1直接抑制曾受心脏安全窗挑战，替代策略包括CDK9抑制降低短寿命MCL-1转录或通过组合改变依赖。

> **图示：线粒体凋亡与BCL-2家族**
> 促凋亡激活以绿色箭头表示，抗凋亡抑制以红色终止符表示。Venetoclax解除BCL-2对BH3蛋白的扣留。

无论靶向激酶、细胞周期还是凋亡，治疗后克隆都可能通过靶内、旁路和谱系机制逃逸。

## 06.6 小分子耐药机制与监测策略

靶内耐药直接改变药物–靶点相互作用。门控突变可增加ATP亲和或阻碍进入，溶剂前沿突变改变口袋入口，共价结合位点突变消除反应残基，变构位点突变则影响远端构象。不同药物的“门控位点”并不总是同一个结构学角色，临床报告应写具体氨基酸而非笼统标签。

旁路耐药在原靶点仍被抑制时，从其他RTK、RAS–MAPK、PI3K或细胞周期节点恢复输出。组织学转化更彻底：EGFR肺腺癌可转为小细胞表型，前列腺腺癌可形成神经内分泌状态，原有DNA驱动仍在但药物依赖改变。ctDNA擅长捕获多个病灶的基因改变，却看不到细胞形态、蛋白表达和微环境，因此疑似转化必须优先组织活检。

监测策略应由临床问题驱动。基线组织建立诊断与驱动；进展时血浆ctDNA可快速发现靶内和旁路，阴性尤其在低脱落病灶中不能排除改变；组织可验证转化、抗原和病理。序列变异等位基因频率受肿瘤分数和拷贝数影响，不是直接克隆比例。动态下降可作为药效线索，但尚不能在所有场景取代影像或生存终点。

### 表6-5：常见靶点获得性耐药与应对

**十个靶点的典型靶内、旁路和监测策略**

| 靶点 | 典型靶内耐药 | 旁路/转化 | 检测 | 应对原则 |
| --- | --- | --- | --- | --- |
| EGFR | T790M、C797S、L718Q | MET/HER2、SCLC转化 | ctDNA+组织 | 代际TKI、联合/试验、按转化治疗 |
| ALK | L1196M、G1202R、复合突变 | MET/MAPK、转化 | RNA/DNA+组织 | 按突变谱选择下一代 |
| ROS1 | G2032R、L2026M | KRAS/MET | ctDNA/组织 | 下一代ROS1抑制剂/试验 |
| RET | G810溶剂前沿 | MET/KRAS | ctDNA/组织 | 下一代RET/联合研究 |
| NTRK | 溶剂前沿、门控、xDFG | MAPK | DNA/RNA | 下一代TRK/通路联合 |
| KRAS G12C | Y96、R68等/新KRAS | EGFR/MET/NRAS/BRAF | ctDNA+组织 | EGFR组合、RAS(ON)/试验 |
| BRAF | 剪接/扩增 | NRAS/MEK/EGFR反馈 | ctDNA/组织 | 垂直MAPK阻断、癌种特异组合 |
| BCR-ABL | T315I及复合突变 | 克隆演化 | 定量PCR+激酶域测序 | Ponatinib/asciminib/移植策略 |
| BTK | C481、L528W等 | PLCG2 | 血液NGS | 非共价BTKi/降解剂/其他类别 |
| CDK4/6 | 靶扩增较少见 | RB1丢失、CCNE1/CDK2 | 组织/ctDNA/功能研究 | 更换内分泌骨架/其他通路 |

### 表6-6：FDA批准伴随诊断与靶向药配对示例

**十个FDA伴随诊断平台和代表性靶向药配对**

| 检测 | 样本/方法 | 标志物 | 代表药物 | 代表癌种 | 注意事项 |
| --- | --- | --- | --- | --- | --- |
| cobas EGFR Mutation Test v2 | 组织/血浆PCR | EGFR | Osimertinib等 | NSCLC | 血浆阴性反射组织 |
| therascreen KRAS RGQ PCR | 组织PCR | KRAS G12C/特定标签 | Adagrasib/Sotorasib组合依标签 | NSCLC/CRC | 具体版本和标签配对 |
| VENTANA ALK D5F3 | 组织IHC | ALK | Alectinib等 | NSCLC | 融合蛋白代理 |
| FoundationOne CDx | 组织NGS | 多基因 | 多种靶向药 | 多癌种 | 每个药有独立CDx声明 |
| FoundationOne Liquid CDx | 血浆NGS | 多基因 | 多种靶向药 | 多癌种 | 低肿瘤分数假阴性 |
| Guardant360 CDx | 血浆NGS | EGFR/KRAS等 | 多个标签配对 | NSCLC等 | 版本与适应症绑定 |
| Oncomine Dx Target Test | 组织DNA/RNA NGS | RET/BRAF/EGFR等 | Selpercatinib等 | NSCLC/甲状腺等 | 融合需RNA质量 |
| Vysis ALK Break Apart FISH | 组织FISH | ALK重排 | ALK抑制剂 | NSCLC | 不提供融合伙伴 |
| BRACAnalysis CDx | 血液/胚系 | BRCA1/2 | PARP抑制剂依标签 | 乳腺/卵巢等 | 胚系咨询；非所有标签相同 |
| therascreen PIK3CA RGQ PCR | 组织/血浆PCR | PIK3CA | Alpelisib | HR+乳腺癌 | 血浆阴性可检测组织 |

> **临床/研究亮点：** **组织学转化说明“基因仍在，疾病已变”。**部分EGFR突变肺腺癌在osimertinib后转为小细胞肺癌，原始EGFR突变可能仍可检测，但EGFR蛋白依赖下降、RB1/TP53背景和神经内分泌程序主导。只看ctDNA会漏掉治疗决策最重要的形态变化。

## 主要参考来源

- Soria J-C, et al. Osimertinib in Untreated EGFR-Mutated Advanced NSCLC. NEJM. 2018;378:113–125. [DOI](https://doi.org/10.1056/NEJMoa1713137)
- Skoulidis F, et al. Sotorasib for Lung Cancers with KRAS p.G12C Mutation. NEJM. 2021;384:2371–2381. [DOI](https://doi.org/10.1056/NEJMoa2103695)
- Hong DS, et al. KRAS G12C Inhibition with Sotorasib in Advanced Solid Tumors. NEJM. 2020;383:1207–1217. [DOI](https://doi.org/10.1056/NEJMoa1917239)
- Slamon DJ, et al. Overall Survival with Ribociclib plus Fulvestrant in Advanced Breast Cancer. NEJM. 2020;382:514–524. [DOI](https://doi.org/10.1056/NEJMoa1911149)
- DiNardo CD, et al. Azacitidine and Venetoclax in Previously Untreated AML. NEJM. 2020;383:617–629. [DOI](https://doi.org/10.1056/NEJMoa2012971)
- U.S. FDA. List of Cleared or Approved Companion Diagnostic Devices. 2025. [FDA](https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools)


---

内容版本：2025.Q2。下次更新建议：2025.Q4，重点复核 FDA 标签、临床阶段和公司交易状态。
