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
import ResponsiveImage from "@/components/ResponsiveImage";

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
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        セレスティア各地をにいる画家のリシテア（フォッグの妻）との遭遇イベントを説明します。このイベントではフォッグの強力なアクセサリの入手でき、フォッグの「エレメントマスター」の特技習得に関連します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>イベント開始</SectionTitle>
        <Information type="warning" title="注意事項">
          リシテアはフォッグがパーティに加入していると出現しません。ティンシアのアジトでフォッグを加入/離脱できるのでこのイベント時は離脱させてください。
        </Information>
        <RoundedContainer>
          <h3>解氷後のペイルティでの遭遇</h3>
          <EventCondition category="period">
            氷晶霊の山をクリア後
          </EventCondition>
          <ResponsiveImage src="/subevents/lysithea-start.jpg" />
          <RoundedItem title="説明">
            フォッグが仲間にいない状態でペイルティの港にいくと絵を描いている女性がいて近づくとイベントが発生。このイベントを見ることで以降セレスティア各地でこの女性、リシテアが出現します。
          </RoundedItem>
        </RoundedContainer>
      </section>
      <section className="mb-12">
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
      </section>
      <section className="mb-12">
        <SectionTitle>イベントの最後</SectionTitle>
        <RoundedContainer>
          <h3>ジイニでの遭遇</h3>
          <EventCondition category="period">
            各地でリシテアと遭遇済み
          </EventCondition>
          <ResponsiveImage src="/subevents/lysithea-finish.jpg" />
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
        </RoundedContainer>
      </section>
    </article>
  );
}
