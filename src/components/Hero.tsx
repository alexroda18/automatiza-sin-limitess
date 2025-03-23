
import React from 'react';
import { ArrowRight, Rocket, DollarSign, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 pb-20">
      {/* Elementos decorativos con naranja coral */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-tr from-purple-300 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-orange-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 opacity-0 animate-fadeIn">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-sm font-medium shadow-md shadow-orange-500/20">
            Soluciones que funcionan
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-5xl mx-auto leading-tight text-balance">
            Automatizaciones únicas para <span className="text-gradient-coral">generar ingresos</span>, <span className="text-gradient-coral">reducir costes</span> y <span className="text-gradient-coral">ahorrar tiempo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Si no multiplicamos x10 tu inversión, no estamos haciendo bien nuestro trabajo.
          </p>
          
          {/* Lista de beneficios */}
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center max-w-3xl mx-auto w-full pt-2">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 duration-300">
              <Rocket size={20} className="text-orange-500" />
              <span className="font-medium">Automatiza procesos reales</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 duration-300">
              <DollarSign size={20} className="text-orange-500" />
              <span className="font-medium">Aumenta ingresos o reduce gastos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-slate-100 transition-all hover:-translate-y-1 duration-300">
              <Brain size={20} className="text-orange-500" />
              <span className="font-medium">Soluciones exclusivas</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6">
            <a href="#automatizaciones" className="btn-coral flex items-center justify-center gap-2 group">
              Ver automatizaciones disponibles
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#comunidad" className="btn-outline-coral">Unirse a la comunidad</a>
          </div>
        </div>
      </div>

      {/* Formas decorativas modernas */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-orange-50 via-purple-50 to-orange-50 opacity-40 -z-10"></div>
    </section>
  );
};

export default Hero;
