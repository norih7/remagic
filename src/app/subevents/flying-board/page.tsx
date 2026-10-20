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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "flying-board";
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
          <p>
            物語の終盤で「飛行艇」を使うための手順を解説するページです。飛行艇がなくてもストーリーのクリア自体は可能ですが、世界の移動が圧倒的に快適になり、強力な隠しダンジョンやサブイベントへのアクセスが解放されるため、ぜひ入手を目指しましょう。
          </p>
        </PageSummary>

        <Section>
          <Title>飛行艇入手</Title>
          <div className="mb-4 grid grid-cols-1 gap-2">
            <RoundedInlineList title="報酬">「飛行艇」の入手</RoundedInlineList>
            <RoundedInlineList title="場所">
              シゼル城、アイフリードの墓
            </RoundedInlineList>
            <RoundedInlineList title="発生">
              遠征の橋でインフェリア帰還後から
            </RoundedInlineList>
          </div>
          <ResponsiveImage src="/subevents/flying-board-field.jpg" />
          <p>
            ストーリー終盤になると、バンエルティア号に「飛行艇」を搭載できるようになります。飛行艇の入手のためにはふたつの重要キーアイテム
            <strong>「やみのたま」</strong>と<strong>「ひかりのたま」</strong>
            を集める必要があります。ただし、「やみのたま」が最後の決戦の舞台となるシゼル城にあるため、飛行艇が本格的に完成・利用可能になるのはゲームの最終盤となります。
          </p>
        </Section>

        <Section>
          <SectionTitle>キーアイテムの入手方法</SectionTitle>
          <div className="mb-8">
            <h3>1. やみのたまの入手</h3>
            <ResponsiveImage src="/subevents/flying-board-dark.jpg" />
            <p>
              ラストダンジョンである「シゼル城」の城内宝箱から回収できます。シゼル城内での詳しい入手場所やルートについては、下記の攻略チャート5のマップ付き解説をご参照ください。
            </p>
            <div className="mt-3">
              <GuideList
                items={[
                  {
                    title: "シゼル城の攻略情報と詳細なダンジョンマップはこちら",
                    href: "/stories/guide5",
                  },
                ]}
              />
            </div>
          </div>

          <div className="mb-4">
            <h3>2. ひかりのたまの入手</h3>
            <ResponsiveImage src="/subevents/flying-board-light.jpg" />
            <p>
              ストーリー後半で「遠征の橋」が開放されたあと、中継基地にある「改造ドッグ」へ向かうと、バンエルティア号のさらなる改造についての話を聞くことができます。この「はるかなる地でわがあしあとを...」というイベント会話をトリガーとして、インフェリアのフィールドマップ上に隠しダンジョン
              <strong>「アイフリードの墓」</strong>（GPS座標：88,
              64）が出現します。
            </p>
            <p className="mt-2">
              インフェリアの隠しダンジョン「アイフリードの墓」内部にある宝箱から「ひかりのたま」を手に入れましょう。詳しい攻略情報は以下のリンクから確認できます。
            </p>
            <Information
              type="warning"
              title="中継基地の「改造ドッグ」への行き方について"
            >
              <p>
                改造ドッグの選択メニューは構造上分かりにくいため、以下の手順に沿って進めてください。
              </p>
              <ul className="list-decimal list-inside mt-2 space-y-1">
                <li>
                  フィールドマップの遠征の橋から「中継基地」へと入る
                  <br />
                  （インフェリア・セレスティアどちら側でもOK）
                </li>
                <li>
                  中継基地内のメニューで<strong>「反転ドーム」</strong>
                  を選択する
                </li>
                <li>
                  反転ドーム内のメニューから<strong>「改造ドッグ」</strong>
                  を選択して移動する
                </li>
              </ul>
            </Information>
            <div className="mt-3">
              <GuideList
                items={[
                  {
                    title: "アイフリードの墓の攻略情報とマップはこちら",
                    href: "/extras/aifread",
                  },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section>
          <SectionTitle>飛行艇の完成と操作方法</SectionTitle>
          <ResponsiveImage src="/subevents/flying-board-set.jpg" />
          <p>
            「やみのたま」と「ひかりのたま」の2つを改造ドックのアイフリード像にはめ込むと、バンエルティア号が改造されて「飛行艇」が搭載されます。入手したたまは上記画像のようにアイフリード像の左右の窪みを調べるとはめ込むことができます。
          </p>
          <p className="mt-2">
            飛行艇は、フィールドマップ上で<strong>「□ボタン」</strong>
            を押すことでいつでも空から呼び出すことができます。これまで着陸できえなかった険しい岩山や高所エリアにもアクセスできるようになるため、世界中を飛び回って未開の隠し要素をくまなく探索してみましょう！
          </p>
        </Section>
      </article>
    </Main>
  );
}
