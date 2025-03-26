import React from 'react';
import { 
  Tag, 
  Clock, 
  Users, 
  Headphones,
  BookOpen,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';

interface BenefitProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon: Icon, title, delay }) => {
  return (
    <div 
      className={`flex items-center gap-4 opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] flex items-center justify-center text-white">
        <Icon size={20} />
      </div>
      <p className="text-sm md:text-base text-gray-300 font-medium">{title}</p>
    </div>
  );
};

const CommunitySection: React.FC = () => {
  const benefits = [
    { icon: Tag, title: "Descuentos exclusivos en nuevos lanzamientos" },
    { icon: BookOpen, title: "Acceso gratuito a automatizaciones" },
    { icon: Users, title: "Acceso a masterclasses" },
    { icon: Headphones, title: "Soporte técnico disponible" },
    { icon: Clock, title: "Contenido nuevo semanal" },
    { icon: Sparkles, title: "Networking con otros miembros" }
  ];

  return (
    <section id="comunidad" className="relative overflow-x-hidden bg-gradient-to-br from-black to-[#12123A] py-32">
      {/* Elementos decorativos con efecto morado */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Únete{' '}
            <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">
              gratis
            </span>
            {' '}a la comunidad y accede a {' '}<br />
            <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">
              ventajas exclusivas
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-12 flex flex-col items-center md:items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Benefit 
                  key={index} 
                  icon={benefit.icon} 
                  title={benefit.title}
                  delay={index + 2}
                />
              ))}
            </div>

            <Button 
              className="group relative inline-flex items-center gap-2 px-12 py-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white rounded-lg transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase overflow-hidden text-lg"
              asChild
            >
              <a href="https://chat.whatsapp.com/JTLA1aII7hsJtYyzxomv6q" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">Quiero unirme!</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#9747FF] via-white/10 to-[#4F7FFF] blur-sm"></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#9747FF] via-white/20 to-[#4F7FFF] translate-x-[-100%] animate-shine"></div>
              </a>
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden border border-[#1E1E4A] opacity-0 animate-scaleIn animate-delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9747FF]/20 to-[#4F7FFF]/20 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Comunidad de WhatsApp" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 backdrop-blur-md bg-[#0A0A1B]/80 rounded-lg border border-[#1E1E4A] shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">No te quedes atrás</h3>
                  <p className="text-gray-400 max-w-xs mx-auto">Más de +150 profesionales van un paso por delante de su competencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default CommunitySection;

