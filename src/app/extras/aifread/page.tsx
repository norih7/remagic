import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import LocationItems from "@/components/LocationItems";
import LocationLenses from "@/components/LocationLenses";
import { getLocationItemsData } from "@/lib/db";
import { getLocationLensesData } from "@/lib/db";

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
        <p>
          隠しダンジョンの1つ。アイフリードの墓はインフェリアにあり、ここでは飛行艇を入手するために必要な「ひかりのたま」を入手することができます。なおダンジョン内にはボスは登場しません。
        </p>
        <p>
          アイフリードの墓のダンジョン探索をするにはまず遠征の橋でインフェリアに戻って来てから、中継基地の改造ドックに行き石像に話しかけて「はるかなる地でわがあしあとを...」という話を聞く。この話を聞いた後でインフェリアのフィールドマップにあるアイフリードの墓
          GPS(88,64)に入ると、ダンジョン内を探索することが可能となる。聞いていなければダンジョン内を探索することはできないので注意。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <div className="mb-4">
          <p>
            アイフリードの墓ではメインフロアにあるアイフリードの胸像にパーツをセットすることが目的となる。合計3種類のパーツをセットすると隠し通路が開き、奥で「ひかりのたま」を入手することができます。
          </p>
          <p>
            3種類のパーツは以下のもので、胸像のあるメインフロアから通じる3つの道の奥のフロアで入手可能です。入手する順番はどれからでも大丈夫。
          </p>
        </div>
        <div className="mb-4">
          <h3>「アイフリードのひげ」の入手</h3>
          <p>
            胸像のあるフロアを左下に進むと和風のフロアとなり奥では「アイフリードのひげ」を入手できます。
          </p>
          <p>
            このフロアは提灯(ちょうちん)が吊るしてあるフロアにある女の人を階段のところ間で動かして、提灯に噛みつかせる仕掛けがあります。奥の扉はこの仕掛けによって開くのでまずはこれを動作させましょう。
          </p>
          <p>
            奥へ進む途中には刀を振り下ろす侍がいて、刀に触れるとHPに大ダメージを受けます。侍はフリーズリングが当たれば動作が止まるので活用しましょう。
          </p>
          <p>
            ろくろ首の女と提灯の仕掛けで開いた奥にある奉納台にあるひげを調べて「アイフリードのひげ」を入手します。
          </p>
        </div>
        <div className="mb-4">
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
        </div>
        <div className="mb-4">
          <h3>「アイフリードの服」の入手</h3>
          <p>
            胸像のあるフロアを右上に進むとギロチンの動作するフロアとなり、奥では「アイフリードの服を」入手できます。ギロチンは当たらないようにダッシュでくぐり抜けましょう。あたるとHPにダメージを受けます。
          </p>
          <p>
            このフロアの仕掛けは追いかけてくるフランケンに捕まらないようにすること。フランケンに捕まるとそのフロアの入り口に戻されてしまいます。
          </p>
          <p>
            フランケンの動きはフリーズリングで停止させることができるので、これを活用して奥へと進んでいきましょう。奥の棺のある部屋では服を調べて「アイフリードの服」を入手します。
          </p>
        </div>
        <div className="mb-4">
          <h3>「ひかりのたま」の入手</h3>
          <p>
            「アイフリードのひげ」「アイフリードの帽子」「アイフリードの服」の3つが揃い、これらをアイフリードの胸像にセットすると隠し通路が開き、奥から「ひかりのたま」を入手します。ボスはいないためアイフリードの墓の探索はこれにて終了です。
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
