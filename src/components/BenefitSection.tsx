
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
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ 
  icon: Icon, 
  title, 
  delay,
  color,
  gradientFrom,
  gradientTo 
}) => {
  return (
    <div 
      className={`flex flex-col p-5 rounded-xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn group hover:border-${color}/30 hover:-translate-y-1`} 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-${color}/10 mb-3 flex items-center justify-center text-${color} group-hover:bg-${color}/20 transition-colors`}>
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-md mb-1">{title}</h3>
      
      <div className={`mt-3 w-10 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-full group-hover:w-14 transition-all duration-300`}></div>
    </div>
  );
};

const StatItem: React.FC<{number: string; label: string; color: string}> = ({ number, label, color }) => {
  return (
    <div className="text-center">
      <p className={`text-${color} text-3xl md:text-4xl font-bold mb-1`}>{number}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const benefitItems = [
    { 
      icon: Zap, 
      title: "Generar leads automáticamente",
      color: "[#34d4c8]",
      gradientFrom: "[#34d4c8]",
      gradientTo: "teal-300"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones",
      color: "[#DE5E64]",
      gradientFrom: "[#DE5E64]",
      gradientTo: "rose-400"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca",
      color: "[#5e7df7]",
      gradientFrom: "[#5e7df7]",
      gradientTo: "blue-400"
    },
    { 
      icon: BrainCircuit, 
      title: "Agentes de IA personalizados",
      color: "purple-500",
      gradientFrom: "purple-500",
      gradientTo: "purple-300"
    },
    { 
      icon: Users, 
      title: "Aplicaciones basadas en IA",
      color: "[#DE5E64]",
      gradientFrom: "[#DE5E64]",
      gradientTo: "rose-400"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido",
      color: "[#5e7df7]",
      gradientFrom: "[#5e7df7]",
      gradientTo: "blue-400"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Estudiantes", color: "[#34d4c8]" },
    { number: "120+", label: "Empresas", color: "[#DE5E64]" },
    { number: "50+", label: "Automatizaciones", color: "[#5e7df7]" },
    { number: "97%", label: "Satisfacción", color: "purple-500" },
  ];

  return (
    <section id="beneficios" className="py-14 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/30 to-transparent"></div>
      <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block px-4 py-1 bg-[#34d4c8]/10 rounded-full text-[#34d4c8] text-sm font-medium mb-4">
              Plataforma todo-en-uno
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn text-[#5e7df7]">
              ¿Qué vas a encontrar aquí?
            </h2>
            
            {/* Added decorative elements */}
            <div className="flex justify-center gap-2 mt-4">
              <span className="inline-block w-3 h-3 rounded-full bg-[#34d4c8] animate-pulse"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-[#DE5E64] animate-pulse" style={{animationDelay: "300ms"}}></span>
              <span className="inline-block w-3 h-3 rounded-full bg-[#5e7df7] animate-pulse" style={{animationDelay: "600ms"}}></span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefitItems.map((item, index) => (
              <BenefitItem 
                key={index} 
                icon={item.icon} 
                title={item.title}
                delay={index + 2}
                color={item.color}
                gradientFrom={item.gradientFrom}
                gradientTo={item.gradientTo}
              />
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-0 animate-fadeIn animate-delay-500">
            {stats.map((stat, index) => (
              <StatItem 
                key={index}
                number={stat.number}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
