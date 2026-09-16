import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { guideLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "missable";
const title = guideLinks[pageKey].title;
// const description = guideLinks[pageKey].seoDesc;
// const canonical = guideLinks[pageKey].path;
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
      <PageSummary>概要文</PageSummary>
      <section className="mb-12">
        <SectionTitle>見出し</SectionTitle>
        <p>文章</p>
      </section>
    </article>
  );
}
