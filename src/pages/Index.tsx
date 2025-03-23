
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AutomationCard from '../components/AutomationCard';
import BenefitSection from '../components/BenefitSection';
import CommunitySection from '../components/CommunitySection';
import { ArrowRight } from 'lucide-react';

const automationData = [
  {
    title: "Stripe ➜ Notion",
    description: "Automatiza el registro de pagos de Stripe en tu base de datos de Notion para un seguimiento perfecto.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 49,
    discount: 20,
    link: "#"
  },
  {
    title: "Gmail ➜ WhatsApp",
    description: "Convierte correos importantes en notificaciones instantáneas de WhatsApp, nunca más pierdas un lead.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 39,
    link: "#"
  },
  {
    title: "IA Generativa ➜ Social Media",
    description: "Genera contenido optimizado para todas tus redes sociales con un solo clic usando IA avanzada.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 69,
    discount: 15,
    link: "#"
  },
  {
    title: "Calendly ➜ CRM",
    description: "Integra automáticamente las citas de Calendly en tu CRM favorito para un seguimiento eficiente.",
    image: "https://images.unsplash.com/photo-1606327054729-5b7241aa65bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 45,
    link: "#"
  },
  {
    title: "WordPress ➜ Newsletter",
    description: "Convierte automáticamente tus posts de WordPress en newsletters atractivos y personalizados.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 55,
    discount: 10,
    link: "#"
  },
  {
    title: "Shopify ➜ WhatsApp",
    description: "Notifica a tus clientes sobre el estado de sus pedidos directamente por WhatsApp.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    price: 59,
    link: "#"
  }
];

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <section id="automatizaciones" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fadeIn">
                  Catálogo de automatizaciones
                </h2>
                <p className="text-lg text-muted-foreground opacity-0 animate-fadeIn animate-delay-100">
                  Soluciones prácticas diseñadas para resolver problemas reales y optimizar tu flujo de trabajo.
                </p>
              </div>
              
              <div className="mt-6 md:mt-0 opacity-0 animate-fadeIn animate-delay-200">
                <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  +15 automatizaciones disponibles
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationData.map((automation, index) => (
                <AutomationCard
                  key={index}
                  title={automation.title}
                  description={automation.description}
                  image={automation.image}
                  price={automation.price}
                  discount={automation.discount}
                  link={automation.link}
                  delay={(index + 1) * 100}
                />
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <a href="#" className="btn-secondary inline-flex items-center gap-2">
                Ver todas las automatizaciones
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <BenefitSection />
      <CommunitySection />
    </Layout>
  );
};

export default Index;
