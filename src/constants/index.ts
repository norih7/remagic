export const siteName = "RE:MAGIC";
export const categoryName = {
  none: "",
  skills: "特技/晶霊術",
  stories: "ストーリーガイド",
  systems: "システム/データ",
  subevents: "サブイベント",
  extras: "隠しダンジョン",
};

export type CategoryKey = keyof typeof categoryName;

export const categoryLinks = {
  skills: {
    title: "特技/晶霊術",
    path: "/skills",
    desc: "エターニアのパーティの特技と晶霊術を紹介しています。習得条件や大晶霊の組み合わせをチェック。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。エターニアのパーティの特技と晶霊術を紹介しています。習得条件や大晶霊の組み合わせをチェック。",
  },
  systems: {
    title: "システム/データ",
    path: "/skills",
    desc: "エターニアのシステム開設やアイテムなどの一覧データを公開",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。エターニアのシステム開設やアイテムなどの一覧データを公開しています。",
  },
  subevents: {
    title: "サブイベント",
    path: "/subevents",
    desc: "エターニアのサブイベントの解説。強力なアイテムや装備品、特技の習得などを網羅。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。エターニアのサブイベントの解説。強力なアイテムや装備品、特技の習得などを網羅。",
  },
  extras: {
    title: "隠しマップ",
    path: "/extras",
    desc: "エターニアの隠しマップの解説。隠しダンジョン、隠しタウン、特殊なフィールドマップを紹介しています。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。隠しダンジョン、隠しタウン、特殊なフィールドマップを紹介しています。",
  },
};

export const storyLinks = {
  guide1: {
    title: "ラシュアン〜水晶霊の河",
    path: "/stories/guide1",
    image: "/link-headers/stories-guide1.jpg",
    desc: "ストーリー開始から大晶霊ウンディーネのいる水晶霊の河までをガイド",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。ラシュアンから水晶霊の河までの進行ルートを紹介します。レグルス道場や望郷の洞窟、モルルなどの攻略ポイントに加え、ウンディーネ戦のポイント、マニュアルのしょやレンズなどの取り忘れやすいアイテムもまとめています。",
  },
  guide2: {
    title: "いざないの密林〜ファロース",
    path: "/stories/guide2",
    image: "/link-headers/stories-guide2.jpg",
    desc: "序盤の難所いざないの密林の攻略情報をチェック",
    seoDesc:
      "テイルズオブエターニア（TOE/リマスター版）攻略。インフェリアから霊峰ファロースまでの攻略ルート、いざないの密林の石像の謎解き、風晶霊の空洞、火晶霊の谷、レンズやアイテムの入手場所を詳細に解説します。",
  },
  guide3: {
    title: "セレスティア〜チャットの小屋",
    path: "/stories/guide3",
    image: "/link-headers/stories-guide3.jpg",
    desc: "セレスティア突入後のストーリーガイド 難易度の高いチャットの小屋も解説",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。セレスティア到着後の「地晶霊の廃坑」や「チャットの小屋」の詳細な攻略法を分かりやすく解説！階層ごとのギミック解除手順や重要アイテム、レンズの回収場所を掲載しています。",
  },
  guide4: {
    title: "ペイルティ〜バリル城",
    path: "/stories/guide4",
    image: "/link-headers/stories-guide4.jpg",
    desc: "雷晶霊の遺跡とバリル城など難易度の高いセレスティアのダンジョンを解説",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。氷晶霊の山、雷晶霊の遺跡、バリル城の詳細な攻略法を分かりやすく解説！ダンジョンマップやレンズの回収位置、厄介なボス戦の対策もまとめています。",
  },
  guide5: {
    title: "セイファート神殿〜シゼル城",
    path: "/stories/guide5",
    desc: "エンディングまでガイド シゼル城のダンジョン情報やラストバトルを解説",
    seoDesc: "",
  },
};

