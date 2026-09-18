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
import CardList from "@/components/CardLIst";
import GuideList from "@/components/GuideList";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "nereid";
const title = extraLinks[pageKey].title;
const description = extraLinks[pageKey].seoDesc;
// const canonical = extraLinks[pageKey].path;
// export const metadata = {
//   title,
//   description,
//   alternates: {
//     canonical,
//   },
// };

export const metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: true,
  },
};

export default async function HomePage() {
  const itemsData = await getLocationItemsData();
  const lensesData = await getLocationLensesData();

  return (
    <article>
      <SetPageTitle title={title} />
      <Information type="warning" title="現在の状況">
        ネレイドの迷宮は現在準備中です。現在の進捗: 半分ほど完成
      </Information>
      <PageSummary>
        ネレイドの迷宮は、2周目以降に挑戦できる全6階層の隠しダンジョンです。ランダムに作成される迷宮を進み、各階層のボスを倒して最深部のネレイドを目指します。探索中の消耗を抑え、1〜5階層の単独ボス戦を突破する準備が重要です。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>ネレイドの迷宮</SectionTitle>
        <EventCondition category="period">
          シゼル城到着後（機種によって異なる）
        </EventCondition>
        <p>
          ネレイドの迷宮は、1周目をクリアしたデータで2周目以降に挑戦できる隠しダンジョンです。1〜5階層はキャラクター1人で探索とボス戦に挑み、6階層では自由にパーティを組んでネレイドと戦います。
        </p>
        <p>
          各階層のボスを倒した時点で、先へ進まずにダンジョンを抜けることもできます。何度でも挑戦できるため、準備が足りないと感じたら無理に最深部まで進まず、一度脱出して態勢を整えましょう。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ネレイドの迷宮の出現条件</SectionTitle>
        <div className="mb-8">
          <div className="mb-4">
            <CardList list={["1周目をクリアする", "2周目以降の挑戦する"]} />
          </div>
          <Information title="PSP版の出現条件">
            <p>
              PSP版で1周目のデータでネレイドの迷宮を出現させるには、2周目データをロードしてソフトリセットしてすぐに1周目のデータをロードすることで出現させることができます。ソフトリセット:
              START+SELECT+L+R同時押しでタイトル画面に戻る。
            </p>
          </Information>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョンに挑む前に</SectionTitle>
        <div className="mb-8">
          <h3>(1) 装備品を準備する</h3>
          <p>
            術者にはミスティシンボルを装備させましょう。移動速度の遅い術者やフォッグにはエルヴンブーツを装備させると、探索と戦闘の両方で動きやすくなります。ホーリィクロークによるHP自動回復も役立ちます。
          </p>
          <p>
            探索中の敵から逃げやすくするため、マジックミストを装備するのもおすすめです。逃走速度が50%上がりますが必須ではなく、インフェリアのバロールで購入できます。
          </p>
        </div>
        <div className="mb-8">
          <h3>(2) C.ケイジの調整</h3>
          <p>
            ダンジョン内ではC.ケイジが使えないためダンジョンに入る前にフリンジを調整しておきましょう。
          </p>
        </div>
        <div className="mb-8">
          <h3>(3) 習得しておきたい特技</h3>
          <p>
            チャットとフォッグの特技を習得させておきましょう。チャットのエターナルスロー、フォッグのアクアスパイラルとエレメントマスターが各階層の攻略で活躍します。
          </p>
          <p>
            術者のフリンジで習得できる術や、リマスター版での下級術連発の可否は要確認です。使用できる術や習得条件を事前に確認してから挑戦してください。
          </p>
          <GuideList
            items={[
              {
                title: "チャットの特技習得",
                href: "/skills/chat",
              },
              {
                title: "フォッグの特技",
                href: "/skills/fog",
              },
            ]}
          />
        </div>
        <div className="mb-8">
          <h3>(4) 探索中の回復</h3>
          <p>
            探索中はアイテムが使えないため、料理と戦闘中のアイテム使用を前提に準備します。食材はできるだけ多く持ち込み、パイングミなどのTP回復アイテムも用意しておきましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョン攻略</SectionTitle>
        <Information title="探索中の注意点">
          <p>
            基本的にはエンカウントする敵との戦闘はすべて逃げることを推奨します。無駄な消耗を避けてボス戦に備え、薬草をドロップする敵と戦う場合は料理で回復しましょう。
          </p>
        </Information>
        <div className="mb-8">
          <p>
            ダンジョンは挑戦するたびにランダムに作成されます。下方向にはゴールがないため、下へ進み続けるのではなく、下以外の方向を選んで探索しましょう。
          </p>
          <p>
            宝箱からは回復アイテムや晶霊を活性化するアイテムのどちらかを入手できます。貴重なアイテムは入っていませんが、攻略中の回復に役立つため、見つけたら回収しておくのがおすすめです。
          </p>
          <p>
            探索中はアイテムを使えませんが、戦闘中は使用できます。敵との戦闘はすべて逃げることを推奨します。無駄な消耗を避けてボス戦に備え、薬草をドロップする敵と戦う場合は料理で回復しましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ボス攻略</SectionTitle>

        <div className="mb-8">
          <h3>1階層: エレメンタラー戦</h3>
          <p>
            ハーピーをコチハンで撃破したら、エレメンタラーから少し離れた位置でエターナルスローを発動します。発動後は技を出しながら移動できるため、エレメンタラーへ近づいて攻撃を当てましょう。
          </p>
          <p>
            エレメンタラーは近づくとチョップを使い、強力なビーム攻撃も行います。エターナルスロー1回では倒しきれないため、パイングミなどでTPを回復してから再度使用します。
          </p>
        </div>
        <div className="mb-8">
          <h3>2階層: エレメンタラー戦</h3>
          <p>
            選択キャラクターにはセルシウスをセットし、フリーズランサーを習得させておくのがおすすめです。ミスティシンボル、エルヴンブーツ、ホーリィクロークも役立ちます。キールは術の詠唱短縮があるため、特に安定しやすいキャラクターです。
          </p>
          <p>
            フリーズランサーは1発あたり300〜400程度のダメージを与え、4ヒットすれば平均1000程度のダメージが見込めます。セルシウスを召喚できるようになったら、すぐに召喚しましょう。パイングミなどでTPを回復しながら戦うため時間はかかりますが、安定して攻略できます。
          </p>
          <p>
            エレメンタラーにすり抜けられたら、一度離れてから戻ることでチョップを回避できます。なお、下級術を連発する攻略法がリマスター版でも使えるかは要確認です。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>3階層の攻略</SectionTitle>
        <div className="mb-8">
          <h3>エレメンタラー戦</h3>
          <p>
            フォッグがおすすめです。強力なアクアスパイラルからキャンセルして、エレメントマスターにつなげて大きなダメージを与えましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>4階層の攻略</SectionTitle>
        <div className="mb-8">
          <h3>ファラで連携する</h3>
          <p>
            ファラがおすすめです。飛燕連天脚、双撞掌底破、獅子戦吼の連携でダメージを与えましょう。技の連携を切らさず、敵を動かさないことを意識すると安定します。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>5階層の攻略</SectionTitle>
        <div className="mb-8">
          <h3>リッドで押し切る</h3>
          <p>
            リッドがおすすめです。鳳凰天駆と秘奥義を連発して、敵に反撃の時間を与えずに撃破しましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>6階層の攻略</SectionTitle>
        <div className="mb-8">
          <h3>ネレイド戦</h3>
          <p>
            最後は自由にパーティを組んでネレイドに挑めます。ここまで来たらアイテムを惜しまず使い、料理や回復アイテムで立て直しながら戦いましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <div className="mb-4">
          <h3>ダンジョン内の入手アイテム</h3>
          <LocationItems data={itemsData} locationIds={[61]} />
          <LocationLenses data={lensesData} locationIds={[61]} />
        </div>
      </section>
    </article>
  );
}
