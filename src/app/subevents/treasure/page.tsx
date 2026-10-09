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
import EventCondition from "@/components/EventCondition";

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
              海賊船「バンエルティア号」を入手する。ストーリーで「チャットの小屋」をクリア後に必ず入手します。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No2. コルレーンのつぼ</h3>
            <ResponsiveImage src="/subevents/tresure-2.jpg" />
            <RoundedItem title="説明" className="mb-3">
              「地晶霊の廃坑」でスコップを持った状態で光る箇所を調べるとコルレーンのつぼを入手できます。坑道が複雑なダンジョンのため見落とす場合もあるためご注意。ダンジョン攻略時に一緒に取るのがベストですが、後で取りに来ることもできます。「コルレーンの壺」は使用アイテムで、使うことで料理「やみなべ」と同様の効果が得られて消えることがありません。状態異常などデメリットもある点には注意です。
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
          <RoundedContainer>
            <h3 className={styles.header}>No3. レジュームリング</h3>
            <RoundedItem title="説明" className="mb-3">
              レジュームリングはジイニのオークションで出品されており購入できます。レジュームリングは装備すると戦闘中に4秒ごとに1%回復し、戦闘不能時に確率で自動復活するアクセサリ。ブルーアースの発動で利用したり、自動復活目的で装備します。
            </RoundedItem>
            <GuideList
              items={[
                { title: "ジイニのオークションの説明", href: "/extras/jiini" },
                { title: "ブルーアース", href: "/deeps/blue-earth" },
              ]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No4. ブッシュベイビー</h3>
            <RoundedItem title="説明">
              ラストダンジョン「シゼル城」へ突入後、フィールドマップでキャンプを繰り返すと「変な置き物」のチャットが発生します。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No5. デッキブラシ</h3>

            <ResponsiveImage src="/subevents/tresure-5.jpg" />
            <RoundedItem title="説明">
              ポニーテールのハーフエルフが使ったとされるデッキブラシ。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No6. ねこにんの里</h3>
            <EventCondition category="period">飛行艇入手後</EventCondition>
            <ResponsiveImage src="/subevents/tresure-6.jpg" />
            <RoundedItem title="説明" className="mb-3">
              ねこにんの里自体が秘宝となっており、アイテムを入手することはできません。飛行艇でのみ行くことができるねこにんの里へ訪れると
            </RoundedItem>
            <GuideList
              items={[{ title: "ねこにんの里", href: "/extras/towns" }]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No7. S・D</h3>
            <EventCondition category="period">
              隠しダンジョン「きらめきの塔」クリア後
            </EventCondition>
            <RoundedItem title="説明" className="mb-3">
              -
            </RoundedItem>
            <GuideList
              items={[
                { title: "きらめきの塔の説明", href: "/extras/valkyrie" },
              ]}
            />
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>デッキブラシの入手方法</SectionTitle>
          <div className="mb-8">
            <p>準備中</p>
            <p>
              ラストダンジョン「シゼル城」へ突入後、フィールドマップでキャンプを繰り返すと「デッキブラシ」のチャットが発生します。
              その後、チャットがパーティに入っている状態でチャットの小屋の改造ドックからバンエルティア号へ乗り込み、デッキブラシを調べることで入手できます。
            </p>
          </div>
        </Section>

        <Section>
          <SectionTitle>S・Dについて</SectionTitle>
          <div className="mb-8">
            <p>- </p>
          </div>
        </Section>
      </article>
    </Main>
  );
}
