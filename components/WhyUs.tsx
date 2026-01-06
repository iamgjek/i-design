import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-background py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
            <span className="text-primary">選擇 [公司名稱]</span>，因為我們專注於您的卓越成果。
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex size-20 items-center justify-center border-2 border-secondary bg-background text-secondary hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-trophy text-5xl"></i>
            </div>
            <h3 className="mb-4 text-2xl font-bold leading-snug text-text">精湛工藝，超越期待</h3>
            <p className="text-lg leading-relaxed text-muted">我們將每個專案視為藝術品，追求極致細節與品質，為您呈現無與倫比的數位解決方案。</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex size-20 items-center justify-center border-2 border-secondary bg-background text-secondary hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-chart-simple text-5xl"></i>
            </div>
            <h3 className="mb-4 text-2xl font-bold leading-snug text-text">數據驅動，精準決策</h3>
            <p className="text-lg leading-relaxed text-muted">所有策略均基於嚴謹的數據分析與用戶洞察，確保每一步都精準有效，而非主觀臆測。</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex size-20 items-center justify-center border-2 border-secondary bg-background text-secondary hover:scale-110 transition-transform duration-300">
              <i className="fa-solid fa-bolt text-5xl"></i>
            </div>
            <h3 className="mb-4 text-2xl font-bold leading-snug text-text">敏捷協作，溝通無礙</h3>
            <p className="text-lg leading-relaxed text-muted">採用靈活的敏捷開發模式，確保項目進度透明，並實現與您的團隊即時、高效的溝通協作。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;