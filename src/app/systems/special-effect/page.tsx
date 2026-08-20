import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "装備品の特殊効果";
export const metadata = {
  title,
  description: "",
  robots: {
    index: false,
    follow: true,
  },
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>装備すると特殊効果がある装備品を紹介します。</p>
      </PageSummary>
      <section>
        <SectionTitle>TP減少</SectionTitle>
        <div className="advice">
          <h3>エメラルドリング</h3>
          <p>
            装備キャラクターの消費TPが2/3となる指輪。ダンジョン内の宝箱にあり、早くはファロース霊峰にて入手できる。
          </p>
          <h3>入手方法</h3>
          <ul>
            <li>ファロース霊峰の宝箱から入手</li>
            <li>チャットの小屋にある宝箱から入手</li>
          </ul>
        </div>

        <h3>フェアリィリング</h3>
        <div className="advice">
          <p>
            装備キャラクターの消費TPが1/2となる指輪。入手できるのはストーリーの後半となり、通常入手可能な2つはボスを倒すことで入手できる。ボス「スパイラル」はストーリー上で必ず倒すボスなのでフェアリィリングは最低1個は獲得する。
          </p>
          <h3>通常入手方法</h3>
          <ul>
            <li>バリル城にてボス「スパイラル」を倒す</li>
            <li>セイファート神殿地下にてボス「マクスウェル」を倒す</li>
          </ul>
          <h3>特殊な入手方法</h3>
          <ul>
            <li>ミスティシンボルにルーンボトルを使って変化させる</li>
          </ul>
        </div>
      </section>
    </article>
  );
}
