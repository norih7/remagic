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
import LinkItem from "@/components/LinkItem";

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
          <RoundedContainer title="引き継ぎ可能なオプション">
            <div className="pt-3 grid grid-cols-2 gap-3">
              <RoundedItem>キャラクター情報</RoundedItem>
              <RoundedItem>覚えた術・技</RoundedItem>
              <RoundedItem>所持アイテム</RoundedItem>
              <RoundedItem>レンズ入手状況</RoundedItem>
              <RoundedItem>料理レシピ</RoundedItem>
              <RoundedItem>号令</RoundedItem>
              <RoundedItem>コレクターずかん</RoundedItem>
              <RoundedItem>モンスターずかん</RoundedItem>
              <RoundedItem>称号 ※アップデートで追加</RoundedItem>
            </div>
          </RoundedContainer>
          <RoundedContainer title="引き継ぎの詳細">
            <div className="pt-3 grid grid-cols-1 gap-3">
              <RoundedItem title="キャラクター情報の引き継ぎ">
                レベル、クリア時の装備品、一部称号（レベルアップによる称号、おんそくのせんしなど）
              </RoundedItem>
              <RoundedItem title="覚えた術・技の引き継ぎ">
                覚えた技と技の使用回数、斬り/突きレベル、晶霊レベル
                <br />
                ※契約した大晶霊の状態は引き継げません
              </RoundedItem>
              <RoundedItem title="所持アイテム">
                装備品や消費アイテムはそのまま引き継ぎ。
                <br />
                一部の貴重品（マニュアルのしょ、モンスター図鑑など）のみ引き継ぎます。「やみのたま」「ひかりのたま」は引き継がれないため、2周目で飛行艇を入手できるタイミングはシゼル城突入後となります。
              </RoundedItem>
            </div>
          </RoundedContainer>
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
              <LinkItem
                name="フェアリィリング"
                href="/systems/item/297"
                remarks="1周で2個 | 消費TPを1/2"
                key={1}
              />
              <LinkItem
                name="ミスティシンボル"
                href="/systems/item/119"
                remarks="1周で2個 | 詠唱時間を1/2"
                key={2}
              />
              <LinkItem
                name="デモンズシール"
                href="/systems/item/123"
                remarks="1周で1個 | 経験値2倍"
                key={3}
              />
              <LinkItem
                name="クローナシンボル"
                href="/systems/item/352"
                remarks="1周で1個 | デモンズシールのデメリットを消去"
                key={4}
              />
              <LinkItem
                name="ムーンローブ"
                href="/systems/item/264"
                remarks="1周で1個 | 特殊効果で消費TP2/3になる防具"
                key={5}
              />
              <LinkItem
                name="ペルシャブーツ"
                href="/systems/item/349"
                remarks="1周で1個 | 全ダメージ30%軽減"
                key={6}
              />
              <LinkItem
                name="ホーリィクローク"
                href="/systems/item/240"
                remarks="1周で1個 | HPが自動回復する女性用防具"
                key={7}
              />
              <LinkItem
                name="キューティミトン"
                href="/systems/item/253"
                remarks="1周で1個 | HPが自動回復する女性用防具"
                key={8}
              />
            </RoundedContainer>
            <Information type="warning" title="1周目での確保が必要">
              引き継ぎなので1周目でこれらのアイテムを所持している必要があります。アイテムを獲得しているか確認してからクリアしましょう。
            </Information>
          </div>

          <h3>戦闘難易度「アンノウン」での戦闘</h3>
          <RoundedContainer title="アンノウンによる戦闘変化">
            <div className="grid grid-cols-2 gap-3 pt-3">
              <RoundedItem title="敵のHP">1.8倍</RoundedItem>
              <RoundedItem title="敵の攻撃力">1.3倍</RoundedItem>
              <RoundedItem title="テクニカルスマッシュボーナス">
                テクニカルスマッシュが6%以上で+11%のボーナス付与（最低17%）
              </RoundedItem>
            </div>
          </RoundedContainer>
          <Information type="warning" title="数値検証">
            アンノウンの情報につきまして検証が不足している可能性があります。誤りや情報提供などございましたらXやメールフォームで問い合わせいただけたら助かります。
          </Information>
          <p>
            アンノウンはテクニカルスマッシュのボーナスが魅力的。ブースト機能のアイテムドロップ2倍と合わせて、レアアイテムや薬草のドロップを狙うのがおすすめです。
          </p>
          <GuideList
            items={[
              {
                title: "レアアイテムドロップ",
                href: "/deeps/rare-item-drop",
              },
              {
                title: "ステータスアップ薬草集め",
                href: "/deeps/herb",
              },
            ]}
          />
          {/* <div className="mb-8">
            <h3>1周目では取れなかった称号を回収</h3>
          </div> */}
        </Section>
      </article>
    </Main>
  );
}
