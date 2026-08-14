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

export const storyLinks = {
  guide1: {
    title: "ラシュアン〜水晶霊の河",
    path: "/stories/guide1",
    image: "/link-headers/stories-guide1.jpg",
    desc: "ストーリー開始から大晶霊ウンディーネのいる水晶霊の河までをガイド",
  },
  guide2: {
    title: "いざないの密林〜ファロース",
    path: "/stories/guide2",
    image: "/link-headers/stories-guide2.jpg",
    desc: "序盤の難所いざないの密林の攻略情報をチェック",
  },
  guide3: {
    title: "セレスティア〜チャットの小屋",
    path: "/stories/guide3",
    image: "/link-headers/stories-guide3.jpg",
    desc: "セレスティア突入後のストーリーガイド 難易度の高いチャットの小屋も解説",
  },
  guide4: {
    title: "ペイルティ〜バリル城",
    path: "/stories/guide4",
    image: "/link-headers/stories-guide4.jpg",
    desc: "雷晶霊の遺跡とバリル城など難易度の高いセレスティアのダンジョンを解説",
  },
  guide5: {
    title: "セイファート神殿〜シゼル城",
    path: "/stories/guide5",
    desc: "エンディングまでガイド シゼル城のダンジョン情報やラストバトルを解説",
  },
};

export const skillLinks = {
  rid: {
    title: "リッドの特技/奥義",
    path: "/skills/rid",
    image: "/link-headers/skills-rid.jpg",
    desc: "リッドの特技と奥義の一覧ページ。必要な習得条件も掲載しています。上位技は気づきにくい習得条件もあるためチェック！",
  },
  farth: {
    title: "ファラの特技",
    path: "/skills/farth",
    image: "/link-headers/skills-farth.jpg",
    desc: "ファラの特技一覧ページ。拳/蹴レベルなどの習得条件も掲載しています。目指せ殺劇舞荒拳の習得！",
  },
  chat: {
    title: "チャットの特技",
    path: "/skills/chat",
    desc: "",
  },
  fog: {
    title: "フォッグの特技",
    path: "/skills/fog",
    desc: "",
  },
  magic: {
    title: "晶霊術（メルディ&キール）",
    path: "/skills/magic",
    image: "/link-headers/skills-magic.jpg",
    desc: "晶霊術の一覧ページ。フリンジに必要な組み合わせとレベルも掲載しています。好きな術を見つけて獲得しましょう！",
  },
};

