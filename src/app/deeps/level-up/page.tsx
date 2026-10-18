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
import Main from "@/components/SiteLayout/Main";

export const dynamic = "force-static";

const pageKey = "flame-dance";
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
    <Main title={title}>
      <article>
        <PageSummary>-</PageSummary>

        <Section>
          <SectionTitle>レベルアップ</SectionTitle>
          <div className="mb-8">
            <p>エターニアのレベルアップ方法</p>
          </div>
        </Section>

        <Section>
          <SectionTitle>デモンズシール</SectionTitle>
        </Section>

        <Section>
          <SectionTitle>風刃縛封による無限コンボ</SectionTitle>
        </Section>

        <Section>
          <SectionTitle>リマスター版によるオート戦闘</SectionTitle>
        </Section>
      </article>
    </Main>
  );
}
