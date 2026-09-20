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
import RoundedItem from "@/components/RoundedItem";
import RoundedContainer from "@/components/RoundedContainer";
import GifPlayer from "@/components/GifPlayer";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const pageKey = "nereid";
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
        ネレイドの迷宮は全6階層で構成される最高難易度の隠しダンジョンです。ランダムに作成される迷宮を進み、各階層のボスを倒して最深部のネレイドを目指します。探索中の消耗を抑え、1〜5階層の単独ボス戦を突破する準備が重要です。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>ネレイドの迷宮</SectionTitle>
        <EventCondition category="period">
          シゼル城到着後（機種によって異なる）
        </EventCondition>
        <p>
          ネレイドの迷宮は高難易度の隠しダンジョンです。1〜5階層はキャラクター1人で探索とボス戦に挑み、6階層では自由にパーティを組んでネレイドと戦います。
        </p>
        <p>
          各階層のボスを倒した時点で、先へ進まずにダンジョンを抜けることもできます。何度でも挑戦できるため、準備が足りないと感じたら無理に最深部まで進まず、一度脱出して態勢を整えましょう。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>ネレイドの迷宮への行き方</SectionTitle>
        <ResponsiveImage src="/extras/nereid-location.jpg" />
        <h3>リマスター版</h3>
        <h3>PS1版/PSP版</h3>
        <div className="mb-4">
          <p>
            2週目の☆がついたセーブデータでストーリーを進行してオルバース界面へ行くとネレイドの迷宮が出現し、ダンジョンへ挑むことができます。ただし実際には2週目のクリアデータがあれば以下の方法で1週目から挑戦可能です。
          </p>
        </div>
        <div className="mb-8">
          <h4>PS1版の特殊な出現方法</h4>
          <p>
            同じメモリカードに2週目の☆がついたセーブデータがあれば、1週目のセーブデータにもネレイドの迷宮が出現します。
          </p>
          <h4>PSP版の特殊な出現方法</h4>
          <p>
            2周目データをロードして「START+SELECT+L+R同時押し」でタイトルに戻ってから1周目のデータをロードすることで出現させることができます。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ダンジョンに挑む前に</SectionTitle>
        <p>
          エターニアの最高難易度のダンジョンであるため徹底的な準備が必要です。
        </p>
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
          <h3>(2) 特技と術の準備</h3>
          <p>
            ネレイドの迷宮で活躍するチャットとフォッグの特技は必ず習得させておきましょう。チャットのエターナルスロー、フォッグのアクアスパイラルとエレメントマスターが各階層の攻略で活躍します。
          </p>
          <p>
            またダンジョン内ではC.ケイジが使えないためダンジョンに入る前にフリンジを調整しておきましょう。特にフリーズランサーとディストーションがおすすめです。
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
              {
                title: "晶例術習得",
                href: "/skills/magic",
              },
            ]}
          />
        </div>
        <div className="mb-8">
          <h3>(3) 回復アイテムとリバースドールの補充</h3>
          <p>
            探索中はアイテムが使えないため、料理と戦闘中のアイテム使用を前提に準備します。食材はできるだけ多く持ち込み、パイングミなどのTP回復アイテムも用意しておきましょう。
          </p>
          <p>
            またラスボス「ネレイド」は即死技を使ってくるためジイニのオークションでリバースドールを15個買っておくと安心です。
          </p>
        </div>
        <div className="mb-8">
          <h3>(4) レベル上げと薬草によるHPアップ</h3>
          <p>
            1〜5階層のボス戦はキャラクター1人で挑むため、レベル上げと薬草によるHPアップをしておくと攻略が安定します。特にHPは薬草で最大HPを増やすことで、ボス戦での耐久力が上がります。ネレイドはディストーションを使うためHPは最低5000以上欲しいです。推奨レベルは75以上です。私は80レベルでノーマルをクリアできました。
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
        <SectionTitle>1人で討伐するボス攻略</SectionTitle>
        <div className="mb-8">
          <h3>1階層: エレメンタラー戦</h3>
          <ResponsiveImage src="/extras/nereid-1f-boss.jpg" />
          <RoundedItem title="選択キャラクタ" className="mb-4">
            チャット
          </RoundedItem>
          <p>
            ハーピーをコチハンで撃破したら、エレメンタラーから少し離れた位置でエターナルスローを発動します。発動後は技を出しながら移動できるため、エレメンタラーへ近づいて攻撃を当てましょう。
          </p>
          <p>
            エレメンタラーは近づくとチョップを使い、強力なビーム攻撃も行います。エターナルスロー1回では倒しきれないため、パイングミなどでTPを回復してから再度使用します。
          </p>
        </div>
        <div className="mb-8">
          <h3>2階層: エレメンタラー戦</h3>
          <ResponsiveImage src="/extras/nereid-2f-boss.jpg" />
          <RoundedItem title="選択キャラクタ" className="mb-4">
            キール
          </RoundedItem>
          <p>
            選択キャラクターにはセルシウスをセットし、フリーズランサーを習得させておくのがおすすめです。ミスティシンボル、エルヴンブーツ、ホーリィクロークも役立ちます。キールは術の詠唱短縮があるため、特に安定しやすいキャラクターです。
          </p>
          <p>
            フリーズランサーは1発あたり300〜400程度のダメージを与え、4ヒットすれば平均1000程度のダメージが見込めます。セルシウスを召喚できるようになったら、すぐに召喚しましょう。パイングミなどでTPを回復しながら戦うため時間はかかりますが、安定して攻略できます。
          </p>
          <p>
            エレメンタラーはダッシュで正面をすり抜けられたら、一度離れてから戻ることでチョップを回避できます。なお、下級術を連発する攻略法がリマスター版でも使えるかは要確認です。
          </p>
          <p>
            ディストーションは固定5000ダメージと怯み効果があるためエレメンタラーのすり抜けに慣れてきたらディストーションを主に使うのもおすすめです。
          </p>
        </div>
        <div className="mb-8">
          <h3>3階層: エレメンタラー戦</h3>
          <RoundedItem title="選択キャラクタ" className="mb-4">
            フォッグ
          </RoundedItem>
          <p>
            フォッグがおすすめです。強力なアクアスパイラルで雑魚敵を倒し、エレメンタラーになったらエレメントマスターを連発して倒しましょう。キャンセルは無理に狙わず、離れてエレメンタルマスターを連発する戦略が安定します。
          </p>
        </div>
        <div className="mb-8">
          <h3>4階層: リビングアーマー</h3>
          <ResponsiveImage src="/extras/nereid-4f-boss.jpg" />
          <RoundedItem title="選択キャラクタ" className="mb-4">
            ファラ
          </RoundedItem>
          <p>
            ファラがおすすめです。ジャンプからの鷹爪落爆蹴、獅子戦吼の連携でダメージを与えましょう。技の連携を切らさず、敵を動かさないことを意識すると安定します。
          </p>
          <GifPlayer
            src="/extras/nereid-4f-boss-tactics.gif"
            alt="リビングアーマー攻略法"
            width={300}
            height={200}
          />
        </div>
        <div className="mb-8">
          <h3>5階層: ヒアデス</h3>
          <RoundedItem title="選択キャラクタ" className="mb-4">
            リッド
          </RoundedItem>
          <p>
            リッドがおすすめです。鳳凰天駆と秘奥義を連発して、敵に反撃の時間を与えずに撃破しましょう。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <SectionTitle>ラスボス攻略</SectionTitle>
        <div className="mb-8">
          <h3>ネレイド戦</h3>
          <p>
            最後は自由にパーティを組んでネレイドに挑めます。ここまで来たらアイテムを惜しまず使い、料理や回復アイテムで立て直しながら戦いましょう。ネレイドは闇攻撃を中心に行うためリッドは「マムベイン」を装備し、他のキャラクタは「セレスティマント」や「リフレクトリング」などの属性攻撃を軽減するアイテムを装備しましょう。かなりダメージを抑えることができます。
          </p>
          <p>
            ネレイドはディストーションを使うため、HPが低いと一撃で倒されます。HPは最低でも5000以上にして挑みましょう。リバースドールを15個持ち込み、キャラクタの戦闘不能を予期すると戦闘中にリバースドールを装備する先方も有効です。
          </p>
          <Information type="warning" title="ネレイドに負けた場合">
            ネレイドに負けた場合は全滅にはならず、HPが1の状態でダンジョンの外へ戻ります。アイテムや獲得した経験値も獲得した状態なので再挑戦を頑張りましょう。1階層からやり直しとなりますが途中で入手できる強力な装備品を獲得できるのは強みです。特にペルシャブーツは全属性耐性30%アップするのでネレイド戦にあると非常に強力です。
          </Information>
        </div>
        <h3>ネレイド勝利後</h3>
        <ResponsiveImage src="/extras/nereid-h-gauntlet.jpg" />
        <p>
          ネレイド撃破後はキラキラ点滅している椅子を調べると「Hガントレット」を入手できます。これまでのボスと違い直接調べないと入手できないためご注意ください。
          反対方向に進むとダンジョンを脱出でき、ネレイドの迷宮の攻略が完了です。
        </p>
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
