
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' 
        : 'py-5 bg-[#F0F3FF]'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-blue-600">Automatiza</span>
            <span className="ml-1 text-gray-800 opacity-80">sin límites</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#automatizaciones" className="text-gray-800 hover:text-blue-600 transition-colors font-light">
              Automatizaciones
            </a>
            <a href="#comunidad" className="text-gray-800 hover:text-blue-600 transition-colors font-light">
              Comunidad
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground flex items-center justify-center w-10 h-10 rounded-full bg-white/80 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Sliding from the right */}
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex flex-col p-6 space-y-6">
          <a 
            href="#automatizaciones" 
            className="text-gray-800 hover:text-blue-600 transition-colors p-2 font-light flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Automatizaciones</span>
            <ChevronRight size={16} className="ml-auto" />
          </a>
          <a 
            href="#comunidad" 
            className="text-gray-800 hover:text-blue-600 transition-colors p-2 font-light flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Comunidad</span>
            <ChevronRight size={16} className="ml-auto" />
          </a>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
