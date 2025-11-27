import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Users, 
  Workflow, 
  TrendingUp, 
  Bot, 
  AppWindow, 
  Share2,
  ChevronLeft,
  ChevronRight,
  Star,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/button';

const typewriterPhrases = [
  "generar ingresos",
  "reducir costes",
  "ahorrar tiempo",
];

const testimonials = [
  {
    text: "Han revolucionado por completo nuestra forma de trabajar con varias automatizaciones que nos hicieron a medida para cada departamento. ",
    name: "Juan Antonio Bikoro",
    initials: "JAB"
  },
  {
    text: "Tienen una habilidad increíble para detectar el más mínimo detalle y construir automatizaciones que hacen mi vida más fácil. Son verdaderos socios en mi negocio.",
    name: "Aggie McCabe",
    initials: "AM"
  },
  {
    text: "Cuando trabajas con ellos, estás invirtiendo en la expansión de tu empresa y liberando tiempo para enfocarte en lo que realmente importa.",
    name: "Sarah Saxty",
    initials: "SS"
  },
  {
    text: "Han configurado automatizaciones increíbles para mi negocio que me han ayudado muchísimo a liberar mi tiempo.",
    name: "Krystle O'Neil",
    initials: "KO"
  },
  {
    text: "Son increíbles con todo lo relacionado con automatizaciones y agentes de IA. Me han ahorrado muchas horas de trabajo. ",
    name: "Leyla Bavi",
    initials: "LB"
  }
];

