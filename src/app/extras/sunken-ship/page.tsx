import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";
import ResponsiveImage from "@/components/ResponsiveImage";
import Information from "@/components/Information";
import EventCondition from "@/components/EventCondition";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "沈没船";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        さまざまなアイテムを入手できるインフェリアの隠しダンジョン「沈没船」について紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>沈没船</SectionTitle>
        <EventCondition category="period">
          インフェリアへ帰還後から
        </EventCondition>
        <div className="mb-4">
          <p>
            隠しダンジョンの1つ。ダンジョン内ではインフェリアの海底マップ「インシーマップ」を入手することができ、奥にはボス「セイレーン」がいます。攻略難易度は易しく、遠征の橋からインフェリアに戻ってきた直後のレベル上げやアイテム回収におすすめのダンジョンです。
          </p>
        </div>
        <div className="mb-8">
          <h3>沈没船の行き方</h3>
          <p>
            遠征の橋からインフェリアに戻って来てから、インフェリアの海底にある沈没船
            GPS(34, 4)に行くことができます。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-8">
          <h3>ダンジョン概要</h3>
          <ResponsiveImage src="/extras/secret-sunken-ship-order.jpg" />
          <p>
            ダンジョンの入り口を進むとこの画像のような分岐の部屋があります。ダンジョン攻略は1〜4の順で進めていき、「水の放出」の仕掛けを解いていきます。
          </p>
        </div>
        <div className="mb-4">
          <h3>1.隔壁のキーを入手 / 2.ポンプ室の鍵を入手</h3>
          <p>
            「1.隔壁のキーの入手」の通路を進み、奥の部屋の木箱から「隔壁のキー」を入手します。途中の部屋にある宝箱を調べるとモンスター「フェイク」と戦闘となり、倒すとエリクシールを入手できます。フェイクは強敵なので無理だと思ったら早めに逃げましょう。
          </p>
          <p>
            次に「2.ポンプ室の鍵を入手」の通路を進み先ほど入手したキーを使った先の部屋から「ポンプ室の鍵」を入手します。
          </p>
        </div>
        <div className="mb-4">
          <h3>3.水を放出 / 4.排水後の探索</h3>
          <p>
            「3.水を放出」を進んだフロアの奥にあるポンプ室ではで機械を調べるとポンプが作動して浸水している部屋の水が放出されます。
            水の放出後は「4.排水後の探索」の部屋に戻り、奥のダンジョンを探索していきます。
          </p>
          <ResponsiveImage src="/extras/secret-sunken-ship-ladder.jpg" />
          <p>
            基本的には1本道のダンジョン探索ですがルーンボトルを入手できるフロアは分岐点となっており、ハシゴで上に行くと船長室で下へ行くとボス「セイレーン」との戦闘になります。船長室では宝箱からアイテム「インシーマップ」を入手できます。
          </p>
        </div>

        <div className="mb-4">
          <h3>セイレーンとの戦闘</h3>
          <ResponsiveImage src="/extras/secret-sunken-ship-boss.jpg" />
          <Information type="warning" title="セイレーンに挑む前に">
            沈没船のボス「セイレーン」からは「みずぐも」を盗むことができます。（チャットの特技ローバーアイテムで盗む）みずぐもは水属性耐性50%する効果を持ってるアクセサリ。チャットの小屋でも1個入手できるため必須ではありませんが盗みチャレンジもおすすめです。セイレーン戦前にはダンジョン内のすべてのアイテムを入手できるので、セイレーンのところまでたどり着いたら脱出して後回しすることもできます。
          </Information>
          <p>
            先ほどの分岐点を下に進むとボス「セイレーン」との戦闘になります。勝利後はセイレーンの奥にあるアイテム（すべてガルド）を取得できます。
          </p>
          <p>BOSS：『セイレーン』</p>
          <p>火が弱点。リッドが鳳凰天駆を覚えているのならかなり有効。</p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[57]} />
        </div>
      </section>
    </article>
  );
}
