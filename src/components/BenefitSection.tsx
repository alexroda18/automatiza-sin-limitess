
import React from 'react';
import { 
  BarChart, 
  Zap, 
  Clock, 
  Shield, 
  Sparkles,
  Check
} from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="p-6 bg-white rounded-xl shadow-md border border-gray-100 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const BenefitSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap size={24} className="text-blue-600" />,
      title: "Ahorra tiempo",
      description: "Con estas automatizaciones podrás reducir tareas manuales y enfocarte en lo que realmente importa.",
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      title: "Sistema 24/7",
      description: "Con estas automatizaciones podrás tener un sistema que trabaja constantemente, incluso mientras duermes.",
    },
    {
      icon: <Shield size={24} className="text-blue-600" />,
      title: "Reduce errores",
      description: "Con estas automatizaciones podrás eliminar errores humanos en procesos críticos y mejorar la precisión.",
    },
    {
      icon: <Sparkles size={24} className="text-blue-600" />,
      title: "Mejora la experiencia",
      description: "Con estas automatizaciones podrás brindar respuestas inmediatas a tus clientes y mejorar su satisfacción.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Beneficios de automatizar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Implementa sistemas que trabajen por ti y recupera el control de tu tiempo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
