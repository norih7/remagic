import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";
import { getLocationItemsData } from "@/lib/db";
import LocationItems from "@/components/LocationItems";
import ResponsiveImage from "@/components/ResponsiveImage";
import { subeventLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "secret-base";
const title = subeventLinks[pageKey].title;
const description = subeventLinks[pageKey].seoDesc;
const canonical = subeventLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        インフェリアにあるアイフリードの隠しアジトを紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>インフェリアのアジト一覧</SectionTitle>
        <div className="mb-4">
          <p>
            インフェリアのアイフリードのアジトはサブイベントで探索は任意ですが、その分レアアイテムがあるためぜひ訪れてみてください。
          </p>
        </div>
        <RoundedContainer>
          <h3>インフェリア アジト1</h3>
          <RoundedItem title="場所" className="mb-3">
            <p>GPS (76, 122)</p>
            <ResponsiveImage src="/subevents/secret-base-1.jpg" />
          </RoundedItem>
          <LocationItems data={itemsData} locationIds={[53]} />
        </RoundedContainer>
        <RoundedContainer>
          <h3>インフェリア アジト2</h3>
          <RoundedItem title="場所" className="mb-3">
            GPS (119, 122)
          </RoundedItem>
          <LocationItems data={itemsData} locationIds={[54]} />
        </RoundedContainer>
        <RoundedContainer>
          <h3>インフェリア アジト3</h3>
          <RoundedItem title="場所" className="mb-3">
            GPS (142, 1)
          </RoundedItem>
          <LocationItems data={itemsData} locationIds={[55]} />
        </RoundedContainer>
        <RoundedContainer>
          <h3>インフェリア アジト4</h3>
          <RoundedItem title="場所" className="mb-3">
            GPS (226, 130)
          </RoundedItem>
          <LocationItems data={itemsData} locationIds={[56]} />
        </RoundedContainer>
      </section>
    </article>
  );
}
