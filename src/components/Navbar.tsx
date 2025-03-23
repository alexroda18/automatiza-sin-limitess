
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="text-purple-600">Automatiza</span> sin límites
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#automatizaciones" className="text-foreground hover:text-purple-600 transition-colors font-medium">
              Automatizaciones
            </a>
            <a href="#comunidad" className="text-foreground hover:text-purple-600 transition-colors font-medium">
              Comunidad
            </a>
            <a href="#contacto" className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium transition-all hover:bg-purple-200">
              Contactar
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#automatizaciones" 
              className="text-foreground hover:text-purple-600 transition-colors p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Automatizaciones
            </a>
            <a 
              href="#comunidad" 
              className="text-foreground hover:text-purple-600 transition-colors p-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidad
            </a>
            <a 
              href="#contacto" 
              className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
