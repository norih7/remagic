import { createMetaTitle } from "@/utils";
import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import Information from "@/components/Information";
import SectionTitle from "@/components/SectionTitle";
import GuideList from "@/components/GuideList";
import RoundedContainer from "@/components/RoundedContainer";
import RoundedItem from "@/components/RoundedItem";
import Image from "next/image";
import GifPlayer from "@/components/GifPlayer";
import ResponsiveImage from "@/components/ResponsiveImage";

// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "シャンバルーン";
export const metadata = {
  title,
  description:
    "リマスター版対応のテイルズオブエターニア（TOE）攻略。シャンバルーン攻略情報。リッドの称号「キングあんどバルーン」や貴重な「ステップリング」の入手方法、各難易度の制限時間とおすすめの戦法を詳しく紹介。",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />
      <PageSummary>
        シャンバールで行なわれているミニゲーム「シャンバルーン」についての説明です。このイベントではリッドの称号や特殊なアイテムを入手できます。
      </PageSummary>
      <section className="mb-12">
        <SectionTitle>シャンバルーン</SectionTitle>
        <ResponsiveImage src="/subevents/syanballoon-location.jpg" />
        <p>
          シャンバールの噴水フロアにいる老人に話しかけることでシャンバルーンに挑戦することができます。シャンバルーンは特殊な戦闘で、リッドが固定配置された風船を割っていくゲームです。合計5回のコースをクリアすることで報酬を得ることができます。
        </p>
        <p>
          シャンバルーンはストーリー進行で難易度が変化します。インフェリア帰還後には難易度1にチャレンジすることはできなくなりますが、称号は難易度2でも獲得でき、報酬が豪華になっているため問題ありません。
        </p>
        <table>
          <thead>
            <tr>
              <th className="w-[150px]">ストーリー進行</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>セレスティア突入前</td>
              <td>
                <strong>難易度1</strong>
                <ul>
                  <li>1回目クリア: リッドの称号「キングあんどバルーン」</li>
                  <li>2回目以降のクリア: ミックスグミ</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>インフェリアへの帰還後</td>
              <td>
                <strong>難易度2</strong>
                <ul>
                  <li>
                    1回目クリア: リッドの称号「キングあんどバルーン」
                    ※難易度1をクリアしていない場合
                  </li>
                  <li>2回目以降のクリア: ステップリング</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mb-8">
          <Information title="ステップリング">
            <p>
              ステップリングは装備すると戦闘中にバックステップなどの特殊操作ができるようになります。アイテム自体も貴重なものなのでインフェリア帰還後はシャンバルーンに挑戦する価値はあります。
            </p>
            <GuideList
              items={[
                {
                  title: "ステップリングや特殊操作の説明",
                  href: "/systems/buttle",
                },
              ]}
            ></GuideList>
          </Information>
        </div>
        <h3>うちわの入手</h3>
        <p>
          難易度2を2回以上クリアした状態で近くにいるアイちゃんに話しかけるとアイテム「うちわ」を入手できます。これは使用不可能なアイテムでジイニのカジノで高く売れるもの。
        </p>
      </section>
      <section className="mb-12">
        <SectionTitle>難易度2の攻略</SectionTitle>
        <Information type="warning" title="難易度2のシャンバルーンに挑む前に">
          <p>
            シャンバルーンに挑む前にリッドには「エルヴンブーツ」か「ジェットブーツ」を装備させ、烈空斬は100回以上使っておいてください。各種ブーツは戦闘中の移動速度をアップし、列空斬は100回以上使うと空中で発動できるようになります。
          </p>
          <GuideList
            items={[
              {
                title: "エルヴンブーツのアイテム詳細/入手方法はこちら",
                href: "/systems/item/56",
              },
            ]}
          ></GuideList>
        </Information>
        <RoundedContainer>
          <h3 className="text-[1rem]">1回目 / 制限時間3秒</h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-[230px] flex-none">
              <GifPlayer
                src="/subevents/syanballoon/syanballoon_01.gif"
                alt="1回目の攻略動画"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <RoundedItem title="戦法">
                ジャンプ攻撃で左側の2つを破壊し、続けて突きで左奥を破壊。その後はダッシュして右側の2つを斬り攻撃で破壊し、続けて突きで右奥を破壊しましょう。
              </RoundedItem>
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className="text-[1rem]">2回目 / 制限時間4秒</h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-[230px] flex-none">
              <GifPlayer
                src="/subevents/syanballoon/syanballoon_02.gif"
                alt="2回目の攻略動画"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <RoundedItem title="戦法">
                鳳凰天駆でほとんどのボールを破壊し、残りはジャンプ斬りで破壊しましょう。
              </RoundedItem>
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className="text-[1rem]">3回目 / 制限時間6秒</h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-[230px] flex-none">
              <GifPlayer
                src="/subevents/syanballoon/syanballoon_03.gif"
                alt="3回目の攻略動画"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <RoundedItem title="戦法">
                手間と次のボールを斬り、ジャンプ斬りで破壊した後は裂空斬で空中のボールを破壊。そのあとは残ったボールをジャンプ斬りなどで破壊しましょう。
              </RoundedItem>
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className="text-[1rem]">4回目 / 制限時間6秒</h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-[230px] flex-none">
              <GifPlayer
                src="/subevents/syanballoon/syanballoon_04.gif"
                alt="4回目の攻略動画"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <RoundedItem title="戦法">
                裂空斬を2回繰り出してボールを破壊し、残りはジャンプ斬りで破壊しましょう。
              </RoundedItem>
            </div>
          </div>
        </RoundedContainer>
        <RoundedContainer>
          <h3 className="text-[1rem]">5回目 / 制限時間7秒</h3>
          <div className="flex flex-wrap gap-3">
            <div className="w-[230px] flex-none">
              <GifPlayer
                src="/subevents/syanballoon/syanballoon_05.gif"
                alt="5回目の攻略動画"
              />
            </div>
            <div className="flex-1 min-w-[250px]">
              <RoundedItem title="戦法">
                まずは左奥にあるボールを破壊して、右側にダッシュしてジャンプ斬りで複数のボールを破壊。最後に空中で裂空斬を発動して一番高いボールを破壊しましょう。空中で裂空斬を発動するには使用回数が100回以上必要。
              </RoundedItem>
            </div>
          </div>
        </RoundedContainer>
      </section>
    </article>
  );
}
