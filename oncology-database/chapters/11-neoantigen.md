# 第11章：新抗原与个性化癌症疫苗

> OncoAtlas 癌症治疗前沿知识数据库 · 内容版本：2026.Q4 · 证据截止：2026-11-12。

## 学习目标

- 理解新抗原的生成与识别的核心概念、证据边界与临床转化逻辑。
- 理解个性化疫苗设计流程的核心概念、证据边界与临床转化逻辑。
- 理解临床里程碑与关键数据的核心概念、证据边界与临床转化逻辑。
- 理解共享肿瘤抗原的核心概念、证据边界与临床转化逻辑。
- 理解疫苗与免疫治疗联合的核心概念、证据边界与临床转化逻辑。
- 理解2026年首个III期阳性结果（INTerpath-001）与同期多项阴性/终止研究并存的核心概念、证据边界与临床转化逻辑。

## 章节导航

[返回总目录](../index.md) · [上一章：肿瘤微环境干预](10-tumor-microenv.md) · [下一章：主要药企管线与战略布局](12-pipelines.md)

## 11.1 新抗原的生成与识别：从突变序列到T细胞靶点

新抗原（Neoantigen）是由肿瘤特异改变产生、正常细胞通常不表达的免疫肽。非同义点突变、插入缺失、基因融合、异常剪接、移码和内源性逆转录元件都可产生新序列。癌细胞先把含突变的蛋白经蛋白酶体切割，肽段通过TAP进入内质网并装载至主要组织相容性复合体（Major Histocompatibility Complex，**MHC**）；肽–MHC复合物到达表面后，才可能被T细胞受体识别。

“存在突变”远不等于“形成免疫原性新抗原”。突变等位基因必须被转录和翻译，肽需按正确方式切割、转运并以足够稳定性结合患者人类白细胞抗原（Human Leukocyte Antigen，**HLA**），相应T细胞克隆还需未被胸腺耐受删除且能进入肿瘤。任何一层失败都会让计算预测的候选成为假阳性。

肿瘤突变负荷（Tumor Mutational Burden，**TMB**）与候选新抗原数量总体相关，但相关性不是线性疗效定律。吸烟或紫外线诱导的高TMB肿瘤可能产生更多外源样肽；同时，亚克隆突变只存在于部分细胞，靶向后容易逃逸。相较单纯计数，克隆性、表达量、HLA呈递、免疫编辑和T细胞识别共同决定“有效新抗原负荷”。

HLA是高度多态基因座。不同HLA-A、B、C等位基因有不同肽锚定位点和结合偏好，同一突变对一名患者可强呈递，对另一名患者可能完全不可见。肿瘤还能通过HLA杂合性缺失、*B2M*失活或抗原加工缺陷逃逸。MHC-II呈递给CD4 T细胞同样重要，因为辅助细胞可支持CD8记忆、树突细胞授权和表位扩展。

质谱免疫肽组学直接洗脱并鉴定细胞表面HLA肽，能确认“真正呈递”，但对低丰度肽、有限组织和非标准肽敏感度不足。现代流程结合肿瘤–正常测序、RNA表达、HLA分型、蛋白酶体切割预测、结合稳定性、免疫肽组和功能T细胞实验，以减少只依赖NetMHC分数的偏差。

> **图示：新抗原产生与免疫识别流程**
> 候选突变必须通过表达、加工、HLA呈递和T细胞识别四层过滤；预测结合力只是其中一步。

> **关键概念：** **新抗原负荷不等于突变计数。**临床相关性更依赖克隆性、表达、真实呈递和可用T细胞克隆，HLA丢失可让高TMB肿瘤仍然免疫“不可见”。

识别候选后，个性化疫苗必须在患者疾病进展之前完成排序、制造和放行。

## 11.2 个性化新抗原疫苗设计：算法与制造的临床闭环

标准流程以肿瘤和匹配正常样本开始。全外显子测序（Whole-Exome Sequencing，**WES**）或全基因组测序（WGS）识别体细胞变异，RNA测序确认表达并发现融合/剪接，HLA分型定义可呈递空间。病理肿瘤纯度、样本固定损伤、正常对照污染和低频亚克隆都会影响变异质量。

