import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import StarRating from "@/components/StarRating";
import RunePropertyList from "@/components/RunePropertyList";
import Information from "@/components/Information";
import { getLocationItemsData } from "@/lib/db";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ルーンボトルの解説と変化一覧";
export const metadata = {
  title,
  description:
    "ルーンボトルの解説と変化一覧を掲載しています！各変化についてオススメ度もあるので参考にしてください！",
};

const runeItems = [
  {
    before: "アップルグミ",
    after: "レモングミ",
    rate: 1,
    canBuy: true,
    description:
      "HP60%回復。レモングミは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "オレンジグミ",
    after: "パイングミ",
    rate: 1,
    canBuy: true,
    description:
      "TP60%回復。パイングミは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "ミックスグミ",
    after: "ミラクルグミ",
    rate: 1,
    canBuy: true,
    description:
      "HPとTPを60%回復。ミラクルグミは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "まぐろ",
    after: "まぐろグミ",
    rate: 3,
    canBuy: true,
    description:
      "戦闘中に使うと一定間隔でHPが回復していく。強いボス戦で有効。まぐろグミはルーンボトル変化できか入手できないため、アイテムコレクションのためなら1回は変換することになります。",
  },
  {
    before: "ダークボトル",
    after: "ホーリィボトル",
    rate: 1,
    canBuy: true,
    description:
      "敵に遭遇しづらくなる。ホーリィボトルはは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "ホーリィボトル",
    after: "ダークボトル",
    rate: 1,
    canBuy: true,
    description:
      "敵に遭遇しやすくなる。ダークボトルは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "パナシーアボトル",
    after: "ライフボトル",
    rate: 1,
    canBuy: true,
    description:
      "戦闘不能状態を回復。ライフボトルは容易に入手できるため変換はおすすめしません。",
  },
  {
    before: "チャームボトル",
    after: "ミラクルチャーム",
    rate: 5,
    canBuy: false,
    description:
      "ショップ内で使うと商品を50%オフで購入できる。例外商品はないため元々高額なアイテムをここぞと買うことができます。",
  },
  {
    before: "ブラックオニキス",
    after: "ムーンクリスタル",
    rate: 4,
    canBuy: false,
    description:
      "装備するとTPが30%増加。TPが増えるとそれだけ戦闘中に特技や術を多く使えるためムーンクリスタルの方が利用頻度は多いです。",
  },
  {
    before: "ムーンクリスタル",
    after: "ブラックオニキス",
    rate: 3,
    canBuy: false,
    description:
      "HPが30%増加。どうしてもHPが足りなく、ブラックオニキスが欲しい場合は変換しても良いと思います。",
  },
  {
    before: "リバースドール",
    after: "セフィラ",
    rate: 5,
    canBuy: false,
    description:
      "戦闘で獲得するガルドが2倍になる。いざないの密林で「リバースドール」を入手することができ、ストーリーの序盤でセフィラを入手可能です。戦闘パーティの誰か1人に装備させていると効果を発揮します。",
  },
  {
    before: "セフィラ",
    after: "リバースドール",
    rate: 2,
    canBuy: false,
    description:
      "戦闘不能になっても復活して壊れる。リバースドールは購入できませんが、ルーンボトルを使ってまで入手したいかと言われると微妙なところです。",
  },
  {
    before: "フェアリィリング",
    after: "ミスティシンボル",
    rate: 5,
    canBuy: false,
    description:
      "晶霊術の詠唱時間が1/2となり、体感としてとても早くなります。術の発動が早くなることは戦闘を有利に進める上で重要なのでとてもおすすめです！",
  },
  {
    before: "ミスティシンボル",
    after: "フェアリィリング",
    rate: 5,
    canBuy: false,
    description:
      "TPの消費が半分になる。通常フェアリィリングは2個しか手に入れることができないため、3個目はルーンボトル変化で入手することになります。",
  },
  {
    before: "フォースリング",
    after: "リフレクトリング",
    rate: 3,
    canBuy: false,
    description:
      "無属性以外の全属性の耐久が20%アップ。ルーンボトルに余裕があれば変換もアリです。",
  },
  {
    before: "リフレクトリング",
    after: "フォースリング",
    rate: 3,
    canBuy: false,
    description:
      "無属性の耐久が20%アップ。ルーンボトルに余裕があれば変換もアリです。",
  },
  {
    before: "プロテクトリング",
    after: "レジストリング",
    rate: 2,
    canBuy: false,
    description:
      "無属性以外の前属性の耐久が10%アップ。リフレクトリングより効果量が低く、後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "レジストリング",
    after: "プロテクトリング",
    rate: 2,
    canBuy: false,
    description:
      "無属性の耐久が10%アップ。レジストリングより効果量が低く、後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "メンタルリング",
    after: "ホーリィシンボル",
    rate: 2,
    canBuy: false,
    description:
      "戦闘中、8秒毎にHPが5%回復していく。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "ホーリィシンボル",
    after: "メンタルリング",
    rate: 2,
    canBuy: false,
    description:
      "戦闘中、8秒毎にTPが1%回復していく。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "ブルータリスマン",
    after: "フィートシンボル",
    rate: 2,
    canBuy: false,
    description:
      "攻撃力が10%増加する。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "フィートシンボル",
    after: "ブルータリスマン",
    rate: 2,
    canBuy: false,
    description:
      "防御が10%増加する。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "メンタルバングル",
    after: "ヒールバングル",
    rate: 2,
    canBuy: false,
    description:
      "戦闘中に敵を倒すとHPが回復する。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "ヒールバングル",
    after: "メンタルバングル",
    rate: 2,
    canBuy: false,
    description:
      "戦闘中に敵を倒すとTPが回復する。後半の装備頻度が低いためオススメ度は2としています。",
  },
  {
    before: "テクニカルリング",
    after: "ステップリング",
    rate: 3,
    canBuy: false,
    description: "戦闘中↓＋□ボタンでバックステップができるようになる",
  },
  {
    before: "コンボコマンド",
    after: "ステップリング",
    rate: 3,
    canBuy: false,
    description: "戦闘中↓＋□ボタンでバックステップができるようになる",
  },
  {
    before: "アクアマント",
    after: "サンダーマント",
    rate: 3,
    canBuy: false,
    description: "雷属性と風属性の耐久が30%アップする",
  },
  {
    before: "サンダーマント",
    after: "フレアマント",
    rate: 3,
    canBuy: false,
    description: "炎属性と土属性のの耐久が30%アップする",
  },
  {
    before: "フレアマント",
    after: "アクアマント",
    rate: 3,
    canBuy: false,
    description: "水属性と氷属性の耐久が30%アップする",
  },
  {
    before: "スマッシュマント",
    after: "エルヴンマント",
    rate: 1,
    canBuy: false,
    description:
      "防御+12、回避+10、幸運+20。スマッシュマントからあえてエルヴンマントに変化させる理由はありません。",
  },
  {
    before: "シーブスマント",
    after: "エルヴンマント",
    rate: 4,
    canBuy: false,
    description:
      "防御+12、回避+10、幸運+20。シーブスマント→エルヴンマント→スマッシュマントと変化させていけます。シーブスマントはラシュアン〜ミンツまでのフィールドマップで遭遇するバンテッドからドロップ可能。序盤からステータスの高いエルヴンマントを入手でき、最後はスマッシュマントにも変化できるためおすすめ度は高いです。",
  },
  {
    before: "エルヴンマント",
    after: "スマッシュマント",
    rate: 5,
    canBuy: false,
    description:
      "戦闘中にテクニカルスマッシュを発生させると+6%ボーナスが付きます。テクニカルスマッシュはアイテムドロップ率アップとなるためおすすめ変化です。",
  },
  {
    before: "オーダーシールド",
    after: "カオスシールド",
    rate: 4,
    canBuy: true,
    description:
      "防御40、回避2の盾。幸運-5の特殊効果と回避が低いデメリットがありますが、防御40は盾の最高値です。シゼル城のファイアウォーリアからドロップ可能ですが、元のオーダーシールドより能力アップ率が高いです。",
  },
  {
    before: "カオスシールド",
    after: "オーダーシールド",
    rate: 1,
    canBuy: true,
    description:
      "防御26、回避10の盾。下位互換に戻ってしまうためおすすめしません。",
  },
  {
    before: "セージ",
    after: "セボリー",
    rate: 3,
    canBuy: true,
    description: "TPが5%増加する",
  },
  {
    before: "セボリー",
    after: "セージ",
    rate: 3,
    canBuy: true,
    description: "HPが5%増加する",
  },
  {
    before: "ベルベーヌ",
    after: "ラベンダー",
    rate: 3,
    canBuy: true,
    description: "回避が1増加する",
  },
  {
    before: "ベルベーヌ",
    after: "ラベンダー",
    rate: 3,
    canBuy: true,
    description: "力が1増加する",
  },
  {
    before: "レッドセージ",
    after: "レッドセボリー",
    rate: 3,
    canBuy: true,
    description: "TPが10%増加する",
  },
  {
    before: "レッドセボリー",
    after: "レッドセージ",
    rate: 3,
    canBuy: true,
    description: "HPが10%増加する",
  },
  {
    before: "レッドベルベーヌ",
    after: "レッドラベンダー",
    rate: 3,
    canBuy: true,
    description: "回避が2増加する",
  },
  {
    before: "レッドベルベーヌ",
    after: "レッドラベンダー",
    rate: 3,
    canBuy: true,
    description: "力が2増加する",
  },
  {
    before: "みずいろのかけら",
    after: "すいしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでウンディーネの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "みずいろのかけら",
    after: "すいしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでウンディーネの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "あかのかけら",
    after: "せきしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでイフリートの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "みずいろのかけら",
    after: "すいしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでウンディーネの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "みどりのかけら",
    after: "りょくしょうせき",
    rate: 2,
    canBuy: false,
    description: "C.ケイジでシルフの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "きいろのかけら",
    after: "きしょうせき",
    rate: 2,
    canBuy: false,
    description: "C.ケイジでノームの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "むらさきのかけら",
    after: "ししょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでヴォルトの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "あおのかけら",
    after: "せいしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでセルシウスの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "しろのかけら",
    after: "はくしょうせき",
    rate: 2,
    canBuy: false,
    description: "C.ケイジでレムの活力+2、次のレベルに必要な10%の経験値入手",
  },
  {
    before: "くろのかけら",
    after: "こくしょうせき",
    rate: 2,
    canBuy: false,
    description:
      "C.ケイジでシャドゥの活力+2、次のレベルに必要な10%の経験値入手",
  },
];

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const rows = itemsData
    .filter((item) => item.itemId === 43)
    .map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.locationName}</td>
          <td>{item.remarks}</td>
        </tr>
      );
    });

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>アイテムを別アイテムに変化させるルーンボトルについて説明します。</p>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>ルーンボトルの説明と入手方法</SectionTitle>
        <div className="mb-4">
          <h3>ルーンボトル</h3>
          <p>
            ルーンボトルは元のアイテムやアクセサリを別アイテムに変化させることができるアイテムです。有利に攻略する上でルーンボトルは有用ですが、アイテム変化が必ず良い結果とならない可能性がある点にはご注意ください。
          </p>
          <p>
            元の効果から性能が向上するものはおすすめです。一方でダークボトルとホーリィボトルなどは相互変換となり、ショップで安価で購入できるためルーンボトルの使用には見合いません。
          </p>
          <p>
            セージなどステータスアップ効果のある薬草も相互変化に留まり、効果はアップとなりません（HP5%アップがTP5%アップに入れ替え）ただし薬草自体は貴重品であるため、目的のステータスをアップさせたい場合はルーンボトルの使用は有用です。
          </p>
        </div>
        <div className="mb-8">
          <h4 className="mb-2">ルーンボトルによるおすすめ変換例</h4>
          <table>
            <thead>
              <tr>
                <th className="w-[150px]">項目</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>セフィラ</td>
                <td>
                  リバースドールからの変化。ストーリー序盤のいざないの密林の宝箱から「リバースドール」を入手することができる。ここでルーンボトルはいくつか保持しているなら是非ゼフィラに変化させておきましょう。戦闘参加キャラクターに装備させていると以降の獲得ガルドが2倍に増加。
                </td>
              </tr>
              <tr>
                <td>ミスティシンボル</td>
                <td>
                  晶霊術の詠唱速度を早くするミスティシンボルがあれば戦闘はより快適に。TP消費量を半分にするフェアリィリングも魅力的ですが、こちらもおすすめです。またミスティシンボルとフェアリィリングは相互変化できるので使い分けも有効。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-8">
          <h3>ダンジョン・マップでのルーンボトル入手</h3>
          <p>
            ルーンボトルは通常ストーリー進行では7個程度しか入手できない貴重なアイテムです。のちに無限購入が可能になりますが、それまではオススメ度の高い変化をさせるようにしてください。※他にも隠しダンジョンなどで入手できますが現在情報を準備中です。
          </p>
          <table>
            <thead>
              <tr>
                <th>場所</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <div className="mb-8"></div>
      </section>
      <section className="mb-12">
        <SectionTitle>ルーンボトルの購入方法</SectionTitle>
        <EventCondition category="period">ティンシア到着後以降</EventCondition>
        <p>
          基本的にダンジョン内で限られた数しか入手できないルーンボトルですが、ストーリー後半からは無限購入することが可能となります。ティンシア到着後から可能です。
        </p>
        <p>
          ティンシアの船具屋では「販売室」の改造(購入)が可能になり、バンエルティア号内の販売室にある自販機ではルーンボトルを購入することができるます。なお販売価格は「100000」ガルドとかなり高額。
        </p>
      </section>

      <section>
        <SectionTitle>ルーンボトルの変化一覧</SectionTitle>
        <Information title="オススメ度について">
          オススメ度は以下の基準としています
          <ul>
            <li>1: ショップで購入可能/明らかに劣化</li>
            <li>3: ルーンボトルを無限購入できる状態で必要ならアリ</li>
            <li>5: 元アイテムから大幅効果アップ/唯一無二</li>
          </ul>
        </Information>
        <RunePropertyList runes={runeItems} />
      </section>
    </article>
  );
}
