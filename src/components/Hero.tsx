
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      {/* Elementos decorativos con efecto teal */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gradient-to-tr from-cyan-300 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-teal-200 to-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Columna de texto */}
          <div className="flex-1 space-y-8 opacity-0 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
              Automatizaciones únicas para <span className="text-gradient-teal">generar ingresos</span>, <span className="text-gradient-teal">reducir costes</span> y <span className="text-gradient-teal">ahorrar tiempo</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Si no multiplicamos x10 tu inversión, no estamos haciendo bien nuestro trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <a href="#automatizaciones" className="btn-teal flex items-center justify-center gap-2 group">
                Ver automatizaciones disponibles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#comunidad" className="btn-outline-teal">Unirse a la comunidad</a>
            </div>
          </div>

          {/* Columna de imagen/gráfico */}
          <div className="flex-1 opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-teal-100">
                <div className="relative aspect-[4/3] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg overflow-hidden shadow-inner">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2 opacity-20">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="bg-white rounded"></div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-white/30 backdrop-blur-sm rounded-lg text-white text-center">
                      <div className="text-3xl font-extrabold mb-2">x10</div>
                      <div className="text-sm">ROI promedio</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-5 flex justify-between items-center">
                  <div className="relative grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="h-12 rounded bg-gradient-to-r from-teal-100 to-teal-200 flex items-center justify-center text-teal-600 font-bold text-sm animate-pulse" 
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        +{(i + 1) * 25}%
                      </div>
                    ))}
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-bold shadow-lg">
                    <span className="text-xl">GO</span>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full opacity-70 blur-md -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-cyan-300 to-teal-300 rounded-full opacity-50 blur-md -z-10"></div>
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
