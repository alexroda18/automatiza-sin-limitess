
import React from 'react';
import { 
  Zap,
  BrainCircuit,
  Share2,
  Hammer,
  Users,
  FileCode,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface LearningCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  bgGradient: string;
  iconColor: string;
  delay: number;
}

const LearningCard: React.FC<LearningCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  details,
  bgGradient,
  iconColor,
  delay
}) => {
  return (
    <div className="opacity-0 animate-fadeIn" style={{ animationDelay: `${delay * 100}ms` }}>
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div 
            className={`relative h-full cursor-pointer rounded-xl overflow-hidden shadow-lg ${bgGradient} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
          >
            <div className="p-6 h-full flex flex-col">
              <div className={`mb-4 ${iconColor}`}>
                <Icon size={28} />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
              <p className="text-white/80 text-sm mt-auto">
                <span className="inline-flex items-center gap-1 text-sm font-medium">
                  Ver más <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </p>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0 shadow-xl">
          <div className={`${bgGradient} p-4`}>
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-white/90 text-sm mt-1">{description}</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const learningCards = [
    { 
      icon: Zap, 
      title: "Generar leads automáticamente",
      description: "Atrae y convierte más prospectos con automatizaciones inteligentes",
      details: [
        "Automatización de campañas multi-canal",
        "Segmentación avanzada basada en comportamiento",
        "Cualificación de leads con IA predictiva"
      ],
      bgGradient: "bg-gradient-to-br from-purple-500 to-indigo-600",
      iconColor: "text-white"
    },
    { 
      icon: Hammer, 
      title: "Sistematizar operaciones y flujos internos",
      description: "Optimiza y automatiza procesos para mayor eficiencia",
      details: [
        "Creación de flujos de trabajo sin código",
        "Integración con herramientas empresariales",
        "Reducción de tareas repetitivas"
      ],
      bgGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      iconColor: "text-white"
    },
    { 
      icon: Share2, 
      title: "Posicionar tu marca en redes sociales",
      description: "Destaca entre la competencia con contenido viral",
      details: [
        "Estrategias de contenido optimizado por IA",
        "Programación inteligente de publicaciones",
        "Análisis de rendimiento en tiempo real"
      ],
      bgGradient: "bg-gradient-to-br from-teal-500 to-emerald-600",
      iconColor: "text-white"
    },
    { 
      icon: BrainCircuit, 
      title: "Crear agentes de IA personalizados",
      description: "Desarrolla asistentes virtuales inteligentes para tu negocio",
      details: [
        "Entrenamiento con datos específicos de tu empresa",
        "Automatización de servicio al cliente 24/7",
        "Interfaces conversacionales naturales"
      ],
      bgGradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      iconColor: "text-white"
    },
    { 
      icon: Users, 
      title: "Crear aplicaciones basadas en inteligencia artificial",
      description: "Transforma tu negocio con soluciones tecnológicas avanzadas",
      details: [
        "Desarrollo de aplicaciones sin código",
        "Integración de modelos de machine learning",
        "Escalabilidad y personalización total"
      ],
      bgGradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      iconColor: "text-white"
    },
    { 
      icon: FileCode, 
      title: "Automatizar contenido y publicaciones en redes",
      description: "Genera contenido de alta calidad de forma automática",
      details: [
        "Creación de contenido original con IA",
        "Adaptación a múltiples plataformas sociales",
        "Optimización SEO automática"
      ],
      bgGradient: "bg-gradient-to-br from-violet-500 to-purple-700",
      iconColor: "text-white"
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
            {learningCards.map((card, index) => (
              <LearningCard 
                key={index} 
                icon={card.icon} 
                title={card.title}
                description={card.description}
                details={card.details}
                bgGradient={card.bgGradient}
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
