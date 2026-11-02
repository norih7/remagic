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
import Image from "next/image";
import Main from "@/components/SiteLayout/Main";
import Expand from "@/components/Expand";
import InlineCaption from "@/components/InlineCaption";
import {
  SwitchY,
  SwitchLeft,
  SwitchB,
  SwitchA,
  SwitchX,
} from "@/components/Buttons/Switch";
import {
  PSLeft,
  PSSquare,
  PSCross,
  PSCircle,
  PSTriange,
} from "@/components/Buttons/Playstation";
import Title from "@/components/Title";
import RoundedInlineList from "@/components/RoundedInlineList";
import DescriptionList from "@/components/DescriptionList";

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

const platformWidth = "min-w-[65px]";

export default async function HomePage() {
  return (
    <Main title={title}>
      <article>
        <Section>
          <Title>ブルーアース</Title>
          <ResponsiveImage src="/deeps/blue-earth-digest.jpg" />
          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="目的">
              隠し晶霊術の発動ボーナスによるレベル上げ（経験値10万）
            </RoundedInlineList>
            <RoundedInlineList title="発生">
              マクスウェル契約、ゼクンドゥス撃破など
            </RoundedInlineList>
          </div>
          <div className="mb-8">
            <p>
              ブルーアース（正式:
              ブルー・アース）はキールとメルディが使える隠し晶霊術です。発動すると経験値10万を獲得できるため主にレベル上げに使われます。発動にはTP999、マクスウェルLv30、デリスエンブレムなど厳しい条件が必要ですがぜひ発動を目指してください。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>ブルーアース発動に必要なこと</SectionTitle>
          <div className="mb-8">
            <h3>前提条件</h3>
            <CardList
              list={[
                "戦闘ランクマニアで1回以上戦闘を実施",
                "術者（キール/メルディ）のTPが999",
                "術者に「デリスエンブレム」と「レジュームリングまたはメンタルリング」（TP自動回復アクセサリ）を装備",
                "マクスウェルのレベルが30",
                "マクスウェルを召喚できる状態となっている",
              ]}
            />
            <Information type="warning" title="必要なTP">
              <p>
                <strong>
                  リマスター版ではブースト機能の「術技消費TP減少」を使えばTP自動回復アクセサリの装備は不要です。
                </strong>
              </p>
              必要TPの理論値は999より少ないです。これは術発動中のTP自動回復を考慮しているためですが、確実にブルーアースを発動させるためにTP999を推奨します。計算式などは準備中。
            </Information>
          </div>
          <div className="mb-8">
            <h3>ブルーアースを使える敵</h3>
            <p>
              ブルーアースはダメージが大きすぎるため普通の敵は途中で倒してしまいます。地晶霊の廃坑のベルトコンベアから無限に出現するフェイクは耐久性が高く、最後のブルーアースまで発動できます。
            </p>
          </div>
          <div className="mb-8">
            <h3>地晶霊の廃坑のフェイクの場所</h3>
            <ResponsiveImage src="/deeps/blue-earth-fake.jpg" />
            <p>
              チャットの小屋側のフィールドマップから地晶霊の廃坑へ入り、下記マップの案内に進むとフェイクが無限に出現するベルトコンベアへ辿り着きます。※もし初回の宝箱を開封した場合は「オールディバイト」を入手します。その後レバーをもう一度調べると再度宝箱が運ばれてきてフェイクが出現します。
            </p>

            <Expand title="フェイクまでのマップ解説">
              <Image src="/maps/mine-map.jpg" width={700} height={500} alt="" />
            </Expand>
          </div>
        </Section>

        <Section>
          <SectionTitle>ブルーアースの発動方法</SectionTitle>
          <div className="mb-8">
            <p>
              条件を満たしたうえで術者（キール/メルディ）を操作キャラにしてマクスウェルを召喚すると特殊演出が起動し、ブルーアースにつながっていきます。
            </p>
            <p>
              対象の術の発動中に下記のボタンを押し続けることで次の術が発動していきます。術発動の「ピッ」という音がしたら次のボタンへ移動していきましょう。
            </p>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="1. マクスウェル召喚時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSLeft /> + <PSSquare />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchLeft /> + <SwitchY />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="2. デュアル・ザ・サン発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSCross />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchB />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="3. エタニティ・スォーム発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSCircle />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchA />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="4. プリズミックスターズ発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSTriange />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchX />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="5. ブライティスト・ゲート発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSSquare />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchY />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="6. エクスプロージョン・ノヴァ発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSTriange /> + <PSCross />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchX /> + <SwitchB />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="7. マクスウェル・ロアー発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSCircle /> + <PSCross /> +
                          <PSSquare />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchA /> + <SwitchB /> + <SwitchY />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="8. ディメンジョナル・マテリアル発動時">
                <DescriptionList
                  list={[
                    {
                      label: "PlayStation",
                      value: (
                        <>
                          <PSCircle /> + <PSCross /> + <PSSquare /> +
                          <PSTriange />
                        </>
                      ),
                    },
                    {
                      label: "Switch",
                      value: (
                        <>
                          <SwitchA /> + <SwitchB /> + <SwitchY /> + <SwitchX />
                        </>
                      ),
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="9. ブルー・アース">最後の術</RoundedItem>
            </RoundedContainer>
          </div>
        </Section>
      </article>
    </Main>
  );
}
