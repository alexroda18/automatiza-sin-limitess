
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 opacity-0 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            Transforma tu negocio con automatizaciones
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold max-w-5xl mx-auto leading-tight text-balance">
            <span className="text-gradient">Automatiza</span> procesos y enfócate en lo que importa
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cursos prácticos y soluciones listas para implementar que te ayudarán a generar ingresos, ahorrar dinero y liberar tu tiempo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <a href="#automatizaciones" className="btn-primary flex items-center justify-center gap-2">
              Ver automatizaciones
              <ArrowRight size={18} />
            </a>
            <a href="#comunidad" className="btn-secondary">Unirse a la comunidad</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
