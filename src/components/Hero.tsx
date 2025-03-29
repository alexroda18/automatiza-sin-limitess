import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Users, 
  Workflow, 
  TrendingUp, 
  Bot, 
  AppWindow, 
  Share2 
} from 'lucide-react';
import { Button } from './ui/button';

const typewriterPhrases = [
  "generar ingresos",
  "reducir costes",
  "ahorrar tiempo",
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
    <section className="relative overflow-x-hidden min-h-screen bg-gradient-to-br from-black to-[#12123A]">
      {/* Elementos decorativos con efecto morado */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32 pt-40 md:pt-40">
          {/* Columna de texto */}
          <div className="w-full md:w-[480px] space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-white">
              Automatizaciones únicas para{' '}
              <div className="h-[72px] mt-2">
                <span className="bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF] bg-clip-text text-transparent whitespace-nowrap">
                {currentText}
                  <span className="animate-pulse text-white">|</span>
              </span>
              </div>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
              Si no multiplicas x10 tu inversión, no estamos haciendo bien nuestro trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center md:justify-start">
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                asChild
              >
                <a href="#automatizaciones">Ver automatizaciones</a>
              </Button>
              
              <Button 
                className="px-8 py-4 bg-[#12123A] text-white transition-all hover:bg-[#1E1E4A] active:scale-[0.98] hover:-translate-y-0.5 border border-[#4F7FFF]/30 font-medium uppercase"
                asChild
              >
                <a href="#comunidad">Únete a la comunidad</a>
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <div className="flex -space-x-2 shrink-0">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-[#1E1E4A]" alt="User" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-[#1E1E4A]" alt="User" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64&q=80" className="w-10 h-10 rounded-full border-2 border-[#1E1E4A]" alt="User" />
              </div>
              <div className="text-sm text-gray-400 font-medium text-center md:text-left">
                Más de 20 empresas<br className="hidden sm:block md:hidden" /> y 150 personas<br className="hidden sm:block md:hidden" /> ya confían en nosotros.
              </div>
            </div>
          </div>

          {/* Columna derecha: Video de YouTube */}
          <div className="w-full md:w-[600px] opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-1 bg-[#12123A]/60 backdrop-blur-md rounded-2xl shadow-xl border border-[#1E1E4A] overflow-hidden">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/IyC3pfyOZDk?rel=0" 
                    title="Tutorial de Automatizaciones"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 right-0 w-20 h-20 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-20 blur-md -z-10"></div>
              <div className="absolute -bottom-6 left-0 w-24 h-24 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-15 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Forma decorativa en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-black via-[#12123A] to-black opacity-50 -z-10"></div>

      {/* Sección de Servicios */}
      <section className="relative bg-gradient-to-br from-black to-[#12123A] py-32 mt-32">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Con estas automatizaciones aprenderás a...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Generar leads automáticamente</h3>
              <p className="text-gray-400 leading-relaxed text-center">
              Aprende a captar clientes potenciales de manera automatizada, optimizando tus esfuerzos de marketing y ventas sin perder tiempo ni recursos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Sistematizar operaciones</h3>
              <p className="text-gray-400 leading-relaxed text-center">
              Descubre cómo automatizar tus tareas diarias, ahorrar tiempo y recursos, y enfocarte en lo que realmente importa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Posicionar tu marca</h3>
              <p className="text-gray-400 leading-relaxed text-center">
              Destaca frente a la competencia con contenido viral y estrategias optimizadas por IA que aumentarán la visibilidad de tu marca.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Crear agentes de IA</h3>
              <p className="text-gray-400 leading-relaxed text-center">
                Domina la creación de agentes de IA que trabajen 24/7 para tu negocio.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <AppWindow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Crear apps con IA</h3>
              <p className="text-gray-400 leading-relaxed text-center">
              Descubre cómo desarrollar aplicaciones innovadoras con IA para resolver problemas reales y mejorar la interacción con tus usuarios.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-[#0A0A1B] p-8 rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <Share2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Automatizar contenido</h3>
              <p className="text-gray-400 leading-relaxed text-center">
              Aprende a extraer, generar y distribuir contenido automáticamente, ahorrando tiempo y maximizando el impacto de tus publicaciones en múltiples plataformas.
              </p>
            </div>
          </div>

          {/* "Y mucho más" text */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-400 font-medium">Y mucho más...</p>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>
    </section>
  );
};

export default Hero;
