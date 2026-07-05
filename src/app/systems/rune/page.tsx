import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " ルーンボトルの解説と変化表";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>アイテムを別アイテムに変化させるルーンボトルについて説明します。</p>
      </PageSummary>

      <div className="mb-12">
        <h2>ルーンボトルの入手</h2>
        <p>ダンジョンなどで入手可能。入手場所などは作成中です。</p>
      </div>

      <div className="mb-12">
        <h2>ルーンボトルの購入方法</h2>
        <EventCondition category="period">ティンシア到着後以降</EventCondition>
        <p>
          基本的にダンジョン内で限られた数しか入手できないルーンボトルですが、実はストーリー後半以降から無限購入することが可能となります。
        </p>
        <p>
          ティンシアの船具屋では「販売室」の改造(購入)が可能になり、バンエルティア号内の販売室にある自販機ではルーンボトルを購入することができるます。なお販売価格は「100000」ガルドとかなり高額。
        </p>
      </div>

      <h2>おすすめ変化</h2>
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
      <p></p>

      <h2>ルーンボトルの変化一覧</h2>
      <table className="tab1">
        <thead>
          <tr>
            <th>
              <span>元アイテム</span>
            </th>
            <th>
              <span>変化後のアイテム</span>
            </th>
            <th>
              <span>変化後アイテムの効果や備考</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>アップルグミ</td>
            <td>レモングミ</td>
            <td>HPを60%回復/ショップで購入可能</td>
          </tr>
          <tr>
            <td>オレンジグミ</td>
            <td>パイングミ</td>
            <td>TPを60%回復/ショップで購入可能</td>
          </tr>
          <tr>
            <td>ミックスグミ</td>
            <td>ミラクルグミ</td>
            <td>HPとTPを60%回復/後にショップで購入可能</td>
          </tr>
          <tr>
            <td>まぐろ</td>
            <td>まぐろグミ</td>
            <td>戦闘中に使うと一定間隔でHPが回復していく</td>
          </tr>
          <tr>
            <td>薬草系</td>
            <td>同系列の薬草系</td>
            <td>
              セージ→セボリーと変化する
              <br />
              <span className="daiji">
                セージ→レッドセージのように効果が増強されない
              </span>
            </td>
          </tr>
          <tr>
            <td>ダークボトル</td>
            <td>ホーリィボトル</td>
            <td>ショップで購入可能</td>
          </tr>
          <tr>
            <td>ホーリィボトル</td>
            <td>ダークボトル</td>
            <td>ショップで購入可能</td>
          </tr>
          <tr>
            <td>パナシーアボトル</td>
            <td>ライフボトル</td>
            <td>ショップで購入可能</td>
          </tr>
          <tr>
            <td>チャームボトル</td>
            <td>ミラクルチャーム</td>
            <td>ショップで使うと商品を50%オフで購入できる</td>
          </tr>
          <tr>
            <td>ブラックオニキス</td>
            <td>ムーンクリスタル</td>
            <td>TPが30%増加</td>
          </tr>
          <tr>
            <td>ムーンクリスタル</td>
            <td>ブラックオニキス</td>
            <td>HPが30%増加</td>
          </tr>
          <tr>
            <td>リバースドール</td>
            <td>セフィラ</td>
            <td>戦闘で獲得するガルドが2倍になる</td>
          </tr>
          <tr>
            <td>セフィラ</td>
            <td>リバースドール</td>
            <td>戦闘不能になっても復活して壊れる</td>
          </tr>
          <tr>
            <td>フェアリィリング</td>
            <td>ミスティシンボル</td>
            <td>晶霊術の発動速度が早くなる</td>
          </tr>
          <tr>
            <td>ミスティシンボル</td>
            <td>フィアリィシンボル</td>
            <td>TPの消費が半分になる</td>
          </tr>
          <tr>
            <td>フォースリング</td>
            <td>リフレクトリング</td>
            <td>無属性以外の全属性の耐久がアップする(大)</td>
          </tr>
          <tr>
            <td>リフレクトリング</td>
            <td>フォースリング</td>
            <td>無属性の耐久がアップする(大)</td>
          </tr>
          <tr>
            <td>プロテクトリング</td>
            <td>レジストリング</td>
            <td>無属性以外の前属性の耐久がアップする(小)</td>
          </tr>
          <tr>
            <td>レジストリング</td>
            <td>プロテクトリング</td>
            <td>無属性の耐久がアップする(小)</td>
          </tr>
          <tr>
            <td>メンタルリング</td>
            <td>ホーリィシンボル</td>
            <td>戦闘中に一定間隔でHPが回復していく</td>
          </tr>
          <tr>
            <td>ホーリィシンボル</td>
            <td>メンタルリング</td>
            <td>戦闘中に一定間隔でTPが回復していく</td>
          </tr>
          <tr>
            <td>ブルータリスマン</td>
            <td>フィートシンボル</td>
            <td>攻撃力が10%増加する</td>
          </tr>
          <tr>
            <td>フィートシンボル</td>
            <td>ブルータリスマン</td>
            <td>防御が10%増加する</td>
          </tr>
          <tr>
            <td>メンタルバングル</td>
            <td>ヒールバングル</td>
            <td>戦闘中に敵を倒すとHPが回復する</td>
          </tr>
          <tr>
            <td>ヒールバングル</td>
            <td>メンタルバングル</td>
            <td>戦闘中に敵を倒すとTPが回復する</td>
          </tr>
          <tr>
            <td>テクニカルリング</td>
            <td>ステップリング</td>
            <td>戦闘中↓＋□ボタンでバックステップができるようになる</td>
          </tr>
          <tr>
            <td>コンボコマンド</td>
            <td>ステップリング</td>
            <td>戦闘中↓＋□ボタンでバックステップができるようになる</td>
          </tr>
          <tr>
            <td>アクアマント</td>
            <td>サンダーマント</td>
            <td>雷属性の耐久がアップする</td>
          </tr>
          <tr>
            <td>サンダーマント</td>
            <td>フレアマント</td>
            <td>炎属性の耐久がアップする</td>
          </tr>
          <tr>
            <td>フレアマント</td>
            <td>アクアマント</td>
            <td>水属性の耐久がアップする</td>
          </tr>
          <tr>
            <td>スマッシュマント</td>
            <td>エルヴンマント</td>
            <td>防御、回避、幸運がアップする</td>
          </tr>
          <tr>
            <td>シーブスマント</td>
            <td>エルヴンマント</td>
            <td>防御、回避、幸運がアップする</td>
          </tr>
          <tr>
            <td>エルヴンマント</td>
            <td>スマッシュマント</td>
            <td>戦闘中のテクニカルスマッシュにボーナスが付く</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}