候选排序通常综合突变等位基因表达、克隆性、蛋白酶体切割、TAP转运、MHC-I/MHC-II结合和复合物稳定性。NetMHCpan等模型从大规模结合或配体数据学习HLA偏好，但对罕见HLA、非经典肽和真正TCR免疫原性的预测较弱。人工智能可优化多特征排序，却不能用训练集AUC替代患者T细胞功能验证。

mRNA平台可把多个长表位串联编码，患者细胞翻译后进入MHC-I与MHC-II加工；制造序列化程度高，适合每位患者不同配方。长肽疫苗化学明确、储运相对简单，但需佐剂和有效抗原呈递。树突细胞疫苗把患者单核细胞分化并负载抗原，直接控制呈递细胞，却增加个体化细胞制造和批间变异。DNA、病毒载体和共享“仓储式”新抗原库则在持续表达与速度间权衡。

周转时间（Turn-Around Time，**TAT**）从取材、测序、算法、处方审阅到GMP生产、无菌/身份/效力放行，常以数周计。对于术后微小残留病患者，窗口相对充足；快速进展转移性癌症可能在产品完成前恶化。可并行测序与制造、预验证公共模块、自动化变异审核和实时物流，是AI之外同样重要的系统优化。

> **图示：个性化疫苗制造时间轴**
> 实际TAT取决于样本质量、候选数量、平台和放行项目；图示强调并行化机会而非固定周数承诺。

### 表11-1：主要肿瘤疫苗平台技术比较

**八类个体化或共享抗原疫苗平台的比较**

