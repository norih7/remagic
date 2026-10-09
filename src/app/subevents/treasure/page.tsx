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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "treasure";
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
<PageSummary>-</PageSummary>
        <Section>
          <SectionTitle>セレスティア7大秘宝とS・D</SectionTitle>
          <p>
            アイフリードの遺産の「セレスティア7大秘宝」があり、ストーリー後半ではサブイベントとして秘宝を集めていくことができます。主な報酬としては特殊な召喚術が使える「S・D」、回復効果などが得られる「コルレーンのつぼ」、自動復活の可能性がある「レジュームリング」があります。
          </p>
        </Section>
        <Section>
          <SectionTitle>秘宝一覧と入手方法</SectionTitle>
          <div className="mb-4">
            <p>-</p>
          </div>
          <RoundedContainer>
            <h3 className={styles.header}>No1. バンエルティア号</h3>
            <RoundedItem title="説明">
              海賊船「バンエルティア号」を入手する。これはストーリー進行で必ず入手します。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No2. デッキブラシ</h3>
            <RoundedItem title="説明">-</RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No3. ブッシュベイビー</h3>
            <RoundedItem title="説明">-</RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No4. S・D</h3>
            <RoundedItem title="説明" className="mb-3">
              -
            </RoundedItem>
            <GuideList
              items={[
                { title: "きらめきの塔の説明", href: "/extras/valkyrie" },
              ]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No5. レジュームリング</h3>
            <RoundedItem title="説明" className="mb-3">
              -
            </RoundedItem>
            <GuideList
              items={[
                { title: "ジイニのオークションの説明", href: "/extras/jiini" },
              ]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No6. ねこにんの里</h3>
            <RoundedItem title="説明" className="mb-3">
              -
            </RoundedItem>
            <GuideList
              items={[{ title: "ねこにんの里", href: "/extras/towns" }]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No7. コルレーンのつぼ</h3>
            <RoundedItem title="説明" className="mb-3">
              -
            </RoundedItem>
            <GuideList
              items={[
                {
                  title: "攻略チャート: 地晶霊の廃坑",
                  href: "/stories/guide3",
                },
              ]}
            />
          </RoundedContainer>
        </Section>
        <section>
          <SectionTitle>S・Dについて</SectionTitle>
          <div className="mb-8">
            <p>- </p>
          </div>
        </section>
      </article>
    </Main>
  );
}
