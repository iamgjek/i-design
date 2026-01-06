<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1iUe4D60H0zatHU4ismASeY5162otDwfU

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. 設置環境變數：
   - 複製 `.env.example` 並創建 `.env` 檔案
   - 到 [Resend](https://resend.com/api-keys) 取得您的 API Key
   - 在 `.env` 檔案中設置 `RESEND_API_KEY=your_api_key_here`

3. 運行應用程式：
   
   **選項 1：同時運行前端和後端（推薦）**
   ```bash
   npm run dev:all
   ```
   
   **選項 2：分別運行**
   ```bash
   # 終端機 1：運行前端
   npm run dev
   
   # 終端機 2：運行 API 伺服器
   npm run server
   ```

4. 訪問應用程式：
   - 前端：http://localhost:3000
   - API 伺服器：http://localhost:3001

## 功能說明

- 預約表單會透過 Resend API 發送郵件到 `idesign.app2026@gmail.com`
- 郵件包含客戶的姓名、電子郵件、諮詢服務和專案描述
- 回覆郵件會直接發送到客戶的電子郵件地址
