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
import Main from "@/components/SiteLayout/Main";
import EventCondition from "@/components/EventCondition";
import RoundedInlineList from "@/components/RoundedInlineList";
import StarRating from "@/components/StarRating";

export const dynamic = "force-static";

const pageKey = "level-up";
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
    <Main title={title}>
      <article>
        <PageSummary>
          エターニアのレベル上げに関する情報をまとめます。
        </PageSummary>

        <Section>
          <SectionTitle>レベルアップ</SectionTitle>
          <div className="mb-8">
            <p>-</p>
            <Information title="TIPS: デモンズシールとクローナシンボルの増上効果">
              デモンズシールは経験値を2倍にしてくれる反面、デメリットで様々なデメリット効果が付与されますが、クローナシンボルを同時に装備すると経験値2倍だけのメリットだけ享受できます。（クローナシンボルは異常状態を全て無効化する）デモンズシールの入手がラストランジョンのシゼル城で、終盤での活用となりますがぜひ覚えておいてください。
            </Information>
          </div>
        </Section>

        <Section>
          <SectionTitle>風刃縛封による無限コンボ</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="おすすめ度">
                <StarRating rating={4} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">
                最大80,000
              </RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">
              リッドが風刃縛封を習得、チャットがパラライボールを習得（ストーリー終盤）
            </RoundedInlineList>
          </div>
          <div className="mb-8">
            <h3>概要</h3>
            <p>
              麻痺状態の敵に風刃縛封を使うとピコピコ状態が継続する仕様を使ったコンボ。1回あたり10分ほどかかるためおすすめ度は4にしています。
            </p>
          </div>
          <div className="mb-8">
            <h3>詳細と手順</h3>
            <div className="mb-4">
              <CardList
                list={[
                  "チャットのパラライボールで地上の敵を麻痺させる",
                  "麻痺させた敵以外を倒す",
                  "ショートカットに登録した風刃縛封を発動（初回）",
                  "ピコピコ状態になったら1、2秒待ってから再度ショートカットの風刃縛封を発動",
                  "以降ショートカットボタンを押したままにしてコンボループ",
                  "TPが足りなくなったらパイングミなどを使って回復",
                ]}
              />
            </div>
            <p>※ 動画やコンボの仕様などを追記予定</p>
          </div>
        </Section>

        <Section>
          <SectionTitle>ブルーアース</SectionTitle>
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <RoundedInlineList title="おすすめ度">
                <StarRating rating={5} />
              </RoundedInlineList>
              <RoundedInlineList title="1回の経験値">100,000</RoundedInlineList>
            </div>
            <RoundedInlineList title="条件">
              マクスウェル、ゼクンドゥス契約済みほか複数の条件（ストーリー終盤）
            </RoundedInlineList>
          </div>
          <div className="mb-4">
            <h3>概要</h3>
            <p>
              隠し召喚術「ブルー・アース」を利用したレベル上げ。発動条件は非常に難しいですが、それ以上に経験値を10万得られて効率も良いためおすすめ度は5にしています。
            </p>
          </div>
          <div className="mb-4">
            <h3>詳細と手順</h3>
            <GuideList
              items={[
                {
                  title: "ブルーアースの詳細はこちら",
                  href: "/deeps/blue-earth",
                },
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>リマスター版によるオート戦闘</SectionTitle>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <RoundedInlineList title="おすすめ度">
              <StarRating rating={5} />
            </RoundedInlineList>
            <RoundedInlineList title="1回の経験値">
              10,000ほど
            </RoundedInlineList>
            <RoundedInlineList title="条件">-</RoundedInlineList>
          </div>
        </Section>
      </article>
    </Main>
  );
}
