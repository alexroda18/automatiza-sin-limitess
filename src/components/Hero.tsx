
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const typewriterPhrases = [
  "generar ingresos",
  "reducir costes",
  "ahorrar tiempo",
  "reducir recursos"
];

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = typewriterPhrases[currentPhraseIndex];
      
      // If deleting
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        // If typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
      
      // If finished typing
      if (!isDeleting && currentText === currentPhrase) {
        // Wait at full phrase for a moment
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      // If finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % typewriterPhrases.length);
      }
    }, isDeleting ? 30 : 70); // Faster transition speeds
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 pb-20 bg-[#F0F3FF]">
      {/* Elementos decorativos con efecto azul */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gradient-to-tr from-blue-400 to-sky-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-blue-300 to-sky-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Columna de texto */}
          <div className="flex-1 space-y-8 opacity-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-black">
              Automatizaciones únicas para
              <br />
              <span className="text-blue-600 inline-block h-[60px] md:h-[72px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed italic">
              Si no multiplicas x10 tu inversión, no estamos haciendo bien nuestro trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <a href="#automatizaciones" className="px-6 py-3.5 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-full transition-all hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.98] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                Ver automatizaciones disponibles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#comunidad" className="px-6 py-3.5 bg-blue-100 text-blue-700 rounded-full transition-all hover:bg-blue-200 active:scale-[0.98] hover:-translate-y-0.5 border border-blue-200">Únete gratis a la comunidad</a>
            </div>
            
            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
              </div>
              <div className="text-sm text-gray-600 font-bold">
                +150 personas ya van un paso por delante de su competencia
              </div>
            </div>
          </div>

          {/* Columna derecha: Video de YouTube */}
          <div className="flex-1 opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-1 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 overflow-hidden">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/opi1s_5Dm-c?rel=0" 
                    title="Tutorial de Automatizaciones"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black">Cómo automaticé mi negocio</h3>
                      <p className="text-gray-600 text-sm">Episodio 42 · 28 min</p>
                    </div>
                    <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                      <Sparkles size={12} />
                      <span>Destacado</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full opacity-70 blur-md -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-sky-400 to-blue-500 rounded-full opacity-50 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Forma decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 opacity-50 -z-10"></div>
    </section>
  );
};

export default Hero;
