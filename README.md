<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-supabase-3FCF8E.svg?logo=mysql&style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/-postgresql-4169E1.svg?logo=postgresql&style=for-the-badge&logoColor=white">
  <img src="https://img.shields.io/badge/-drizzle-C5F74F.svg?logo=postgresql&style=for-the-badge&logoColor=black">
  <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=for-the-badge">
  <img src="https://img.shields.io/badge/-githubactions-FFFFFF.svg?logo=github-actions&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)


<!-- プロジェクト名を記載 -->

## プロジェクト名

Next.js、Supabase、PostgreSQL、drizzle、stripe検証プロジェクト

<!-- プロジェクトについて -->

## プロジェクトについて
- Next.js、Supabase、PostgreSQL、drizzle、stripeの動作を確認し、プロダクト開発のベースとなる技術を検証することが目的のプロジェクト
- ユーザー登録、ログイン、ユーザー情報更新、パスワード変更、アカウント削除、Stripeによるサブスク購入、Reactアプリ間のState連携といった機能の検証を行う
- ログイン後stripeテスト環境からテスト用クレジットカードでサブスク購入することでプレイすることが可能になる
- バニラJSで作成されたじゃんけんゲームは、React＋Jotaiで動くように改修を行った
- PHP/Laravel上で作成されたクイズゲームは、React/Next.js/drizzle/Suppabase(PostgresSQL)で動作するように改修を行った


<!-- プロジェクトの概要を記載 -->

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Postgres              | 3.4.5      |
| drizzle               | 0.39.1     |
| Node.js               | 22.13.1    |
| React                 | 19.0.3     |
| Next.js               | 15.2.0     |
| stripe                | 17.6.0     |
| TypeScript            | 5.7.3      |
| TailwindCSS           | 4.0.3      |

その他のパッケージのバージョンは pnpm-lock.yaml を参照してください



<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

❯ tree -a -I "node_modules|.next|.git|static" -L 2
<pre>
.
├── .env
├── .env.example
├── .gitignore
├── LICENSE
├── README.md
├── app
│   ├── (dashboard)
│   ├── (login)
│   ├── api
│   ├── atoms
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── applicationRelation.md
├── components
│   ├── activity.tsx
│   ├── deleteAccount.tsx
│   ├── password.tsx
│   ├── ui
│   └── userinfo.tsx
├── components.json
├── docker-compose.yml
├── drizzle.config.ts
├── lib
│   ├── auth
│   ├── db
│   ├── payments
│   └── utils.ts
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── .DS_Store
│   ├── img
│   └── sound
└── tsconfig.json
</pre>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### コンテナの作成と起動

<pre>
pnpm install
pnpm db:setup
pnpm db:migrate
pnpm db:seed
pnpm dev
</pre>

### 動作確認

http://127.0.0.1:3000 にアクセスできるか確認
アクセスできたら成功

下記テストユーザーでログイン
User: test@test.com
Password: admin123

### コンテナの停止

以下のコマンドでコンテナを停止することができます

ctrl + c

### 環境変数の一覧

| 変数名                 | 役割                                      | デフォルト値                       | DEV 環境での値                           |
| ---------------------- | ----------------------------------------- | ---------------------------------- | ---------------------------------------- |
| POSTGRES_URL           | Postgres のURL（Docker で使用）          | postgres://postgres:postgres@localhost:54322/postgres |                                          |
| BASE_URL               | pnpm dev 実行後のアプリケーション実行URL   | http://localhost:3000              |                                          |
| AUTH_SECRET            | Supabaseのシークレットキー              |                                     |                                          |
| STRIPE_SECRET_KEY      | Stripeのシークレットキー                |                                    |                                          |
| STRIPE_WEBHOOK_SECRET  | StripeのWebhook用シークレットキー       |                                     |                                          |


### コマンド一覧
pnpm install

pnpm db:setup

pnpm db:migrate

pnpm db:seed

pnpm dev

| Make                | 実行する処理                                                            | 元のコマンド                                                                               |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| pnpm install       | 不足しているモジュールのインストールを実施する                                 |                                                                                          |
| pnpm db:setup        | PostgresSQLをDocker上にインストールした上で54322ポートで実行                   |                                                                                            |
| pnpm db:migrate      | 追加されたDB情報を統合                                                  |                                                                                          |
| pnpm db:seed          | seedファイルを実行してDB環境に初期テーブルを作成し、初期ユーザー等のテストデータの挿入              |                                                                                           |
| pnpm dev             | 開発環境の実行                                                        |                                                                                           |

<p align="right">(<a href="#top">トップへ</a>)</p>


## トラブルシューティング

### zsh: command not found: pnpm

pnpmのインストールが必要

### pnpm db:setupが失敗する

既存のPostgreSQLコンテナが競合している可能性が高いため、以下のステップを実行

1. 使用していない古いPostgreSQLコンテナを削除する

```bash
docker rm next_saas_starter_postgres fullstack-eyesonyou-db-1
```

2. 不要なPostgreSQLイメージも削除する

```bash
docker rmi postgres:16.4-alpine postgres:14
```

3. その後、新しいSupabaseアプリケーションのセットアップ
```bash
pnpm db:setup
# 以降のコマンドを順次実行
```


<p align="right">(<a href="#top">トップへ</a>)</p>
