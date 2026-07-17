import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedItem from "@/components/RoundedItem";
// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "カトリーヌの恋愛イベント";
export const metadata = {
  title,
  description: "",
};

export default async function HomePage() {
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        ファラの称号「あいのネゴシエーター」を獲得できるカトリーヌのイベントを説明します。イベントは時間制限がありベストエンドに辿り着くのは難しいためぜひ参考にしてください。
        <Information type="warning" title="注意点">
          このイベントで得られるのはファラの称号のみです。特別なアイテムなどは何もないため称号にこだわりのない方はスキップしても問題ありません。
        </Information>
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>カトリーヌの恋愛イベント</SectionTitle>
        <p>
          ミンツにいるカトリーヌに関するイベント。ストーリー進行時にどれだけ彼女に遭遇したかによって結末が変化し、ハッピーエンドを迎えればファラの称号「あいのネゴシエーター」を獲得します。このイベントは時間制限があり
          <span className="text-red-900">一度セレスティア</span>
          に渡ってしまうと発生しなくなります。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>イベントの詳細</SectionTitle>
        <div className="mb-4">
          <p>
            イベント発生時期に特定の場所へ行くとカトリーヌと遭遇するイベントが発生します。ここで遭遇した回数によって最後の結末が変化します。
          </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No1. ミンツの運動場</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            ミンツ到着後〜モルル到着前
          </RoundedItem>
          <RoundedItem title="説明">
            ミンツの運動場前に行くとピンク髪の学生「カトリーヌ」がいて、ここでカトリーヌが王都へ向かうというイベントを見る。
          </RoundedItem>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No2. モルルの食材屋</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            モルル到着後〜インフェリア到着前
          </RoundedItem>
          <RoundedItem title="説明">
            モルルのツタを上った先にある食材屋に行くとカトリーヌと老人が話しているイベントを見る。カトリーヌが老人の娘と間違えられて、足止めされているがファラが仲介するというもの。
          </RoundedItem>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No3. 定期連絡船</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            インフェリア到着後〜バロール到着前
          </RoundedItem>
          <RoundedItem title="説明">
            インフェリア港から定期連絡船に乗り込み、カトリーヌが船員に怒られているイベントを見る。
          </RoundedItem>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No4. バロールの本屋</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            バロール到着後〜シャンバール到着前まで
          </RoundedItem>
          <RoundedItem title="説明">
            バロールの本屋で本を熱心に読むカトリーヌと遭遇するイベントを見る。
          </RoundedItem>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No5. シャンバールの防具屋</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            シャンバール到着後〜火晶霊の谷到着前まで
          </RoundedItem>
          <RoundedItem title="説明">
            シャンバールの防具屋でカトリーヌが店員に高価な服を勧められているイベントを見る。
          </RoundedItem>
        </div>
        <div className={styles.card}>
          <h3 className={styles.header}>No6. レグルス道場</h3>
          <RoundedItem title="イベント発生時期" className="mb-3">
            火晶霊の谷到着後〜セレスティア突入まで
          </RoundedItem>
          <RoundedItem title="説明">
            レグルス道場でカトリーヌがモンクに囲まれてしまっているイベントを見る。
          </RoundedItem>
        </div>
      </section>
      <section>
        <SectionTitle>イベントの結末</SectionTitle>
        <div className="mb-4">
          <p>
            イベントの結末はインフェリアへ戻ってきたあとにカトリーヌを尋ねることでわかります。ここまで遭遇したイベント数によって結果とカトリーヌの居る場所が違います。
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th className="w-[150px]">イベント遭遇回数</th>
              <th>結果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2回以内</td>
              <td>
                カトリーヌは国立天文台にいる。恋人のピエールとは別れているバッドエンド。
              </td>
            </tr>
            <tr>
              <td>3回〜5回</td>
              <td>カトリーヌはバロールの酒屋にいる。</td>
            </tr>
            <tr>
              <td>すべて</td>
              <td>
                カトリーヌは国立天文台にいる。恋人のピエールとともに国立天文台で働いている。またファラが称号を入手する。
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
