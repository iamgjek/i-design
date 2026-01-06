import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-40 border-b-2 border-border">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-surface/90 opacity-90" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-8 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold leading-snug tracking-tight text-text sm:text-6xl lg:text-7xl">
              將您的願景，<br className="hidden lg:block" />
              <span className="text-primary">昇華為非凡的數位遺產。</span>
            </h1>
            <p className="text-xl font-normal leading-relaxed text-muted sm:text-2xl max-w-3xl mx-auto lg:mx-0">
              我們是 [公司名稱]，以精湛工藝和策略遠見，為您的品牌雕塑獨一無二的數位存在。透過頂級設計、堅實架構與精準策略，我們將潛在客戶轉化為忠實擁護者。
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact" className="group flex h-16 min-w-[280px] cursor-pointer items-center justify-center border-2 border-secondary px-8 text-xl font-bold text-secondary transition hover:bg-secondary hover:text-background hover:shadow-[0_0_20px_rgba(255,0,102,0.5)]">
                <i className="fa-solid fa-arrow-right mr-3 group-hover:translate-x-1 transition-transform"></i> 
                探索您的專屬解決方案
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;