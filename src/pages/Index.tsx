
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
      
      <BenefitSection />
      
      <section id="automatizaciones" className="py-24 bg-gradient-to-b from-white to-teal-50/30 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-100 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#DE5E64] opacity-0 animate-fadeIn text-center">
                Catálogo de automatizaciones
              </h2>
              
              <div className="mt-3 opacity-0 animate-fadeIn animate-delay-200">
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
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#DE5E64] text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#DE5E64]/30 hover:-translate-y-1">
                Ver todas las automatizaciones
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CommunitySection />
    </Layout>
  );
};

export default Index;
