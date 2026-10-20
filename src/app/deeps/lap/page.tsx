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

export const dynamic = "force-static";

const pageKey = "lap";
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
    <Main title={title}>
      <article>
        <PageSummary>
          リマスター版の周回プレイについて解説。引き継ぎ可能な項目や周回プレイについて。
        </PageSummary>
        {/* 
        <Section>
          <SectionTitle>「リマスター版の周回プレイ」の概要</SectionTitle>
        </Section> */}

        <Section>
          <SectionTitle>引き継ぎ要素</SectionTitle>
          <div className="mb-8">
            <h3>引き継ぎを選択できるもの</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem>キャラクター情報</RoundedItem>
              <RoundedItem>覚えた術・技</RoundedItem>
              <RoundedItem>所持アイテム</RoundedItem>
              <RoundedItem>レンズ入手状況</RoundedItem>
              <RoundedItem>料理レシピ</RoundedItem>
              <RoundedItem>号令</RoundedItem>
              <RoundedItem>コレクターずかん</RoundedItem>
              <RoundedItem>モンスターずかん</RoundedItem>
              <RoundedItem>称号 ※アップデートで追加</RoundedItem>
            </RoundedContainer>
          </div>
          <div className="mb-8">
            <h3>その他引き継ぎ</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem>キャラクターレベル</RoundedItem>
              <RoundedItem>技の使用回数</RoundedItem>
              <RoundedItem>
                晶霊レベル ※大晶霊との契約状態はリセット
              </RoundedItem>
            </RoundedContainer>
            <Information type="warning" title="貴重品の引き継ぎ">
              一部の貴重品（マニュアルのしょ、モンスター図鑑など）のみ引き継ぎます。「やみのたま」「ひかりのたま」は引き継がれないため、2周目で飛行艇を入手できるタイミングはシゼル城突入後となります。
            </Information>
          </div>
        </Section>

        <Section>
          <SectionTitle>おすすめのやり込み</SectionTitle>
          <div className="mb-8">
            <p>すべてを引き継いだ状態でのやり込み要素を紹介します。</p>
          </div>
          <div className="mb-8">
            <h3>技をとことん使い込む（特に猛虎連撃破）</h3>
            <ResponsiveImage src="/guides/remaster-lap.jpg" />
            <p>
              技は使うほど命中率が上がっていき、400回で最大の40%アップとなります。ただし猛虎連撃破は使えば使うほど秘奥義「龍虎滅牙斬」が発動しやすくなるのでぜひ9999回を目指しましょう。
            </p>
            <GuideList
              items={[
                {
                  title: "秘奥義の解説はこちら",
                  href: "/skills/special-skill",
                },
              ]}
            />
          </div>
          <div className="mb-8">
            <h3>制限アイテムを引き継いで複数持つ</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="フェアリィリング">
                <p>1周で2個 | 消費TPを1/2</p>
                <GuideList
                  items={[
                    {
                      title: "フェアリィリングの入手方法",
                      href: "/systems/item/297",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="ミスティシンボル">
                <p>1周で2個 | 詠唱時間を1/2</p>
                <GuideList
                  items={[
                    {
                      title: "ミスティシンボルの入手方法",
                      href: "/systems/item/119",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="デモンズシール">
                <p>1周で1個 | 経験値2倍</p>
                <GuideList
                  items={[
                    {
                      title: "デモンズシールの入手方法",
                      href: "/systems/item/123",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="クローナシンボル">
                <p>1周で1個 | デモンズシールのデメリットを消去</p>
                <GuideList
                  items={[
                    {
                      title: "クローナシンボルの入手方法",
                      href: "/systems/item/352",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="ムーンローブ">
                <p>1周で1個 | 特殊効果で消費TP2/3になる防具</p>
                <GuideList
                  items={[
                    {
                      title: "ムーンローブの入手方法",
                      href: "/systems/item/264",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="ペルシャブーツ">
                <p>1周で1個 | 全ダメージ30%軽減</p>
                <GuideList
                  items={[
                    {
                      title: "ペルシャブーツの入手方法",
                      href: "/systems/item/349",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="ホーリィクローク">
                <p>1周で1個 | HPが自動回復する女性用防具</p>
                <GuideList
                  items={[
                    {
                      title: "ホーリィクロークの入手方法",
                      href: "/systems/item/240",
                    },
                  ]}
                />
              </RoundedItem>
              <RoundedItem title="キューティミトン">
                <p>1周で1個 | HPが自動回復する女性用防具</p>
                <GuideList
                  items={[
                    {
                      title: "キューティミトンの入手方法",
                      href: "/systems/item/253",
                    },
                  ]}
                />
              </RoundedItem>
            </RoundedContainer>
            <Information type="warning" title="1周目での確保が必要">
              引き継ぎなので1周目でこれらのアイテムを所持している必要があります。アイテムを獲得しているか確認してからクリアしましょう。
            </Information>
          </div>

          {/* <div className="mb-8">
            <h3>1周目では取れなかった称号を回収</h3>
          </div> */}
        </Section>
      </article>
    </Main>
  );
}
