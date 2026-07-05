import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = " マニュアル操作/特殊操作";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          エターニアの戦闘時の操作方法について紹介します。マニュアル操作は専用アイテムを取得することで可能となります。また他のシリーズにあるバックステップなどの操作についても解説します。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">
          マニュアル操作（マニュアルのしょ入手）
        </SectionTitle>
        <Information type="warning" title="リマスター版における注意点">
          リマスター版では初期からマニュアル操作ができ、マニュアルのしょが無くなる可能性があります。発売後に検証してページを更新します。
        </Information>
        <div className="mb-4">
          <h3>マニュアル操作とセミオート操作</h3>
        </div>
        <div className="mb-4">
          <h3>「マニュアルのしょ」の入手と設定方法</h3>
          <p>
            レグルス道場の弟子に話かけ「マニュアル操作で激しく戦いたい」を選択すると入手できます。取得はいつでも可能ですが、ストーリー的にレグルス道場に訪れたときにやっておくのがオススメです。設定画面で「マニュアル」、あるいは戦闘中にSELECTボタンを押すことで切替可能。
          </p>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">特殊な装備品</SectionTitle>
          <p>更新中</p>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <SectionTitle type="system">晶霊術</SectionTitle>
          <p>更新中</p>
        </div>
      </section>
    </article>
  );
}
