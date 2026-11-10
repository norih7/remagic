import { createMetaTitle } from "@/utils";
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
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import RoundedInlineList from "@/components/RoundedInlineList";
import Title from "@/components/Title";
import Summary from "@/components/Summary";
import LinkItem from "@/components/LinkItem";

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
    <Main title={title}>
      <article>
        <Section>
          <ResponsiveImage src="/subevents/secret-base-digest.jpg" />
          <PageSummary>
            インフェリアにあるアイフリードの隠しアジトではレアアイテムを入手できます。リッドの武器「にんとうちざくら」や、HP自動回復の特殊効果のある「ホーリィクローク」などの強力な装備品を探索だけで入手でき、特にインフェリア帰還した直後のタイミングがおすすめです。
          </PageSummary>
          <Summary
            list={[
              {
                label: "報酬",
                value: (
                  <ul className="flex flex-wrap items-center gap-2">
                    <li>
                      <LinkItem
                        name="にんとうちざくら"
                        href="/systems/item/242"
                        key={1}
                        thin={true}
                      />
                    </li>
                    <li>
                      <LinkItem
                        name="ホーリィクローク"
                        href="/systems/item/240"
                        key={2}
                        thin={true}
                      />
                    </li>
                    <li>など</li>
                  </ul>
                ),
              },
              {
                label: "場所",
                value: "インフェリアの海底マップ",
              },
              {
                label: "発生",
                value: "遠征の橋でインフェリア帰還後から",
              },
            ]}
          />
          <div className="mb-8">
            <GuideList
              isRelated={true}
              items={[
                { title: "装備品の特殊効果", href: "/systems/special-effect" },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>隠しアジトと入手アイテム</SectionTitle>
          <RoundedContainer>
            <h3>インフェリア アジト1</h3>
            <ResponsiveImage src="/subevents/secret-base-1.jpg" />
            <RoundedItem title="場所" className="mb-3">
              GPS (76, 123) <br />
              ミンツから少し北東方向にある海底
            </RoundedItem>
            <LocationItems data={itemsData} locationIds={[53]} />
          </RoundedContainer>
          <RoundedContainer>
            <h3>インフェリア アジト2</h3>
            <ResponsiveImage src="/subevents/secret-base-2.jpg" />
            <RoundedItem title="場所" className="mb-3">
              GPS (119, 122)
              <br />
              ファロース教会から少し南東方向にある海底
            </RoundedItem>
            <LocationItems data={itemsData} locationIds={[54]} />
          </RoundedContainer>
          <RoundedContainer>
            <h3>インフェリア アジト3</h3>
            <ResponsiveImage src="/subevents/secret-base-3.jpg" />
            <RoundedItem title="場所" className="mb-3">
              GPS (141, 1)
              <br />
              モルルから南東方向にある海底
            </RoundedItem>
            <LocationItems data={itemsData} locationIds={[55]} />
          </RoundedContainer>
          <RoundedContainer>
            <h3>インフェリア アジト4</h3>
            <ResponsiveImage src="/subevents/secret-base-4.jpg" />
            <RoundedItem title="場所" className="mb-3">
              GPS (226, 130)
              <br />
              王都インフェリアから南東方向にある海底
            </RoundedItem>
            <LocationItems data={itemsData} locationIds={[56]} />
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
