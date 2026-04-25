# 株式会社本質 コーポレートサイト

秋田県大館市・東京銀座を拠点とする株式会社本質のコーポレートサイトです。

## ファイル構成

```
honshitsu_site_v1/
├── index.html                  # トップページ
├── company.html                # 会社概要（理念・代表メッセージ含む）
├── news.html                   # お知らせ
├── contact.html                # お問い合わせ
├── seminar.html                # AIセミナー定期開催
├── download.html               # 資料ダウンロード
├── services/
│   ├── ai/
│   │   ├── index.html          # AI活用 大カテゴリページ
│   │   ├── training.html       # AI研修
│   │   ├── support.html        # AI活用支援（Claude実装伴走）
│   │   └── development.html    # 受託開発
│   └── dx/
│       └── index.html          # DX伴走支援（スタブ）
├── assets/
│   ├── css/style.css           # 共通CSS
│   ├── js/main.js              # 共通JS
│   └── images/
│       ├── ceo_wada.jpg        # 代表写真（要追加）
│       └── README.txt
└── README.md
```

## ローカル確認

`index.html` をブラウザで開けばOKです。

## GitHub Pages へのデプロイ

1. このフォルダをGitHubリポジトリにpush
2. リポジトリの Settings → Pages
3. Source を `Deploy from a branch` にし、`main` ブランチの `/ (root)` を選択
4. 数分後、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます

## 編集のポイント

- 文言の修正は各HTMLファイルを直接編集
- 配色・フォント・レイアウトの調整は `assets/css/style.css` の `:root` 変数や各セクションのスタイルから
- 代表写真は `assets/images/ceo_wada.jpg` として配置すれば自動で表示
- ロゴはSVGとして全ファイルに埋め込み済み（外部ファイル不要）

## バージョン

- v1（2026.04） : 初版 / AI活用ページ群（4枚）+ トップページ + 各種スタブ
- v1.1（2026.04） : 会社概要に理念・代表メッセージ統合 / AIセミナー定期開催ページ追加
- v1.2（2026.04） : 資料ダウンロードページ追加（資料は順次追加予定）
- v1.3（2026.04） : SEO基本設定（OGP / favicon / sitemap.xml / robots.txt / canonical / JSON-LD）

## SEO設定済みの内容

- **favicon.svg** : ブラウザタブのアイコン（ロゴSVG）
- **OGP / Twitter Card** : SNSシェア時の見た目（ogp.png 1200x630）
- **canonical URL** : 各ページに重複コンテンツ対策
- **sitemap.xml** : 検索エンジン向けサイト構成図
- **robots.txt** : クローラー向けの案内
- **JSON-LD** : index.html / company.html に組織情報の構造化データ

## 公開後にやること（追加SEO）

1. **Google Search Console** に登録 → sitemap.xml を送信
2. **Google Analytics 4 (GA4)** を設置（必要なら別途依頼）
3. **Bing Webmaster Tools** にも登録（任意）

## カスタムドメインに切り替えるとき

GitHub Pages のデフォルトURL（`tatsukowada-dot.github.io/honshitsu-website`）から `www.honshitsu.tech` 等に切り替える際は、以下のファイル内のURLを一括置換してください：

- `sitemap.xml`
- `robots.txt`
- 全HTMLファイル内の `canonical` / `og:url` / `og:image` / `twitter:image` / JSON-LD のURL

VS Codeなどで `tatsukowada-dot.github.io/honshitsu-website` を `www.honshitsu.tech` に一括置換すればOKです。

## 資料ダウンロードページの運用方法

`download.html` は資料が「準備中」の状態で公開されています。実際のPDFを準備したら、以下の手順で公開できます：

1. PDF を `assets/files/` フォルダに配置（例：`assets/files/ai-support-service-guide.pdf`）
2. `download.html` の該当カードを編集：
   - `<a href="#" class="dl-button disabled">準備中</a>` を
   - `<a href="assets/files/ai-support-service-guide.pdf" class="dl-button" download>ダウンロード →</a>` に変更
3. 同じカードの `<span class="dl-status coming">準備中</span>` を削除（または `<span class="dl-status">PDF · 約2MB</span>` 等に変更）

