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
      <ContentLinks list={Object.values(skillLinks)} />
    </article>
  );
}