| 平台 | 载荷形式 | MHC覆盖 | 制造速度 | 优势 | 限制 | 代表项目 |
| --- | --- | --- | --- | --- | --- | --- |
| 个体化mRNA-LNP | 编码多表位mRNA | I+II | 数周 | 多抗原、模块化 | 冷链/先天免疫/TAT | V940 |
| mRNA-lipoplex | 静脉RNA复合物 | I+II | 数周 | 靶向淋巴组织APC | 输注反应与个体生产 | Autogene cevumeran |
| 合成长肽 | 20–35 aa肽池 | I+II | 数周至月 | 稳定、处方清晰 | 溶解性与佐剂依赖 | NeoVax |
| 短肽 | 最小表位 | 多为I类 | 较快 | 易生产和监测 | HLA限制、耐受风险 | 历史肽疫苗 |
| 树突细胞疫苗 | 负载肽/RNA/裂解物 | I+II | 较慢 | 控制APC成熟 | 细胞制造和批差 | Sipuleucel-T相邻范式 |
| DNA疫苗 | 质粒编码抗原 | I+II | 较快 | 稳定、成本较低 | 人体免疫原性/入核 | 多项早期研究 |
| 病毒载体 | 腺病毒/痘病毒抗原 | I+II | 中等 | 强先天刺激 | 载体免疫、再给药 | 共享抗原载体 |
| 共享新抗原仓库 | 热点突变现成制剂 | 特定HLA | 现货 | 显著缩短TAT | 覆盖人群和异质性有限 | *KRAS*/*TP53*热点 |

平台能否转化为临床获益，需要随机复发终点和长期T细胞克隆证据，而不只是短期ELISpot阳性。

## 11.3 临床里程碑与关键数据：免疫原性之后看复发

KEYNOTE-942是一项开放标签随机IIb期研究，将完全切除的高风险IIIb–IV期皮肤黑色素瘤患者按约2:1分配至个体化mRNA-4157/V940+pembrolizumab或pembrolizumab。V940根据患者测序编码最多34个新抗原。研究以宽松的II期α阈值设计，组合组复发或死亡HR为0.561（95% CI 0.309–1.017；双侧p=0.053），18个月RFS为79%对62%。结果支持III期，而不是直接等同监管确证。该研究的五年随访（数据截止2025-12-15，157例，中位随访60.3个月）于2026年ASCO报告并发表于JCO：RFS HR为0.510（95% CI 0.294–0.887），DMFS HR为0.411（95% CI 0.200–0.843），总生存HR为0.471（95% CI 0.165–1.345）但未达统计学显著且数据不成熟；五年分析为描述性，不改变II期的统计定位。

INTerpath-001（NCT05933577）是随机双盲III期研究，把1,137例完全切除的IIB–IV期皮肤黑色素瘤、未接受过系统治疗的患者按2:1分配至intismeran autogene（即V940/mRNA-4157）+pembrolizumab或安慰剂+pembrolizumab。2026-08-19，Merck与Moderna宣布该研究在预设中期分析达到主要终点RFS与关键次要终点DMFS；2026-10的ESMO详细数据显示：中位随访24.6个月时RFS HR为0.58（95% CI 0.45–0.75，p<0.001），事件为136例（18.0%）对111例（29.2%），2年RFS为82.2%对70%；DMFS HR为0.62（95% CI 0.45–0.85，p=0.002），2年DMFS为88.5%对80.2%；总生存HR为0.77（95% CI 0.45–1.31，p=0.33），尚不成熟。预设的“6个月后”敏感性分析HR为0.42（95% CI 0.30–0.58），与疫苗需要时间建立免疫的机制假设一致。这是个体化癌症疫苗首个III期阳性结果，意味着该模式从“支持确证”进入“已获确证（RFS层面）”；但总生存未成熟、随访仅两年，且该结论仅适用于切除后黑色素瘤加pembrolizumab的特定场景。肺癌、肾癌和膀胱癌等INTerpath扩展研究仍将检验不同突变谱、术后窗口和ICI背景下的可复制性。

在切除胰腺导管腺癌的I期研究中，autogene cevumeran依次与atezolizumab和mFOLFIRINOX联合。16名接种患者中8名产生高强度新生新抗原特异T细胞；延长随访显示应答者中位RFS未达到，非应答者为13.4个月（探索性比较p=0.007）。样本极小、非随机且治疗多组件，结果证明可行性和免疫生物学，不足以确定疫苗单独造成生存差异。随机II期IMCODE003（NCT05968326，约260例，疫苗+atezolizumab+mFOLFIRINOX对mFOLFIRINOX，主要终点无病生存）仍在进行。

同一平台在另一癌种给出了相反信号：2026-08-28，BioNTech宣布终止在ctDNA阳性、切除后结直肠癌中以autogene cevumeran单药对比观察的随机II期BNT122-01（NCT04486378），依据是独立数据安全监查委员会提示总生存出现数值失衡；公司表示未报告新的安全性信号，其他autogene cevumeran项目（包括胰腺癌II期）不受影响，详细数据将在适当时候公布。该研究与INTerpath-001的关键差异在于：它是疫苗单药、无ICI背景、以ctDNA阳性定义人群。这提示疫苗在微小残留病中的价值可能依赖检查点阻断提供的“放大器”，而不是单独成立。

长肽NeoVax、RNA mutanome和胶质母细胞瘤GAPVAC等研究已证明个体化处方可诱导多克隆CD4/CD8反应。临床难点是免疫反应测试缺乏统一阈值：ELISpot、胞内细胞因子、四聚体、TCR扩增和肿瘤浸润回答不同问题。真正有说服力的机制链应显示疫苗特异克隆扩增、进入肿瘤、识别自然加工抗原并与微小残留病清除相关。

### 表11-2：个性化新抗原疫苗关键临床研究

**十三项代表性个体化或共享新抗原疫苗研究（截至2026.Q4）**

| 项目/试验 | 平台 | 癌种 | 组合 | 阶段 | 关键数据/问题 |
| --- | --- | --- | --- | --- | --- |
| KEYNOTE-942 | V940个体化mRNA | 切除黑色素瘤 | Pembrolizumab | IIb期，五年随访已读出 | RFS HR 0.561（主分析）；五年RFS HR 0.510、DMFS HR 0.411 |
| INTerpath-001 | Intismeran autogene（V940） | 高风险切除黑色素瘤 | Pembrolizumab | III期已达主要终点（2026-08/10） | 1,137例；RFS HR 0.58、DMFS HR 0.62；OS未成熟 |
| INTerpath-002 | Intismeran autogene | 切除NSCLC | Pembrolizumab | III期进行中 | 检验跨癌种复制 |
| NCT04161755 | Autogene cevumeran | 切除PDAC | Atezolizumab+mFOLFIRINOX | I期 | 8/16产生高强度T细胞反应 |
| IMCODE003 / NCT05968326 | Autogene cevumeran | 切除PDAC | Atezolizumab+mFOLFIRINOX | 随机II期进行中 | 约260例，主要终点无病生存 |
| BNT122-01 / NCT04486378 | Autogene cevumeran | ctDNA阳性切除CRC | 单药对比观察 | II期，2026-08终止 | DSMB提示总生存数值失衡 |
| AMPLIFY-7P | ELI-002 7P共享KRAS两亲性疫苗 | 切除PDAC | 术后辅助 | II期，2026-06未达主要终点 | ITT人群DFS未达终点；R0事后亚组HR 0.65 |
| IMCODE-001 | Autogene cevumeran | 晚期实体瘤 | ±Atezolizumab | I期 | 多表位CD4/CD8反应 |
| NeoVax melanoma | 个体化长肽 | 黑色素瘤 | 佐剂/后续ICI | I期 | 持久多功能T细胞 |
| GAPVAC-101 | 共享+个体化肽 | 胶质母细胞瘤 | 标准治疗 | I期 | 可行性与免疫原性 |
| APVAC1/2 | 仓储+个体化肽 | 胶质母细胞瘤 | Temozolomide | I期 | 不同疫苗诱导不同T细胞谱 |
| GEN-009 | 个体化长肽 | 实体瘤 | ±ICI | I/II期 | 项目开发状态需复核 |
| GRANITE | 个体化病毒载体 | 结直肠癌等 | ICI/标准治疗 | II期 | 微小残留病和ctDNA终点 |

> **图示：个体化疫苗项目的证据成熟度**
> 横轴为临床阶段，纵轴为证据维度综合教学评分，气泡大小为近似样本规模；不用于跨试验疗效排名。

> **临床/研究亮点：** **KEYNOTE-942曾是“支持确证”，INTerpath-001把它变成“已确证（RFS层面）”。**IIb期RFS HR 0.561的95% CI跨1且采用II期统计阈值，五年随访给出HR 0.510的一致方向；双盲III期INTerpath-001随后在1,137例中以RFS HR 0.58（95% CI 0.45–0.75，p<0.001）达到主要终点。但总生存HR 0.77（p=0.33）尚不成熟，获益也只在“切除后黑色素瘤联合pembrolizumab”这一场景得到验证。

个体化突变抗原具有肿瘤特异性，共享肿瘤相关抗原则牺牲部分特异性换取现货规模。

## 11.4 共享肿瘤抗原：可规模化但要面对自身耐受

肿瘤相关抗原（Tumor-Associated Antigen，**TAA**）是正常组织低水平表达、肿瘤中高表达的共享蛋白。癌睾抗原（Cancer-Testis Antigen，**CTA**）如MAGE-A4、NY-ESO-1和PRAME在多种癌中异常激活，而正常成人主要限于免疫特权生殖组织。它们可预制为疫苗并覆盖大量患者，却仍可能受中央/外周耐受影响，T细胞亲和力通常低于真正突变新抗原。

WT1、端粒酶hTERT、survivin、MUC1和HER2也被广泛开发。HER2肽疫苗能诱导抗体或T细胞反应，但乳腺癌中HER2抗体、ADC和TKI已建立强效标准，疫苗必须证明额外临床价值。正常组织表达意味着高亲和TCR或强佐剂可能产生“靶向正确、组织错误”的毒性。

共享热点突变处于TAA与私人新抗原之间，例如*KRAS* G12D、*TP53* R175H和*PIK3CA*热点既是肿瘤特异，又在多名患者复现。但每个肽仍受特定HLA限制，实际覆盖率是突变频率×HLA频率×表达/呈递概率。仓储式疫苗可显著缩短TAT，代价是抗原数量和人群覆盖有限。

2026年共享抗原路线出现两个重要的阴性读出。Elicio的ELI-002 7P（针对七种KRAS热点肽的两亲性疫苗）在切除后胰腺癌辅助治疗的II期AMPLIFY-7P（n=144，24个美国中心）未达到预设的意向治疗人群无病生存主要终点（2026-06-15）；事后分析显示R0完全切除亚组HR为0.65（p=0.048，中位DFS 23.8对12.8个月，n=121），且突变KRAS特异T细胞反应与DFS强相关（HR 0.22，p<0.0001，n=90），但试验组中R1切除（预后更差）比例为19%对10%，存在基线失衡。公司据此把注册性III期限定在R0人群并增加给药。IO Biotech的IO102-IO103（靶向IDO与PD-L1的免疫调节肽疫苗）联合pembrolizumab的III期研究中位PFS为19.4个月对11.0个月，HR 0.77、p=0.0558，以极小差距未达统计学显著；FDA此后建议不要提交BLA，公司于2026-01-21宣布评估包括合并、资产出售或清算在内的战略方案并大幅裁员，有报道称最终进入清算`[待核实]`。这两个案例共同说明：共享抗原疫苗的“临床有意义但统计不显著”结果在当前监管环境下不足以支持批准，而事后亚组只能用于设计下一项研究。

### 表11-3：共享肿瘤抗原与疫苗开发状态

**十二个共享抗原的表达、癌种和风险**

| 抗原 | 类别 | 主要癌种 | 正常表达 | 开发形式 | 核心问题 |
| --- | --- | --- | --- | --- | --- |
| MAGE-A4 | CTA | 肉瘤、肺癌等 | 睾丸为主 | 肽/蛋白/TCR-T | HLA与异质表达 |
| NY-ESO-1 | CTA | 肉瘤、卵巢癌等 | 生殖组织 | 疫苗/TCR-T | 抗原丢失 |
| PRAME | CTA | 血液瘤/实体瘤 | 低水平多组织 | 肽/TCR-T | 安全窗 |
| WT1 | 分化/过表达抗原 | AML、MDS、实体瘤 | 肾/造血祖细胞低表达 | 肽/DC | 耐受与骨髓风险 |
| hTERT | 普遍肿瘤抗原 | 多癌种 | 干/祖细胞 | DNA/肽/病毒载体 | 免疫原性有限 |
| Survivin | 凋亡调控蛋白 | 多癌种 | 增殖组织低表达 | 肽/DC | 多种剪接体 |
| MUC1 | 异常糖基化抗原 | 乳腺、胰腺等 | 上皮组织 | 糖肽/病毒载体 | 糖型和免疫耐受 |
| HER2 | 过表达受体 | 乳腺、胃癌 | 多上皮低水平 | 肽/DC | 需超越成熟靶向药 |
| PSA | 组织分化抗原 | 前列腺癌 | 正常前列腺 | 痘病毒/DNA | 器官特异但非肿瘤特异 |
| Mesothelin | 过表达抗原 | 间皮瘤、胰腺癌 | 间皮低水平 | 疫苗/细胞治疗 | 可溶性抗原与异质性 |
| *KRAS* G12D | 共享新抗原 | 胰腺/结直肠癌 | 无突变正常表达 | 疫苗/TCR；ELI-002 7P已读出II期 | 特定HLA覆盖；II期ITT人群DFS未达终点 |
| *TP53*热点 | 共享新抗原 | 多癌种 | 突变特异 | 仓储疫苗/TCR | HLA和自然呈递 |

无论是私人还是共享抗原，疫苗通常需要解除肿瘤中的检查点和呈递障碍才能维持功能。

## 11.5 疫苗联合免疫治疗：从克隆启动到表位扩展

疫苗主要增加特异T细胞克隆的数量和多样性，ICI则解除这些克隆在淋巴结或肿瘤中的抑制。组合逻辑在低残留病尤其合理：肿瘤负荷较低、免疫抑制较弱，疫苗可建立记忆；术后复发终点也能检验微转移清除。晚期高负荷肿瘤还可能需要抗VEGF、放疗或溶瘤病毒改善浸润。

疫苗与ADC的协同仍属探索。ADC杀伤可释放突变蛋白和损伤信号，促进树突细胞摄取并产生表位扩展；疫苗预先建立的T细胞可攻击抗原低表达残存细胞。但某些payload造成广泛淋巴细胞减少或髓系抑制，给药时序不当会削弱疫苗反应。机制必须通过抗原特异克隆和肿瘤活检验证。

放疗、化疗和溶瘤病毒也可作为“抗原释放器”。临床设计需要区分每一组件贡献，避免所有患者都接受多种治疗后把免疫反应归因于疫苗。ctDNA微小残留病可富集高复发风险人群并提供早期动力学，但目前不能在多数癌种中自动替代RFS/OS。

失败风险包括抗原选择错误、HLA或*B2M*丢失、免疫优势集中于非关键亚克隆、T细胞不能进入肿瘤以及制造过慢。未来闭环会在复发时重新测序，观察疫苗靶点是否丢失、是否出现表位扩展，并据此追加现货抗原或第二代个体处方。

### 表11-4：癌症疫苗主要公司、平台与联合策略

**十三个疫苗开发主体的技术平台与临床重点（截至2026.Q4）**

| 公司/机构 | 平台 | 代表项目 | 主要联合 | 领先阶段 | 差异化 |
| --- | --- | --- | --- | --- | --- |
| Moderna/MSD | 个体化mRNA-LNP | Intismeran autogene（V940） | Pembrolizumab | III期已达主要终点（2026） | 最多34个新抗原；首个III期阳性个体化疫苗 |
| BioNTech/Genentech | iNeST mRNA-lipoplex | Autogene cevumeran | ICI+化疗 | 胰腺癌II期进行中；CRC II期已终止 | 静脉APC靶向 |
| Gritstone bio | 个体化病毒载体 | GRANITE | ICI+标准治疗 | II期/公司风险 | Prime-boost |
| Nouscom | 猿腺病毒/MVA | NOUS-PEV | ICI | I期 | 个体化载体 |
| NEC/Transgene | AI+病毒载体 | TG4050 | 标准治疗/ICI | II期 | AI表位选择 |
| Geneos | 个体化DNA | GNOS-PV02 | Pembrolizumab | I/II期 | DNA+电穿孔 |
| Evaxion | AI设计疫苗 | EVX-01 | Pembrolizumab | II期（两年数据已读出，三年数据待公布） | 预测平台；ORR 12/16，81%–86%靶点诱导T细胞反应 |
| Elicio Therapeutics | 两亲性共享热点疫苗 | ELI-002 7P | 术后辅助 | II期未达主要终点，计划III期 | 淋巴结靶向；限定R0人群 |
| IO Biotech | 免疫调节肽疫苗 | IO102-IO103 | Pembrolizumab | III期PFS未达显著；公司进入战略方案评估 | 靶向IDO/PD-L1而非肿瘤抗原 |
| ISA Pharmaceuticals | 合成长肽 | ISA101b | ICI | II期 | HPV共享抗原 |
| Ultimovacs | 端粒酶肽 | UV1 | ICI | II期；结果混合 | 现货共享抗原 |
| NCI | 个体化肽/T细胞 | 多项学术研究 | ICI/TIL | 探索 | 机制深度 |
| Dana-Farber/Broad | 长肽NeoVax | NeoVax | ICI | I期 | 持久多克隆免疫 |

> **临床/研究亮点：** **胰腺癌研究证明“冷肿瘤”也能被个体化疫苗启动。**16名接种患者中8名产生高强度新生T细胞反应，并可持续多年；但非随机、小样本和多组件治疗要求后续研究确认临床因果。

## 11.6 2025下半年—2026年关键进展（截至2026-11-12）

这一年半是新抗原疫苗领域“第一次分层”的时期：个体化mRNA加检查点阻断在切除后黑色素瘤中取得首个III期阳性结果，而疫苗单药、共享抗原肽疫苗和部分HPV疫苗路线相继出现阴性或终止。阳性与阴性同时出现，恰好让“疫苗在什么条件下有效”这一问题变得可回答。下表汇总可核实的关键事件。

### 表11-5：新抗原与癌症疫苗关键进展（2025-07至2026-11）

**十项可核实的临床与公司事件**

| 日期 | 事件 | 类型 | 意义/备注 |
| --- | --- | --- | --- |
| 2025下半年 | FDA建议IO Biotech不要就IO102-IO103提交BLA | 监管 | III期中位PFS 19.4对11.0个月，HR 0.77、p=0.0558，差距极小仍不足以支持批准 |
| 2025-09 ESMO | EVX-01两年II期数据：16例中12例客观缓解、4例完全缓解 | 临床 | 应答者中92%在两年时仍在缓解；81%靶点诱导特异T细胞反应（公司口径，小样本） |
| 2026-01-21 | IO Biotech宣布评估合并、资产出售或清算等战略方案并裁员 | 公司 | 后续有清算报道，需核实；提示单一资产疫苗公司的脆弱性 |
| 2026-01 | FDA授予BNT113（HPV16靶向mRNA疫苗）快速通道资格 | 监管 | 依据AHEAD-MERIT早期数据 |
| 2026-06 ASCO / JCO | KEYNOTE-942五年随访：RFS HR 0.510、DMFS HR 0.411 | 临床 | 中位随访60.3个月；OS HR 0.471但不显著；分析为描述性 |
| 2026-06-15 | ELI-002 7P的II期AMPLIFY-7P未达ITT人群DFS主要终点 | 临床 | R0事后亚组HR 0.65（p=0.048）；计划限定R0人群开展III期 |
| 2026-08-19 | INTerpath-001顶线：达到主要终点RFS与关键次要终点DMFS | 临床 | 预设中期分析；1,137例，2:1随机 |
| 2026-08-28 | BioNTech终止autogene cevumeran在ctDNA阳性切除CRC的II期研究 | 临床 | DSMB提示总生存数值失衡；疫苗单药、无ICI背景 |
| 2026-10-13 | BNT113联合pembrolizumab在AHEAD-MERIT未达PFS共同主要终点 | 临床 | 独立数据监查委员会建议研究继续，以总生存为第二个共同主要终点 |
| 2026-10 ESMO | INTerpath-001详细数据：RFS HR 0.58、2年RFS 82.2%对70% | 临床 | DMFS HR 0.62；OS HR 0.77（p=0.33）未成熟；预设6个月后敏感性分析HR 0.42 |

最重要的结构性变化是“证据等级”的跃升。在2025.Q2版本中，这一领域最强的证据仍是KEYNOTE-942的IIb期HR 0.561（95% CI跨1）；到2026年11月，INTerpath-001已在1,137例随机双盲人群中给出RFS HR 0.58（95% CI 0.45–0.75，p<0.001）与DMFS HR 0.62（p=0.002）。写作与教学上应相应调整：个体化新抗原疫苗不再是“仅有免疫原性与II期信号”的概念，而是在特定场景（完全切除的高风险黑色素瘤、联合pembrolizumab）拥有III期无复发生存证据的模式。但总生存HR 0.77（p=0.33）尚不成熟，制造周转时间、支付与可及性问题也未被试验解答。

与此同时的多项阴性结果划出了适用边界。autogene cevumeran在ctDNA阳性结直肠癌以单药对比观察被终止（总生存数值失衡）；ELI-002 7P在胰腺癌辅助治疗未达ITT主要终点；IO102-IO103以p=0.0558之差未达显著并直接导致公司进入战略处置；BNT113未达PFS共同主要终点。把这些与INTerpath-001并列可以看出三个共同点：阳性结果都带ICI背景、都在肿瘤负荷极低的术后窗口、且都以复发而非缓解为终点。反之，疫苗单药、晚期高负荷或仅以免疫调节（而非肿瘤抗原）为机制的设计，到目前为止尚未产生阳性III期。

对新抗原选择与平台研发的含义是：下一阶段的竞争点不再是“能否诱导T细胞反应”（多个平台均已证明，EVX-01报告81%–86%的靶点可诱导反应），而是“诱导的克隆能否在ICI背景下清除微小残留病”。这要求把ctDNA动力学、克隆性筛选和给药时序一起纳入试验设计；INTerpath-001预设的“6个月后”敏感性分析（HR 0.42）就提示免疫建立需要时间，早期复发事件会稀释观察到的效应。这类设计细节在阅读后续读出时比单一HR更值得关注。

## 主要参考来源

- Weber JS, et al. Individualised neoantigen therapy mRNA-4157 plus pembrolizumab versus pembrolizumab monotherapy in resected melanoma. Lancet. 2024;403:632–644. [DOI](https://doi.org/10.1016/S0140-6736(23)02268-7)
- Rojas LA, et al. Personalized RNA neoantigen vaccines stimulate T cells in pancreatic cancer. Nature. 2023;618:144–150. [DOI](https://doi.org/10.1038/s41586-023-06063-y)
- Liu S, et al. RNA neoantigen vaccines prime long-lived CD8+ T cells in pancreatic cancer. Nature. 2025. [DOI](https://doi.org/10.1038/s41586-024-08508-4)
- Sahin U, et al. Personalized RNA mutanome vaccines mobilize poly-specific therapeutic immunity against cancer. Nature. 2017;547:222–226. [DOI](https://doi.org/10.1038/nature23003)
- Ott PA, et al. An immunogenic personal neoantigen vaccine for patients with melanoma. Nature. 2017;547:217–221. [DOI](https://doi.org/10.1038/nature22991)
- ClinicalTrials.gov. INTerpath-001: V940 plus pembrolizumab in high-risk melanoma, NCT05933577. [Registry](https://clinicaltrials.gov/study/NCT05933577)
- CancerNetwork. INTerpath-001 Data Detail Survival, Subgroup, and Safety Findings in Melanoma (ESMO 2026). 2026. [Press release](https://www.cancernetwork.com/view/interpath-001-data-detail-survival-subgroup-and-safety-findings-in-melanoma)
- CancerNetwork. Novel Cancer Vaccine Meets Primary, Secondary End Points in Resected Melanoma. 2026. [Press release](https://www.cancernetwork.com/view/novel-cancer-vaccine-meets-primary-secondary-end-points-in-resected-melanoma)
- Targeted Oncology. Adjuvant Intismeran Plus Pembrolizumab Shows Durable Benefit at 5 Years in Melanoma (KEYNOTE-942). 2026. [Press release](https://www.targetedonc.com/view/adjuvant-intismeran-pembro-shows-durable-benefit-at-5-years-in-melanoma)
- CancerNetwork. Autogene Cevumeran Trial Terminated in Resected Colorectal Cancer. 2026. [Press release](https://www.cancernetwork.com/view/autogene-cevumeran-trial-terminated-in-resected-colorectal-cancer)
- CancerNetwork. BNT113 Plus Pembrolizumab Misses PFS End Point in HPV16+ Head and Neck Cancer. 2026. [Press release](https://www.cancernetwork.com/view/bnt113-pembrolizumab-misses-pfs-end-point-in-hpv16-head-and-neck-cancer)
- Elicio Therapeutics. Elicio Therapeutics Reports Results from Phase 2 AMPLIFY-7P Study and Outlines Refined Phase 3 Development Strategy for ELI-002 7P. 2026. [Press release](https://www.biospace.com/press-releases/elicio-therapeutics-reports-results-from-phase-2-amplify-7p-study-and-outlines-refined-phase-3-development-strategy-for-eli-002-7p-in-adjuvant-pancreatic-cancer)
- European Biotechnology. IO Biotech weighs strategic options months after FDA advises against melanoma vaccine filing. 2026. [Press release](https://european-biotechnology.com/latest-news/io-biotech-weighs-strategic-options-months-after-fda-advises-against-melanoma-vaccine-filing/)
- Evaxion Biotech. Evaxion reports 75% Objective Response Rate in phase 2 trial with AI-designed personalized cancer vaccine EVX-01. 2025. [Press release](https://www.biospace.com/press-releases/evaxion-reports-75-objective-response-rate-in-phase-2-trial-with-ai-designed-personalized-cancer-vaccine-evx-01)
- ClinicalTrials.gov. IMCODE003: Adjuvant autogene cevumeran plus atezolizumab and mFOLFIRINOX in resected PDAC, NCT05968326. [Registry](https://clinicaltrials.gov/study/NCT05968326)


---

内容版本：2026.Q4（证据截止2026-11-12）。下次更新建议：2027.Q2，重点复核 FDA 标签、临床阶段和公司交易状态。
