const WORDS = {
    "1": {
        "word": "create",
        "mean": "を創り出す；を引き起こす",
        "number": 1
    },
    "2": {
        "word": "increase",
        "mean": "増加する（⇔ decrease ⇒ 223）；を増やす",
        "number": 2
    },
    "3": {
        "word": "improve",
        "mean": "を向上させる；よくなる",
        "number": 3
    },
    "4": {
        "word": "mean",
        "mean": "を意味する；（...する）つもりである（to do）",
        "number": 4
    },
    "5": {
        "word": "own",
        "mean": "を所有している；（事実・罪など）を認める",
        "number": 5
    },
    "6": {
        "word": "include",
        "mean": "を含む（⇔ exclude ⇒ 1009）",
        "number": 6
    },
    "7": {
        "word": "consider",
        "mean": "を見なす；について考える",
        "number": 7
    },
    "8": {
        "word": "allow",
        "mean": "を許す；を与える；（～を）考慮に入れる（for）",
        "number": 8
    },
    "9": {
        "word": "suggest",
        "mean": "を提案する；を暗示する",
        "number": 9
    },
    "10": {
        "word": "produce",
        "mean": "を生産する；を取り出す",
        "number": 10
    },
    "11": {
        "word": "decide",
        "mean": "を決める；に決着をつける",
        "number": 11
    },
    "12": {
        "word": "offer",
        "mean": "を提供する，申し出る",
        "number": 12
    },
    "13": {
        "word": "require",
        "mean": "を要求する；を必要とする",
        "number": 13
    },
    "14": {
        "word": "share",
        "mean": "を共有する；を分担する",
        "number": 14
    },
    "15": {
        "word": "store",
        "mean": "を保存する；を蓄える",
        "number": 15
    },
    "16": {
        "word": "tend",
        "mean": "傾向がある；を世話する",
        "number": 16
    },
    "17": {
        "word": "concern",
        "mean": "〔受身形で〕心配している；〔受身形で〕（～に）関係する（with）；に関連する",
        "number": 17
    },
    "18": {
        "word": "describe",
        "mean": "について述べる，を説明する",
        "number": 18
    },
    "19": {
        "word": "involve",
        "mean": "を関与させる；を伴う",
        "number": 19
    },
    "20": {
        "word": "reduce",
        "mean": "を減らす；を（～に）変える（to）",
        "number": 20
    },
    "21": {
        "word": "design",
        "mean": "を設計する；を計画する",
        "number": 21
    },
    "22": {
        "word": "force",
        "mean": "に強いる；を強要する",
        "number": 22
    },
    "23": {
        "word": "limit",
        "mean": "を制限［規制］する",
        "number": 23
    },
    "24": {
        "word": "bear",
        "mean": "に耐える（≒ endure ⇒ 824）；を負う；を産む；を（心に）抱く",
        "number": 24
    },
    "25": {
        "word": "affect",
        "mean": "に影響を及ぼす（≒ influence ⇒ 49）；を感動させる",
        "number": 25
    },
    "26": {
        "word": "deal",
        "mean": "〔deal withで〕を処理する；〔deal inで〕を商う；を分配する",
        "number": 26
    },
    "27": {
        "word": "avoid",
        "mean": "を避ける",
        "number": 27
    },
    "28": {
        "word": "relate",
        "mean": "を関連づける；（～に）関連する（to）",
        "number": 28
    },
    "29": {
        "word": "realize",
        "mean": "に気づく；を実現する",
        "number": 29
    },
    "30": {
        "word": "encourage",
        "mean": "を奨励する；を励ます（⇔ discourage ⇒ 706）",
        "number": 30
    },
    "31": {
        "word": "compare",
        "mean": "を比較する；を（～に）たとえる（to）",
        "number": 31
    },
    "32": {
        "word": "measure",
        "mean": "を測る；を（比較して）評価する",
        "number": 32
    },
    "33": {
        "word": "exist",
        "mean": "存在する；生存する",
        "number": 33
    },
    "34": {
        "word": "mark",
        "mean": "に印をつける；を（記号で）示す；に汚れをつける",
        "number": 34
    },
    "35": {
        "word": "challenge",
        "mean": "に異議を唱える；（人）に挑む",
        "number": 35
    },
    "36": {
        "word": "depend",
        "mean": "頼る；～次第である",
        "number": 36
    },
    "37": {
        "word": "object",
        "mean": "反対する；（...）と言って反対する（that節）",
        "number": 37
    },
    "38": {
        "word": "demand",
        "mean": "を要求する",
        "number": 38
    },
    "39": {
        "word": "found",
        "mean": "を設立する；（理論など）を（～に基づいて）築く（on）",
        "number": 39
    },
    "40": {
        "word": "complete",
        "mean": "を完成させる，仕上げる",
        "number": 40
    },
    "41": {
        "word": "idea",
        "mean": "考え，思いつき；理解；見解；概念",
        "number": 41
    },
    "42": {
        "word": "accord",
        "mean": "一致；合意，協定",
        "number": 42
    },
    "43": {
        "word": "company",
        "mean": "会社；〔集合的に〕仲間；（仲間と）一緒にいること；一座",
        "number": 43
    },
    "44": {
        "word": "interest",
        "mean": "興味；利子；利害",
        "number": 44
    },
    "45": {
        "word": "research",
        "mean": "（～についての）研究，調査（into / on / in）",
        "number": 45
    },
    "46": {
        "word": "cause",
        "mean": "原因（⇔ effect ⇒ 48）；理由；大義",
        "number": 46
    },
    "47": {
        "word": "reason",
        "mean": "理由；（...する）根拠（to do）；理性；分別",
        "number": 47
    },
    "48": {
        "word": "effect",
        "mean": "影響，効果；結果",
        "number": 48
    },
    "49": {
        "word": "influence",
        "mean": "影響（力）",
        "number": 49
    },
    "50": {
        "word": "situation",
        "mean": "状況；（人の置かれた）立場",
        "number": 50
    },
    "51": {
        "word": "environment",
        "mean": "環境（≒ surroundings）",
        "number": 51
    },
    "52": {
        "word": "skill",
        "mean": "技能；熟練",
        "number": 52
    },
    "53": {
        "word": "matter",
        "mean": "事柄；問題；〔～s〕事態；〔the ～〕困難；物質",
        "number": 53
    },
    "54": {
        "word": "view",
        "mean": "（～についての）見解（on / about）；（～に対する）（特定の）見方（of）；眺め",
        "number": 54
    },
    "55": {
        "word": "value",
        "mean": "価値；価格；評価；〔～s〕価値観",
        "number": 55
    },
    "56": {
        "word": "species",
        "mean": "（生物の）種；種類",
        "number": 56
    },
    "57": {
        "word": "thought",
        "mean": "考え；思考",
        "number": 57
    },
    "58": {
        "word": "knowledge",
        "mean": "知識；知っていること；認識",
        "number": 58
    },
    "59": {
        "word": "memory",
        "mean": "記憶（力）；（～の）思い出（of）",
        "number": 59
    },
    "60": {
        "word": "practice",
        "mean": "実践，実行；（社会の）慣習；練習",
        "number": 60
    },
    "61": {
        "word": "benefit",
        "mean": "利益，恩恵；給付金",
        "number": 61
    },
    "62": {
        "word": "theory",
        "mean": "学説；理論；原理；推測",
        "number": 62
    },
    "63": {
        "word": "issue",
        "mean": "問題（点）；発行（物）；発表",
        "number": 63
    },
    "64": {
        "word": "experiment",
        "mean": "（～を対象とする）実験（on）",
        "number": 64
    },
    "65": {
        "word": "article",
        "mean": "記事；条項；品物",
        "number": 65
    },
    "66": {
        "word": "focus",
        "mean": "焦点；関心の的",
        "number": 66
    },
    "67": {
        "word": "subject",
        "mean": "話題；科目；主題；被験者",
        "number": 67
    },
    "68": {
        "word": "project",
        "mean": "計画；事業；研究計画",
        "number": 68
    },
    "69": {
        "word": "quality",
        "mean": "質（⇔ quantity ⇒ 471）；特質",
        "number": 69
    },
    "70": {
        "word": "role",
        "mean": "役割；（俳優などの）役",
        "number": 70
    },
    "71": {
        "word": "term",
        "mean": "（専門）用語；〔～s〕条件；〔～s〕間柄；学期",
        "number": 71
    },
    "72": {
        "word": "statement",
        "mean": "声明；主張；明細書",
        "number": 72
    },
    "73": {
        "word": "material",
        "mean": "材料，素材；資料；生地",
        "number": 73
    },
    "74": {
        "word": "evidence",
        "mean": "証拠",
        "number": 74
    },
    "75": {
        "word": "source",
        "mean": "（～の）源，根源（of）；出所，情報源",
        "number": 75
    },
    "76": {
        "word": "community",
        "mean": "（共同）社会，～界；地域社会；地域住民",
        "number": 76
    },
    "77": {
        "word": "technology",
        "mean": "科学技術；応用技術",
        "number": 77
    },
    "78": {
        "word": "culture",
        "mean": "文化；教養；耕作；養殖；培養",
        "number": 78
    },
    "79": {
        "word": "appropriate",
        "mean": "（～に）適切な（for / to）",
        "number": 79
    },
    "80": {
        "word": "likely",
        "mean": "ありそうな（⇔ unlikely ありそうもない）",
        "number": 80
    },
    "81": {
        "word": "possible",
        "mean": "可能な；可能性のある",
        "number": 81
    },
    "82": {
        "word": "individual",
        "mean": "個々の；個人の",
        "number": 82
    },
    "83": {
        "word": "public",
        "mean": "公の（⇔ private 私的な）；公衆の；公開の",
        "number": 83
    },
    "84": {
        "word": "common",
        "mean": "共通の；普通の；一般の",
        "number": 84
    },
    "85": {
        "word": "certain",
        "mean": "確信して；確かな；ある；一定の",
        "number": 85
    },
    "86": {
        "word": "similar",
        "mean": "似ている，類似した；同様の",
        "number": 86
    },
    "87": {
        "word": "recent",
        "mean": "最近の",
        "number": 87
    },
    "88": {
        "word": "major",
        "mean": "主要な；大きい（ほうの）；長調の",
        "number": 88
    },
    "89": {
        "word": "patient",
        "mean": "忍耐強い；勤勉な",
        "number": 89
    },
    "90": {
        "word": "particular",
        "mean": "特定の；特別の；（～について）やかましい（about）",
        "number": 90
    },
    "91": {
        "word": "physical",
        "mean": "身体の（⇔ mental ⇒ 183）；物質的な；物理学の",
        "number": 91
    },
    "92": {
        "word": "various",
        "mean": "さまざまな；いくつかの",
        "number": 92
    },
    "93": {
        "word": "available",
        "mean": "手に入る；利用できる；手が空いている",
        "number": 93
    },
    "94": {
        "word": "native",
        "mean": "出生地の；原産の；生得の",
        "number": 94
    },
    "95": {
        "word": "political",
        "mean": "政治（上）の",
        "number": 95
    },
    "96": {
        "word": "due",
        "mean": "予定された；（支払）期日で；しかるべき",
        "number": 96
    },
    "97": {
        "word": "blank",
        "mean": "空白の；無表情な；がらんとした",
        "number": 97
    },
    "98": {
        "word": "ancient",
        "mean": "古代の；昔からの",
        "number": 98
    },
    "99": {
        "word": "correct",
        "mean": "正しい；適切な",
        "number": 99
    },
    "100": {
        "word": "despite",
        "mean": "～にもかかわらず（≒ in spite of）",
        "number": 100
    },
    "101": {
        "word": "notice",
        "mean": "に気づく",
        "number": 101
    },
    "102": {
        "word": "refer",
        "mean": "言及する，関連する；参照する",
        "number": 102
    },
    "103": {
        "word": "approach",
        "mean": "に近づく；に取り組む",
        "number": 103
    },
    "104": {
        "word": "wonder",
        "mean": "かなと思う；（に）驚く（at）",
        "number": 104
    },
    "105": {
        "word": "imagine",
        "mean": "（を）想像する；（を）推測する",
        "number": 105
    },
    "106": {
        "word": "recognize",
        "mean": "を識別できる；を認める",
        "number": 106
    },
    "107": {
        "word": "solve",
        "mean": "を解く，解明する；（困難など）を解決する",
        "number": 107
    },
    "108": {
        "word": "occur",
        "mean": "起こる；心に浮かぶ；現れる",
        "number": 108
    },
    "109": {
        "word": "argue",
        "mean": "と主張する（≒ claim ⇒ 110, maintain ⇒ 206）；議論する",
        "number": 109
    },
    "110": {
        "word": "claim",
        "mean": "と主張する；を（自分のものとして）要求する",
        "number": 110
    },
    "111": {
        "word": "express",
        "mean": "を表す，述べる",
        "number": 111
    },
    "112": {
        "word": "draw",
        "mean": "を引き出す；を引く；を描く；近づく",
        "number": 112
    },
    "113": {
        "word": "waste",
        "mean": "を浪費する，無駄にする",
        "number": 113
    },
    "114": {
        "word": "advance",
        "mean": "を進歩させる；を進める；進歩する；進む",
        "number": 114
    },
    "115": {
        "word": "spread",
        "mean": "を広める；広がる",
        "number": 115
    },
    "116": {
        "word": "prepare",
        "mean": "を準備する；を調理する；（～のために）準備をする（for）",
        "number": 116
    },
    "117": {
        "word": "gain",
        "mean": "を獲得する；（を）増す",
        "number": 117
    },
    "118": {
        "word": "achieve",
        "mean": "を達成する；を成し遂げる",
        "number": 118
    },
    "119": {
        "word": "establish",
        "mean": "を確立する；を設立する",
        "number": 119
    },
    "120": {
        "word": "supply",
        "mean": "を供給する",
        "number": 120
    },
    "121": {
        "word": "suppose",
        "mean": "と思う；と仮定する",
        "number": 121
    },
    "122": {
        "word": "perform",
        "mean": "（を）行う；（を）演じる，（を）演奏する",
        "number": 122
    },
    "123": {
        "word": "prefer",
        "mean": "のほうを好む",
        "number": 123
    },
    "124": {
        "word": "determine",
        "mean": "を決定する；を正確に知る",
        "number": 124
    },
    "125": {
        "word": "treat",
        "mean": "を扱う；を治療する",
        "number": 125
    },
    "126": {
        "word": "prove",
        "mean": "を証明する；判明する，わかる",
        "number": 126
    },
    "127": {
        "word": "apply",
        "mean": "を適用［応用］する；申し込む；（～に）適用される（to / in）",
        "number": 127
    },
    "128": {
        "word": "mention",
        "mean": "に言及する；と言う",
        "number": 128
    },
    "129": {
        "word": "communicate",
        "mean": "（～と）情報交換をする（with）；を伝達する",
        "number": 129
    },
    "130": {
        "word": "contain",
        "mean": "を含む；を収容する；（感情など）を抑える",
        "number": 130
    },
    "131": {
        "word": "contact",
        "mean": "と連絡を取る；接触する",
        "number": 131
    },
    "132": {
        "word": "regard",
        "mean": "を見なす；を見る；を評価する",
        "number": 132
    },
    "133": {
        "word": "respect",
        "mean": "を尊敬する；を尊重する",
        "number": 133
    },
    "134": {
        "word": "search",
        "mean": "捜す；を捜索する；を詳しく調べる",
        "number": 134
    },
    "135": {
        "word": "connect",
        "mean": "をつなぐ；を関連づける",
        "number": 135
    },
    "136": {
        "word": "decline",
        "mean": "減少する；衰退する；を断る",
        "number": 136
    },
    "137": {
        "word": "prevent",
        "mean": "を妨げる；を防ぐ",
        "number": 137
    },
    "138": {
        "word": "suffer",
        "mean": "苦しむ；患う；（苦痛など）を経験する",
        "number": 138
    },
    "139": {
        "word": "survive",
        "mean": "を切り抜けて生き残る；より長生きする；生き延びる",
        "number": 139
    },
    "140": {
        "word": "publish",
        "mean": "を出版する；を公表する",
        "number": 140
    },
    "141": {
        "word": "opportunity",
        "mean": "機会（≒ chance）",
        "number": 141
    },
    "142": {
        "word": "task",
        "mean": "（課せられた）仕事，作業；課題；タスク",
        "number": 142
    },
    "143": {
        "word": "industry",
        "mean": "産業；勤勉（≒ diligence）",
        "number": 143
    },
    "144": {
        "word": "medium",
        "mean": "（情報伝達の）媒体；手段",
        "number": 144
    },
    "145": {
        "word": "economy",
        "mean": "経済（状態）；経済圏；節約",
        "number": 145
    },
    "146": {
        "word": "policy",
        "mean": "政策，方針；（個人の）主義",
        "number": 146
    },
    "147": {
        "word": "account",
        "mean": "説明；勘定；口座",
        "number": 147
    },
    "148": {
        "word": "trade",
        "mean": "貿易；商売，取引",
        "number": 148
    },
    "149": {
        "word": "model",
        "mean": "模範；モデル；模型；型",
        "number": 149
    },
    "150": {
        "word": "figure",
        "mean": "数字；姿；人物；図表",
        "number": 150
    },
    "151": {
        "word": "cell",
        "mean": "細胞；独房；電池",
        "number": 151
    },
    "152": {
        "word": "image",
        "mean": "印象，イメージ；画像；像",
        "number": 152
    },
    "153": {
        "word": "emotion",
        "mean": "感情，情動；感動",
        "number": 153
    },
    "154": {
        "word": "stress",
        "mean": "ストレス；圧力；強調",
        "number": 154
    },
    "155": {
        "word": "decade",
        "mean": "10年間",
        "number": 155
    },
    "156": {
        "word": "range",
        "mean": "範囲；射程距離；（同類の）組",
        "number": 156
    },
    "157": {
        "word": "character",
        "mean": "性格，個性；特徴；登場人物；文字",
        "number": 157
    },
    "158": {
        "word": "advantage",
        "mean": "利点；優勢；有利",
        "number": 158
    },
    "159": {
        "word": "phrase",
        "mean": "句；成句；言葉遣い",
        "number": 159
    },
    "160": {
        "word": "damage",
        "mean": "損害，損傷；〔～s〕損害賠償金",
        "number": 160
    },
    "161": {
        "word": "impact",
        "mean": "影響；（激しい）衝突；衝撃（力）",
        "number": 161
    },
    "162": {
        "word": "method",
        "mean": "方法；体系；秩序",
        "number": 162
    },
    "163": {
        "word": "resource",
        "mean": "〔通例～s〕資源；〔通例～s〕資金；才覚",
        "number": 163
    },
    "164": {
        "word": "region",
        "mean": "地域；領域；部位",
        "number": 164
    },
    "165": {
        "word": "medicine",
        "mean": "薬；医学",
        "number": 165
    },
    "166": {
        "word": "detail",
        "mean": "〔～s〕詳細（な情報），細部",
        "number": 166
    },
    "167": {
        "word": "feature",
        "mean": "特徴；〔通例～s〕顔つき；特集記事［番組］",
        "number": 167
    },
    "168": {
        "word": "function",
        "mean": "機能；関数",
        "number": 168
    },
    "169": {
        "word": "access",
        "mean": "利用，入手；接近（の機会・方法・権利）",
        "number": 169
    },
    "170": {
        "word": "item",
        "mean": "品目，項目；（同種の中の）～個；（短い）記事",
        "number": 170
    },
    "171": {
        "word": "income",
        "mean": "収入；所得",
        "number": 171
    },
    "172": {
        "word": "attitude",
        "mean": "態度；考え方，心構え",
        "number": 172
    },
    "173": {
        "word": "site",
        "mean": "用地，場所；跡地；（ウェブ）サイト",
        "number": 173
    },
    "174": {
        "word": "aspect",
        "mean": "（物事の）側面；観点；様相",
        "number": 174
    },
    "175": {
        "word": "structure",
        "mean": "構造；体系；構造物",
        "number": 175
    },
    "176": {
        "word": "habit",
        "mean": "習慣，癖",
        "number": 176
    },
    "177": {
        "word": "link",
        "mean": "関連，つながり；（2地点を結ぶ）交通手段；リンク",
        "number": 177
    },
    "178": {
        "word": "instance",
        "mean": "（具体的な）例，実例；（特定の）場合",
        "number": 178
    },
    "179": {
        "word": "positive",
        "mean": "肯定的な；積極的な；確信して；（検査結果が）陽性の",
        "number": 179
    },
    "180": {
        "word": "negative",
        "mean": "否定的な；消極的な；（検査結果が）陰性の",
        "number": 180
    },
    "181": {
        "word": "complex",
        "mean": "複雑な；複合（体）の",
        "number": 181
    },
    "182": {
        "word": "current",
        "mean": "現在の；現代の；通用している",
        "number": 182
    },
    "183": {
        "word": "mental",
        "mean": "精神の；知能の；頭の中で行う",
        "number": 183
    },
    "184": {
        "word": "specific",
        "mean": "特定の；明確な，具体的な；（～に）特有の（to）",
        "number": 184
    },
    "185": {
        "word": "significant",
        "mean": "重要な，重大な；意義深い",
        "number": 185
    },
    "186": {
        "word": "essential",
        "mean": "（～に）必要不可欠な（to / for）；本質的な",
        "number": 186
    },
    "187": {
        "word": "official",
        "mean": "公用の；公式の；役所の",
        "number": 187
    },
    "188": {
        "word": "financial",
        "mean": "財政（上）の；財界の",
        "number": 188
    },
    "189": {
        "word": "academic",
        "mean": "学問の；大学の",
        "number": 189
    },
    "190": {
        "word": "aware",
        "mean": "気づいて，知って",
        "number": 190
    },
    "191": {
        "word": "worth",
        "mean": "（...する）に値する（doing）；の価値がある",
        "number": 191
    },
    "192": {
        "word": "potential",
        "mean": "潜在的な；可能性を秘めた",
        "number": 192
    },
    "193": {
        "word": "active",
        "mean": "積極的な；活動的な；効力のある",
        "number": 193
    },
    "194": {
        "word": "digital",
        "mean": "デジタル方式の；デジタル［数字］表示の",
        "number": 194
    },
    "195": {
        "word": "mobile",
        "mean": "可動［移動］式の；流動性のある",
        "number": 195
    },
    "196": {
        "word": "novel",
        "mean": "斬新な，目新しい",
        "number": 196
    },
    "197": {
        "word": "plastic",
        "mean": "柔軟な；プラスチックの，ビニールの",
        "number": 197
    },
    "198": {
        "word": "chemical",
        "mean": "化学の，化学的な",
        "number": 198
    },
    "199": {
        "word": "necessary",
        "mean": "必要な（≒ essential ⇒ 186）",
        "number": 199
    },
    "200": {
        "word": "eventually",
        "mean": "結局（は）",
        "number": 200
    },
    "201": {
        "word": "identify",
        "mean": "を特定する；を（～と）同一視する（with）",
        "number": 201
    },
    "202": {
        "word": "represent",
        "mean": "を表す；を代表する；に相当する",
        "number": 202
    },
    "203": {
        "word": "indicate",
        "mean": "を指し示す；を述べる",
        "number": 203
    },
    "204": {
        "word": "manage",
        "mean": "をなんとか成し遂げる；を管理する",
        "number": 204
    },
    "205": {
        "word": "attend",
        "mean": "に出席する；（を）世話する；（～に）対処［対応］する（to）",
        "number": 205
    },
    "206": {
        "word": "maintain",
        "mean": "を維持する；と主張する；を養う",
        "number": 206
    },
    "207": {
        "word": "survey",
        "mean": "を調査する；をじろじろ見る；を概観する",
        "number": 207
    },
    "208": {
        "word": "replace",
        "mean": "に取って代わる；を取り替える",
        "number": 208
    },
    "209": {
        "word": "sort",
        "mean": "を（～に）分類する（into）；を（～から）えり分ける（from）",
        "number": 209
    },
    "210": {
        "word": "conduct",
        "mean": "（調査・実験など）を実施する；を導く",
        "number": 210
    },
    "211": {
        "word": "associate",
        "mean": "を結び付けて考える；（～と）交際する（with）",
        "number": 211
    },
    "212": {
        "word": "attempt",
        "mean": "を試みる，企てる",
        "number": 212
    },
    "213": {
        "word": "promote",
        "mean": "を促進する；〔通例受身形で〕昇進する",
        "number": 213
    },
    "214": {
        "word": "earn",
        "mean": "を稼ぐ；を得る；をもたらす",
        "number": 214
    },
    "215": {
        "word": "unite",
        "mean": "を団結させる；（を）結合する；団結する",
        "number": 215
    },
    "216": {
        "word": "feed",
        "mean": "に食べ物［乳］を与える；に（～を）供給［補給］する（with）；餌を食べる",
        "number": 216
    },
    "217": {
        "word": "seek",
        "mean": "を追い求める；（助けなど）を要請する",
        "number": 217
    },
    "218": {
        "word": "observe",
        "mean": "に気づく；を観察する；を遵守する",
        "number": 218
    },
    "219": {
        "word": "reveal",
        "mean": "を明らかにする；を見せる",
        "number": 219
    },
    "220": {
        "word": "estimate",
        "mean": "と推定する；を見積もる；を評価する",
        "number": 220
    },
    "221": {
        "word": "reflect",
        "mean": "を反映する；（を）反射する；（を）熟考する",
        "number": 221
    },
    "222": {
        "word": "attract",
        "mean": "を引きつける",
        "number": 222
    },
    "223": {
        "word": "decrease",
        "mean": "減少する（⇔ increase ⇒ 2）；を減らす",
        "number": 223
    },
    "224": {
        "word": "ignore",
        "mean": "を無視する",
        "number": 224
    },
    "225": {
        "word": "match",
        "mean": "（と）合う；に匹敵する；一致する",
        "number": 225
    },
    "226": {
        "word": "define",
        "mean": "を定義する；を明確にする",
        "number": 226
    },
    "227": {
        "word": "adapt",
        "mean": "適応する；を（～に）適合させる（to）",
        "number": 227
    },
    "228": {
        "word": "contribute",
        "mean": "貢献する，一因となる；（を）寄付する；（を）寄稿する",
        "number": 228
    },
    "229": {
        "word": "exchange",
        "mean": "（を）交換する；両替する",
        "number": 229
    },
    "230": {
        "word": "display",
        "mean": "を示す；を発揮する；を展示［陳列］する",
        "number": 230
    },
    "231": {
        "word": "respond",
        "mean": "反応する；答える",
        "number": 231
    },
    "232": {
        "word": "hide",
        "mean": "を隠す（≒ conceal ⇒ 1116）；隠れる",
        "number": 232
    },
    "233": {
        "word": "doubt",
        "mean": "ではないと思う；を疑う",
        "number": 233
    },
    "234": {
        "word": "remove",
        "mean": "を取り除く；を解雇する",
        "number": 234
    },
    "235": {
        "word": "wind",
        "mean": "（ねじなど）を巻く；（道などが）曲がりくねる；巻きつく",
        "number": 235
    },
    "236": {
        "word": "assume",
        "mean": "を当然のことと思う，と仮定する；（権力など）を手に入れる；（責任など）を引き受ける",
        "number": 236
    },
    "237": {
        "word": "relax",
        "mean": "くつろぐ；緩む；をくつろがせる；を緩める",
        "number": 237
    },
    "238": {
        "word": "satisfy",
        "mean": "を満足させる；（条件など）を満たす",
        "number": 238
    },
    "239": {
        "word": "desire",
        "mean": "を強く望む",
        "number": 239
    },
    "240": {
        "word": "succeed",
        "mean": "（～に）成功する（in）；（～を）継承する（to）",
        "number": 240
    },
    "241": {
        "word": "concept",
        "mean": "概念；考え；（商品・販売の）コンセプト",
        "number": 241
    },
    "242": {
        "word": "fashion",
        "mean": "流行，ファッション；方法，流儀",
        "number": 242
    },
    "243": {
        "word": "device",
        "mean": "装置，機器；方策；デバイス",
        "number": 243
    },
    "244": {
        "word": "charge",
        "mean": "料金；世話；管理；告発",
        "number": 244
    },
    "245": {
        "word": "contrast",
        "mean": "（～との）対照（with / to）",
        "number": 245
    },
    "246": {
        "word": "colleague",
        "mean": "（職場の）同僚",
        "number": 246
    },
    "247": {
        "word": "pain",
        "mean": "苦痛，痛み；苦悩；〔～s〕骨折り",
        "number": 247
    },
    "248": {
        "word": "bill",
        "mean": "請求書；【英】勘定書（≒ 【米】check）；法案",
        "number": 248
    },
    "249": {
        "word": "content",
        "mean": "内容，中身；コンテンツ",
        "number": 249
    },
    "250": {
        "word": "section",
        "mean": "部門；部分；地区；欄",
        "number": 250
    },
    "251": {
        "word": "audience",
        "mean": "〔集合的に〕聴衆，観客；視聴者",
        "number": 251
    },
    "252": {
        "word": "surface",
        "mean": "表面；〔the ～〕外見",
        "number": 252
    },
    "253": {
        "word": "crop",
        "mean": "〔しばしば～s〕作物；収穫高",
        "number": 253
    },
    "254": {
        "word": "topic",
        "mean": "話題，トピック；主題",
        "number": 254
    },
    "255": {
        "word": "technique",
        "mean": "技術；技巧；手法",
        "number": 255
    },
    "256": {
        "word": "status",
        "mean": "地位；状態",
        "number": 256
    },
    "257": {
        "word": "option",
        "mean": "選択（の自由）；選択肢",
        "number": 257
    },
    "258": {
        "word": "reward",
        "mean": "報酬；報い",
        "number": 258
    },
    "259": {
        "word": "race",
        "mean": "人種；民族；競争",
        "number": 259
    },
    "260": {
        "word": "crime",
        "mean": "罪，犯罪；違法行為",
        "number": 260
    },
    "261": {
        "word": "conflict",
        "mean": "争い；論争；不一致",
        "number": 261
    },
    "262": {
        "word": "struggle",
        "mean": "闘い；懸命の努力",
        "number": 262
    },
    "263": {
        "word": "context",
        "mean": "状況，背景；文脈",
        "number": 263
    },
    "264": {
        "word": "debate",
        "mean": "討論，論争；討論会",
        "number": 264
    },
    "265": {
        "word": "fuel",
        "mean": "燃料；勢いを増加させるもの",
        "number": 265
    },
    "266": {
        "word": "pollution",
        "mean": "汚染，公害",
        "number": 266
    },
    "267": {
        "word": "trend",
        "mean": "（～への）傾向（toward）；流行",
        "number": 267
    },
    "268": {
        "word": "balance",
        "mean": "均衡，バランス；（体の）平衡；残高",
        "number": 268
    },
    "269": {
        "word": "traffic",
        "mean": "交通；通行；交通［輸送］量；（不正）取引",
        "number": 269
    },
    "270": {
        "word": "strategy",
        "mean": "戦略",
        "number": 270
    },
    "271": {
        "word": "basis",
        "mean": "基礎；根拠；基準",
        "number": 271
    },
    "272": {
        "word": "consequence",
        "mean": "〔通例～s〕結果；重大性",
        "number": 272
    },
    "273": {
        "word": "aim",
        "mean": "目的，目標；狙い",
        "number": 273
    },
    "274": {
        "word": "ancestor",
        "mean": "祖先（⇔ descendant 子孫）；原型",
        "number": 274
    },
    "275": {
        "word": "gene",
        "mean": "遺伝子",
        "number": 275
    },
    "276": {
        "word": "track",
        "mean": "跡；軌道；【米】（鉄道の）番線；走路",
        "number": 276
    },
    "277": {
        "word": "revolution",
        "mean": "革命；回転；（天体の）公転（⇔ rotation 自転）",
        "number": 277
    },
    "278": {
        "word": "progress",
        "mean": "進歩；前進",
        "number": 278
    },
    "279": {
        "word": "cognitive",
        "mean": "認知の",
        "number": 279
    },
    "280": {
        "word": "ideal",
        "mean": "理想的な；観念的な",
        "number": 280
    },
    "281": {
        "word": "efficient",
        "mean": "効率的な；有能な",
        "number": 281
    },
    "282": {
        "word": "universal",
        "mean": "普遍的な；宇宙の；万能の",
        "number": 282
    },
    "283": {
        "word": "vast",
        "mean": "莫大な；広大な",
        "number": 283
    },
    "284": {
        "word": "extra",
        "mean": "追加の，余分の；別勘定の",
        "number": 284
    },
    "285": {
        "word": "entire",
        "mean": "全体の，全部の（≒ whole）；完全な",
        "number": 285
    },
    "286": {
        "word": "familiar",
        "mean": "精通している；よく知られている",
        "number": 286
    },
    "287": {
        "word": "obvious",
        "mean": "明らかな（≒ clear）",
        "number": 287
    },
    "288": {
        "word": "moral",
        "mean": "道徳（上）の，倫理的な；道徳的な",
        "number": 288
    },
    "289": {
        "word": "ordinary",
        "mean": "一般の，普通の；並の",
        "number": 289
    },
    "290": {
        "word": "equal",
        "mean": "（～に）等しい（to）；匹敵する；平等な",
        "number": 290
    },
    "291": {
        "word": "previous",
        "mean": "以前の，前の",
        "number": 291
    },
    "292": {
        "word": "FALSE",
        "mean": "間違った；虚偽の；偽の",
        "number": 292
    },
    "293": {
        "word": "rare",
        "mean": "まれな，珍しい；希少な",
        "number": 293
    },
    "294": {
        "word": "legal",
        "mean": "法律の；合法の（⇔ illegal 違法の）",
        "number": 294
    },
    "295": {
        "word": "independent",
        "mean": "（～から）独立した（of / from）",
        "number": 295
    },
    "296": {
        "word": "extreme",
        "mean": "極端な；極度の，過激な",
        "number": 296
    },
    "297": {
        "word": "actual",
        "mean": "実際の，現実の",
        "number": 297
    },
    "298": {
        "word": "willing",
        "mean": "いとわない，かまわないと思う",
        "number": 298
    },
    "299": {
        "word": "urban",
        "mean": "都市の；都会的な（⇔ rural ⇒ 387）",
        "number": 299
    },
    "300": {
        "word": "whereas",
        "mean": "～するのに（対し），～する一方",
        "number": 300
    },
    "301": {
        "word": "predict",
        "mean": "を予言［予測］する",
        "number": 301
    },
    "302": {
        "word": "examine",
        "mean": "を調べる；を診察する；を尋問する",
        "number": 302
    },
    "303": {
        "word": "trust",
        "mean": "を信頼する；を（信頼して）託す",
        "number": 303
    },
    "304": {
        "word": "stick",
        "mean": "を動けなくする；を突き刺す；（～に）くっつく（to / on）",
        "number": 304
    },
    "305": {
        "word": "emerge",
        "mean": "現れる；明らかになる；台頭する",
        "number": 305
    },
    "306": {
        "word": "vary",
        "mean": "さまざまである；変わる；を変える",
        "number": 306
    },
    "307": {
        "word": "release",
        "mean": "を放出する；を解放する；を発表する",
        "number": 307
    },
    "308": {
        "word": "divide",
        "mean": "を分ける；分かれる",
        "number": 308
    },
    "309": {
        "word": "enable",
        "mean": "（人）が...できるようにする；を可能にする",
        "number": 309
    },
    "310": {
        "word": "judge",
        "mean": "（を）判断する；に判決を下す",
        "number": 310
    },
    "311": {
        "word": "rely",
        "mean": "頼る（≒ depend ⇒ 36）",
        "number": 311
    },
    "312": {
        "word": "engage",
        "mean": "を従事させる；を（～として）雇う（as）；（～に）従事する（in / with）",
        "number": 312
    },
    "313": {
        "word": "shift",
        "mean": "を変える，移す；変わる；移動する",
        "number": 313
    },
    "314": {
        "word": "adopt",
        "mean": "を採用する；（態度など）をとる；を養子にする",
        "number": 314
    },
    "315": {
        "word": "acquire",
        "mean": "を得る；を習得する",
        "number": 315
    },
    "316": {
        "word": "expand",
        "mean": "（を）拡大する；（を）詳説する",
        "number": 316
    },
    "317": {
        "word": "refuse",
        "mean": "を拒む；を断る；拒絶する",
        "number": 317
    },
    "318": {
        "word": "strike",
        "mean": "の心を打つ；を襲う；を打つ；（に）ぶつかる",
        "number": 318
    },
    "319": {
        "word": "repeat",
        "mean": "（を）繰り返す；を復唱する",
        "number": 319
    },
    "320": {
        "word": "consume",
        "mean": "を消費する；を食べる，飲む",
        "number": 320
    },
    "321": {
        "word": "confuse",
        "mean": "を混同する；を当惑させる",
        "number": 321
    },
    "322": {
        "word": "select",
        "mean": "を選ぶ，えり抜く",
        "number": 322
    },
    "323": {
        "word": "evolve",
        "mean": "（徐々に）発展する；進化する",
        "number": 323
    },
    "324": {
        "word": "convince",
        "mean": "を納得［確信］させる",
        "number": 324
    },
    "325": {
        "word": "recall",
        "mean": "を思い出す；を呼び戻す",
        "number": 325
    },
    "326": {
        "word": "destroy",
        "mean": "を破壊する；（人）を破滅させる",
        "number": 326
    },
    "327": {
        "word": "preserve",
        "mean": "を保存する；を保持する；を保護する",
        "number": 327
    },
    "328": {
        "word": "organize",
        "mean": "を準備する；を組織する",
        "number": 328
    },
    "329": {
        "word": "warn",
        "mean": "（人）に（～を）警告［注意］する（of / against）",
        "number": 329
    },
    "330": {
        "word": "address",
        "mean": "（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）",
        "number": 330
    },
    "331": {
        "word": "operate",
        "mean": "を操作する；機能する；手術する",
        "number": 331
    },
    "332": {
        "word": "participate",
        "mean": "参加する",
        "number": 332
    },
    "333": {
        "word": "surround",
        "mean": "を取り巻く；にまつわる",
        "number": 333
    },
    "334": {
        "word": "flow",
        "mean": "流れる；（～から）生じる（from）",
        "number": 334
    },
    "335": {
        "word": "bore",
        "mean": "（人）を退屈させる，うんざりさせる",
        "number": 335
    },
    "336": {
        "word": "complain",
        "mean": "（と）不平［苦情］を言う；訴える",
        "number": 336
    },
    "337": {
        "word": "host",
        "mean": "を主催する；のホスト役を務める",
        "number": 337
    },
    "338": {
        "word": "combine",
        "mean": "を（～と）結び付ける（with）；（～と）結び付く（with）",
        "number": 338
    },
    "339": {
        "word": "extend",
        "mean": "を伸［延］ばす；伸びる；及ぶ",
        "number": 339
    },
    "340": {
        "word": "appreciate",
        "mean": "を正当に評価する；を鑑賞する；を感謝する",
        "number": 340
    },
    "341": {
        "word": "target",
        "mean": "（到達・攻撃）目標；的",
        "number": 341
    },
    "342": {
        "word": "element",
        "mean": "要素，成分；元素；〔an / ofで〕少しの",
        "number": 342
    },
    "343": {
        "word": "principle",
        "mean": "原則，原理；主義，信条",
        "number": 343
    },
    "344": {
        "word": "phenomenon",
        "mean": "現象",
        "number": 344
    },
    "345": {
        "word": "atmosphere",
        "mean": "〔the ～〕大気；雰囲気",
        "number": 345
    },
    "346": {
        "word": "origin",
        "mean": "起源；源",
        "number": 346
    },
    "347": {
        "word": "personality",
        "mean": "個性，性格",
        "number": 347
    },
    "348": {
        "word": "capacity",
        "mean": "（最大）容量，収容能力；（潜在）能力",
        "number": 348
    },
    "349": {
        "word": "profit",
        "mean": "利益；収益（率）；得",
        "number": 349
    },
    "350": {
        "word": "circumstance",
        "mean": "〔通例～s〕状況，事情；境遇",
        "number": 350
    },
    "351": {
        "word": "manner",
        "mean": "〔～s〕作法；方法；物腰",
        "number": 351
    },
    "352": {
        "word": "threat",
        "mean": "脅威；（悪い）兆し；脅迫",
        "number": 352
    },
    "353": {
        "word": "resident",
        "mean": "居住者；滞在者",
        "number": 353
    },
    "354": {
        "word": "wealth",
        "mean": "富；資源；富裕",
        "number": 354
    },
    "355": {
        "word": "institution",
        "mean": "機関；協会；施設；制度",
        "number": 355
    },
    "356": {
        "word": "authority",
        "mean": "〔通例 the ～ties〕（関係）当局；権威；権限",
        "number": 356
    },
    "357": {
        "word": "vote",
        "mean": "投票；投票結果；〔the ～〕選挙権",
        "number": 357
    },
    "358": {
        "word": "sight",
        "mean": "光景；〔the ～s〕名所；見（え）ること；視野；視力",
        "number": 358
    },
    "359": {
        "word": "campaign",
        "mean": "運動；軍事行動",
        "number": 359
    },
    "360": {
        "word": "fund",
        "mean": "〔しばしば～s〕基金，資金",
        "number": 360
    },
    "361": {
        "word": "web",
        "mean": "〔the W-〕ウェブ；（クモの）巣",
        "number": 361
    },
    "362": {
        "word": "symbol",
        "mean": "象徴，シンボル；記号；標章",
        "number": 362
    },
    "363": {
        "word": "analysis",
        "mean": "分析（結果）（⇔ synthesis ⇒ 1868）",
        "number": 363
    },
    "364": {
        "word": "version",
        "mean": "（本・製品などの）版；解釈",
        "number": 364
    },
    "365": {
        "word": "perspective",
        "mean": "観点，見方；大局観；遠近法",
        "number": 365
    },
    "366": {
        "word": "crisis",
        "mean": "危機",
        "number": 366
    },
    "367": {
        "word": "disaster",
        "mean": "災害；惨事",
        "number": 367
    },
    "368": {
        "word": "lecture",
        "mean": "講義，講演；説教",
        "number": 368
    },
    "369": {
        "word": "psychology",
        "mean": "心理学；心理（状態）",
        "number": 369
    },
    "370": {
        "word": "gender",
        "mean": "（社会的・文化的）性，性別",
        "number": 370
    },
    "371": {
        "word": "custom",
        "mean": "（社会的な）慣習；〔～s〕税関；〔～s〕関税",
        "number": 371
    },
    "372": {
        "word": "court",
        "mean": "裁判所，法廷；裁判；宮廷；中庭",
        "number": 372
    },
    "373": {
        "word": "desert",
        "mean": "砂漠；不毛の地",
        "number": 373
    },
    "374": {
        "word": "soil",
        "mean": "土地，土壌；（悪事などの）温床",
        "number": 374
    },
    "375": {
        "word": "agriculture",
        "mean": "農業；農学，畜産",
        "number": 375
    },
    "376": {
        "word": "fossil",
        "mean": "化石；時代遅れの人［物］",
        "number": 376
    },
    "377": {
        "word": "document",
        "mean": "（公）文書，書類；記録，資料",
        "number": 377
    },
    "378": {
        "word": "vocabulary",
        "mean": "語彙",
        "number": 378
    },
    "379": {
        "word": "intelligent",
        "mean": "聡明な；知能を有する",
        "number": 379
    },
    "380": {
        "word": "conscious",
        "mean": "意識して，気づいて（≒ aware）",
        "number": 380
    },
    "381": {
        "word": "capable",
        "mean": "能力がある；有能な",
        "number": 381
    },
    "382": {
        "word": "accurate",
        "mean": "正確な；精密な",
        "number": 382
    },
    "383": {
        "word": "fundamental",
        "mean": "基本的な；必須の",
        "number": 383
    },
    "384": {
        "word": "artificial",
        "mean": "人工の（⇔ natural 自然の）；不自然な",
        "number": 384
    },
    "385": {
        "word": "firm",
        "mean": "確固たる；堅固な；安定した",
        "number": 385
    },
    "386": {
        "word": "overall",
        "mean": "総合的な；全体的な",
        "number": 386
    },
    "387": {
        "word": "rural",
        "mean": "田舎の（⇔ urban ⇒ 299），田園の",
        "number": 387
    },
    "388": {
        "word": "military",
        "mean": "軍の，軍事（用）の",
        "number": 388
    },
    "389": {
        "word": "nuclear",
        "mean": "核の，原子力の",
        "number": 389
    },
    "390": {
        "word": "biological",
        "mean": "生物学（上）の",
        "number": 390
    },
    "391": {
        "word": "constant",
        "mean": "絶え間ない；一定の",
        "number": 391
    },
    "392": {
        "word": "severe",
        "mean": "（人・規律・事態・天気などが）厳しい；猛烈な",
        "number": 392
    },
    "393": {
        "word": "visual",
        "mean": "視覚の；目に見える",
        "number": 393
    },
    "394": {
        "word": "enormous",
        "mean": "莫大な，巨大な",
        "number": 394
    },
    "395": {
        "word": "convenient",
        "mean": "便利な，都合のいい",
        "number": 395
    },
    "396": {
        "word": "domestic",
        "mean": "家庭の；国内の；（動物が）飼いならされた",
        "number": 396
    },
    "397": {
        "word": "mass",
        "mean": "大規模な，大量の；大衆（向け）の",
        "number": 397
    },
    "398": {
        "word": "typical",
        "mean": "典型的な；（～に）特有の（of）",
        "number": 398
    },
    "399": {
        "word": "overseas",
        "mean": "海外へ［に，で］（≒ abroad）",
        "number": 399
    },
    "400": {
        "word": "nevertheless",
        "mean": "それにもかかわらず（≒ nonetheless ⇒ 1000）",
        "number": 400
    },
    "401": {
        "word": "demonstrate",
        "mean": "を論証［証明］する；デモをする",
        "number": 401
    },
    "402": {
        "word": "behave",
        "mean": "振る舞う；作動する",
        "number": 402
    },
    "403": {
        "word": "educate",
        "mean": "を教育する；に教える；（能力など）を養う",
        "number": 403
    },
    "404": {
        "word": "purchase",
        "mean": "を購入する",
        "number": 404
    },
    "405": {
        "word": "recommend",
        "mean": "を勧める",
        "number": 405
    },
    "406": {
        "word": "admit",
        "mean": "（を）（しぶしぶ）認める；に（～への）入場［入学など］を認める（to / into）",
        "number": 406
    },
    "407": {
        "word": "generate",
        "mean": "を生み出す；（電気など）を発生させる",
        "number": 407
    },
    "408": {
        "word": "explore",
        "mean": "（を）調査［探究］する；（を）探検［探査］する",
        "number": 408
    },
    "409": {
        "word": "amaze",
        "mean": "をびっくりさせる",
        "number": 409
    },
    "410": {
        "word": "tear",
        "mean": "を引き裂く；裂ける",
        "number": 410
    },
    "411": {
        "word": "settle",
        "mean": "を解決する；（に）移り住む；を落ち着かせる",
        "number": 411
    },
    "412": {
        "word": "afford",
        "mean": "を持つ［する］余裕がある；を与える",
        "number": 412
    },
    "413": {
        "word": "conclude",
        "mean": "と結論づける；を締めくくる；を締結する",
        "number": 413
    },
    "414": {
        "word": "advertise",
        "mean": "を宣伝する；（～を求める）広告を出す（for）",
        "number": 414
    },
    "415": {
        "word": "encounter",
        "mean": "に遭遇する；に（思いがけず）出会う",
        "number": 415
    },
    "416": {
        "word": "remind",
        "mean": "に思い出させる",
        "number": 416
    },
    "417": {
        "word": "locate",
        "mean": "〔受身形で〕位置する；の位置を探し当てる",
        "number": 417
    },
    "418": {
        "word": "aid",
        "mean": "を援助する，助ける（≒ help）",
        "number": 418
    },
    "419": {
        "word": "bite",
        "mean": "（を）かむ，（に）かみつく；（を）刺す",
        "number": 419
    },
    "420": {
        "word": "deliver",
        "mean": "を配達する；（演説・講義）をする；子を産む",
        "number": 420
    },
    "421": {
        "word": "perceive",
        "mean": "に気づく；を知覚する；を理解する",
        "number": 421
    },
    "422": {
        "word": "distinguish",
        "mean": "を区別する",
        "number": 422
    },
    "423": {
        "word": "imply",
        "mean": "を暗に意味する；を必然的に伴う",
        "number": 423
    },
    "424": {
        "word": "handle",
        "mean": "を処理する，扱う；を論じる；を商う",
        "number": 424
    },
    "425": {
        "word": "praise",
        "mean": "を（～のことで）賞賛する（for）；賛美する",
        "number": 425
    },
    "426": {
        "word": "appeal",
        "mean": "訴える；抗議する；（上級審に）上訴する",
        "number": 426
    },
    "427": {
        "word": "insist",
        "mean": "（を）強く主張する；要求する",
        "number": 427
    },
    "428": {
        "word": "compete",
        "mean": "競う；〔通例否定文で〕（～に）匹敵する（with）",
        "number": 428
    },
    "429": {
        "word": "rank",
        "mean": "を位置づける，評価する；（ある地位に）位置する",
        "number": 429
    },
    "430": {
        "word": "deny",
        "mean": "を否定する；を拒む",
        "number": 430
    },
    "431": {
        "word": "reject",
        "mean": "を拒否する",
        "number": 431
    },
    "432": {
        "word": "intend",
        "mean": "を意図する",
        "number": 432
    },
    "433": {
        "word": "expose",
        "mean": "をさらす；を暴露する；を露出する",
        "number": 433
    },
    "434": {
        "word": "favor",
        "mean": "に賛成する；を好む；をひいきする",
        "number": 434
    },
    "435": {
        "word": "inspire",
        "mean": "（人）を奮起させる；を喚起する",
        "number": 435
    },
    "436": {
        "word": "propose",
        "mean": "を提案する；をもくろむ；結婚を申し込む",
        "number": 436
    },
    "437": {
        "word": "spell",
        "mean": "（語）をつづる；という語になる",
        "number": 437
    },
    "438": {
        "word": "breathe",
        "mean": "呼吸する；を吸う",
        "number": 438
    },
    "439": {
        "word": "repair",
        "mean": "を修理する（≒ fix）；を修復する",
        "number": 439
    },
    "440": {
        "word": "consist",
        "mean": "（～から）成る（of）；（～に）ある（in）",
        "number": 440
    },
    "441": {
        "word": "comment",
        "mean": "意見，コメント；批判",
        "number": 441
    },
    "442": {
        "word": "instruction",
        "mean": "〔通例～s〕指示；〔～s〕（製品の）使用書",
        "number": 442
    },
    "443": {
        "word": "religion",
        "mean": "宗教；信条；信仰（心）",
        "number": 443
    },
    "444": {
        "word": "neighborhood",
        "mean": "地域；近所",
        "number": 444
    },
    "445": {
        "word": "laboratory",
        "mean": "実験室，研究室",
        "number": 445
    },
    "446": {
        "word": "presence",
        "mean": "存在；出席；面前",
        "number": 446
    },
    "447": {
        "word": "confidence",
        "mean": "自信；信頼；秘密",
        "number": 447
    },
    "448": {
        "word": "harm",
        "mean": "害，損害",
        "number": 448
    },
    "449": {
        "word": "instrument",
        "mean": "器具；楽器（≒ musical instrument）",
        "number": 449
    },
    "450": {
        "word": "category",
        "mean": "部類，区分；範疇",
        "number": 450
    },
    "451": {
        "word": "capital",
        "mean": "資本；首都；大文字（≒ capital letter）",
        "number": 451
    },
    "452": {
        "word": "outcome",
        "mean": "結果（≒ result）；成果",
        "number": 452
    },
    "453": {
        "word": "notion",
        "mean": "概念，観念；見解；意向",
        "number": 453
    },
    "454": {
        "word": "review",
        "mean": "（書物などの）論評；再調査；【米】復習",
        "number": 454
    },
    "455": {
        "word": "trait",
        "mean": "特性（≒ feature）",
        "number": 455
    },
    "456": {
        "word": "diversity",
        "mean": "多様性；相違点",
        "number": 456
    },
    "457": {
        "word": "victim",
        "mean": "犠牲（者），被害者",
        "number": 457
    },
    "458": {
        "word": "occasion",
        "mean": "場合，時；行事；機会",
        "number": 458
    },
    "459": {
        "word": "facility",
        "mean": "施設，設備；機能；才能",
        "number": 459
    },
    "460": {
        "word": "stock",
        "mean": "在庫品；蓄え；株",
        "number": 460
    },
    "461": {
        "word": "conference",
        "mean": "会議；協議",
        "number": 461
    },
    "462": {
        "word": "humanity",
        "mean": "人類；人間性；人情；〔（the） ～ties〕人文科学",
        "number": 462
    },
    "463": {
        "word": "dialect",
        "mean": "方言",
        "number": 463
    },
    "464": {
        "word": "proportion",
        "mean": "割合；部分；釣り合い",
        "number": 464
    },
    "465": {
        "word": "tip",
        "mean": "助言，秘訣；チップ；先端",
        "number": 465
    },
    "466": {
        "word": "lawyer",
        "mean": "弁護士",
        "number": 466
    },
    "467": {
        "word": "stuff",
        "mean": "（漠然と）物；素材；素質",
        "number": 467
    },
    "468": {
        "word": "comfort",
        "mean": "快適さ；慰め",
        "number": 468
    },
    "469": {
        "word": "philosophy",
        "mean": "哲学；原理；人生観",
        "number": 469
    },
    "470": {
        "word": "mammal",
        "mean": "哺乳動物",
        "number": 470
    },
    "471": {
        "word": "quantity",
        "mean": "量（⇔ quality ⇒ 69）；分量",
        "number": 471
    },
    "472": {
        "word": "landscape",
        "mean": "風景；領域；状況",
        "number": 472
    },
    "473": {
        "word": "tribe",
        "mean": "部族；仲間",
        "number": 473
    },
    "474": {
        "word": "organ",
        "mean": "器官，臓器；組織；（パイプ）オルガン",
        "number": 474
    },
    "475": {
        "word": "trial",
        "mean": "試み，（品質・性能などの）試験；裁判；試用期間",
        "number": 475
    },
    "476": {
        "word": "norm",
        "mean": "規範；標準",
        "number": 476
    },
    "477": {
        "word": "code",
        "mean": "規範；暗号；法典",
        "number": 477
    },
    "478": {
        "word": "substance",
        "mean": "物質；実体；趣旨",
        "number": 478
    },
    "479": {
        "word": "multiple",
        "mean": "多様な；種々雑多な",
        "number": 479
    },
    "480": {
        "word": "numerous",
        "mean": "非常に数の多い",
        "number": 480
    },
    "481": {
        "word": "narrow",
        "mean": "狭い；細い；限られた",
        "number": 481
    },
    "482": {
        "word": "widespread",
        "mean": "広範囲にわたる；広く普及した",
        "number": 482
    },
    "483": {
        "word": "sufficient",
        "mean": "（～に；...するのに）十分な（for；to do）",
        "number": 483
    },
    "484": {
        "word": "proper",
        "mean": "適切な；正式の；〔名詞の後ろで〕主要な；（～に）固有の（to）",
        "number": 484
    },
    "485": {
        "word": "linguistic",
        "mean": "言語の，言語学の",
        "number": 485
    },
    "486": {
        "word": "annual",
        "mean": "年1回の，例年の；1年間の",
        "number": 486
    },
    "487": {
        "word": "contemporary",
        "mean": "現代の；同時代の；同年輩の",
        "number": 487
    },
    "488": {
        "word": "contrary",
        "mean": "（～と）反対の（to）",
        "number": 488
    },
    "489": {
        "word": "strict",
        "mean": "（規則などが）厳しい；厳格な",
        "number": 489
    },
    "490": {
        "word": "civil",
        "mean": "市民の；民間の；民事の（⇔ criminal 刑事の）",
        "number": 490
    },
    "491": {
        "word": "odd",
        "mean": "奇妙な（≒ strange）；奇数の",
        "number": 491
    },
    "492": {
        "word": "unknown",
        "mean": "不明の；（～に）知られていない（to），無名の",
        "number": 492
    },
    "493": {
        "word": "superior",
        "mean": "よりすぐれた（⇔ inferior ⇒ 1092）",
        "number": 493
    },
    "494": {
        "word": "sensitive",
        "mean": "敏感な；神経質な；微妙な",
        "number": 494
    },
    "495": {
        "word": "violent",
        "mean": "（人・気質などが）激しい；暴力的な",
        "number": 495
    },
    "496": {
        "word": "virtual",
        "mean": "仮想の；事実上の",
        "number": 496
    },
    "497": {
        "word": "regardless",
        "mean": "（～に）かまわない，無頓着な（of）",
        "number": 497
    },
    "498": {
        "word": "immediate",
        "mean": "即座の；当面の；すぐそばの；直接の",
        "number": 498
    },
    "499": {
        "word": "crucial",
        "mean": "重要な",
        "number": 499
    },
    "500": {
        "word": "somewhat",
        "mean": "いくぶん，多少",
        "number": 500
    },
    "501": {
        "word": "interpret",
        "mean": "を解釈する；（を）通訳する",
        "number": 501
    },
    "502": {
        "word": "translate",
        "mean": "を翻訳する；を（～に）変える（into）",
        "number": 502
    },
    "503": {
        "word": "concentrate",
        "mean": "（を）集中する",
        "number": 503
    },
    "504": {
        "word": "request",
        "mean": "に（...するように）頼む（to do）；を要請する",
        "number": 504
    },
    "505": {
        "word": "criticize",
        "mean": "を批判する；を批評する",
        "number": 505
    },
    "506": {
        "word": "overcome",
        "mean": "を克服する",
        "number": 506
    },
    "507": {
        "word": "obtain",
        "mean": "を得る",
        "number": 507
    },
    "508": {
        "word": "inform",
        "mean": "に知らせる；情報を提供する",
        "number": 508
    },
    "509": {
        "word": "ensure",
        "mean": "を確実にする（≒ make sure）；を守る",
        "number": 509
    },
    "510": {
        "word": "announce",
        "mean": "を発表［公表］する，知らせる；（物事が）を告げる",
        "number": 510
    },
    "511": {
        "word": "grant",
        "mean": "（人）に（許可・権利など）を与える；を認める",
        "number": 511
    },
    "512": {
        "word": "freeze",
        "mean": "凍る；を凍らせる；（計画・資金など）を凍結する",
        "number": 512
    },
    "513": {
        "word": "oppose",
        "mean": "に反対する；を対抗［対比］させる",
        "number": 513
    },
    "514": {
        "word": "differ",
        "mean": "異なる",
        "number": 514
    },
    "515": {
        "word": "hate",
        "mean": "をひどく嫌う；を残念に思う",
        "number": 515
    },
    "516": {
        "word": "emphasize",
        "mean": "を強調する；を重視する",
        "number": 516
    },
    "517": {
        "word": "employ",
        "mean": "を雇う（≒ give ～ a job）；を使う（≒ use）",
        "number": 517
    },
    "518": {
        "word": "credit",
        "mean": "（功績など）を（～に）帰する（to）；を信じる",
        "number": 518
    },
    "519": {
        "word": "transform",
        "mean": "を変える；変わる",
        "number": 519
    },
    "520": {
        "word": "construct",
        "mean": "を建設する（＝ build）；を構成する",
        "number": 520
    },
    "521": {
        "word": "arise",
        "mean": "生じる",
        "number": 521
    },
    "522": {
        "word": "beat",
        "mean": "を打ち負かす；（を）打つ，たたく",
        "number": 522
    },
    "523": {
        "word": "regret",
        "mean": "を後悔する",
        "number": 523
    },
    "524": {
        "word": "alter",
        "mean": "を変える；変わる（≒ change）",
        "number": 524
    },
    "525": {
        "word": "absorb",
        "mean": "を吸収する；を併合する；を夢中にさせる",
        "number": 525
    },
    "526": {
        "word": "disappoint",
        "mean": "を失望させる；（希望など）をくじく",
        "number": 526
    },
    "527": {
        "word": "cure",
        "mean": "を治す；を取り除く；（病気が）治る",
        "number": 527
    },
    "528": {
        "word": "transport",
        "mean": "を輸送する；を運ぶ",
        "number": 528
    },
    "529": {
        "word": "rush",
        "mean": "急いで行く；性急に行動する；をせき立てる",
        "number": 529
    },
    "530": {
        "word": "hang",
        "mean": "を掛ける；を絞首刑にする；垂れ（下が）る",
        "number": 530
    },
    "531": {
        "word": "blame",
        "mean": "を責める；の責任を負わせる",
        "number": 531
    },
    "532": {
        "word": "ban",
        "mean": "を（法的に）禁止する；を締め出す",
        "number": 532
    },
    "533": {
        "word": "fascinate",
        "mean": "を魅了する",
        "number": 533
    },
    "534": {
        "word": "recover",
        "mean": "回復する；を取り戻す",
        "number": 534
    },
    "535": {
        "word": "celebrate",
        "mean": "を祝う；を挙行する",
        "number": 535
    },
    "536": {
        "word": "manufacture",
        "mean": "を製造する；をでっち上げる",
        "number": 536
    },
    "537": {
        "word": "interact",
        "mean": "影響し合う；相互に作用する",
        "number": 537
    },
    "538": {
        "word": "arrange",
        "mean": "の段取りをつける；を手配する；を配置する",
        "number": 538
    },
    "539": {
        "word": "adjust",
        "mean": "を調整する；を適合させる；順応する",
        "number": 539
    },
    "540": {
        "word": "confirm",
        "mean": "を確認する；を裏づける",
        "number": 540
    },
    "541": {
        "word": "insight",
        "mean": "見識，理解（力）；洞察力",
        "number": 541
    },
    "542": {
        "word": "innovation",
        "mean": "革新；新機軸",
        "number": 542
    },
    "543": {
        "word": "budget",
        "mean": "予算；経費",
        "number": 543
    },
    "544": {
        "word": "fee",
        "mean": "料金；謝礼",
        "number": 544
    },
    "545": {
        "word": "expense",
        "mean": "〔～s〕経費；費用；犠牲",
        "number": 545
    },
    "546": {
        "word": "debt",
        "mean": "借金，負債；恩義",
        "number": 546
    },
    "547": {
        "word": "loan",
        "mean": "貸付金，融資；貸すこと",
        "number": 547
    },
    "548": {
        "word": "duty",
        "mean": "義務；〔しばしば～ties〕職務；関税",
        "number": 548
    },
    "549": {
        "word": "alarm",
        "mean": "不安，恐れ；警報装置",
        "number": 549
    },
    "550": {
        "word": "emergency",
        "mean": "緊急（事態）",
        "number": 550
    },
    "551": {
        "word": "democracy",
        "mean": "民主主義，民主政治；民主国家",
        "number": 551
    },
    "552": {
        "word": "minister",
        "mean": "大臣；（プロテスタント系の）聖職者",
        "number": 552
    },
    "553": {
        "word": "fellow",
        "mean": "仲間，同僚；同級生；男",
        "number": 553
    },
    "554": {
        "word": "candidate",
        "mean": "（～の）候補（者）（for）；志願者",
        "number": 554
    },
    "555": {
        "word": "corporation",
        "mean": "（大）企業；法人",
        "number": 555
    },
    "556": {
        "word": "stereotype",
        "mean": "固定観念；決まり文句",
        "number": 556
    },
    "557": {
        "word": "route",
        "mean": "道（筋）；路線，ルート；（～の）手段（to）",
        "number": 557
    },
    "558": {
        "word": "disorder",
        "mean": "障害，（心身の）不調；混乱",
        "number": 558
    },
    "559": {
        "word": "depression",
        "mean": "憂うつ；うつ病；不況；低気圧",
        "number": 559
    },
    "560": {
        "word": "weapon",
        "mean": "兵器，武器（≒ arms）",
        "number": 560
    },
    "561": {
        "word": "immigration",
        "mean": "（他国からの）移民，移住；入国管理",
        "number": 561
    },
    "562": {
        "word": "barrier",
        "mean": "（～に対する）障壁（against / to）；防壁",
        "number": 562
    },
    "563": {
        "word": "disadvantage",
        "mean": "不利（な点）；障害；（信用などの）損失",
        "number": 563
    },
    "564": {
        "word": "mood",
        "mean": "気分；機嫌；雰囲気",
        "number": 564
    },
    "565": {
        "word": "motion",
        "mean": "動き，動作；運動；動議",
        "number": 565
    },
    "566": {
        "word": "routine",
        "mean": "決まり切った仕事；いつもの手順",
        "number": 566
    },
    "567": {
        "word": "discipline",
        "mean": "規律，しつけ；訓練；懲戒；学問分野",
        "number": 567
    },
    "568": {
        "word": "myth",
        "mean": "作り話；神話",
        "number": 568
    },
    "569": {
        "word": "hypothesis",
        "mean": "仮説；憶測",
        "number": 569
    },
    "570": {
        "word": "physician",
        "mean": "【主に米】 医師（≒ doctor）；内科医",
        "number": 570
    },
    "571": {
        "word": "client",
        "mean": "顧客（≒ customer）；（弁護士などの）依頼人",
        "number": 571
    },
    "572": {
        "word": "colony",
        "mean": "植民地；集団居住地；（動植物の）コロニー",
        "number": 572
    },
    "573": {
        "word": "statistics",
        "mean": "統計；統計学",
        "number": 573
    },
    "574": {
        "word": "grain",
        "mean": "穀物；粒；きめ",
        "number": 574
    },
    "575": {
        "word": "ingredient",
        "mean": "材料，成分；（成功の）要因",
        "number": 575
    },
    "576": {
        "word": "treasure",
        "mean": "宝物，財宝；財産",
        "number": 576
    },
    "577": {
        "word": "contract",
        "mean": "契約（書）；協定",
        "number": 577
    },
    "578": {
        "word": "welfare",
        "mean": "福祉，幸福",
        "number": 578
    },
    "579": {
        "word": "prime",
        "mean": "主要な，最も重要な；最適な；極上の",
        "number": 579
    },
    "580": {
        "word": "curious",
        "mean": "好奇心の強い；奇妙な",
        "number": 580
    },
    "581": {
        "word": "dramatic",
        "mean": "劇的な；演劇の",
        "number": 581
    },
    "582": {
        "word": "distinct",
        "mean": "明らかに異なる；明瞭な",
        "number": 582
    },
    "583": {
        "word": "anxious",
        "mean": "心配して；切望して",
        "number": 583
    },
    "584": {
        "word": "vital",
        "mean": "必要不可欠な；活気のある；生命にかかわる",
        "number": 584
    },
    "585": {
        "word": "conventional",
        "mean": "従来の；月並みな",
        "number": 585
    },
    "586": {
        "word": "abstract",
        "mean": "抽象的な（⇔ concrete ⇒ 783）",
        "number": 586
    },
    "587": {
        "word": "minor",
        "mean": "重要でない；小さい（⇔ major ⇒ 88）",
        "number": 587
    },
    "588": {
        "word": "extraordinary",
        "mean": "並はずれた；異常な，驚くべき",
        "number": 588
    },
    "589": {
        "word": "stable",
        "mean": "安定した（⇔ unstable 不安定な）；動じない",
        "number": 589
    },
    "590": {
        "word": "flexible",
        "mean": "融通の利く，柔軟な",
        "number": 590
    },
    "591": {
        "word": "brief",
        "mean": "簡潔な；短い",
        "number": 591
    },
    "592": {
        "word": "aggressive",
        "mean": "攻撃的な；意欲的な",
        "number": 592
    },
    "593": {
        "word": "visible",
        "mean": "（目に）見える（⇔ invisible 見えない）；明白な",
        "number": 593
    },
    "594": {
        "word": "unexpected",
        "mean": "思いがけない，不意の",
        "number": 594
    },
    "595": {
        "word": "ethnic",
        "mean": "民族の，人種の；民族特有の",
        "number": 595
    },
    "596": {
        "word": "alien",
        "mean": "（～にとって）異質の（to）；外国の；宇宙人の",
        "number": 596
    },
    "597": {
        "word": "initial",
        "mean": "初めの",
        "number": 597
    },
    "598": {
        "word": "exact",
        "mean": "正確な；まさにその",
        "number": 598
    },
    "599": {
        "word": "precise",
        "mean": "正確な（≒ exact）；精密な；まさにその",
        "number": 599
    },
    "600": {
        "word": "latter",
        "mean": "後者の（⇔ former 前者の），後半の",
        "number": 600
    },
    "601": {
        "word": "commit",
        "mean": "〔commit oneselfまたは受身形で〕献身する；（罪など）を犯す；を投入する",
        "number": 601
    },
    "602": {
        "word": "stimulate",
        "mean": "を刺激する",
        "number": 602
    },
    "603": {
        "word": "enhance",
        "mean": "（価値など）を高める，増す",
        "number": 603
    },
    "604": {
        "word": "pursue",
        "mean": "を追求する；に従事する",
        "number": 604
    },
    "605": {
        "word": "react",
        "mean": "反応する；化学反応を起こす",
        "number": 605
    },
    "606": {
        "word": "disagree",
        "mean": "不賛成である；意見が食い違う",
        "number": 606
    },
    "607": {
        "word": "stare",
        "mean": "じっと見る；を見つめる",
        "number": 607
    },
    "608": {
        "word": "abandon",
        "mean": "を捨てる；を放棄する，断念する",
        "number": 608
    },
    "609": {
        "word": "quit",
        "mean": "をやめる；（場所）を去る",
        "number": 609
    },
    "610": {
        "word": "capture",
        "mean": "をとらえる；をとりこにする",
        "number": 610
    },
    "611": {
        "word": "transfer",
        "mean": "を移す；を伝える；移る；乗り換える",
        "number": 611
    },
    "612": {
        "word": "bother",
        "mean": "を悩ます；（～を）気にかける（about / with）",
        "number": 612
    },
    "613": {
        "word": "persuade",
        "mean": "を説得する；に確信させる",
        "number": 613
    },
    "614": {
        "word": "rent",
        "mean": "を賃借りする；を賃貸しする",
        "number": 614
    },
    "615": {
        "word": "breed",
        "mean": "を繁殖させる，育てる；繁殖する",
        "number": 615
    },
    "616": {
        "word": "invest",
        "mean": "（を）投資する；に（～を）与える（with）",
        "number": 616
    },
    "617": {
        "word": "reserve",
        "mean": "を予約する；を取っておく；（判断など）を保留する",
        "number": 617
    },
    "618": {
        "word": "trace",
        "mean": "（足跡・起源など）をたどる；を捜し出す",
        "number": 618
    },
    "619": {
        "word": "illustrate",
        "mean": "を説明する；に挿絵を入れる",
        "number": 619
    },
    "620": {
        "word": "advise",
        "mean": "に忠告［助言］する；（を）助言する",
        "number": 620
    },
    "621": {
        "word": "convey",
        "mean": "を伝える；を運ぶ，運搬する",
        "number": 621
    },
    "622": {
        "word": "attach",
        "mean": "を（取り）付ける；を付与する",
        "number": 622
    },
    "623": {
        "word": "stretch",
        "mean": "を伸ばす；を広げる；伸びる；及ぶ",
        "number": 623
    },
    "624": {
        "word": "puzzle",
        "mean": "を当惑させる",
        "number": 624
    },
    "625": {
        "word": "disturb",
        "mean": "をかき乱す；を妨害する；を動揺させる",
        "number": 625
    },
    "626": {
        "word": "crash",
        "mean": "衝突する，墜落する；をぶつけて壊す",
        "number": 626
    },
    "627": {
        "word": "cope",
        "mean": "うまく処理する",
        "number": 627
    },
    "628": {
        "word": "permit",
        "mean": "を許可する（≒ allow）（⇔ forbid ⇒ 1013）",
        "number": 628
    },
    "629": {
        "word": "impress",
        "mean": "を感動させる；に印象を与える",
        "number": 629
    },
    "630": {
        "word": "suspect",
        "mean": "ではないかと思う；（人）を疑う",
        "number": 630
    },
    "631": {
        "word": "upset",
        "mean": "を動揺させる；をだめにする",
        "number": 631
    },
    "632": {
        "word": "frighten",
        "mean": "（人）を怖がらせる",
        "number": 632
    },
    "633": {
        "word": "import",
        "mean": "を輸入する（⇔ export （を）輸出する）；を取り込む",
        "number": 633
    },
    "634": {
        "word": "export",
        "mean": "（を）輸出する（⇔ import を輸入する）",
        "number": 634
    },
    "635": {
        "word": "investigate",
        "mean": "を調査する；を究明する；（～を）調査する（into）",
        "number": 635
    },
    "636": {
        "word": "monitor",
        "mean": "を監視する；を傍受する",
        "number": 636
    },
    "637": {
        "word": "calculate",
        "mean": "を計算する；を予測する",
        "number": 637
    },
    "638": {
        "word": "eliminate",
        "mean": "を取り除く",
        "number": 638
    },
    "639": {
        "word": "ease",
        "mean": "を軽減する；和らぐ；緩む",
        "number": 639
    },
    "640": {
        "word": "launch",
        "mean": "を開始する；を売り出す；を発射する",
        "number": 640
    },
    "641": {
        "word": "sequence",
        "mean": "連続；一連（のもの）",
        "number": 641
    },
    "642": {
        "word": "therapy",
        "mean": "療法；心理療法",
        "number": 642
    },
    "643": {
        "word": "symptom",
        "mean": "症状；兆候（≒ sign）",
        "number": 643
    },
    "644": {
        "word": "incident",
        "mean": "出来事，事件；紛争",
        "number": 644
    },
    "645": {
        "word": "witness",
        "mean": "目撃者（≒ eyewitness）；証人；証拠，証言",
        "number": 645
    },
    "646": {
        "word": "sum",
        "mean": "（金）額；合計；要点",
        "number": 646
    },
    "647": {
        "word": "burden",
        "mean": "負担；（重い）義務；積み荷",
        "number": 647
    },
    "648": {
        "word": "tone",
        "mean": "口調；音色；雰囲気；色調",
        "number": 648
    },
    "649": {
        "word": "honor",
        "mean": "光栄；名誉（⇔ dishonor 不名誉）；敬意",
        "number": 649
    },
    "650": {
        "word": "award",
        "mean": "（～の）賞（for）；（証書などの）授与",
        "number": 650
    },
    "651": {
        "word": "priority",
        "mean": "優先（事項）",
        "number": 651
    },
    "652": {
        "word": "logic",
        "mean": "論理；道理；論理学",
        "number": 652
    },
    "653": {
        "word": "minimum",
        "mean": "最小限度（⇔ maximum ⇒ 965）",
        "number": 653
    },
    "654": {
        "word": "exception",
        "mean": "（～の）例外（to）",
        "number": 654
    },
    "655": {
        "word": "clue",
        "mean": "（～の）手がかり（to / about）；（パズルの）ヒント",
        "number": 655
    },
    "656": {
        "word": "bond",
        "mean": "絆；債券；束縛；接着剤",
        "number": 656
    },
    "657": {
        "word": "virus",
        "mean": "ウイルス；（感染症の）病原体",
        "number": 657
    },
    "658": {
        "word": "surgery",
        "mean": "（外科）手術；外科，外科医学",
        "number": 658
    },
    "659": {
        "word": "insurance",
        "mean": "保険；保険料；保険金",
        "number": 659
    },
    "660": {
        "word": "frame",
        "mean": "枠，（額）縁；骨組み；体格",
        "number": 660
    },
    "661": {
        "word": "shelter",
        "mean": "避難（所），保護",
        "number": 661
    },
    "662": {
        "word": "territory",
        "mean": "領土；（活動の）領域；（動物の）テリトリー",
        "number": 662
    },
    "663": {
        "word": "boundary",
        "mean": "境界（線）；〔通例～ries〕限界",
        "number": 663
    },
    "664": {
        "word": "habitat",
        "mean": "生息地；（人の）居住地",
        "number": 664
    },
    "665": {
        "word": "district",
        "mean": "地区；行政区",
        "number": 665
    },
    "666": {
        "word": "conservation",
        "mean": "（動植物などの）保護；保存",
        "number": 666
    },
    "667": {
        "word": "harvest",
        "mean": "収穫（物）；収穫期；漁獲高",
        "number": 667
    },
    "668": {
        "word": "predator",
        "mean": "捕食動物；略奪者",
        "number": 668
    },
    "669": {
        "word": "trap",
        "mean": "わな；苦境",
        "number": 669
    },
    "670": {
        "word": "trick",
        "mean": "こつ；策略；いたずら；芸当",
        "number": 670
    },
    "671": {
        "word": "fault",
        "mean": "〔通例one's ～〕責任；欠点；誤り",
        "number": 671
    },
    "672": {
        "word": "discount",
        "mean": "割引",
        "number": 672
    },
    "673": {
        "word": "bias",
        "mean": "偏見；傾向",
        "number": 673
    },
    "674": {
        "word": "cooperation",
        "mean": "協力，共同",
        "number": 674
    },
    "675": {
        "word": "patent",
        "mean": "特許（権）；特許品",
        "number": 675
    },
    "676": {
        "word": "dialogue",
        "mean": "対話，会話；意見の交換",
        "number": 676
    },
    "677": {
        "word": "component",
        "mean": "構成要素；部品",
        "number": 677
    },
    "678": {
        "word": "reputation",
        "mean": "評判；名声",
        "number": 678
    },
    "679": {
        "word": "verbal",
        "mean": "言葉の；口頭での；動詞の",
        "number": 679
    },
    "680": {
        "word": "internal",
        "mean": "内部の（⇔ external ⇒ 989）；国内の；内面的な",
        "number": 680
    },
    "681": {
        "word": "solid",
        "mean": "しっかりした；硬い；固体の",
        "number": 681
    },
    "682": {
        "word": "remote",
        "mean": "（～から）遠く離れた（from）；かけ離れた",
        "number": 682
    },
    "683": {
        "word": "principal",
        "mean": "主要な；資本金の",
        "number": 683
    },
    "684": {
        "word": "sophisticated",
        "mean": "高性能の，精巧な；洗練された",
        "number": 684
    },
    "685": {
        "word": "equivalent",
        "mean": "等しい，相当する",
        "number": 685
    },
    "686": {
        "word": "rational",
        "mean": "理性的な；合理的な",
        "number": 686
    },
    "687": {
        "word": "relevant",
        "mean": "関係がある；適切な",
        "number": 687
    },
    "688": {
        "word": "absolute",
        "mean": "絶対的な（⇔ relative 相対的な）",
        "number": 688
    },
    "689": {
        "word": "frequent",
        "mean": "頻繁な",
        "number": 689
    },
    "690": {
        "word": "permanent",
        "mean": "永続的な（⇔ temporary ⇒ 793）",
        "number": 690
    },
    "691": {
        "word": "intense",
        "mean": "強烈な；熱烈な",
        "number": 691
    },
    "692": {
        "word": "meaningful",
        "mean": "意味のある",
        "number": 692
    },
    "693": {
        "word": "evil",
        "mean": "邪悪な；有害な",
        "number": 693
    },
    "694": {
        "word": "extinct",
        "mean": "絶滅した；廃止された",
        "number": 694
    },
    "695": {
        "word": "random",
        "mean": "無作為の；手当たり次第の",
        "number": 695
    },
    "696": {
        "word": "raw",
        "mean": "生の；未加工の",
        "number": 696
    },
    "697": {
        "word": "rude",
        "mean": "無礼な（⇔ polite 礼儀正しい）；粗野な",
        "number": 697
    },
    "698": {
        "word": "mere",
        "mean": "単なる，ほんの",
        "number": 698
    },
    "699": {
        "word": "tropical",
        "mean": "熱帯の",
        "number": 699
    },
    "700": {
        "word": "forth",
        "mean": "前へ，先へ；それ以降",
        "number": 700
    },
    "701": {
        "word": "possess",
        "mean": "を所有している；の心をとらえる",
        "number": 701
    },
    "702": {
        "word": "dominate",
        "mean": "を支配する；（～より）優勢である（over）",
        "number": 702
    },
    "703": {
        "word": "guarantee",
        "mean": "を保証する",
        "number": 703
    },
    "704": {
        "word": "melt",
        "mean": "溶ける；なごむ；を溶かす",
        "number": 704
    },
    "705": {
        "word": "embarrass",
        "mean": "に恥ずかしい思いをさせる",
        "number": 705
    },
    "706": {
        "word": "discourage",
        "mean": "（人）にやる気をなくさせる；を落胆させる（⇔ encourage ⇒ 30）",
        "number": 706
    },
    "707": {
        "word": "detect",
        "mean": "を感知する；を見つけ出す；に気づく",
        "number": 707
    },
    "708": {
        "word": "devote",
        "mean": "をささげる",
        "number": 708
    },
    "709": {
        "word": "urge",
        "mean": "に（強く）促す；を強く主張する；を駆り立てる",
        "number": 709
    },
    "710": {
        "word": "lend",
        "mean": "を貸す（⇔ borrow を借りる）；（人）に（助言・援助など）を与える",
        "number": 710
    },
    "711": {
        "word": "restrict",
        "mean": "を制限する",
        "number": 711
    },
    "712": {
        "word": "isolate",
        "mean": "を孤立させる",
        "number": 712
    },
    "713": {
        "word": "accompany",
        "mean": "に同行する；に付随する",
        "number": 713
    },
    "714": {
        "word": "exhaust",
        "mean": "を疲れ果てさせる；を使い尽くす；排気する",
        "number": 714
    },
    "715": {
        "word": "annoy",
        "mean": "を悩ます；〔受身形で〕腹が立つ",
        "number": 715
    },
    "716": {
        "word": "endanger",
        "mean": "を危険にさらす",
        "number": 716
    },
    "717": {
        "word": "acknowledge",
        "mean": "（事実など）を認める（≒ admit ⇒ 406）；に謝意を表す",
        "number": 717
    },
    "718": {
        "word": "admire",
        "mean": "に（～のことで）敬服［感心］する（for）",
        "number": 718
    },
    "719": {
        "word": "evaluate",
        "mean": "を評価する；を査定する",
        "number": 719
    },
    "720": {
        "word": "declare",
        "mean": "を宣言する；を申告する",
        "number": 720
    },
    "721": {
        "word": "secure",
        "mean": "を確保する；を守る",
        "number": 721
    },
    "722": {
        "word": "specialize",
        "mean": "専門とする；【英】（～を）専攻する（in）（≒ 【米】major）",
        "number": 722
    },
    "723": {
        "word": "attribute",
        "mean": "（結果など）を（～に）帰する（to）",
        "number": 723
    },
    "724": {
        "word": "pretend",
        "mean": "（の）ふりをする",
        "number": 724
    },
    "725": {
        "word": "bury",
        "mean": "を埋める；を埋葬する；を隠す",
        "number": 725
    },
    "726": {
        "word": "reverse",
        "mean": "を逆転させる；を反対にする",
        "number": 726
    },
    "727": {
        "word": "resist",
        "mean": "に抵抗する；〔通例否定文で〕を我慢する",
        "number": 727
    },
    "728": {
        "word": "scare",
        "mean": "をおびえさせる；を脅す",
        "number": 728
    },
    "729": {
        "word": "imitate",
        "mean": "をまねる；を模造する",
        "number": 729
    },
    "730": {
        "word": "assist",
        "mean": "（を）援助する；を手伝う",
        "number": 730
    },
    "731": {
        "word": "resemble",
        "mean": "に似ている",
        "number": 731
    },
    "732": {
        "word": "retire",
        "mean": "（～から）引退する，退職する（from）；退く",
        "number": 732
    },
    "733": {
        "word": "neglect",
        "mean": "をおろそかにする，怠る；を無視する",
        "number": 733
    },
    "734": {
        "word": "collapse",
        "mean": "崩壊する；（人が）倒れる；を折り畳む",
        "number": 734
    },
    "735": {
        "word": "reform",
        "mean": "を改革する；を改心させる",
        "number": 735
    },
    "736": {
        "word": "protest",
        "mean": "（に）抗議する；を主張する",
        "number": 736
    },
    "737": {
        "word": "owe",
        "mean": "に借りがある；のおかげである",
        "number": 737
    },
    "738": {
        "word": "sustain",
        "mean": "を持続させる；を支える",
        "number": 738
    },
    "739": {
        "word": "assign",
        "mean": "を割り当てる；を（～に）配属する（to）",
        "number": 739
    },
    "740": {
        "word": "accomplish",
        "mean": "を成し遂げる",
        "number": 740
    },
    "741": {
        "word": "wisdom",
        "mean": "知恵；賢明さ；学識",
        "number": 741
    },
    "742": {
        "word": "literacy",
        "mean": "読み書きの能力；（特定分野の）知識",
        "number": 742
    },
    "743": {
        "word": "heritage",
        "mean": "遺産",
        "number": 743
    },
    "744": {
        "word": "mission",
        "mean": "使命；（外交）使節団；布教",
        "number": 744
    },
    "745": {
        "word": "license",
        "mean": "免許（証）；許可",
        "number": 745
    },
    "746": {
        "word": "elite",
        "mean": "〔通例the ～〕〔集合的に〕エリート",
        "number": 746
    },
    "747": {
        "word": "layer",
        "mean": "層",
        "number": 747
    },
    "748": {
        "word": "motor",
        "mean": "モーター；原動力",
        "number": 748
    },
    "749": {
        "word": "protein",
        "mean": "たんぱく質",
        "number": 749
    },
    "750": {
        "word": "profession",
        "mean": "職業；専門職；同業者仲間",
        "number": 750
    },
    "751": {
        "word": "editor",
        "mean": "編集者；編集長",
        "number": 751
    },
    "752": {
        "word": "agent",
        "mean": "仲介者，代理人；薬剤",
        "number": 752
    },
    "753": {
        "word": "globe",
        "mean": "地球（≒ earth）；世界；球",
        "number": 753
    },
    "754": {
        "word": "haven",
        "mean": "避難所，保護区；港",
        "number": 754
    },
    "755": {
        "word": "row",
        "mean": "列；（建物が並ぶ）通り",
        "number": 755
    },
    "756": {
        "word": "sacrifice",
        "mean": "犠牲；いけにえ",
        "number": 756
    },
    "757": {
        "word": "means",
        "mean": "〔単数・複数扱い〕手段；〔複数扱い〕資力，収入",
        "number": 757
    },
    "758": {
        "word": "session",
        "mean": "集まり；（議会の）会期；（開会中の）議会",
        "number": 758
    },
    "759": {
        "word": "league",
        "mean": "（競技）連盟；同盟",
        "number": 759
    },
    "760": {
        "word": "contest",
        "mean": "コンテスト，競技（会）；争い",
        "number": 760
    },
    "761": {
        "word": "guard",
        "mean": "警備員；警備隊；監視，警戒",
        "number": 761
    },
    "762": {
        "word": "opponent",
        "mean": "（試合・論争などの）相手；反対者",
        "number": 762
    },
    "763": {
        "word": "glance",
        "mean": "（～を）ちらっと見ること（at）",
        "number": 763
    },
    "764": {
        "word": "divorce",
        "mean": "離婚；分離",
        "number": 764
    },
    "765": {
        "word": "tissue",
        "mean": "（生物の）組織；ティッシュペーパー",
        "number": 765
    },
    "766": {
        "word": "liquid",
        "mean": "液体",
        "number": 766
    },
    "767": {
        "word": "inequality",
        "mean": "不平等；不公平な事柄",
        "number": 767
    },
    "768": {
        "word": "prejudice",
        "mean": "（～に対する）偏見（against）（≒ bias）",
        "number": 768
    },
    "769": {
        "word": "justice",
        "mean": "公正，正義；司法",
        "number": 769
    },
    "770": {
        "word": "guideline",
        "mean": "指針，ガイドライン；指導基準",
        "number": 770
    },
    "771": {
        "word": "platform",
        "mean": "プラットフォーム；演壇；舞台",
        "number": 771
    },
    "772": {
        "word": "sector",
        "mean": "（社会・経済などの）部門，セクター；（都市内の）地域",
        "number": 772
    },
    "773": {
        "word": "channel",
        "mean": "チャンネル；伝達経路；海峡",
        "number": 773
    },
    "774": {
        "word": "glacier",
        "mean": "氷河",
        "number": 774
    },
    "775": {
        "word": "primate",
        "mean": "霊長目の動物",
        "number": 775
    },
    "776": {
        "word": "usage",
        "mean": "（使）用法；語法；習慣",
        "number": 776
    },
    "777": {
        "word": "fortune",
        "mean": "財産；幸運（≒ luck）；運命",
        "number": 777
    },
    "778": {
        "word": "correlation",
        "mean": "相互関係，相関（関係）",
        "number": 778
    },
    "779": {
        "word": "artistic",
        "mean": "芸術的な",
        "number": 779
    },
    "780": {
        "word": "literary",
        "mean": "文学の；文語の（⇔ colloquial 口語体の）",
        "number": 780
    },
    "781": {
        "word": "classic",
        "mean": "第一級の；典型的な；定番の",
        "number": 781
    },
    "782": {
        "word": "liberal",
        "mean": "自由主義の；寛大な；一般教養の",
        "number": 782
    },
    "783": {
        "word": "concrete",
        "mean": "具体的な（⇔ abstract ⇒ 586）；有形の",
        "number": 783
    },
    "784": {
        "word": "slight",
        "mean": "わずかな；取るに足らない",
        "number": 784
    },
    "785": {
        "word": "federal",
        "mean": "連邦（政府）の",
        "number": 785
    },
    "786": {
        "word": "primitive",
        "mean": "原始的な；未開の",
        "number": 786
    },
    "787": {
        "word": "unfamiliar",
        "mean": "（～に）不慣れな（with）；（～に）（よく）知られていない（to）",
        "number": 787
    },
    "788": {
        "word": "subtle",
        "mean": "微妙な；（気体などが）希薄な",
        "number": 788
    },
    "789": {
        "word": "plain",
        "mean": "明らかな；平易な；飾りのない；率直な",
        "number": 789
    },
    "790": {
        "word": "marine",
        "mean": "海の；船舶の",
        "number": 790
    },
    "791": {
        "word": "apparent",
        "mean": "明白な；一見～らしい",
        "number": 791
    },
    "792": {
        "word": "reluctant",
        "mean": "気が進まない，嫌がる（⇔ willing ⇒ 298）",
        "number": 792
    },
    "793": {
        "word": "temporary",
        "mean": "一時的な（⇔ permanent ⇒ 690）",
        "number": 793
    },
    "794": {
        "word": "guilty",
        "mean": "罪悪感のある；（～について）有罪の（of）",
        "number": 794
    },
    "795": {
        "word": "royal",
        "mean": "王の",
        "number": 795
    },
    "796": {
        "word": "pure",
        "mean": "純粋な；潔白な；まったくの",
        "number": 796
    },
    "797": {
        "word": "incredible",
        "mean": "信じられない；すばらしい",
        "number": 797
    },
    "798": {
        "word": "eager",
        "mean": "（～を）熱望して（for）；熱心な",
        "number": 798
    },
    "799": {
        "word": "adequate",
        "mean": "十分な；適切な（⇔ inadequate 不適切な）",
        "number": 799
    },
    "800": {
        "word": "via",
        "mean": "～経由で；～の媒介で",
        "number": 800
    },
    "801": {
        "word": "assess",
        "mean": "を評価する；を査定する",
        "number": 801
    },
    "802": {
        "word": "approve",
        "mean": "賛成する；を承認する",
        "number": 802
    },
    "803": {
        "word": "remark",
        "mean": "と述べる；（～について）意見を述べる（on / upon）",
        "number": 803
    },
    "804": {
        "word": "pose",
        "mean": "（危険）を引き起こす；（問題など）を提起する；ポーズをとる；（～を）装う（as）",
        "number": 804
    },
    "805": {
        "word": "yield",
        "mean": "をもたらす；を（～に）譲る（to）；（～に）屈する（to）",
        "number": 805
    },
    "806": {
        "word": "exhibit",
        "mean": "を示す，見せる；を展示する",
        "number": 806
    },
    "807": {
        "word": "distribute",
        "mean": "を（～に）分配する（to）；〔受身形で〕分布する",
        "number": 807
    },
    "808": {
        "word": "command",
        "mean": "を命じる；を指揮する；（景色）を見渡せる",
        "number": 808
    },
    "809": {
        "word": "occupy",
        "mean": "（空間・時間）を占める；を占領する",
        "number": 809
    },
    "810": {
        "word": "pop",
        "mean": "ひょいと動く；不意に現れる；ポンとはじける",
        "number": 810
    },
    "811": {
        "word": "pile",
        "mean": "を積み重ねる；積み重なる",
        "number": 811
    },
    "812": {
        "word": "greet",
        "mean": "に挨拶する；を迎える",
        "number": 812
    },
    "813": {
        "word": "apologize",
        "mean": "（～に；～のことで）謝る（to；for）；弁明する",
        "number": 813
    },
    "814": {
        "word": "frustrate",
        "mean": "をいら立たせる；（計画・希望など）を挫折させる",
        "number": 814
    },
    "815": {
        "word": "relieve",
        "mean": "を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する",
        "number": 815
    },
    "816": {
        "word": "derive",
        "mean": "由来する；を引き出す；を推論する",
        "number": 816
    },
    "817": {
        "word": "deserve",
        "mean": "に値する",
        "number": 817
    },
    "818": {
        "word": "peer",
        "mean": "（～を）じっと見る（at / into）",
        "number": 818
    },
    "819": {
        "word": "defeat",
        "mean": "を負かす（≒ beat）；を失敗させる",
        "number": 819
    },
    "820": {
        "word": "convert",
        "mean": "を変える；を改宗［転向］させる；を交換する",
        "number": 820
    },
    "821": {
        "word": "wed",
        "mean": "と結婚する；を（～と）結婚させる（to）",
        "number": 821
    },
    "822": {
        "word": "delight",
        "mean": "を喜ばせる；（～を）大いに喜ぶ（in）",
        "number": 822
    },
    "823": {
        "word": "boost",
        "mean": "を押し上げる；を増加させる",
        "number": 823
    },
    "824": {
        "word": "endure",
        "mean": "に耐える（≒ put up with）；（に）持ちこたえる",
        "number": 824
    },
    "825": {
        "word": "correspond",
        "mean": "一致する；（～に）相当する（to）；文通する",
        "number": 825
    },
    "826": {
        "word": "impose",
        "mean": "を課す；を押しつける",
        "number": 826
    },
    "827": {
        "word": "rescue",
        "mean": "を救う",
        "number": 827
    },
    "828": {
        "word": "resolve",
        "mean": "を解決する；を決意する；を議決する",
        "number": 828
    },
    "829": {
        "word": "register",
        "mean": "を記録する，登録する；（～に）登録する（for）",
        "number": 829
    },
    "830": {
        "word": "interrupt",
        "mean": "を中断させる；（の）邪魔をする",
        "number": 830
    },
    "831": {
        "word": "rid",
        "mean": "から（～を）取り除く，除去する（of）",
        "number": 831
    },
    "832": {
        "word": "prohibit",
        "mean": "を禁止する",
        "number": 832
    },
    "833": {
        "word": "compose",
        "mean": "を構成する；を創作する；を鎮静する",
        "number": 833
    },
    "834": {
        "word": "misunderstand",
        "mean": "（を）誤解する",
        "number": 834
    },
    "835": {
        "word": "punish",
        "mean": "を罰する；に損傷を与える",
        "number": 835
    },
    "836": {
        "word": "ruin",
        "mean": "をだめにする；を破滅させる；破滅する",
        "number": 836
    },
    "837": {
        "word": "defend",
        "mean": "を防御する；を弁護する",
        "number": 837
    },
    "838": {
        "word": "embrace",
        "mean": "を受け入れる；（を）抱擁する；を包含する",
        "number": 838
    },
    "839": {
        "word": "modify",
        "mean": "を修正する；を緩和する",
        "number": 839
    },
    "840": {
        "word": "qualify",
        "mean": "（人）に資格を与える；資格がある",
        "number": 840
    },
    "841": {
        "word": "passion",
        "mean": "情熱；熱中；激怒",
        "number": 841
    },
    "842": {
        "word": "enthusiasm",
        "mean": "（～への）熱情，熱意（for）",
        "number": 842
    },
    "843": {
        "word": "phase",
        "mean": "段階，局面；側面",
        "number": 843
    },
    "844": {
        "word": "mode",
        "mean": "方式；気分；形態；流行",
        "number": 844
    },
    "845": {
        "word": "span",
        "mean": "期間；範囲",
        "number": 845
    },
    "846": {
        "word": "gravity",
        "mean": "重力，引力；重量；重大さ",
        "number": 846
    },
    "847": {
        "word": "orbit",
        "mean": "軌道；（活動・勢力などの）範囲",
        "number": 847
    },
    "848": {
        "word": "asteroid",
        "mean": "小惑星（≒ minor planet）；ヒトデ（＝ starfish）",
        "number": 848
    },
    "849": {
        "word": "core",
        "mean": "核心；芯",
        "number": 849
    },
    "850": {
        "word": "soul",
        "mean": "精神；魂，霊魂；生気",
        "number": 850
    },
    "851": {
        "word": "nerve",
        "mean": "神経；〔～s〕神経過敏；（...する）度胸（to do）",
        "number": 851
    },
    "852": {
        "word": "infection",
        "mean": "感染（症）",
        "number": 852
    },
    "853": {
        "word": "mall",
        "mean": "【主に米】 モール，ショッピングセンター",
        "number": 853
    },
    "854": {
        "word": "grocery",
        "mean": "〔～ies〕食料雑貨；食料雑貨店",
        "number": 854
    },
    "855": {
        "word": "humor",
        "mean": "ユーモア；気分，機嫌；気質",
        "number": 855
    },
    "856": {
        "word": "instinct",
        "mean": "本能；勘，直感；（自然に起こる）衝動",
        "number": 856
    },
    "857": {
        "word": "faith",
        "mean": "（～への）信頼（in）；信仰（心）",
        "number": 857
    },
    "858": {
        "word": "courage",
        "mean": "勇気",
        "number": 858
    },
    "859": {
        "word": "incentive",
        "mean": "動機（づけ）；報奨金",
        "number": 859
    },
    "860": {
        "word": "prospect",
        "mean": "見込み；〔～s〕（未来への）展望；有望な人",
        "number": 860
    },
    "861": {
        "word": "obstacle",
        "mean": "（～に対する）障害（物）（to）",
        "number": 861
    },
    "862": {
        "word": "architecture",
        "mean": "建築；建築様式；構造",
        "number": 862
    },
    "863": {
        "word": "stem",
        "mean": "（草木の）茎，幹",
        "number": 863
    },
    "864": {
        "word": "illusion",
        "mean": "錯覚，思い違い；幻想",
        "number": 864
    },
    "865": {
        "word": "discrimination",
        "mean": "（～に対する）差別（against）；区別",
        "number": 865
    },
    "866": {
        "word": "shame",
        "mean": "恥；残念なこと",
        "number": 866
    },
    "867": {
        "word": "drought",
        "mean": "干ばつ；（慢性的な）不足",
        "number": 867
    },
    "868": {
        "word": "flavor",
        "mean": "風味；特色",
        "number": 868
    },
    "869": {
        "word": "portion",
        "mean": "部分；1人前；割り当て",
        "number": 869
    },
    "870": {
        "word": "recipe",
        "mean": "調理法，レシピ；手順；秘訣",
        "number": 870
    },
    "871": {
        "word": "luxury",
        "mean": "ぜいたく（品）；〔形容詞的に〕豪華な",
        "number": 871
    },
    "872": {
        "word": "chip",
        "mean": "小片，破片；欠けた箇所；集積回路",
        "number": 872
    },
    "873": {
        "word": "ritual",
        "mean": "儀式；（日常の）習慣的行為",
        "number": 873
    },
    "874": {
        "word": "sake",
        "mean": "〔for the ～ ofで〕のために，の目的で；に免じて",
        "number": 874
    },
    "875": {
        "word": "prefecture",
        "mean": "（日本の）県，府；（フランスなどの）県",
        "number": 875
    },
    "876": {
        "word": "council",
        "mean": "（地方）議会；評議会；（公の）会議",
        "number": 876
    },
    "877": {
        "word": "administration",
        "mean": "管理（部）；行政；政府（機関）",
        "number": 877
    },
    "878": {
        "word": "curriculum",
        "mean": "教育課程，カリキュラム",
        "number": 878
    },
    "879": {
        "word": "precious",
        "mean": "貴重な；高価な（≒ valuable）",
        "number": 879
    },
    "880": {
        "word": "generous",
        "mean": "寛大な；気前のよい（⇔ stingy けちな）；豊富な",
        "number": 880
    },
    "881": {
        "word": "casual",
        "mean": "何気ない；形式ばらない",
        "number": 881
    },
    "882": {
        "word": "optimistic",
        "mean": "楽観的な（⇔ pessimistic ⇒ 1593）",
        "number": 882
    },
    "883": {
        "word": "rough",
        "mean": "粗い；大まかな；乱暴な",
        "number": 883
    },
    "884": {
        "word": "unpleasant",
        "mean": "不愉快な；不親切な，無礼な",
        "number": 884
    },
    "885": {
        "word": "Arctic",
        "mean": "北極の（⇔ Antarctic 南極の）",
        "number": 885
    },
    "886": {
        "word": "ultimate",
        "mean": "究極の",
        "number": 886
    },
    "887": {
        "word": "deaf",
        "mean": "耳が聞こえない（≒ hard of hearing）",
        "number": 887
    },
    "888": {
        "word": "genuine",
        "mean": "本物の（≒ authentic ⇒ 1580, real）；偽りのない",
        "number": 888
    },
    "889": {
        "word": "manual",
        "mean": "体［手］を使う；手の；手動式の",
        "number": 889
    },
    "890": {
        "word": "mechanical",
        "mean": "機械の；機械的な",
        "number": 890
    },
    "891": {
        "word": "instant",
        "mean": "即時の，すぐの；即席の",
        "number": 891
    },
    "892": {
        "word": "spare",
        "mean": "余分の，予備の",
        "number": 892
    },
    "893": {
        "word": "immune",
        "mean": "（～に対して）免疫を持つ（to）；（～を）免れた（from）",
        "number": 893
    },
    "894": {
        "word": "harsh",
        "mean": "厳しい；（光・色・味などが）不快な",
        "number": 894
    },
    "895": {
        "word": "collective",
        "mean": "集団の，共同の",
        "number": 895
    },
    "896": {
        "word": "inevitable",
        "mean": "避けられない",
        "number": 896
    },
    "897": {
        "word": "profound",
        "mean": "重大な；深い；難解な",
        "number": 897
    },
    "898": {
        "word": "steady",
        "mean": "着実な，一定の；安定した",
        "number": 898
    },
    "899": {
        "word": "mature",
        "mean": "成熟した（⇔ immature 未熟な）；熟した",
        "number": 899
    },
    "900": {
        "word": "likewise",
        "mean": "同様に（≒ in the same way）",
        "number": 900
    },
    "901": {
        "word": "chase",
        "mean": "（を）追跡する；（を）追求する",
        "number": 901
    },
    "902": {
        "word": "sue",
        "mean": "を告訴する；（～を求めて）訴訟を起こす（for）",
        "number": 902
    },
    "903": {
        "word": "gaze",
        "mean": "じっと見る",
        "number": 903
    },
    "904": {
        "word": "slip",
        "mean": "滑る；滑り落ちる；そっと動く",
        "number": 904
    },
    "905": {
        "word": "load",
        "mean": "に積む；に負わせる",
        "number": 905
    },
    "906": {
        "word": "overwhelm",
        "mean": "を圧倒する；を（精神的に）打ちのめす",
        "number": 906
    },
    "907": {
        "word": "wander",
        "mean": "歩き回る；それる；はぐれる",
        "number": 907
    },
    "908": {
        "word": "float",
        "mean": "漂う，浮かぶ；を浮かべる",
        "number": 908
    },
    "909": {
        "word": "pour",
        "mean": "を注ぐ；激しく降る；押し寄せる",
        "number": 909
    },
    "910": {
        "word": "substitute",
        "mean": "を代わりに使う；（～の）代理をする（for）",
        "number": 910
    },
    "911": {
        "word": "pronounce",
        "mean": "を発音する；を宣言する",
        "number": 911
    },
    "912": {
        "word": "shrink",
        "mean": "縮む，縮小する；減少する；ひるむ",
        "number": 912
    },
    "913": {
        "word": "restore",
        "mean": "を回復させる；を修復する",
        "number": 913
    },
    "914": {
        "word": "trigger",
        "mean": "を引き起こす；のきっかけとなる",
        "number": 914
    },
    "915": {
        "word": "grab",
        "mean": "をつかむ；を横取りする；を急いで食べる",
        "number": 915
    },
    "916": {
        "word": "retain",
        "mean": "を保持する；を覚えている",
        "number": 916
    },
    "917": {
        "word": "reproduce",
        "mean": "を複製する；を繁殖させる；繁殖する",
        "number": 917
    },
    "918": {
        "word": "bob",
        "mean": "上下に動く；急に動く；を上下に動かす",
        "number": 918
    },
    "919": {
        "word": "entertain",
        "mean": "を楽しませる；をもてなす",
        "number": 919
    },
    "920": {
        "word": "interfere",
        "mean": "干渉する，介入する；邪魔する",
        "number": 920
    },
    "921": {
        "word": "cultivate",
        "mean": "を養う；を耕す；を栽培する",
        "number": 921
    },
    "922": {
        "word": "underlie",
        "mean": "の根底にある",
        "number": 922
    },
    "923": {
        "word": "anticipate",
        "mean": "を予期する；楽しみに待つ",
        "number": 923
    },
    "924": {
        "word": "justify",
        "mean": "を正当化する",
        "number": 924
    },
    "925": {
        "word": "regulate",
        "mean": "を規制する；を調整する",
        "number": 925
    },
    "926": {
        "word": "scan",
        "mean": "を走査［スキャン］する；をざっと見る；を注意深く調べる",
        "number": 926
    },
    "927": {
        "word": "classify",
        "mean": "を分類する；を機密扱いにする",
        "number": 927
    },
    "928": {
        "word": "submit",
        "mean": "を提出する；〔submit oneselfで〕（～に）従う（to）",
        "number": 928
    },
    "929": {
        "word": "pause",
        "mean": "（一時的に）中止する；（一瞬）立ち止まる",
        "number": 929
    },
    "930": {
        "word": "lean",
        "mean": "傾く；寄りかかる；をもたせかける",
        "number": 930
    },
    "931": {
        "word": "bump",
        "mean": "ぶつかる；をぶつける",
        "number": 931
    },
    "932": {
        "word": "fold",
        "mean": "を折り畳む；（両腕）を組む；（折り）畳める",
        "number": 932
    },
    "933": {
        "word": "hesitate",
        "mean": "躊躇する，ためらう",
        "number": 933
    },
    "934": {
        "word": "pump",
        "mean": "（液体・気体）をポンプで送り込む；をくみ出す；を注ぎ込む",
        "number": 934
    },
    "935": {
        "word": "mount",
        "mean": "を据えつける；に着手する；（自転車など）に乗る；増える",
        "number": 935
    },
    "936": {
        "word": "exceed",
        "mean": "を超える；に勝る",
        "number": 936
    },
    "937": {
        "word": "undergo",
        "mean": "を経験する；（手術など）を受ける；に耐える",
        "number": 937
    },
    "938": {
        "word": "confront",
        "mean": "に立ち向かう；（困難などが）に立ちはだかる",
        "number": 938
    },
    "939": {
        "word": "consult",
        "mean": "（に）相談する；を参照する",
        "number": 939
    },
    "940": {
        "word": "fulfill",
        "mean": "を実現させる；を果たす；を満たす",
        "number": 940
    },
    "941": {
        "word": "privilege",
        "mean": "特権，特典",
        "number": 941
    },
    "942": {
        "word": "formation",
        "mean": "形成；構成（物）；隊列",
        "number": 942
    },
    "943": {
        "word": "dimension",
        "mean": "側面，局面；次元；寸法",
        "number": 943
    },
    "944": {
        "word": "neuron",
        "mean": "ニューロン，神経単位",
        "number": 944
    },
    "945": {
        "word": "sensation",
        "mean": "感覚；大評判",
        "number": 945
    },
    "946": {
        "word": "chart",
        "mean": "図，グラフ；海図；ヒットチャート",
        "number": 946
    },
    "947": {
        "word": "geography",
        "mean": "〔the ～〕地理；地理学",
        "number": 947
    },
    "948": {
        "word": "panel",
        "mean": "（専門家の）一団；討論者一同；羽目板",
        "number": 948
    },
    "949": {
        "word": "semester",
        "mean": "【主に米】 （2学期制の）学期",
        "number": 949
    },
    "950": {
        "word": "workforce",
        "mean": "労働人口，総労働力；全従業員（数）",
        "number": 950
    },
    "951": {
        "word": "mill",
        "mean": "製造工場；製粉所；粉ひき機",
        "number": 951
    },
    "952": {
        "word": "abuse",
        "mean": "乱用；虐待",
        "number": 952
    },
    "953": {
        "word": "vice",
        "mean": "（道徳上の）悪（⇔ virtue ⇒ 1078）；欠点",
        "number": 953
    },
    "954": {
        "word": "fate",
        "mean": "運命；結末；最期",
        "number": 954
    },
    "955": {
        "word": "tragedy",
        "mean": "悲劇（的な事態）（⇔ comedy 喜劇）",
        "number": 955
    },
    "956": {
        "word": "scenario",
        "mean": "（予想される）筋書き，事態；脚本",
        "number": 956
    },
    "957": {
        "word": "allergy",
        "mean": "アレルギー",
        "number": 957
    },
    "958": {
        "word": "wound",
        "mean": "（銃弾・刃物などによる）傷；痛手",
        "number": 958
    },
    "959": {
        "word": "antibiotic",
        "mean": "〔通例～s〕抗生物質",
        "number": 959
    },
    "960": {
        "word": "vaccine",
        "mean": "ワクチン",
        "number": 960
    },
    "961": {
        "word": "metaphor",
        "mean": "隠喩；比喩",
        "number": 961
    },
    "962": {
        "word": "folk",
        "mean": "人々；〔～s〕皆さん；〔one's ～s〕家族",
        "number": 962
    },
    "963": {
        "word": "fare",
        "mean": "（乗り物の）料金",
        "number": 963
    },
    "964": {
        "word": "transition",
        "mean": "移り変わり；過渡期",
        "number": 964
    },
    "965": {
        "word": "maximum",
        "mean": "最大限（⇔ minimum ⇒ 653）",
        "number": 965
    },
    "966": {
        "word": "galaxy",
        "mean": "星雲，銀河；〔the G～〕銀河系",
        "number": 966
    },
    "967": {
        "word": "mineral",
        "mean": "鉱物；ミネラル",
        "number": 967
    },
    "968": {
        "word": "skeleton",
        "mean": "骨格；骨組み；概略",
        "number": 968
    },
    "969": {
        "word": "counterpart",
        "mean": "相当する物［人］",
        "number": 969
    },
    "970": {
        "word": "stroke",
        "mean": "脳卒中；（ボールを）打つこと；（雷などの）一撃",
        "number": 970
    },
    "971": {
        "word": "pedestrian",
        "mean": "歩行者",
        "number": 971
    },
    "972": {
        "word": "trail",
        "mean": "（野山などの）小道；跡；手がかり",
        "number": 972
    },
    "973": {
        "word": "ecology",
        "mean": "生態学；生態系；環境保護",
        "number": 973
    },
    "974": {
        "word": "sibling",
        "mean": "きょうだい（の1人）",
        "number": 974
    },
    "975": {
        "word": "ratio",
        "mean": "比率",
        "number": 975
    },
    "976": {
        "word": "mixture",
        "mean": "混合（物）",
        "number": 976
    },
    "977": {
        "word": "charm",
        "mean": "魅力；お守り",
        "number": 977
    },
    "978": {
        "word": "ambition",
        "mean": "（～に対する）願望，野望（for）；野心",
        "number": 978
    },
    "979": {
        "word": "prominent",
        "mean": "卓越した；目立つ",
        "number": 979
    },
    "980": {
        "word": "radical",
        "mean": "急進的な；根本的な",
        "number": 980
    },
    "981": {
        "word": "prompt",
        "mean": "即座の，迅速な",
        "number": 981
    },
    "982": {
        "word": "informal",
        "mean": "形式ばらない，略式の（⇔ formal 正式の）；（言葉が）くだけた",
        "number": 982
    },
    "983": {
        "word": "mutual",
        "mean": "相互の；共通の",
        "number": 983
    },
    "984": {
        "word": "neutral",
        "mean": "中立の；（特徴・表情などが）はっきりしない",
        "number": 984
    },
    "985": {
        "word": "alert",
        "mean": "警戒して；敏速な",
        "number": 985
    },
    "986": {
        "word": "magnetic",
        "mean": "磁気の；磁石の；人を引きつける",
        "number": 986
    },
    "987": {
        "word": "polar",
        "mean": "極地の；電極の",
        "number": 987
    },
    "988": {
        "word": "fluent",
        "mean": "流ちょうな",
        "number": 988
    },
    "989": {
        "word": "external",
        "mean": "外部の（⇔ internal ⇒ 680）；対外的な",
        "number": 989
    },
    "990": {
        "word": "passive",
        "mean": "受動的な；消極的な",
        "number": 990
    },
    "991": {
        "word": "awful",
        "mean": "ひどい；嫌な；ものすごい",
        "number": 991
    },
    "992": {
        "word": "unrelated",
        "mean": "無関係の；血縁関係がない",
        "number": 992
    },
    "993": {
        "word": "cruel",
        "mean": "残酷な；むごい",
        "number": 993
    },
    "994": {
        "word": "fake",
        "mean": "偽の；見せかけだけの",
        "number": 994
    },
    "995": {
        "word": "vulnerable",
        "mean": "（攻撃などに）弱い，もろい；傷つきやすい",
        "number": 995
    },
    "996": {
        "word": "urgent",
        "mean": "緊急の",
        "number": 996
    },
    "997": {
        "word": "spiritual",
        "mean": "精神の（⇔ material ⇒ 73）；霊的な",
        "number": 997
    },
    "998": {
        "word": "modest",
        "mean": "謙虚な（≒ humble）；適度な；質素な",
        "number": 998
    },
    "999": {
        "word": "keen",
        "mean": "熱心な；鋭敏な；（感情・関心などが）強い",
        "number": 999
    },
    "1000": {
        "word": "nonetheless",
        "mean": "それにもかかわらず，それでもなお（≒ nevertheless）",
        "number": 1000
    },
    "1001": {
        "word": "negotiate",
        "mean": "交渉する；を（交渉して）取り決める",
        "number": 1001
    },
    "1002": {
        "word": "grasp",
        "mean": "を把握［理解］する；をしっかり握る",
        "number": 1002
    },
    "1003": {
        "word": "donate",
        "mean": "を寄付する；（臓器・血液）を提供する",
        "number": 1003
    },
    "1004": {
        "word": "arrest",
        "mean": "を逮捕する；を止める；（注意）を引く",
        "number": 1004
    },
    "1005": {
        "word": "crack",
        "mean": "ひびが入る；にひびを入れる",
        "number": 1005
    },
    "1006": {
        "word": "tap",
        "mean": "を軽くたたく；（液体）を出す；を盗聴する",
        "number": 1006
    },
    "1007": {
        "word": "split",
        "mean": "を分割する；を分担する；分裂する",
        "number": 1007
    },
    "1008": {
        "word": "forecast",
        "mean": "を予想［予測］する",
        "number": 1008
    },
    "1009": {
        "word": "exclude",
        "mean": "を除外する（⇔include を含む）",
        "number": 1009
    },
    "1010": {
        "word": "overlook",
        "mean": "を見落とす；を大目に見る；を見渡す",
        "number": 1010
    },
    "1011": {
        "word": "burst",
        "mean": "破裂する；（～を）突然始める（into）",
        "number": 1011
    },
    "1012": {
        "word": "heal",
        "mean": "（人・傷など）を治す；治る",
        "number": 1012
    },
    "1013": {
        "word": "forbid",
        "mean": "を禁じる（⇔permit 許可する）",
        "number": 1013
    },
    "1014": {
        "word": "install",
        "mean": "をインストールする；を設置する；を就任させる",
        "number": 1014
    },
    "1015": {
        "word": "diminish",
        "mean": "を減らす；減少する（≒decrease）",
        "number": 1015
    },
    "1016": {
        "word": "cite",
        "mean": "を引き合いに出す；を引用する",
        "number": 1016
    },
    "1017": {
        "word": "quote",
        "mean": "を引用する；を引き合いに出す",
        "number": 1017
    },
    "1018": {
        "word": "dispute",
        "mean": "に異議を唱える；（を）議論する",
        "number": 1018
    },
    "1019": {
        "word": "highlight",
        "mean": "を目立たせる、強調する",
        "number": 1019
    },
    "1020": {
        "word": "distract",
        "mean": "（注意など）をそらす",
        "number": 1020
    },
    "1021": {
        "word": "cheat",
        "mean": "をだます；不正をする",
        "number": 1021
    },
    "1022": {
        "word": "foster",
        "mean": "をはぐくむ；を養育する；を心に抱く",
        "number": 1022
    },
    "1023": {
        "word": "obey",
        "mean": "に従う；に服従する",
        "number": 1023
    },
    "1024": {
        "word": "bend",
        "mean": "を曲げる；を屈服させる；曲がる",
        "number": 1024
    },
    "1025": {
        "word": "deprive",
        "mean": "から（権利などを）奪う",
        "number": 1025
    },
    "1026": {
        "word": "govern",
        "mean": "（を）統治する、支配する",
        "number": 1026
    },
    "1027": {
        "word": "log",
        "mean": "〔log onで〕ログオンする；を記録する",
        "number": 1027
    },
    "1028": {
        "word": "transmit",
        "mean": "を伝える；（電波・信号など）を送る",
        "number": 1028
    },
    "1029": {
        "word": "bully",
        "mean": "をいじめる；を脅す",
        "number": 1029
    },
    "1030": {
        "word": "leap",
        "mean": "跳ぶ；さっと動く；急上昇する",
        "number": 1030
    },
    "1031": {
        "word": "astonish",
        "mean": "を驚かす",
        "number": 1031
    },
    "1032": {
        "word": "thrill",
        "mean": "をぞくぞくさせる；わくわくする",
        "number": 1032
    },
    "1033": {
        "word": "nod",
        "mean": "うなずく；会釈する；うとうとする",
        "number": 1033
    },
    "1034": {
        "word": "bow",
        "mean": "おじぎする；屈服する",
        "number": 1034
    },
    "1035": {
        "word": "blend",
        "mean": "を混ぜる；を調和させる；（～に）溶け込む（into）",
        "number": 1035
    },
    "1036": {
        "word": "complicate",
        "mean": "を複雑にする",
        "number": 1036
    },
    "1037": {
        "word": "pitch",
        "mean": "を投げる；倒れる；縦揺れする",
        "number": 1037
    },
    "1038": {
        "word": "persist",
        "mean": "続く；固執する",
        "number": 1038
    },
    "1039": {
        "word": "dedicate",
        "mean": "をささげる；を献呈する",
        "number": 1039
    },
    "1040": {
        "word": "equip",
        "mean": "に備えつける",
        "number": 1040
    },
    "1041": {
        "word": "premise",
        "mean": "前提；〔～s〕（建物を含めた）構内、敷地",
        "number": 1041
    },
    "1042": {
        "word": "input",
        "mean": "入力（情報）、投入；（情報・時間などの）提供",
        "number": 1042
    },
    "1043": {
        "word": "merit",
        "mean": "利点（⇔demerit 欠点）；功績；真価",
        "number": 1043
    },
    "1044": {
        "word": "sympathy",
        "mean": "同情；（～に対する）共感（with/for）",
        "number": 1044
    },
    "1045": {
        "word": "compliment",
        "mean": "賛辞；表敬",
        "number": 1045
    },
    "1046": {
        "word": "infrastructure",
        "mean": "インフラ、基本的施設；（経済）基盤",
        "number": 1046
    },
    "1047": {
        "word": "ray",
        "mean": "光線；ひらめき、一筋の光明",
        "number": 1047
    },
    "1048": {
        "word": "distress",
        "mean": "苦悩；苦痛；困窮",
        "number": 1048
    },
    "1049": {
        "word": "joint",
        "mean": "関節；接合（部）",
        "number": 1049
    },
    "1050": {
        "word": "expedition",
        "mean": "遠征（隊）、探検（隊）",
        "number": 1050
    },
    "1051": {
        "word": "adolescent",
        "mean": "青年；青年期の",
        "number": 1051
    },
    "1052": {
        "word": "shade",
        "mean": "（日）陰；色合い；日よけ；微妙な相違",
        "number": 1052
    },
    "1053": {
        "word": "jury",
        "mean": "陪審（員団）；審査員団",
        "number": 1053
    },
    "1054": {
        "word": "ethic",
        "mean": "倫理、道徳；〔～s〕倫理［道徳］規範",
        "number": 1054
    },
    "1055": {
        "word": "penalty",
        "mean": "（刑）罰；罰金；ペナルティー",
        "number": 1055
    },
    "1056": {
        "word": "faculty",
        "mean": "能力、機能；学部；教授陣",
        "number": 1056
    },
    "1057": {
        "word": "scheme",
        "mean": "計画（≒plan）；体系；陰謀",
        "number": 1057
    },
    "1058": {
        "word": "nutrition",
        "mean": "栄養（の摂取）",
        "number": 1058
    },
    "1059": {
        "word": "particle",
        "mean": "（微）粒子；ほんのわずか",
        "number": 1059
    },
    "1060": {
        "word": "molecule",
        "mean": "分子；微粒子",
        "number": 1060
    },
    "1061": {
        "word": "nationality",
        "mean": "国籍；国民；国民性",
        "number": 1061
    },
    "1062": {
        "word": "poll",
        "mean": "世論調査；投票（数）",
        "number": 1062
    },
    "1063": {
        "word": "clinic",
        "mean": "診療所、クリニック；（病院内の）～科",
        "number": 1063
    },
    "1064": {
        "word": "dementia",
        "mean": "認知症",
        "number": 1064
    },
    "1065": {
        "word": "fatigue",
        "mean": "疲労（≒exhaustion）",
        "number": 1065
    },
    "1066": {
        "word": "dilemma",
        "mean": "ジレンマ、板ばさみ",
        "number": 1066
    },
    "1067": {
        "word": "queue",
        "mean": "【英】（順番を待つ）列",
        "number": 1067
    },
    "1068": {
        "word": "curve",
        "mean": "（道路などの）カーブ；曲線",
        "number": 1068
    },
    "1069": {
        "word": "narrative",
        "mean": "物語、話；（小説の）叙述部分、地の文",
        "number": 1069
    },
    "1070": {
        "word": "fingerprint",
        "mean": "指紋",
        "number": 1070
    },
    "1071": {
        "word": "file",
        "mean": "ファイル；（書類の）とじ込み",
        "number": 1071
    },
    "1072": {
        "word": "wilderness",
        "mean": "荒野；（庭・町などの）放置された部分",
        "number": 1072
    },
    "1073": {
        "word": "pesticide",
        "mean": "殺虫剤；除草剤（≒herbicide）",
        "number": 1073
    },
    "1074": {
        "word": "panic",
        "mean": "パニック（状態）；狼狽",
        "number": 1074
    },
    "1075": {
        "word": "fabric",
        "mean": "織物、布（地）；構造",
        "number": 1075
    },
    "1076": {
        "word": "fantasy",
        "mean": "空想；幻想；幻想的作品",
        "number": 1076
    },
    "1077": {
        "word": "fancy",
        "mean": "（気まぐれな）好み；空想；思いつき",
        "number": 1077
    },
    "1078": {
        "word": "virtue",
        "mean": "美徳（⇔vice 悪）；長所；効能",
        "number": 1078
    },
    "1079": {
        "word": "grateful",
        "mean": "感謝している",
        "number": 1079
    },
    "1080": {
        "word": "valid",
        "mean": "妥当な；有効な",
        "number": 1080
    },
    "1081": {
        "word": "elaborate",
        "mean": "入念な；凝った",
        "number": 1081
    },
    "1082": {
        "word": "moderate",
        "mean": "適度な；穏健な",
        "number": 1082
    },
    "1083": {
        "word": "dynamic",
        "mean": "活動的な、精力的な；動的な（⇔static 静的な）",
        "number": 1083
    },
    "1084": {
        "word": "brave",
        "mean": "勇敢な（⇔cowardly 臆病な）；見事な",
        "number": 1084
    },
    "1085": {
        "word": "brilliant",
        "mean": "すばらしい；才能にあふれた；きらめく",
        "number": 1085
    },
    "1086": {
        "word": "tremendous",
        "mean": "途方もない、莫大な；すばらしい",
        "number": 1086
    },
    "1087": {
        "word": "oral",
        "mean": "口頭の",
        "number": 1087
    },
    "1088": {
        "word": "innocent",
        "mean": "無罪の（⇔guilty 有罪の）；無邪気な；無知の",
        "number": 1088
    },
    "1089": {
        "word": "subsequent",
        "mean": "その後の",
        "number": 1089
    },
    "1090": {
        "word": "shallow",
        "mean": "浅い（⇔deep 深い）；浅薄な",
        "number": 1090
    },
    "1091": {
        "word": "indifferent",
        "mean": "無関心な（≒uninterested）",
        "number": 1091
    },
    "1092": {
        "word": "inferior",
        "mean": "より劣った（⇔superior よりすぐれた）",
        "number": 1092
    },
    "1093": {
        "word": "awkward",
        "mean": "気まずい；ぎこちない；厄介な",
        "number": 1093
    },
    "1094": {
        "word": "obese",
        "mean": "肥満した",
        "number": 1094
    },
    "1095": {
        "word": "pregnant",
        "mean": "妊娠した；（～で）満ちている（with）",
        "number": 1095
    },
    "1096": {
        "word": "intimate",
        "mean": "親密な；密接な",
        "number": 1096
    },
    "1097": {
        "word": "medieval",
        "mean": "中世の；時代遅れの",
        "number": 1097
    },
    "1098": {
        "word": "sacred",
        "mean": "神聖な（≒holy）；宗教的な；厳粛な",
        "number": 1098
    },
    "1099": {
        "word": "simultaneously",
        "mean": "（～と）同時に（with）；一斉に",
        "number": 1099
    },
    "1100": {
        "word": "versus",
        "mean": "〔A ～ Bで〕A対B；AかBか",
        "number": 1100
    },
    "1101": {
        "word": "proceed",
        "mean": "進む，進行する；（～を）続行する（with）",
        "number": 1101
    },
    "1102": {
        "word": "orient",
        "mean": "（人）を（環境などに）慣らす（to）；〔受身形で〕（関心などが）（～に）向いている（to / toward）",
        "number": 1102
    },
    "1103": {
        "word": "surf",
        "mean": "（インターネット上の情報など）を見て回る；サーフィンをする",
        "number": 1103
    },
    "1104": {
        "word": "filter",
        "mean": "をろ過する；を取り除く",
        "number": 1104
    },
    "1105": {
        "word": "bind",
        "mean": "を縛る；を束縛する；を結び付ける",
        "number": 1105
    },
    "1106": {
        "word": "resort",
        "mean": "（好ましくない手段に）訴える，頼る（to）",
        "number": 1106
    },
    "1107": {
        "word": "reinforce",
        "mean": "を強化する；を補強する",
        "number": 1107
    },
    "1108": {
        "word": "accumulate",
        "mean": "を蓄積する，集める；積もる",
        "number": 1108
    },
    "1109": {
        "word": "bet",
        "mean": "と確信する，断言する；（金などを）かける",
        "number": 1109
    },
    "1110": {
        "word": "advocate",
        "mean": "を主張する；を擁護する",
        "number": 1110
    },
    "1111": {
        "word": "constitute",
        "mean": "を構成する；になる，に等しい",
        "number": 1111
    },
    "1112": {
        "word": "undertake",
        "mean": "を引き受ける；を保証する；に着手する",
        "number": 1112
    },
    "1113": {
        "word": "grip",
        "mean": "を握る；をとらえる",
        "number": 1113
    },
    "1114": {
        "word": "dismiss",
        "mean": "（意見など）を退ける；を解雇する",
        "number": 1114
    },
    "1115": {
        "word": "fade",
        "mean": "薄れる；衰える",
        "number": 1115
    },
    "1116": {
        "word": "conceal",
        "mean": "を隠す（≒ hide）；を秘密にする（⇔uncover ⇒ 1236）",
        "number": 1116
    },
    "1117": {
        "word": "chew",
        "mean": "（を）かむ；をかみ砕く",
        "number": 1117
    },
    "1118": {
        "word": "swallow",
        "mean": "（を）飲み込む；をうのみにする；に耐える",
        "number": 1118
    },
    "1119": {
        "word": "seal",
        "mean": "を密閉する；に封をする",
        "number": 1119
    },
    "1120": {
        "word": "migrate",
        "mean": "移住する；（鳥などが）渡る",
        "number": 1120
    },
    "1121": {
        "word": "exaggerate",
        "mean": "（を）誇張する；を強調する",
        "number": 1121
    },
    "1122": {
        "word": "accuse",
        "mean": "を非難する；を告訴する",
        "number": 1122
    },
    "1123": {
        "word": "vanish",
        "mean": "消える（≒ disappear）",
        "number": 1123
    },
    "1124": {
        "word": "polish",
        "mean": "を磨く；を洗練させる",
        "number": 1124
    },
    "1125": {
        "word": "wipe",
        "mean": "を拭く；を拭き取る；を消し去る",
        "number": 1125
    },
    "1126": {
        "word": "sweep",
        "mean": "（を）掃く；を一掃する；さっと通過する",
        "number": 1126
    },
    "1127": {
        "word": "mislead",
        "mean": "を誤解させる，欺く；（人）を間違った方向に導く",
        "number": 1127
    },
    "1128": {
        "word": "spoil",
        "mean": "を台無しにする；を甘やかす；だめになる",
        "number": 1128
    },
    "1129": {
        "word": "compound",
        "mean": "を悪化させる；を合成する；を混合する",
        "number": 1129
    },
    "1130": {
        "word": "explode",
        "mean": "爆発する；急増する；を論破する",
        "number": 1130
    },
    "1131": {
        "word": "disgust",
        "mean": "をむかつかせる；に愛想を尽かせる",
        "number": 1131
    },
    "1132": {
        "word": "commute",
        "mean": "通勤［通学］する",
        "number": 1132
    },
    "1133": {
        "word": "decorate",
        "mean": "を装飾する",
        "number": 1133
    },
    "1134": {
        "word": "postpone",
        "mean": "を延期する（≒ put off）",
        "number": 1134
    },
    "1135": {
        "word": "cease",
        "mean": "をやめる；終わる",
        "number": 1135
    },
    "1136": {
        "word": "compromise",
        "mean": "妥協する；を危うくする",
        "number": 1136
    },
    "1137": {
        "word": "elect",
        "mean": "を選出する",
        "number": 1137
    },
    "1138": {
        "word": "extract",
        "mean": "を取り［搾り］出す；を抜粋する",
        "number": 1138
    },
    "1139": {
        "word": "inherit",
        "mean": "を受け継ぐ；を相続する",
        "number": 1139
    },
    "1140": {
        "word": "rear",
        "mean": "（人・動物・植物）を育てる（≒ raise）",
        "number": 1140
    },
    "1141": {
        "word": "empathy",
        "mean": "感情移入，共感",
        "number": 1141
    },
    "1142": {
        "word": "cue",
        "mean": "合図；手がかり；（次の演技の）キュー",
        "number": 1142
    },
    "1143": {
        "word": "enterprise",
        "mean": "企業，事業；企画；進取の気性",
        "number": 1143
    },
    "1144": {
        "word": "output",
        "mean": "生産（高）；出力；排出（量）",
        "number": 1144
    },
    "1145": {
        "word": "congress",
        "mean": "（米国などの）議会；会議",
        "number": 1145
    },
    "1146": {
        "word": "millennium",
        "mean": "千年間，千年紀",
        "number": 1146
    },
    "1147": {
        "word": "mankind",
        "mean": "人類",
        "number": 1147
    },
    "1148": {
        "word": "Muslim",
        "mean": "イスラム教徒",
        "number": 1148
    },
    "1149": {
        "word": "estate",
        "mean": "（動産・不動産などの）財産；私有地",
        "number": 1149
    },
    "1150": {
        "word": "landmine",
        "mean": "地雷",
        "number": 1150
    },
    "1151": {
        "word": "caution",
        "mean": "用心；警告",
        "number": 1151
    },
    "1152": {
        "word": "controversy",
        "mean": "論争",
        "number": 1152
    },
    "1153": {
        "word": "consensus",
        "mean": "総意；（意見の）一致",
        "number": 1153
    },
    "1154": {
        "word": "retail",
        "mean": "小売り（⇔ wholesale 卸売り）",
        "number": 1154
    },
    "1155": {
        "word": "fiber",
        "mean": "繊維（質）；本質；精神力",
        "number": 1155
    },
    "1156": {
        "word": "scent",
        "mean": "（よい）香り；香水",
        "number": 1156
    },
    "1157": {
        "word": "beverage",
        "mean": "（水以外の）飲み物，飲料",
        "number": 1157
    },
    "1158": {
        "word": "supplement",
        "mean": "栄養補助剤，サプリメント；補足",
        "number": 1158
    },
    "1159": {
        "word": "diabetes",
        "mean": "糖尿病",
        "number": 1159
    },
    "1160": {
        "word": "province",
        "mean": "州，省；〔the ～s〕地方；分野",
        "number": 1160
    },
    "1161": {
        "word": "reef",
        "mean": "（岩や砂の）礁；暗礁",
        "number": 1161
    },
    "1162": {
        "word": "microbe",
        "mean": "微生物；細菌",
        "number": 1162
    },
    "1163": {
        "word": "excess",
        "mean": "過剰，超過",
        "number": 1163
    },
    "1164": {
        "word": "gallery",
        "mean": "美術館，画廊；観客，ギャラリー；回廊",
        "number": 1164
    },
    "1165": {
        "word": "fame",
        "mean": "名声",
        "number": 1165
    },
    "1166": {
        "word": "deadline",
        "mean": "締め切り",
        "number": 1166
    },
    "1167": {
        "word": "undergraduate",
        "mean": "学部学生",
        "number": 1167
    },
    "1168": {
        "word": "slavery",
        "mean": "奴隷制度；苦役",
        "number": 1168
    },
    "1169": {
        "word": "prey",
        "mean": "獲物；犠牲者",
        "number": 1169
    },
    "1170": {
        "word": "mess",
        "mean": "散らかった状態［物］；混乱状態",
        "number": 1170
    },
    "1171": {
        "word": "recession",
        "mean": "不況；後退",
        "number": 1171
    },
    "1172": {
        "word": "retreat",
        "mean": "後退，退却；（計画・決定などの）撤回",
        "number": 1172
    },
    "1173": {
        "word": "grave",
        "mean": "墓；〔通例the ～〕死",
        "number": 1173
    },
    "1174": {
        "word": "column",
        "mean": "コラム；（新聞などの）欄；円柱；（縦）列",
        "number": 1174
    },
    "1175": {
        "word": "scenery",
        "mean": "〔集合的に〕景色；背景",
        "number": 1175
    },
    "1176": {
        "word": "plot",
        "mean": "（小説などの）筋；陰謀",
        "number": 1176
    },
    "1177": {
        "word": "sculpture",
        "mean": "彫刻（作品）",
        "number": 1177
    },
    "1178": {
        "word": "tablet",
        "mean": "タブレット（型情報端末）；錠剤；平板",
        "number": 1178
    },
    "1179": {
        "word": "dense",
        "mean": "密集した，密度の高い；（霧などが）濃い",
        "number": 1179
    },
    "1180": {
        "word": "exotic",
        "mean": "外来の；異国風の",
        "number": 1180
    },
    "1181": {
        "word": "acid",
        "mean": "酸性の；酸っぱい；辛辣な",
        "number": 1181
    },
    "1182": {
        "word": "bitter",
        "mean": "苦い，つらい；辛辣な；怒りっぽい",
        "number": 1182
    },
    "1183": {
        "word": "sensible",
        "mean": "賢明な；実用的な；顕著な",
        "number": 1183
    },
    "1184": {
        "word": "noble",
        "mean": "高貴な；堂々とした；高潔な",
        "number": 1184
    },
    "1185": {
        "word": "vague",
        "mean": "漠然とした，あいまいな；おぼろげな",
        "number": 1185
    },
    "1186": {
        "word": "parallel",
        "mean": "（～と）平行［並行］の（to）；類似した",
        "number": 1186
    },
    "1187": {
        "word": "tense",
        "mean": "張り詰めた，緊張した",
        "number": 1187
    },
    "1188": {
        "word": "vertical",
        "mean": "垂直の（⇔ horizontal 水平な）；縦方向の",
        "number": 1188
    },
    "1189": {
        "word": "indigenous",
        "mean": "原産の，先住の；（その土地に）固有の",
        "number": 1189
    },
    "1190": {
        "word": "aboriginal",
        "mean": "〔通例A～〕アボリジニの；原生の，先住の",
        "number": 1190
    },
    "1191": {
        "word": "seasonal",
        "mean": "季節の，季節的な",
        "number": 1191
    },
    "1192": {
        "word": "abundant",
        "mean": "豊富な；（～に）富む（in）",
        "number": 1192
    },
    "1193": {
        "word": "hybrid",
        "mean": "ハイブリッドの；雑種の；混成の",
        "number": 1193
    },
    "1194": {
        "word": "irrelevant",
        "mean": "（～にとって）無関係の（to）；見当違いの",
        "number": 1194
    },
    "1195": {
        "word": "ridiculous",
        "mean": "ばかげた；法外な",
        "number": 1195
    },
    "1196": {
        "word": "fairy",
        "mean": "妖精の（ような）",
        "number": 1196
    },
    "1197": {
        "word": "sensory",
        "mean": "感覚の",
        "number": 1197
    },
    "1198": {
        "word": "chronic",
        "mean": "慢性の（⇔ acute ⇒ 1486）；長引く；常習の",
        "number": 1198
    },
    "1199": {
        "word": "voluntary",
        "mean": "自発的な（⇔ compulsory ⇒ 1384）；無償の",
        "number": 1199
    },
    "1200": {
        "word": "inclined",
        "mean": "傾向がある；傾いた",
        "number": 1200
    },
    "1201": {
        "word": "infer",
        "mean": "を推論する，推測する",
        "number": 1201
    },
    "1202": {
        "word": "esteem",
        "mean": "を尊敬する；を見なす",
        "number": 1202
    },
    "1203": {
        "word": "tackle",
        "mean": "に取り組む；と（～のことで）話をつける（about / on）",
        "number": 1203
    },
    "1204": {
        "word": "venture",
        "mean": "危険を冒して進む；を思い切ってする",
        "number": 1204
    },
    "1205": {
        "word": "accelerate",
        "mean": "を加速させる，促進する；加速する",
        "number": 1205
    },
    "1206": {
        "word": "accustom",
        "mean": "（人）を慣れさせる",
        "number": 1206
    },
    "1207": {
        "word": "amuse",
        "mean": "をおもしろがらせる，楽しませる",
        "number": 1207
    },
    "1208": {
        "word": "flourish",
        "mean": "繁栄する；繁茂する；を振りかざす",
        "number": 1208
    },
    "1209": {
        "word": "thrive",
        "mean": "繁栄する，うまくいく；繁茂する",
        "number": 1209
    },
    "1210": {
        "word": "nurture",
        "mean": "をはぐくむ；を養成する",
        "number": 1210
    },
    "1211": {
        "word": "click",
        "mean": "（を）クリックする；をカチッと鳴らす；カチッと音がする",
        "number": 1211
    },
    "1212": {
        "word": "spin",
        "mean": "回転する；を回転させる；（糸）を紡ぐ",
        "number": 1212
    },
    "1213": {
        "word": "clip",
        "mean": "を切り抜く；を（はさみで）切り取る；をクリップで留める",
        "number": 1213
    },
    "1214": {
        "word": "drag",
        "mean": "を引きずる；ぐずぐずする",
        "number": 1214
    },
    "1215": {
        "word": "cast",
        "mean": "を投じる；に役を当てる",
        "number": 1215
    },
    "1216": {
        "word": "scatter",
        "mean": "をまき散らす；分散する",
        "number": 1216
    },
    "1217": {
        "word": "tempt",
        "mean": "を（...する）気にさせる（to do）；を引きつける",
        "number": 1217
    },
    "1218": {
        "word": "withdraw",
        "mean": "を引き出す；を撤回する；撤退する",
        "number": 1218
    },
    "1219": {
        "word": "yawn",
        "mean": "あくびをする",
        "number": 1219
    },
    "1220": {
        "word": "blink",
        "mean": "まばたきする；点滅する；（目）をまたたく",
        "number": 1220
    },
    "1221": {
        "word": "dye",
        "mean": "を染める；染まる",
        "number": 1221
    },
    "1222": {
        "word": "spill",
        "mean": "をこぼす；こぼれる",
        "number": 1222
    },
    "1223": {
        "word": "irritate",
        "mean": "をいらいらさせる；をひりひりさせる",
        "number": 1223
    },
    "1224": {
        "word": "insult",
        "mean": "を侮辱する（≒ affront）",
        "number": 1224
    },
    "1225": {
        "word": "enforce",
        "mean": "を施行［実施］する；を（～に）強制する（on / upon）",
        "number": 1225
    },
    "1226": {
        "word": "rob",
        "mean": "から（金品を）奪う",
        "number": 1226
    },
    "1227": {
        "word": "drain",
        "mean": "（液体）を流出させる；（液体が）流れ出る",
        "number": 1227
    },
    "1228": {
        "word": "suspend",
        "mean": "を停職［停学，出場停止］にする；を一時的に中断する",
        "number": 1228
    },
    "1229": {
        "word": "drift",
        "mean": "漂う；さまよう；を押し流す",
        "number": 1229
    },
    "1230": {
        "word": "forgive",
        "mean": "を許す；を免除する",
        "number": 1230
    },
    "1231": {
        "word": "revise",
        "mean": "を修正する；を改訂する",
        "number": 1231
    },
    "1232": {
        "word": "recruit",
        "mean": "を募る；に新人を補充する",
        "number": 1232
    },
    "1233": {
        "word": "twist",
        "mean": "をねじる，ひねる；を歪曲する",
        "number": 1233
    },
    "1234": {
        "word": "crush",
        "mean": "を押しつぶす；を弾圧する；を絞り出す",
        "number": 1234
    },
    "1235": {
        "word": "pin",
        "mean": "をピンで留める；を突き刺す",
        "number": 1235
    },
    "1236": {
        "word": "uncover",
        "mean": "を暴く（⇔ conceal ⇒ 1116）；を 発掘する",
        "number": 1236
    },
    "1237": {
        "word": "exploit",
        "mean": "を活用する；を搾取する，につけ込む",
        "number": 1237
    },
    "1238": {
        "word": "implement",
        "mean": "を実行［実施］する",
        "number": 1238
    },
    "1239": {
        "word": "integrate",
        "mean": "を統合する；融合する",
        "number": 1239
    },
    "1240": {
        "word": "incorporate",
        "mean": "を取り入れる；を法人にする；合併する",
        "number": 1240
    },
    "1241": {
        "word": "profile",
        "mean": "人物の紹介；横顔；輪郭",
        "number": 1241
    },
    "1242": {
        "word": "appetite",
        "mean": "食欲；欲求",
        "number": 1242
    },
    "1243": {
        "word": "impulse",
        "mean": "衝動；刺激",
        "number": 1243
    },
    "1244": {
        "word": "script",
        "mean": "台本；筆跡",
        "number": 1244
    },
    "1245": {
        "word": "anniversary",
        "mean": "（～周年）記念日",
        "number": 1245
    },
    "1246": {
        "word": "pension",
        "mean": "年金",
        "number": 1246
    },
    "1247": {
        "word": "temper",
        "mean": "気質，気性；機嫌；かんしゃく",
        "number": 1247
    },
    "1248": {
        "word": "cortex",
        "mean": "皮質；樹皮",
        "number": 1248
    },
    "1249": {
        "word": "syndrome",
        "mean": "症候群；～現象",
        "number": 1249
    },
    "1250": {
        "word": "chamber",
        "mean": "（特定の目的の）部屋；議場；〔the ～〕議院",
        "number": 1250
    },
    "1251": {
        "word": "utility",
        "mean": "公共事業；公共料金；実用性",
        "number": 1251
    },
    "1252": {
        "word": "cattle",
        "mean": "〔集合的に〕牛",
        "number": 1252
    },
    "1253": {
        "word": "herd",
        "mean": "（牛などの）群れ；群衆",
        "number": 1253
    },
    "1254": {
        "word": "fluid",
        "mean": "流動体，液体",
        "number": 1254
    },
    "1255": {
        "word": "pity",
        "mean": "残念なこと；哀れみ",
        "number": 1255
    },
    "1256": {
        "word": "priest",
        "mean": "聖職者",
        "number": 1256
    },
    "1257": {
        "word": "acquaintance",
        "mean": "知人；面識；知識",
        "number": 1257
    },
    "1258": {
        "word": "offspring",
        "mean": "子孫，子；成果",
        "number": 1258
    },
    "1259": {
        "word": "famine",
        "mean": "飢饉；（食糧・物資の）ひどい不足",
        "number": 1259
    },
    "1260": {
        "word": "deforestation",
        "mean": "森林伐採",
        "number": 1260
    },
    "1261": {
        "word": "jail",
        "mean": "刑務所，拘置所（≒ prison）",
        "number": 1261
    },
    "1262": {
        "word": "commodity",
        "mean": "商品；有用なもの",
        "number": 1262
    },
    "1263": {
        "word": "format",
        "mean": "書式，形式；（本などの）型",
        "number": 1263
    },
    "1264": {
        "word": "recipient",
        "mean": "受け取る人；（臓器などの）被提供者",
        "number": 1264
    },
    "1265": {
        "word": "drill",
        "mean": "訓練；（反復）練習；ドリル，錐",
        "number": 1265
    },
    "1266": {
        "word": "inability",
        "mean": "無能，無力",
        "number": 1266
    },
    "1267": {
        "word": "republic",
        "mean": "共和国；共和制",
        "number": 1267
    },
    "1268": {
        "word": "combat",
        "mean": "戦闘；対立",
        "number": 1268
    },
    "1269": {
        "word": "debris",
        "mean": "（破壊された後の）残骸，瓦礫；がらくた",
        "number": 1269
    },
    "1270": {
        "word": "bug",
        "mean": "病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥",
        "number": 1270
    },
    "1271": {
        "word": "fraction",
        "mean": "わずか（≒ bit），一部；分数",
        "number": 1271
    },
    "1272": {
        "word": "index",
        "mean": "指標；索引；指数",
        "number": 1272
    },
    "1273": {
        "word": "intuition",
        "mean": "直観（力），直感",
        "number": 1273
    },
    "1274": {
        "word": "motive",
        "mean": "動機",
        "number": 1274
    },
    "1275": {
        "word": "consent",
        "mean": "同意，承諾",
        "number": 1275
    },
    "1276": {
        "word": "hierarchy",
        "mean": "（社会の）階層制；〔the ～〕支配層",
        "number": 1276
    },
    "1277": {
        "word": "monument",
        "mean": "記念碑，遺跡；金字塔",
        "number": 1277
    },
    "1278": {
        "word": "asset",
        "mean": "〔通例～s〕資産；価値のあるもの；利点",
        "number": 1278
    },
    "1279": {
        "word": "decent",
        "mean": "まずまずの；きちんとした；上品な",
        "number": 1279
    },
    "1280": {
        "word": "competent",
        "mean": "有能な；適任の；満足できる",
        "number": 1280
    },
    "1281": {
        "word": "straightforward",
        "mean": "単純な；率直な",
        "number": 1281
    },
    "1282": {
        "word": "cosmetic",
        "mean": "化粧の，美容の；うわべの",
        "number": 1282
    },
    "1283": {
        "word": "delicate",
        "mean": "繊細な；扱いにくい；もろい",
        "number": 1283
    },
    "1284": {
        "word": "interior",
        "mean": "室内の；内部の（⇔ exterior 外部の）",
        "number": 1284
    },
    "1285": {
        "word": "transparent",
        "mean": "透明な；明快な",
        "number": 1285
    },
    "1286": {
        "word": "aesthetic",
        "mean": "美的な；美学の",
        "number": 1286
    },
    "1287": {
        "word": "deliberate",
        "mean": "故意の；慎重な",
        "number": 1287
    },
    "1288": {
        "word": "demographic",
        "mean": "人口統計学の",
        "number": 1288
    },
    "1289": {
        "word": "prehistoric",
        "mean": "有史以前の；旧式な",
        "number": 1289
    },
    "1290": {
        "word": "innate",
        "mean": "生まれながらの；固有の",
        "number": 1290
    },
    "1291": {
        "word": "mild",
        "mean": "穏やかな；（程度が）軽い",
        "number": 1291
    },
    "1292": {
        "word": "toxic",
        "mean": "有毒な；中毒性の",
        "number": 1292
    },
    "1293": {
        "word": "ashamed",
        "mean": "恥じて",
        "number": 1293
    },
    "1294": {
        "word": "humble",
        "mean": "謙虚な；質素な；身分が低い",
        "number": 1294
    },
    "1295": {
        "word": "peculiar",
        "mean": "特有の；特異な",
        "number": 1295
    },
    "1296": {
        "word": "steep",
        "mean": "（傾斜が）急な；急激な；法外な",
        "number": 1296
    },
    "1297": {
        "word": "trivial",
        "mean": "ささいな，取るに足りない",
        "number": 1297
    },
    "1298": {
        "word": "magnificent",
        "mean": "壮大な；見事な",
        "number": 1298
    },
    "1299": {
        "word": "wireless",
        "mean": "無線（電信）の，ラジオの",
        "number": 1299
    },
    "1300": {
        "word": "ongoing",
        "mean": "継続している，進行中の",
        "number": 1300
    },
    "1301": {
        "word": "assure",
        "mean": "に自信を持って言う；を保証する",
        "number": 1301
    },
    "1302": {
        "word": "precede",
        "mean": "に先行する；に優先する",
        "number": 1302
    },
    "1303": {
        "word": "revive",
        "mean": "を復活させる；復活する",
        "number": 1303
    },
    "1304": {
        "word": "compel",
        "mean": "に強いる",
        "number": 1304
    },
    "1305": {
        "word": "blossom",
        "mean": "花が咲く（≒ bloom）；発展する",
        "number": 1305
    },
    "1306": {
        "word": "terrify",
        "mean": "を怖がらせる；を脅かす",
        "number": 1306
    },
    "1307": {
        "word": "violate",
        "mean": "（法律・規則など）に違反する；を侵害する",
        "number": 1307
    },
    "1308": {
        "word": "suppress",
        "mean": "を抑える；を抑圧する",
        "number": 1308
    },
    "1309": {
        "word": "deceive",
        "mean": "をだます（≒ take in）",
        "number": 1309
    },
    "1310": {
        "word": "manipulate",
        "mean": "を（巧みに）操る；を改ざんする",
        "number": 1310
    },
    "1311": {
        "word": "starve",
        "mean": "飢える；（～を）渇望する（for）；を飢えさせる",
        "number": 1311
    },
    "1312": {
        "word": "flee",
        "mean": "（から）逃げる",
        "number": 1312
    },
    "1313": {
        "word": "whisper",
        "mean": "（を）ささやく",
        "number": 1313
    },
    "1314": {
        "word": "yell",
        "mean": "叫ぶ，どなる",
        "number": 1314
    },
    "1315": {
        "word": "deposit",
        "mean": "を置く；を預ける；を堆積させる",
        "number": 1315
    },
    "1316": {
        "word": "confine",
        "mean": "を限定する；〔通例受身形で〕閉じ込められる",
        "number": 1316
    },
    "1317": {
        "word": "swing",
        "mean": "を揺らす，振る；揺れる；（行動に）さっと移る",
        "number": 1317
    },
    "1318": {
        "word": "prolong",
        "mean": "を長引かせる",
        "number": 1318
    },
    "1319": {
        "word": "depict",
        "mean": "を描く",
        "number": 1319
    },
    "1320": {
        "word": "outline",
        "mean": "の要点を述べる；の輪郭を描く",
        "number": 1320
    },
    "1321": {
        "word": "shed",
        "mean": "を捨て去る；（光など）を放つ；（涙・血）を流す",
        "number": 1321
    },
    "1322": {
        "word": "emit",
        "mean": "（光・熱など）を出す，排出する；（信号）を送る",
        "number": 1322
    },
    "1323": {
        "word": "renew",
        "mean": "を更新する；（資源）を再生する",
        "number": 1323
    },
    "1324": {
        "word": "utilize",
        "mean": "を利用する（≒ make use of）",
        "number": 1324
    },
    "1325": {
        "word": "assert",
        "mean": "を主張する",
        "number": 1325
    },
    "1326": {
        "word": "strain",
        "mean": "に負担をかける；を緊張させる；を漉す",
        "number": 1326
    },
    "1327": {
        "word": "strive",
        "mean": "努力する；争う",
        "number": 1327
    },
    "1328": {
        "word": "dare",
        "mean": "あえて［思い切って］...する",
        "number": 1328
    },
    "1329": {
        "word": "boast",
        "mean": "を誇る；（を）自慢する",
        "number": 1329
    },
    "1330": {
        "word": "startle",
        "mean": "をびっくりさせる（≒ surprise）",
        "number": 1330
    },
    "1331": {
        "word": "offend",
        "mean": "の気分を害する；（に）違反する",
        "number": 1331
    },
    "1332": {
        "word": "compute",
        "mean": "（を）計算する；コンピューターを使う",
        "number": 1332
    },
    "1333": {
        "word": "assemble",
        "mean": "を集める；を組み立てる；集まる",
        "number": 1333
    },
    "1334": {
        "word": "worsen",
        "mean": "を悪化させる；悪化する（≒ deteriorate）",
        "number": 1334
    },
    "1335": {
        "word": "flip",
        "mean": "を（ぱっと）裏返す；を軽くはじく",
        "number": 1335
    },
    "1336": {
        "word": "rub",
        "mean": "（を）こする；（～に）を塗る（on / over）",
        "number": 1336
    },
    "1337": {
        "word": "descend",
        "mean": "（を）降りる（⇔ ascend ⇒ 1839）；受け継がれる",
        "number": 1337
    },
    "1338": {
        "word": "compensate",
        "mean": "補償する（≒ make up）；に償う",
        "number": 1338
    },
    "1339": {
        "word": "comprise",
        "mean": "から成る；を構成する",
        "number": 1339
    },
    "1340": {
        "word": "prevail",
        "mean": "普及している；支配的である；（～に）打ち勝つ（over）",
        "number": 1340
    },
    "1341": {
        "word": "quest",
        "mean": "探究",
        "number": 1341
    },
    "1342": {
        "word": "dignity",
        "mean": "尊厳；威厳",
        "number": 1342
    },
    "1343": {
        "word": "criterion",
        "mean": "（判断・評価の）基準",
        "number": 1343
    },
    "1344": {
        "word": "paradox",
        "mean": "逆説；矛盾",
        "number": 1344
    },
    "1345": {
        "word": "parliament",
        "mean": "（英国などの）議会；国会議員（団）",
        "number": 1345
    },
    "1346": {
        "word": "legislation",
        "mean": "法律；立法",
        "number": 1346
    },
    "1347": {
        "word": "agenda",
        "mean": "協議事項（リスト）；議事日程（表）；（政治上の）課題",
        "number": 1347
    },
    "1348": {
        "word": "mainstream",
        "mean": "（活動・思潮などの）主流；大勢",
        "number": 1348
    },
    "1349": {
        "word": "troop",
        "mean": "〔～s〕軍隊；集団",
        "number": 1349
    },
    "1350": {
        "word": "epidemic",
        "mean": "流行（病）；蔓延",
        "number": 1350
    },
    "1351": {
        "word": "outbreak",
        "mean": "発生，勃発",
        "number": 1351
    },
    "1352": {
        "word": "chaos",
        "mean": "混沌，大混乱",
        "number": 1352
    },
    "1353": {
        "word": "nightmare",
        "mean": "悪夢（のような状況）；不安感",
        "number": 1353
    },
    "1354": {
        "word": "horror",
        "mean": "恐怖；強い嫌悪；嫌な物［人］",
        "number": 1354
    },
    "1355": {
        "word": "cluster",
        "mean": "集団；（植物の）房，束",
        "number": 1355
    },
    "1356": {
        "word": "pollen",
        "mean": "花粉",
        "number": 1356
    },
    "1357": {
        "word": "hive",
        "mean": "ミツバチの巣（箱）；人の集まる所",
        "number": 1357
    },
    "1358": {
        "word": "irrigation",
        "mean": "灌漑",
        "number": 1358
    },
    "1359": {
        "word": "dose",
        "mean": "（薬の1回分の）服用量；放射線の1回の照射量",
        "number": 1359
    },
    "1360": {
        "word": "suicide",
        "mean": "自殺；自殺的行為",
        "number": 1360
    },
    "1361": {
        "word": "feast",
        "mean": "祝宴；大ごちそう；楽しみ",
        "number": 1361
    },
    "1362": {
        "word": "cuisine",
        "mean": "（独特の）料理，料理法",
        "number": 1362
    },
    "1363": {
        "word": "rumor",
        "mean": "うわさ",
        "number": 1363
    },
    "1364": {
        "word": "proverb",
        "mean": "ことわざ（≒ saying）",
        "number": 1364
    },
    "1365": {
        "word": "signature",
        "mean": "署名；特徴",
        "number": 1365
    },
    "1366": {
        "word": "formula",
        "mean": "方法，解決策；公式",
        "number": 1366
    },
    "1367": {
        "word": "tuition",
        "mean": "【主に米】 授業料（＝ 【英】tuition fees）；（個人）指導",
        "number": 1367
    },
    "1368": {
        "word": "intake",
        "mean": "摂取量；受け入れ数；取り入れること",
        "number": 1368
    },
    "1369": {
        "word": "spectrum",
        "mean": "スペクトル；（波動・変動の）範囲",
        "number": 1369
    },
    "1370": {
        "word": "kidney",
        "mean": "腎臓",
        "number": 1370
    },
    "1371": {
        "word": "gear",
        "mean": "用具（一式），器具；歯車；ギア",
        "number": 1371
    },
    "1372": {
        "word": "aisle",
        "mean": "（座席間などの）通路",
        "number": 1372
    },
    "1373": {
        "word": "grief",
        "mean": "深い悲しみ",
        "number": 1373
    },
    "1374": {
        "word": "destiny",
        "mean": "運命",
        "number": 1374
    },
    "1375": {
        "word": "skull",
        "mean": "頭骨，頭蓋骨；頭脳",
        "number": 1375
    },
    "1376": {
        "word": "tomb",
        "mean": "墓",
        "number": 1376
    },
    "1377": {
        "word": "monk",
        "mean": "修道士，僧（⇔ nun 修道女，尼）",
        "number": 1377
    },
    "1378": {
        "word": "worship",
        "mean": "崇拝，礼拝（式）；賛美",
        "number": 1378
    },
    "1379": {
        "word": "outstanding",
        "mean": "際立った；未払いの；未解決の",
        "number": 1379
    },
    "1380": {
        "word": "unprecedented",
        "mean": "前例のない；空前の",
        "number": 1380
    },
    "1381": {
        "word": "infinite",
        "mean": "無限の（⇔ finite 有限の）；無数の",
        "number": 1381
    },
    "1382": {
        "word": "worthwhile",
        "mean": "価値がある；立派な",
        "number": 1382
    },
    "1383": {
        "word": "indispensable",
        "mean": "不可欠な（⇔ dispensable なくてもすむ）",
        "number": 1383
    },
    "1384": {
        "word": "compulsory",
        "mean": "義務的な，強制的な（⇔ voluntary ⇒ 1199）",
        "number": 1384
    },
    "1385": {
        "word": "probable",
        "mean": "十分にありそうな",
        "number": 1385
    },
    "1386": {
        "word": "ambiguous",
        "mean": "あいまいな；多義的な",
        "number": 1386
    },
    "1387": {
        "word": "obscure",
        "mean": "（世に）知られていない；不明瞭な",
        "number": 1387
    },
    "1388": {
        "word": "skeptical",
        "mean": "（～に）懐疑的な（of ⇒ about）",
        "number": 1388
    },
    "1389": {
        "word": "fragile",
        "mean": "壊れやすい；虚弱な",
        "number": 1389
    },
    "1390": {
        "word": "static",
        "mean": "静的な（⇔ dynamic ⇒ 1083）；動きのない",
        "number": 1390
    },
    "1391": {
        "word": "gradual",
        "mean": "徐々の，緩やかな",
        "number": 1391
    },
    "1392": {
        "word": "vocal",
        "mean": "声の，発声の；はっきりものを言う",
        "number": 1392
    },
    "1393": {
        "word": "vivid",
        "mean": "鮮やかな；生き生きとした",
        "number": 1393
    },
    "1394": {
        "word": "imperial",
        "mean": "帝国の；皇帝の",
        "number": 1394
    },
    "1395": {
        "word": "hostile",
        "mean": "敵意のある（⇔friendly 友好的な）",
        "number": 1395
    },
    "1396": {
        "word": "superficial",
        "mean": "表面的な",
        "number": 1396
    },
    "1397": {
        "word": "scarce",
        "mean": "乏しい；珍しい",
        "number": 1397
    },
    "1398": {
        "word": "gross",
        "mean": "総計の；甚だしい；粗野な",
        "number": 1398
    },
    "1399": {
        "word": "inherent",
        "mean": "生来の，本来的に備わっている",
        "number": 1399
    },
    "1400": {
        "word": "notable",
        "mean": "注目に値する；著名な",
        "number": 1400
    },
    "1401": {
        "word": "update",
        "mean": "を最新のものにする；をアップデートする",
        "number": 1401
    },
    "1402": {
        "word": "refresh",
        "mean": "（気分）をさわやかにする；（記憶など）を新たにする；を最新のものにする",
        "number": 1402
    },
    "1403": {
        "word": "bloom",
        "mean": "花が咲く；栄える",
        "number": 1403
    },
    "1404": {
        "word": "conquer",
        "mean": "を征服する；を克服する",
        "number": 1404
    },
    "1405": {
        "word": "induce",
        "mean": "を引き起こす；を説得する",
        "number": 1405
    },
    "1406": {
        "word": "attain",
        "mean": "を獲得する，達成する；に達する",
        "number": 1406
    },
    "1407": {
        "word": "spray",
        "mean": "を吹きかける，に吹きつける",
        "number": 1407
    },
    "1408": {
        "word": "retrieve",
        "mean": "（情報）を検索する；を取り戻す；を回復する",
        "number": 1408
    },
    "1409": {
        "word": "portray",
        "mean": "を描く；（の役）を演じる",
        "number": 1409
    },
    "1410": {
        "word": "scratch",
        "mean": "を引っかく；を取り消す，削除する",
        "number": 1410
    },
    "1411": {
        "word": "designate",
        "mean": "を指定する；を任命する",
        "number": 1411
    },
    "1412": {
        "word": "contradict",
        "mean": "と矛盾する；に反対意見を言う",
        "number": 1412
    },
    "1413": {
        "word": "sigh",
        "mean": "ため息をつく",
        "number": 1413
    },
    "1414": {
        "word": "disrupt",
        "mean": "を混乱させる；を分裂させる",
        "number": 1414
    },
    "1415": {
        "word": "depart",
        "mean": "出発する；（～から）それる（from）",
        "number": 1415
    },
    "1416": {
        "word": "navigate",
        "mean": "（を）誘導する；（を）操縦する；（を）航行する",
        "number": 1416
    },
    "1417": {
        "word": "beg",
        "mean": "に（～を）切に頼む（for）；（を）懇願する",
        "number": 1417
    },
    "1418": {
        "word": "inhabit",
        "mean": "に住んでいる；に宿る，存する",
        "number": 1418
    },
    "1419": {
        "word": "diagnose",
        "mean": "（を）診断する",
        "number": 1419
    },
    "1420": {
        "word": "comprehend",
        "mean": "を理解する",
        "number": 1420
    },
    "1421": {
        "word": "oblige",
        "mean": "に義務づける；に恩恵を施す",
        "number": 1421
    },
    "1422": {
        "word": "cram",
        "mean": "に詰め込む；詰め込み勉強をする",
        "number": 1422
    },
    "1423": {
        "word": "flock",
        "mean": "群がる，集まる",
        "number": 1423
    },
    "1424": {
        "word": "underestimate",
        "mean": "（を）過小評価する（⇔ overestimate （を）過大評価する）；（を）軽く見る；を少なく見積もる",
        "number": 1424
    },
    "1425": {
        "word": "clarify",
        "mean": "を明確にする",
        "number": 1425
    },
    "1426": {
        "word": "spark",
        "mean": "を引き起こす；を刺激する；スパークする",
        "number": 1426
    },
    "1427": {
        "word": "seize",
        "mean": "をつかむ；を奪い取る；を没収する",
        "number": 1427
    },
    "1428": {
        "word": "soar",
        "mean": "急上昇する；空高く飛ぶ",
        "number": 1428
    },
    "1429": {
        "word": "glow",
        "mean": "光り［照り］輝く；赤く燃える；紅潮する",
        "number": 1429
    },
    "1430": {
        "word": "disguise",
        "mean": "を（～に）変装させる（as）；を偽る",
        "number": 1430
    },
    "1431": {
        "word": "distort",
        "mean": "を歪める；歪む",
        "number": 1431
    },
    "1432": {
        "word": "undermine",
        "mean": "を徐々にむしばむ；を侵食する",
        "number": 1432
    },
    "1433": {
        "word": "abolish",
        "mean": "を廃止する（≒ do away with）",
        "number": 1433
    },
    "1434": {
        "word": "strip",
        "mean": "を［から］取り去る；を裸にする",
        "number": 1434
    },
    "1435": {
        "word": "dispose",
        "mean": "〔dispose ofで〕を処分する；を（...する）気にさせる（to do）；を配置する",
        "number": 1435
    },
    "1436": {
        "word": "dump",
        "mean": "を投棄する；をどさっと落とす",
        "number": 1436
    },
    "1437": {
        "word": "weave",
        "mean": "を織る；（計画・物語など）を作り上げる",
        "number": 1437
    },
    "1438": {
        "word": "refine",
        "mean": "を洗練する；を精製する",
        "number": 1438
    },
    "1439": {
        "word": "enrich",
        "mean": "を豊かにする；（物質）を濃縮化する",
        "number": 1439
    },
    "1440": {
        "word": "coordinate",
        "mean": "を調整する；を組織する；（服など）をコーディネートする",
        "number": 1440
    },
    "1441": {
        "word": "headline",
        "mean": "（新聞などの）見出し",
        "number": 1441
    },
    "1442": {
        "word": "internship",
        "mean": "【米】 実務［医学］研修；研修期間",
        "number": 1442
    },
    "1443": {
        "word": "outlet",
        "mean": "直売店，特売店；はけ口；【米】（電気の）コンセント（≒ 【英】socket）",
        "number": 1443
    },
    "1444": {
        "word": "remedy",
        "mean": "治療（法）；治療薬；解決法",
        "number": 1444
    },
    "1445": {
        "word": "pill",
        "mean": "錠剤，丸薬；〔the ～〕ピル，経口避妊薬",
        "number": 1445
    },
    "1446": {
        "word": "reception",
        "mean": "反応；宴会；受付；受信（状態）",
        "number": 1446
    },
    "1447": {
        "word": "transaction",
        "mean": "（商）取引；（人と人との）交流",
        "number": 1447
    },
    "1448": {
        "word": "mutation",
        "mean": "突然変異（体）；変化",
        "number": 1448
    },
    "1449": {
        "word": "dairy",
        "mean": "〔集合的に〕乳製品；乳製品加工所［販売者］",
        "number": 1449
    },
    "1450": {
        "word": "compassion",
        "mean": "同情",
        "number": 1450
    },
    "1451": {
        "word": "posture",
        "mean": "姿勢；心構え",
        "number": 1451
    },
    "1452": {
        "word": "curse",
        "mean": "悪態，ののしりの言葉；呪い；〔通例a ～〕災い",
        "number": 1452
    },
    "1453": {
        "word": "funeral",
        "mean": "葬式",
        "number": 1453
    },
    "1454": {
        "word": "census",
        "mean": "国勢調査；交通調査",
        "number": 1454
    },
    "1455": {
        "word": "encyclopedia",
        "mean": "百科事典",
        "number": 1455
    },
    "1456": {
        "word": "cereal",
        "mean": "〔通例～s〕穀物；シリアル（穀物加工食品）",
        "number": 1456
    },
    "1457": {
        "word": "fragment",
        "mean": "断片",
        "number": 1457
    },
    "1458": {
        "word": "patch",
        "mean": "（～の）部分，斑点；継ぎ；貼り薬",
        "number": 1458
    },
    "1459": {
        "word": "rubbish",
        "mean": "【英】 ごみ（≒ 【米】garbage）；つまらないもの",
        "number": 1459
    },
    "1460": {
        "word": "maze",
        "mean": "迷路（≒ labyrinth）；複雑に込み入ったもの",
        "number": 1460
    },
    "1461": {
        "word": "outlook",
        "mean": "見解；見通し；眺め",
        "number": 1461
    },
    "1462": {
        "word": "breakthrough",
        "mean": "大発見，飛躍的進歩",
        "number": 1462
    },
    "1463": {
        "word": "triumph",
        "mean": "勝利；勝利の喜び；偉業",
        "number": 1463
    },
    "1464": {
        "word": "ally",
        "mean": "同盟国；提携者；援助者；盟友",
        "number": 1464
    },
    "1465": {
        "word": "spectator",
        "mean": "（試合などの）観客",
        "number": 1465
    },
    "1466": {
        "word": "sphere",
        "mean": "領域；球体；天体",
        "number": 1466
    },
    "1467": {
        "word": "county",
        "mean": "【米】 郡；【英】州",
        "number": 1467
    },
    "1468": {
        "word": "behalf",
        "mean": "利益，味方",
        "number": 1468
    },
    "1469": {
        "word": "interval",
        "mean": "（時間の）間隔；合間；隔たり；小休止",
        "number": 1469
    },
    "1470": {
        "word": "circulation",
        "mean": "循環；流通；（新聞・雑誌の）発行部数",
        "number": 1470
    },
    "1471": {
        "word": "blade",
        "mean": "刃；（プロペラなどの）羽根；（草などの）葉",
        "number": 1471
    },
    "1472": {
        "word": "theft",
        "mean": "窃盗（罪）",
        "number": 1472
    },
    "1473": {
        "word": "vacuum",
        "mean": "真空；空虚",
        "number": 1473
    },
    "1474": {
        "word": "collision",
        "mean": "衝突；対立",
        "number": 1474
    },
    "1475": {
        "word": "bargain",
        "mean": "買い得品；取引；契約",
        "number": 1475
    },
    "1476": {
        "word": "landmark",
        "mean": "（ある場所の）目印；画期的な出来事",
        "number": 1476
    },
    "1477": {
        "word": "revenue",
        "mean": "歳入（⇔ expenditure 歳出）；収益",
        "number": 1477
    },
    "1478": {
        "word": "treaty",
        "mean": "（国家間の）条約；協定",
        "number": 1478
    },
    "1479": {
        "word": "supreme",
        "mean": "最高の",
        "number": 1479
    },
    "1480": {
        "word": "thorough",
        "mean": "徹底的な；まったくの",
        "number": 1480
    },
    "1481": {
        "word": "naked",
        "mean": "裸の",
        "number": 1481
    },
    "1482": {
        "word": "sincere",
        "mean": "心からの；誠実な",
        "number": 1482
    },
    "1483": {
        "word": "tame",
        "mean": "飼いならされた，人に慣れた；退屈な",
        "number": 1483
    },
    "1484": {
        "word": "insufficient",
        "mean": "不十分な；不適当な",
        "number": 1484
    },
    "1485": {
        "word": "dim",
        "mean": "薄暗い；ぼんやりした",
        "number": 1485
    },
    "1486": {
        "word": "acute",
        "mean": "（痛み・感情などが）激しい；（知覚などが）鋭い；急性の（⇔ chronic ⇒ 1198）",
        "number": 1486
    },
    "1487": {
        "word": "disabled",
        "mean": "障害のある；障害者用の",
        "number": 1487
    },
    "1488": {
        "word": "metropolitan",
        "mean": "大都市の，首都圏の",
        "number": 1488
    },
    "1489": {
        "word": "monetary",
        "mean": "金銭的な；金融の",
        "number": 1489
    },
    "1490": {
        "word": "alternate",
        "mean": "代わりの（≒ alternative）；交互の",
        "number": 1490
    },
    "1491": {
        "word": "partial",
        "mean": "部分的な；不公平な（⇔impartial 公平な）",
        "number": 1491
    },
    "1492": {
        "word": "divine",
        "mean": "神の；神にささげる",
        "number": 1492
    },
    "1493": {
        "word": "drastic",
        "mean": "徹底的な，抜本的な；極端な",
        "number": 1493
    },
    "1494": {
        "word": "fierce",
        "mean": "猛烈な；どう猛な",
        "number": 1494
    },
    "1495": {
        "word": "sole",
        "mean": "唯一の；単独の；独占的な",
        "number": 1495
    },
    "1496": {
        "word": "spontaneous",
        "mean": "自然発生的な；自発的な",
        "number": 1496
    },
    "1497": {
        "word": "spatial",
        "mean": "空間の",
        "number": 1497
    },
    "1498": {
        "word": "neat",
        "mean": "きちんとした；見事な",
        "number": 1498
    },
    "1499": {
        "word": "tidy",
        "mean": "きちんとした，整頓された；相当の",
        "number": 1499
    },
    "1500": {
        "word": "loyal",
        "mean": "（～に）忠実な（to）；誠実な",
        "number": 1500
    },
    "1501": {
        "word": "bless",
        "mean": "に恩恵を与える；に感謝する",
        "number": 1501
    },
    "1502": {
        "word": "regain",
        "mean": "を取り戻す",
        "number": 1502
    },
    "1503": {
        "word": "conform",
        "mean": "順応する；一致する",
        "number": 1503
    },
    "1504": {
        "word": "enroll",
        "mean": "登録する，入会する；を登録させる",
        "number": 1504
    },
    "1505": {
        "word": "entitle",
        "mean": "に権利を与える；に題名をつける",
        "number": 1505
    },
    "1506": {
        "word": "halt",
        "mean": "を止める；止まる",
        "number": 1506
    },
    "1507": {
        "word": "provoke",
        "mean": "（感情・行動など）を引き起こす；を挑発する",
        "number": 1507
    },
    "1508": {
        "word": "invade",
        "mean": "を侵略する；を侵害する；（場所）に殺到する",
        "number": 1508
    },
    "1509": {
        "word": "squeeze",
        "mean": "押し入る；を押し込む；（を）搾る；（を）強く押す",
        "number": 1509
    },
    "1510": {
        "word": "crawl",
        "mean": "はう；ゆっくり進む",
        "number": 1510
    },
    "1511": {
        "word": "digest",
        "mean": "を消化する；を理解する；を要約する",
        "number": 1511
    },
    "1512": {
        "word": "utter",
        "mean": "（声）を発する；（考えなど）を述べる",
        "number": 1512
    },
    "1513": {
        "word": "refrain",
        "mean": "控える",
        "number": 1513
    },
    "1514": {
        "word": "populate",
        "mean": "に住む，の住民である；に人を住まわせる",
        "number": 1514
    },
    "1515": {
        "word": "accommodate",
        "mean": "を収容する；を（～に）適応させる（to）",
        "number": 1515
    },
    "1516": {
        "word": "steer",
        "mean": "（を）操縦する；を（～へ）向ける（to）",
        "number": 1516
    },
    "1517": {
        "word": "drown",
        "mean": "溺死する；を水浸しにする",
        "number": 1517
    },
    "1518": {
        "word": "dip",
        "mean": "を浸す；（手など）を（～に）突っ込む（into / in）；下がる",
        "number": 1518
    },
    "1519": {
        "word": "soak",
        "mean": "を浸す；をずぶぬれにする；浸る",
        "number": 1519
    },
    "1520": {
        "word": "stir",
        "mean": "をかき回す；を揺り動かす",
        "number": 1520
    },
    "1521": {
        "word": "transplant",
        "mean": "を移植する；を移住させる",
        "number": 1521
    },
    "1522": {
        "word": "reassure",
        "mean": "を安心させる",
        "number": 1522
    },
    "1523": {
        "word": "resume",
        "mean": "（を）再開する；を取り戻す",
        "number": 1523
    },
    "1524": {
        "word": "speculate",
        "mean": "（と）推測する；投機する",
        "number": 1524
    },
    "1525": {
        "word": "surpass",
        "mean": "を上回る",
        "number": 1525
    },
    "1526": {
        "word": "appoint",
        "mean": "を任命する；（日時・場所など）を指定する",
        "number": 1526
    },
    "1527": {
        "word": "intrigue",
        "mean": "に興味を持たせる；陰謀を企てる",
        "number": 1527
    },
    "1528": {
        "word": "decay",
        "mean": "腐敗する（≒ rot）；（徐々に）衰える",
        "number": 1528
    },
    "1529": {
        "word": "contaminate",
        "mean": "を汚染する；を堕落させる",
        "number": 1529
    },
    "1530": {
        "word": "swell",
        "mean": "膨張する，腫れる；を膨らませる",
        "number": 1530
    },
    "1531": {
        "word": "delete",
        "mean": "を削除する，消す",
        "number": 1531
    },
    "1532": {
        "word": "tolerate",
        "mean": "を許容する，我慢する（≒ put up with）",
        "number": 1532
    },
    "1533": {
        "word": "envy",
        "mean": "をうらやむ",
        "number": 1533
    },
    "1534": {
        "word": "pray",
        "mean": "（を）祈る",
        "number": 1534
    },
    "1535": {
        "word": "confess",
        "mean": "（を）告白する",
        "number": 1535
    },
    "1536": {
        "word": "resign",
        "mean": "（を）辞任する；を放棄する",
        "number": 1536
    },
    "1537": {
        "word": "dissolve",
        "mean": "（を）溶かす；（議会など）を解散する；（契約など）を解消する；溶ける",
        "number": 1537
    },
    "1538": {
        "word": "unfold",
        "mean": "（閉じたもの）を開く；を明らかにする；開く；明らかになる",
        "number": 1538
    },
    "1539": {
        "word": "awaken",
        "mean": "を目覚めさせる；（～から）覚める（from）",
        "number": 1539
    },
    "1540": {
        "word": "conceive",
        "mean": "（を）思いつく；と想像する；（を）妊娠する",
        "number": 1540
    },
    "1541": {
        "word": "entrepreneur",
        "mean": "起業家，事業家",
        "number": 1541
    },
    "1542": {
        "word": "stake",
        "mean": "利害関係；〔通例～s〕賭け金；杭",
        "number": 1542
    },
    "1543": {
        "word": "surplus",
        "mean": "余剰（⇔ shortage 不足），過剰；黒字",
        "number": 1543
    },
    "1544": {
        "word": "inflation",
        "mean": "インフレ（ーション）；（物価の）高騰",
        "number": 1544
    },
    "1545": {
        "word": "sweatshop",
        "mean": "搾取工場",
        "number": 1545
    },
    "1546": {
        "word": "clash",
        "mean": "衝突；対立；かち合うこと；ガチャンという音",
        "number": 1546
    },
    "1547": {
        "word": "sociology",
        "mean": "社会学",
        "number": 1547
    },
    "1548": {
        "word": "ideology",
        "mean": "イデオロギー，思想傾向",
        "number": 1548
    },
    "1549": {
        "word": "margin",
        "mean": "余白；差；利ざや",
        "number": 1549
    },
    "1550": {
        "word": "realm",
        "mean": "領域；領土",
        "number": 1550
    },
    "1551": {
        "word": "domain",
        "mean": "分野；領域；ドメイン（＝ domain name）",
        "number": 1551
    },
    "1552": {
        "word": "algorithm",
        "mean": "アルゴリズム；問題解決の手順",
        "number": 1552
    },
    "1553": {
        "word": "prairie",
        "mean": "大草原",
        "number": 1553
    },
    "1554": {
        "word": "frontier",
        "mean": "〔通例the ～s〕最先端；〔the ～〕 【米】辺境地；国境",
        "number": 1554
    },
    "1555": {
        "word": "bullet",
        "mean": "銃弾",
        "number": 1555
    },
    "1556": {
        "word": "shield",
        "mean": "盾，防御物",
        "number": 1556
    },
    "1557": {
        "word": "despair",
        "mean": "絶望",
        "number": 1557
    },
    "1558": {
        "word": "radiation",
        "mean": "放射能，放射線",
        "number": 1558
    },
    "1559": {
        "word": "placebo",
        "mean": "偽薬，プラシーボ；気休め",
        "number": 1559
    },
    "1560": {
        "word": "nursery",
        "mean": "託児所；苗床",
        "number": 1560
    },
    "1561": {
        "word": "spouse",
        "mean": "配偶者",
        "number": 1561
    },
    "1562": {
        "word": "makeup",
        "mean": "化粧；化粧品；構成；性質",
        "number": 1562
    },
    "1563": {
        "word": "mummy",
        "mean": "ミイラ；【英】ママ，お母さん（＝ 【米】mommy）",
        "number": 1563
    },
    "1564": {
        "word": "flesh",
        "mean": "（人・動物の）肉；果肉",
        "number": 1564
    },
    "1565": {
        "word": "limb",
        "mean": "手足",
        "number": 1565
    },
    "1566": {
        "word": "odor",
        "mean": "におい；気配",
        "number": 1566
    },
    "1567": {
        "word": "laundry",
        "mean": "洗濯（物）；クリーニング店",
        "number": 1567
    },
    "1568": {
        "word": "tide",
        "mean": "潮（の干満）；動向",
        "number": 1568
    },
    "1569": {
        "word": "questionnaire",
        "mean": "アンケート",
        "number": 1569
    },
    "1570": {
        "word": "nonsense",
        "mean": "ばかげた物［話，考え］；無意味な言葉",
        "number": 1570
    },
    "1571": {
        "word": "revenge",
        "mean": "復讐",
        "number": 1571
    },
    "1572": {
        "word": "intellect",
        "mean": "知性；〔the ～（s）〕知識人",
        "number": 1572
    },
    "1573": {
        "word": "hospitality",
        "mean": "親切なもてなし，歓待；受容性",
        "number": 1573
    },
    "1574": {
        "word": "librarian",
        "mean": "司書，図書館員",
        "number": 1574
    },
    "1575": {
        "word": "manuscript",
        "mean": "（手書きの）原稿；写本",
        "number": 1575
    },
    "1576": {
        "word": "obsession",
        "mean": "（考えなどに）取りつかれること；妄想；強迫観念",
        "number": 1576
    },
    "1577": {
        "word": "hygiene",
        "mean": "衛生（状態）；健康法",
        "number": 1577
    },
    "1578": {
        "word": "paradigm",
        "mean": "理論的枠組み，パラダイム；模範",
        "number": 1578
    },
    "1579": {
        "word": "legitimate",
        "mean": "合法的な；妥当な",
        "number": 1579
    },
    "1580": {
        "word": "authentic",
        "mean": "本物の；信頼できる",
        "number": 1580
    },
    "1581": {
        "word": "empirical",
        "mean": "経験的な；経験主義の",
        "number": 1581
    },
    "1582": {
        "word": "immense",
        "mean": "膨大な",
        "number": 1582
    },
    "1583": {
        "word": "absurd",
        "mean": "ばかげた；不合理な",
        "number": 1583
    },
    "1584": {
        "word": "weird",
        "mean": "異様な（≒ bizarre），奇妙な",
        "number": 1584
    },
    "1585": {
        "word": "accidental",
        "mean": "偶然の；過失による",
        "number": 1585
    },
    "1586": {
        "word": "uneasy",
        "mean": "不安な；落ち着かない；ぎこちない",
        "number": 1586
    },
    "1587": {
        "word": "jealous",
        "mean": "嫉妬深い；用心深い",
        "number": 1587
    },
    "1588": {
        "word": "feminine",
        "mean": "女らしい（⇔ masculine ⇒ 1681）",
        "number": 1588
    },
    "1589": {
        "word": "swift",
        "mean": "素早い",
        "number": 1589
    },
    "1590": {
        "word": "hollow",
        "mean": "空洞の；空虚な；うわべだけの",
        "number": 1590
    },
    "1591": {
        "word": "crude",
        "mean": "大まかな；粗野な；未精製の",
        "number": 1591
    },
    "1592": {
        "word": "sore",
        "mean": "痛い；腹が立って",
        "number": 1592
    },
    "1593": {
        "word": "pessimistic",
        "mean": "悲観的な（⇔ optimistic ⇒ 882）",
        "number": 1593
    },
    "1594": {
        "word": "vain",
        "mean": "無駄な；うぬぼれた",
        "number": 1594
    },
    "1595": {
        "word": "susceptible",
        "mean": "（～の）影響を受けやすい（to）；感染しやすい",
        "number": 1595
    },
    "1596": {
        "word": "edible",
        "mean": "食用の，食べられる",
        "number": 1596
    },
    "1597": {
        "word": "sheer",
        "mean": "純然たる，真の；すごい；（布が）薄地の",
        "number": 1597
    },
    "1598": {
        "word": "explicit",
        "mean": "明白な（⇔ implicit ⇒ 1795）；率直な",
        "number": 1598
    },
    "1599": {
        "word": "prone",
        "mean": "（～に）なりやすい（to）；（...する）傾向がある（to do）",
        "number": 1599
    },
    "1600": {
        "word": "affluent",
        "mean": "裕福な；豊富な",
        "number": 1600
    },
    "1601": {
        "word": "collaborate",
        "mean": "共同して働く；（～に）協力する（with）",
        "number": 1601
    },
    "1602": {
        "word": "exert",
        "mean": "を及ぼす；（力など）を行使する",
        "number": 1602
    },
    "1603": {
        "word": "excel",
        "mean": "（～で）秀でている（in / at）；に勝る",
        "number": 1603
    },
    "1604": {
        "word": "prosper",
        "mean": "栄える，成功する；繁殖する",
        "number": 1604
    },
    "1605": {
        "word": "surge",
        "mean": "殺到する；（感情が）こみ上げる；急騰する",
        "number": 1605
    },
    "1606": {
        "word": "intervene",
        "mean": "（～に）介入する（in）；介在する",
        "number": 1606
    },
    "1607": {
        "word": "insert",
        "mean": "を挿入する",
        "number": 1607
    },
    "1608": {
        "word": "overtake",
        "mean": "を追い抜く；に追いつく（≒ catch up with）；（災難・強い感情などが）を襲う",
        "number": 1608
    },
    "1609": {
        "word": "snap",
        "mean": "をパチンと鳴らす；をポキッと折る；ポキッと折れる；パチンと音を立てる",
        "number": 1609
    },
    "1610": {
        "word": "carve",
        "mean": "を彫る；を切り開く；（肉）を切り分ける",
        "number": 1610
    },
    "1611": {
        "word": "addict",
        "mean": "〔受身形で〕（～の）中毒になる（to）；（～に）凝る",
        "number": 1611
    },
    "1612": {
        "word": "condemn",
        "mean": "を非難する；〔受身形で〕（～の刑を）宣告される（to）",
        "number": 1612
    },
    "1613": {
        "word": "convict",
        "mean": "に有罪を宣告する",
        "number": 1613
    },
    "1614": {
        "word": "dictate",
        "mean": "を指図する；を書き取らせる；を規定する",
        "number": 1614
    },
    "1615": {
        "word": "prescribe",
        "mean": "（薬など）を処方する；を規定する",
        "number": 1615
    },
    "1616": {
        "word": "inhibit",
        "mean": "を抑制する；を妨げる",
        "number": 1616
    },
    "1617": {
        "word": "stray",
        "mean": "はぐれる，（道に）迷う",
        "number": 1617
    },
    "1618": {
        "word": "roam",
        "mean": "（を）歩き回る；放浪する",
        "number": 1618
    },
    "1619": {
        "word": "enclose",
        "mean": "を同封する；を取り囲む",
        "number": 1619
    },
    "1620": {
        "word": "execute",
        "mean": "を実行する；を処刑する",
        "number": 1620
    },
    "1621": {
        "word": "coincide",
        "mean": "同時に起こる；一致する",
        "number": 1621
    },
    "1622": {
        "word": "lag",
        "mean": "遅れる；徐々に弱まる",
        "number": 1622
    },
    "1623": {
        "word": "cling",
        "mean": "しがみつく；くっつく",
        "number": 1623
    },
    "1624": {
        "word": "erase",
        "mean": "を消す",
        "number": 1624
    },
    "1625": {
        "word": "grind",
        "mean": "（穀物など）をひく",
        "number": 1625
    },
    "1626": {
        "word": "knit",
        "mean": "を編む；を結合する；編み物をする",
        "number": 1626
    },
    "1627": {
        "word": "inquire",
        "mean": "（を）尋ねる",
        "number": 1627
    },
    "1628": {
        "word": "betray",
        "mean": "をうっかり表す；を裏切る",
        "number": 1628
    },
    "1629": {
        "word": "leak",
        "mean": "漏れる；を漏らす",
        "number": 1629
    },
    "1630": {
        "word": "smash",
        "mean": "を粉砕する；を強打する；粉々に壊れる；激突する",
        "number": 1630
    },
    "1631": {
        "word": "bounce",
        "mean": "跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される",
        "number": 1631
    },
    "1632": {
        "word": "sprawl",
        "mean": "（都市などが）不規則に広がる；だらしなく手足を伸ばす",
        "number": 1632
    },
    "1633": {
        "word": "converse",
        "mean": "（～と）会話をする（with）",
        "number": 1633
    },
    "1634": {
        "word": "recite",
        "mean": "を暗唱する；を詳述する",
        "number": 1634
    },
    "1635": {
        "word": "disregard",
        "mean": "を無視する；を軽視する",
        "number": 1635
    },
    "1636": {
        "word": "frown",
        "mean": "眉をひそめる",
        "number": 1636
    },
    "1637": {
        "word": "evoke",
        "mean": "を呼び起こす",
        "number": 1637
    },
    "1638": {
        "word": "pledge",
        "mean": "を誓う，約束する；を与えることを約束する",
        "number": 1638
    },
    "1639": {
        "word": "aspire",
        "mean": "（～を）熱望する（to）",
        "number": 1639
    },
    "1640": {
        "word": "contemplate",
        "mean": "（を）熟考する；を予想する",
        "number": 1640
    },
    "1641": {
        "word": "grace",
        "mean": "優美，優雅；分別；（神の）恩寵",
        "number": 1641
    },
    "1642": {
        "word": "enlightenment",
        "mean": "啓蒙，啓発",
        "number": 1642
    },
    "1643": {
        "word": "commerce",
        "mean": "商業；貿易",
        "number": 1643
    },
    "1644": {
        "word": "draft",
        "mean": "下書き；為替手形；隙間風",
        "number": 1644
    },
    "1645": {
        "word": "barrel",
        "mean": "バレル（液量の単位）；たる",
        "number": 1645
    },
    "1646": {
        "word": "timber",
        "mean": "【英】 木材（≒ 【米】lumber）；樹木",
        "number": 1646
    },
    "1647": {
        "word": "garment",
        "mean": "衣服",
        "number": 1647
    },
    "1648": {
        "word": "thread",
        "mean": "糸；（議論などの）筋道",
        "number": 1648
    },
    "1649": {
        "word": "cabinet",
        "mean": "〔しばしばthe C-〕内閣；戸棚",
        "number": 1649
    },
    "1650": {
        "word": "bureau",
        "mean": "（官庁の）局；事務局；案内所",
        "number": 1650
    },
    "1651": {
        "word": "autonomy",
        "mean": "（個人の）自律；自治（権）；自治体",
        "number": 1651
    },
    "1652": {
        "word": "toll",
        "mean": "損害（の程度）；死傷者数；通行料",
        "number": 1652
    },
    "1653": {
        "word": "discourse",
        "mean": "話し合い，会話；講演；論説",
        "number": 1653
    },
    "1654": {
        "word": "superstition",
        "mean": "迷信",
        "number": 1654
    },
    "1655": {
        "word": "glimpse",
        "mean": "ちらりと見えること",
        "number": 1655
    },
    "1656": {
        "word": "arithmetic",
        "mean": "計算；算数",
        "number": 1656
    },
    "1657": {
        "word": "glossary",
        "mean": "用語小辞典；用語集",
        "number": 1657
    },
    "1658": {
        "word": "archive",
        "mean": "〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ",
        "number": 1658
    },
    "1659": {
        "word": "legacy",
        "mean": "遺産",
        "number": 1659
    },
    "1660": {
        "word": "anthropology",
        "mean": "人類学",
        "number": 1660
    },
    "1661": {
        "word": "rage",
        "mean": "激怒；猛威",
        "number": 1661
    },
    "1662": {
        "word": "sorrow",
        "mean": "悲しみ",
        "number": 1662
    },
    "1663": {
        "word": "psychiatrist",
        "mean": "精神科医",
        "number": 1663
    },
    "1664": {
        "word": "ward",
        "mean": "行政区；病棟",
        "number": 1664
    },
    "1665": {
        "word": "stall",
        "mean": "露店；エンスト；失速",
        "number": 1665
    },
    "1666": {
        "word": "flame",
        "mean": "炎；情熱",
        "number": 1666
    },
    "1667": {
        "word": "moisture",
        "mean": "水分；湿気",
        "number": 1667
    },
    "1668": {
        "word": "irony",
        "mean": "皮肉",
        "number": 1668
    },
    "1669": {
        "word": "warrior",
        "mean": "戦士",
        "number": 1669
    },
    "1670": {
        "word": "astronomy",
        "mean": "天文学",
        "number": 1670
    },
    "1671": {
        "word": "probe",
        "mean": "（無人）宇宙探査機；（～の）精査（into）；探り針",
        "number": 1671
    },
    "1672": {
        "word": "altitude",
        "mean": "高度，標高",
        "number": 1672
    },
    "1673": {
        "word": "tumor",
        "mean": "腫瘍；腫れ物",
        "number": 1673
    },
    "1674": {
        "word": "defect",
        "mean": "欠陥；不足",
        "number": 1674
    },
    "1675": {
        "word": "sanitation",
        "mean": "公衆衛生（学）；下水［衛生］設備",
        "number": 1675
    },
    "1676": {
        "word": "longevity",
        "mean": "長寿；寿命；長年勤続",
        "number": 1676
    },
    "1677": {
        "word": "scope",
        "mean": "（活動・能力などの）範囲；余地",
        "number": 1677
    },
    "1678": {
        "word": "sentiment",
        "mean": "感情；感想；感傷",
        "number": 1678
    },
    "1679": {
        "word": "plausible",
        "mean": "もっともらしい",
        "number": 1679
    },
    "1680": {
        "word": "vigorous",
        "mean": "精力的な；激しい；活力のある",
        "number": 1680
    },
    "1681": {
        "word": "masculine",
        "mean": "男らしい（⇔ feminine ⇒ 1588）",
        "number": 1681
    },
    "1682": {
        "word": "rigid",
        "mean": "厳しい；硬直した",
        "number": 1682
    },
    "1683": {
        "word": "adverse",
        "mean": "不都合な；逆の",
        "number": 1683
    },
    "1684": {
        "word": "coherent",
        "mean": "一貫した，筋の通った；結束した",
        "number": 1684
    },
    "1685": {
        "word": "literal",
        "mean": "文字どおりの；逐語的な；散文的な",
        "number": 1685
    },
    "1686": {
        "word": "arbitrary",
        "mean": "恣意的な；独断的な",
        "number": 1686
    },
    "1687": {
        "word": "anonymous",
        "mean": "匿名の",
        "number": 1687
    },
    "1688": {
        "word": "antique",
        "mean": "骨董の，アンティークの；古風な",
        "number": 1688
    },
    "1689": {
        "word": "eternal",
        "mean": "永遠の；不変の",
        "number": 1689
    },
    "1690": {
        "word": "intermediate",
        "mean": "中級の；中間の",
        "number": 1690
    },
    "1691": {
        "word": "subordinate",
        "mean": "（～より）下位の（to）；副次的な",
        "number": 1691
    },
    "1692": {
        "word": "gloomy",
        "mean": "陰気な；薄暗い；悲観的な",
        "number": 1692
    },
    "1693": {
        "word": "thermal",
        "mean": "熱の，熱による；保温用の",
        "number": 1693
    },
    "1694": {
        "word": "faint",
        "mean": "かすかな；めまいがする；弱々しい",
        "number": 1694
    },
    "1695": {
        "word": "naive",
        "mean": "お人よしの，愚直な；純朴な",
        "number": 1695
    },
    "1696": {
        "word": "apt",
        "mean": "（...する）傾向がある（to do）；適切な；利発な",
        "number": 1696
    },
    "1697": {
        "word": "arrogant",
        "mean": "横柄な，傲慢な",
        "number": 1697
    },
    "1698": {
        "word": "extrovert",
        "mean": "外向的な；社交的な",
        "number": 1698
    },
    "1699": {
        "word": "conspicuous",
        "mean": "目立つ",
        "number": 1699
    },
    "1700": {
        "word": "intact",
        "mean": "損なわれていない，手つかずの",
        "number": 1700
    },
    "1701": {
        "word": "embody",
        "mean": "を具現する；を包含する",
        "number": 1701
    },
    "1702": {
        "word": "illuminate",
        "mean": "を照らす；を解明する",
        "number": 1702
    },
    "1703": {
        "word": "console",
        "mean": "を慰める",
        "number": 1703
    },
    "1704": {
        "word": "verify",
        "mean": "の正しさを証明［確認］する",
        "number": 1704
    },
    "1705": {
        "word": "disclose",
        "mean": "を公表する，暴く",
        "number": 1705
    },
    "1706": {
        "word": "stack",
        "mean": "を積む，積み重ねる；〔～ upで〕（車が）渋滞する",
        "number": 1706
    },
    "1707": {
        "word": "rotate",
        "mean": "回転する；循環する；を回転させる",
        "number": 1707
    },
    "1708": {
        "word": "constrain",
        "mean": "に（...することを）強いる（to do）；を抑える",
        "number": 1708
    },
    "1709": {
        "word": "hinder",
        "mean": "を妨げる",
        "number": 1709
    },
    "1710": {
        "word": "withstand",
        "mean": "に耐える",
        "number": 1710
    },
    "1711": {
        "word": "tweet",
        "mean": "（を）ツイートする，つぶやく",
        "number": 1711
    },
    "1712": {
        "word": "sneeze",
        "mean": "くしゃみをする",
        "number": 1712
    },
    "1713": {
        "word": "erupt",
        "mean": "（火山が）噴火する；勃発する",
        "number": 1713
    },
    "1714": {
        "word": "blur",
        "mean": "をぼかす；を曇らせる；をあいまいにする",
        "number": 1714
    },
    "1715": {
        "word": "overlap",
        "mean": "（一部）重なる；（と）重複［共通］する",
        "number": 1715
    },
    "1716": {
        "word": "embed",
        "mean": "〔通例受身形で〕埋め込まれる，はめ込まれる",
        "number": 1716
    },
    "1717": {
        "word": "displace",
        "mean": "に取って代わる（≒ replace）；を移動させる",
        "number": 1717
    },
    "1718": {
        "word": "render",
        "mean": "を（ある状態に）する；（援助など）を与える",
        "number": 1718
    },
    "1719": {
        "word": "plunge",
        "mean": "（～に）（を）突っ込む（into）；没頭する；陥る",
        "number": 1719
    },
    "1720": {
        "word": "surrender",
        "mean": "を放棄する，引き渡す；（～に）屈する（to）",
        "number": 1720
    },
    "1721": {
        "word": "plug",
        "mean": "〔plug inで〕のプラグを電源に差し込む；を（～で）ふさぐ（with）",
        "number": 1721
    },
    "1722": {
        "word": "suck",
        "mean": "（を）吸う；（を）しゃぶる",
        "number": 1722
    },
    "1723": {
        "word": "mock",
        "mean": "をばかにする（≒ make fun of）；のまねをしてからかう",
        "number": 1723
    },
    "1724": {
        "word": "tease",
        "mean": "（を）からかう；をいじめる",
        "number": 1724
    },
    "1725": {
        "word": "soothe",
        "mean": "をなだめる；を和らげる",
        "number": 1725
    },
    "1726": {
        "word": "stain",
        "mean": "を汚す；に着色する",
        "number": 1726
    },
    "1727": {
        "word": "shun",
        "mean": "を避ける",
        "number": 1727
    },
    "1728": {
        "word": "stumble",
        "mean": "よろけながら歩く；（～に）つまずく（on / over）",
        "number": 1728
    },
    "1729": {
        "word": "flush",
        "mean": "を紅潮させる；を水で流す；紅潮する",
        "number": 1729
    },
    "1730": {
        "word": "impair",
        "mean": "を損なう",
        "number": 1730
    },
    "1731": {
        "word": "presume",
        "mean": "と思う；と推定する；を前提とする",
        "number": 1731
    },
    "1732": {
        "word": "contend",
        "mean": "と主張する；競う",
        "number": 1732
    },
    "1733": {
        "word": "roar",
        "mean": "うなる，ほえる；大笑いする",
        "number": 1733
    },
    "1734": {
        "word": "haunt",
        "mean": "（記憶・考えなどが）につきまとう；（幽霊などが）に出る；によく行く",
        "number": 1734
    },
    "1735": {
        "word": "divert",
        "mean": "（注意など）をそらす；を迂回させる；（資金など）を転用する",
        "number": 1735
    },
    "1736": {
        "word": "await",
        "mean": "を待つ（≒ wait for）",
        "number": 1736
    },
    "1737": {
        "word": "fetch",
        "mean": "を（行って）持って［連れて］くる",
        "number": 1737
    },
    "1738": {
        "word": "unify",
        "mean": "を統合［統一］する；統一される",
        "number": 1738
    },
    "1739": {
        "word": "inspect",
        "mean": "を点検する；を視察する",
        "number": 1739
    },
    "1740": {
        "word": "entail",
        "mean": "を伴う，引き起こす；（...すること）を含む（doing）",
        "number": 1740
    },
    "1741": {
        "word": "tactics",
        "mean": "作戦，方策；戦術，戦法",
        "number": 1741
    },
    "1742": {
        "word": "feat",
        "mean": "偉業，功績；妙技",
        "number": 1742
    },
    "1743": {
        "word": "prestige",
        "mean": "名声；〔形容詞的に〕名声のある",
        "number": 1743
    },
    "1744": {
        "word": "analogy",
        "mean": "類推；類似",
        "number": 1744
    },
    "1745": {
        "word": "conscience",
        "mean": "良心；分別",
        "number": 1745
    },
    "1746": {
        "word": "textile",
        "mean": "織物；繊維（産業）",
        "number": 1746
    },
    "1747": {
        "word": "deficit",
        "mean": "赤字，不足；欠陥",
        "number": 1747
    },
    "1748": {
        "word": "plague",
        "mean": "疫病；（害虫などの）異常発生",
        "number": 1748
    },
    "1749": {
        "word": "hazard",
        "mean": "危険（要素）；偶然",
        "number": 1749
    },
    "1750": {
        "word": "metabolism",
        "mean": "（新陳）代謝，代謝作用",
        "number": 1750
    },
    "1751": {
        "word": "paralysis",
        "mean": "麻痺；〔比喩的に〕麻痺（状態）",
        "number": 1751
    },
    "1752": {
        "word": "grid",
        "mean": "（電気などの）供給網；格子（模様）；碁盤目",
        "number": 1752
    },
    "1753": {
        "word": "carriage",
        "mean": "馬車；車両（＝ 【米】car）；立ち居振舞い；【英】輸送",
        "number": 1753
    },
    "1754": {
        "word": "friction",
        "mean": "不和；摩擦",
        "number": 1754
    },
    "1755": {
        "word": "rebel",
        "mean": "反逆者",
        "number": 1755
    },
    "1756": {
        "word": "regime",
        "mean": "政権，政体；体制",
        "number": 1756
    },
    "1757": {
        "word": "monopoly",
        "mean": "独占（権）",
        "number": 1757
    },
    "1758": {
        "word": "staple",
        "mean": "必需食品；主要産物",
        "number": 1758
    },
    "1759": {
        "word": "merchandise",
        "mean": "商品",
        "number": 1759
    },
    "1760": {
        "word": "vendor",
        "mean": "物売り，行商人；自動販売機",
        "number": 1760
    },
    "1761": {
        "word": "supervisor",
        "mean": "監督者；指導教員",
        "number": 1761
    },
    "1762": {
        "word": "predecessor",
        "mean": "前任者（⇔ successor 後継者）；前のもの",
        "number": 1762
    },
    "1763": {
        "word": "personnel",
        "mean": "〔集合的に〕職員，社員",
        "number": 1763
    },
    "1764": {
        "word": "vessel",
        "mean": "船舶；容器；（体液が通る）脈管",
        "number": 1764
    },
    "1765": {
        "word": "liver",
        "mean": "肝臓",
        "number": 1765
    },
    "1766": {
        "word": "duration",
        "mean": "（時間の）継続，持続（時間）",
        "number": 1766
    },
    "1767": {
        "word": "certificate",
        "mean": "証明書；免許状",
        "number": 1767
    },
    "1768": {
        "word": "geometry",
        "mean": "幾何学",
        "number": 1768
    },
    "1769": {
        "word": "symmetry",
        "mean": "（左右）対称（⇔ asymmetry 非対称）；調和",
        "number": 1769
    },
    "1770": {
        "word": "biography",
        "mean": "伝記",
        "number": 1770
    },
    "1771": {
        "word": "masterpiece",
        "mean": "傑作",
        "number": 1771
    },
    "1772": {
        "word": "rhyme",
        "mean": "押韻詩；韻；〔通例～s〕詩歌",
        "number": 1772
    },
    "1773": {
        "word": "premium",
        "mean": "保険料；プレミア；景品",
        "number": 1773
    },
    "1774": {
        "word": "breakdown",
        "mean": "崩壊；（神経）衰弱；故障；内訳",
        "number": 1774
    },
    "1775": {
        "word": "courtesy",
        "mean": "礼儀正しさ；好意；優遇",
        "number": 1775
    },
    "1776": {
        "word": "protocol",
        "mean": "（条約）議定書；外交儀礼；プロトコル",
        "number": 1776
    },
    "1777": {
        "word": "specimen",
        "mean": "標本；実例",
        "number": 1777
    },
    "1778": {
        "word": "thesis",
        "mean": "論文；命題，テーゼ",
        "number": 1778
    },
    "1779": {
        "word": "eligible",
        "mean": "適格の，資格のある；（結婚相手として）望ましい",
        "number": 1779
    },
    "1780": {
        "word": "intrinsic",
        "mean": "固有の，本質的な（⇔ extrinsic 非本質的な）",
        "number": 1780
    },
    "1781": {
        "word": "diligent",
        "mean": "勤勉な；入念な",
        "number": 1781
    },
    "1782": {
        "word": "vocational",
        "mean": "職業の，職業訓練の（ための）",
        "number": 1782
    },
    "1783": {
        "word": "bankrupt",
        "mean": "破産宣告を受けた；破綻している",
        "number": 1783
    },
    "1784": {
        "word": "stern",
        "mean": "厳しい；いかめしい",
        "number": 1784
    },
    "1785": {
        "word": "stubborn",
        "mean": "頑固な，強情な（≒ obstinate）；手に負えない",
        "number": 1785
    },
    "1786": {
        "word": "maternal",
        "mean": "母の，母親らしい（⇔ paternal 父の）；妊婦の",
        "number": 1786
    },
    "1787": {
        "word": "fertile",
        "mean": "肥沃な（⇔ barren 不毛の）；多産の",
        "number": 1787
    },
    "1788": {
        "word": "ripe",
        "mean": "熟した；成熟した",
        "number": 1788
    },
    "1789": {
        "word": "stiff",
        "mean": "硬直した，凝った；堅い",
        "number": 1789
    },
    "1790": {
        "word": "obsolete",
        "mean": "廃れた，使われなくなった；古くなった",
        "number": 1790
    },
    "1791": {
        "word": "vacant",
        "mean": "空いている",
        "number": 1791
    },
    "1792": {
        "word": "acoustic",
        "mean": "音響の；聴覚の；（楽器が）アコースティックの",
        "number": 1792
    },
    "1793": {
        "word": "preliminary",
        "mean": "予備の，準備の",
        "number": 1793
    },
    "1794": {
        "word": "approximate",
        "mean": "おおよその",
        "number": 1794
    },
    "1795": {
        "word": "implicit",
        "mean": "暗黙の（⇔ explicit ⇒ 1598）；内在する",
        "number": 1795
    },
    "1796": {
        "word": "punctual",
        "mean": "時間を守る",
        "number": 1796
    },
    "1797": {
        "word": "compatible",
        "mean": "矛盾しない；互換性のある；気が合う",
        "number": 1797
    },
    "1798": {
        "word": "ample",
        "mean": "十分すぎるほどの；広い",
        "number": 1798
    },
    "1799": {
        "word": "pervasive",
        "mean": "隅々に広がった；浸透する；充満する",
        "number": 1799
    },
    "1800": {
        "word": "ubiquitous",
        "mean": "至る所にある",
        "number": 1800
    },
    "1801": {
        "word": "deduce",
        "mean": "を推測する，演繹する",
        "number": 1801
    },
    "1802": {
        "word": "simulate",
        "mean": "を模擬実験する；を装う；をまねる",
        "number": 1802
    },
    "1803": {
        "word": "merge",
        "mean": "（を）合併する；を融合させる；溶け込む",
        "number": 1803
    },
    "1804": {
        "word": "penetrate",
        "mean": "（に）浸透する；（に）進出する；（を）貫く；（を）見抜く",
        "number": 1804
    },
    "1805": {
        "word": "cater",
        "mean": "（の）料理をまかなう；（要望などに）応える",
        "number": 1805
    },
    "1806": {
        "word": "assault",
        "mean": "に暴行する；を攻撃する",
        "number": 1806
    },
    "1807": {
        "word": "torture",
        "mean": "を拷問にかける；を苦しめる",
        "number": 1807
    },
    "1808": {
        "word": "bleed",
        "mean": "出血する",
        "number": 1808
    },
    "1809": {
        "word": "erect",
        "mean": "を建てる；を直立させる",
        "number": 1809
    },
    "1810": {
        "word": "cherish",
        "mean": "を大切にする；を心に抱く",
        "number": 1810
    },
    "1811": {
        "word": "arouse",
        "mean": "（感情など）を引き起こす；を目覚めさせる",
        "number": 1811
    },
    "1812": {
        "word": "doom",
        "mean": "〔通例受身形で〕運命にある",
        "number": 1812
    },
    "1813": {
        "word": "mourn",
        "mean": "（を）悼む（≒ grieve）；（を）嘆く",
        "number": 1813
    },
    "1814": {
        "word": "dread",
        "mean": "をひどく恐れる",
        "number": 1814
    },
    "1815": {
        "word": "nourish",
        "mean": "に栄養を与える；をはぐくむ",
        "number": 1815
    },
    "1816": {
        "word": "inject",
        "mean": "（人）に注射する，を注入する；を導入する",
        "number": 1816
    },
    "1817": {
        "word": "swear",
        "mean": "（～を）ののしる（at）；（を）誓う（≒ vow）",
        "number": 1817
    },
    "1818": {
        "word": "bid",
        "mean": "（～に）の値をつける（for ⇒ on）；（挨拶）を述べる",
        "number": 1818
    },
    "1819": {
        "word": "corrupt",
        "mean": "を堕落させる；を買収する；堕落する",
        "number": 1819
    },
    "1820": {
        "word": "preoccupy",
        "mean": "の心を奪う，を夢中にさせる",
        "number": 1820
    },
    "1821": {
        "word": "browse",
        "mean": "（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く",
        "number": 1821
    },
    "1822": {
        "word": "compile",
        "mean": "を編集する；（資料など）をまとめる",
        "number": 1822
    },
    "1823": {
        "word": "allocate",
        "mean": "を割り当てる，分配する",
        "number": 1823
    },
    "1824": {
        "word": "offset",
        "mean": "を相殺する，埋め合わせる；をオフセット印刷にする",
        "number": 1824
    },
    "1825": {
        "word": "restrain",
        "mean": "を制止する；を規制する",
        "number": 1825
    },
    "1826": {
        "word": "comply",
        "mean": "従う，応じる",
        "number": 1826
    },
    "1827": {
        "word": "expire",
        "mean": "期限が切れる",
        "number": 1827
    },
    "1828": {
        "word": "embark",
        "mean": "（～に）乗り出す（on）；乗船［搭乗］する",
        "number": 1828
    },
    "1829": {
        "word": "flap",
        "mean": "パタパタ動く；羽ばたく（≒ flutter）；をパタパタ動かす",
        "number": 1829
    },
    "1830": {
        "word": "furnish",
        "mean": "に（～を）備えつける（with）",
        "number": 1830
    },
    "1831": {
        "word": "forge",
        "mean": "を偽造する；（関係など）を築く；を鍛造する",
        "number": 1831
    },
    "1832": {
        "word": "thrust",
        "mean": "を押しつける；を突き刺す；押し進む",
        "number": 1832
    },
    "1833": {
        "word": "dispatch",
        "mean": "を派遣する；を発送する；を処理する",
        "number": 1833
    },
    "1834": {
        "word": "resent",
        "mean": "に憤慨する",
        "number": 1834
    },
    "1835": {
        "word": "reconcile",
        "mean": "を（～と）一致させる（with）；を和解させる",
        "number": 1835
    },
    "1836": {
        "word": "allege",
        "mean": "を主張する",
        "number": 1836
    },
    "1837": {
        "word": "oppress",
        "mean": "を抑圧［迫害］する；を悩ませる",
        "number": 1837
    },
    "1838": {
        "word": "expel",
        "mean": "を追放する；を吐き出す",
        "number": 1838
    },
    "1839": {
        "word": "ascend",
        "mean": "（を）上がる（⇔ descend ⇒ 1337）",
        "number": 1839
    },
    "1840": {
        "word": "commence",
        "mean": "始まる；を開始する；...し始める（to do / doing）⇒ commence work 仕事［作業］を始める",
        "number": 1840
    },
    "1841": {
        "word": "advent",
        "mean": "〔the ～〕出現，到来",
        "number": 1841
    },
    "1842": {
        "word": "reign",
        "mean": "治世；統治",
        "number": 1842
    },
    "1843": {
        "word": "diplomacy",
        "mean": "外交（的手腕）",
        "number": 1843
    },
    "1844": {
        "word": "embassy",
        "mean": "大使館；大使一行",
        "number": 1844
    },
    "1845": {
        "word": "exile",
        "mean": "亡命（者）；（国外）追放",
        "number": 1845
    },
    "1846": {
        "word": "refuge",
        "mean": "避難（所）；保護",
        "number": 1846
    },
    "1847": {
        "word": "plight",
        "mean": "窮状（＝ predicament）；（悪い）状態",
        "number": 1847
    },
    "1848": {
        "word": "solitude",
        "mean": "ひとりでいること；孤独",
        "number": 1848
    },
    "1849": {
        "word": "fallacy",
        "mean": "誤った考え，誤信；錯誤",
        "number": 1849
    },
    "1850": {
        "word": "latitude",
        "mean": "緯度；（行動・思想などの）許容範囲",
        "number": 1850
    },
    "1851": {
        "word": "eclipse",
        "mean": "（日食・月食などの）食；（名声などの）失墜",
        "number": 1851
    },
    "1852": {
        "word": "basin",
        "mean": "流域；盆地，海盆；洗面器［台］",
        "number": 1852
    },
    "1853": {
        "word": "erosion",
        "mean": "浸食；衰退",
        "number": 1853
    },
    "1854": {
        "word": "archaeology",
        "mean": "考古学",
        "number": 1854
    },
    "1855": {
        "word": "errand",
        "mean": "（人の）使い，使い走り；用件",
        "number": 1855
    },
    "1856": {
        "word": "mercy",
        "mean": "慈悲；〔通例a ～〕幸運",
        "number": 1856
    },
    "1857": {
        "word": "rhetoric",
        "mean": "修辞（法）；美辞麗句",
        "number": 1857
    },
    "1858": {
        "word": "verse",
        "mean": "韻文（⇔ prose 散文）；詩",
        "number": 1858
    },
    "1859": {
        "word": "congestion",
        "mean": "混雑",
        "number": 1859
    },
    "1860": {
        "word": "sewage",
        "mean": "下水",
        "number": 1860
    },
    "1861": {
        "word": "complement",
        "mean": "（～の）補完物，補足（to）；（文法の）補語",
        "number": 1861
    },
    "1862": {
        "word": "subsidy",
        "mean": "補助金；報奨金",
        "number": 1862
    },
    "1863": {
        "word": "mortgage",
        "mean": "住宅ローン；抵当（権）",
        "number": 1863
    },
    "1864": {
        "word": "attorney",
        "mean": "【米】 弁護士；代理人",
        "number": 1864
    },
    "1865": {
        "word": "outfit",
        "mean": "衣装一式；装備［道具］一式；組織",
        "number": 1865
    },
    "1866": {
        "word": "bulk",
        "mean": "〔the ～〕（～の）大半（of）；大きさ；大量",
        "number": 1866
    },
    "1867": {
        "word": "reunion",
        "mean": "再会（の集い）；再結合",
        "number": 1867
    },
    "1868": {
        "word": "synthesis",
        "mean": "合成；総合（⇔ analysis ⇒ 363）",
        "number": 1868
    },
    "1869": {
        "word": "mold",
        "mean": "鋳型；鋳物；性格；かび",
        "number": 1869
    },
    "1870": {
        "word": "thirst",
        "mean": "（のどの）渇き；（～に対する）渇望（for）",
        "number": 1870
    },
    "1871": {
        "word": "greed",
        "mean": "強欲",
        "number": 1871
    },
    "1872": {
        "word": "bribe",
        "mean": "賄賂",
        "number": 1872
    },
    "1873": {
        "word": "contempt",
        "mean": "軽蔑；恥辱",
        "number": 1873
    },
    "1874": {
        "word": "texture",
        "mean": "感触，手触り；本質；質感",
        "number": 1874
    },
    "1875": {
        "word": "orphan",
        "mean": "孤児",
        "number": 1875
    },
    "1876": {
        "word": "harassment",
        "mean": "嫌がらせ，ハラスメント",
        "number": 1876
    },
    "1877": {
        "word": "hay",
        "mean": "干し草",
        "number": 1877
    },
    "1878": {
        "word": "doctrine",
        "mean": "教義；【米】（政策上の）主義",
        "number": 1878
    },
    "1879": {
        "word": "holistic",
        "mean": "全体論の；（医療が）ホリスティックの",
        "number": 1879
    },
    "1880": {
        "word": "liable",
        "mean": "しがちな；（～を）受けやすい（to）；責任がある",
        "number": 1880
    },
    "1881": {
        "word": "earnest",
        "mean": "まじめな，熱心な",
        "number": 1881
    },
    "1882": {
        "word": "intelligible",
        "mean": "（簡単に）理解できる",
        "number": 1882
    },
    "1883": {
        "word": "abrupt",
        "mean": "突然の（≒ sudden）",
        "number": 1883
    },
    "1884": {
        "word": "reckless",
        "mean": "無謀な；（～を）顧みない（of）",
        "number": 1884
    },
    "1885": {
        "word": "furious",
        "mean": "激怒した；猛烈な",
        "number": 1885
    },
    "1886": {
        "word": "eloquent",
        "mean": "雄弁な；説得力のある",
        "number": 1886
    },
    "1887": {
        "word": "juvenile",
        "mean": "青少年の",
        "number": 1887
    },
    "1888": {
        "word": "notorious",
        "mean": "悪名高い（≒ infamous）",
        "number": 1888
    },
    "1889": {
        "word": "timid",
        "mean": "臆病な；内気な",
        "number": 1889
    },
    "1890": {
        "word": "humid",
        "mean": "湿気のある（≒ muggy 蒸し暑い）",
        "number": 1890
    },
    "1891": {
        "word": "contagious",
        "mean": "感染（性）の；病気を伝染する",
        "number": 1891
    },
    "1892": {
        "word": "cynical",
        "mean": "冷笑的な，皮肉な",
        "number": 1892
    },
    "1893": {
        "word": "dumb",
        "mean": "ばかげた；口のきけない；無言の",
        "number": 1893
    },
    "1894": {
        "word": "monotonous",
        "mean": "単調な",
        "number": 1894
    },
    "1895": {
        "word": "perpetual",
        "mean": "永続的な；ひっきりなしの",
        "number": 1895
    },
    "1896": {
        "word": "dizzy",
        "mean": "目まいがする；当惑した",
        "number": 1896
    },
    "1897": {
        "word": "weary",
        "mean": "疲れ果てた；（～に）うんざりした（of）",
        "number": 1897
    },
    "1898": {
        "word": "numb",
        "mean": "麻痺した，無感覚な；ぼう然とした",
        "number": 1898
    },
    "1899": {
        "word": "mortal",
        "mean": "致命的な（≒ fatal）；死すべき（運命の）（⇔ immortal 不死の）",
        "number": 1899
    },
    "1900": {
        "word": "zealous",
        "mean": "熱心な；熱狂的な",
        "number": 1900
    }
};