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
import CardList from "@/components/CardLIst";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "treasure";
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
  const styles = {
    card: "border border-slate-300 rounded-md p-3 mb-3",
    header: "text-[1rem]",
  };
  return (
    <Main title={title}>
      <article>
        <PageSummary>
          ストーリー後半から収集できるセレスティア7大秘宝をまとめています。各秘宝の入手方法や使い方、特殊なS・Dなどを解説しています。
        </PageSummary>
        <Section>
          <SectionTitle>セレスティア7大秘宝とS・D</SectionTitle>
          <EventCondition category="period">
            チャットの小屋クリア後から
          </EventCondition>
          <p>
            アイフリードの遺産の「セレスティア7大秘宝」があり、ストーリー後半ではサブイベントとして秘宝を集めていくことができます。主な報酬としては特殊な召喚術が使える「S・D」、回復効果などが得られる「コルレーンのつぼ」、自動復活の可能性がある「レジュームリング」があります。
          </p>
        </Section>
        <Section>
          <SectionTitle>秘宝一覧と入手方法</SectionTitle>
          <Information type="warning" title="称号を入手できないバグ">
            セレスティア7大秘宝をすべて揃えるとリッドの称号「エクスプローラー」を得られます。ただし1週目で「デッキブラシ」「ブッシュベイビー」を入手している状態で2週目を開始するとこの称号が得られないバグが発生する可能性があります。（PS/PSP版で確認）
          </Information>
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
              「地晶霊の廃坑」でスコップを持った状態で光る箇所を調べるとコルレーンのつぼを入手できます。ダンジョン攻略時に一緒に取るのがベストですが、後で取りに来ることもできます。「コルレーンの壺」は使用アイテムで、使うことで料理「やみなべ」と同様の効果が得られて消えることがありません。状態異常などデメリットもある点には注意です。
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
            <ResponsiveImage src="/subevents/tresure-4.jpg" />
            <RoundedItem title="説明">
              ラストダンジョン「シゼル城」へ突入後、フィールドマップでキャンプを繰り返すと「変な置き物」のチャットが発生します。その後、ルイシカの奥の廃墟（バリル邸）にある置物を調べると「ブッシュベイビー」を入手できます。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No5. デッキブラシ</h3>

            <ResponsiveImage src="/subevents/tresure-5.jpg" />
            <RoundedItem title="説明">
              デッキブラシは特定条件を満たした状態でバンエルティア号の内部を調べると入手できます。ポニーテールのハーフエルフが使ったとされるデッキブラシで、リッドの武器として装備できます。ただしコレクター向けの武器で実用性はありません。
            </RoundedItem>
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No6. ねこにんの里</h3>
            <ResponsiveImage src="/subevents/tresure-6.jpg" />
            <RoundedItem title="説明" className="mb-3">
              ねこにんの里自体が秘宝となっており、何らかのアイテムを入手することはできません。ねこにんの里へ訪れると秘宝を獲得したことになります。
            </RoundedItem>
            <GuideList
              items={[{ title: "ねこにんの里", href: "/extras/towns" }]}
            />
          </RoundedContainer>
          <RoundedContainer>
            <h3 className={styles.header}>No7. S・D</h3>
            <ResponsiveImage src="/subevents/tresure-7.jpg" />
            <RoundedItem title="説明" className="mb-3">
              隠しダンジョン「きらめきの塔」クリアしてからセレスティアにあるアイフリードの隠しアジト1「GPS(56,
              113)」に刺さっている剣「S・D」を入手できます。武器ではありませんが入手すると30分に1回、メルディが隠し召喚術「デスティニー」を使えるようになります。S・Dの詳細は後述します。
            </RoundedItem>
            <GuideList
              items={[
                { title: "きらめきの塔の説明", href: "/extras/valkyrie" },
                {
                  title: "インフェリアの隠しアジト",
                  href: "/subevents/secret-base",
                },
              ]}
            />
          </RoundedContainer>
        </Section>

        <Section>
          <SectionTitle>デッキブラシの入手方法</SectionTitle>
          <div className="mb-8">
            <ResponsiveImage src="/subevents/tresure-5.jpg" />
            <p>
              ラストダンジョン「シゼル城」へ突入後、フィールドマップでキャンプを繰り返すと「強い掃除具」のチャットが発生します。
              その後、チャットがパーティに加入している状態でチャットの小屋の改造ドックからバンエルティア号へ乗り込み、ゲージに入っているデッキブラシを調べることで入手できます。
            </p>
          </div>
          <div className="mb-8">
            <h3>チャットの小屋から改造ドックへの行き方</h3>
            <ResponsiveImage src="/subevents/tresure-chat-room.jpg" />
            <CardList
              list={[
                "(1) チャットの小屋へ行きアイフリードのマークがある部屋に入る",
                "(2) アイフリードの肖像画を回転させてエレベーターで下へ移動",
                "(3) 花瓶を調べ改造ドックへの地下道を開く",
              ]}
            />
          </div>
        </Section>

        <Section>
          <SectionTitle>S・Dについて</SectionTitle>
          <h3>召喚術「デスティニー」</h3>
          <ResponsiveImage src="/subevents/tresure-destiny.jpg" />
          <div className="mb-8">
            <p>
              S・Dを入手するとメルディが召喚術「デスティニー」を使えるようになります。デスティニーは特殊な召喚術でプレイを開始して30分に一回使えるようになります。再度30分待てば再度召喚可能。なおS・Dは見た目は剣ですが貴重品のためリッドは装備できません。
            </p>
          </div>
        </Section>
      </article>
    </Main>
  );
}
