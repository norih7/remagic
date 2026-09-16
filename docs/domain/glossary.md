# 用語集

## 1. 作品・世界

### テイルズ オブ エターニア（TOE）

このサイトが攻略対象として扱う作品。サイト内では「エターニア」と略記されることがある。リマスター版対応を前提にした説明が多いが、発売後の仕様確認が必要な項目もある。

根拠: `src/app/layout.tsx`、`src/constants/index.ts`

### RE:MAGIC

このリポジトリの攻略サイト名。カテゴリは「プレイガイド」「ストーリー」「特技/晶霊術」「システム/データ」「サブイベント」「隠しマップ」「やりこみ」に分かれる。

根拠: `src/constants/index.ts`、`src/components/SiteLayout/index.tsx`

### インフェリア / セレスティア

ストーリー、レシピ、レンズなどを分類する2つの世界。データ上ではそれぞれ `inferior`、`celestia` として表現され、どちらにも属さないものは `other` に分類される。

根拠: `src/lib/db.ts`、`src/data/recipes.json`、`src/data/lenses.json`

### 大晶霊

ストーリー進行やサブイベントで契約し、晶霊術の組み合わせに関係する存在。ウンディーネ、シルフ、イフリート、セルシウス、シャドウ、マクスウェルなどが記事に登場する。

根拠: `src/app/stories`、`src/app/extras`、`src/app/subevents/secret-spirits`

### 晶霊術

キールとメルディが扱う術。大晶霊の組み合わせとレベルをもとに、フリンジによって習得する。

根拠: `src/app/skills/magic/page.tsx`、`src/app/systems/skill/page.tsx`

### クレーメルケイジ（C.ケイジ）

大晶霊を組み込むための仕組み。サイトの記事では、キール・メルディの晶霊術習得とフリンジの説明に使われる。

根拠: `src/app/systems/skill/page.tsx`

### フリンジ

クレーメルケイジに設定した大晶霊の組み合わせから、条件を満たす晶霊術を習得する操作・仕組み。設定後にフリンジを実行しないと術を習得できない点が攻略上の注意点。

根拠: `src/app/systems/skill/page.tsx`、`src/constants/index.ts`

## 2. 戦闘・成長

### セミオート / マニュアル操作

戦闘時の操作モード。セミオートは標準的な操作方法、マニュアルは攻撃やジャンプなどの操作をプレイヤーが直接行うモードとして説明されている。

### マニュアルのしょ

マニュアル操作を選択可能にするアイテム。レグルス道場で入手でき、設定画面または戦闘中の操作でマニュアルへ切り替えられる。リマスター版では初期解放の可能性があるため、仕様は要確認。

根拠: `src/app/systems/buttle/page.tsx`、`src/app/stories/guide1/page.tsx`

### 特技 / 奥義

主に前衛キャラクターが使う技。リッドやファラには専用レベルがあり、技の使用回数などが習得条件になる場合がある。

根拠: `src/app/skills/rid/page.tsx`、`src/app/skills/farth/page.tsx`、`src/app/systems/skill/page.tsx`

### 斬・突・拳・蹴レベル

リッドとファラに設定された専用の熟練ステータス。リッドは斬・突、ファラは拳・蹴に対応し、通常攻撃などで上昇する。特技や奥義の習得条件に使われる。

根拠: `src/app/systems/skill/page.tsx`、`src/app/skills/rid/page.tsx`、`src/app/skills/farth/page.tsx`

### 技の使用回数

特定の特技・奥義の習得条件に使われる回数。例として、技を150回以上使う条件が記事内に記載されている。

根拠: `src/app/skills/rid/page.tsx`、`src/constants/index.ts`

### 属性

火、水、風、地、氷、雷、光、闇、元、時など、攻撃や耐性に関係する分類。サイト内では `elementMap` が表示名と色を管理する。

根拠: `src/constants/index.ts`、`src/data/items.json`

### ガルド

