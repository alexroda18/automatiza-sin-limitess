
import React from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  Coins, 
  DollarSign, 
  Users, 
  Zap,
  BrainCircuit,
  Share2,
  Hammer
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, delay }) => {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm opacity-0 animate-fadeIn`} style={{ animationDelay: `${delay * 100}ms` }}>
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
        <Icon size={20} />
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

const OutcomeCard: React.FC<{ icon: React.ElementType; title: string; delay: number }> = ({ 
  icon: Icon, 
  title,
  delay
}) => {
  return (
    <div 
      className={`relative rounded-2xl bg-gradient-to-br from-purple-500/90 to-purple-700/90 p-6 text-white shadow-lg opacity-0 animate-fadeIn`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <Icon size={56} />
      </div>
      <div className="relative z-10">
        <Icon size={24} className="mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <a href="#automatizaciones" className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white mt-2 transition-colors">
          Explorar soluciones
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const benefitItems = [
    { icon: Zap, title: "Generar leads automáticamente" },
    { icon: Hammer, title: "Sistematizar operaciones y flujos internos" },
    { icon: Share2, title: "Posicionar tu marca en redes sociales" },
    { icon: BrainCircuit, title: "Crear agentes de IA personalizados" },
    { icon: Users, title: "Crear aplicaciones basadas en IA" },
    { icon: Share2, title: "Automatizar contenido y publicaciones" }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fadeIn">
              ¿Qué vas a encontrar aquí?
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fadeIn animate-delay-100">
              Automatizaciones únicas en internet diseñadas específicamente para impulsar tu negocio y optimizar tu tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefitItems.map((item, index) => (
              <BenefitItem 
                key={index} 
                icon={item.icon} 
                title={item.title}
                delay={index + 2}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <OutcomeCard 
              icon={DollarSign} 
              title="Generar ingresos"
              delay={8}
            />
            <OutcomeCard 
              icon={Coins} 
              title="Ahorrar dinero"
              delay={9}
            />
            <OutcomeCard 
              icon={Clock} 
              title="Liberar tiempo"
              delay={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
