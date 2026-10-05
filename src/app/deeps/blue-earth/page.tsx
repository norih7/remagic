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
        隠し晶霊術「ブルーアース」の情報をまとめています。発動コマンドが難しいので、ぜひ手元でこのページ開いて発動させてください。
      </PageSummary>

      <Section>
        <SectionTitle>ブルーアースとは</SectionTitle>
        <ResponsiveImage src="/deeps/blue-earth-digest.jpg" />
        <div className="mb-8">
          <p>
            ブルーアース（正式:
            ブルー・アース）はキールとメルディが使える隠し晶霊術です。発動すると経験値10万を獲得できるため主にレベル上げに使われます。発動にはTP999、マクスウェルLv30、デリスエンブレムなど厳しい条件が必要ですがぜひ発動を目指してください。
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle>ブルーアース発動のために必要なこと</SectionTitle>
        <div className="mb-8">
          <h3>前提条件</h3>
          <CardList
            list={[
              "戦闘ランクマニアで1回以上戦闘を実施",
              "術者（キール/メルディ）のTPが999",
              "術者を戦闘操作キャラにして、「デリスエンブレム」と「レジュームリングまたはメンタルリング」（TP自動回復アイテム）を装備",
              "マクスウェルのレベルが30",
              "マクスウェルを召喚できる状態となっている",
            ]}
          />
          <Information type="warning" title="必要なTP">
            必要TPの理論値は999より少ないです。これは術発動中のTP自動回復を考慮しているためですが、確実にブルーアースを発動させるためにTP999を推奨します。計算式などは準備中。
          </Information>
        </div>
        <div className="mb-8">
          <h3>ブルーアースを使える敵</h3>
          <p>
            ブルーアースはダメージが大きすぎるため普通の敵は途中で倒してしまいます。地晶霊の廃坑のベルトコンベアから無限に出現するフェイクは耐久性が高く、最後のブルーアースまで発動できます。
          </p>
        </div>
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
