
import React from 'react';
import { 
  Zap,
  BrainCircuit,
  Share2,
  Hammer,
  Users,
  FileCode,
} from 'lucide-react';

interface LearningCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
  delay: number;
}

const LearningCard: React.FC<LearningCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  bgColor,
  iconColor,
  delay
}) => {
  return (
    <div className="opacity-0 animate-fadeIn h-[250px]" style={{ animationDelay: `${delay * 100}ms` }}>
      <div className="flip-card h-full w-full">
        <div className="flip-card-inner h-full w-full">
          {/* Front side */}
          <div 
            className={`flip-card-front h-full w-full cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300`}
            style={{ backgroundColor: bgColor }}
          >
            <div className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className={`mb-4 ${iconColor}`}>
                <Icon size={32} />
              </div>
              <h3 className="text-white text-xl font-light mb-2">{title}</h3>
            </div>
          </div>
          
          {/* Back side */}
          <div className={`flip-card-back h-full w-full rounded-xl overflow-hidden shadow-lg p-6`}
               style={{ backgroundColor: bgColor }}>
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-white text-xl font-light mb-4 text-center">{title}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const learningCards = [
    { 
      icon: Zap, 
      title: "Generar leads automáticamente",
      description: "Atrae y convierte más prospectos con automatizaciones inteligentes para hacer crecer tu negocio.",
      bgColor: "#879AFF",
      iconColor: "text-white"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones y flujos internos",
      description: "Optimiza y automatiza procesos para mayor eficiencia, reduciendo tareas repetitivas en tu empresa.",
      bgColor: "#6161FF",
      iconColor: "text-white"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca en redes sociales",
      description: "Destaca entre la competencia con contenido viral y estrategias optimizadas por IA.",
      bgColor: "#24C4E6",
      iconColor: "text-white"
    },
    { 
      icon: BrainCircuit, 
      title: "Crear agentes de IA personalizados",
      description: "Desarrolla asistentes virtuales inteligentes que trabajen 24/7 para tu negocio.",
      bgColor: "#673971",
      iconColor: "text-white"
    },
    { 
      icon: Users, 
      title: "Crear aplicaciones basadas en inteligencia artificial",
      description: "Transforma tu negocio con soluciones tecnológicas avanzadas sin necesidad de programar.",
      bgColor: "#FF596D",
      iconColor: "text-white"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido y publicaciones en redes",
      description: "Genera contenido de alta calidad automáticamente para todas tus plataformas sociales.",
      bgColor: "#1F0F83",
      iconColor: "text-white"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
      
      {/* Glassmorphism blobs for background effect */}
      <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-orange-500/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-black opacity-0 animate-fadeIn">
              ¿Qué vas a aprender?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningCards.map((card, index) => (
              <LearningCard 
                key={index} 
                icon={card.icon} 
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                iconColor={card.iconColor}
                delay={index + 2}
              />
            ))}
          </div>
          
          <div className="text-center mt-10 text-gray-500 opacity-0 animate-fadeIn italic" style={{ animationDelay: '800ms' }}>
            Y mucho más...
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
