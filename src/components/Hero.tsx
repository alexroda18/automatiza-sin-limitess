
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const typewriterPhrases = [
  "generar ingresos",
  "reducir costes",
  "ahorrar tiempo",
  "reducir recursos",
  "incrementar la productividad"
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
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // If finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % typewriterPhrases.length);
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
              Automatizaciones únicas para{" "}
              <span className="text-gradient-teal min-h-[60px] md:min-h-[72px] inline-flex">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Si no multiplicamos x10 tu inversión, no estamos haciendo bien nuestro trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <a href="#automatizaciones" className="btn-teal flex items-center justify-center gap-2 group">
                Ver automatizaciones disponibles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#comunidad" className="btn-outline-teal">Únete gratis a la comunidad</a>
            </div>
          </div>

          {/* Columna de testimonios/reviews */}
          <div className="flex-1 opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-teal-100">
                <div className="space-y-4">
                  {/* Review 1 */}
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-teal-50 transform rotate-1 hover:-rotate-1 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        MR
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Mario Rodríguez</div>
                        <div className="text-sm text-gray-500">@mariotech</div>
                        <div className="mt-2 text-sm">
                          La automatización de Stripe a Notion me ha ahorrado <span className="font-semibold text-teal-600">más de 10 horas semanales</span>. Ya no pierdo tiempo con seguimientos manuales. ¡Increíble!
                        </div>
                        <div className="mt-2 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review 2 */}
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-teal-50 transform -rotate-1 hover:rotate-1 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        LS
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Laura Sánchez</div>
                        <div className="text-sm text-gray-500">@lauracreativa</div>
                        <div className="mt-2 text-sm">
                          El ROI de la automatización Gmail ➜ WhatsApp ha sido <span className="font-semibold text-teal-600">brutal, +300%</span> en conversión de leads. Ahora respondemos al instante.
                        </div>
                        <div className="mt-2 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review 3 */}
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-teal-50 transform rotate-2 hover:-rotate-2 transition-transform">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-600 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        JG
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">Javier García</div>
                        <div className="text-sm text-gray-500">@javiemprendedor</div>
                        <div className="mt-2 text-sm">
                          La automatización con IA para redes sociales nos <span className="font-semibold text-teal-600">multiplicó x7 el engagement</span> con la mitad del esfuerzo. ¡Espectacular!
                        </div>
                        <div className="mt-2 flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-sm font-medium">
                    +150 reviews positivas
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-70 blur-md -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-cyan-400 to-teal-400 rounded-full opacity-50 blur-md -z-10"></div>
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
