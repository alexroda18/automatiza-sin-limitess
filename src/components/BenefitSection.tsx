
import React from 'react';
import { 
  Zap,
  BrainCircuit,
  Share2,
  Hammer,
  Users,
  FileCode,
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ 
  icon: Icon, 
  title, 
  delay,
  bgColor,
  textColor,
  borderColor
}) => {
  return (
    <div 
      className={`flex items-center p-5 rounded-xl ${bgColor} shadow-lg transition-all duration-300 opacity-0 animate-fadeIn hover:-translate-y-1 backdrop-blur-sm border-l-4 ${borderColor}`} 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className={`flex-shrink-0 mr-4 ${textColor}`}>
        <Icon size={28} />
      </div>
      <h3 className={`font-semibold text-lg ${textColor}`}>{title}</h3>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const benefitItems = [
    { 
      icon: Zap, 
      title: "Generar leads automáticamente",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-purple-400/20",
      textColor: "text-purple-700",
      borderColor: "border-purple-500"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones y flujos internos",
      bgColor: "bg-gradient-to-r from-indigo-500/10 to-indigo-400/20",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-500"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca en redes sociales",
      bgColor: "bg-gradient-to-r from-violet-500/10 to-violet-400/20",
      textColor: "text-violet-700",
      borderColor: "border-violet-500"
    },
    { 
      icon: BrainCircuit, 
      title: "Crear agentes de IA personalizados",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-purple-400/20",
      textColor: "text-purple-700",
      borderColor: "border-purple-500"
    },
    { 
      icon: Users, 
      title: "Crear aplicaciones basadas en inteligencia artificial",
      bgColor: "bg-gradient-to-r from-indigo-500/10 to-indigo-400/20",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-500"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido y publicaciones en redes",
      bgColor: "bg-gradient-to-r from-violet-500/10 to-violet-400/20",
      textColor: "text-violet-700",
      borderColor: "border-violet-500"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-purple-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"></div>
      
      {/* Glassmorphism blobs for background effect */}
      <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-violet-500/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600 opacity-0 animate-fadeIn">
              ¿Qué vas a aprender?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitItems.map((item, index) => (
              <BenefitItem 
                key={index} 
                icon={item.icon} 
                title={item.title}
                delay={index + 2}
                bgColor={item.bgColor}
                textColor={item.textColor}
                borderColor={item.borderColor}
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
