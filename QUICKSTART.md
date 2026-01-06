# 快速啟動指南

## 解決 ERR_CONNECTION_REFUSED 錯誤

這個錯誤表示 API 伺服器沒有運行。請按照以下步驟操作：

### 步驟 1：安裝依賴

```bash
npm install
```

### 步驟 2：設置環境變數

在專案根目錄創建 `.env` 檔案：

```env
RESEND_API_KEY=your_resend_api_key_here
PORT=3001
```

**取得 Resend API Key：**
1. 前往 https://resend.com/api-keys
2. 創建新的 API Key
3. 複製並貼到 `.env` 檔案中

### 步驟 3：啟動應用程式

**方法 1：同時運行前端和後端（推薦）**

```bash
npm run dev:all
```

這會同時啟動：
- 前端開發伺服器：http://localhost:3000
- API 伺服器：http://localhost:3001

**方法 2：分別運行**

開啟兩個終端機：

**終端機 1：**
```bash
npm run dev
```

**終端機 2：**
```bash
npm run server
```

### 步驟 4：測試

1. 訪問 http://localhost:3000
2. 填寫預約表單
3. 提交表單
4. 檢查 `idesign.app2026@gmail.com` 是否收到郵件

## 常見問題

### Q: 仍然看到 ERR_CONNECTION_REFUSED？

**A:** 請確認：
- API 伺服器正在運行（檢查終端機是否有 "API 伺服器運行在 http://localhost:3001" 訊息）
- 端口 3001 沒有被其他程式佔用
- `.env` 檔案中的 `RESEND_API_KEY` 已正確設置

### Q: 如何確認 API 伺服器正在運行？

**A:** 在瀏覽器中訪問 http://localhost:3001/api/send-email（應該會看到錯誤，因為需要 POST 請求，但這表示伺服器正在運行）

### Q: 郵件發送失敗？

**A:** 請確認：
- Resend API Key 正確且有效
- 已檢查 Resend 控制台是否有錯誤訊息
- 網路連線正常

## 需要幫助？

請查看 `SETUP.md` 獲取更詳細的設置說明。

