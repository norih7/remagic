import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import EventCondition from "@/components/EventCondition";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "エターニアの称号";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>エターニアのゲームシステムにおける称号を説明します。</p>
      </PageSummary>

      <section>
        <SectionTitle type="system">エターニアの称号</SectionTitle>
        <Information type="warning" title="リマスター版における注意点">
          リマスター版の事前情報では称号の扱いに変化はなさそうですが、発売後に変更がないかは追って確認します。
        </Information>
        <div className="mb-8">
          <p>
            エターニアの称号には特に効果はありません。他シリーズでは装備している称号がレベルアップ時の成長パラメータに影響することがありますが、エターニアはコレクション要素として存在いるためご注意ください。
          </p>
        </div>
      </section>
    </article>
  );
}
