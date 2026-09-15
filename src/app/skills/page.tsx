import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { skillLinks, categoryLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "skills";
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
    <article>
      <SetPageTitle title={title} />
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2 !border-none">特技/晶霊術</h2>
        <p className="text-slate-1000">
          リッド・ファラ・チャット・フォッグの特技一覧と習得条件、メルディ&キールの晶霊術とフリンジに必要な組み合わせを解説しています。
        </p>
      </div>
      <ContentLinks list={Object.values(skillLinks)} />
    </article>
  );
}
