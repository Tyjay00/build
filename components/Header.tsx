import React from 'react';

export const Header: React.FC = () => {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.786-2.67 9.342-1.66 2.556-2.83 4.658-2.83 4.658H12m0 0h4.5m-4.5 0H12m0 0V3m0 0v8m0-8h.01M12 3H7.5M12 3H12m0 0h4.5m0 0v8m0 0h2.83c0 0 1.17-2.102 2.83-4.658C21.009 17.786 20 14.517 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.517 1.009 6.786 2.67 9.342C5.33 20.342 6.5 22 6.5 22H12" />
          </svg>
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            AWS Skill Builder
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={handleNavClick} className="text-gray-600 hover:text-brand-green transition-colors">About</a>
            <a href="#steps" onClick={handleNavClick} className="text-gray-600 hover:text-brand-green transition-colors">How It Works</a>
            <a href="#benefits" onClick={handleNavClick} className="text-gray-600 hover:text-brand-green transition-colors">Benefits</a>
            <a href="#faq" onClick={handleNavClick} className="text-gray-600 hover:text-brand-green transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center">
            <a 
              href="#register" 
              onClick={handleNavClick}
              className="bg-brand-green text-white font-semibold py-2 px-5 rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              Start for Free
            </a>
            <button className="text-text-primary p-2 md:hidden ml-2" aria-label="Open menu">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>
      </div>
    </header>
  );
};