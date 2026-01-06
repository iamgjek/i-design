# Resend 郵件服務設置指南

## 步驟 1：取得 Resend API Key

1. 前往 [Resend](https://resend.com) 註冊帳號
2. 登入後，前往 [API Keys](https://resend.com/api-keys) 頁面
3. 點擊 "Create API Key" 創建新的 API Key
4. 複製您的 API Key（格式類似：`re_xxxxxxxxx`）

## 步驟 2：設置環境變數

在專案根目錄創建 `.env` 檔案（如果不存在），並添加以下內容：

```env
# Resend API Key
RESEND_API_KEY=re_xxxxxxxxx

# API Server Port (可選，預設為 3001)
PORT=3001

# Frontend API URL (可選，預設為 http://localhost:3001)
VITE_API_URL=http://localhost:3001
```

**重要：** 請確保 `.env` 檔案已加入 `.gitignore`，不要將 API Key 提交到版本控制系統。

## 步驟 3：安裝依賴

```bash
npm install
```

## 步驟 4：運行應用程式

### 同時運行前端和後端（推薦）

```bash
npm run dev:all
```

### 或分別運行

**終端機 1：前端**
```bash
npm run dev
```

**終端機 2：API 伺服器**
```bash
npm run server
```

## 步驟 5：測試郵件發送

1. 訪問 http://localhost:3000
2. 填寫預約表單
3. 提交表單後，郵件會發送到 `idesign.app2026@gmail.com`

## 注意事項

- 預設的發送地址是 `onboarding@resend.dev`（Resend 提供的測試地址）
- 如需使用自訂域名，請在 Resend 中驗證您的域名
- 驗證域名後，可以將 `server/api.js` 中的 `from` 地址改為您的域名

## 生產環境部署

在生產環境中，請確保：
1. 設置正確的 `RESEND_API_KEY` 環境變數
2. 更新 `VITE_API_URL` 為您的生產 API 伺服器 URL
3. 驗證並使用您的自訂域名作為發送地址

