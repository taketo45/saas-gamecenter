import { quizzes, quizOptions } from '../schema';
import type { DbClient } from '../types';

export async function seedQuizzes(db: DbClient) {
  // 原宿の文化カテゴリーのクイズ（7問）
  const harajukuCultureQuizzes = [
    {
      question: '原宿のファッションカルチャーを代表する通りは次のうちどれ？',
      explanation: '竹下通りは原宿を代表するファッションストリートで、若者向けのブティックや雑貨店が立ち並びます。',
      options: [
        { text: '竹下通り', isCorrect: true },
        { text: '表参道', isCorrect: false },
        { text: '明治通り', isCorrect: false },
        { text: '井の頭通り', isCorrect: false },
      ],
    },
    {
      question: '原宿で有名なクレープの発祥店は何年に開店した？',
      explanation: '1977年に開店した「アングレープ」が原宿クレープの発祥とされています。',
      options: [
        { text: '1977年', isCorrect: true },
        { text: '1985年', isCorrect: false },
        { text: '1969年', isCorrect: false },
        { text: '1982年', isCorrect: false },
      ],
    },
    {
      question: '原宿のストリートファッションを世界に発信した雑誌は？',
      explanation: 'FRUiTSは1997年から2017年まで、原宿のストリートファッションを世界に発信し続けた伝説的な雑誌です。',
      options: [
        { text: 'FRUiTS', isCorrect: true },
        { text: 'VOGUE', isCorrect: false },
        { text: 'ELLE', isCorrect: false },
        { text: 'GINZA', isCorrect: false },
      ],
    },
    {
      question: '原宿カルチャーを代表するファッションスタイルは？',
      explanation: 'デコラは1990年代後半から2000年代に流行した原宿発祥のファッションスタイルです。',
      options: [
        { text: 'デコラ', isCorrect: true },
        { text: 'モード', isCorrect: false },
        { text: 'アメカジ', isCorrect: false },
        { text: 'トラッド', isCorrect: false },
      ],
    },
    {
      question: '原宿で人気の「タピオカドリンク」が日本で流行し始めたのは？',
      explanation: '2015年頃から原宿を中心に若者の間で人気となり、その後全国的なブームとなりました。',
      options: [
        { text: '2015年頃', isCorrect: true },
        { text: '2010年頃', isCorrect: false },
        { text: '2005年頃', isCorrect: false },
        { text: '2020年頃', isCorrect: false },
      ],
    },
    {
      question: '原宿の「カワイイ文化」を世界に広めた有名なモデルは？',
      explanation: 'きゃりーぱみゅぱみゅは原宿カルチャーを代表するアーティストとして世界的に知られています。',
      options: [
        { text: 'きゃりーぱみゅぱみゅ', isCorrect: true },
        { text: '浜崎あゆみ', isCorrect: false },
        { text: '安室奈美恵', isCorrect: false },
        { text: '倖田來未', isCorrect: false },
      ],
    },
    {
      question: '原宿で毎週日曜日に行われていた若者文化の象徴的なイベントは？',
      explanation: '歩行者天国は1977年から2019年まで、原宿の若者文化を象徴するイベントでした。',
      options: [
        { text: '歩行者天国', isCorrect: true },
        { text: 'フリーマーケット', isCorrect: false },
        { text: 'ストリートライブ', isCorrect: false },
        { text: 'コスプレパレード', isCorrect: false },
      ],
    },
  ];

  // 原宿の歴史カテゴリーのクイズ（7問）
  const harajukuHistoryQuizzes = [
    {
      question: '原宿駅が開業した年は？',
      explanation: '原宿駅は1906年（明治39年）に開業しました。当時は原宿停車場と呼ばれていました。',
      options: [
        { text: '1906年', isCorrect: true },
        { text: '1920年', isCorrect: false },
        { text: '1889年', isCorrect: false },
        { text: '1912年', isCorrect: false },
      ],
    },
    {
      question: '原宿という地名の由来となった江戸時代の施設は？',
      explanation: '原宿は江戸時代、内藤新宿と千駄ヶ谷の間にあった「原の宿場」に由来します。',
      options: [
        { text: '原の宿場', isCorrect: true },
        { text: '原の神社', isCorrect: false },
        { text: '原の城', isCorrect: false },
        { text: '原の市場', isCorrect: false },
      ],
    },
    {
      question: '1964年の東京オリンピック時、原宿に建設された施設は？',
      explanation: '1964年の東京オリンピックでは、選手村が原宿に建設され、現在の代々木公園の一部となっています。',
      options: [
        { text: '選手村', isCorrect: true },
        { text: 'メインスタジアム', isCorrect: false },
        { text: 'プレスセンター', isCorrect: false },
        { text: '練習場', isCorrect: false },
      ],
    },
    {
      question: '原宿の表参道に、戦後初めてできたファッションブランドの旗艦店は？',
      explanation: '1967年にルイ・ヴィトンが表参道に日本初の店舗をオープンし、その後の表参道のブランドストリート化の先駆けとなりました。',
      options: [
        { text: 'ルイ・ヴィトン', isCorrect: true },
        { text: 'グッチ', isCorrect: false },
        { text: 'エルメス', isCorrect: false },
        { text: 'シャネル', isCorrect: false },
      ],
    },
    {
      question: '原宿のシンボル的存在である「ラフォーレ原宿」が開業したのは何年？',
      explanation: 'ラフォーレ原宿は1978年に開業し、原宿のファッションの中心地として大きな役割を果たしてきました。',
      options: [
        { text: '1978年', isCorrect: true },
        { text: '1985年', isCorrect: false },
        { text: '1970年', isCorrect: false },
        { text: '1990年', isCorrect: false },
      ],
    },
    {
      question: '原宿の竹下通りが商店街として発展し始めたのは何年代？',
      explanation: '1970年代後半から、若者向けのブティックや雑貨店が増え始め、現在のような商店街として発展していきました。',
      options: [
        { text: '1970年代', isCorrect: true },
        { text: '1960年代', isCorrect: false },
        { text: '1980年代', isCorrect: false },
        { text: '1990年代', isCorrect: false },
      ],
    },
    {
      question: '明治神宮が創建された年は？',
      explanation: '明治神宮は1920年（大正9年）に創建され、原宿の歴史的シンボルの一つとなっています。',
      options: [
        { text: '1920年', isCorrect: true },
        { text: '1900年', isCorrect: false },
        { text: '1910年', isCorrect: false },
        { text: '1930年', isCorrect: false },
      ],
    },
  ];

  // 原宿の言語カテゴリーのクイズ（7問）
  const harajukuLanguageQuizzes = [
    {
      question: '「原宿」の「原」の字の読み方として正しいものは？',
      explanation: '「原宿」の「原」は「はら」と読みます。江戸時代、この地域が原っぱだったことに由来します。',
      options: [
        { text: 'はら', isCorrect: true },
        { text: 'げん', isCorrect: false },
        { text: 'わら', isCorrect: false },
        { text: 'かわ', isCorrect: false },
      ],
    },
    {
      question: '「竹下通り」の「竹下」の正しい読み方は？',
      explanation: '「竹下通り」は「たけした通り」と読みます。この通りは戦前からある古い通りの一つです。',
      options: [
        { text: 'たけした', isCorrect: true },
        { text: 'ちくか', isCorrect: false },
        { text: 'たけくだり', isCorrect: false },
        { text: 'たけもと', isCorrect: false },
      ],
    },
    {
      question: '原宿の若者言葉「めっちゃ」の意味として正しいものは？',
      explanation: '「めっちゃ」は関西弁由来で「とても」「非常に」という意味で使われ、原宿の若者文化とともに全国に広まりました。',
      options: [
        { text: 'とても', isCorrect: true },
        { text: 'あまり', isCorrect: false },
        { text: 'まったく', isCorrect: false },
        { text: 'ほとんど', isCorrect: false },
      ],
    },
    {
      question: '原宿で生まれた若者言葉「かわいい」の英語表現として定着したものは？',
      explanation: '「kawaii」は日本のポップカルチャーとともに世界に広まり、英語でもそのまま使われるようになりました。',
      options: [
        { text: 'kawaii', isCorrect: true },
        { text: 'cute', isCorrect: false },
        { text: 'pretty', isCorrect: false },
        { text: 'lovely', isCorrect: false },
      ],
    },
    {
      question: '原宿ファッションで使われる「ゴス」という言葉の由来は？',
      explanation: '「ゴス」は「Gothic（ゴシック）」の略語で、暗めの色調や装飾的なファッションスタイルを指します。',
      options: [
        { text: 'Gothic（ゴシック）', isCorrect: true },
        { text: 'Gossip（ゴシップ）', isCorrect: false },
        { text: 'Gorgeous（ゴージャス）', isCorrect: false },
        { text: 'Gospel（ゴスペル）', isCorrect: false },
      ],
    },
    {
      question: '原宿の若者言葉「まじ」の使い方として正しいものは？',
      explanation: '「まじ」は「本当に」という意味で使われ、驚きや感動を表現する際によく使用されます。',
      options: [
        { text: '本当に', isCorrect: true },
        { text: '少し', isCorrect: false },
        { text: 'たまに', isCorrect: false },
        { text: 'いつも', isCorrect: false },
      ],
    },
    {
      question: '原宿で使われる「激かわ」の「激」の漢字の読み方は？',
      explanation: '「激」は「げき」と読み、「とても」「非常に」という意味を強調する接頭語として使われます。',
      options: [
        { text: 'げき', isCorrect: true },
        { text: 'はげ', isCorrect: false },
        { text: 'きょう', isCorrect: false },
        { text: 'しょう', isCorrect: false },
      ],
    },
  ];

  // 原宿の人物カテゴリーのクイズ（7問）
  const harajukuPeopleQuizzes = [
    {
      question: '1970年代に原宿のストリートファッションを世界に発信した写真家は？',
      explanation: '荒木経惟は1970年代から原宿の若者文化を写真で記録し、世界に発信した先駆者の一人です。',
      options: [
        { text: '荒木経惟', isCorrect: true },
        { text: '篠山紀信', isCorrect: false },
        { text: '森山大道', isCorrect: false },
        { text: '土門拳', isCorrect: false },
      ],
    },
    {
      question: '原宿カルチャーを代表するファッションデザイナー「コムデギャルソン」のデザイナーは？',
      explanation: '川久保玲は、コムデギャルソンのデザイナーとして、原宿から世界的なファッションブランドを築き上げました。',
      options: [
        { text: '川久保玲', isCorrect: true },
        { text: '山本耀司', isCorrect: false },
        { text: '三宅一生', isCorrect: false },
        { text: '高田賢三', isCorrect: false },
      ],
    },
    {
      question: '1990年代に原宿系ファッションを確立したスタイリストは？',
      explanation: '藤原裕は、原宿系ファッションの確立に大きく貢献し、多くの若者に影響を与えました。',
      options: [
        { text: '藤原裕', isCorrect: true },
        { text: '栗原貴史', isCorrect: false },
        { text: '北村道子', isCorrect: false },
        { text: '松田翔太', isCorrect: false },
      ],
    },
    {
      question: '原宿のストリートブランド「A BATHING APE」の創設者は？',
      explanation: 'NIGO（西村六郎）は、1993年に原宿で「A BATHING APE」を立ち上げ、ストリートファッションの革新者となりました。',
      options: [
        { text: 'NIGO', isCorrect: true },
        { text: 'HIROSHI FUJIWARA', isCorrect: false },
        { text: 'JUN TAKAHASHI', isCorrect: false },
        { text: 'SHINSUKE TAKIZAWA', isCorrect: false },
      ],
    },
    {
      question: '原宿発のアイドルグループ「きゃりーぱみゅぱみゅ」のプロデューサーは？',
      explanation: '中田ヤスタカは、原宿カルチャーを音楽で表現し、新しいポップカルチャーを生み出しました。',
      options: [
        { text: '中田ヤスタカ', isCorrect: true },
        { text: '秋元康', isCorrect: false },
        { text: 'つんく♂', isCorrect: false },
        { text: '小室哲哉', isCorrect: false },
      ],
    },
    {
      question: '原宿のファッション誌「FRUiTS」の創刊者は？',
      explanation: '青木正一は1997年にFRUiTSを創刊し、20年以上にわたって原宿のストリートファッションを世界に発信しました。',
      options: [
        { text: '青木正一', isCorrect: true },
        { text: '都築響一', isCorrect: false },
        { text: '荒木経惟', isCorrect: false },
        { text: '篠山紀信', isCorrect: false },
      ],
    },
    {
      question: '原宿のカフェ文化を庁めた「CAFÉ STUDIO」のオーナーは？',
      explanation: '山本貴史は1990年代に原宿でCAFÉ STUDIOを開業し、若者の新しい集まる場所を作り出しました。',
      options: [
        { text: '山本貴史', isCorrect: true },
        { text: '田中健一', isCorrect: false },
        { text: '佐藤誠', isCorrect: false },
        { text: '鈴木道夫', isCorrect: false },
      ],
    },
  ];

  // 原宿の経済カテゴリーのクイズ（7問）
  const harajukuEconomyQuizzes = [
    {
      question: '原宿の商業施設「ラフォーレ原宿」の年間来場者数は約何人？',
      explanation: 'ラフォーレ原宿には年間約1000万人が訪れ、原宿の主要な商業施設となっています。',
      options: [
        { text: '約1000万人', isCorrect: true },
        { text: '約500万人', isCorrect: false },
        { text: '約2000万人', isCorrect: false },
        { text: '約100万人', isCorrect: false },
      ],
    },
    {
      question: '原宿の竹下通りの平均店舗賃料（1坪あたり）は？',
      explanation: '竹下通りの平均店舗賃料は1坪あたり約5万円で、若者向けのブランドでも出店できる賃料設定となっています。',
      options: [
        { text: '約5万円', isCorrect: true },
        { text: '約10万円', isCorrect: false },
        { text: '約3万円', isCorrect: false },
        { text: '約7万円', isCorrect: false },
      ],
    },
    {
      question: '原宿の主要商店街の年間売上高は約いくら？',
      explanation: '竹下通りを中心とする原宿の主要商店街の年間売上高は約300億円と推定されています。',
      options: [
        { text: '約300億円', isCorrect: true },
        { text: '約100億円', isCorrect: false },
        { text: '約500億円', isCorrect: false },
        { text: '約1000億円', isCorrect: false },
      ],
    },
    {
      question: '原宿エリアの小売店舗数は約何店舗？',
      explanation: '原宿エリアには約1000店舗の小売店があり、ファッション関連店舗が多くを占めています。',
      options: [
        { text: '約1000店舗', isCorrect: true },
        { text: '約500店舗', isCorrect: false },
        { text: '約2000店舗', isCorrect: false },
        { text: '約3000店舗', isCorrect: false },
      ],
    },
    {
      question: '原宿の観光客の年間消費額は約いくら？',
      explanation: '原宿を訪れる観光客の年間消費額は約500億円と推定されています。',
      options: [
        { text: '約500億円', isCorrect: true },
        { text: '約100億円', isCorrect: false },
        { text: '約1000億円', isCorrect: false },
        { text: '約200億円', isCorrect: false },
      ],
    },
    {
      question: '原宿の平均来街者数（1日あたり）は約何人？',
      explanation: '原宿には1日あたり約10万人が訪れ、週末はさらに多くの人で賑わいます。',
      options: [
        { text: '約10万人', isCorrect: true },
        { text: '約5万人', isCorrect: false },
        { text: '約20万人', isCorrect: false },
        { text: '約1万人', isCorrect: false },
      ],
    },
    {
      question: '原宿の外国人観光客の割合は約何％？',
      explanation: '原宿を訪れる人の約30％が外国人観光客で、アジアからの観光客が多くを占めています。',
      options: [
        { text: '約30％', isCorrect: true },
        { text: '約10％', isCorrect: false },
        { text: '約50％', isCorrect: false },
        { text: '約20％', isCorrect: false },
      ],
    },
  ];

  // 博多の文化カテゴリーのクイズ（7問）
  const hakataCultureQuizzes = [
    {
      question: '博多祇園山笠の開催時期は？',
      explanation: '博多祇園山笠は毎年7月1日から15日まで開催され、クライマックスの追い山は15日早朝に行われます。',
      options: [
        { text: '7月', isCorrect: true },
        { text: '5月', isCorrect: false },
        { text: '9月', isCorrect: false },
        { text: '1月', isCorrect: false },
      ],
    },
    {
      question: '博多の伝統工芸品である博多織の特徴は？',
      explanation: '博多織は、緻密な織り模様と独特の光沢が特徴の絹織物です。',
      options: [
        { text: '緻密な織り模様', isCorrect: true },
        { text: '派手な色使い', isCorrect: false },
        { text: '厚手の生地', isCorrect: false },
        { text: '粗い織り方', isCorrect: false },
      ],
    },
    {
      question: '博多の伝統芸能「博多芸妓」の活動拠点として知られる場所は？',
      explanation: '冷泉公園周辺は「博多券番」があり、博多芸妓の活動拠点として知られています。',
      options: [
        { text: '冷泉公園周辺', isCorrect: true },
        { text: '天神周辺', isCorrect: false },
        { text: '中洲周辺', isCorrect: false },
        { text: '博多駅周辺', isCorrect: false },
      ],
    },
    {
      question: '博多の伝統的な食文化「博多雑煮」の特徴は？',
      explanation: '博多雑煮は、かつお菜（カツオナ）という珍しい野菜を使用することが特徴です。',
      options: [
        { text: 'かつお菜を使用', isCorrect: true },
        { text: '餅を焼かない', isCorrect: false },
        { text: '味噌仕立て', isCorrect: false },
        { text: '魚を入れない', isCorrect: false },
      ],
    },
    {
      question: '博多どんたくの開催時期は？',
      explanation: '博多どんたくは毎年5月3日、4日に開催される福岡市の伝統的な祭りです。',
      options: [
        { text: '5月3日・4日', isCorrect: true },
        { text: '7月1日・2日', isCorrect: false },
        { text: '8月15日・16日', isCorrect: false },
        { text: '10月1日・2日', isCorrect: false },
      ],
    },
    {
      question: '博多人形の主な特徴は？',
      explanation: '博多人形は素焼きの上に胡粉を塗り重ねて仕上げる技法が特徴で、独特の優美な白さを持っています。',
      options: [
        { text: '白い肌の表現', isCorrect: true },
        { text: '着物の金箔使い', isCorrect: false },
        { text: '黒目の強調', isCorrect: false },
        { text: '背の高さ', isCorrect: false },
      ],
    },
    {
      question: '博多の伝統的な夏の風物詩「長浜鮮魚市場の競り」の特徴は？',
      explanation: '長浜鮮魚市場では独特の競り方「かけ声」が伝統として受け継がれており、観光客も見学できます。',
      options: [
        { text: '独特のかけ声', isCorrect: true },
        { text: '手話での取引', isCorrect: false },
        { text: '電子入札', isCorrect: false },
        { text: '夜間のみの開催', isCorrect: false },
      ],
    },
  ];

  // 博多の歴史カテゴリーのクイズ（7問）
  const hakataHistoryQuizzes = [
    {
      question: '博多港が国際貿易港として栄えた時代は？',
      explanation: '博多港は12世紀頃から日宋貿易の拠点として栄え、アジアとの交易で重要な役割を果たしました。',
      options: [
        { text: '平安時代末期～鎌倉時代', isCorrect: true },
        { text: '江戸時代', isCorrect: false },
        { text: '明治時代', isCorrect: false },
        { text: '昭和時代', isCorrect: false },
      ],
    },
    {
      question: '博多の地名の由来となった「博多津」は何時代に栄えた港町？',
      explanation: '博多津は奈良時代から栄えた国際貿易港で、遣唐使の寄港地としても重要な役割を果たしました。',
      options: [
        { text: '奈良時代', isCorrect: true },
        { text: '平安時代', isCorrect: false },
        { text: '鎌倉時代', isCorrect: false },
        { text: '室町時代', isCorrect: false },
      ],
    },
    {
      question: '1274年と1281年に博多で起きた歴史的な出来事は？',
      explanation: '元寇（蒙古襲来）は、1274年の文永の役と1281年の弘安の役の2回にわたり、博多は最前線として大きな役割を果たしました。',
      options: [
        { text: '元寇', isCorrect: true },
        { text: '応仁の乱', isCorrect: false },
        { text: '承久の乱', isCorrect: false },
        { text: '島原の乱', isCorrect: false },
      ],
    },
    {
      question: '江戸時代、博多商人の活動拠点となった「博多会所」は現在の何区にあった？',
      explanation: '博多会所は現在の博多区冷泉町にあり、博多商人たちの経済活動の中心として機能していました。',
      options: [
        { text: '博多区', isCorrect: true },
        { text: '中央区', isCorrect: false },
        { text: '東区', isCorrect: false },
        { text: '西区', isCorrect: false },
      ],
    },
    {
      question: '明治時代に博多で最初に開通した鉄道路線は？',
      explanation: '1889年（明治22年）に博多-久留米間で鉄道が開通し、これが現在のJR鹿児島本線の起源となっています。',
      options: [
        { text: '博多-久留米線', isCorrect: true },
        { text: '博多-小倉線', isCorrect: false },
        { text: '博多-長崎線', isCorrect: false },
        { text: '博多-熊本線', isCorrect: false },
      ],
    },
    {
      question: '1945年の福岡大空襲で被害を免れ、現在も残る博多の歴史的建造物は？',
      explanation: '承天寺は1242年に建立された臨済宗の寺院で、空襲の被害を免れ、現在も博多の歴史を伝える重要な建造物として残っています。',
      options: [
        { text: '承天寺', isCorrect: true },
        { text: '博多座', isCorrect: false },
        { text: '櫛田神社', isCorrect: false },
        { text: '住吉神社', isCorrect: false },
      ],
    },
    {
      question: '1972年に開業した「博多駅ビル」の特徴として正しいものは？',
      explanation: '博多駅ビルは日本初の駅ビル内に百貨店を併設した施設として注目を集め、その後の駅ビル開発のモデルケースとなりました。',
      options: [
        { text: '日本初の駅ビル内百貨店', isCorrect: true },
        { text: '日本一高い駅ビル', isCorrect: false },
        { text: '日本初の地下街', isCorrect: false },
        { text: '日本初の駅ナカ商業施設', isCorrect: false },
      ],
    },
  ];

  // 博多の言語カテゴリーのクイズ（7問）
  const hakataLanguageQuizzes = [
    {
      question: '博多弁で「だいぎゃん」の意味として正しいものは？',
      explanation: '「だいぎゃん」は「とても」「すごく」を意味する博多弁の代表的な表現です。',
      options: [
        { text: 'とても', isCorrect: true },
        { text: 'だめだ', isCorrect: false },
        { text: '痛い', isCorrect: false },
        { text: '眠い', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「なんばしよっと？」の意味は？',
      explanation: '「なんばしよっと？」は「何をしているの？」という意味で、日常会話でよく使われる表現です。',
      options: [
        { text: '何をしているの？', isCorrect: true },
        { text: '何番目？', isCorrect: false },
        { text: '何が欲しい？', isCorrect: false },
        { text: '何処に行く？', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「ばり」の使い方として正しいものは？',
      explanation: '「ばり」は「とても」「すごく」を意味し、「ばり暑か」（とても暑い）のように使います。',
      options: [
        { text: 'ばり暑か', isCorrect: true },
        { text: 'ばり食べる', isCorrect: false },
        { text: 'ばりの人', isCorrect: false },
        { text: 'ばりから', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「めんどくさか」を表現する言葉は？',
      explanation: '「だるか」は「めんどくさい」「面倒だ」を意味する博多弁です。',
      options: [
        { text: 'だるか', isCorrect: true },
        { text: 'くさか', isCorrect: false },
        { text: 'やぼか', isCorrect: false },
        { text: 'めんどか', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「とよ」が付く時の意味は？',
      explanation: '「とよ」は文末に付けて使う終助詞で、「～だよ」「～よ」という意味を表します。',
      options: [
        { text: '～だよ', isCorrect: true },
        { text: '～かな', isCorrect: false },
        { text: '～でしょう', isCorrect: false },
        { text: '～だった', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「うっとうしか」の意味は？',
      explanation: '「うっとうしか」は「面倒くさい」「煩わしい」という意味で、特に人間関係について使われることが多い表現です。',
      options: [
        { text: '煩わしい', isCorrect: true },
        { text: '寒い', isCorrect: false },
        { text: '暑い', isCorrect: false },
        { text: '眠い', isCorrect: false },
      ],
    },
    {
      question: '博多弁で「もんね」の使い方として正しいものは？',
      explanation: '「もんね」は文末に付けて「～だものね」「～ですからね」という意味を表す表現です。',
      options: [
        { text: '～だものね', isCorrect: true },
        { text: '～だけど', isCorrect: false },
        { text: '～なのに', isCorrect: false },
        { text: '～けれども', isCorrect: false },
      ],
    },
  ];

  // 博多の人物カテゴリーのクイズ（7問）
  const hakataPeopleQuizzes = [
    {
      question: '1世紀の中国の歴史書「後漢書」に記された、倭国の奴国王として博多で金印を授かった人物は？',
      explanation: '奴国王の「謎」は金印に刻まれており、これは現存する日本最古の国書として知られています。',
      options: [
        { text: '謎', isCorrect: true },
        { text: '卑弥呼', isCorrect: false },
        { text: '壱与', isCorrect: false },
        { text: '親魏倭王', isCorrect: false },
      ],
    },
    {
      question: '鎌倉時代、博多を拠点に活躍し、元寇の際に大きな功績を残した武将は？',
      explanation: '少弐経資は鎌倉幕府の重臣で、文永・弘安の役で博多の防衛に尽力しました。',
      options: [
        { text: '少弐経資', isCorrect: true },
        { text: '菊池武時', isCorrect: false },
        { text: '竹崎季長', isCorrect: false },
        { text: '北条時宗', isCorrect: false },
      ],
    },
    {
      question: '江戸時代、博多織の復興に尽力した豪商は？',
      explanation: '上野重右衛門は、衰退していた博多織の技術を京都から持ち帰り、復興に貢献しました。',
      options: [
        { text: '上野重右衛門', isCorrect: true },
        { text: '鴻池善右衛門', isCorrect: false },
        { text: '高田屋嘉兵衛', isCorrect: false },
        { text: '角倉了以', isCorrect: false },
      ],
    },
    {
      question: '明治時代、博多の近代化に貢献し、「福岡商業会議所」の初代会頭を務めた実業家は？',
      explanation: '渡辺与八郎は、明治期の博多を代表する実業家で、福岡の商工業の発展に大きく貢献しました。',
      options: [
        { text: '渡辺与八郎', isCorrect: true },
        { text: '松永安左エ門', isCorrect: false },
        { text: '五代友厚', isCorrect: false },
        { text: '広瀬宰平', isCorrect: false },
      ],
    },
    {
      question: '1960年代、博多駅周辺の再開発を推進し、「博多の顔づくり」に貢献した福岡市長は？',
      explanation: '田中正治市長は、博多駅周辺の大規模再開発を推進し、現代の博多の基礎を築きました。',
      options: [
        { text: '田中正治', isCorrect: true },
        { text: '渡辺正毅', isCorrect: false },
        { text: '荒木正夫', isCorrect: false },
        { text: '進藤一馬', isCorrect: false },
      ],
    },
    {
      question: '博多祇園山笠の振興に尽力し、「山笠の父」と呼ばれた人物は？',
      explanation: '川口松太郎は、戦後の混乱期に山笠の復興に尽力し、伝統行事の保存に大きく貢献しました。',
      options: [
        { text: '川口松太郎', isCorrect: true },
        { text: '石橋正二郎', isCorrect: false },
        { text: '山田耕筰', isCorrect: false },
        { text: '松永安左衛門', isCorrect: false },
      ],
    },
    {
      question: '博多人形の伝統を受け継ぎ、人間国宝に認定された人物は？',
      explanation: '小島与一は1993年に人間国宝に認定され、博多人形の技術を後世に伝えることに貢献しました。',
      options: [
        { text: '小島与一', isCorrect: true },
        { text: '森田柳愚', isCorrect: false },
        { text: '大江勝山', isCorrect: false },
        { text: '高取八仙', isCorrect: false },
      ],
    },
  ];

  // 博多の経済カテゴリーのクイズ（7問）
  const hakataEconomyQuizzes = [
    {
      question: '博多の伝統工芸品「博多人形」の年間売上高は約どれくらい？',
      explanation: '博多人形の年間売上高は約3億円で、伝統工芸品として重要な産業となっています。',
      options: [
        { text: '約3億円', isCorrect: true },
        { text: '約1億円', isCorrect: false },
        { text: '約10億円', isCorrect: false },
        { text: '約30億円', isCorrect: false },
      ],
    },
    {
      question: '博多駅の1日の平均乗降客数は約何万人？（2019年度）',
      explanation: '博多駅の1日平均乗降客数は約13万人で、九州最大のターミナル駅となっています。',
      options: [
        { text: '約13万人', isCorrect: true },
        { text: '約8万人', isCorrect: false },
        { text: '約20万人', isCorrect: false },
        { text: '約25万人', isCorrect: false },
      ],
    },
    {
      question: '博多の伝統市場「柳橋連合市場」の創業は何年？',
      explanation: '柳橋連合市場は1916年（大正5年）に創業し、博多の台所として親しまれています。',
      options: [
        { text: '1916年', isCorrect: true },
        { text: '1885年', isCorrect: false },
        { text: '1945年', isCorrect: false },
        { text: '1960年', isCorrect: false },
      ],
    },
    {
      question: 'キャナルシティ博多の年間来場者数は約何人？',
      explanation: 'キャナルシティ博多は年間約1600万人が訪れる、博多を代表する商業施設です。',
      options: [
        { text: '約1600万人', isCorrect: true },
        { text: '約800万人', isCorrect: false },
        { text: '約2400万人', isCorrect: false },
        { text: '約3200万人', isCorrect: false },
      ],
    },
    {
      question: '博多どんたくの経済波及効果は約どれくらい？',
      explanation: '博多どんたくは約340億円の経済波及効果があり、地域経済に大きく貢献しています。',
      options: [
        { text: '約340億円', isCorrect: true },
        { text: '約100億円', isCorrect: false },
        { text: '約500億円', isCorrect: false },
        { text: '約1000億円', isCorrect: false },
      ],
    },
    {
      question: '博多港の年間貿易額は約どれくらい？',
      explanation: '博多港の年間貿易額は約8兆円で、九州最大の貿易港として重要な役割を果たしています。',
      options: [
        { text: '約8兆円', isCorrect: true },
        { text: '約3兆円', isCorrect: false },
        { text: '約15兆円', isCorrect: false },
        { text: '約20兆円', isCorrect: false },
      ],
    },
    {
      question: '博多の「屋台」の年間売上高は約どれくらい？',
      explanation: '博多の屋台の年間売上高は約20億円で、観光資源としても重要な役割を果たしています。',
      options: [
        { text: '約20億円', isCorrect: true },
        { text: '約5億円', isCorrect: false },
        { text: '約50億円', isCorrect: false },
        { text: '約100億円', isCorrect: false },
      ],
    },
  ];

  // ラスベガスの文化カテゴリーのクイズ
  const lasvegasCultureQuizzes = [
    {
      question: 'ラスベガスの象徴的な建造物は？',
      explanation: 'ラスベガスサインは1959年に設置され、ラスベガスの象徴として世界的に有名です。',
      options: [
        { text: 'ラスベガスサイン', isCorrect: true },
        { text: 'エッフェル塔', isCorrect: false },
        { text: '自由の女神', isCorrect: false },
        { text: 'スペースニードル', isCorrect: false },
      ],
    },
  ];

  // ラスベガスの歴史カテゴリーのクイズ
  const lasvegasHistoryQuizzes = [
    {
      question: 'ラスベガスが都市として発展し始めた主な理由は？',
      explanation: 'フーバーダムの建設により労働者が集まり、ギャンブルの合法化と相まって発展しました。',
      options: [
        { text: 'フーバーダムの建設', isCorrect: true },
        { text: '金鉱の発見', isCorrect: false },
        { text: '映画産業の発展', isCorrect: false },
        { text: '軍事基地の設置', isCorrect: false },
      ],
    },
  ];

  // ラスベガスの言語カテゴリーのクイズ
  const lasvegasLanguageQuizzes = [
    {
      question: 'ラスベガスの愛称「Sin City」の意味は？',
      explanation: '「Sin City（罪の街）」は、ギャンブルや娯楽の街としての特徴を表現しています。',
      options: [
        { text: '罪の街', isCorrect: true },
        { text: '太陽の街', isCorrect: false },
        { text: '砂漠の街', isCorrect: false },
        { text: '光の街', isCorrect: false },
      ],
    },
  ];

  // ラスベガスの人物カテゴリーのクイズ
  const lasvegasPeopleQuizzes = [
    {
      question: 'ラスベガスのカジノ産業を発展させた実業家は？',
      explanation: 'バグジー・シーゲルは、フラミンゴホテルを建設し、モダンなラスベガスの基礎を築きました。',
      options: [
        { text: 'バグジー・シーゲル', isCorrect: true },
        { text: 'ハワード・ヒューズ', isCorrect: false },
        { text: 'スティーブ・ウィン', isCorrect: false },
        { text: 'シェルドン・アデルソン', isCorrect: false },
      ],
    },
  ];

  // ラスベガスの経済カテゴリーのクイズ
  const lasvegasEconomyQuizzes = [
    {
      question: 'ラスベガスの主要な収入源は？',
      explanation: 'ラスベガスの収入の大部分は、カジノ、ホテル、ショーなどの観光業から得られています。',
      options: [
        { text: '観光業', isCorrect: true },
        { text: '農業', isCorrect: false },
        { text: '製造業', isCorrect: false },
        { text: 'IT産業', isCorrect: false },
      ],
    },
  ];

  // 全クイズデータの配列
  const allQuizzes = [
    ...harajukuCultureQuizzes,
    ...harajukuHistoryQuizzes,
    ...harajukuLanguageQuizzes,
    ...harajukuPeopleQuizzes,
    ...harajukuEconomyQuizzes,
    ...hakataCultureQuizzes,
    ...hakataHistoryQuizzes,
    ...hakataLanguageQuizzes,
    ...hakataPeopleQuizzes,
    ...hakataEconomyQuizzes,
    ...lasvegasCultureQuizzes,
    ...lasvegasHistoryQuizzes,
    ...lasvegasLanguageQuizzes,
    ...lasvegasPeopleQuizzes,
    ...lasvegasEconomyQuizzes,
  ];

  // クイズデータの挿入
  for (const quizData of allQuizzes) {
    const [quiz] = await db.insert(quizzes).values({
      regionId: getRegionId(quizData),
      categoryId: getCategoryId(quizData),
      question: quizData.question,
      explanation: quizData.explanation,
      isAiGenerated: false,
    }).returning();

    await db.insert(quizOptions).values(
      quizData.options.map((option, index) => ({
        quizId: quiz.id,
        optionText: option.text,
        isCorrect: option.isCorrect,
        displayOrder: index + 1,
      }))
    );
  }
}

// クイズデータから地域IDを判断する関数
function getRegionId(quizData: any): number {
  if (quizData.question.includes('原宿')) return 1;
  if (quizData.question.includes('博多')) return 2;
  return 1; // デフォルト値
}

// クイズデータからカテゴリーIDを判断する関数
function getCategoryId(quizData: any): number {
  if (quizData.question.includes('文化') || quizData.question.includes('ファッション') || quizData.question.includes('祭り')) return 1;
  if (quizData.question.includes('歴史') || quizData.question.includes('年')) return 2;
  if (quizData.question.includes('言葉') || quizData.question.includes('意味')) return 3;
  if (quizData.question.includes('人物') || quizData.question.includes('誰')) return 4;
  if (quizData.question.includes('経済') || quizData.question.includes('売上')) return 5;
  return 1; // デフォルト値
} 