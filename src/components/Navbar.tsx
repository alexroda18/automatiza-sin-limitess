import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#1E1E4A]/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex md:justify-start justify-center md:justify-start">
            <a href="/" className="text-xl sm:text-2xl font-bold text-white">
              automatiza{' '}
              <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">sin límites</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2 lg:space-x-4">
              <a href="#nuestros-servicios" className="text-gray-400 hover:text-white px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
                Nuestros servicios
              </a>
              <a href="#casos-de-uso" className="text-gray-400 hover:text-white px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
                Casos de uso
              </a>
              <a href="#como-trabajamos" className="text-gray-400 hover:text-white px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
                Cómo trabajamos
              </a>
              <a href="#nuestros-clientes" className="text-gray-400 hover:text-white px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
                Clientes
              </a>
              <a href="https://calendly.com/automatizasinlimites/30min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors">
                Agendar una llamada
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#1E1E4A]/20 bg-black/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a
                href="#nuestros-servicios"
                onClick={closeMobileMenu}
                className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Nuestros servicios
              </a>
              <a
                href="#casos-de-uso"
                onClick={closeMobileMenu}
                className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Casos de uso reales
              </a>
              <a
                href="#como-trabajamos"
                onClick={closeMobileMenu}
                className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Cómo trabajamos
              </a>
              <a
                href="#nuestros-clientes"
                onClick={closeMobileMenu}
                className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Nuestros clientes
              </a>
              <a
                href="https://calendly.com/automatizasinlimites/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block text-gray-400 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Agendar una llamada
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
