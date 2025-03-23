
import React from 'react';
import { 
  Zap,
  BrainCircuit,
  Share2,
  Hammer,
  Users,
  FileCode,
  ArrowRight,
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  color,
  gradientFrom,
  gradientTo 
}) => {
  return (
    <div 
      className={`flex flex-col p-6 rounded-xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fadeIn group hover:border-${color}/30 hover:-translate-y-1`} 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-${color}/10 mb-4 flex items-center justify-center text-${color} group-hover:bg-${color}/20 transition-colors`}>
        <Icon size={24} />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      
      <div className={`mt-4 w-12 h-1 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} rounded-full group-hover:w-16 transition-all duration-300`}></div>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const benefitItems = [
    { 
      icon: Zap, 
      title: "Generar leads automáticamente",
      description: "Consigue más clientes potenciales sin esfuerzo adicional gracias a nuestras automatizaciones.",
      color: "[#34d4c8]",
      gradientFrom: "[#34d4c8]",
      gradientTo: "teal-300"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones",
      description: "Optimiza los flujos de trabajo internos y elimina tareas repetitivas en tu empresa.",
      color: "[#DE5E64]",
      gradientFrom: "[#DE5E64]",
      gradientTo: "rose-400"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca",
      description: "Automatiza la gestión de tus redes sociales para aumentar tu visibilidad online.",
      color: "[#5e7df7]",
      gradientFrom: "[#5e7df7]",
      gradientTo: "blue-400"
    },
    { 
      icon: BrainCircuit, 
      title: "Agentes de IA personalizados",
      description: "Crea asistentes virtuales inteligentes adaptados a las necesidades específicas de tu negocio.",
      color: "purple-500",
      gradientFrom: "purple-500",
      gradientTo: "purple-300"
    },
    { 
      icon: Users, 
      title: "Aplicaciones basadas en IA",
      description: "Desarrolla soluciones inteligentes que transformarán la experiencia de tus usuarios.",
      color: "[#DE5E64]",
      gradientFrom: "[#DE5E64]",
      gradientTo: "rose-400"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido",
      description: "Genera y programa publicaciones de calidad para todas tus plataformas digitales.",
      color: "[#5e7df7]",
      gradientFrom: "[#5e7df7]",
      gradientTo: "blue-400"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#34d4c8]/30 to-transparent"></div>
      <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-[#34d4c8]/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#5e7df7] opacity-0 animate-fadeIn">
              ¿Qué vas a encontrar aquí?
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fadeIn animate-delay-100">
              Automatizaciones únicas en internet diseñadas específicamente para impulsar tu negocio y optimizar tu tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
              <BenefitItem 
                key={index} 
                icon={item.icon} 
                title={item.title}
                description={item.description}
                delay={index + 2}
                color={item.color}
                gradientFrom={item.gradientFrom}
                gradientTo={item.gradientTo}
              />
            ))}
          </div>
          
          <div className="mt-14 text-center opacity-0 animate-fadeIn animate-delay-500">
            <a href="#automatizaciones" className="inline-flex items-center gap-2 px-6 py-3 bg-[#5e7df7] text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#5e7df7]/30 hover:-translate-y-1">
              Explorar automatizaciones
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
