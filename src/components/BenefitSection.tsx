
import React from 'react';
import { 
  Zap,
  BrainCircuit,
  Share2,
  Hammer,
  Users,
} from 'lucide-react';

interface BenefitItemProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, delay }) => {
  return (
    <div className={`flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fadeIn hover:border-teal-100`} style={{ animationDelay: `${delay * 100}ms` }}>
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary">
        <Icon size={22} />
      </div>
      <p className="font-medium">{title}</p>
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
    <section id="beneficios" className="py-20 bg-slate-50/70">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fadeIn">
              ¿Qué vas a encontrar aquí?
            </h2>
            <p className="text-lg text-muted-foreground opacity-0 animate-fadeIn animate-delay-100">
              Automatizaciones únicas en internet diseñadas específicamente para impulsar tu negocio y optimizar tu tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefitItems.map((item, index) => (
              <BenefitItem 
                key={index} 
                icon={item.icon} 
                title={item.title}
                delay={index + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
