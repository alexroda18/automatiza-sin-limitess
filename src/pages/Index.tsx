import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AutomationCard from '../components/AutomationCard';
import CommunitySection from '../components/CommunitySection';

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
      
      <section id="automatizaciones" className="py-24 bg-gradient-to-b from-black to-[#12123A] relative">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4F7FFF]/20 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4F7FFF]/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cursos de Automatización
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AutomationCard
                title="Convierte un video en contenido para tus redes"
                description="Transforma automáticamente tus videos largos en piezas de contenido optimizadas para cada red social."
                price="49€"
                isFree={false}
                image="/images/video-to-social.jpg.png"
                link="https://cosstudio.thrivecart.com/video-a-redes-sociales/"
                freeForMembers={true}
              />
              <AutomationCard
                title="Convierte noticias relevantes en contenido diario para tus redes sociales"
                description="Esta automatización evalúa y convierte diariamente noticias de sectores específicos y las transforma en contenido para tus redes sociales."
                price="49€"
                image="/images/2_automatizacion.png"
                link="https://cosstudio.thrivecart.com/convierte-noticias-en-contenido/"
                customButtonText="Comprar ahora"
                comingSoonDate="04/04"
              />
              <AutomationCard
                title="De una reunión, genera una oferta estructurada para el cliente y cierra la venta"
                description="Esta automatización generará una oferta para un cliente potencial basada en el análisis de tu reunión y sus necesidades. También te enviará una notificación en Slack y creará una tarea en ClickUp para revisar la oferta."
                price="49€"
                image="/images/de-reunion-a-propuesta-y-coachin-notes.png"
                link="https://subscribepage.io/automatizasinlimites"
                comingSoonDate="07/04"
                customButtonText="Unirme a la lista de espera"
              />
              <AutomationCard
                title="Encuentra leads cercanos, analiza su web y envíales un correo personalizado"
                description="Esta automatización genera un listado de clientes potenciales cercanos, analiza sus páginas web y crea un correo personalizado para ofrecerles tus servicios de forma estratégica y sin esfuerzo."
                price="49€"
                image="/images/encuentra-leads.png"
                link="https://subscribepage.io/automatizasinlimites"
                comingSoonDate="11/04"
                customButtonText="Unirme a la lista de espera"
              />
              <AutomationCard
                title="Obtén y filtra contenido viral de redes sociales como TikTok"
                description="Con esta automatización recibirás periódicamente un listado de contenido en tendencia de redes como TikTok, listo para inspirarte, replicar ideas y aumentar el engagement de tu marca."
                price="49€"
                image="/images/factura-automatica.png"
                link="https://subscribepage.io/automatizasinlimites"
                comingSoonDate="14/04"
                customButtonText="Unirme a la lista de espera"
              />
              <AutomationCard
                title="Genera facturas automáticamente y envíalas al cliente"
                description="Esta automatización procesa la información que le proporciones, genera una factura en segundos y la envía automáticamente al correo del cliente. Ahorra tiempo y olvídate del papeleo."
                price="49€"
                image="/images/tiktok-scraper.png"
                link="https://subscribepage.io/automatizasinlimites"
                comingSoonDate="18/04"
                customButtonText="Unirme a la lista de espera"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CommunitySection />
    </Layout>
  );
};

export default Index;
