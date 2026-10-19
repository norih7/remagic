import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";
import { subeventLinks } from "@/constants";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import RoundedInlineList from "@/components/RoundedInlineList";

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
    <Main title={title}>
      <article>
        <PageSummary>
          エターニアにはサブイベントにて契約できる大晶霊が存在します。強力な晶霊術のフリンジが可能となるので是非とも契約を目指しましょう。
        </PageSummary>

        <Section>
          <SectionTitle>隠し大晶霊一覧</SectionTitle>

          <RoundedContainer>
            <h3>闇の大晶霊 シャドウ</h3>
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">潜水艇入手後</RoundedItem>
              <RoundedItem title="場所">闇の洞窟</RoundedItem>
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
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>元素の大晶霊 マスクウェル</h3>
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                遠征の橋でインフェリア帰還後
              </RoundedItem>
              <RoundedItem title="場所">ファロース教会地下</RoundedItem>
              <RoundedItem title="説明">
                <div className="mb-3">
                  ストーリーの後半からインフェリアの「ファロース教会」に行くと隠しダンジョンが出現し、奥にはマクスウェルの戦闘に勝利すると契約することができます。
                </div>
                <GuideList
                  items={[
                    {
                      title: "ファロース教会地下の攻略情報はこちら",
                      href: "/extras/farosu-underground",
                    },
                  ]}
                />
              </RoundedItem>
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>時の大晶霊 ゼクンドゥス</h3>
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">シゼル城に到着後</RoundedItem>
              <RoundedItem title="場所">シゼル城</RoundedItem>
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
            </div>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
