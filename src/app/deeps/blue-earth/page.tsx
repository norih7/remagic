import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import Information from "@/components/Information";
import RoundedItem from "@/components/RoundedItem";
import { deepLinks } from "@/constants";
import RoundedContainer from "@/components/RoundedContainer";
import GuideList from "@/components/GuideList";
import Tag from "@/components/Tag";
import Section from "@/components/Section";
import CardList from "@/components/CardLIst";
import ResponsiveImage from "@/components/ResponsiveImage";
import GifPlayer from "@/components/GifPlayer";

export const dynamic = "force-static";

const pageKey = "blue-earth";
const title = deepLinks[pageKey].title;
const description = deepLinks[pageKey].seoDesc;
const canonical = deepLinks[pageKey].path;
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
      <PageSummary>
        ブルーアースの攻略情報をまとめています。準備中。
      </PageSummary>

      <Section>
        <SectionTitle>ブルーアースとは</SectionTitle>
        <div className="mb-8">
          <p>準備中</p>
        </div>
      </Section>

      <Section>
        <SectionTitle>ブルーアース発動のために必要なこと</SectionTitle>
        <div className="mb-8">
          <p>準備中</p>
        </div>
      </Section>

      <Section>
        <SectionTitle>ブルーアースの発動方法</SectionTitle>
        <div className="mb-8">
          <p>準備中</p>
        </div>
      </Section>
    </article>
  );
}
