
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-10 md:pt-16 pb-20 bg-hero">
      {/* Elementos decorativos con efecto teal */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gradient-to-tr from-cyan-400 to-teal-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-teal-300 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Columna de texto */}
          <div className="flex-1 space-y-8 opacity-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance text-hero-foreground">
              Automatizaciones únicas para
              <br />
              <span className="text-[#34d4c8] inline-block h-[60px] md:h-[72px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-hero-secondary max-w-2xl leading-relaxed font-medium italic">
              Si no multiplicas x10 tu inversión, no estamos haciendo bien nuestro trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <a href="#automatizaciones" className="px-6 py-3.5 bg-gradient-to-r from-[#DE5E64] to-[#ff7b7b] text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#DE5E64]/30 active:scale-[0.98] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                Ver automatizaciones disponibles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#comunidad" className="px-6 py-3.5 bg-gradient-to-r from-[#5e7df7] to-[#4b6cff] text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#5e7df7]/30 active:scale-[0.98] hover:-translate-y-0.5 border border-white/10">Únete gratis a la comunidad</a>
            </div>
          </div>

          {/* Columna de testimonios/reviews */}
          <div className="flex-1 opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-[#34d4c8]/20">
                <div className="space-y-4">
                  {/* Social Media Review 1 - Twitter */}
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-[#34d4c8]/10 transform rotate-1 hover:-rotate-1 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex-shrink-0 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.84A8.22 8.22 0 0 1 2 17.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 7.31c0-.17-.01-.35-.02-.52A8.43 8.43 0 0 0 22 5.8z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Mario Rodríguez</div>
                        <div className="mt-2 text-sm">
                          La automatización de Stripe a Notion me ha ahorrado más de 10 horas semanales. Ya no pierdo tiempo con seguimientos manuales. ¡Increíble! #AutomatizaSinLimites
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Review 2 - Instagram */}
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-[#34d4c8]/10 transform -rotate-1 hover:rotate-1 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Laura Sánchez</div>
                        <div className="mt-2 text-sm">
                          El ROI de la automatización Gmail ➜ WhatsApp ha sido brutal, +300% en conversión de leads. Ahora respondemos al instante. 🚀
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Review 3 - LinkedIn */}
                  <div className="p-4 bg-white/80 rounded-lg shadow-sm border border-[#34d4c8]/10 transform rotate-2 hover:-rotate-2 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0077B5] flex-shrink-0 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Javier García • Director de Marketing</div>
                        <div className="mt-2 text-sm">
                          La automatización con IA para redes sociales nos multiplicó x7 el engagement con la mitad del esfuerzo. Un servicio que recomiendo a cualquier negocio que quiera escalar.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-block px-4 py-2 rounded-full bg-[#34d4c8]/10 text-[#34d4c8] font-medium text-sm">
                    +150 reviews positivas en redes sociales
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#34d4c8] to-teal-500 rounded-full opacity-70 blur-md -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-[#34d4c8] rounded-full opacity-50 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Forma decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 opacity-60 -z-10"></div>
    </section>
  );
};

export default Hero;
