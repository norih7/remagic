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
          <CardList
            list={[
              "戦闘ランクマニアで1回以上戦闘を実施",
              "術者（キール/メルディ）のTPが999",
              "術者を戦闘操作キャラにして、「デリスエンブレム」と「レジュームリングまたはメンタルリング」（TP自動回復アイテム）を装備",
              "マクスウェルのレベルが30",
              "マクスウェルを召喚できる状態となっている",
            ]}
          />
        </div>
        <Information type="warning" title="必要なTP">
          必要TPの理論値は999より少ないです。これは術発動中のTP自動回復を考慮しているためですが、確実にブルーアースを発動させるためにTP999を推奨します。計算式などは準備中。
        </Information>
      </Section>

      <Section>
        <SectionTitle>ブルーアースの発動方法</SectionTitle>
        <div className="mb-8">
          <p>
            条件を満たしたうえで術者（キール/メルディ）を操作キャラにしてマクスウェルを召喚すると特殊演出が起動し、ブルーアースにつながっていきます。
          </p>
          <RoundedContainer className="grid grid-cols-2 gap-3">
            <RoundedItem title="1. マクスウェル召喚（TP:100）">
              「← + □」を押し続ける
            </RoundedItem>
            <RoundedItem title="2. デュアル・ザ・サン (TP:100)">
              「×」を押し続ける
            </RoundedItem>
            <RoundedItem title="3. エタニティ・スォーム (TP:100)">
              「⚪︎」を押し続ける
            </RoundedItem>
            <RoundedItem title="4. プリズミックスターズ (TP:100)">
              「△」を押し続ける
            </RoundedItem>
            <RoundedItem title="5. ブライティスト・ゲート (TP:100)">
              「□」を押し続ける
            </RoundedItem>
            <RoundedItem title="6. エクスプロージョン・ノヴァ (TP:100)">
              「△ + ×」を押し続ける
            </RoundedItem>
            <RoundedItem title="7. マクスウェル・ロアー (TP:100)">
              「⚪︎ + × + □」を押し続ける
            </RoundedItem>
            <RoundedItem title="8. ディメンジョナル・マテリアル (TP:100)">
              「⚪︎ + × + □ + △」を押し続ける
            </RoundedItem>
            <RoundedItem title="9. ブルー・アース (TP:250)">
              最後の術
            </RoundedItem>
          </RoundedContainer>
        </div>
      </Section>
    </article>
  );
}
