import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-surface py-24 border-b-2 border-border" id="cases">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <i className="fa-solid fa-quote-left mb-12 text-7xl text-primary/30"></i>
          <blockquote className="mb-12">
            <p className="text-3xl font-medium leading-relaxed text-text sm:text-4xl lg:text-5xl">
              "自從與 i-design 合作後，我們的數位存在獲得了顯著提升，官網詢價量在三個月內成長 200%。他們不僅具備卓越技術，更深刻理解我們的商業目標！"
            </p>
          </blockquote>
          <div className="flex items-center gap-6">
            <div 
              className="size-20 overflow-hidden border-2 border-primary grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-text">某知名傳產轉型 CEO</div>
              <div className="text-lg text-muted">長期策略合作夥伴</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;