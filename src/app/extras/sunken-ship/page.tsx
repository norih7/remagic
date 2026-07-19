import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import { getLocationItemsData } from "@/lib/db";

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
        <p>
          隠しダンジョンの1つ。このダンジョン内からはインフェリアの海底マップ「インシーマップ」を入手することができる。また奥まで進むとボス「セイレーン」がいる。
        </p>
        <p>
          遠征の橋からインフェリアに戻って来れるようになったあとからはインフェリアの海底にある沈没船
          GPS(34, 4)に行くことができます。
        </p>
        <p>
          遠征の橋からインフェリアに戻ってきた直後のレベル上げやアイテム回収にはおすすめのダンジョンです。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-4">
          <p>
            ダンジョンは船の構成になっており、まずは各部屋を探索していきます。ダンジョン内には「閉鎖箇所」と「浸水の部屋」があり、この仕掛けを解くために船内を何往復かする必要があります。
          </p>
        </div>
        <div className="mb-4">
          <h3>閉鎖箇所の解除</h3>
          <p>まずは封鎖箇所を解除することになります。</p>
          <p>
            入り口のハシゴを降りて右側に進んだフロアの奥の部屋にある木箱から「隔壁のキー」を入手できます。これは入り口のハシゴを降りて中央に進んだフロアの壁に差し込むことができ、この動作により閉鎖箇所が解除されます。なお途中の部屋の宝箱にはモンスター「フェイク」がいるので戦闘となったら逃げるといいでしょう。
          </p>
          <p>
            解除キーを差し込むことによって、そのフロアの閉鎖箇所が解除されて奥に進めるようになります。
          </p>
        </div>
        <div className="mb-4">
          <h3>ポンプによる部屋の水の放出</h3>
          <p>
            閉鎖箇所を解除したら奥に進み、浸水している部屋の奥の木箱から「ポンプ室の鍵」を入手します。
          </p>
          <p>
            この鍵を入手している状態であれば、入り口のハシゴを降りて左側に進んだフロアの奥にあるポンプ室に入ることができ、機械を調べるとポンプが作動して浸水している部屋の水が放出されます。
          </p>
        </div>
        <div className="mb-4">
          <h3>インシーマップの入手</h3>
          <p>
            これら2つの仕掛けを解いた後はダンジョンを道なりに進んでいくことに。ルーンボトルが入っている宝箱のフロアは分岐点となっており、ハシゴで上に行くと船長室に行く。ここではイベントがあり、宝箱からアイテム「インシーマップ」を入手することができます。
          </p>
        </div>
        <div className="mb-4">
          <h3>セイレーンとの戦闘</h3>
          <p>
            一方このフロアにあるハシゴを降りるとロードポイントがあり、奥ではボス「セイレーン」との戦闘になります。インシーマップを手に入れており、セイレーンを倒した後はこのダンジョンには特にやり残したことはないので脱出しましょう。
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
