import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";
import Section from "@/components/Section";
import GuideList from "@/components/GuideList";
import Main from "@/components/SiteLayout/Main";
import EventCondition from "@/components/EventCondition";
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "fog-gun";
const title = subeventLinks[pageKey].title;
const description = subeventLinks[pageKey].seoDesc;
const canonical = subeventLinks[pageKey].path;
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
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <Main title={title}>
      <article>
        <PageSummary>準備中</PageSummary>
        <Section>
          <SectionTitle>フォッグの武器開発</SectionTitle>
          <EventCondition category="period">-</EventCondition>
          <p>準備中 </p>
        </Section>

        <Section>
          <SectionTitle>フォッグの武器一覧と開発可能タイミング</SectionTitle>
          <p>-</p>
          <RoundedContainer>
            <h3>プラズマカノン</h3>
          </RoundedContainer>
          <RoundedContainer>
            <h3>グランマグナム</h3>
          </RoundedContainer>
          <RoundedContainer>
            <h3>インパルスカノン</h3>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
