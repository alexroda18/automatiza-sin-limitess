import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1E1E4A]/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <a href="/" className="text-2xl font-bold text-white block text-center">
              automatiza{' '}
              <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">sin límites</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#automatizaciones" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Automatizaciones
              </a>
              <a href="#comunidad" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Comunidad
              </a>
              <a href="mailto:alex@cosstudio.co" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
