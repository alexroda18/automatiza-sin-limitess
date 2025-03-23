
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
      bgColor: "bg-gradient-to-r from-teal-500/10 to-teal-400/20",
      textColor: "text-teal-700",
      borderColor: "border-teal-500"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones",
      bgColor: "bg-gradient-to-r from-rose-500/10 to-rose-400/20",
      textColor: "text-rose-700",
      borderColor: "border-rose-500"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-400/20",
      textColor: "text-blue-700",
      borderColor: "border-blue-500"
    },
    { 
      icon: BrainCircuit, 
      title: "Agentes de IA personalizados",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-purple-400/20",
      textColor: "text-purple-700",
      borderColor: "border-purple-500"
    },
    { 
      icon: Users, 
      title: "Aplicaciones basadas en IA",
      bgColor: "bg-gradient-to-r from-rose-500/10 to-rose-400/20",
      textColor: "text-rose-700",
      borderColor: "border-rose-500"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-400/20",
      textColor: "text-blue-700",
      borderColor: "border-blue-500"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/30 to-transparent"></div>
      
      {/* Glassmorphism blobs for background effect */}
      <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#DE5E64] opacity-0 animate-fadeIn">
              ¿Qué vas a encontrar aquí?
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
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
