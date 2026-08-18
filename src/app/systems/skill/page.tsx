import SetPageTitle from "@/components/SetPageTitle";
import PageSummary from "@/components/PageSummary";
import SectionTitle from "@/components/SectionTitle";
import SectionHeader from "@/components/SectionHeader";
import GuideList from "@/components/GuideList";
import Image from "next/image";
import Information from "@/components/Information";
// 💡 念のため、このページは完全に静的（SSG）であることを明示します
export const dynamic = "force-static";

const title = "特技の習得について";
export const metadata = {
  title,
  description:
    "リマスター版に対応したテイルズオブエターニア（TOE）の攻略ガイド。リッド・ファラの専用レベル（斬・突・拳・蹴）や技の使用回数、キール・メルディのクレーメルケイジ（フリンジ）による晶霊術習得、チャット・フォッグのサブイベント習得まで、キャラクターごとの多彩なスキル習得システムを徹底解説。",
};
export default async function HomePage() {
  return (
    <article>
      <SetPageTitle title={title} />

      <PageSummary>
        <p>
          『テイルズ オブ
          エターニア』における、各種スキルや晶霊術のアンロック方法について解説します。本作ではキャラクターのレベルアップだけですべての技を覚えるわけではなく、各人固有の育成システムや習得手順が用意されているため、詳細をあらかじめ把握しておきましょう。
        </p>
      </PageSummary>

      <section className="mb-12">
        <SectionTitle type="system">
          リッドおよびファラの特技習得システム
        </SectionTitle>
        <div className="mb-8">
          <h3>専用レベル（斬り・突き / 拳・蹴り）と確認方法</h3>
          <p>
            前衛として活躍するリッドとファラには、通常のレベルとは別に専用の熟練ステータス（リッドは「斬り／突き」、ファラは「拳／蹴り」）が設定されており、これが高度な特技や奥義を覚えるための前提条件となります。この専用レベルは、戦闘中に対応した通常攻撃のアクションを繰り返すことで経験値が溜まり上昇していきます。例えば、戦闘で斬撃ばかりを偏って振っていると突きレベルがなかなか上がらず、特定の技が覚えられないといった事態が起きるため意識的に使い分けましょう。
          </p>
          <p>
            現在値は、リッドやファラの個別ステータス画面からおよその伸び具合を確認可能です。レベル表示は専用のゲージ進行形式になっており、最大値はLv30に達します。（添付画像は斬Lv30、突Lv28の状態）
          </p>
          <Image
            src="/systems/skill-level-rid.jpg"
            alt="リッドの斬り・突きレベル表示画面"
            width={300}
            height={200}
            className="mb-2"
          />
          <p>
            また、戦闘勝利時のリザルト画面でも、通常のレベルアップ表示に加えて専用レベルの成長がテロップで通知されます。通常レベルなら「LEVEL
            UP」、斬り熟練度なら「SLASH UP」といった表記で知らせてくれます。
          </p>
          <Image
            src="/systems/skill-level-buttle.jpg"
            alt="戦闘終了時の熟練度アップ表示"
            width={300}
            height={200}
            className="mb-2"
          />
        </div>
        <div className="mb-8">
          <h3>特定の技の使用回数による条件</h3>
          <p>
            「虎牙連斬」のような上位の派生技をアンロックするためには、ベースとなる「斬り／突き」レベルの基準を満たすだけでなく、「前段階の技（例：虎牙破斬）を150回以上使用していること」といった回数制限もクリアする必要があります。技同士の派生系統を予め頭に入れておけば、無駄のない効率的な回数稼ぎが可能です。各スキルの詳細ページにて、要求される専用レベルや使用回数の目安を網羅していますので合わせてご活用ください。
          </p>
          <GuideList
            items={[
              {
                title: "リッドの特技・奥義一覧はこちら",
                href: "/skills/rid",
              },
              {
                title: "ファラの特技一覧はこちら",
                href: "/skills/farth",
              },
            ]}
          />

          <Information title="特技画面の「未習得技」に表示される青字のヒントについて">
            <p>
              メニューの特技一覧では、まだ覚えていないスキルが青文字で載っていることがあります。これは「習得まであと一歩のところまで迫っている（または主要条件の大部分を満たしている）」状態を示しています。例えば下記の画像のようなケースでは、必要な斬り・突きの数値目標には達しているものの、前提となる「閃空裂破」の累計使用回数が250回に届いていないことを意味しています。
            </p>
            <Image
              src="/systems/skill-level-unreach.jpg"
              alt="未習得の特技が青字で表示されている画面"
              width={300}
              height={200}
              className="mb-2"
            />
          </Information>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">
          キールおよびメルディの晶霊術習得システム
        </SectionTitle>
        <div className="mb-8">
          <h3>晶霊術のアンロックと大晶霊のレベル仕様</h3>
          <p>
            後衛の要であるキールとメルディは、C.ケイジ（クレーメルケイジ）に組み込んだ「フリンジ（組み合せ設定）」を介して新しい晶霊術を次々と習得していきます。フリンジで高位の術を引っ張り出すには、内包させる大晶霊の組み合わせパターンと、それぞれの育成レベルが条件になります。
          </p>
          <p>
            大晶霊たちは戦闘に参加させることで独自の経験値を積み上げてレベルアップしますが、ゲーム中盤以降に新しく契約を結ぶ「レム」などの大晶霊は初期状態のLv0からスタートするため、意識して育成しないとレベルが遅れがちになりやすい点に注意してください。各お供のレベルや蓄積経験値は、C.ケイジメニュー内の「晶霊」項目からいつでもチェックできます。
          </p>
          <Image
            src="/systems/skill-level-magic.jpg"
            alt="C.ケイジの晶霊ステータスとレベル確認画面"
            width={300}
            height={200}
            className="mb-8"
          />
          <div className="mb-8">
            <h3>育成アイテムの活用とフリンジ実行の重要性</h3>
            <p>
              C.ケイジ内の「アイテム」タブでは、「すいしょうせき」をはじめとする大晶霊専用のレベルアップ用強化アイテムを直接使用して成長を促すことができます。これらのレアアイテムは料理に失敗した際の副産物や、各地のダンジョンに隠された宝箱から手に入ります。レベルアップだけでなく、大晶霊の「活性値」を最大値の10まで高めることで、戦闘中に直接召喚アタックを発動できるようになるメリットもあります。
            </p>
            <p>
              こうしてメルディやキール側のC.ケイジへ大晶霊を適切に割り振ったうえで「フリンジ」を実行すると、条件をみたしている術が一斉にひらめきます。例えば「イフリート」と「ヴォルト」を高レベルでセットしてフリンジを行うと、強力な上級術「エクスプロード」などを習得できます。具体的な組み合わせと要求レベルは、専用の晶霊術リストにまとめていますので参考にしてください！
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Image
                src="/systems/skill-level-magic-item.jpg"
                alt="大晶霊の育成アイテム使用画面"
                width={300}
                height={200}
                className="mr-1"
              />
              <Image
                src="/systems/skill-level-magic-fringe.jpg"
                alt="フリンジ実行画面"
                width={300}
                height={200}
              />
            </div>
            <Information
              type="warning"
              title="フリンジのボタン押し忘れにご用心"
            >
              大晶霊の組み合わせや入れ替えを終えた後、メニュー内で「フリンジ」を実際に実行しないと新しい術は覚えられません。メンバー変更後に術が増えていないときはここを忘れがちですので確認しましょう。
            </Information>
          </div>
          <div className="mb-8">
            <GuideList
              items={[
                {
                  title: "習得可能なすべての晶霊術一覧はこちら",
                  href: "/skills/magic",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <SectionTitle type="system">
          チャットおよびフォッグの特技習得システム
        </SectionTitle>
        <div className="mb-8">
          <p>
            チャットとフォッグについては、専用のレベルや回数成長ではなく、世界各地で発生する特定のサブイベントを攻略していくことで強力な特技を次々に覚えていきます。それぞれのスキル性能や発生手順の詳細は、以下の各ガイドページを参照してください。
          </p>
        </div>
        <div className="mb-8">
          <GuideList
            items={[
              {
                title: "チャットの特技一覧リスト",
                href: "/skills/chat",
              },
              {
                title: "チャットの特技習得サブイベント攻略",
                href: "/subevents/skill-chat",
              },
              {
                title: "フォッグの特技一覧リスト",
                href: "/skills/fog",
              },
              {
                title: "フォッグの特技習得サブイベント攻略",
                href: "/subevents/skill-fog",
              },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
