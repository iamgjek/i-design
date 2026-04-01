# i-design Website

i-design 官方網站與作品頁，使用 React + Vite 建置，並提供表單寄信 API（Resend）。

## 專案重點

- 雙頁面入口：
  - 首頁：`/`
  - Portfolio（關於我）：`/portfolio`
- 多語系支援：`zh-TW` / `en` / `zh-CN`
- SEO 動態更新：依目前頁面自動切換 title、description、OG、Twitter metadata
- 聯絡表單整合 Resend（透過 `server/api.js`）

## 技術棧

- Frontend: React 19, Vite, TypeScript
- i18n: i18next, react-i18next
- Backend API: Express, CORS, dotenv
- Email Service: Resend

## 快速開始

### 1) 安裝依賴

```bash
npm install
```

### 2) 設定環境變數

在專案根目錄建立 `.env`：

```env
RESEND_API_KEY=re_xxxxxxxxx
PORT=3001
VITE_API_URL=http://localhost:3001
```

> `RESEND_API_KEY` 可在 [Resend API Keys](https://resend.com/api-keys) 取得。

### 3) 啟動專案

**推薦：前後端一起啟動**

```bash
npm run dev:all
```

或分開啟動：

```bash
# terminal 1
npm run dev

# terminal 2
npm run server
```

### 4) 本機網址

- Frontend: `http://localhost:3000`
- API Server: `http://localhost:3001`

## 可用指令

- `npm run dev`：啟動前端開發模式
- `npm run server`：啟動 API 伺服器
- `npm run dev:all`：同時啟動前端 + API
- `npm run build`：打包生產版本
- `npm run preview`：預覽 production build

## 寄信功能說明

- 表單會將姓名、Email、服務項目、專案描述送到 API
- API 透過 Resend 寄信到 `service@i-design.app`
- 若寄送失敗，請先檢查：
  - `.env` 的 `RESEND_API_KEY`
  - API 伺服器是否有啟動
  - Resend 帳戶額度與設定

## 相關文件

- `SETUP.md`：Resend 與環境變數完整設定
- `QUICKSTART.md`：常見連線錯誤快速排查
