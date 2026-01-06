import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="flex size-10 items-center justify-center border-2 border-primary text-primary bg-background hover:bg-primary hover:text-background transition-colors duration-300">
            <i className="fa-solid fa-gem text-xl"></i>
          </div>
          <h2 className="text-xl font-bold font-sans leading-snug tracking-tight text-text">i-design</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-12">
          <a href="#services" className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2">
            專屬服務
          </a>
          <a href="#why-us" className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2">
            我們的承諾
          </a>
          <a href="#cases" className="text-base font-medium text-muted hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-2">
            精選案例
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex justify-end">
          <a href="#contact" className="flex h-12 cursor-pointer items-center justify-center border-2 border-primary px-6 text-base font-bold text-primary transition hover:bg-primary hover:text-background">
            預約諮詢
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b-2 border-border p-6 flex flex-col gap-4 absolute w-full">
           <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted hover:text-primary">專屬服務</a>
           <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted hover:text-primary">我們的承諾</a>
           <a href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-muted hover:text-primary">精選案例</a>
           <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 flex h-12 items-center justify-center border-2 border-primary text-primary font-bold">預約諮詢</a>
        </div>
      )}
    </header>
  );
};

export default Header;