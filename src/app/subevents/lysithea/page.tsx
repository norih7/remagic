import { createMetaTitle } from "@/utils";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import EventCondition from "@/components/EventCondition";
import Information from "@/components/Information";
import GuideList from "@/components/GuideList";
import { subeventLinks } from "@/constants";
import ResponsiveImage from "@/components/ResponsiveImage";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";
import RoundedInlineList from "@/components/RoundedInlineList";
import Title from "@/components/Title";
import SkillIcon from "@/components/Icons/SkillIcon";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "lysithea";
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
          セレスティア各地にいる画家のリシテアとの遭遇イベントを解説します。
        </PageSummary>

        <Section>
          <Title>
            <SkillIcon />
            画家のリシテア
          </Title>
          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="報酬">
              「キャンセラー」、フォッグの特技「エレメントマスター」の前提条件
            </RoundedInlineList>
            <RoundedInlineList title="場所">セレスティア各地</RoundedInlineList>
            <RoundedInlineList title="発生">
              氷晶霊の山をクリア後
            </RoundedInlineList>
          </div>
          <p>
            このイベントはセレスティア各地にいる画家リシテアに話しかけていくもので、すべてのイベントをこなすことでフォッグの強力なアクセサリの入手および「エレメントマスター」の特技習得に関連します。リシテアイベントはストーリーの進行状況により開放されていきます。
          </p>
        </Section>

        <Section>
          <SectionTitle>イベントの開始</SectionTitle>
          <Information type="warning" title="注意事項">
            リシテアはフォッグがパーティに加入していると出現しません。ティンシアのアジトでフォッグを加入/離脱できるのでこのイベント時は離脱させてください。
          </Information>
          <RoundedContainer>
            <h3>解氷後のペイルティでの遭遇</h3>
            <ResponsiveImage src="/subevents/lysithea-start.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">氷晶霊の山をクリア後</RoundedItem>
              <RoundedItem title="説明">
                フォッグが仲間にいない状態でペイルティの港にいくと絵を描いている女性がいて近づくとイベントが発生。このイベントを見ることで以降セレスティア各地でこの女性、リシテアが出現します。
              </RoundedItem>
            </div>
          </RoundedContainer>
        </Section>
        <Section>
          <SectionTitle>各地での遭遇</SectionTitle>
          <p>
            セレスティア各地でリシテアと遭遇します。ここはどの順番で行っても構いません。
          </p>
          <table>
            <thead>
              <tr>
                <th className="w-[150px]">タウン</th>
                <th>場所/条件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ティンシア</td>
                <td>
                  ティンシアの町にあるノーム銅像の前にいるリシテアに話しかける
                </td>
              </tr>
              <tr>
                <td>岬の砦</td>
                <td>
                  岬の砦（※セレスティア突入時の場所）にいるリシテアに話しかける
                </td>
              </tr>
              <tr>
                <td>ルイシカ</td>
                <td>奥にある廃墟の前にいるリシテアに話しかけると</td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section>
          <SectionTitle>イベントの最後</SectionTitle>
          <RoundedContainer>
            <h3>ジイニでの遭遇</h3>
            <ResponsiveImage src="/subevents/lysithea-finish.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                レグルスの丘クリア後し、各地でリシテアと遭遇済み
              </RoundedItem>
              <RoundedItem title="説明">
                <p>
                  ジイニ以外の場所でリシテアと遭遇済みの状態で夜のジイニのオークション会場前にいるリシテアに話しかけるとイベントが発生。このイベントではフォッグのアクセサリ「キャンセラー」をもらえます。
                  またこのイベントが終わったらフォッグがエレメントマスターを習得できるようになります。
                </p>
                <GuideList
                  items={[
                    {
                      title: "フォッグの特技習得/エレメントマスターの習得条件",
                      href: "/subevents/skill-fog",
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
