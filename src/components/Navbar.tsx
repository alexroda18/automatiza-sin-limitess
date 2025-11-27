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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex md:justify-start justify-center">
            <a href="/" className="text-2xl font-bold text-white">
              automatiza{' '}
              <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">sin límites</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#nuestros-servicios" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nuestros servicios
              </a>
              <a href="#casos-de-uso" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Casos de uso reales
              </a>
              <a href="#como-trabajamos" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Cómo trabajamos
              </a>
              <a href="#nuestros-clientes" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Nuestros clientes
              </a>
              <a href="#" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Agendar una cita
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