export const skillLinks = {
  rid: {
    title: "リッドの特技/奥義",
    path: "/skills/rid",
    image: "/link-headers/skills-rid.jpg",
    desc: "リッドの特技と奥義の一覧ページ。必要な習得条件も掲載しています。上位技は気づきにくい習得条件もあるためチェック！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。リッドが習得するすべての特技と奥義を網羅。各種スキルの効果、属性、消費TP、ヒット数に加え、習得に必要な斬・突レベルや特定技の使用回数といった条件を詳しく一覧で紹介しています。",
  },
  farth: {
    title: "ファラの特技",
    path: "/skills/farth",
    image: "/link-headers/skills-farth.jpg",
    desc: "ファラの特技一覧ページ。拳/蹴レベルなどの習得条件も掲載しています。目指せ殺劇舞荒拳の習得！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。ファラが習得するすべての特技や回復功を網羅。各種スキルの効果、属性、消費TP、ヒット数に加え、習得に必要な拳・蹴レベルや特定技の使用回数といった詳細な条件を一覧で紹介しています。",
  },
  chat: {
    title: "チャットの特技",
    path: "/skills/chat",
    desc: "",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。チャットが習得するすべての特技や特殊スキルを網羅。各スキルの効果、属性、消費TP、ヒット数に加え、ピコハンやローバーアイテム、サブイベントによる習得条件などの詳細情報を一覧で紹介しています。",
  },
  fog: {
    title: "フォッグの特技",
    path: "/skills/fog",
    desc: "",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。フォッグが操るすべての特技や銃弾スキルを網羅。各スキルの効果、属性、消費TP、ヒット数に加え、キャンセルレベルやサブイベントによる習得手順などの詳細情報を一覧で紹介しています。",
  },
  magic: {
    title: "晶霊術（メルディ&キール）",
    path: "/skills/magic",
    image: "/link-headers/skills-magic.jpg",
    desc: "晶霊術の一覧ページ。フリンジに必要な組み合わせとレベルも掲載しています。好きな術を見つけて獲得しましょう！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。晶霊術の一覧ページ。フリンジに必要な組み合わせとレベルも掲載しています。好きな術を見つけて獲得しましょう！",
  },
};

