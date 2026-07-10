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
    desc: "ストーリー開始から大晶霊ウンディーネのいる水晶霊の河までをガイド",
  },
  guide2: {
    title: "いざないの密林〜ファロース",
    path: "/stories/guide2",
    desc: "序盤の難所いざないの密林の攻略情報をチェック",
  },
  guide3: {
    title: "アイメン〜チャットの小屋",
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
    desc: "",
  },
  catarine: {
    title: "カトリーヌの恋愛",
    path: "/subevents/catarine",
    desc: "",
  },
  kremerball: {
    title: "クレーメルボール",
    path: "/subevents/kremerball",
    desc: "",
  },
  syanballoon: {
    title: "シャンバルーン",
    path: "/subevents/syanballoon",
    desc: "",
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
    desc: "",
  },
  lysithea: {
    title: "画家リシテア",
    path: "/subevents/lysithea",
    desc: "",
  },
  "flying-boad": {
    title: "飛行艇の入手",
    path: "/subevents/flying-boad",
    desc: "",
  },
  "secret-base": {
    title: "アイフリートアジト",
    path: "/subevents/secret-base",
    desc: "",
  },
  "secret-spirits": {
    title: "隠し大晶霊",
    path: "/subevents/secret-spirits",
    desc: "",
  },
};

export const systemLinks = {
  manual: {
    title: "戦闘（マニュアル操作/特殊操作）",
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
  "master-recipe": {
    title: "マスター料理",
    image: "/link-headers/systems-master-recipe.jpg",
    path: "/systems/master-recipe",
    desc: "隠し要素の特殊な料理を紹介。効果もピカイチなのでぜひ習得しましょう！",
  },
  // "fileld-and-gps": {
  //   title: "特殊なフィールド/GPS",
  //   path: "/systems/fileld-and-gps",
  //   desc: "",
  // },
  // "status-up": {
  //   title: "特殊なステータスアップ",
  //   path: "/systems/status-up",
  //   desc: "",
  // },
  // "special-skill": {
  //   title: "秘奥義/特殊技",
  //   path: "/systems/special-skill",
  //   desc: "",
  // },
};

export const extraLinks = {
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
