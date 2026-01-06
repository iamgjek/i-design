import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();

// 啟用 CORS 和 JSON 解析
app.use(cors());
app.use(express.json());

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// 郵件發送端點
router.post('/send-email', async (req, res) => {
  try {
    const { name, email, service, description } = req.body;

    // 驗證必要欄位
    if (!name || !email || !service || !description) {
      return res.status(400).json({ 
        error: '缺少必要欄位',
        success: false 
      });
    }

    // 發送郵件到 idesign.app2026@gmail.com
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // 您需要先在 Resend 驗證您的域名
      to: 'idesign.app2026@gmail.com',
      subject: `新的預約申請 - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #00f0ff;">
          <h2 style="color: #00f0ff; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">
            新的預約申請
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong>姓名：</strong> ${name}</p>
            <p><strong>電子郵件：</strong> ${email}</p>
            <p><strong>諮詢服務：</strong> ${service}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #1a1a1a; border: 2px solid #444444;">
            <h3 style="color: #ffffff; margin-top: 0;">專案描述：</h3>
            <p style="color: #cccccc; white-space: pre-wrap;">${description}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #444444; color: #cccccc; font-size: 12px;">
            <p>此郵件由 i-design 網站預約表單自動發送</p>
          </div>
        </div>
      `,
      replyTo: email, // 設定回覆地址為客戶的 email
    });

    if (error) {
      console.error('Resend 錯誤:', error);
      return res.status(500).json({ 
        error: '郵件發送失敗',
        details: error.message,
        success: false 
      });
    }

    console.log('郵件發送成功:', data);
    res.status(200).json({ 
      success: true,
      messageId: data.id 
    });

  } catch (error) {
    console.error('伺服器錯誤:', error);
    res.status(500).json({ 
      error: '伺服器錯誤',
      details: error.message,
      success: false 
    });
  }
});

app.use('/api', router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API 伺服器運行在 http://localhost:${PORT}`);
});

export default app;

