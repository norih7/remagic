import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import StarRating from "@/components/StarRating";
import RunePropertyList from "@/components/RunePropertyList";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ルーンボトルの解説と変化表";
export const metadata = {
  title,
  description: "",
};

const runeItems = [
  {
    before: "アップルグミ",
    after: "レモングミ",
    rate: 1,
    canBuy: true,
    description: "HP60%回復",
  },
  {
    before: "オレンジグミ",
    after: "パイングミ",
    rate: 1,
    canBuy: true,
    description: "TP60%回復",
  },
  {
    before: "ミックスグミ",
    after: "ミラクルグミ",
    rate: 1,
    canBuy: true,
    description: "HPとTPを60%回復",
  },
  {
    before: "まぐろ",
    after: "まぐろグミ",
    rate: 3,
    canBuy: true,
    description: "戦闘中に使うと一定間隔でHPが回復していく",
  },
  {
    before: "ダークボトル",
    after: "ホーリィボトル",
    rate: 1,
    canBuy: true,
    description: "敵に遭遇しづらくなる",
  },
  {
    before: "ホーリィボトル",
    after: "ダークボトル",
    rate: 1,
    canBuy: true,
    description: "敵に遭遇しやすくなる",
  },
  {
    before: "パナシーアボトル",
    after: "ライフボトル",
    rate: 1,
    canBuy: true,
    description: "戦闘不能状態を回復",
  },
  {
    before: "チャームボトル",
    after: "ミラクルチャーム",
    rate: 5,
    canBuy: false,
    description: "ショップで使うと商品を50%オフで購入できる",
  },
  {
    before: "ブラックオニキス",
    after: "ムーンクリスタル",
    rate: 3,
    canBuy: false,
    description: "TPが30%増加",
  },
  {
    before: "ムーンクリスタル",
    after: "ブラックオニキス",
    rate: 3,
    canBuy: false,
    description: "HPが30%増加",
  },
  {
    before: "リバースドール",
    after: "セフィラ",
    rate: 5,
    canBuy: false,
    description: "戦闘で獲得するガルドが2倍になる",
  },
  {
    before: "セフィラ",
    after: "リバースドール",
    rate: 1,
    canBuy: false,
    description: "戦闘不能になっても復活して壊れる",
  },
  {
    before: "フェアリィリング",
    after: "ミスティシンボル",
    rate: 5,
    canBuy: false,
    description: "晶霊術の発動速度が早くなる",
  },
  {
    before: "ミスティシンボル",
    after: "フェアリィリング",
    rate: 4,
    canBuy: false,
    description: "TPの消費が半分になる",
  },
  {
    before: "フォースリング",
    after: "リフレクトリング",
    rate: 4,
    canBuy: false,
    description: "無属性以外の全属性の耐久が20%アップする",
  },
  {
    before: "リフレクトリング",
    after: "フォースリング",
    rate: 4,
    canBuy: false,
    description: "無属性の耐久が20%アップする",
  },
  {
    before: "プロテクトリング",
    after: "レジストリング",
    rate: 3,
    canBuy: false,
    description: "無属性以外の前属性の耐久が10%アップする",
  },
  {
    before: "レジストリング",
    after: "プロテクトリング",
    rate: 3,
    canBuy: false,
    description: "無属性の耐久が10%アップする",
  },
  {
    before: "メンタルリング",
    after: "ホーリィシンボル",
    rate: 3,
    canBuy: false,
    description: "戦闘中に一定間隔でHPが回復していく",
  },
  {
    before: "ホーリィシンボル",
    after: "メンタルリング",
    rate: 3,
    canBuy: false,
    description: "戦闘中に一定間隔でTPが回復していく",
  },
  {
    before: "ブルータリスマン",
    after: "フィートシンボル",
    rate: 2,
    canBuy: false,
    description: "攻撃力が10%増加する",
  },
  {
    before: "フィートシンボル",
    after: "ブルータリスマン",
    rate: 2,
    canBuy: false,
    description: "防御が10%増加する",
  },
  {
    before: "メンタルバングル",
    after: "ヒールバングル",
    rate: 2,
    canBuy: false,
    description: "戦闘中に敵を倒すとHPが回復する",
  },
  {
    before: "ヒールバングル",
    after: "メンタルバングル",
    rate: 2,
    canBuy: false,
    description: "戦闘中に敵を倒すとTPが回復する",
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
      "防御+12、回避+10、幸運+20。シーブスマント→エルヴンマント→スマッシュマントと変化させていけます。シーブスマントは序盤〜中盤で入手可能。",
  },
  {
    before: "エルヴンマント",
    after: "スマッシュマント",
    rate: 5,
    canBuy: false,
    description:
      "戦闘中にテクニカルスマッシュを発生させるとアイテムドロップ+6%ボーナスが付く",
  },
  {
    before: "シーブスマント",
    after: "エルヴンマント",
    rate: 4,
    canBuy: false,
    description:
      "防御+12、回避+10、幸運+20。シーブスマント→エルヴンマント→スマッシュマントと変化させていけます。シーブスマントは序盤〜中盤で入手可能。",
  },
  {
    before: "オーダーシールド",
    after: "カオスシールド",
    rate: 3,
    canBuy: true,
    description: "幸運-5のデメリットがありますが、防御40の最高値の縦",
  },
];

export default async function HomePage() {
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
          <p>準備中</p>
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
