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
  ChevronDown,
  FileSearch,
  Wrench,
  Phone,
  Rocket,
  MessageSquare
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
    calendarLink: "https://calendly.com/automatizasinlimites/30min"
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
  const [isFlipped, setIsFlipped] = useState<boolean[]>([false, false, false]);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const servicesSectionRef = React.useRef<HTMLElement | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState("automation");
  const flipCardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  
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
    // Intersection Observer para detectar cuando la sección de servicios entra en vista
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer para voltear las cajas automáticamente en móvil al hacer scroll
  useEffect(() => {
    // Solo en móvil (ancho menor a 768px)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const observers: IntersectionObserver[] = [];

    flipCardRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Cuando la caja entra en el viewport, volterla
              setIsFlipped((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            } else {
              // Cuando la caja sale del viewport, volverla a la posición inicial
              setIsFlipped((prev) => {
                const newState = [...prev];
                newState[index] = false;
                return newState;
              });
            }
          });
        },
        {
          threshold: 0.5, // Se activa cuando el 50% de la caja es visible
          rootMargin: '-50px 0px', // Margen para activar antes de que esté completamente visible
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
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
    <section className="relative overflow-x-hidden min-h-screen w-full bg-gradient-to-br from-[#0A0A14] via-[#0F0F1F] to-[#0A0A14] pt-20 sm:pt-24 md:pt-0">
      {/* Elementos decorativos con efecto morado */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 max-w-screen-xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-9 sm:gap-4 md:gap-32 w-full py-8 sm:py-12 md:py-24 md:min-h-screen">
          {/* Columna de texto */}
          <div className="w-full md:w-[480px] space-y-4 sm:space-y-5 md:space-y-8 text-center md:text-left mb-0 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight text-white">
              Automatizaciones y agentes IA para{' '}
              <div className="h-[60px] sm:h-[72px] mt-0 sm:mt-1 md:mt-2 flex items-center justify-center md:justify-start">
                <span className="bg-gradient-to-r from-[#4F7FFF] via-[#9747FF] to-[#4F7FFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-[56px] whitespace-nowrap">
                {currentText}
                  <span className="animate-pulse text-white">|</span>
              </span>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0 px-2 sm:px-0">
              Implementamos automatizaciones y agentes de  IA que eliminan +70% de tareas manuales: llamadas, emails, documentos, leads y muchas más.            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-5 sm:pt-4 md:pt-4 justify-center md:justify-start">
              <Button 
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-opacity transition-transform duration-200 hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-sm sm:text-base"
                asChild
              >
                <a href="https://calendly.com/automatizasinlimites/30min" target="_blank" rel="noopener noreferrer">Agendar llamada gratuita</a>
              </Button>
              
              <Button 
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[#12123A] text-white transition-colors transition-transform duration-200 hover:bg-[#1E1E4A] active:scale-[0.98] hover:-translate-y-0.5 border border-[#4F7FFF]/30 font-medium uppercase text-sm sm:text-base"
                asChild
              >
                <a 
                  href="#casos-de-uso"
                  rel="noopener noreferrer"
                >
                  Ver casos de uso
                </a>
              </Button>
            </div>
          </div>

          {/* Columna derecha: Video de YouTube */}
          <div className="w-full md:w-[600px] opacity-0 animate-fadeIn animate-delay-200 mt-0 sm:mt-0">
            <div className="relative">
              <div className="p-1 bg-[#12123A]/80 rounded-2xl shadow-xl border border-[#1E1E4A] overflow-hidden">
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
      <section 
        ref={servicesSectionRef}
        className="relative bg-gradient-to-br from-[#0A0A14] via-[#12122A] to-[#0A0A14] py-12 sm:py-16 md:py-24 mt-8 sm:mt-12"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div 
            className={`text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 transition-opacity transition-transform duration-1000 ${
              isServicesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ willChange: 'opacity, transform' }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Qué hacemos
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
              Diseñamos y implementamos automatizaciones y agentes de Inteligencia Artificial para tu negocio, sin importar el tamaño o la industria.
            </p>
          </div>

          {/* Diseño mejorado con 3 tarjetas flip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Servicio 1 */}
            <div 
              ref={(el) => { flipCardRefs.current[0] = el; }}
              className="group perspective-1000 h-auto min-h-[240px] sm:min-h-[280px] md:h-80 overflow-hidden"
              onMouseEnter={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[0] = true;
                    return newState;
                  });
                }
              }}
              onMouseLeave={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[0] = false;
                    return newState;
                  });
                }
              }}
              style={{ animationDelay: '0s' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped[0] ? 'rotate-y-180' : ''
                }`}
                style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-white/10 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover-glow" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    zIndex: isFlipped[0] ? 1 : 2
                  }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 px-2">Automatizamos procesos clave de tu negocio</h3>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-[#9747FF]/15 to-[#4F7FFF]/15 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    zIndex: isFlipped[0] ? 2 : 1
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 px-2">
                    Creamos automatizaciones a medida para que tu negocio funcione con menos tareas manuales y menos errores.
                  </p>
                </div>
              </div>
            </div>

            {/* Servicio 2 */}
            <div 
              ref={(el) => { flipCardRefs.current[1] = el; }}
              className="group perspective-1000 h-auto min-h-[240px] sm:min-h-[280px] md:h-80 overflow-hidden"
              onMouseEnter={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[1] = true;
                    return newState;
                  });
                }
              }}
              onMouseLeave={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[1] = false;
                    return newState;
                  });
                }
              }}
              style={{ animationDelay: '0.1s' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped[1] ? 'rotate-y-180' : ''
                }`}
                style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-white/10 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover-glow" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    zIndex: isFlipped[1] ? 1 : 2
                  }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Workflow className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 px-2">Implementamos agentes de IA que trabajan 24/7</h3>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-[#4F7FFF]/15 to-[#9747FF]/15 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    zIndex: isFlipped[1] ? 2 : 1
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <Workflow className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 px-2">
                    Desde atención al cliente hasta clasificación de información. Agentes que trabajan 24/7 sin añadir carga a tu equipo.
                  </p>
                </div>
              </div>
            </div>

            {/* Servicio 3 */}
            <div 
              ref={(el) => { flipCardRefs.current[2] = el; }}
              className="group perspective-1000 h-auto min-h-[240px] sm:min-h-[280px] md:h-80 overflow-hidden"
              onMouseEnter={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[2] = true;
                    return newState;
                  });
                }
              }}
              onMouseLeave={() => {
                // Solo en desktop
                if (window.innerWidth >= 768) {
                  setIsFlipped(prev => {
                    const newState = [...prev];
                    newState[2] = false;
                    return newState;
                  });
                }
              }}
              style={{ animationDelay: '0.2s' }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped[2] ? 'rotate-y-180' : ''
                }`}
                style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-white/10 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center cursor-pointer hover-glow" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    zIndex: isFlipped[2] ? 1 : 2
                  }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 px-2">Creamos soluciones hechas a medida</h3>
                </div>

                {/* Back */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-[#9747FF]/15 via-[#4F7FFF]/15 to-[#9747FF]/15 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center" 
                  style={{ 
                    willChange: 'transform', 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    zIndex: isFlipped[2] ? 2 : 1
                  }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#9747FF] via-[#4F7FFF] to-[#9747FF] rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 px-2">
                    Creamos soluciones específicas para tu empresa, independientemente del tamaño de tu negocio y de tu industria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <Button 
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-sm sm:text-base"
              asChild
            >
              <a 
                href="https://calendly.com/automatizasinlimites/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una cita gratuita
              </a>
            </Button>
          </div>
        </div>

        {/* Estilos CSS para el efecto 3D flip */}
        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(79, 127, 255, 0);
            }
            50% {
              box-shadow: 0 0 10px 1px rgba(79, 127, 255, 0.15), 0 0 20px 2px rgba(151, 71, 255, 0.1);
            }
          }
          .hover-glow {
            animation: glow-pulse 3s ease-in-out infinite;
          }
          .hover-glow:hover {
            animation: none;
            box-shadow: 0 0 15px 1.5px rgba(79, 127, 255, 0.2), 0 0 25px 2.5px rgba(151, 71, 255, 0.15);
          }
        `}</style>
      </section>

      {/* Sección de Servicios Detallados */}
      <section id="nuestros-servicios" className="relative bg-gradient-to-br from-[#0F0F1F] via-[#0A0A14] to-[#12122A] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros servicios
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
            Creamos, implementamos y mantenemos automatizaciones y agentes de IA que trabajan para ti en segundo plano.            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                onClick={() => setActiveServiceTab("automation")}
                className={`p-4 sm:p-6 rounded-xl border transition-colors transition-transform duration-300 text-center flex flex-col items-center justify-center ${
                  activeServiceTab === "automation"
                    ? "border-[#4F7FFF] bg-gradient-to-br from-[#4F7FFF]/20 to-[#9747FF]/20 scale-105"
                    : "border-white/5 bg-white/5 hover:border-[#4F7FFF]/50"
                }`}
              >
                <Workflow className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${activeServiceTab === "automation" ? "text-[#4F7FFF]" : "text-gray-400"}`} />
                <h3 className="font-semibold text-xs sm:text-sm text-white leading-tight">AUTOMATIZACIÓN DE PROCESOS</h3>
              </button>

              <button
                onClick={() => setActiveServiceTab("chatbots")}
                className={`p-4 sm:p-6 rounded-xl border transition-colors transition-transform duration-300 text-center flex flex-col items-center justify-center ${
                  activeServiceTab === "chatbots"
                    ? "border-[#4F7FFF] bg-gradient-to-br from-[#4F7FFF]/20 to-[#9747FF]/20 scale-105"
                    : "border-white/5 bg-white/5 hover:border-[#4F7FFF]/50"
                }`}
              >
                <MessageSquare className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${activeServiceTab === "chatbots" ? "text-[#4F7FFF]" : "text-gray-400"}`} />
                <h3 className="font-semibold text-xs sm:text-sm text-white leading-tight">CHATBOTS Y AGENTES CONVERSACIONALES</h3>
              </button>

              <button
                onClick={() => setActiveServiceTab("voice")}
                className={`p-4 sm:p-6 rounded-xl border transition-colors transition-transform duration-300 text-center flex flex-col items-center justify-center ${
                  activeServiceTab === "voice"
                    ? "border-[#4F7FFF] bg-gradient-to-br from-[#4F7FFF]/20 to-[#9747FF]/20 scale-105"
                    : "border-white/5 bg-white/5 hover:border-[#4F7FFF]/50"
                }`}
              >
                <Phone className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${activeServiceTab === "voice" ? "text-[#4F7FFF]" : "text-gray-400"}`} />
                <h3 className="font-semibold text-xs sm:text-sm text-white leading-tight">AGENTES DE VOZ CON IA</h3>
              </button>

              <button
                onClick={() => setActiveServiceTab("support")}
                className={`p-4 sm:p-6 rounded-xl border transition-colors transition-transform duration-300 text-center flex flex-col items-center justify-center ${
                  activeServiceTab === "support"
                    ? "border-[#4F7FFF] bg-gradient-to-br from-[#4F7FFF]/20 to-[#9747FF]/20 scale-105"
                    : "border-white/5 bg-white/5 hover:border-[#4F7FFF]/50"
                }`}
              >
                <Wrench className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 ${activeServiceTab === "support" ? "text-[#4F7FFF]" : "text-gray-400"}`} />
                <h3 className="font-semibold text-xs sm:text-sm text-white leading-tight">MANTENIMIENTO Y SOPORTE</h3>
              </button>
            </div>

            {/* Content */}
            <div
              key={activeServiceTab}
              className="rounded-2xl border border-[#4F7FFF]/20 bg-white/5  p-6 sm:p-8 md:p-12 animate-fadeIn"
            >
              {activeServiceTab === "automation" && (
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Automatización de Procesos</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-left">
                    Optimiza tu negocio con automatizaciones hechas a medida que funcionan solas. Automatizamos las tareas repetitivas de tu negocio usando herramientas como Make o n8n para que los procesos se ejecuten sin intervención manual.
                  </p>
                  <div className="mb-8">
                    <p className="text-base font-semibold text-white mb-3 text-left">Ejemplos de lo que puedes automatizar:</p>
                    <ul className="space-y-2 text-gray-300 text-left">
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Captura, clasificación y seguimiento de leads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Actualización de CRM y pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Generación de documentos y reportes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Procesos administrativos internos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Notificaciones, recordatorios y avisos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Sincronización entre herramientas (web, CRM, formularios, email…)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button 
                      className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-opacity transition-transform duration-200 hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                      asChild
                    >
                      <a 
                        href="https://calendly.com/automatizasinlimites/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {activeServiceTab === "chatbots" && (
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Chatbots y Agentes Conversacionales</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-left">
                    Bots inteligentes que responden, cualifican, guían y ejecutan acciones. Creamos chatbots conectados a tus herramientas capaces de atender a tus clientes, resolver dudas, recopilar datos y disparar acciones internas.
                  </p>
                  <div className="mb-8">
                    <p className="text-base font-semibold text-white mb-3 text-left">Ejemplos de chatbots:</p>
                    <ul className="space-y-2 text-gray-300 text-left">
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Chatbots de generación de leads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Chatbots para atención al cliente</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Chatbots de soporte</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Reservas y agendamientos automáticos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Bots para Webs, WhatsApp, Instagram o plataformas similares</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Bots conversacionales conectados a automatizaciones internas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button 
                      className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-opacity transition-transform duration-200 hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                      asChild
                    >
                      <a 
                        href="https://calendly.com/automatizasinlimites/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {activeServiceTab === "voice" && (
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Agentes de Voz con IA</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-left">
                    Atención telefónica automatizada 24/7 con voz natural. Desarrollamos agentes de voz capaces de atender llamadas entrantes y salientes, recopilar información, cualificar leads o ejecutar tareas internas sin intervención humana.
                  </p>
                  <div className="mb-8">
                    <p className="text-base font-semibold text-white mb-3 text-left">Ejemplos de agentes de voz:</p>
                    <ul className="space-y-2 text-gray-300 text-left">
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Atención telefónica básica</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Cualificación automática de interesados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Confirmación y recordatorio de citas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Respuesta a preguntas frecuentes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Llamadas de seguimiento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Asistentes operativos internos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button 
                      className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-opacity transition-transform duration-200 hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                      asChild
                    >
                      <a 
                        href="https://calendly.com/automatizasinlimites/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {activeServiceTab === "support" && (
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white text-left">Mantenimiento, Soporte y Mejora Continua</h3>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-left">
                    Soporte, ajustes y evolución mensual para que todo funcione siempre. Nos encargamos del monitoreo, resolución de incidencias y optimizaciones mensuales para mantener tus automatizaciones y agentes de IA siempre actualizados y funcionando al 100%.
                  </p>
                  <div className="mb-8">
                    <p className="text-base font-semibold text-white mb-3 text-left">Incluye:</p>
                    <ul className="space-y-2 text-gray-300 text-left">
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Monitoreo continuo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Corrección de errores</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Ajustes y optimizaciones mensuales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Mejoras evolutivas según cambios en tu negocio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Nuevas pequeñas automatizaciones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4F7FFF] mr-2">•</span>
                        <span>Supervisión activa de agentes de IA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <Button 
                      className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-opacity transition-transform duration-200 hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                      asChild
                    >
                      <a 
                        href="https://calendly.com/automatizasinlimites/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar una llamada
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso reales */}
      <section id="casos-de-uso" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#0A0A14] via-[#0F0F1F] to-[#0A0A14] relative">

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Casos de uso reales
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
                Mira ejemplos concretos de automatizaciones y agentes de IA que ya están funcionando en negocios como el tuyo.
              </p>
            </div>

            {/* Layout con tabs en grid para móvil y columna para desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {/* Tabs en grid para móvil, columna para desktop */}
              <div className="lg:col-span-1">
                <div className="bg-[#0A0A1B]/60  rounded-2xl border border-[#1E1E4A] p-3 sm:p-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-2">
                    {useCases.map((useCase, index) => (
                      <button
                        key={useCase.id}
                        onClick={() => setActiveUseCase(index)}
                        className={`px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium transition-colors transition-transform duration-300 rounded-lg text-center lg:text-left ${
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
                  className="bg-[#0A0A1B]/60  rounded-2xl border border-[#1E1E4A] overflow-hidden transition-opacity duration-300"
                  style={{ minHeight: maxContentHeight > 0 ? `${maxContentHeight}px` : 'auto' }}
                >
                  {/* Renderizar todos los casos ocultos para medir sus alturas */}
                  <div className="absolute opacity-0 pointer-events-none -z-10">
                    {useCases.map((useCase, index) => (
                      <div
                        key={`hidden-${useCase.id}`}
                        ref={(el) => {
                          if (el) contentRefs.current[index] = el;
                        }}
                        className="p-6 sm:p-8 md:p-12"
                      >
                        <p className="text-xs font-semibold tracking-[0.4em] text-[#A5B4FC] mb-3">
                          {useCase.category}
                        </p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
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
                      <div className="p-6 sm:p-8 md:p-12 flex flex-col">
                        <p className="text-xs font-semibold tracking-[0.1em] sm:tracking-[0.2em] text-[#A5B4FC] mb-3">
                          {useCases[activeUseCase].category}
                        </p>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">
                          {useCases[activeUseCase].subtitle}
                        </h3>

                        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 flex-grow">
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

                        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                          <Button
                            className="flex-1 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase text-sm sm:text-base"
                            asChild
                          >
                            <a href={useCases[activeUseCase].demoLink} target="_blank" rel="noopener noreferrer">
                              Ver demo
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 px-6 py-3 sm:px-8 sm:py-4 border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors transition-transform duration-200 active:scale-[0.98] hover:-translate-y-0.5 font-medium uppercase text-sm sm:text-base"
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
      <section id="como-trabajamos" className="relative bg-gradient-to-br from-[#12122A] via-[#0A0A14] to-[#0F0F1F] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cómo trabajamos
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Un proceso claro y estructurado para transformar tu negocio con automatizaciones
            </p>
          </div>

          {/* Horizontal timeline for desktop */}
          <div className="max-w-6xl mx-auto">
            <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 sm:mb-12">
              {/* Paso 1 */}
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#4F7FFF] to-[#9747FF]" />

                <div className="relative">
                  {/* Icon container */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] rounded-full opacity-20 blur-xl" />
                    <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-4 border-[#0A0A14]">
                      <Phone className="w-10 h-10 text-[#4F7FFF]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      01
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-center text-white">Llamada gratuita de 20 minutos</h3>
                  <p className="text-gray-400 leading-relaxed text-center text-sm">
                    Analizamos tu caso, entendemos tus procesos y definimos qué tiene sentido automatizar para conseguir resultados rápidos.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF]" />

                <div className="relative">
                  {/* Icon container */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-20 blur-xl" />
                    <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-4 border-[#0A0A14]">
                      <Rocket className="w-10 h-10 text-[#9747FF]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      02
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-center text-white">Implementación a medida</h3>
                  <p className="text-gray-400 leading-relaxed text-center text-sm">
                    Diseñamos y construimos las automatizaciones o agentes de IA necesarios para optimizar tus operaciones. Entregamos en fases claras y medibles.
                  </p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative">
                <div className="relative">
                  {/* Icon container */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] rounded-full opacity-20 blur-xl" />
                    <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-4 border-[#0A0A14]">
                      <TrendingUp className="w-10 h-10 text-[#4F7FFF]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      03
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-center text-white">Mantenimiento y evolución</h3>
                  <p className="text-gray-400 leading-relaxed text-center text-sm">
                    Monitoreamos, ajustamos y mejoramos tus sistemas para garantizar estabilidad, rendimiento y crecimiento continuo.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical layout for mobile */}
            <div className="md:hidden space-y-6 sm:space-y-8">
              {/* Paso 1 */}
              <div className="relative">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-[#4F7FFF] to-[#9747FF]" />
                
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] rounded-full opacity-20 blur-xl" />
                      <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-2 border-[#0A0A14]">
                        <Phone className="w-5 h-5 text-[#4F7FFF]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] flex items-center justify-center text-[8px] font-bold text-white shadow-lg">
                        01
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-3 text-white">Llamada gratuita de 20 minutos</h3>
                    <p className="text-gray-400 leading-relaxed">Analizamos tu caso, entendemos tus procesos y definimos qué tiene sentido automatizar para conseguir resultados rápidos.</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative">
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-[#9747FF] to-[#4F7FFF]" />
                
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-20 blur-xl" />
                      <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-2 border-[#0A0A14]">
                        <Rocket className="w-5 h-5 text-[#9747FF]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] flex items-center justify-center text-[8px] font-bold text-white shadow-lg">
                        02
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-3 text-white">Implementación a medida</h3>
                    <p className="text-gray-400 leading-relaxed">Diseñamos y construimos las automatizaciones o agentes de IA necesarios para optimizar tus operaciones. Entregamos en fases claras y medibles.</p>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] rounded-full opacity-20 blur-xl" />
                      <div className="relative w-full h-full bg-[#0A0A14] rounded-full flex items-center justify-center border-2 border-[#0A0A14]">
                        <TrendingUp className="w-5 h-5 text-[#4F7FFF]" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] flex items-center justify-center text-[8px] font-bold text-white shadow-lg">
                        03
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold mb-3 text-white">Mantenimiento y evolución</h3>
                    <p className="text-gray-400 leading-relaxed">Monitoreamos, ajustamos y mejoramos tus sistemas para garantizar estabilidad, rendimiento y crecimiento continuo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
                asChild
              >
                <a 
                  href="https://calendly.com/automatizasinlimites/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar una llamada gratuita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section id="nuestros-clientes" className="relative bg-gradient-to-br from-[#0A0A14] via-[#12122A] to-[#0A0A14] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Descubre cómo las automatizaciones han transformado sus negocios
            </p>
          </div>

          {/* Carrusel de Testimonios */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonio Principal */}
            <div className="bg-[#0A0A1B]/60  p-6 sm:p-8 md:p-12 rounded-2xl border border-[#1E1E4A] text-center">
              {/* Estrellas */}
              <div className="flex justify-center mb-4 sm:mb-6 gap-1 relative">
                <svg className="absolute w-0 h-0">
                  <defs>
                    <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9747FF" />
                      <stop offset="100%" stopColor="#4F7FFF" />
                    </linearGradient>
                  </defs>
                </svg>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ fill: 'url(#star-gradient)', color: 'url(#star-gradient)' }}
                  />
                ))}
              </div>
              
              {/* Texto del Testimonio */}
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 italic px-2 sm:px-0">
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
                className="w-12 h-12 bg-[#0A0A1B] border border-[#1E1E4A] rounded-full flex items-center justify-center text-white hover:border-[#4F7FFF]/50 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Indicadores */}
              <div className="flex gap-2">
                {[...Array(testimonials.length)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentTestimonial === i 
                        ? 'bg-[#4F7FFF] scale-125' 
                        : 'bg-[#1E1E4A] hover:bg-[#4F7FFF]/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 bg-[#0A0A1B] border border-[#1E1E4A] rounded-full flex items-center justify-center text-white hover:border-[#4F7FFF]/50 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
              asChild
            >
              <a 
                href="https://calendly.com/automatizasinlimites/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada
              </a>
            </Button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>

      

      {/* Sección Por qué confiar en nosotros */}
      <section className="relative bg-gradient-to-br from-[#0F0F1F] via-[#0A0A14] to-[#12122A] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Por qué confiar en nosotros?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
              Un enfoque práctico y transparente para transformar tu negocio con automatizaciones que realmente funcionan
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {/* Razón 1 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#4F7FFF]/5 to-transparent border-[#4F7FFF]/20 hover:border-[#4F7FFF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>                  
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#4F7FFF]/20 to-[#4F7FFF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F7FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Explicamos las cosas sin tecnicismos</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">Hablamos en tu idioma. Sin jerga técnica innecesaria, te explicamos qué hacemos, cómo funciona y por qué es importante para tu negocio.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#4F7FFF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>

              {/* Razón 2 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#9747FF]/5 to-transparent border-[#9747FF]/20 hover:border-[#9747FF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>                  
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#9747FF]/20 to-[#9747FF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#9747FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Diseñamos soluciones a medida</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">Cada negocio es único. Creamos automatizaciones específicas para tus procesos, no soluciones genéricas que no encajan.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#9747FF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>

              {/* Razón 3 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#4F7FFF]/5 to-transparent border-[#4F7FFF]/20 hover:border-[#4F7FFF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#4F7FFF]/20 to-[#4F7FFF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F7FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Trabajamos por fases claras</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">Proyectos estructurados con entregables definidos. Sabes exactamente qué recibirás en cada etapa y cuándo.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#4F7FFF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>

              {/* Razón 4 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#9747FF]/5 to-transparent border-[#9747FF]/20 hover:border-[#9747FF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#9747FF]/20 to-[#9747FF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#9747FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Ofrecemos soporte continuo</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">No te dejamos solo después de la implementación. Monitoreamos, ajustamos y mejoramos tus sistemas de forma continua.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#9747FF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>

              {/* Razón 5 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#4F7FFF]/5 to-transparent border-[#4F7FFF]/20 hover:border-[#4F7FFF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#4F7FFF]/20 to-[#4F7FFF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#4F7FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Priorizamos estabilidad y eficiencia</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">No nos dejamos llevar por modas. Construimos sistemas robustos que funcionan día a día, sin complicaciones innecesarias.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#4F7FFF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>

              {/* Razón 6 */}
              <div className="group">
                <div className="relative h-full p-6 sm:p-8 rounded-2xl border-2 transition-colors transition-shadow transition-transform duration-500 bg-gradient-to-br from-[#9747FF]/5 to-transparent border-[#9747FF]/20 hover:border-[#9747FF]/50 hover:shadow-xl hover:-translate-y-1" style={{ willChange: 'transform, border-color' }}>
                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 bg-gradient-to-br from-[#9747FF]/20 to-[#9747FF]/10 group-hover:scale-110 transition-transform duration-500 md:inline-flex">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#9747FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center md:text-left">Entregamos sistemas fáciles de mantener</h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-left">Construimos con código limpio y documentación clara. Tus sistemas serán fáciles de entender, modificar y escalar cuando lo necesites.</p>
                  </div>
                  
                  {/* Animated line */}
                  <div className="absolute bottom-0 left-4 h-1 w-0 group-hover:w-full transition-[width] duration-500 bg-gradient-to-r from-[#9747FF] to-transparent" style={{ willChange: 'width' }} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
              asChild
            >
              <a 
                href="https://calendly.com/automatizasinlimites/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar una llamada
              </a>
            </Button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#4F7FFF] to-[#9747FF] rounded-full opacity-5 blur-3xl -z-10"></div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="relative bg-gradient-to-br from-[#0A0A14] via-[#0F0F1F] to-[#12122A] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-gradient-to-br from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-64 h-64 bg-gradient-to-bl from-[#9747FF] to-[#4F7FFF] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Si tienes alguna duda que no haya respondido en esta sección, no dudes en contactarnos o agendar una llamada gratuita de 20 minutos.
            </p>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Necesito conocimientos técnicos para trabajar con vosotros?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 1 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 1 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    No. Nos encargamos de todo el proceso y explicamos cada paso de forma clara y sin tecnicismos. Solo necesitamos entender tu negocio y tus objetivos.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Trabajáis con cualquier tipo de negocio?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 2 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 2 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Sí. Colaboramos con freelancers, pequeñas empresas y compañías más grandes. Nuestros servicios se adaptan a cualquier sector porque automatizamos procesos universales: gestión de leads, atención al cliente, operaciones, administración, etc.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Cómo sé qué partes de mi negocio se pueden automatizar?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 3 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 3 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    En la llamada gratuita detectamos oportunidades rápidas. Si necesitas un análisis más profundo, realizamos una Auditoría Express que identifica procesos repetitivos y propone soluciones claras con automatizaciones o agentes de IA.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Qué herramientas utilizáis para crear automatizaciones y agentes?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 4 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 4 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Principalmente Make, n8n, APIs personalizadas y modelos de IA avanzada para clasificación, razonamiento o conversación. Elegimos siempre la tecnología más adecuada según tus necesidades, no la más compleja.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Cuánto tiempo tarda un proyecto de automatización o un agente de IA?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 5 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 5 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Depende del alcance.
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span><strong>Automatizaciones simples:</strong> 2–7 días</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span><strong>Automatizaciones medianas:</strong> 1–3 semanas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span><strong>Chatbots completos:</strong> 1–2 semanas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span><strong>Agentes de voz:</strong> 2–4 semanas</span>
                    </li>
                  </ul>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
                    Siempre trabajamos por fases para entregar resultados desde el primer momento.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Qué mantenimiento requieren las automatizaciones y los agentes?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 6 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 6 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Automatizaciones y agentes de IA necesitan ajustes periódicos para mantenerse estables. Por eso ofrecemos un servicio de mantenimiento mensual, que incluye monitoreo, correcciones, optimizaciones y mejoras continuas para que todo funcione siempre.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 7 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Puedo empezar con una automatización pequeña o un chatbot básico?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 7 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 7 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Sí. Podemos comenzar con un caso de uso puntual y, si lo necesitas, ampliar después a flujos más complejos o agentes avanzados. No hace falta contratar un proyecto grande desde el inicio.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 8 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 8 ? null : 8)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Los agentes de IA sustituyen al equipo humano?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 8 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 8 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    No. Su función es reducir tareas repetitivas, responder preguntas frecuentes y gestionar procesos básicos. El equipo humano sigue siendo clave para tareas estratégicas, atención personalizada y toma de decisiones.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 9 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 9 ? null : 9)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿La llamada gratuita tiene compromiso?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 9 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 9 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    No. Es simplemente una conversación de 20 minutos para entender tu caso, identificar oportunidades y ver si somos el equipo adecuado para ayudarte.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 10 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 10 ? null : 10)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Qué pasa si mis herramientas actuales no se integran entre sí?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 10 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 10 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Buscamos alternativas de integración mediante APIs, conectores personalizados o flujos híbridos. En muchos casos, incluso herramientas que parecen "cerradas" se pueden conectar de alguna forma. Si no es posible, te proponemos soluciones realistas sin cambiar toda tu infraestructura.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 11 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 11 ? null : 11)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Qué tipo de resultados puedo esperar?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 11 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 11 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                    Depende del proyecto, pero lo habitual es:
                  </p>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Reducción de tareas manuales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Menos errores operativos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Atención más rápida</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Leads mejor cualificados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Procesos más fluidos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4F7FFF] mr-2">•</span>
                      <span>Equipo con más tiempo para lo importante</span>
                    </li>
                  </ul>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
                    Muchos clientes recuperan horas de trabajo desde el primer mes.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 12 */}
            <div className="bg-[#0A0A1B]/80  rounded-xl border border-[#1E1E4A] overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === 12 ? null : 12)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-[#1E1E4A]/30 transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                  ¿Puedo contratar solo el mantenimiento sin haber construido las automatizaciones con vosotros?
                </h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                  openFAQ === 12 ? 'rotate-180' : ''
                }`} />
              </button>
              {openFAQ === 12 && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Sí, siempre que revisemos previamente tus sistemas para asegurarnos de que son estables y mantenibles. Si es necesario, realizaremos ajustes iniciales antes de asumir el soporte mensual.
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
      <section className="relative bg-gradient-to-br from-[#12122A] via-[#0A0A14] to-[#0F0F1F] py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#4F7FFF] to-[#9747FF] opacity-10 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#9747FF] to-[#4F7FFF] opacity-10 blur-[180px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Tu competencia ya está automatizando.{' '}
              <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">
                ¿Cuánto tiempo más vas a esperar?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-4 sm:mb-6">
              Cada semana que pasa, tu equipo pierde <span className="text-white font-semibold">20+ horas</span> en tareas que una IA podría hacer mejor, más rápido y sin errores. Mientras tanto, tus competidores están reinvirtiendo ese tiempo en crecer, vender más, y escalar.
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              La pregunta no es "¿debería automatizar?" sino{' '}
              <span className="bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] bg-clip-text text-transparent font-semibold">
                "¿por qué todavía no lo he hecho?"
              </span>
            </p>
          </div>

          <div className="text-center">
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white transition-all hover:opacity-90 active:scale-[0.98] hover:-translate-y-0.5 border-none font-medium uppercase"
              asChild
            >
              <a 
                href="https://calendly.com/automatizasinlimites/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero automatizar mi negocio ya
              </a>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
