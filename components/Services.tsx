import React from 'react';

const services = [
  {
    icon: "fa-pen-ruler",
    title: "沉浸式網頁設計",
    desc: "匠心打造，將藝術美學與商業轉化率完美融合，創造令人難忘的數位體驗。",
    list: ["無縫響應式設計 (RWD)", "品牌識別系統 (CIS) 重塑與深化", "極致轉換率著陸頁 (Landing Page)"]
  },
  {
    icon: "fa-code",
    title: "頂級軟體工程開發",
    desc: "根據您的獨特商業模式，量身定制高效率、穩固的技術解決方案，為創新奠基。",
    list: ["企業級管理系統 (ERP/CRM) 定制", "SaaS 產品從概念到實現", "複雜 API 整合與數據安全"]
  },
  {
    icon: "fa-route",
    title: "流程與體驗策略",
    desc: "深入洞察用戶需求，優化每一個接觸點，確保使用者流程流暢，體驗無懈可擊。",
    list: ["精準使用者旅程地圖 (User Journey)", "直觀 UI/UX 介面優化設計", "智慧自動化流程導入"]
  },
  {
    icon: "fa-chart-line",
    title: "策略性 SEO 顧問",
    desc: "運用尖端策略，提升品牌在數位世界的可見性，確保高價值客戶能主動發現您。",
    list: ["獨家關鍵字策略佈局", "深度技術 SEO 優化 (Technical SEO)", "權威內容行銷指導"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-background py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-snug text-text sm:text-5xl" style={{ lineHeight: '58px' }}>
            我們提供<span className="text-secondary">精雕細琢的數位解決方案</span>，為您的品牌賦能
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col gap-8 border-2 border-border bg-surface p-10 transition duration-300 hover:border-primary">
              <div className="flex size-16 items-center justify-center border-2 border-primary bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-background">
                <i className={`fa-solid ${service.icon} text-3xl`}></i>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold leading-snug text-text">{service.title}</h3>
                <p className="text-lg leading-relaxed text-muted">{service.desc}</p>
                <ul className="ml-6 list-disc text-base text-muted marker:text-primary space-y-2">
                  {service.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;