const useCases = [
  {
    id: "case-1",
    category: "CASO 1: Agente de IA para atención telefónica",
    title: "\"Tu recepcionista virtual que nunca duerme\"",
    subtitle: "Tu recepcionista virtual que nunca duerme",
    problem:
      "Tu equipo pierde 10-20 horas semanales respondiendo las mismas preguntas: horarios, precios, disponibilidad. Las llamadas interrumpen el trabajo importante y fuera de horario pierdes oportunidades.",
    solutionLabel: "La solución:",
    solution: [
      "Agente conversacional disponible 24/7 con voz natural en español",
      "Responde preguntas frecuentes y agenda citas en Google/Outlook",
      "Detecta llamadas urgentes y las transfiere a la persona adecuada",
      "Envía resumen por email o WhatsApp después de cada llamada",
      "Registra automáticamente contactos en tu CRM"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 12-18 horas/semana del equipo administrativo",
      "Reducción del 70% en llamadas que requieren a un humano",
      "Disponibilidad 24/7, fines de semana incluidos",
      "Incremento del 35-50% en citas agendadas"
    ],
    image: "/images/video-to-social.jpg.png",
    imageLink: "https://cosstudio.thrivecart.com/video-a-redes-sociales/",
    demoLink: "https://cosstudio.thrivecart.com/video-a-redes-sociales/",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  },
  {
    id: "case-2",
    category: "CASO 2: Clasificación inteligente de correos",
    title: "\"Tu bandeja de entrada que se gestiona sola\"",
    subtitle: "Tu bandeja de entrada que se gestiona sola",
    problem:
      "Tu equipo se ahoga entre correos: consultas repetidas, spam, mensajes urgentes perdidos. Cada persona dedica 2-3 horas diarias a clasificar y responder lo básico.",
    solutionLabel: "La solución:",
    solution: [
      "IA que lee y clasifica emails (urgente/consulta/venta/spam)",
      "Responde automáticamente a las 20 preguntas más frecuentes",
      "Extrae información clave y la registra en CRM o Google Sheets",
      "Enruta mensajes al departamento correcto",
      "Solo notifica al equipo lo que requiere intervención humana",
      "Seguimiento automático si no hay respuesta en X días"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 8-15 horas/semana por persona",
      "Reducción del 65% en emails que llegan a bandeja humana",
      "Mejora del 90% en tiempo de primera respuesta (de horas a minutos)",
      "Incremento del 40% en satisfacción del cliente"
    ],
    image: "/images/2_automatizacion.png",
    imageLink: "https://cosstudio.thrivecart.com/convierte-noticias-en-contenido/",
    demoLink: "https://cosstudio.thrivecart.com/convierte-noticias-en-contenido/",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  },
  {
    id: "case-3",
    category: "CASO 3: Calificación automática de leads",
    title: "\"Tus vendedores solo hablan con clientes listos para comprar\"",
    subtitle: "Tus vendedores solo hablan con clientes listos para comprar",
    problem:
      "Tus vendedores pierden 60% de su tiempo persiguiendo leads que nunca comprarán. Los leads buenos se enfrían esperando respuesta.",
    solutionLabel: "La solución:",
    solution: [
      "Puntuación automática de leads (presupuesto, urgencia, encaje)",
      "Leads calientes directos a WhatsApp/Slack del vendedor",
      "Leads tibios entran a secuencias de nurturing automatizadas",
      "Leads fríos se nutren con contenido educativo",
      "Enriquecimiento automático con datos de LinkedIn y web",
      "Dashboard en tiempo real con pipeline y calidad"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 15-20 horas/semana por vendedor",
      "Reducción del 50% en tiempo hasta la primera llamada cualificada",
      "Mejora del 35-60% en tasa de conversión",
      "2-3x más leads procesados con el mismo equipo"
    ],
    image: "/images/de-reunion-a-propuesta-y-coachin-notes.png",
    imageLink: "https://subscribepage.io/automatizasinlimites",
    demoLink: "https://subscribepage.io/automatizasinlimites",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  },
  {
    id: "case-4",
    category: "CASO 4: Onboarding automatizado de clientes",
    title: "\"De firma de contrato a cliente activo en 24 h\"",
    subtitle: "De firma de contrato a cliente activo en 24 horas",
    problem:
      "Tras la venta, tu equipo dedica 3-5 horas por cliente en emails, accesos, reuniones y recopilación de info. El cliente espera días para comenzar.",
    solutionLabel: "La solución:",
    solution: [
      "Contrato firmado activa toda la secuencia automáticamente",
      "Email de bienvenida con próximos pasos",
      "Creación automática de cuentas y accesos",
      "Cuestionario de descubrimiento capturado en CRM",
      "Kickoff agendado en el calendario",
      "Equipo interno notificado con toda la info",
      "Carpeta de proyecto creada en Drive/Notion"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 3-5 horas por cliente (40 horas al mes con 10 clientes)",
      "Reducción del 85% en tiempo de venta a kickoff",
      "Mejora del 200% en experiencia del cliente",
      "+25% en retención gracias a activación inmediata"
    ],
    image: "/images/encuentra-leads.png",
    imageLink: "https://subscribepage.io/automatizasinlimites",
    demoLink: "https://subscribepage.io/automatizasinlimites",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  },
  {
    id: "case-5",
    category: "CASO 5: Extracción automática de facturas y documentos",
    title: "\"Adiós al data entry manual\"",
    subtitle: "Adiós al data entry manual para siempre",
    problem:
      "Tu equipo dedica 20-40 horas mensuales introduciendo datos de facturas a mano. Es tedioso, propenso a errores y afecta el cumplimiento con Hacienda.",
    solutionLabel: "La solución:",
    solution: [
      "La IA extrae datos de facturas recibidas por email o WhatsApp",
      "Captura proveedor, NIF, fecha, concepto, IVA y total",
      "Carga automática en Excel, Sheets o ERPs (Holded, Contasimple...)",
      "Valida duplicados y errores",
      "Alertas de facturas próximas a vencer",
      "Categorización automática de gastos",
      "Reportes mensuales generados solos"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 25-40 horas al mes en data entry",
      "Reducción del 95% en errores de transcripción",
      "Cumplimiento del 100% en plazos gracias a alertas",
      "€600-1.200/mes ahorrados en costes administrativos"
    ],
    image: "/images/factura-automatica.png",
    imageLink: "https://subscribepage.io/automatizasinlimites",
    demoLink: "https://subscribepage.io/automatizasinlimites",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  },
  {
    id: "case-6",
    category: "CASO 6: Generación automática de propuestas y presupuestos",
    title: "\"De consulta a propuesta profesional en 3 minutos\"",
    subtitle: "De consulta a propuesta profesional en 3 minutos",
    problem:
      "Cada propuesta te toma 45-90 minutos (copiar plantilla, personalizar, pricing, PDF, enviar). Pierdes oportunidades por tardar días en responder.",
    solutionLabel: "La solución:",
    solution: [
      "Formulario simple recoge necesidades del cliente",
      "PDF profesional instantáneo con tu branding",
      "Incluye alcance, pricing y T&C personalizadas",
      "Envío automático por email y tracking de aperturas",
      "Recordatorios si no responden en X días"
    ],
    resultLabel: "Resultado:",
    result: [
      "Ahorro de 6-10 horas/semana en propuestas",
      "Respuesta 90% más rápida (de días a minutos)",
      "Mejora del 40-60% en tasa de conversión",
      "3-5x más propuestas enviadas con el mismo equipo"
    ],
    image: "/images/tiktok-scraper.png",
    imageLink: "https://subscribepage.io/automatizasinlimites",
    demoLink: "https://subscribepage.io/automatizasinlimites",
    calendarLink: "https://subscribepage.io/automatizasinlimites"
  }
];

