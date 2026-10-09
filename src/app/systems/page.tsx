import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import ContentLinks from "@/components/ContentLinks";
import { systemLinks, categoryLinks } from "@/constants";
import Main from "@/components/SiteLayout/Main";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "systems";
const title = categoryLinks[pageKey].title;
const canonical = categoryLinks[pageKey].path;
const description = categoryLinks[pageKey].seoDesc;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  return (
    <Main title={title}>
      <article>
<div className="mb-8">
        <h2 className="text-lg font-bold mb-2 !border-none">
          システム解説/各種データ
        </h2>
        <p className="text-slate-1000">
          戦闘操作や特技・術の習得方法、ルーンボトルや料理レシピ、装備品の特殊効果、武器・防具・アイテムの一覧データまで幅広く解説しています。
        </p>
      </div>
      <ContentLinks list={Object.values(systemLinks)} />
    </article>
    </Main>
  );
}
