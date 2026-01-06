import { ContactFormData } from '../types';

/**
 * 使用 Resend API 發送預約申請郵件到 idesign.app2026@gmail.com
 */
export const submitContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    // 開發環境使用 Vite proxy（/api），生產環境使用完整 URL
    const apiUrl = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : 'http://localhost:3001');
    
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

    // 處理 HTTP 錯誤
    if (!response.ok) {
      // 嘗試解析錯誤訊息
      try {
        const errorResult = await response.json();
        throw new Error(errorResult.error || `HTTP ${response.status}: ${response.statusText}`);
      } catch {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    }

    const result = await response.json();

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