const Hero: React.FC = () => {
  const getCurrentTestimonial = () => testimonials[currentTestimonial];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [maxContentHeight, setMaxContentHeight] = useState(0);
  const contentRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Calcular la altura máxima de todos los casos de uso después de que se rendericen
    const timer = setTimeout(() => {
      const heights = contentRefs.current.map(ref => {
        if (ref) {
          return ref.scrollHeight;
        }
        return 0;
      });
      const maxHeight = Math.max(...heights, 800); // Mínimo 800px
      if (maxHeight > 0) {
        setMaxContentHeight(maxHeight);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentPhrase = typewriterPhrases[currentPhraseIndex];
      
      // If deleting
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      } else {
        // If typing
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }
      
      // If finished typing
      if (!isDeleting && currentText === currentPhrase) {
        // Wait at full phrase for a moment
        setTimeout(() => setIsDeleting(true), 1000);
      } 
      // If finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % typewriterPhrases.length);
      }
    }, isDeleting ? 30 : 70); // Faster transition speeds
    
    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <section className="relative overflow-x-hidden min-h-screen bg-[#0A0A14]">
      {/* Elementos decorativos con efecto morado */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-32 pt-40 md:pt-40">
          {/* Columna de texto */}
          <div className="w-full md:w-[480px] space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-white">
              Automatizaciones y agentes IA para{' '}
              <div className="h-[72px] mt-2">
                <span className="bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF] bg-clip-text text-transparent whitespace-nowrap">
                {currentText}
                  <span className="animate-pulse text-white">|</span>
              </span>
              </div>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
              Implementamos automatizaciones y agentes de  IA que eliminan +70% de tareas manuales: llamadas, emails, documentos, leads y muchas más.            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center md:justify-start">
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                asChild
              >
                <a href="#automatizaciones">Agendar llamada gratuita</a>
              </Button>
              
              <Button 
                className="px-8 py-4 bg-[#12123A] text-white transition-all hover:bg-[#1E1E4A] active:scale-[0.98] hover:-translate-y-0.5 border border-[#4F7FFF]/30 font-medium uppercase"
                asChild
              >
                <a 
                  href="https://subscribepage.io/automatizasinlimites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver casos de uso reales
                </a>
              </Button>
            </div>
          </div>

          {/* Columna derecha: Video de YouTube */}
          <div className="w-full md:w-[600px] opacity-0 animate-fadeIn animate-delay-200">
            <div className="relative">
              <div className="p-1 bg-[#12123A]/60 backdrop-blur-md rounded-2xl shadow-xl border border-[#1E1E4A] overflow-hidden">
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/IyC3pfyOZDk?rel=0" 
                    title="Tutorial de Automatizaciones"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
              {/* Elementos decorativos adicionales */}
              <div className="absolute -top-6 right-0 w-20 h-20 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-20 blur-md -z-10"></div>
              <div className="absolute -bottom-6 left-0 w-24 h-24 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-15 blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Servicios */}
      <section className="relative bg-[#0A0A14] py-16 mt-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Qué hacemos y para quién
            </h2>
            <p className="text-lg text-gray-400">
              Soluciones de automatización e IA diseñadas para transformar cualquier negocio, sin importar su tamaño o industria.
            </p>
          </div>

          {/* Diseño mejorado con 3 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Automatizamos procesos clave</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Creamos automatizaciones a medida para que tu negocio funcione con menos tareas manuales y menos errores.
                </p>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Workflow className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Implementamos agentes de IA</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Desde atención al cliente hasta clasificación de información. Agentes que trabajan 24/7 sin añadir carga a tu equipo.
                </p>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#8F6BFF] to-[#4F7FFF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Para negocios de cualquier tamaño</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Para negocios pequeños, medianos y grandes. Desde startups hasta grandes corporaciones.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-lg"
              asChild
            >
              <a 
                href="https://subscribepage.io/automatizasinlimites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una cita gratuita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Detallados */}
      <section id="nuestros-servicios" className="relative bg-[#0A0A14] py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-400">
              Elige el nivel de acompañamiento que necesitas y avanzamos contigo paso a paso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Servicio 1 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF]" />
              <div className="flex h-full flex-col">
                <div className="mb-6 text-center text-xs font-semibold tracking-[0.4em] text-[#A5B4FC]">
                  SERVICIO 1 — AUDITORÍA + ROADMAP
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Auditoría de procesos y mapa de automatizaciones y agentes de IA
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Analizamos tu negocio, detectamos cuellos de botella y diseñamos un plan claro de automatizaciones y agentes de IA para implementar por fases.
                  </p>
                </div>
                <div className="mt-auto pt-4 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-[#0D0D27]/70 px-3 py-3 text-sm leading-relaxed text-white">
                    <span className="text-white font-medium">Para quién:</span> negocios que quieren saber qué automatizar primero y cómo obtener el mejor ROI.
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      className="w-auto px-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] border-none font-medium"
                      asChild
                    >
                      <a 
                        href="https://subscribepage.io/automatizasinlimites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF]" />
              <div className="flex h-full flex-col">
                <div className="mb-6 text-center text-xs font-semibold tracking-[0.4em] text-[#A5B4FC]">
                  SERVICIO 2 — CREACIÓN DE AUTOMATIZACIONES
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Diseño y desarrollo de automatizaciones hechas a medida
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Creamos automatizaciones hechas a medida para tu negocio que ahorran tiempo, reducen tareas manuales y mejoran la eficiencia.
                  </p>
                </div>
                <div className="mt-auto pt-4 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-[#0D0D27]/70 px-3 py-3 text-sm leading-relaxed text-white">
                    <span className="text-white font-medium">Para quién:</span> equipos que quieren automatizar procesos clave y mejorar la eficiencia.
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      className="w-auto px-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] border-none font-medium"
                      asChild
                    >
                      <a 
                        href="https://subscribepage.io/automatizasinlimites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#8F6BFF] to-[#4F7FFF]" />
              <div className="flex h-full flex-col">
                <div className="mb-6 text-center text-xs font-semibold tracking-[0.4em] text-[#A5B4FC]">
                  SERVICIO 3 — DESARROLLO DE AGENTES DE IA
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Agentes de IA para atención, soporte y operaciones
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Creamos agentes de IA que responden a clientes, procesan información, clasifican datos, gestionan tareas y trabajan 24/7 sin supervisión.
                  </p>
                </div>
                <div className="mt-auto pt-4 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-[#0D0D27]/70 px-3 py-3 text-sm leading-relaxed text-white">
                    <span className="text-white font-medium">Para quién:</span> negocios que quieren dar un salto en eficiencia y reducir la carga de trabajo de su equipo.
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      className="w-auto px-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] border-none font-medium"
                      asChild
                    >
                      <a 
                        href="https://subscribepage.io/automatizasinlimites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8F6BFF] via-[#4F7FFF] to-[#8F6BFF]" />
              <div className="flex h-full flex-col">
                <div className="mb-6 text-center text-xs font-semibold tracking-[0.4em] text-[#A5B4FC]">
                  SERVICIO 4 — MANTENIMIENTO Y SOPORTE
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    Soporte, ajustes y mejoras continuas de automatizaciones y agentes de IA
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300">
                    Nos encargamos del monitoreo, resolución de incidencias y mejoras mensuales para que tus automatizaciones y agentes de IA sigan funcionando sin problemas.
                  </p>
                </div>
                <div className="mt-auto pt-4 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-[#0D0D27]/70 px-3 py-3 text-sm leading-relaxed text-white">
                    <span className="text-white font-medium">Para quién:</span> negocios que quieren estabilidad, soporte técnico y evolución continua de sus automatizaciones y agentes de IA.
                  </div>
                  <div className="flex justify-center">
                    <Button 
                      className="w-auto px-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] border-none font-medium"
                      asChild
                    >
                      <a 
                        href="https://subscribepage.io/automatizasinlimites"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso reales */}
      <section id="casos-de-uso" className="py-14 bg-[#0A0A14] relative">

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Casos de uso reales
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Mira ejemplos concretos de automatizaciones y agentes de IA que ya están funcionando en negocios como el tuyo.
              </p>
            </div>

            {/* Layout con tabs a la izquierda y contenido a la derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Tabs en columna a la izquierda */}
              <div className="lg:col-span-1">
                <div className="bg-[#0A0A1B]/60 backdrop-blur-md rounded-2xl border border-[#1E1E4A] p-4">
                  <div className="flex flex-col gap-2">
                    {useCases.map((useCase, index) => (
                      <button
                        key={useCase.id}
                        onClick={() => setActiveUseCase(index)}
                        className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg text-left ${
                          activeUseCase === index
                            ? 'bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {useCase.category.replace('CASO ', '')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenido a la derecha */}
              <div className="lg:col-span-3">
                <div 
                  className="bg-[#0A0A1B]/60 backdrop-blur-md rounded-2xl border border-[#1E1E4A] overflow-hidden transition-all duration-300"
                  style={{ minHeight: maxContentHeight > 0 ? `${maxContentHeight}px` : '800px' }}
                >
                  {/* Renderizar todos los casos ocultos para medir sus alturas */}
                  <div className="absolute opacity-0 pointer-events-none -z-10">
                    {useCases.map((useCase, index) => (
                      <div
                        key={`hidden-${useCase.id}`}
                        ref={(el) => {
                          if (el) contentRefs.current[index] = el;
                        }}
                        className="p-8 md:p-12"
                      >
                        <p className="text-xs font-semibold tracking-[0.4em] text-[#A5B4FC] mb-3">
                          {useCase.category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                          {useCase.subtitle}
                        </h3>
                        <div className="space-y-6 text-sm md:text-base text-gray-300">
                          <div>
                            <p className="font-semibold text-white mb-2">El problema:</p>
                            <p className="leading-relaxed">{useCase.problem}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-white mb-2">{useCase.solutionLabel}</p>
                            <ul className="mt-2 list-disc pl-5 space-y-2">
                              {useCase.solution.map((item) => (
                                <li key={item} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-white mb-2">{useCase.resultLabel}</p>
                            <ul className="mt-2 list-disc pl-5 space-y-2">
                              {useCase.result.map((item) => (
                                <li key={item} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                          <div className="flex-1 h-10"></div>
                          <div className="flex-1 h-10"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {useCases[activeUseCase] && (
                    <div className="flex flex-col animate-fadeIn">
                      {/* Contenido */}
                      <div className="p-8 md:p-6 flex flex-col">
                        <p className="text-xs font-semibold tracking-[0.2em] text-[#A5B4FC] mb-3">
                          {useCases[activeUseCase].category}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                          {useCases[activeUseCase].subtitle}
                        </h3>

                        <div className="space-y-6 text-sm md:text-base text-gray-300 flex-grow">
                          <div>
                            <p className="font-semibold text-white mb-2">El problema:</p>
                            <p className="leading-relaxed">{useCases[activeUseCase].problem}</p>
                          </div>

                          <div>
                            <p className="font-semibold text-white mb-2">{useCases[activeUseCase].solutionLabel}</p>
                            <ul className="mt-2 list-disc pl-5 space-y-2">
                              {useCases[activeUseCase].solution.map((item) => (
                                <li key={item} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-white mb-2">{useCases[activeUseCase].resultLabel}</p>
                            <ul className="mt-2 list-disc pl-5 space-y-2">
                              {useCases[activeUseCase].result.map((item) => (
                                <li key={item} className="leading-relaxed">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                          <Button
                            className="flex-1 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white"
                            asChild
                          >
                            <a href={useCases[activeUseCase].demoLink} target="_blank" rel="noopener noreferrer">
                              Ver demo
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 border border-white/20 bg-transparent text-white hover:bg-white/10"
                            asChild
                          >
                            <a href={useCases[activeUseCase].calendarLink} target="_blank" rel="noopener noreferrer">
                              Quiero esto para mi negocio
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cómo trabajamos */}
      <section id="como-trabajamos" className="relative bg-[#0A0A14] py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Cómo trabajamos
            </h2>
            <p className="text-lg text-gray-400">
              Un proceso claro y estructurado para transformar tu negocio con automatizaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Llamada gratuita de 20 minutos
                </h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Analizamos tu caso, entendemos tus procesos y definimos qué tiene sentido automatizar para conseguir resultados rápidos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Implementación a medida
                </h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Diseñamos y construimos las automatizaciones o agentes de IA necesarios para optimizar tus operaciones. Entregamos en fases claras y medibles.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#8F6BFF] to-[#4F7FFF]" />
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-6 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Mantenimiento y evolución
                </h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Monitoreamos, ajustamos y mejoramos tus sistemas para garantizar estabilidad, rendimiento y crecimiento continuo.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-lg"
              asChild
            >
              <a 
                href="https://subscribepage.io/automatizasinlimites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada gratuita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section id="nuestros-clientes" className="relative bg-[#0A0A14] py-12">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Descubre cómo las automatizaciones han transformado sus negocios
            </p>
          </div>

          {/* Carrusel de Testimonios */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonio Principal */}
            <div className="bg-[#0A0A1B]/60 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#1E1E4A] text-center">
              {/* Estrellas */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Texto del Testimonio */}
              <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                "{getCurrentTestimonial().text}"
              </blockquote>
              
              {/* Información del Cliente */}
              <div className="flex flex-col items-center">
                <h4 className="text-white font-semibold text-lg">
                  {getCurrentTestimonial().name}
                </h4>
              </div>
            </div>

            {/* Controles de Navegación */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 bg-[#0A0A1B] border border-[#1E1E4A] rounded-full flex items-center justify-center text-white hover:border-[#4F7FFF]/50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Indicadores */}
              <div className="flex gap-2">
                {[...Array(testimonials.length)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === i 
                        ? 'bg-[#4F7FFF] scale-125' 
                        : 'bg-[#1E1E4A] hover:bg-[#4F7FFF]/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 bg-[#0A0A1B] border border-[#1E1E4A] rounded-full flex items-center justify-center text-white hover:border-[#4F7FFF]/50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-lg"
              asChild
            >
              <a 
                href="https://subscribepage.io/automatizasinlimites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada gratuita
              </a>
            </Button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>

      

      {/* Sección Por qué confiar en nosotros */}
      <section className="relative bg-[#0A0A14] py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Por qué confiar en nosotros?
            </h2>
            <p className="text-lg text-gray-400">
              Un enfoque práctico y transparente para transformar tu negocio con automatizaciones que realmente funcionan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Razón 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Explicamos las cosas sin tecnicismos</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Hablamos en tu idioma. Sin jerga técnica innecesaria, te explicamos qué hacemos, cómo funciona y por qué es importante para tu negocio.
                </p>
              </div>
            </div>

            {/* Razón 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Diseñamos soluciones a medida</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Cada negocio es único. Creamos automatizaciones específicas para tus procesos, no soluciones genéricas que no encajan.
                </p>
              </div>
            </div>

            {/* Razón 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#8F6BFF] to-[#4F7FFF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Trabajamos por fases claras</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Proyectos estructurados con entregables definidos. Sabes exactamente qué recibirás en cada etapa y cuándo.
                </p>
              </div>
            </div>

            {/* Razón 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8F6BFF] via-[#4F7FFF] to-[#8F6BFF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Ofrecemos soporte continuo</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  No te dejamos solo después de la implementación. Monitoreamos, ajustamos y mejoramos tus sistemas de forma continua.
                </p>
              </div>
            </div>

            {/* Razón 5 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Priorizamos estabilidad y eficiencia</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  No nos dejamos llevar por modas. Construimos sistemas robustos que funcionan día a día, sin complicaciones innecesarias.
                </p>
              </div>
            </div>

            {/* Razón 6 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6C8CFF]/60">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF]" />
              <div className="flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Entregamos sistemas fáciles de mantener</h3>
                <p className="text-base leading-relaxed text-gray-300">
                  Construimos con código limpio y documentación clara. Tus sistemas serán fáciles de entender, modificar y escalar cuando lo necesites.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-lg"
              asChild
            >
              <a 
                href="https://subscribepage.io/automatizasinlimites"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada gratuita de 20 minutos
              </a>
            </Button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="relative bg-[#0A0A14] py-12">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Resolvemos todas tus dudas sobre nuestras automatizaciones y agentes de IA
            </p>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Necesito conocimientos técnicos para trabajar con vosotros?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 1 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    No. Nos encargamos de todo el proceso y explicamos las partes importantes de forma clara y sin tecnicismos.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Trabajáis con cualquier tipo de negocio?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 2 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sí. Automatizamos procesos para emprendedores, equipos pequeños y empresas más establecidas, independientemente del sector.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Cómo sé qué partes de mi negocio se pueden automatizar?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 3 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    En la llamada gratuita identificamos oportunidades inmediatas. Si quieres un análisis más profundo, puedes contratar la Auditoría + Roadmap.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Qué herramientas utilizáis?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 4 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Principalmente Make y n8n para automatización, junto con modelos y servicios de IA. Elegimos la tecnología según lo que tu negocio realmente necesite.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Cuánto tiempo tarda un proyecto?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 5 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 5 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Depende del alcance. Un proyecto pequeño puede completarse en unos días; uno más avanzado suele tardar entre 1 y 3 semanas.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Ofrecéis soporte después de la implementación?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 6 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 6 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sí. Contamos con un servicio de mantenimiento mensual que incluye monitoreo, ajustes, correcciones y mejoras continuas.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Puedo contratar solo una automatización pequeña?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 7 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 7 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sí. Podemos empezar por un caso de uso puntual y, si lo necesitas, escalar después.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 8 ? null : 8)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿Los agentes de IA reemplazan a personas?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 8 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 8 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    No. Su función es reducir carga operativa y gestionar tareas repetitivas, no sustituir al equipo humano.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 9 */}
            <div className="bg-[#0A0A1B]/80 backdrop-blur-md rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 9 ? null : 9)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">
                  ¿La llamada gratuita tiene compromiso?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                  openFAQ === 9 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 9 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    No. Es simplemente una conversación para entender tu caso y ver si podemos ayudarte.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>

      {/* Sección CTA Final */}
      <section className="relative bg-[#0A0A14] py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tu competencia ya está automatizando.{' '}
              <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">
                ¿Cuánto tiempo más vas a esperar?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Cada semana que pasa, tu equipo pierde <span className="text-white font-semibold">20+ horas</span> en tareas que una IA podría hacer mejor, más rápido y sin errores. Mientras tanto, tus competidores están reinvirtiendo ese tiempo en crecer, vender más, y escalar.
            </p>
            
            <p className="text-xl md:text-2xl text-white font-semibold">
              La pregunta no es "¿debería automatizar?" sino{' '}
              <span className="bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] bg-clip-text text-transparent">
                "¿por qué todavía no lo he hecho?"
              </span>
            </p>

            <div className="pt-8">
              <Button 
                className="px-10 py-6 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white text-lg font-semibold transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-1 border-none uppercase shadow-lg shadow-[#9747FF]/30"
                asChild
              >
                <a 
                  href="https://subscribepage.io/automatizasinlimites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero automatizar mi negocio ya
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
