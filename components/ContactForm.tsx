import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import { ContactFormData, FormStatus } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '網頁設計與開發',
    description: ''
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setErrorMessage('');
    
    try {
      await submitContactForm(formData);
      setStatus(FormStatus.SUCCESS);
      setFormData({ name: '', email: '', service: '網頁設計與開發', description: '' });
    } catch (error: any) {
      console.error(error);
      setStatus(FormStatus.ERROR);
      setErrorMessage(error?.message || '提交失敗，請稍後再試或直接聯繫我們。');
    }
  };

  return (
    <section id="contact" className="bg-surface py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold leading-snug text-text sm:text-4xl">
            啟動您的<span className="text-primary">數位轉型</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">填寫下方表格，我們將在 24 小時內與您聯繫。</p>
        </div>

        {status === FormStatus.SUCCESS ? (
           <div className="mx-auto max-w-2xl border-2 border-primary bg-background/50 p-10 text-center">
              <i className="fa-solid fa-check-circle text-6xl text-primary mb-6"></i>
              <h3 className="text-2xl font-bold text-text mb-4">預約成功！</h3>
              <p className="text-muted">我們的團隊已收到您的需求，將盡快與您聯繫。</p>
              <button 
                onClick={() => setStatus(FormStatus.IDLE)}
                className="mt-8 border-2 border-border px-6 py-2 text-text hover:border-primary hover:text-primary transition"
              >
                發送新訊息
              </button>
           </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text uppercase tracking-wider">姓名</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                  placeholder="您的姓名" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-text uppercase tracking-wider">電子郵件</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                  placeholder="name@company.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text uppercase tracking-wider">諮詢服務</label>
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none outline-none transition-colors appearance-none cursor-pointer"
              >
                <option>網頁設計與開發</option>
                <option>企業軟體解決方案</option>
                <option>數位轉型顧問</option>
                <option>SEO 與行銷策略</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-text uppercase tracking-wider">專案描述</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full bg-background border-2 border-border p-4 text-text focus:border-primary focus:ring-0 rounded-none placeholder-muted/50 outline-none transition-colors" 
                placeholder="請簡述您的需求與目標..." 
                rows={4}
              ></textarea>
            </div>
            
            {status === FormStatus.ERROR && (
              <div className="border-2 border-secondary bg-background/50 p-6 text-secondary">
                <div className="font-bold text-lg mb-2">
                  <i className="fa-solid fa-exclamation-triangle mr-2"></i>
                  提交失敗
                </div>
                <div className="text-sm whitespace-pre-line">
                  {errorMessage}
                </div>
                <div className="mt-4 text-xs text-muted">
                  提示：請確保已運行 API 伺服器（<code className="bg-surface px-2 py-1">npm run server</code> 或 <code className="bg-surface px-2 py-1">npm run dev:all</code>）
                </div>
              </div>
            )}

            <button 
              type="submit"
              disabled={status === FormStatus.SUBMITTING}
              className="w-full border-2 border-primary bg-primary py-4 text-lg font-bold text-background transition hover:bg-transparent hover:text-primary uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === FormStatus.SUBMITTING ? '傳送中...' : '提交預約申請'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;