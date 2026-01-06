import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="mb-10 text-4xl font-bold tracking-tight leading-snug text-text sm:text-5xl">
          準備好將您的品牌<span className="text-primary">推向巔峰</span>了嗎？
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-xl text-muted leading-relaxed">
          別再錯失潛在機遇。立即預約一次免費的專案諮詢，讓我們深入聆聽您的宏偉構想，共同開創無限可能。
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#contact" className="border-2 border-secondary px-10 py-5 text-xl font-bold text-secondary shadow-none transition hover:bg-secondary hover:text-background hover:shadow-[0_0_20px_rgba(255,0,102,0.5)]">
            <i className="fa-solid fa-arrow-up-right-from-square mr-3"></i> 立即與我們聯繫，啟動專案
          </a>
        </div>
        <div className="mt-20 flex flex-col items-center gap-4 text-base text-muted sm:flex-row sm:justify-center sm:gap-10">
          <span className="flex items-center gap-3">
            <i className="fa-regular fa-envelope text-xl text-primary"></i> <a href="mailto:idesign.app2026@gmail.com" className="hover:text-primary transition-colors">idesign.app2026@gmail.com</a>
          </span>
          <span className="hidden sm:inline text-muted">|</span>
          <span className="flex items-center gap-3">
            <i className="fa-solid fa-phone-alt text-xl text-primary"></i> <a href="tel:886-988968172" className="hover:text-primary transition-colors">0988-968172</a>
          </span>
        </div>
        <div className="mt-12 text-sm text-muted/30">
            © {new Date().getFullYear()} i-design. All Rights Reserved. Designed with Brutalist Aesthetics.
        </div>
      </div>
    </section>
  );
};

export default Footer;