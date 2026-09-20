import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import ContentLinks from "@/components/ContentLinks";
import { deepLinks, categoryLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "deeps";
const title = categoryLinks[pageKey].title;
const canonical = categoryLinks[pageKey].path;
const description = categoryLinks[pageKey].seoDesc;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };
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
      <p className="mb-8">
        準備中。ブルーアース、薬草、アイテムドロップ、レベル上げなどを追加予定です。
      </p>
      <ContentLinks list={Object.values(deepLinks)} />
    </article>
  );
}