ゲーム内通貨。敵データには獲得ガルドが `gald` として保存され、セフィラの装備効果として獲得量2倍が説明されている。

根拠: `src/lib/db.ts`、`src/app/systems/rune/page.tsx`

## 3. アイテム・装備・変化

### アイテム

使用アイテム、武器、防具、アクセサリ、イベントアイテム、金銭などをまとめたデータ単位。`items.json` では購入可否、ドロップ可否、宝箱・イベント入手可否、価格、効果などを保持する。

根拠: `src/lib/db.ts`、`src/data/items.json`

### 武器 / 防具 / アクセサリ

装備品の分類。武器・防具一覧のほか、特殊効果やルーンボトル変化のページからも参照される。スマッシュマントやセフィラはアクセサリとして扱われる。

根拠: `src/app/systems/weapon-data`、`src/app/systems/defense-data`、`src/app/systems/special-effect`、`src/data/items.json`

### ドロップ

敵を倒したときに得られる可能性があるアイテム。敵とアイテムの対応は `enemyItems.json` にあり、確率は `probability` として保持される。

根拠: `src/lib/db.ts`、`src/data/enemyItems.json`

### スマッシュマント

アイテムドロップ率を上げるアクセサリ。グリップソード探しのサブイベントで入手でき、複数装備時の効果についても攻略記事で説明されている。

根拠: `src/app/subevents/grip-sword/page.tsx`、`src/app/guides/first/page.tsx`、`src/data/items.json`

### シーブスマント / エルヴンマント

ルーンボトル変化の流れでスマッシュマントにつながるマント系装備。シーブスマントは序盤の敵からのドロップ情報がある。

根拠: `src/app/systems/rune/page.tsx`、`src/data/rune.json`

### セフィラ

装備すると戦闘で獲得するガルドが2倍になるアクセサリ。いざないの密林で入手するリバースドールにルーンボトルを使うことで序盤から作成できる。

根拠: `src/app/guides/first/page.tsx`、`src/app/stories/guide2/page.tsx`、`src/data/rune.json`、`src/data/items.json`

### リバースドール

いざないの密林で入手でき、ルーンボトルでセフィラへ変化させるアイテム。セフィラ入手までの素材となる。

根拠: `src/app/stories/guide2/page.tsx`、`src/data/rune.json`

### ルーンボトル

アイテムを別のアイテムへ変化させるためのアイテム。変化前後、変化率、説明、推奨度などが `rune.json` に保存されている。

根拠: `src/app/systems/rune/page.tsx`、`src/data/rune.json`

## 4. 料理・レシピ

### 料理

戦闘や探索中の回復・状態回復などに使う仕組み。料理には熟練度があり、成功率の上昇やマスター料理の習得につながる。

根拠: `src/app/guides/first/page.tsx`、`src/app/systems/recipe/page.tsx`

### オート料理

戦闘後などに条件に応じて料理を自動使用する仕組み。回復の手間を減らし、長いダンジョンでの継続攻略を助ける。

根拠: `src/app/guides/first/page.tsx`

### ワンダーシェフ

町やストーリー進行中の特定地点に現れ、料理を教える存在。記事では、出現タイミング、場所、必要な食材とあわせて扱われる。

根拠: `src/app/systems/recipe/page.tsx`、`src/app/stories/guide2/page.tsx`、`src/app/stories/guide3/page.tsx`

### レシピ

料理の名前、種類、世界、効果、説明を持つデータ。通常料理は `normal`、マスター料理は `master` として分類される。

根拠: `src/lib/db.ts`、`src/data/recipes.json`

### マスター料理

通常料理とは別に、特殊な効果や習得条件を持つ料理。専用ページで習得条件とおすすめ料理を説明する。

根拠: `src/app/systems/master-recipe/page.tsx`、`src/data/recipes.json`

## 5. 収集・場所・イベント

### レンズ

町やダンジョンの特定地点で入手する収集物。一定数を集めると、シャンバールやティンシアのイレーヌから報酬を受け取れる。データでは世界、場所、備考と関連づけられる。

