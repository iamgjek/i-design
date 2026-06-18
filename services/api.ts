import { ContactFormData } from '../types';

/**
 * 使用 Resend API 發送預約申請郵件到 service@i-design.app
 */
export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    // 開發環境走 Vite proxy；Vercel 生產環境走同網域 /api
    const apiUrl = import.meta.env.VITE_API_URL ?? '';
    
    let response: Response;
    try {
      response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (fetchError: any) {
      // 處理網路錯誤（連接被拒絕等）
      const errorMsg = fetchError?.message || String(fetchError);
      if (errorMsg.includes('Failed to fetch') || errorMsg.includes('ERR_CONNECTION_REFUSED') || errorMsg.includes('NetworkError')) {
        throw new Error('無法連接到 API 伺服器。\n\n請確保已運行 API 伺服器：\n1. 運行 `npm run dev:all`（同時運行前端和後端）\n2. 或分別運行 `npm run dev` 和 `npm run server`');
      }
      throw fetchError;
    }

    const responseText = await response.text();

    if (!response.ok) {
      let message = '';
      try {
        const errorResult = JSON.parse(responseText);
        message = errorResult.error || errorResult.details || '';
      } catch {
        // Vercel 等平台有時回傳純文字錯誤頁
      }

      if (!message) {
        message = import.meta.env.DEV
          ? `HTTP ${response.status}: ${response.statusText || '請求失敗'}\n\n請確保已運行 API 伺服器：\n1. 運行 npm run dev:all\n2. 或分別運行 npm run dev 和 npm run server`
          : '表單提交失敗，請稍後再試或直接來信 service@i-design.app';
      }

      throw new Error(message);
    }

    const result = JSON.parse(responseText);

    if (!result.success) {
      throw new Error(result.error || '郵件發送失敗');
    }

    console.log('郵件發送成功:', result);
    return true;
  } catch (error: any) {
    console.error('提交表單時發生錯誤:', error);
    throw error;
  }
};