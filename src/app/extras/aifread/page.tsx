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

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "アイフリードの墓";
export const metadata = {
  title,
  description: "",
};
export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        飛行艇入手のキーアイテム「ひかりのため」を入手できるインフェリアの隠しダンジョン「アイフリードの墓」について紹介します。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>アイフリードの墓</SectionTitle>
        <EventCondition category="period">
          インフェリアへ帰還後から
        </EventCondition>
        <p>
          アイフリードの墓はインフェリアにある隠しダンジョンの1つで、ボスが登場しないダンジョンです。ダンジョンの目的は飛行艇を入手するために必要な「ひかりのたま」を入手することです。
        </p>
        <ResponsiveImage src="/extras/secret-aifread-flag.jpg" />
        <p>
          アイフリードの墓に入るには遠征の橋にある改造ドックでアイフリード像を調べ、上記ヒントを聞く必要があります。改造ドックはインフェリア/セレスティアの遠征の橋のトラベルメニューから「中継基地へ」「反転ドーム」「改造ドック」の順に選択していけば辿り着きます。
        </p>
        <p>
          上記の行動により、インフェリアのフィールドマップ GPS(88,64)
          にアイフリードの墓が出現します。改造ドックのイベントがないとダンジョンも出現しません。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-8">
          <h3>概要</h3>
          <p>
            アイフリードの墓ではエントランスにあるアイフリードの胸像に合計3種類のパーツをセットすると隠し通路が開き、その奥で「ひかりのたま」を入手できます。
            パーツは「アイフリードのひげ」「アイフリードの帽子」「アイフリードの服」で、どれから入手してもOKです。ダンジョン内にはお化けをテーマにした複数の仕掛けがあり、フリーズリングを使うと有利に進めることができます。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-entrance.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードのひげ」の入手</h3>
          <p>
            胸像のあるフロアを左下に進むと和風のお化け屋敷をモチーフとしたフロアとなり奥では「アイフリードのひげ」を入手できます。
          </p>
          <p className="mb-4">
            道中は二手に分かれますが「アイフリードのひげ」があるのは途中カッパが飛び出してきて、奥には女の妖怪がいる方の通路です。もう片方の刀を振り下ろす侍がいる通路はアイテム回収です。侍の刀に触れるとHPに大ダメージを受けますが、フリーズリングを当たれば動作が止まるので活用しましょう。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-yokai.jpg" />
          <p>
            提灯(ちょうちん)と女の妖怪がいるフロアでは、女の妖怪を⚪︎ボタンで階段のところまで動かし、提灯に噛みつかせることで1つ前のフロアの扉が開きます。
            開いた扉の奥では奉納台にある白いひげを調べることで「アイフリードのひげ」を入手できます。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-beard.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードの帽子」の入手</h3>
          <p>
            胸像の奥にある道を進むと長い橋がかけられたフロアとなり、奥では「アイフリードの帽子」を入手できます。
          </p>
          <p>
            ここでは特別な仕掛けはありませんが、ダンジョンにはHPを削るトラップなどが多いのでキャラクターのステータスには気を使いましょう。
          </p>
          <p>
            奥にいくと煮立っている大きな鍋があり、ここにフリーズリングを4回放つと奥に進めるようになります。城内のようなフロアにて服のかかった銅像を調べて「アイフリードの帽子」を入手します。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-hat.jpg" />
        </div>
        <div className="mb-8">
          <h3>「アイフリードの服」の入手</h3>
          <p>
            胸像のあるフロアを右上に進むとギロチンの動作する洋館のフロアとなり、奥では「アイフリードの服を」入手できます。ギロチンは当たらないようにダッシュでくぐり抜けましょう。あたるとHPにダメージを受けます。
          </p>
          <p className="mb-4">
            このフロアの奥ではフランケンが追いかけてくる仕掛けがあり、捕まるとそのフロアの入り口に戻されてしまいます。フランケンはフリーズリングで停止させることができるので足止めして奥へと進んでいきましょう。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-vampire.jpg" />
          <p>
            フランケンをくぐり抜けた先の吸血鬼の扉にも仕掛けがあります。ここでは女性キャラ（ファラ、メルディ、チャットの誰か）をパーティの先頭に配置して扉へ近づくと通れます。
          </p>
          <Information title="ムーンローブ">
            フランケンのいるフロアにある宝箱からは「ムーンローブ」を入手します。これはキールとフォッグの体防具で、特殊効果でTPを2/3にする効果が付与されます。エメラルドリングと同じ効果を持つため是非入手してください。
          </Information>
          <p>
            奥の棺のある部屋では服を調べて「アイフリードの服」を入手します。
          </p>
          <ResponsiveImage src="/extras/secret-aifread-clothes.jpg" />
        </div>
        <div className="mb-8">
          <h3>「ひかりのたま」の入手</h3>
          <p>
            「アイフリードのひげ」「アイフリードの帽子」「アイフリードの服」の3つが揃い、これらをアイフリードの胸像にセットする（胸像を調べる）と隠し通路が開き、奥から「ひかりのたま」を入手します。ボスはいないためアイフリードの墓の探索はこれにて終了です。
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