根拠: `src/app/subevents/lens/page.tsx`、`src/lib/db.ts`、`src/data/lenses.json`

### ロケーション

町・ダンジョンなどの入手場所。アイテム、レシピ、レンズ、サブイベントとの関連を持つ。データ上の正式なマスタは `locations`。

根拠: `src/db/schema.ts`、`src/data/locations.json`

### サブイベント

ストーリー本編とは別に発生するイベント。装備、称号、特技、料理、ミニゲーム報酬などの入手条件になる。イベントによってはストーリー進行に期限がある。

根拠: `src/app/subevents`、`src/data/subEvents.json`、`src/data/locationSubEvents.json`

### 取り逃がし / 時限要素

特定の時期を過ぎると回収・発生が難しくなる要素。レンズ、称号、サブイベント、特技習得などが対象としてガイド化されている。

根拠: `src/app/guides/missable`、`src/app/subevents`

### 隠しマップ / 隠しダンジョン

通常のストーリー進行だけでは見つけにくい場所や、特定条件で出現する場所。闇の洞窟、沈没船、アイフリードの墓、ファロース教会地下、きらめきの塔などがある。

根拠: `src/constants/index.ts`、`src/app/extras`

### やりこみ

レベル上げ、ステータスアップ薬草、アイテム盗み、おすすめ装備など、クリア後や効率重視の攻略情報をまとめるカテゴリ。

根拠: `src/constants/index.ts`、`src/app/deeps`

## 6. サイト内のデータモデル

### マスタデータ

`items`、`locations`、`shops`、`recipes`、`lenses` など、各エンティティの基本定義を持つテーブル・JSONデータ。

根拠: `src/db/schema.ts`、`src/data`

### 中間テーブル / リレーション

多対多の関係を表すデータ。`item_shops` はアイテムとショップ、`location_items` は場所とアイテム、`location_recipes` は場所とレシピ、`location_lenses` は場所とレンズを結びつける。

根拠: `src/db/schema.ts`

### `Item`

アプリケーション側のアイテム型。`id`、`name`、`type`、効果、購入・売却価格、入手経路、属性などを持つ。

根拠: `src/lib/db.ts`

### `LocationItems` / `LocationRecipes` / `LocationLenses`

場所別の取得情報を画面へ渡すための型。場所名、対象名、ID、備考などを持つ。

根拠: `src/lib/db.ts`、`src/components/LocationItems`、`src/components/LocationRecipes`、`src/components/LocationLenses`

### `EnemyItems`

敵とドロップアイテムの関連を表す型。敵ID、敵名、アイテムID、アイテム名、種類、ドロップ確率を持つ。

根拠: `src/lib/db.ts`、`src/data/enemyItems.json`

### カテゴリリンク

カテゴリや個別ページのタイトル、パス、説明、SEO説明、画像をまとめた定数。サイトナビゲーションとページメタデータの生成に使われる。

根拠: `src/constants/index.ts`、`src/app/layout.tsx`

## 7. 実装上の注意・要確認

- `src/lib/db.ts` の `ememys`、型名 `Enemys`、ファイル名 `enemys.json` は、実装上の既存表記として記録する。一般的な英語表記の `enemies` へ変更する場合は参照箇所全体の更新が必要。
- `Item` の `isTresure` は既存のプロパティ名。綴りを直す場合はJSONと利用箇所の互換性を確認する。
- `src/db/schema.ts` にはゲームデータの一部（敵、スキル、サブイベントなど）が定義されず、JSONを直接読み込むデータもある。DBスキーマがリポジトリ全体の唯一のドメイン定義ではない。
- リマスター版のマニュアル操作やサブイベント仕様については、記事内に「予想」「要確認」と読める記述があるため、確定情報として扱わない。
- この用語集は現在のコードとデータから整理したもの。ゲーム内の正式な仕様説明よりも、サイトが現在どう分類・表示しているかを優先している。