export const subeventLinks = {
  lens: {
    title: "レンズ収集",
    path: "/subevents/lens",
    image: "/link-headers/subevents-lens.jpg",
    desc: "レンズ収集の解説とレンズの入所場所一覧を掲載しています。ストーリー攻略と合わせてご確認ください。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。レンズ全60枚の入手場所一覧を徹底解説。シャンバールやティンシアのイレーヌでもらえる豪華報酬リストから、見落としがちなレンズの隠し場所まで網羅。効率的なコンプリートを目指しましょう。",
  },
  catarine: {
    title: "カトリーヌの恋愛",
    path: "/subevents/catarine",
    image: "/link-headers/subevents-catarine.jpg",
    desc: "ファラの称号を得られるサブイベント。時限イベントで見落としがちなイベントもあるので要チェック！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。ファラの限定称号「あいのネゴシエーター」が手に入る隠しサブイベント「カトリーヌの恋愛イベント」の発生場所、全6回の遭遇時期、時限要素の注意点、そしてハッピーエンドを迎えるための全遭遇条件を詳しく解説しています。",
  },
  kremerball: {
    title: "クレーメルボール",
    path: "/subevents/kremerball",
    image: "/link-headers/subevents-kremerball.jpg",
    desc: "ミンツで遊べるミニゲームを解説。勝つとリッドの称号を得られるゲームです。",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。ミンツで遊べるミニゲームを解説。勝つとリッドの称号を得られるゲームです。",
  },
  "grip-sword": {
    title: "グリップソード探し",
    path: "/subevents/grip-sword",
    image: "/link-headers/subevents-grip-sword.jpg",
    desc: "アクセサリ「スマッシュマント」を入手できるグリップソード探しを紹介。",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。アクセサリ「スマッシュマント」を入手できるグリップソード探しのサブイベントを解説。街の探索場所について画像も掲載しています。",
  },
  beppo: {
    title: "ベッポのかくれんぼ",
    path: "/subevents/beppo",
    image: "/link-headers/subevents-beppo.jpg",
    desc: "ルーンボトルなどを入手できるサブイベント。時間制限があるのでセレスティアへ行く前にチェック。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。バロールのサブイベント「ベッポとのかくれんぼ」の発生条件と攻略手順を解説。ルーンボトルや、ジイニのオークションで高値になるドエニスのポプリの入手方法、時限要素（セレスティア突入前までの期限）についてまとめています。",
  },
  syanballoon: {
    title: "シャンバルーン",
    path: "/subevents/syanballoon",
    image: "/link-headers/subevents-syanballoon.jpg",
    desc: "ストーリー後半ではステップリングがもらえるシャンバルーンを解説。",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。シャンバルーン攻略情報。リッドの称号「キングあんどバルーン」や貴重な「ステップリング」の入手方法、各難易度の制限時間とおすすめの戦法を詳しく紹介。",
  },
  "skill-chat": {
    title: "チャット特技習得",
    path: "/subevents/skill-chat",
    image: "/link-headers/subevents-skill-chat.jpg",
    desc: "偶然辿り着くのが難しいチャットの特技習得場所をチェック",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。チャットが習得するすべての特技（ポイハン、コチハン、パラライボール、エターナルスロー）の発生条件や場所、隠しアジトですごろく後に挑む全10問の難解なクイズの正解一覧をわかりやすく解説しています。",
  },
  "skill-fog": {
    title: "フォッグ特技習得",
    image: "/link-headers/subevents-skill-fog.jpg",
    path: "/subevents/skill-fog",
    desc: "偶然たどり着くのが難しいフォッグの特技習得場所をチェック",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。フォッグがサブイベントで習得するすべての特技（エアブレイド、アクアスパイラル、レイジレーザー、ダークレイザー、エレメンタルマスター）の発生条件、場所、強力な最終技習得までの流れを詳しく解説しています。",
  },
  lysithea: {
    title: "画家リシテア",
    path: "/subevents/lysithea",
    image: "/link-headers/subevents-lysithea.jpg",
    desc: "フォッグの最強技の習得や強化に関連する画家リシテアのイベントを解説！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。サブイベント「放浪の画家リシテア」の攻略ページ。ペイルティやセレスティア各地での遭遇場所、発生条件、フォッグのアクセサリ「キャンセラー」の入手法とエレメントマスター習得への流れを解説。",
  },
  "flying-board": {
    title: "飛行艇の入手",
    path: "/subevents/flying-board",
    image: "/link-headers/subevents-flying-board.jpg",
    desc: "エターニアを最後まで楽しむために入手必須な飛行艇の入手方法を解説！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。バンエルティア号を飛行艇へと改造するために必要なキーアイテム「やみのたま」「ひかりのたま」の入手法、中継基地の改造ドッグへの行き方、フィールドでの呼び出し方を詳しく解説しています。",
  },
  "secret-base": {
    title: "インフェリアの隠しアジト",
    image: "/link-headers/subevents-secret-base.jpg",
    path: "/subevents/secret-base",
    desc: "インフェリアにあるアイフリードの隠しアジトを解説。遠征の橋でインフェリアに戻ってきたらすぐに訪れましょう！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。インフェリアにあるアイフリードの隠しアジト（全4箇所）の攻略情報です。各アジトのGPS座標やマップ画像、セボリーやホーリィクロークなどの入手アイテム一覧を網羅しています。",
  },
  "secret-spirits": {
    title: "隠し大晶霊",
    image: "/link-headers/subevents-secret-spirits.jpg",
    path: "/subevents/secret-spirits",
    desc: "ストーリー攻略だけでは契約できない大晶霊を解説。どれも強力な大晶霊です！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。ストーリー攻略だけでは契約できない協力な大晶霊を解説。",
  },
  // coliseum: {
  //   title: "闘技場",
  //   path: "/subevents/a",
  //   desc: "",
  // },
};

