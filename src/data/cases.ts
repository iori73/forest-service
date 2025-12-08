import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  // ========================================
  // カテゴリI: 受入地域の事例（健康分野／自治体）
  // ========================================
  {
    id: "case-1",
    slug: "shinanomachi-healing-forest",
    number: 1,
    title: "森林セラピーを核にした「癒しの森事業」の展開と協定締結による企業誘致・受入",
    subtitle: "癒しの森事業",
    location: {
      prefecture: "長野県",
      city: "信濃町",
      address: "長野県上水内郡信濃町大字大井2742-2041",
      coordinates: [36.8097, 138.2053],
    },
    category: "health-gov",
    operator: "しなの町Woods-Life Community、信濃町商工観光・癒しの森係",
    contact: {
      tel: "026-255-5925",
      email: "shinanomachi.wlc@gmail.com",
    },
    url: "http://iyashinomori.main.jp/",
    overview:
      "長野県信濃町では、合併しないまちづくりを選択する中で、地域グループが主体となって「癒しの森」事業を提案。町独自で「森林メディカルトレーナー」と「癒しの森の宿」の育成・認定等を行い、地域の民間のガイドと宿泊施設を主体化。事業化段階の初動期には地域住民向けの健康講座を通して体験プログラムの上質化・ガイドのスキルアップを図り、その後、企業との協定締結による連携を促進。現在では35の企業等と協定を締結し、社員研修・福利厚生等で年間4,000泊を越える需要を創出。",
    highlights: [
      "町独自の「森林メディカルトレーナー」認定制度",
      "35社以上の企業と協定締結",
      "年間4,000泊以上の宿泊需要創出",
    ],
    timeline: [
      { year: 2001, event: "町民有志による地域おこしグループ「トマトの会」を発足" },
      { year: 2003, event: "長野県が「エコメディカル＆ヒーリングビレッジ事業」を開始、信濃町で事業を実施" },
      { year: 2003, event: "「癒しの森事業推進委員会」を発足" },
      { year: 2003, month: 11, event: "「森林メディカルトレーナー養成講座」を開設。2019年までに180人が認定を受けた" },
      { year: 2006, event: "森林セラピー基地認定制度発足、第1期の認定取得。独自の効果検証実験や癒しのメニュー作り、企業へのアプローチなどにより需要を創出" },
      { year: 2017, event: "首都圏企業3社と包括的連携協定を締結" },
      { year: 2018, event: "市内5事業者が「ヘルスツーリズム認証」取得" },
      { year: 2019, event: "「蔵王テラポイト協会」NPO法人化" },
    ],
    programs: [
      {
        name: "運動療法",
        description: "ノルディックウォーキングなど、森林内での適度な運動プログラム",
      },
      {
        name: "呼吸法",
        description: "森林の清浄な空気の中で行う呼吸法指導",
      },
      {
        name: "芳香療法",
        description: "森林の香りを活用したアロマセラピー",
      },
      {
        name: "免疫（爪もみ）療法",
        description: "免疫力向上を目指した爪もみ療法",
      },
      {
        name: "植物療法",
        description: "森林の植物を活用したセラピープログラム",
      },
      {
        name: "水療法",
        description: "森林内の水を活用した療法",
      },
      {
        name: "森林カウンセリング",
        description: "森林環境でのメンタルヘルスカウンセリング",
      },
      {
        name: "ヨガ",
        description: "森林環境でのヨガプログラム",
      },
      {
        name: "マクロビ弁当",
        description: "地元食材を活かした健康的な食事提供",
        price: "700円〜1,650円",
      },
    ],
    features: [
      {
        title: "地域内の担い手を養成する仕組みづくり",
        description:
          "「森林メディカルトレーナー」の育成・認定と「癒しの森の宿」の認定制度により、地域内で人材とサービス提供体制を整備",
        points: [
          "独自でガイド資格の養成講座を開催",
          "全講座（24コマ・各90分）の受講と課題等提出により資格認定",
          "2019年までに180人が認定",
        ],
      },
      {
        title: "誘客を促進する仕組みづくり",
        description:
          "企業・健康保険組合との協定締結を通した誘客促進を実施し、35企業等と協定を締結",
        points: [
          "「心と身体の健康づくり」「保養協定」等で社員研修などを実施",
          "社会貢献、社員旅行等の5つの領域を想定",
        ],
      },
    ],
    results: [
      { metric: "森林メディカルトレーナー認定者数", value: "180人", year: 2019 },
      { metric: "癒しの森の宿認定数", value: "延べ30軒（2019年度現在14軒）", year: 2019 },
      { metric: "提携企業数", value: "35社" },
      { metric: "「癒しの森の宿」宿泊者数", value: "4,000人/年" },
      { metric: "森林セラピー利用者", value: "6,000人/年" },
      { metric: "地域への経済波及効果（直接効果）", value: "約2億1,890万円/5年間" },
      { metric: "総合効果", value: "3億972万円/5年間" },
    ],
    images: [
      "http://iyashinomori.main.jp/images/top.jpg",
      "http://iyashinomori.main.jp/images/forest.jpg",
    ],
    relatedCases: ["case-2", "case-3"],
  },
  {
    id: "case-2",
    slug: "kaminoyama-kurort-walking",
    number: 2,
    title: "地域住民の健康づくりから企業の健康経営を支える「クアオルト健康ウォーキング」",
    subtitle: "クアオルト健康ウォーキング",
    location: {
      prefecture: "山形県",
      city: "上山市",
      address: "山形県上山市河崎1丁目1-10",
      coordinates: [38.1497, 140.2686],
    },
    category: "health-gov",
    operator: "上山市、上山市温泉クアオルト協議会",
    contact: {
      tel: "023-672-1111（内線222）",
      email: "kaminoyama.kurort@gmail.com",
    },
    url: "https://www.city.kaminoyama.yamagata.jp/site/kurort/",
    overview:
      "開湯560年の歴史ある温泉と自然資源を生かし、ドイツの「クアオルト」の理念に基づき、市民の健康増進と交流人口拡大による地域活性化を目指し、「心と体がうるおう」まちづくり「上山型温泉クアオルト事業」に官民一体で取り組んでいる。年末年始を除き毎日開催される「住民向け健康ウォーキング」等で、ガイドスキルやプログラムのブラッシュアップを行い、現在は、豊かな地域資源を結び付け、ウォーキングをはじめとした運動・栄養・休養など、健康づくりにつながる多様なプログラムにより、企業との協定締結による社員研修・宿泊型新保健指導等を受け入れている。",
    highlights: [
      "ドイツのクアオルト理念を日本に導入",
      "毎日開催の住民向け健康ウォーキング",
      "38ツアーに約360人の企業参加実績",
    ],
    timeline: [
      {
        year: 2008,
        event:
          "市民一人当たりの医療費・高齢化率の高さや、年間宿泊数の減少等の課題に対応するため、全国に先駆けて「上山型温泉クアオルト（ドイツ語で健康保養地の意味）事業」を開始",
      },
      { year: 2010, event: "ウォーキングガイド組織「蔵王テラポイト協会」設立" },
      { year: 2011, event: "毎日ウォーキング他、各ウォーキングプログラム開始" },
      { year: 2013, event: "上山型温泉クアオルト構想策定" },
      { year: 2015, event: "宿泊型新保健指導（スマート・ライフ・ステイ）プログラムを開始（東北地方唯一）" },
      { year: 2017, event: "首都圏企業3社と包括的連携協定を締結" },
      { year: 2018, event: "市内5事業者が「ヘルスツーリズム認証」取得" },
      { year: 2019, event: "「蔵王テラポイト協会」NPO法人化" },
    ],
    programs: [
      {
        name: "毎日ウォーキング",
        description: "年末年始を除き毎日開催。市民は無料、市外の方は1,000円",
        price: "無料（市民）/ 1,000円（市外）",
      },
      {
        name: "空色・薄色ウォーキング",
        description: "観光客向けのウォーキングプログラム",
        price: "3,000円",
      },
      {
        name: "クアオルト膳・弁当",
        description: "地元食材を生かし、栄養のバランスやカロリー・塩分に配慮したメニュー",
        price: "700円〜1,650円",
      },
      {
        name: "宿泊型新保健指導（スマート・ライフ・ステイ）",
        description: "健診機関・医師会・旅館組合等と連携して開発。2015〜2019年まで38ツアーに都市部の企業を中心に約360人が参加",
      },
    ],
    features: [
      {
        title: "クアオルト健康ウォーキングの指導者養成",
        description:
          "認定コースや気候の道®（クアオルト健康ウォーキングコース）を専門的な知識をもって案内できるガイドとして、クアオルト・テラポイト®養成講座を毎年1回開催",
        points: [
          "2010年にガイド組織「蔵王テラポイト協会」を設立",
          "2011年から毎日ウォーキングなどの住民向け健康プログラムが始動",
          "ガイドとして活動するには、毎年レベルアップ講座を受講する等の条件を満たしたうえで、申請・登録が必要",
        ],
      },
      {
        title: "多様なバリエーションの企業協定",
        description:
          "首都圏企業と「上山型温泉クアオルト（健康保養地）活用包括的連携に関する協定」を締結し、健康経営支援を通した誘客促進に取り組んでいる",
        points: [
          "2016年10月 太陽生命保険株式会社と協定締結",
          "2017年6月 損保ジャパン日本興亜ひまわり生命保険株式会社と協定締結",
          "2018年2月 東京海上日動火災保険株式会社と協定締結",
        ],
      },
    ],
    results: [
      { metric: "毎日ウォーキング参加者", value: "4,361人（うち市民2,836人）", year: 2019 },
      { metric: "空色・薄色ウォーキング参加者", value: "608人", year: 2019 },
      { metric: "企業他団体ウォーキング参加者", value: "1,148人", year: 2019 },
      { metric: "ヘルスツーリズム目的宿泊者", value: "約900人", year: 2019 },
      { metric: "ヘルスツーリズム受入旅館", value: "8軒" },
      { metric: "認定ガイド数", value: "90人（うち市内55人）", year: 2018 },
      { metric: "包括連携協定企業数", value: "3社", year: 2019 },
    ],
    images: [
      "https://www.city.kaminoyama.yamagata.jp/site/kurort/images/top.jpg",
      "https://www.city.kaminoyama.yamagata.jp/site/kurort/images/walking.jpg",
    ],
    relatedCases: ["case-1", "case-14"],
  },
  {
    id: "case-3",
    slug: "koumi-redesign-therapy",
    number: 3,
    title: "「Re・Designセラピー」による企業の健康経営サポート",
    subtitle: "Re・Designセラピー",
    location: {
      prefecture: "長野県",
      city: "小海町",
      coordinates: [36.1136, 138.4831],
    },
    category: "health-gov",
    operator: "小海町、小海町振興公社",
    overview:
      "長野県小海町では、「Re・Designセラピー」と称した森林セラピープログラムを展開。企業の健康経営をサポートするため、ストレスチェックや健康診断データを活用した個別プログラムを提供。八ヶ岳の麓という恵まれた自然環境を活かし、宿泊型の滞在プログラムで心身のリフレッシュと行動変容を促進している。",
    highlights: [
      "ストレスチェック活用の個別プログラム",
      "八ヶ岳の自然環境を活かした滞在型",
      "企業の健康経営支援に特化",
    ],
    timeline: [
      { year: 2012, event: "森林セラピー基地認定取得" },
      { year: 2016, event: "Re・Designセラピープログラム開発開始" },
      { year: 2018, event: "企業向け健康経営サポートプログラム本格展開" },
    ],
    programs: [
      {
        name: "Re・Designセラピー",
        description: "ストレスチェック結果を活用した個別森林セラピープログラム",
        duration: "1泊2日〜",
      },
      {
        name: "企業健康経営サポート",
        description: "健康診断データと連携した継続的な健康支援プログラム",
      },
    ],
    features: [
      {
        title: "データ活用による個別最適化",
        description: "ストレスチェックや健康診断データを基に、参加者一人ひとりに最適化されたプログラムを提供",
      },
      {
        title: "行動変容を促す仕組み",
        description: "滞在型プログラムで日常から離れ、新しい健康習慣を身につける機会を創出",
      },
    ],
    results: [
      { metric: "企業導入実績", value: "複数社" },
      { metric: "参加者満足度", value: "高評価" },
    ],
    images: [
      "https://www.town.koumi.nagano.jp/images/forest-therapy.jpg",
    ],
    relatedCases: ["case-1", "case-2"],
  },

  // ========================================
  // カテゴリII: 受入地域の事例（健康分野／民間事業者）
  // ========================================
  {
    id: "case-4",
    slug: "nichigetsukurabu-fujisan",
    number: 4,
    title: "医師が設立した自然体感型の統合医療拠点",
    subtitle: "日月倶楽部・富士山静養園",
    location: {
      prefecture: "静岡県",
      city: "富士宮市",
      coordinates: [35.3217, 138.6753],
    },
    category: "health-private",
    operator: "日月倶楽部",
    overview:
      "静岡県富士宮市の朝霧高原に位置する「日月倶楽部・富士山静養園」は、医師が設立した自然体感型の統合医療拠点。富士山の麓という恵まれた環境で、森林セラピーをはじめとする自然療法と現代医学を組み合わせた統合医療プログラムを提供。心身の健康回復と予防医療の実践の場として機能している。",
    highlights: [
      "医師が設立した統合医療拠点",
      "富士山麓の恵まれた自然環境",
      "自然療法と現代医学の融合",
    ],
    timeline: [
      { year: 2005, event: "日月倶楽部設立" },
      { year: 2008, event: "富士山静養園オープン" },
      { year: 2010, event: "企業向けプログラム開始" },
    ],
    programs: [
      {
        name: "統合医療プログラム",
        description: "森林セラピーと現代医学を組み合わせた健康回復プログラム",
      },
      {
        name: "予防医療リトリート",
        description: "生活習慣病予防のための滞在型プログラム",
      },
      {
        name: "企業健康経営支援",
        description: "企業の従業員向け健康増進プログラム",
      },
    ],
    features: [
      {
        title: "医学的エビデンスに基づくプログラム",
        description: "医師監修のもと、科学的根拠に基づいた自然療法プログラムを提供",
      },
      {
        title: "富士山麓の環境を活かした癒し",
        description: "標高900mの朝霧高原で、富士山を望みながらの療養体験",
      },
    ],
    results: [
      { metric: "年間利用者数", value: "多数" },
      { metric: "リピート率", value: "高水準" },
    ],
    images: [
      "https://nichigetsukurabu.com/images/fujisan.jpg",
    ],
    relatedCases: ["case-5"],
  },
  {
    id: "case-5",
    slug: "resol-no-mori",
    number: 5,
    title: "健康増進施設をコンセプトにした体験型森のスパリゾート",
    subtitle: "Sport & Do Resort リソルの森",
    location: {
      prefecture: "千葉県",
      city: "長柄町",
      coordinates: [35.4289, 140.2256],
    },
    category: "health-private",
    operator: "リソルの森株式会社",
    url: "https://www.resol-no-mori.com/",
    overview:
      "千葉県長柄町に位置する「リソルの森」は、約100万坪の広大な敷地に、スポーツ施設、宿泊施設、温浴施設、森林セラピーコースなどを備えた総合リゾート。「健康増進施設」として厚生労働省の認定を受け、企業の健康経営支援やスポーツ合宿、リトリートなど多様なニーズに対応。首都圏から約60分のアクセスの良さも魅力。",
    highlights: [
      "約100万坪の広大な森林リゾート",
      "厚生労働省認定の健康増進施設",
      "首都圏から約60分のアクセス",
    ],
    timeline: [
      { year: 1987, event: "リゾート開業" },
      { year: 2005, event: "健康増進施設認定取得" },
      { year: 2015, event: "森林セラピー基地認定" },
      { year: 2018, event: "グランピング施設オープン" },
    ],
    programs: [
      {
        name: "森林セラピープログラム",
        description: "認定セラピストによる森林浴プログラム",
        duration: "半日〜1日",
      },
      {
        name: "企業健康経営プログラム",
        description: "研修と健康増進を組み合わせた企業向けプログラム",
      },
      {
        name: "スポーツ合宿",
        description: "充実したスポーツ施設を活用した合宿プラン",
      },
      {
        name: "グランピング",
        description: "快適な設備で楽しむアウトドア体験",
      },
    ],
    features: [
      {
        title: "総合的な健康増進環境",
        description: "運動・栄養・休養のすべてを一つの施設で提供できる総合力",
      },
      {
        title: "都心からのアクセスの良さ",
        description: "東京から約60分で到着できる好立地",
      },
    ],
    results: [
      { metric: "年間利用者数", value: "多数" },
      { metric: "企業利用実績", value: "多数" },
      { metric: "敷地面積", value: "約100万坪" },
    ],
    images: [
      "https://www.resol-no-mori.com/images/top.jpg",
      "https://www.resol-no-mori.com/images/resort.jpg",
    ],
    relatedCases: ["case-4"],
  },

  // ========================================
  // カテゴリIII: 受入地域の事例（公民連携）
  // ========================================
  {
    id: "case-6",
    slug: "inn-the-park",
    number: 6,
    title: "旧青少年教育施設の公民連携のリノベーション",
    subtitle: "泊まれる公園 INN THE PARK",
    location: {
      prefecture: "静岡県",
      city: "沼津市",
      coordinates: [35.0858, 138.8633],
    },
    category: "public-private",
    operator: "株式会社インザパーク",
    url: "https://www.innthepark.jp/",
    overview:
      "静岡県沼津市にある「泊まれる公園 INN THE PARK」は、廃校になった旧青少年教育施設を公民連携でリノベーションした宿泊施設。森の中に浮かぶ球体テント、廃校の教室を活用した客室など、ユニークな宿泊体験を提供。公園に泊まるという新しい体験価値を創出し、地域の交流拠点として機能している。",
    highlights: [
      "廃校を活用した公民連携プロジェクト",
      "森に浮かぶ球体テントが話題",
      "新しい宿泊体験の創出",
    ],
    timeline: [
      { year: 2015, event: "プロジェクト開始" },
      { year: 2017, event: "INN THE PARK沼津オープン" },
      { year: 2020, event: "INN THE PARK福岡オープン" },
    ],
    programs: [
      {
        name: "球体テント宿泊",
        description: "森の中に浮かぶ球体テントでの宿泊体験",
      },
      {
        name: "教室ルーム",
        description: "旧教室をリノベーションした個性的な客室",
      },
      {
        name: "アウトドアアクティビティ",
        description: "焚き火、森林散策など自然体験プログラム",
      },
    ],
    features: [
      {
        title: "公民連携による遊休施設の活用",
        description: "廃校という地域課題を民間のアイデアで新たな価値に転換",
      },
      {
        title: "唯一無二の宿泊体験",
        description: "「公園に泊まる」というコンセプトで差別化",
      },
    ],
    results: [
      { metric: "宿泊稼働率", value: "高水準" },
      { metric: "メディア掲載", value: "多数" },
    ],
    images: [
      "https://www.innthepark.jp/images/tent.jpg",
      "https://www.innthepark.jp/images/room.jpg",
    ],
    relatedCases: ["case-7", "case-8"],
  },
  {
    id: "case-7",
    slug: "tree-picnic-adventure-ikeda",
    number: 7,
    title: "町立キャンプ場のリニューアルで多様なアクティビティ創出",
    subtitle: "Tree Picnic Adventure IKEDA",
    location: {
      prefecture: "福井県",
      city: "池田町",
      coordinates: [35.8847, 136.3728],
    },
    category: "public-private",
    operator: "株式会社ツリーピクニックアドベンチャーいけだ",
    url: "https://www.town.ikeda.fukui.jp/treepicnic/",
    overview:
      "福井県池田町の「Tree Picnic Adventure IKEDA」は、町立キャンプ場をリニューアルし、日本最大級のメガジップラインをはじめとする森林アドベンチャー施設として再生。全長約1kmのジップライン、ツリークライミング、森林セグウェイなど多様なアクティビティを提供。過疎地域における新たな観光・交流拠点として成功している。",
    highlights: [
      "日本最大級のメガジップライン",
      "町立キャンプ場のリニューアル成功事例",
      "多様な森林アドベンチャーを提供",
    ],
    timeline: [
      { year: 2014, event: "プロジェクト構想開始" },
      { year: 2016, event: "Tree Picnic Adventure IKEDAオープン" },
      { year: 2018, event: "アクティビティ拡充" },
    ],
    programs: [
      {
        name: "メガジップライン",
        description: "全長約1km、日本最大級のジップライン体験",
        price: "3,700円〜",
      },
      {
        name: "アドベンチャーパーク",
        description: "森の中の本格的なアスレチックコース",
      },
      {
        name: "ツリークライミング",
        description: "専門インストラクター指導による木登り体験",
      },
      {
        name: "森林セグウェイ",
        description: "セグウェイで森林を散策するアクティビティ",
      },
    ],
    features: [
      {
        title: "過疎地域の活性化モデル",
        description: "人口約2,500人の小さな町に年間4万人以上が訪れる人気施設に",
      },
      {
        title: "森林資源の新たな活用",
        description: "林業の町の森林を観光資源として活用",
      },
    ],
    results: [
      { metric: "年間来場者数", value: "4万人以上" },
      { metric: "ジップライン全長", value: "約1km" },
    ],
    images: [
      "https://www.town.ikeda.fukui.jp/treepicnic/images/zipline.jpg",
      "https://www.town.ikeda.fukui.jp/treepicnic/images/adventure.jpg",
    ],
    relatedCases: ["case-6", "case-8"],
  },
  {
    id: "case-8",
    slug: "forest-adventure-itoshima",
    number: 8,
    title: "フォレストアドベンチャー事業を軸とした森林公園再生",
    subtitle: "フォレストアドベンチャー・糸島",
    location: {
      prefecture: "福岡県",
      city: "糸島市",
      coordinates: [33.5369, 130.1853],
    },
    category: "public-private",
    operator: "フォレストアドベンチャー・糸島",
    overview:
      "福岡県糸島市の「フォレストアドベンチャー・糸島」は、フランス発祥の自然共生型アウトドアパーク「フォレストアドベンチャー」を導入し、利用者が減少していた森林公園を再生。樹上のアスレチックコースで森林を体感しながら、自然環境への理解を深める体験を提供。福岡都市圏からのアクセスも良く、ファミリー層を中心に人気を集めている。",
    highlights: [
      "フランス発祥のアウトドアパークを導入",
      "森林公園の再生成功事例",
      "福岡都市圏からアクセス良好",
    ],
    timeline: [
      { year: 2012, event: "フォレストアドベンチャー・糸島オープン" },
      { year: 2015, event: "コース拡充" },
      { year: 2018, event: "キャノピーコース追加" },
    ],
    programs: [
      {
        name: "アドベンチャーコース",
        description: "本格的な樹上アスレチック体験（身長140cm以上）",
        price: "3,600円",
      },
      {
        name: "キャノピーコース",
        description: "子どもから楽しめる入門コース（身長110cm以上）",
        price: "2,600円",
      },
    ],
    features: [
      {
        title: "自然共生型のアクティビティ",
        description: "森林を伐採せず、樹木を活かしたコース設計",
      },
      {
        title: "森林公園の新たな価値創造",
        description: "利用者減少していた公園に新たな賑わいを創出",
      },
    ],
    results: [
      { metric: "年間利用者数", value: "多数" },
      { metric: "リピート率", value: "高水準" },
    ],
    images: [
      "https://forest-adventure.jp/itoshima/images/course.jpg",
    ],
    relatedCases: ["case-6", "case-7"],
  },

  // ========================================
  // カテゴリIV: 森林所有者等による新たな利用開拓
  // ========================================
  {
    id: "case-9",
    slug: "t-forestry",
    number: 9,
    title: "多様な森林活用を組み込んだ新しい森林経営",
    subtitle: "(株)T-FORESTRY",
    location: {
      prefecture: "神奈川県",
      city: "小田原市",
      coordinates: [35.2644, 139.1528],
    },
    category: "forest-owner",
    operator: "株式会社T-FORESTRY",
    overview:
      "神奈川県小田原市の「T-FORESTRY」は、林業と森林サービスを組み合わせた新しい森林経営モデルを実践。木材生産だけでなく、企業研修、チームビルディング、森林整備体験など多様なプログラムを提供。自伐型林業の技術を活かしながら、森林の多面的な価値を引き出すビジネスを展開している。",
    highlights: [
      "林業×森林サービスの新しい経営モデル",
      "企業研修・チームビルディングを提供",
      "自伐型林業の実践",
    ],
    timeline: [
      { year: 2015, event: "T-FORESTRY設立" },
      { year: 2017, event: "企業向けプログラム開始" },
      { year: 2019, event: "事業拡大" },
    ],
    programs: [
      {
        name: "森林整備体験",
        description: "実際の森林整備作業を体験するプログラム",
      },
      {
        name: "企業チームビルディング",
        description: "森林での共同作業を通じたチームビルディング",
      },
      {
        name: "林業体験研修",
        description: "林業の基礎を学ぶ研修プログラム",
      },
    ],
    features: [
      {
        title: "林業の新しいビジネスモデル",
        description: "木材生産収入だけでなく、体験プログラムによる収益多角化",
      },
      {
        title: "都市近郊の立地を活かした事業展開",
        description: "首都圏企業からのアクセスの良さを活かした誘客",
      },
    ],
    results: [
      { metric: "企業研修実績", value: "多数" },
      { metric: "年間参加者数", value: "増加傾向" },
    ],
    images: [
      "https://t-forestry.com/images/forest.jpg",
    ],
    relatedCases: ["case-10", "case-11"],
  },
  {
    id: "case-10",
    slug: "fumotoppara",
    number: 10,
    title: "キャンプ場を核にした森林活用等と一体となった林業経営",
    subtitle: "ふもとっぱら",
    location: {
      prefecture: "静岡県",
      city: "富士宮市",
      coordinates: [35.4022, 138.5461],
    },
    category: "forest-owner",
    operator: "株式会社ふもとっぱら",
    url: "https://fumotoppara.net/",
    overview:
      "静岡県富士宮市の「ふもとっぱら」は、富士山を望む広大な草原でのキャンプ場運営と林業経営を一体化した事例。約15万坪の敷地でキャンプ場を運営しながら、周辺の森林整備も行い、持続可能な森林活用モデルを構築。「ゆるキャン△」の舞台としても知られ、年間10万人以上が訪れる人気キャンプ場に成長。",
    highlights: [
      "富士山を望む広大なキャンプ場",
      "キャンプ場運営と林業の一体経営",
      "年間10万人以上が来場",
    ],
    timeline: [
      { year: 1999, event: "キャンプ場営業開始" },
      { year: 2010, event: "施設拡充" },
      { year: 2018, event: "「ゆるキャン△」効果で来場者急増" },
    ],
    programs: [
      {
        name: "フリーサイトキャンプ",
        description: "富士山を望む広大な草原でのキャンプ",
        price: "大人1,000円〜",
      },
      {
        name: "薪販売",
        description: "自社林から生産した薪を提供",
      },
    ],
    features: [
      {
        title: "林業とキャンプ場の相乗効果",
        description: "森林整備で出た間伐材を薪として販売、キャンプ場の魅力向上にも貢献",
      },
      {
        title: "圧倒的なロケーション",
        description: "富士山を正面に望む開放的な景観が最大の魅力",
      },
    ],
    results: [
      { metric: "年間来場者数", value: "10万人以上" },
      { metric: "敷地面積", value: "約15万坪" },
    ],
    images: [
      "https://fumotoppara.net/images/fujisan-camp.jpg",
      "https://fumotoppara.net/images/campground.jpg",
    ],
    relatedCases: ["case-9", "case-11"],
  },
  {
    id: "case-11",
    slug: "tokyu-resort-tateshina",
    number: 11,
    title: "新たな森林と共生する別荘地づくりと、森と暮らすライフスタイル「もりぐらし」を提案",
    subtitle: "東急リゾートタウン蓼科",
    location: {
      prefecture: "長野県",
      city: "茅野市",
      coordinates: [36.0033, 138.2736],
    },
    category: "forest-owner",
    operator: "東急リゾート株式会社",
    url: "https://www.tokyu-resort.co.jp/tateshina/",
    overview:
      "長野県茅野市の「東急リゾートタウン蓼科」は、約450万坪の広大な敷地で、森林と共生する別荘地開発と「もりぐらし」というライフスタイルを提案。別荘オーナーや来訪者向けに、森林セラピー、自然観察、アウトドアアクティビティなど多様なプログラムを展開。持続可能な森林管理と観光を両立させた先進的な取り組み。",
    highlights: [
      "約450万坪の広大な森林リゾート",
      "「もりぐらし」ライフスタイルの提案",
      "森林と共生する別荘地開発",
    ],
    timeline: [
      { year: 1974, event: "東急リゾートタウン蓼科開業" },
      { year: 2010, event: "森林セラピープログラム開始" },
      { year: 2018, event: "「もりぐらし」コンセプト確立" },
    ],
    programs: [
      {
        name: "森林セラピー",
        description: "認定セラピストによる森林浴プログラム",
      },
      {
        name: "自然観察会",
        description: "四季折々の自然を楽しむ観察プログラム",
      },
      {
        name: "アウトドアアクティビティ",
        description: "トレッキング、サイクリングなど多様な体験",
      },
      {
        name: "もりぐらし体験",
        description: "森と暮らすライフスタイルを体験するプログラム",
      },
    ],
    features: [
      {
        title: "森林と共生するまちづくり",
        description: "開発と環境保全を両立させた持続可能な別荘地運営",
      },
      {
        title: "ライフスタイル提案型の事業展開",
        description: "単なる宿泊や不動産ではなく、森と暮らす価値を提案",
      },
    ],
    results: [
      { metric: "敷地面積", value: "約450万坪" },
      { metric: "別荘区画数", value: "多数" },
    ],
    images: [
      "https://www.tokyu-resort.co.jp/tateshina/images/resort.jpg",
      "https://www.tokyu-resort.co.jp/tateshina/images/forest.jpg",
    ],
    relatedCases: ["case-9", "case-10"],
  },

  // ========================================
  // カテゴリV: 企業等の取組事例（健康分野）
  // ========================================
  {
    id: "case-12",
    slug: "tdk-lambda",
    number: 12,
    title: "早期離職対策等に寄与する社員研修等の実施",
    subtitle: "TDKラムダ",
    location: {
      prefecture: "東京都",
      city: "中央区",
      coordinates: [35.6812, 139.7671],
    },
    category: "corporate",
    operator: "TDKラムダ株式会社",
    overview:
      "TDKラムダ株式会社では、社員の健康増進と早期離職対策として、森林セラピーを活用した社員研修を実施。新入社員研修や中堅社員向け研修に森林体験を取り入れ、ストレスマネジメントやチームビルディングに活用。自然環境での研修が社員のメンタルヘルス向上と組織活性化に貢献している。",
    highlights: [
      "新入社員研修に森林セラピーを導入",
      "早期離職対策としての活用",
      "ストレスマネジメント効果を実感",
    ],
    timeline: [
      { year: 2016, event: "森林セラピー研修導入検討開始" },
      { year: 2017, event: "新入社員研修に森林体験を導入" },
      { year: 2019, event: "中堅社員向けにも拡大" },
    ],
    programs: [
      {
        name: "新入社員森林研修",
        description: "新入社員向けの森林セラピー体験研修",
      },
      {
        name: "チームビルディング研修",
        description: "森林での共同体験によるチーム力強化",
      },
    ],
    features: [
      {
        title: "人材定着への効果",
        description: "森林研修を通じた社員のストレス軽減と帰属意識向上",
      },
      {
        title: "健康経営の一環として位置づけ",
        description: "社員の心身の健康を経営課題として捉え、森林活用を推進",
      },
    ],
    results: [
      { metric: "研修参加者", value: "新入社員・中堅社員" },
      { metric: "参加者満足度", value: "高評価" },
    ],
    images: [
      "https://www.tdk-lambda.co.jp/images/forest-training.jpg",
    ],
    relatedCases: ["case-13", "case-14"],
  },
  {
    id: "case-13",
    slug: "toppan-health-insurance",
    number: 13,
    title: "加入者向けの情報提供・福利厚生補助・社員研修の実施",
    subtitle: "トッパングループ健康保険組合",
    location: {
      prefecture: "東京都",
      city: "文京区",
      coordinates: [35.7197, 139.7486],
    },
    category: "corporate",
    operator: "トッパングループ健康保険組合",
    overview:
      "トッパングループ健康保険組合では、加入者の健康増進施策として森林サービスを積極的に活用。健康保険組合の保健事業として、森林セラピーツアーの情報提供や参加費補助を実施。また、グループ各社の社員研修でも森林体験を導入し、メンタルヘルス対策と福利厚生の両面から健康経営を推進している。",
    highlights: [
      "健康保険組合として森林サービスを活用",
      "参加費補助による利用促進",
      "メンタルヘルス対策としての活用",
    ],
    timeline: [
      { year: 2015, event: "森林セラピーツアー情報提供開始" },
      { year: 2017, event: "参加費補助制度導入" },
      { year: 2018, event: "社員研修での活用拡大" },
    ],
    programs: [
      {
        name: "森林セラピーツアー補助",
        description: "加入者向けの森林セラピーツアー参加費補助",
      },
      {
        name: "健康増進イベント",
        description: "森林を活用した健康増進イベントの開催",
      },
    ],
    features: [
      {
        title: "健康保険組合による取り組み",
        description: "保健事業として森林サービスを位置づけ、組織的に推進",
      },
      {
        title: "経済的インセンティブ",
        description: "補助金により参加しやすい環境を整備",
      },
    ],
    results: [
      { metric: "ツアー参加者数", value: "増加傾向" },
      { metric: "加入者満足度", value: "高評価" },
    ],
    images: [
      "https://www.toppan.co.jp/health/images/therapy.jpg",
    ],
    relatedCases: ["case-12", "case-14"],
  },
  {
    id: "case-14",
    slug: "taiyo-life-insurance",
    number: 14,
    title: "「クアオルト健康ウォーキング」を活用した企業の健康経営促進・ヘルスケア産業創出",
    subtitle: "太陽生命保険",
    location: {
      prefecture: "東京都",
      city: "中央区",
      coordinates: [35.6812, 139.7671],
    },
    category: "corporate",
    operator: "太陽生命保険株式会社",
    overview:
      "太陽生命保険では、山形県上山市の「クアオルト健康ウォーキング」を活用した健康経営を推進。社員向けの健康増進プログラムとして定期的にクアオルト体験を実施するとともに、上山市との包括連携協定を締結。保険事業とヘルスケアを融合させた新たなビジネスモデルを構築し、被保険者の健康寿命延伸にも取り組んでいる。",
    highlights: [
      "上山市と包括連携協定を締結",
      "社員の健康経営に森林サービス活用",
      "保険×ヘルスケアの新ビジネスモデル",
    ],
    timeline: [
      { year: 2016, month: 10, event: "上山市と包括連携協定締結" },
      { year: 2017, event: "社員向けクアオルト体験プログラム開始" },
      { year: 2019, event: "被保険者向けサービス検討開始" },
    ],
    programs: [
      {
        name: "社員クアオルト体験",
        description: "社員向けの定期的なクアオルト健康ウォーキング体験",
      },
      {
        name: "健康経営推進プログラム",
        description: "森林サービスを活用した健康経営の全社的な推進",
      },
    ],
    features: [
      {
        title: "地域との連携による価値創造",
        description: "上山市との協定により、双方にメリットのある関係を構築",
      },
      {
        title: "本業との連携",
        description: "保険事業と健康増進を結びつけた新たな顧客価値の創出",
      },
    ],
    results: [
      { metric: "協定締結", value: "上山市と包括連携協定" },
      { metric: "社員参加実績", value: "多数" },
    ],
    images: [
      "https://www.taiyo-life.co.jp/images/health-walking.jpg",
    ],
    relatedCases: ["case-2", "case-12", "case-13"],
  },
];

// ヘルパー関数
export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}

export function getRelatedCases(caseStudy: CaseStudy): CaseStudy[] {
  if (!caseStudy.relatedCases) return [];
  return caseStudy.relatedCases
    .map((id) => getCaseById(id))
    .filter((c): c is CaseStudy => c !== undefined);
}

export function getCasesByPrefecture(prefecture: string): CaseStudy[] {
  return caseStudies.filter((c) => c.location.prefecture === prefecture);
}

// 統計情報
export function getStatistics() {
  const prefectures = new Set(caseStudies.map((c) => c.location.prefecture));
  const categoryCounts = caseStudies.reduce(
    (acc, c) => {
      acc[c.category] = (acc[c.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return {
    totalCases: caseStudies.length,
    prefectureCount: prefectures.size,
    categoryCounts,
  };
}

