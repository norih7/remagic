import Link from "next/link";
type Props = {};

const update = [
  {
    date: "2026/10/29",
    update: (
      <>
        <Link href="/deeps/herb">ステータスアップ薬草集め</Link>
        をアップデート。リマスター版のバグ現象を記載しました。
      </>
    ),
  },
  {
    date: "2026/10/26",
    update: (
      <>
        <Link href="/deeps/blue-earth">ブルーアース</Link>
        をアップデート。リマスター版の画像に変更しました。
      </>
    ),
  },
  {
    date: "2026/10/24",
    update: (
      <>
        <Link href="/subevents/skill-chat">チャットの特技習得</Link>、
        <Link href="/subevents/skill-fog">フォッグの特技習得</Link>、
        <Link href="/subevents/lysithea">画家リシテア</Link>
        をアップデート。リマスター版の画像に変更しました。
      </>
    ),
  },
  {
    date: "2026/10/23",
    update: (
      <>
        <Link href="/subevents/sekundes">ゼクンドゥス</Link>
        を公開。
      </>
    ),
  },
  {
    date: "2026/10/23",
    update: (
      <>
        <Link href="/deeps/lap">周回プレイ（リマスター版）</Link>
        を更新。アンノウンの仕様を記載しました。
      </>
    ),
  },
  {
    date: "2026/10/21",
    update: (
      <>
        <Link href="/deeps/herb">ステータスアップ薬草集め</Link>
        を更新。Tipsなど内容を追記しました。
      </>
    ),
  },
  {
    date: "2026/10/20",
    update: (
      <>
        アイテム、武器、防具、アクセサリデータをアップデート。入手できるサブイベントの関連付けを行いました。
      </>
    ),
  },
  {
    date: "2026/10/20",
    update: (
      <>
        <Link href="/subevents/secret-base">インフェリアの隠しアジト</Link>
        を更新。リマスター版の画像を増やしました。
      </>
    ),
  },
  {
    date: "2026/10/20",
    update: (
      <>
        <Link href="/deeps/lap">周回プレイ（リマスター版）</Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/20",
    update: (
      <>
        <Link href="/deeps/level-up">レベル上げ</Link>
        をアップデート。風刃縛封の無限コンボ、アイスニードル連発の説明と動画を公開。
      </>
    ),
  },
  {
    date: "2026/10/19",
    update: (
      <>
        <Link href="/deeps/level-up">レベル上げ</Link>
        を公開。風刃縛封の無限コンボ、ブルーアスを公開。
      </>
    ),
  },
  {
    date: "2026/10/19",
    update: (
      <>
        各種ページにリマスター版の注釈を記載（リマスター版ではレンズ消失がなくなった）
      </>
    ),
  },
  {
    date: "2026/10/18",
    update: (
      <>
        サイトのレイアウト調整。ページタイトルにリマスター版のアイコンを設置しました。
      </>
    ),
  },
  {
    date: "2026/10/17",
    update: (
      <>
        <s>
          各種ページにリマスター版の注釈を記載（リマスター版でもレンズ消失あり）
        </s>
      </>
    ),
  },
  {
    date: "2026/10/17",
    update: (
      <>
        <Link href="/guides/remaster">リマスター版の紹介</Link>
        を更新。2周目の引き継ぎについて追記しました。
      </>
    ),
  },
  {
    date: "2026/10/17",
    update: (
      <>
        <Link href="/stories/guide5">
          攻略チャート5 セイファート神殿〜シゼル城
        </Link>
        を更新。リマスター版対応の状態に調整しました。
      </>
    ),
  },
  {
    date: "2026/10/16",
    update: (
      <>
        <Link href="/subevents/quiz">テイルズクイズ</Link>
        を更新。リマスター版対応の中級、上級のクイズと回答を掲載しました。
      </>
    ),
  },
  {
    date: "2026/10/16",
    update: (
      <>
        <Link href="/stories/guide4">攻略チャート4 ペイルティ〜バリル城</Link>
        を更新。リマスター版対応の状態に調整しました。
      </>
    ),
  },
  {
    date: "2026/10/16",
    update: (
      <>
        <Link href="/stories/guide3">
          攻略チャート3 セレスティア〜チャットの小屋
        </Link>
        を更新。リマスター版対応の状態に調整しました。
      </>
    ),
  },
  {
    date: "2026/10/15",
    update: (
      <>
        <Link href="/stories/guide2">
          攻略チャート2 いざないの密林〜ファロース
        </Link>
        を更新。リマスター版対応の状態に調整しました。
      </>
    ),
  },
  {
    date: "2026/10/15",
    update: (
      <>
        <Link href="/stories/guide1">攻略チャート1 ラシュアン〜水晶霊の河</Link>
        を更新。リマスター版対応の状態に調整しました。
      </>
    ),
  },
  {
    date: "2026/10/15",
    update: (
      <>
        <Link href="/subevents/quiz">テイルズクイズ</Link>
        を公開。リマスター版の初級までクイズを掲載しました。
      </>
    ),
  },
  {
    date: "2026/10/15",
    update: (
      <>
        <Link href="/guides/first">序盤にやっておきたいこと</Link>、
        <Link href="/guides/missable">取り逃がし要素</Link>
        をアップデート。
      </>
    ),
  },
  {
    date: "2026/10/13",
    update: (
      <>
        <Link href="/skills">特技/晶霊術</Link>
        の各ページアップデート。おすすめ技の紹介を追加しました。
      </>
    ),
  },
  {
    date: "2026/10/12",
    update: (
      <>
        <Link href="/skills/magic">おすすめ晶霊術とフリンジ</Link>
        をアップデート。フリンジシミュレータを公開しました。
      </>
    ),
  },
  {
    date: "2026/10/10",
    update: (
      <>
        <Link href="/subevents/fog-gun">フォッグの武器開発</Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/10",
    update: (
      <>
        <Link
          href="/subevents/last-fencer"
          className="hover:text-cyan-400 transition-colors"
        >
          ラストフェンサー
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/09",
    update: (
      <>
        <Link
          href="/subevents/treasure"
          className="hover:text-cyan-400 transition-colors"
        >
          セレスティア7大秘宝
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/08",
    update: (
      <>
        <Link
          href="/subevents/catarine"
          className="hover:text-cyan-400 transition-colors"
        >
          カトリーヌの恋愛
        </Link>
        をアップデート。カトリーヌのいる場所の画像を掲載しました。
      </>
    ),
  },
  {
    date: "2026/10/05",
    update: (
      <>
        <Link
          href="/deeps/blue-earth"
          className="hover:text-cyan-400 transition-colors"
        >
          ブルーアース
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/02",
    update: (
      <>
        <Link
          href="/deeps/flame-dance"
          className="hover:text-cyan-400 transition-colors"
        >
          火龍炎舞
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/10/01",
    update: (
      <>
        <Link
          href="/guides/remaster"
          className="hover:text-cyan-400 transition-colors"
        >
          リマスター版の紹介
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/09/27",
    update: (
      <>
        <Link
          href="/skills/special-skill"
          className="hover:text-cyan-400 transition-colors"
        >
          秘奥義
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/09/24",
    update: (
      <>
        <Link
          href="/systems/item-drop"
          className="hover:text-cyan-400 transition-colors"
        >
          アイテムドロップ一覧データ
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/09/21",
    update: (
      <>
        <Link
          href="/deeps/herb"
          className="hover:text-cyan-400 transition-colors"
        >
          ステータスアップ薬草集め
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/09/19",
    update: (
      <>
        <Link
          href="/extras/nereid"
          className="hover:text-cyan-400 transition-colors"
        >
          ネレイドの迷宮
        </Link>
        を公開しました。
      </>
    ),
  },
  {
    date: "2026/09/17",
    update: (
      <>
        <Link href="/guides" className="hover:text-cyan-400 transition-colors">
          プレイガイド
        </Link>
        、
        <Link
          href="/guides/first"
          className="hover:text-cyan-400 transition-colors"
        >
          序盤にやっておきたいこと
        </Link>
        、
        <Link
          href="/guides/missable"
          className="hover:text-cyan-400 transition-colors"
        >
          取り逃がし要素
        </Link>
        を公開しました。
      </>
    ),
  },
];

const UpdateList = (props: Props) => {
  const list = update.map((item, index) => {
    const { date, update } = item;
    return (
      <li key={index} className="flex gap-x-4 p-3 border-b">
        <span>{date}</span>
        <span>{update}</span>
      </li>
    );
  });

  return (
    <ul className="space-y-2 max-h-[300px] overflow-y-auto border border-slate-300 px-3 py-2 rounded-sm">
      {list}
      {/* 
      <li className="flex gap-4">
        <span className="text-slate-400">2026/09/08</span>
        <span>
          <Link
            href="/subevents/coliseum"
            className="hover:text-cyan-400 transition-colors"
          >
            闘技場
          </Link>
          を公開しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/09/05</span>
        <span>
          <Link
            href="/extras/jiini"
            className="hover:text-cyan-400 transition-colors"
          >
            ジイニ
          </Link>
          を公開しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/09/04</span>
        <span>
          <Link
            href="/systems/special-effect"
            className="hover:text-cyan-400 transition-colors"
          >
            装備品の特殊効果
          </Link>
          をアップデート。内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/09/03</span>
        <span>
          <Link
            href="/extras/valkyrie"
            className="hover:text-cyan-400 transition-colors"
          >
            きらめきの塔
          </Link>
          をアップデート。攻略情報の追記とゲーム画像を追加しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/30</span>
        <span>
          <Link
            href="/extras/towns"
            className="hover:text-cyan-400 transition-colors"
          >
            ねこにんの里/晶霊温泉
          </Link>
          を新規作成しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/29</span>
        <span>
          <Link
            href="/stories/guide5"
            className="hover:text-cyan-400 transition-colors"
          >
            セイファート神殿〜シゼル城
          </Link>
          をアップデート。エンディングまでの内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/27</span>
        <span>
          <Link
            href="/extras/farosu-underground"
            className="hover:text-cyan-400 transition-colors"
          >
            ファロース教会地下
          </Link>
          をアップデート。ゲーム画像を追加しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/26</span>
        <span>
          <Link
            href="/subevents/lens"
            className="hover:text-cyan-400 transition-colors"
          >
            レンズ収集
          </Link>
          をアップデート。レンズ入手場所の画像をすべて掲載しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/23</span>
        <span>
          <Link
            href="/systems/recipe"
            className="hover:text-cyan-400 transition-colors"
          >
            料理一覧/マスター料理
          </Link>
          をアップデート。ワンダーシェフの場所の画像を掲載しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/21</span>
        <span>
          <Link
            href="/subevents/grip-sword"
            className="hover:text-cyan-400 transition-colors"
          >
            グリップソード探し
          </Link>
          を公開しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/20</span>
        <span>
          <Link
            href="/subevents/flying-board"
            className="hover:text-cyan-400 transition-colors"
          >
            飛行艇の入手
          </Link>
          をアップデート。ページ内に画像を掲載しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/20</span>
        <span>
          <Link
            href="/subevents/lysithea"
            className="hover:text-cyan-400 transition-colors"
          >
            画家リシテア
          </Link>
          をアップデート。ページ内に画像を掲載しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/19</span>
        <span>
          <Link
            href="/extras/dark-cave"
            className="hover:text-cyan-400 transition-colors"
          >
            闇の洞窟
          </Link>
          をアップデート。内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/16</span>
        <span>
          <Link
            href="/extras/sunken-ship"
            className="hover:text-cyan-400 transition-colors"
          >
            沈没船
          </Link>
          をアップデート。内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/14</span>
        <span>
          <Link
            href="/extras/aifread"
            className="hover:text-cyan-400 transition-colors"
          >
            アイフリードの墓
          </Link>
          をアップデート。内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/12</span>
        <span>
          <Link
            href="/stories/guide4"
            className="hover:text-cyan-400 transition-colors"
          >
            ペイルティ〜バリル城
          </Link>
          をアップデート。バリル城までの内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/09</span>
        <span>
          <Link
            href="/stories/guide4"
            className="hover:text-cyan-400 transition-colors"
          >
            ペイルティ〜バリル城
          </Link>
          をアップデート。雷晶霊の遺跡までの内容を書き直しました。
        </span>
      </li>
      <li className="flex gap-4">
        <span className="text-slate-400">2026/08/05</span>
        <span>
          <Link
            href="/stories/guide3"
            className="hover:text-cyan-400 transition-colors"
          >
            セレスティア突入〜チャットの小屋
          </Link>
          をアップデート。ページ全体を書き直しました。
        </span>
      </li> */}
    </ul>
  );
};

export default UpdateList;
