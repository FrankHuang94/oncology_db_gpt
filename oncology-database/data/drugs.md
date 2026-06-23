# 药物数据库

本表整理 OncoAtlas 涉及的代表性肿瘤药物，包括作用类别、靶点、开发公司、FDA 首次批准时间、适应症、生物标志物、关键试验和机制摘要。

## 元数据

| 字段 | 值 |
| --- | --- |
| title | OncoAtlas 药物数据库 |
| version | 2025.Q2 |
| last_verified | 2025-06-30 |
| primary_source | https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancerhematologic-malignancies-approval-notifications |
| disclaimer | 适应症为教学性摘要，临床使用须以最新FDA标签和当地监管批准为准。 |

## 数据表（共 55 条）

| ID | 通用名 | 商品名 | 开发代码 | 类别 | 靶点 | 药物类型 | 公司 | FDA首次批准 | 适应症 | 生物标志物 | 关键试验 | 黑框警告 | 机制摘要 | 章节 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| pembrolizumab | 帕博利珠单抗 | Keytruda | MK-3475 | ICI | PD-1 | Monoclonal Antibody | Merck/MSD | 2014-09-04 | 黑色素瘤；NSCLC；HNSCC；MSI-H/dMMR泛癌种 | PD-L1 TPS/CPS, MSI-H/dMMR, TMB-H | KEYNOTE-024；KEYNOTE-189；KEYNOTE-590 | 否 | 阻断PD-1与PD-L1/PD-L2结合，解除T细胞抑制。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| nivolumab | 纳武利尤单抗 | Opdivo | BMS-936558 | ICI | PD-1 | Monoclonal Antibody | Bristol Myers Squibb | 2014-12-22 | 黑色素瘤；NSCLC；RCC；cHL；胃癌 | 依适应症而定 | CheckMate-057；CheckMate-214；CheckMate-649 | 否 | 人源IgG4抗体阻断PD-1抑制性信号。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| ipilimumab | 伊匹木单抗 | Yervoy | MDX-010 | ICI | CTLA-4 | Monoclonal Antibody | Bristol Myers Squibb | 2011-03-25 | 黑色素瘤；RCC联合治疗；CRC联合治疗；NSCLC联合治疗 | 部分适应症需MSI-H/dMMR | MDX010-20；CheckMate-214；CheckMate-227 | 否 | 阻断CTLA-4，增强T细胞启动和克隆扩增。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| atezolizumab | 阿替利珠单抗 | Tecentriq | MPDL3280A | ICI | PD-L1 | Monoclonal Antibody | Roche/Genentech | 2016-05-18 | NSCLC；SCLC；HCC；黑色素瘤 | 依适应症使用SP142/SP263 | IMpower110；IMpower133；IMbrave150 | 否 | 阻断PD-L1与PD-1及B7.1相互作用。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| durvalumab | 度伐利尤单抗 | Imfinzi | MEDI4736 | ICI | PD-L1 | Monoclonal Antibody | AstraZeneca | 2017-05-01 | III期NSCLC巩固；SCLC；胆道癌；HCC | 多数适应症不强制 | PACIFIC；CASPIAN；TOPAZ-1；HIMALAYA | 否 | 高亲和力结合PD-L1并保留PD-L2信号。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| avelumab | 阿维鲁单抗 | Bavencio | MSB0010718C | ICI | PD-L1 | Monoclonal Antibody | Merck KGaA/Pfizer | 2017-03-23 | Merkel细胞癌；尿路上皮癌维持；RCC联合治疗 | 非普遍强制 | JAVELIN Merkel 200；JAVELIN Bladder 100；JAVELIN Renal 101 | 否 | 阻断PD-L1并保留Fc介导效应潜力。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| cemiplimab | 西米普利单抗 | Libtayo | REGN2810 | ICI | PD-1 | Monoclonal Antibody | Regeneron | 2018-09-28 | 皮肤鳞癌；基底细胞癌；NSCLC | NSCLC单药依PD-L1 | EMPOWER-CSCC-1；EMPOWER-Lung 1 | 否 | 阻断PD-1受体介导的免疫抑制。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| dostarlimab | 多塔利单抗 | Jemperli | TSR-042 | ICI | PD-1 | Monoclonal Antibody | GSK | 2021-04-22 | dMMR子宫内膜癌；dMMR实体瘤；子宫内膜癌联合化疗 | dMMR/MSI-H或依标签 | GARNET；RUBY | 否 | PD-1阻断抗体，恢复效应T细胞功能。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| retifanlimab | 瑞塔凡利单抗 | Zynyz | INCMGA00012 | ICI | PD-1 | Monoclonal Antibody | Incyte | 2023-03-22 | Merkel细胞癌；肛管鳞癌 | 非普遍强制 | POD1UM-201；POD1UM-303 | 否 | 人源化PD-1阻断抗体。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| relatlimab-nivolumab | 瑞拉利单抗/纳武利尤单抗 | Opdualag | BMS-986016/BMS-936558 | Dual ICI | LAG-3 + PD-1 | Fixed-dose Antibody Combination | Bristol Myers Squibb | 2022-03-18 | 不可切除或转移性黑色素瘤 | 无强制CDx | RELATIVITY-047 | 否 | 同时解除LAG-3和PD-1介导的T细胞耗竭。 | [02-immunotherapy.md](../chapters/02-immunotherapy.md) |
| tisagenlecleucel | 替沙仑赛 | Kymriah | CTL019 | CAR-T | CD19 | Autologous CAR-T | Novartis | 2017-08-30 | B-ALL；DLBCL；滤泡性淋巴瘤 | CD19阳性 | ELIANA；JULIET；ELARA | 是 | 4-1BB共刺激的自体CD19 CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| axicabtagene-ciloleucel | 阿基仑赛 | Yescarta | KTE-C19 | CAR-T | CD19 | Autologous CAR-T | Kite/Gilead | 2017-10-18 | 大B细胞淋巴瘤；滤泡性淋巴瘤 | CD19阳性 | ZUMA-1；ZUMA-7；ZUMA-5 | 是 | CD28共刺激的自体CD19 CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| brexucabtagene-autoleucel | 贝瑞仑赛 | Tecartus | KTE-X19 | CAR-T | CD19 | Autologous CAR-T | Kite/Gilead | 2020-07-24 | 套细胞淋巴瘤；成人B-ALL | CD19阳性 | ZUMA-2；ZUMA-3 | 是 | 采用T细胞富集制造流程的CD28型CD19 CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| lisocabtagene-maraleucel | 利索卡布塔基因马来赛 | Breyanzi | JCAR017 | CAR-T | CD19 | Autologous CAR-T | Bristol Myers Squibb/Juno | 2021-02-05 | 大B细胞淋巴瘤；CLL/SLL；滤泡性淋巴瘤 | CD19阳性 | TRANSCEND NHL 001；TRANSFORM | 是 | 固定CD4:CD8比例、4-1BB共刺激的CD19 CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| idecabtagene-vicleucel | 艾基维仑赛 | Abecma | bb2121 | CAR-T | BCMA | Autologous CAR-T | BMS/2seventy bio | 2021-03-26 | 复发/难治多发性骨髓瘤 | BCMA表达 | KarMMa；KarMMa-3 | 是 | 4-1BB共刺激的自体BCMA CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| ciltacabtagene-autoleucel | 西达基奥仑赛 | Carvykti | JNJ-68284528 | CAR-T | BCMA | Autologous CAR-T | Janssen/Legend Biotech | 2022-02-28 | 复发/难治多发性骨髓瘤 | BCMA表达 | CARTITUDE-1；CARTITUDE-4 | 是 | 含两个BCMA结合表位的4-1BB型CAR-T。 | [03-car-t.md](../chapters/03-car-t.md) |
| obecabtagene-autoleucel | 奥贝卡布塔基因自体赛 | Aucatzyl | AUTO1 | CAR-T | CD19 | Autologous CAR-T | Autolus | 2024-11-08 | 成人复发/难治B-ALL | CD19阳性 | FELIX | 是 | 采用快速脱离结合域设计以降低过度激活。 | [03-car-t.md](../chapters/03-car-t.md) |
| ado-trastuzumab-emtansine | 恩美曲妥珠单抗 | Kadcyla | T-DM1 | ADC | HER2 | Antibody-drug Conjugate | Roche/Genentech | 2013-02-22 | HER2阳性乳腺癌 | HER2 IHC/ISH | EMILIA；KATHERINE | 是 | 曲妥珠单抗经不可裂解连接子偶联DM1，平均DAR约3.5。 | [04-adc.md](../chapters/04-adc.md) |
| fam-trastuzumab-deruxtecan | 德曲妥珠单抗 | Enhertu | DS-8201a | ADC | HER2 | Antibody-drug Conjugate | Daiichi Sankyo/AstraZeneca | 2019-12-20 | HER2阳性/低表达乳腺癌；HER2突变NSCLC；HER2阳性胃癌；HER2阳性实体瘤 | HER2 IHC/ISH或突变 | DESTINY-Breast03；DESTINY-Breast04；DESTINY-Lung02 | 是 | 可裂解四肽连接子偶联拓扑异构酶I抑制剂DXd，DAR约8。 | [04-adc.md](../chapters/04-adc.md) |
| sacituzumab-govitecan | 戈沙妥珠单抗 | Trodelvy | IMMU-132 | ADC | TROP-2 | Antibody-drug Conjugate | Gilead/Immunomedics | 2020-04-22 | 三阴性乳腺癌；HR+/HER2-乳腺癌 | 无强制TROP-2检测 | ASCENT；TROPiCS-02 | 是 | 水解型连接子偶联SN-38，具旁观者效应。 | [04-adc.md](../chapters/04-adc.md) |
| enfortumab-vedotin | 维恩妥尤单抗 | Padcev | ASG-22ME | ADC | Nectin-4 | Antibody-drug Conjugate | Astellas/Seagen | 2019-12-18 | 局部晚期或转移性尿路上皮癌 | 无强制CDx | EV-201；EV-301；EV-302 | 是 | 蛋白酶可裂解连接子偶联MMAE。 | [04-adc.md](../chapters/04-adc.md) |
| brentuximab-vedotin | 维布妥昔单抗 | Adcetris | SGN-35 | ADC | CD30 | Antibody-drug Conjugate | Seagen/Takeda | 2011-08-19 | 经典霍奇金淋巴瘤；系统性间变性大细胞淋巴瘤；CD30阳性PTCL | CD30表达 | ECHELON-1；ECHELON-2 | 是 | CD30抗体经vc-PABC连接子偶联MMAE。 | [04-adc.md](../chapters/04-adc.md) |
| polatuzumab-vedotin | 维泊妥珠单抗 | Polivy | DCDS4501A | ADC | CD79b | Antibody-drug Conjugate | Roche/Genentech | 2019-06-10 | DLBCL | B细胞表型 | GO29365；POLARIX | 否 | CD79b抗体偶联MMAE，靶向B细胞受体复合体。 | [04-adc.md](../chapters/04-adc.md) |
| inotuzumab-ozogamicin | 奥加伊妥珠单抗 | Besponsa | CMC-544 | ADC | CD22 | Antibody-drug Conjugate | Pfizer | 2017-08-17 | 复发/难治B细胞前体ALL | CD22阳性 | INO-VATE ALL | 是 | CD22抗体偶联calicheamicin，诱导DNA双链断裂。 | [04-adc.md](../chapters/04-adc.md) |
| gemtuzumab-ozogamicin | 吉妥珠单抗奥唑米星 | Mylotarg | CMA-676 | ADC | CD33 | Antibody-drug Conjugate | Pfizer | 2000-05-17 | CD33阳性AML | CD33表达 | ALFA-0701 | 是 | CD33抗体偶联calicheamicin；曾撤市后以优化剂量重新批准。 | [04-adc.md](../chapters/04-adc.md) |
| loncastuximab-tesirine | 隆卡妥昔单抗 | Zynlonta | ADCT-402 | ADC | CD19 | Antibody-drug Conjugate | ADC Therapeutics | 2021-04-23 | 复发/难治大B细胞淋巴瘤 | CD19阳性 | LOTIS-2 | 否 | CD19抗体偶联PBD二聚体tesirine。 | [04-adc.md](../chapters/04-adc.md) |
| mirvetuximab-soravtansine | 索米妥昔单抗 | Elahere | IMGN853 | ADC | FRα | Antibody-drug Conjugate | AbbVie/ImmunoGen | 2022-11-14 | FRα阳性铂耐药卵巢癌 | VENTANA FOLR1 RxDx | SORAYA；MIRASOL | 是 | FRα抗体经可裂解连接子偶联DM4。 | [04-adc.md](../chapters/04-adc.md) |
| datopotamab-deruxtecan | 德达博妥单抗 | Datroway | DS-1062a | ADC | TROP-2 | Antibody-drug Conjugate | Daiichi Sankyo/AstraZeneca | 2025-01-17 | 不可切除或转移性HR+/HER2-乳腺癌 | HR/HER2状态 | TROPION-Breast01 | 否 | TROP-2抗体偶联DXd拓扑异构酶I抑制载荷。 | [04-adc.md](../chapters/04-adc.md) |
| blinatumomab | 贝林妥欧单抗 | Blincyto | MT103 | Bispecific | CD19 × CD3 | BiTE | Amgen | 2014-12-03 | B细胞前体ALL | CD19阳性 | TOWER；BLAST；E1910 | 是 | 无Fc双链BiTE持续衔接CD3 T细胞与CD19 B细胞。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| teclistamab | 特立妥单抗 | Tecvayli | JNJ-64007957 | Bispecific | BCMA × CD3 | IgG-like Bispecific | Janssen | 2022-10-25 | 复发/难治多发性骨髓瘤 | 无强制CDx | MajesTEC-1 | 是 | 将CD3阳性T细胞重定向至BCMA阳性骨髓瘤细胞。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| mosunetuzumab | 莫妥珠单抗 | Lunsumio | RG7828 | Bispecific | CD20 × CD3 | IgG-like Bispecific | Roche/Genentech | 2022-12-22 | 复发/难治滤泡性淋巴瘤 | CD20阳性 | GO29781 | 是 | 全长IgG样CD20×CD3 T细胞衔接器。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| epcoritamab | 艾可瑞妥单抗 | Epkinly | GEN3013 | Bispecific | CD20 × CD3 | DuoBody Bispecific | Genmab/AbbVie | 2023-05-19 | DLBCL；滤泡性淋巴瘤 | CD20阳性 | EPCORE NHL-1 | 是 | 皮下注射DuoBody CD20×CD3双抗。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| glofitamab | 格菲妥单抗 | Columvi | RG6026 | Bispecific | CD20 × CD3 | 2:1 IgG-like Bispecific | Roche/Genentech | 2023-06-15 | 复发/难治DLBCL | CD20阳性 | NP30179 | 是 | 两个CD20结合臂加一个CD3结合臂的2:1双抗。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| elranatamab | 埃拉纳妥单抗 | Elrexfio | PF-06863135 | Bispecific | BCMA × CD3 | IgG-like Bispecific | Pfizer | 2023-08-14 | 复发/难治多发性骨髓瘤 | 无强制CDx | MagnetisMM-3 | 是 | 皮下注射BCMA×CD3双抗，采用递增给药。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| talquetamab | 塔奎妥单抗 | Talvey | JNJ-64407564 | Bispecific | GPRC5D × CD3 | IgG-like Bispecific | Janssen | 2023-08-09 | 复发/难治多发性骨髓瘤 | 无强制CDx | MonumenTAL-1 | 是 | 靶向GPRC5D并募集CD3 T细胞。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| amivantamab | 埃万妥单抗 | Rybrevant | JNJ-61186372 | Bispecific | EGFR × MET | IgG-like Bispecific | Janssen | 2021-05-21 | EGFR exon20插入或特定EGFR突变NSCLC | FDA批准EGFR检测 | CHRYSALIS；MARIPOSA；PAPILLON | 否 | 双重阻断EGFR/MET并促进受体降解和免疫效应。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| zenocutuzumab | 泽尼达妥单抗 | Bizengri | MCLA-128 | Bispecific | HER2 × HER3 | Biclonics Bispecific | Merus | 2024-12-04 | NRG1融合NSCLC；NRG1融合胰腺癌 | NRG1融合 | eNRGy | 是 | 阻断HER2/HER3异二聚体和NRG1驱动信号。 | [05-bispecific.md](../chapters/05-bispecific.md) |
| imatinib | 伊马替尼 | Gleevec | STI571 | Targeted Small Molecule | BCR-ABL, KIT, PDGFR | Type II Kinase Inhibitor | Novartis | 2001-05-10 | CML；Ph+ ALL；GIST | BCR-ABL或KIT/PDGFRA | IRIS | 否 | 稳定激酶非活性构象，开创分子靶向治疗范式。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| gefitinib | 吉非替尼 | Iressa | ZD1839 | Targeted Small Molecule | EGFR | First-generation EGFR TKI | AstraZeneca | 2003-05-05 | EGFR突变NSCLC | EGFR敏感突变 | IPASS | 否 | 可逆竞争ATP结合位点的一代EGFR抑制剂。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| osimertinib | 奥希替尼 | Tagrisso | AZD9291 | Targeted Small Molecule | EGFR | Third-generation covalent EGFR TKI | AstraZeneca | 2015-11-13 | EGFR突变NSCLC | EGFR exon19del/L858R及历史T790M | FLAURA；ADAURA；LAURA | 否 | 共价结合C797，选择性抑制敏感突变和T790M。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| sotorasib | 索托拉西布 | Lumakras | AMG 510 | Targeted Small Molecule | KRAS G12C | Covalent KRAS inhibitor | Amgen | 2021-05-28 | KRAS G12C NSCLC；KRAS G12C CRC联合治疗 | KRAS G12C | CodeBreaK 100；CodeBreaK 200；CodeBreaK 300 | 否 | 共价占据KRAS G12C switch-II口袋并锁定GDP状态。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| adagrasib | 阿达格拉西布 | Krazati | MRTX849 | Targeted Small Molecule | KRAS G12C | Covalent KRAS inhibitor | BMS/Mirati | 2022-12-12 | KRAS G12C NSCLC；KRAS G12C CRC联合西妥昔单抗 | KRAS G12C | KRYSTAL-1 | 否 | 不可逆结合突变半胱氨酸，具有较长半衰期和CNS暴露。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| alectinib | 阿来替尼 | Alecensa | CH5424802 | Targeted Small Molecule | ALK, RET | Second-generation ALK TKI | Roche/Genentech | 2015-12-11 | ALK阳性NSCLC | ALK重排 | ALEX；ALINA | 否 | 高选择性ALK抑制剂，具有良好中枢神经系统活性。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| lorlatinib | 洛拉替尼 | Lorbrena | PF-06463922 | Targeted Small Molecule | ALK, ROS1 | Third-generation macrocyclic TKI | Pfizer | 2018-11-02 | ALK阳性NSCLC | ALK重排 | CROWN | 否 | 大环结构提升血脑屏障穿透并覆盖多种ALK耐药突变。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| selpercatinib | 塞普替尼 | Retevmo | LOXO-292 | Targeted Small Molecule | RET | Selective RET inhibitor | Eli Lilly/Loxo | 2020-05-08 | RET融合NSCLC/甲状腺癌；RET突变MTC | RET融合或突变 | LIBRETTO-001；LIBRETTO-431 | 否 | 选择性抑制RET并覆盖部分门控位点突变。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| larotrectinib | 拉罗替尼 | Vitrakvi | LOXO-101 | Targeted Small Molecule | TRKA/B/C | Selective TRK inhibitor | Bayer/Loxo | 2018-11-26 | NTRK融合泛实体瘤 | NTRK融合 | LOXO-TRK-14001；SCOUT；NAVIGATE | 否 | 首批基于基因融合而非组织来源的泛癌种靶向药。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| venetoclax | 维奈克拉 | Venclexta | ABT-199 | Targeted Small Molecule | BCL-2 | BH3 mimetic | AbbVie/Genentech | 2016-04-11 | CLL/SLL；AML联合治疗 | 依适应症；CLL可分层TP53/IGHV | MURANO；CLL14；VIALE-A | 否 | 选择性置换BCL-2结合的促凋亡BH3蛋白，恢复线粒体凋亡。 | [06-targeted-therapy.md](../chapters/06-targeted-therapy.md) |
| olaparib | 奥拉帕利 | Lynparza | AZD2281 | Targeted Small Molecule | PARP1/2 | PARP inhibitor | AstraZeneca/Merck | 2014-12-19 | 卵巢癌；乳腺癌；胰腺癌；前列腺癌 | BRCA1/2或HRR/HRD依适应症 | SOLO-1；OlympiAD；POLO；PROfound | 否 | 抑制PARP催化活性并捕获PARP-DNA复合物，在HRD细胞中造成合成致死。 | [14-emerging-routes.md](../chapters/14-emerging-routes.md) |
| tazemetostat | 他泽美司他 | Tazverik | EPZ-6438 | Epigenetic | EZH2 | Methyltransferase inhibitor | Ipsen/Epizyme | 2020-01-23 | 上皮样肉瘤；滤泡性淋巴瘤 | EZH2突变用于部分FL人群 | EZH-202 | 否 | 竞争性抑制EZH2甲基转移酶，降低H3K27me3。 | [14-emerging-routes.md](../chapters/14-emerging-routes.md) |
| lifileucel | 利非利尤赛 | Amtagvi | LN-144 | TIL | Polyclonal tumor antigens | Autologous TIL therapy | Iovance Biotherapeutics | 2024-02-16 | 既往治疗后的不可切除或转移性黑色素瘤 | 可切除肿瘤组织及临床适用性 | C-144-01 | 是 | 从肿瘤组织扩增多克隆浸润淋巴细胞，经清淋后回输并配合IL-2。 | [08-gene-therapy.md](../chapters/08-gene-therapy.md) |
| tebentafusp | 替本达福司普 | Kimmtrak | IMCgp100 | TCR engager | gp100 peptide-HLA-A*02:01 × CD3 | ImmTAC bispecific fusion | Immunocore | 2022-01-25 | HLA-A*02:01阳性不可切除或转移性葡萄膜黑色素瘤 | HLA-A*02:01 | IMCgp100-202 | 是 | 可溶性高亲和TCR识别gp100肽-MHC并通过抗CD3招募T细胞。 | [08-gene-therapy.md](../chapters/08-gene-therapy.md) |
| talimogene-laherparepvec | 塔利莫基因拉赫帕瑞普维克 | Imlygic | T-VEC | Oncolytic virus | Tumor lysis + GM-CSF | Modified HSV-1 | Amgen | 2015-10-27 | 黑色素瘤可注射皮肤/淋巴结病灶 | 可注射病灶 | OPTiM | 否 | 工程化HSV-1在肿瘤内复制裂解并表达GM-CSF。 | [08-gene-therapy.md](../chapters/08-gene-therapy.md) |
| lutetium-vipivotide-tetraxetan | 镥[177Lu]维匹沃肽四羟基乙酸 | Pluvicto | 177Lu-PSMA-617 | Radiopharmaceutical | PSMA | Beta-emitting radioligand | Novartis/AAA | 2022-03-23 | PSMA阳性转移性去势抵抗性前列腺癌 | PSMA PET阳性 | VISION；PSMAfore | 否 | PSMA小分子配体递送Lu-177 β辐射至肿瘤及邻近细胞。 | [09-radiopharm.md](../chapters/09-radiopharm.md) |
| lutetium-dotatate | 镥[177Lu]奥曲肽 | Lutathera | 177Lu-DOTATATE | Radiopharmaceutical | SSTR2 | Beta-emitting peptide receptor radionuclide therapy | Novartis/AAA | 2018-01-26 | SSTR阳性胃肠胰神经内分泌肿瘤 | SSTR显像阳性 | NETTER-1 | 否 | 生长抑素类似物将Lu-177递送至SSTR阳性细胞。 | [09-radiopharm.md](../chapters/09-radiopharm.md) |
| radium-ra-223-dichloride | 二氯化镭-223 | Xofigo | Ra-223 | Radiopharmaceutical | Bone mineral | Alpha-emitting calcium mimetic | Bayer | 2013-05-15 | 伴症状性骨转移、无已知内脏转移的mCRPC | 骨显像/临床选择 | ALSYMPCA | 否 | 钙模拟物沉积于高骨转换区，以短程α粒子造成双链DNA断裂。 | [09-radiopharm.md](../chapters/09-radiopharm.md) |

---

数据口径：本表由原结构化数据转换为 Markdown，便于 GitHub 直接阅读。快速变化字段需回到 FDA、ClinicalTrials.gov、公司公告和同行评议论文复核。