export const systemLinks = {
  buttle: {
    title: "戦闘マニュアル操作/特殊操作",
    image: "/link-headers/systems-buttle.jpg",
    path: "/systems/buttle",
    desc: "戦闘をより楽しくするためのシステム解説。マニュアル操作とキャラクタ毎の特殊操作について紹介！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。エターニアの戦闘マニュアル操作および特殊操作を解説。マニュアル操作への切り替え方法（マニュアルのしょ入手）や、おすすめの操作設定、バックステップ、移動速度アップ、晶霊術・特技の詠唱短縮など、戦闘を有利に進めるためのテクニックを網羅しています。",
  },
  // "join-chat-and-fog": {
  //   title: "チャットとフォッグの加入",
  //   path: "/systems/join-chat-and-fog",
  //   desc: "",
  // },
  skill: {
    title: "特技/術の習得",
    path: "/systems/skill",
    image: "/link-headers/systems-skills.jpg",
    desc: "特技と晶霊術の習得について説明。なかなか特技や術を覚えられないという方は必見！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。リッド・ファラの専用レベル（斬・突・拳・蹴）や技の使用回数、キール・メルディのクレーメルケイジ（フリンジ）による晶霊術習得、チャット・フォッグのサブイベント習得まで、キャラクターごとの多彩なスキル習得システムを徹底解説。",
  },
  rune: {
    title: "ルーンボトル/変化一覧",
    image: "/link-headers/systems-rune.jpg",
    path: "/systems/rune",
    desc: "ルーンボトルの説明とアイテム変化一覧をオススメ度評価して紹介します！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。ルーンボトルの解説と変化一覧を掲載しています！各変化についてオススメ度もあるので参考にしてください！",
  },
  recipe: {
    title: "料理一覧/マスター料理",
    image: "/link-headers/systems-recipe.jpg",
    path: "/systems/recipe",
    desc: "料理一覧情報掲載。ワンダーシェフの場所や特殊なマスター料理の解説も！",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。料理レシピ一覧とマスター料理を説明。各料理の効果、ワンダーシェフの場所、作成に必要な食材データを網羅。HP・TP回復やステータス強化に役立つマスター料理の習得条件も詳しく解説。",
  },
  "special-effect": {
    title: "装備品の特殊効果",
    path: "/systems/special-effect",
    desc: "特殊効果がある装備品を紹介。TP消費減少や自動回復などおすすめ品も紹介！",
  },
  "item-data": {
    title: "アイテム一覧データ",
    path: "/systems/item-data",
    desc: "アイテム一覧データを掲載",
    seoDesc:
      "リマスター版対応のテイルズオブエターニア（TOE）攻略。使用アイテム一覧を掲載。",
  },
  titles: {
    title: "エターニアの称号",
    path: "/systems/titles",
    desc: "",
  },

  // "enemy-list": {
  //   title: "モンスター一覧",
  //   path: "/systems/enemy-list",
  // },
  // "world-map": {
  //   title: "ワールドマップ",
  //   path: "/systems/world-map",
  // },
  // "special-skill": {
  //   title: "秘奥義/特殊技",
  //   path: "/systems/special-skill",
  //   desc: "",
  // },
  // "blue-earth": {
  //   title: "ブルーアース",
  //   path: "/systems/blue-earth",
  //   desc: "",
  // },
};

export const extraLinks = {
  // "fileld": {
  //   title: "フィールドの隠し場所",
  //   path: "/extras/fileld",
  //   desc: "",
  // },
  "dark-cave": {
    title: "闇の洞窟",
    path: "/extras/dark-cave",
    image: "/link-headers/extras-dark-cave.jpg",
    desc: "闇の大晶霊シャドウと契約できる隠しダンジョン。潜水艇を入手したら早めに目指すのがおすすめです。",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。闇の大晶霊「シャドウ」と契約できる隠しダンジョン「闇の洞窟」の行き方、謎解き・フロア攻略手順、シャドウ戦のボス攻略法やおすすめの戦術、入手できるアイテム・レンズ情報を網羅して紹介しています。",
  },
  "sunken-ship": {
    title: "沈没船",
    path: "/extras/sunken-ship",
    image: "/link-headers/extras-sunken-ship.jpg",
    desc: "易しい難易度の隠しダンジョン。インフェリア帰還後に立ち寄るのがおすすめです。",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。インフェリアの隠しダンジョン「沈没船」の行き方、船内の謎解き（隔壁のキー・ポンプ室の鍵・水の放出）、インシーマップの入手法、ボス「セイレーン」の攻略、入手アイテム情報を網羅して紹介しています。",
  },
  aifread: {
    title: "アイフリードの墓",
    image: "/link-headers/extras-aifread.jpg",
    path: "/extras/aifread",
    desc: "飛行艇の入手に必要な隠しダンジョン。優秀な装備品もあるので早めにクリアを目指しましょう！",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。隠しダンジョン「アイフリードの墓」を徹底解説。飛行艇入手の必須アイテム「ひかりのたま」の獲得手順、3つのパーツ（ひげ・帽子・服）のありか、各ギミックの解除法や優秀な防具「ムーンローブ」を含む収集アイテム情報をわかりやすく紹介しています。",
  },
  "farosu-underground": {
    title: "ファロース教会地下",
    path: "/extras/farosu-underground",
    desc: "",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。元の大晶霊「マクスウェル」と契約できる隠しダンジョン「ファロース教会地下」の行き方、ダンジョン内部の探索、ボス「マクスウェル」の攻略法、貴重なドロップアイテム「フェアリィリング」や入手装備の情報を網羅して紹介しています。",
  },
  valkyrie: {
    title: "きらめきの塔",
    path: "/extras/valkyrie",
    desc: "",
    seoDesc:
      "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。隠しダンジョン「きらめきの塔」の行き方、1階から7階までの各フロアに用意された多彩な謎解きギミック・パズルの解き方、リッド1人で挑むボス「ワルキューレ」の攻略法や「S・D」入手の鍵に関する情報を網羅して紹介しています。",
  },
  // jiini: {
  //   title: "ジイニとオークション",
  //   path: "/extras/jiini",
  //   desc: "",
  // },
  // towns: {
  //   title: "ねこにんの里/晶霊温泉",
  //   path: "/extras/towns",
  //   desc: "",
  // },
  //   valkyrie: {
  //   title: "ネレイドの迷宮",
  //   path: "/extras/valkyrie",
  //   desc: "",
  // },
};

