import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";
import { subeventLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "secret-spirits";
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
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        エターニアにはサブイベントにて契約できる大晶霊が存在します。強力な晶霊術のフリンジが可能となるので是非とも契約を目指しましょう。
      </PageSummary>

      <section className="mb-12">
        <SectionTitle>隠し大晶霊一覧</SectionTitle>
        <RoundedContainer>
          <h3>闇の大晶霊 シャドウ</h3>
          <EventCondition category="period">
            潜水艇が利用可能となってから
          </EventCondition>
          <RoundedItem title="説明">
            <div className="mb-3">
              セレスティアの海底にある「闇の洞窟」の奥にはシャドウがいて戦闘勝利後に契約することができます。
            </div>
            <GuideList
              items={[
                {
                  title: "闇の洞窟の攻略情報はこちら",
                  href: "/extras/dark-cave",
                },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>元素の大晶霊 マスクウェル</h3>
          <EventCondition category="period">
            インフェリア帰還以降
          </EventCondition>
          <RoundedItem title="説明">
            <div className="mb-3">
              ストーリーの後半からインフェリアの「セイファート教会」に行くと隠しダンジョンが出現し、奥にはマクスウェルの戦闘に勝利すると契約することができます。
            </div>
            <GuideList
              items={[
                {
                  title: "セイファーと教会地下の攻略情報はこちら",
                  href: "/extras/farosu-underground",
                },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>

        <RoundedContainer>
          <h3>時の大晶霊 ゼクンドゥス</h3>
          <EventCondition category="period">シゼル城に到着後〜</EventCondition>
          <RoundedItem title="説明">
            <div className="mb-3">
              シゼル城のダンジョン内に時の大晶霊ゼクンドゥスがいて、戦闘することなく契約することができます。
            </div>
            <GuideList
              items={[
                {
                  title: "シゼル城の攻略情報とダンジョンマップはこちら",
                  href: "/stories/guide5",
                },
              ]}
            />
          </RoundedItem>
        </RoundedContainer>
      </section>
    </article>
  );
}