export const subeventLinks = {
  lens: {
    title: "レンズ収集",
    path: "/subevents/lens",
    image: "/link-headers/subevents-lens.jpg",
    desc: "レンズ収集の解説とレンズの入所場所一覧を掲載しています。ストーリー攻略と合わせてご確認ください。",
  },
  catarine: {
    title: "カトリーヌの恋愛",
    path: "/subevents/catarine",
    image: "/link-headers/subevents-catarine.jpg",
    desc: "ファラの称号を得られるサブイベント。時限イベントで見落としがちなイベントもあるので要チェック！",
  },
  kremerball: {
    title: "クレーメルボール",
    path: "/subevents/kremerball",
    image: "/link-headers/subevents-kremerball.jpg",
    desc: "ミンツで遊べるミニゲームを解説。勝つとリッドの称号を得られるゲームです。",
  },
  // "clip-spirits": {
  //   title: "クリップソード",
  //   path: "/subevents/clip-sword",
  //   desc: "",
  // },
  beppo: {
    title: "ベッポとのかくれんぼ",
    path: "/subevents/beppo",
    image: "/link-headers/subevents-beppo.jpg",
    desc: "ルーンボトルなどを入手できるサブイベント。時間制限があるのでセレスティアへ行く前にチェック。",
  },
  syanballoon: {
    title: "シャンバルーン",
    path: "/subevents/syanballoon",
    image: "/link-headers/subevents-syanballoon.jpg",
    desc: "ストーリー後半ではステップリングがもらえるシャンバルーンを解説。",
  },
  "skill-chat": {
    title: "チャット特技習得",
    path: "/subevents/skill-chat",
    image: "/link-headers/subevents-skill-chat.jpg",
    desc: "偶然辿り着くのが難しいチャットの特技習得場所をチェック",
  },
  "skill-fog": {
    title: "フォッグ特技習得",
    image: "/link-headers/subevents-skill-fog.jpg",
    path: "/subevents/skill-fog",
    desc: "偶然たどり着くのが難しいフォッグの特技習得場所をチェック",
  },
  lysithea: {
    title: "画家リシテア",
    path: "/subevents/lysithea",
    desc: "フォッグの最強技の習得や強化に関連する画家リシテアのイベントを解説！",
  },
  "flying-boad": {
    title: "飛行艇の入手",
    path: "/subevents/flying-boad",
    desc: "エターニアを最後まで楽しむために入手必須な飛行艇の入手方法を解説！",
  },
  "secret-base": {
    title: "インフェリアの隠しアジト",
    image: "/link-headers/subevents-secret-base.jpg",
    path: "/subevents/secret-base",
    desc: "インフェリアにあるアイフリードの隠しアジトを解説。遠征の橋でインフェリアに戻ってきたらすぐに訪れましょう！",
  },
  "secret-spirits": {
    title: "隠し大晶霊",
    path: "/subevents/secret-spirits",
    desc: "ストーリー攻略だけでは契約できない大晶霊を解説。どれも強力な大晶霊です！",
  },
  // a: {
  //   title: "闘技場",
  //   path: "/subevents/a",
  //   desc: "",
  // },
};

export const systemLinks = {
  manual: {
    title: "戦闘マニュアル操作/特殊操作",
    image: "/link-headers/systems-buttle.jpg",
    path: "/systems/buttle",
    desc: "戦闘をより楽しくするためのシステム解説。マニュアル操作とキャラクタ毎の特殊操作について紹介！",
  },
  titles: {
    title: "エターニアの称号",
    path: "/systems/titles",
    desc: "",
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
  },
  rune: {
    title: "ルーンボトル/変化一覧",
    image: "/link-headers/systems-rune.jpg",
    path: "/systems/rune",
    desc: "ルーンボトルの説明とアイテム変化一覧をオススメ度評価して紹介します！",
  },
  "tp-reduce": {
    title: "TP減少アクセサリ",
    path: "/systems/tp-reduce",
    desc: "戦闘でバンバン特技や晶霊術を利用できるようになるアクセサリを紹介",
  },
  recipe: {
    title: "料理一覧/マスター料理",
    image: "/link-headers/systems-recipe.jpg",
    path: "/systems/recipe",
    desc: "料理一覧情報掲載。ワンダーシェフの場所や特殊なマスター料理の解説も！",
  },
  // "item-list": {
  //   title: "アイテム一覧",
  //   path: "/systems/item-list",
  // },
  // "enemy-list": {
  //   title: "モンスター一覧",
  //   path: "/systems/enemy-list",
  // },
  // "world-map": {
  //   title: "ワールドマップ",
  //   path: "/systems/world-map",
  // },
  // "status-up": {
  //   title: "ステータスアップ薬草",
  //   path: "/systems/status-up",
  //   desc: "",
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
  // "level-up": {
  //   title: "レベル上げ方法",
  //   path: "/systems/level-up",
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
    desc: "",
  },
  "sunken-ship": {
    title: "沈没船",
    path: "/extras/sunken-ship",
    desc: "",
  },
  aifread: {
    title: "アイフリードの墓",
    image: "/link-headers/extras-aifread.jpg",
    path: "/extras/aifread",
    desc: "",
  },
  "farosu-underground": {
    title: "ファロース教会地下",
    path: "/extras/farosu-underground",
    desc: "",
  },
  valkyrie: {
    title: "きらめきの塔",
    path: "/extras/valkyrie",
    desc: "",
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
