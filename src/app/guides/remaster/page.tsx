import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import { guideLinks } from "@/constants";
import GuideList from "@/components/GuideList";
import CardList from "@/components/CardLIst";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Image from "next/image";
import Section from "@/components/Section";
import Main from "@/components/SiteLayout/Main";

export const dynamic = "force-static";

const pageKey = "remaster";
const title = guideLinks[pageKey].title;
const description = guideLinks[pageKey].seoDesc;
const canonical = guideLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default function Page() {
  return (
    <Main title={title}>
      <article>
        <PageSummary>
          テイルズオブエターニアリマスターの変更点やリマスター向け攻略情報をまとめます
        </PageSummary>

        <Section>
          <div id="changes" className="scroll-mt-6">
            <SectionTitle type="flag">
              リマスター版の変更点ピックアップ
            </SectionTitle>
          </div>
          <div className="mb-8">
            <h3>アイコンと関連コンテンツ</h3>
            <RoundedItem title="目的地アイコン" className="mb-3">
              <div className="flex gap-x-3">
                <div className="w-[30px]">
                  <Image src="/icons/goal.png" width={25} height={25} alt="" />
                </div>
                <p className="flex-1">
                  次に向かう場所を示すアイコンが追加され、ストーリー進行時に目的地を把握しやすくなります。フィールドマップだけではなくダンジョン内でも有効。
                </p>
              </div>
            </RoundedItem>
            <RoundedItem title="貴重品アイコン" className="mb-3">
              <div className="flex gap-x-3">
                <div className="w-[30px]">
                  <Image
                    src="/icons/key-item.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                </div>
                <p className="flex-1">
                  貴重品の入手にアイコン。モンスター図鑑やマニュアルのしょの取り忘れがしにくい。
                </p>
              </div>
            </RoundedItem>
            <RoundedItem title="技習得アイコン" className="mb-3">
              <div className="flex gap-x-3 mb-3">
                <div className="w-[30px]">
                  <Image src="/icons/skill.png" width={25} height={25} alt="" />
                </div>
                <p className="flex-1">
                  主にチャットとフォッグの特技習得に関するイベントが発生する場所にアイコンが表示されます。イベント発生条件は難しいの下記ページを参照ください。
                </p>
              </div>
              <GuideList
                items={[
                  {
                    title: "チャットの特技習得イベント",
                    href: "/subevents/skill-chat",
                  },
                  {
                    title: "フォッグの特技習得イベント",
                    href: "/subevents/skill-fog",
                  },
                ]}
              />
            </RoundedItem>
            <RoundedItem title="砂時計アイコン" className="mb-3">
              <div className="flex gap-x-3 mb-3">
                <div className="w-[30px]">
                  <Image
                    src="/icons/time-limit.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                </div>
                <p className="flex-1">
                  時限イベント発生場所にアイコンが表示されて見逃しが少なくなります。主な時限イベントには以下のものがあります。
                </p>
              </div>
              <GuideList
                items={[
                  {
                    title: "カトリーヌの恋愛",
                    href: "/subevents/catarine",
                  },
                  {
                    title: "ベッポのかくれんぼ",
                    href: "/subevents/beppo",
                  },
                ]}
              />
            </RoundedItem>
            <Information type="warning" title="アイコンがない要素">
              <p>
                レンズやワンダーシェフなどは「オリジナルエターニアで意図的に隠されていた要素」としてアイコンが表示されません。当サイトでは画像付きで全データを公開しています。
              </p>
              <GuideList
                items={[
                  { title: "レンズ一覧", href: "/subevents/lens" },
                  { title: "料理一覧", href: "/systems/recipe" },
                ]}
              />
            </Information>
          </div>
          {/* <div className="mb-8">
          <h3>エンカウントのON／OFF</h3>
          <p>
            敵とのエンカウントをOFFにできる機能が追加されます。探索や移動を優先したい場面で活用できます。
          </p>
        </div> */}
          <div className="mb-8">
            <h3>ブースト機能</h3>
            <div className="mb-8">
              <p>
                初回プレイ時から下記の機能を選択できます。「攻撃熟練度」と「術技使用回数2倍」はONを推奨します。技はすべて400回以上使った方がよく、リッドの猛虎連撃破は使用回数を9999にする価値がある技です。
              </p>
              <GuideList
                items={[
                  {
                    title: "戦闘システム解説（特技の使用回数と命中率）",
                    href: "/guides/buttle",
                  },
                ]}
              />
            </div>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem title="獲得経験値">0〜4倍</RoundedItem>
              <RoundedItem title="獲得ガルド">0〜4倍</RoundedItem>
              <RoundedItem title="ダメージ">1、2、5倍</RoundedItem>
              <RoundedItem title="攻撃熟練度">1、2、4倍</RoundedItem>
              <RoundedItem title="料理熟練度">1、2、4倍</RoundedItem>
              <RoundedItem title="エンカウント">OFF、LOW、ON</RoundedItem>
              <RoundedItem title="隊列維持">ON、OFF</RoundedItem>
              <RoundedItem title="術技使用回数2倍">ON、OFF</RoundedItem>
              <RoundedItem title="アイテム入手確率2倍">ON、OFF</RoundedItem>
              <RoundedItem title="術技消費TP減少">ON、OFF</RoundedItem>
              <RoundedItem title="デスペナルティの無効化">ON、OFF</RoundedItem>
              <RoundedItem title="キャンプ時にTP回復">ON、OFF</RoundedItem>
              <RoundedItem title="アイテム最大所持数拡張">ON、OFF</RoundedItem>
            </RoundedContainer>
          </div>
          <div className="mb-8">
            <h3>2周目移行の引き継ぎ</h3>
            <RoundedContainer className="grid grid-cols-2 gap-3">
              <RoundedItem>キャラクター情報</RoundedItem>
              <RoundedItem>覚えた術・技</RoundedItem>
              <RoundedItem>所持アイテム</RoundedItem>
              <RoundedItem>レンズ入手状況</RoundedItem>
              <RoundedItem>料理レシピ</RoundedItem>
              <RoundedItem>号令</RoundedItem>
              <RoundedItem>コレクターずかん</RoundedItem>
              <RoundedItem>モンスターずかん</RoundedItem>
            </RoundedContainer>
          </div>
          <div className="mb-8">
            <h3>オート戦闘の高速モード</h3>
            <p>
              オート戦闘時に高速モードを利用できます。戦闘を手早く進めたいときに便利な追加機能です。リマスター版に対応した効率的なレベルアップ場所などは後日まとめる予定です。
            </p>
          </div>
          {/* <div className="mb-8">
          <h3>グラフィック・効果音の切り替え</h3>
          <p>
            グラフィックと効果音はモードを切り替えられ、リマスター版の見た目・音とオリジナル版の雰囲気を選んで楽しめます。
          </p>
        </div> */}
        </Section>

        {/* <section className="mb-12">
        <SectionTitle>個人的に嬉しい要素</SectionTitle>
      </section> */}

        {/* <section className="mb-12">
        <div id="retained" className="scroll-mt-6">
          <SectionTitle type="flag">グラフィック</SectionTitle>
        </div>
        <p>
          グラフィック・効果音の切り替えも用意されているため、遊びやすさと当時の雰囲気を切り替えて楽しめます。
        </p>
      </section> */}

        <Section>
          <div id="comparison" className="scroll-mt-6">
            <SectionTitle type="flag">ベースとなる移植元</SectionTitle>
          </div>
          <p>
            エターニアリマスターはPSP版をベースにされていると言及があります。PSPは戦闘やフィールド移動が60fpsで動作します。（PS版は30fps）
            ただしPSP版はドットがボヤけてる欠点があったのですがリマスター版はくっきりさせています。
          </p>
          <h3>ポケステ要素はない</h3>
          <p>
            PS版エターニアにはポケステと連動するサブイベントがありますが、リマスター版ではPSP版と同じくポケステなしでアイテムだけ入手できます。重要なスマッシュマントを簡単に入手できますのでお見逃しなく。
          </p>
          <GuideList
            items={[
              {
                title: "グリップソード探し（スマッシュマントの入手）",
                href: "/subevents/grip-sword",
              },
            ]}
          />
        </Section>

        <Section>
          <div id="guides" className="scroll-mt-6">
            <SectionTitle type="flag">リマスター版の攻略に進む</SectionTitle>
          </div>
          <p>
            追加機能を活用しながら進めたい方は、RE:MAGICの攻略情報もあわせてご利用ください。ストーリー順の回収要素や、見落としやすいイベント・戦闘の仕組みを確認できます。
          </p>
          <GuideList
            items={[
              { title: "ストーリー攻略チャート", href: "/stories" },
              { title: "序盤にやっておきたいこと", href: "/guides/first" },
              { title: "取り逃がし要素", href: "/guides/missable" },
              { title: "戦闘操作・特殊操作", href: "/systems/buttle" },
              { title: "料理一覧", href: "/systems/recipe" },
            ]}
          />
        </Section>
      </article>
    </Main>
  );
}
