
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

interface BenefitProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon: Icon, title, delay }) => {
  return (
    <div 
      className={`flex items-center gap-3 opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
        <Icon size={16} />
      </div>
      <p className="font-bold text-sm md:text-base text-black">{title}</p>
    </div>
  );
};

const CommunitySection: React.FC = () => {
  const benefits = [
    { icon: Tag, title: "Descuentos exclusivos en nuevas automatizaciones" },
    { icon: BookOpen, title: "Acceso a masterclasses" },
    { icon: Users, title: "Sesiones en vivo con expertos" },
    { icon: Headphones, title: "Soporte 24/7" },
    { icon: Clock, title: "Contenido nuevo semanal" },
    { icon: Sparkles, title: "Networking con otros creadores y emprendedores tech" }
  ];

  return (
    <section id="comunidad" className="py-24 bg-[#F0F3FF] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-gradient-to-tr from-blue-400 to-sky-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-blue-300 to-sky-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white opacity-0 animate-fadeIn">
                  Únete GRATIS a la comunidad y obtén ventajas exclusivas
                </h2>
                <p className="text-lg text-white opacity-0 animate-fadeIn animate-delay-100">
                  Conecta con emprendedores, creadores y profesionales que están transformando sus negocios con automatizaciones inteligentes.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Benefit 
                    key={index} 
                    icon={benefit.icon} 
                    title={benefit.title}
                    delay={index + 2}
                  />
                ))}
              </div>
              
              <div className="opacity-0 animate-fadeIn animate-delay-500">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-100 text-blue-700 rounded-full transition-all hover:bg-blue-200 active:scale-[0.98] hover:-translate-y-0.5 border border-blue-200 font-medium text-center"
                >
                  Únete al grupo gratuito
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-scaleIn animate-delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-blue-800/50 mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Comunidad de WhatsApp" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black p-6 backdrop-blur-sm bg-white/60 rounded-lg border border-white/60 shadow-lg">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Automatiza Sin Límites</h3>
                    <p className="text-gray-700 max-w-xs mx-auto">Únete a +500 profesionales compartiendo conocimiento y oportunidades</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full opacity-80 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full opacity-80 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
