import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import LocationLenses from "@/components/LocationLenses";
import { getLocationItemsData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";
import EventCondition from "@/components/EventCondition";
import ResponsiveImage from "@/components/ResponsiveImage";
import Information from "@/components/Information";
import { extraLinks } from "@/constants";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "aifread";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
const canonical = extraLinks[pageKey].path;
export const metadata = {
  title,
  description,
  alternates: {
    canonical,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        飛行艇の入手に欠かせないキーアイテム「ひかりのたま」が手に入る、インフェリアの隠しダンジョン「アイフリードの墓」の攻略情報をまとめました。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>アイフリードの墓</SectionTitle>
        <EventCondition category="period">
          インフェリアへ帰還後から
        </EventCondition>
        <p>
          アイフリードの墓はインフェリア地方に存在する隠しダンジョンの一つで、ボスの出現しない探索型のエリアです。主な目的は、飛行艇を作成するために不可欠な「ひかりのたま」を回収することとなります。
        </p>
        <ResponsiveImage src="/extras/secret-aifread-flag.jpg" />
        <p>
          ダンジョンを出現させるには、遠征の橋にある改造ドックにてアイフリード像を調べ、上記の手がかりを聞き出す必要があります。改造ドックへは、インフェリアおよびセレスティアの遠征の橋にあるトラベルメニューから「中継基地へ」→「反転ドーム」→「改造ドック」の順に選択していくことでアクセス可能です。
        </p>
        <p>
          この手順を踏むことで、インフェリアのフィールドマップ座標 GPS(88,64)
          にアイフリードの墓が出現します。フラグを立てておかないとダンジョン自体が現れないため注意しましょう。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-8">
          <h3>ダンジョン概要</h3>
          <p>
            アイフリードの墓では、エントランスに置かれたアイフリードの胸像に3種類の専用パーツをはめ込むと隠し通路が通じ、その奥で「ひかりのたま」が手に入ります。
            必要なパーツは「アイフリードのひげ」「アイフリードの帽子」「アイフリードの服」の3点であり、どの順番で回収しても問題ありません。内部はオバケ屋敷を意識した仕掛けが多く、フリーズリングを駆使すると安全かつスムーズに突破できます。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-entrance.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードのひげ」の入手手順</h3>
          <p>
            胸像のある広間から左下方向へ進むと、和風の妖怪屋敷を模したエリアに突入し、奥で「アイフリードのひげ」を獲得できます。
          </p>
          <p className="mb-4">
            道中はルートが分かれていますが、ひげがあるのは「途中でカッパが飛び出してきて、奥に女性の妖怪が待ち構えている」側の通路です。もう片方の刀を振り下ろす侍がいる通路はアイテム回収用のルートとなっています。侍の刀に触れると大きなダメージを受けてしまうため、フリーズリングを当てて動きを止めるのが有効です。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-yokai.jpg" />
          <p>
            提灯と女の妖怪が配置された区画では、女の妖怪を○ボタンで階段の付近まで誘導し、提灯に噛みつかせることで手前の扉を開くことができます。
            開いた扉の先にある奉納台の白いひげを調査すると、「アイフリードのひげ」が手に入ります。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-beard.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードの帽子」の入手手順</h3>
          <p>
            胸像の正面にある奥の通路を進むと長い橋が架かったフロアに出られ、その突き当たりで「アイフリードの帽子」が手に入ります。
          </p>
          <p>
            こちらは特別なパズル要素などは少ないものの、ダンジョン特有のHPを削るトラップが多いため、こまめなパーティの健康管理を心掛けましょう。
          </p>
          <p>
            最奥まで進むと煮えたぎる大鍋が見つかるので、そこにフリーズリングを4回撃ち込むと先へ進めるようになります。城の内部風の部屋にいる、服をまとった銅像を調べると「アイフリードの帽子」を入手可能です。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-hat.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードの服」の入手手順</h3>
          <p>
            胸像エリアから右上方向へ進むと、ギロチンが稼働する洋館風のフロアに到着し、奥で「アイフリードの服」が手に入ります。ギロチンはタイミングを見計らってダッシュでかいくぐりましょう。接触するとダメージを負います。
          </p>
          <p className="mb-4">
            奥のエリアではフランケンシュタインが執拗に追跡してきて、捕まるとエリアの入り口まで強制送還されてしまいます。フランケンはフリーズリングで一時停止させられるため、上手く足を止めながら先へ進みましょう。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-vampire.jpg" />
          <p>
            フランケンをやり過ごした先にある吸血鬼の扉にも小さな条件があり、女性キャラクター（ファラ、メルディ、チャットのいずれか）を先頭に立たせて接近すると通過できるようになります。
          </p>
          <Information title="ムーンローブについて">
            途中のフランケンがいるフロアに置かれた宝箱からは「ムーンローブ」が手に入ります。キールおよびフォッグが装備できる体防具で、消費TPを2/3に軽減するという強力な特殊効果を持ちます。エメラルドリングと同一の優れた効果を発揮するため、必ず回収しておきましょう。
          </Information>
          <p>
            奥の棺が並ぶ部屋にて衣服を調べれば、「アイフリードの服」が手に入ります。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-clothes.jpg" />
        </div>
        <div className="mb-8">
          <h3>「ひかりのたま」の入手</h3>
          <p>
            「アイフリードのひげ」「アイフリードの帽子」「アイフリードの服」の3つをすべて集め、それらをアイフリードの胸像にはめ込む（胸像を調べる）と隠し通路が出現します。奥へ進んで「ひかりのたま」を回収すれば目的達成です。ボス戦闘は発生しないため、これでアイフリードの墓の攻略は完了となります。
          </p>
        </div>
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[48]} />
          <LocationLenses data={lensesData} locationIds={[48]} />
        </div>
      </section>
    </article>
  );
}
