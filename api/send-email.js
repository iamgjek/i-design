import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function POST(request) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.error('RESEND_API_KEY 未設定');
      return Response.json(
        {
          error: '郵件服務尚未設定',
          details: 'RESEND_API_KEY is not configured on the server',
          success: false,
        },
        { status: 503 }
      );
    }

    const { name, email, service, description } = await request.json();

    if (!name || !email || !service || !description) {
      return Response.json(
        { error: '缺少必要欄位', success: false },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'i-design <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'service@i-design.app',
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
      replyTo: email,
    });

    if (error) {
      console.error('Resend 錯誤:', error);
      return Response.json(
        { error: '郵件發送失敗', details: error.message, success: false },
        { status: 500 }
      );
    }

    return Response.json({ success: true, messageId: data.id });
  } catch (error) {
    console.error('伺服器錯誤:', error);
    return Response.json(
      {
        error: '伺服器錯誤',
        details: error instanceof Error ? error.message : String(error),
        success: false,
      },
      { status: 500 }
    );
  }
}
