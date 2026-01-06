import React from 'react';

const painPoints = [
  {
    icon: "fa-anchor-circle-exclamation",
    title: "陳舊的品牌形象",
    desc: "網站未能體現品牌精髓，設計過時，無法吸引高端客戶的目光，阻礙品牌價值傳遞。"
  },
  {
    icon: "fa-gauge-high",
    title: "系統效能滯後",
    desc: "緩慢的載入速度和不流暢的操作，嚴重損害用戶體驗，導致潛在客戶流失。"
  },
  {
    icon: "fa-magnifying-glass-chart",
    title: "搜尋可見度不足",
    desc: "即使擁有卓越的產品或服務，品牌卻難以在搜尋引擎中脫穎而出，錯失市場機遇。"
  },
  {
    icon: "fa-handshake-simple",
    title: "缺乏專業策略夥伴",
    desc: "難以找到真正理解商業目標、並能提供頂級技術與策略整合的數位合作夥伴。"
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="bg-surface py-24 border-b-2 border-border">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex flex-col gap-6 text-center">
          <h2 className="text-4xl font-bold leading-snug text-text sm:text-5xl">
            您的品牌是否面臨<span className="text-primary">數位轉型瓶頸</span>？
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            我們提供超越期待的客製化數位解決方案，助您克服挑戰，開創數位新紀元
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item, index) => (
            <div key={index} className="group flex flex-col gap-6 border-2 border-border bg-background p-8 transition duration-300 hover:border-primary hover:-translate-y-2">
              <div className="flex size-16 items-center justify-center border-2 border-primary bg-background text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <i className={`fa-solid ${item.icon} text-3xl`}></i>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-text">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;