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
import SkillIcon from "@/components/Icons/SkillIcon";
import ResponsiveImage from "@/components/ResponsiveImage";
import CardList from "@/components/CardLIst";
import Title from "@/components/Title";
import Tier from "@/components/Tier";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "skill-fog";
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
        <Section>
          <Title>
            <SkillIcon />
            フォッグの特技習得
          </Title>
          <p>
            フォッグがサブイベントで習得していく属性攻撃と最終技の「エレメンタルマスター」の習得方法を解説するページです。フォッグはキャンセラーの入手により技を連携できるようになるのですべての技を習得することを推奨します。
          </p>
        </Section>

        <Section>
          <SectionTitle>フォッグの特技習得優先度</SectionTitle>
          <div className="mb-4">
            <CardList
              list={[
                <Tier rank={1}>アクアスパイラル、エレメンタルマスター</Tier>,
                <Tier rank={2}>レイジレーザー、エアブレイド</Tier>,
                <Tier rank={3}>ダークイレイザー</Tier>,
              ]}
            />
          </div>
          <p>
            フォッグの特技は「アクアスパイラル」と「エレメンタルマスター」の取得優先度が高いです。両方とも非常に協力な技で、特にアクアスパイラルは中盤で取得可能なのでお忘れ無く。ダークイレイザーは詠唱時間が長いのに加え、敵に当たりにくいため優先度は低めにしています。キャンセルLv2としてはレイジレーザーが適しています。
          </p>
        </Section>

        <Section>
          <SectionTitle>フォッグの特技習得イベント一覧</SectionTitle>
          <Information title="サブイベント発生の前提条件">
            フォッグをパーティーメンバーに加えた状態で、以下の各地のスポットへ向かうことでイベントが進行・発生します。
          </Information>

          <RoundedContainer>
            <h3>エアブレイドの習得</h3>
            <ResponsiveImage src="/subevents/skill-fog-air-blade.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                リッドが「極光壁」習得後
              </RoundedItem>
              <RoundedItem title="発生場所と手順">
                ペイルティの港へ行くと、樽の上で眠っているピンク色のミアキスを発見できます。そのミアキスを調査するとイベントが勃発し、フォッグが風属性の銃弾技「エアブレイド」を習得します。
              </RoundedItem>
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>アクアスパイラルの習得</h3>
            <ResponsiveImage src="/subevents/skill-fog-aqua-spiral.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                <p>
                  闇の洞窟のダンジョン突入後から
                  ※クリアしなくてもダンジョンに入るだけで開放
                </p>
                <GuideList
                  items={[
                    {
                      title: "隠しダンジョン 闇の洞窟",
                      href: "/extras/dark-cave",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="発生場所と手順">
                ティンシアの町に設置されているノーム銅像の前に佇むピンクのミアキスに近づくとイベントがトリガーされ、フォッグが水属性の「アクアスパイラル」を習得します。
              </RoundedItem>
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>レイジレーザーの習得</h3>
            <ResponsiveImage src="/subevents/skill-fog-rage-laser.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                リッドが「極光剣」を習得後
              </RoundedItem>
              <RoundedItem title="発生場所と手順">
                アイメン近郊にある岬の砦へ向かい、そこにいるピンクのミアキスに近づくことでイベントが発生。フォッグが光属性の「レイジレーザー」を習得します。
              </RoundedItem>
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>ダークイレイザーの習得</h3>
            <ResponsiveImage src="/subevents/skill-fog-dark-laser.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">レグルスの丘クリア後</RoundedItem>
              <RoundedItem title="発生場所と手順">
                ルイシカの町にあるがれき付近に近づくとイベントが発生し、フォッグが闇属性の「ダークイレイザー」を習得します。なお、ここで目指すがれきは奥側の廃墟フロアではなく手前側にあります。一見すると最初はピンク色のミアキスが姿を見せていませんが、イベントの進行中に突如現れる仕様になっています。
              </RoundedItem>
            </div>
          </RoundedContainer>

          <RoundedContainer>
            <h3>エレメンタルマスターの習得</h3>
            <ResponsiveImage src="/subevents/skill-fog-element-master.jpg" />
            <div className="grid grid-cols-1 gap-3">
              <RoundedItem title="発生時期">
                飛行艇入手後 ＆ キャンセラー所持
              </RoundedItem>
              <RoundedItem title="発生場所と手順">
                <p>
                  リシテアイベントをこなして重要アイテム「キャンセラー」を入手済みであること、かつ「飛行艇」を手に入れている状態の夜間に、ジイニのオークション会場前へ足を運ぶとイベントが発生します。これに勝利・クリアすることで、フォッグの極致である全属性大技「エレメンタルマスター」を習得できます。
                </p>
                <div className="mt-3">
                  <GuideList
                    items={[
                      {
                        title:
                          "リシテアイベントとキャンセラーの入手手順はこちら",
                        href: "/subevents/lysithea",
                      },
                      {
                        title: "飛行艇の入手法に関する攻略ガイドはこちら",
                        href: "/subevents/flying-boad",
                      },
                    ]}
                  />
                </div>
              </RoundedItem>
            </div>
          </RoundedContainer>
        </Section>
      </article>
    </Main>
  );
}