export const deepLinks = {
  "level-up": {
    title: "レベル上げ方法",
    path: "/depths/level-up",
    desc: "",
  },
  "status-up": {
    title: "ステータスアップ薬草",
    path: "/depths/status-up",
    desc: "",
  },
  a: {
    title: "戦闘ランクマニア/アンノウン",
    path: "/depths/",
    desc: "",
  },
  b: {
    title: "アイテム盗み",
    path: "/depths/",
    desc: "",
  },
  c: {
    title: "おすすめ装備考察",
    path: "/depths/",
    desc: "",
  },
};

export const elementMap = {
  water: {
    name: "水",
    color: "text-sky-400",
  },
  wind: {
    name: "風",
    color: "text-lime-400",
  },
  fire: {
    name: "火",
    color: "text-red-400",
  },
  earth: {
    name: "土",
    color: "text-amber-600",
  },
  ice: {
    name: "氷",
    color: "text-slate-300",
  },
  light: {
    name: "光",
    color: "text-amber-300",
  },
  thunder: {
    name: "雷",
    color: "text-yellow-500",
  },
  dark: {
    name: "闇",
    color: "text-gray-600",
  },
  origin: {
    name: "元",
    color: "text-mauve-400",
  },
  time: {
    name: "時",
    color: "text-purple-400",
  },
  normal: {
    name: "武器属性",
    color: "text-mist-400",
  },
  none: {
    name: "-",
    color: "text-gray-800",
  },
};

export const recipeTypeMap = {
  normal: "ワンダーシェフ",
  master: "マスター料理",
  other: "その他",
};

export const recipeWorldMap = {
  inferior: "インフェリア",
  celestia: "セレスティア",
  other: "その他",
};

export const itemTypeMap = {
  useItem: "消費アイテム",
  money: "ガルド",
  keyItem: "貴重品",
  sword: "剣（リッドの武器）",
  greatSword: "大剣（リッドの「武器」装備）",
  shortSword: "短剣（リッドの「武器」装備）",
  ax: "斧（リッドの「武器」装備）",
  spear: "槍（リッドの「武器」装備）",
  halbert: "矛槍（リッドの「武器」装備）",
  knuckle: "ナックル（ファラの「武器」装備）",
  whistle: "ホイッスル（メルディの「武器」装備）",
  cane: "杖（キールの「武器」装備）",
  mace: "メイス（キールの「武器」装備）",
  bag: "カバン（チャットの「武器」装備）",
  gun: "銃（フォッグの「武器」装備）",
  armor: "鎧（リッドの「体」装備）",
  cloak: "クローク（女性キャラの「体」装備）",
  robe: "ローブ（キール、フォッグの「体」装備）",
  shield: "盾（リッドの「盾・腕」装備）",
  bracelet: "ブレスレッド（リッド以外の「盾・腕」装備）",
  helmet: "兜（リッド、フォッグの「頭」装備）",
  ribbon: "リボン（ファラ、メルデイの「頭」装備）",
  circlet: "サークレット（キールの「頭」装備）",
  hat: "帽子（チャットの「頭」装備）",
  accessory: "アクセサリ",
};
