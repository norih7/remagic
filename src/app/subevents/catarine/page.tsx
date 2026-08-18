import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedItem from "@/components/RoundedItem";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "カトリーヌの恋愛イベント攻略";
const description =
  "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。ファラの限定称号「あいのネゴシエーター」が手に入る隠しサブイベント「カトリーヌの恋愛イベント」の発生場所、全6回の遭遇時期、時限要素の注意点、そしてハッピーエンドを迎えるための全遭遇条件を詳しく解説しています。";

export const metadata = {
  title,
  description,
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-4 mb-4 bg-white",
    header: "text-lg font-bold text-slate-800",
  };

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        <p>
          ファラの限定称号<strong>「あいのネゴシエーター」</strong>
          を獲得できる隠しサブイベント「カトリーヌの恋愛イベント」の完全攻略ページです。ゲーム序盤から中盤にかけて非常に厳しい時限要素があり、見逃さずにベストエンドを達成するための全遭遇ポイントを解説します。
        </p>
        <div className="mt-3">
          <Information type="warning" title="プレイ時の注意点">
            このイベントを完全クリアしても強力な武具やストーリー進行に必須のアイテム等は入手できません。あくまでファラの称号収集要素となるため、称号コンプリートにこだわりのない方はスルーしてもゲーム攻略上の支障はありません。また、
            <strong>
              一度セレスティア世界へ渡ってしまうと一切発生しなくなる時限イベント
            </strong>
            なので注意しましょう。
          </Information>
        </div>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>カトリーヌの恋愛イベントの概要</SectionTitle>
        <p>
          インフェリア各地を巡るピンク髪の女性「カトリーヌ」を追うサブイベントです。ストーリーの進行に合わせてどれだけ彼女に遭遇したかの回数によって最終的な結末が大きく変化し、すべてのイベント（全6回）を目撃してハッピーエンドを迎えることで、ファラの称号「あいのネゴシエーター」を獲得できます。
        </p>
      </section>

      <section className="mb-12">
        <SectionTitle>全6回の遭遇場所と発生時期一覧</SectionTitle>
        <p className="mb-4">
          イベントはそれぞれの期間（ストーリーの区切り）を過ぎてしまうと二度と見られなくなります。こまめに各地を訪れてカトリーヌを探しましょう。
        </p>

        <div className={styles.card}>
          <h3 className={styles.header}>No.1 ミンツの運動場</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              ミンツ到着後 〜 モルル到着前まで
            </RoundedItem>
            <RoundedItem title="説明">
              ミンツの運動場前へ行くと、ピンク髪の学生「カトリーヌ」が佇んでいます。彼女がこれから王都へ向かうというイベントを目撃します。
            </RoundedItem>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>No.2 モルルの食材屋</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              モルル到着後 〜 インフェリア港（定期連絡船乗船）到着前まで
            </RoundedItem>
            <RoundedItem title="説明">
              モルルのツタを登った先にある食材屋さんへ行くと、カトリーヌが老人の娘と人違いをされて足止めされているイベントが発生します。ここでファラが仲裁に入るやり取りを見ます。
            </RoundedItem>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>No.3 定期連絡船</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              インフェリア港到着後 〜 バロール到着前まで
            </RoundedItem>
            <RoundedItem title="説明">
              インフェリア港から定期連絡船に乗り込んだ際、船内でカトリーヌが船員に怒られているトラブルのイベントに遭遇します。
            </RoundedItem>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>No.4 バロールの本屋</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              バロール到着後 〜 シャンバール到着前まで
            </RoundedItem>
            <RoundedItem title="説明">
              バロールの町の本屋さんへ行くと、店内で熱心に本を読み込んでいるカトリーヌに遭遇します。
            </RoundedItem>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>No.5 シャンバールの防具屋</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              シャンバール到着後 〜 火晶霊の谷到着前まで
            </RoundedItem>
            <RoundedItem title="説明">
              シャンバールの防具屋さんへ行くと、店員から高価な服を強く勧められて困惑しているカトリーヌのイベントが発生します。
            </RoundedItem>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.header}>No.6 レグルス道場</h3>
          <div className="mt-2">
            <RoundedItem title="イベント発生時期" className="mb-2">
              火晶霊の谷到着後 〜 セレスティア突入前まで
            </RoundedItem>
            <RoundedItem title="説明">
              レグルス道場を訪れると、カトリーヌがモンクたちに囲まれてしまっているイベントを目撃します。
            </RoundedItem>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle>イベントの結末と報酬</SectionTitle>
        <p className="mb-4">
          物語が進行してインフェリアへ戻ってきた後（あるいは特定の終盤タイミング）、カトリーヌの居場所を訪ねることでイベントが完結します。これまでの遭遇回数に応じて結果が分かれます。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-40 p-2 border bg-slate-50 text-center">
                  遭遇回数
                </th>
                <th className="p-2 border bg-slate-50 text-left">
                  結末とカトリーヌの行方
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border text-center font-bold">2回以内</td>
                <td className="p-3 border !text-left">
                  カトリーヌは国立天文台にいますが、恋人のピエールとは破局してしまっているバッドエンドとなります。
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">3回 〜 5回</td>
                <td className="p-3 border !text-left">
                  カトリーヌはバロールの酒屋に滞在するノーマル寄りの結末となります。
                </td>
              </tr>
              <tr>
                <td className="p-3 border text-center font-bold">
                  すべて（6回）
                </td>
                <td className="p-3 border !text-left">
                  カトリーヌは国立天文台におり、恋人のピエールとヨリを戻して一緒に働いている
                  <strong>ハッピーエンド</strong>
                  を迎えます。さらにイベント報酬として、
                  <strong>ファラの称号「あいのネゴシエーター」</strong>
                  が手に入ります！
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
