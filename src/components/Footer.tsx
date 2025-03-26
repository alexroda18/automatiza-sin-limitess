import React from 'react';
import { 
  Linkedin, 
  Mail, 
  MessageSquare,
  ArrowUpRight,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-[#1E1E4A]">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <span className="text-white">
                  automatiza{' '}
                  <span className="bg-gradient-to-r from-[#4F7FFF] to-[#9747FF] bg-clip-text text-transparent">
                    sin límites
                  </span>
                </span>
              </div>
              
              <p className="text-gray-400 font-light text-sm">
                Soluciones de automatización para creadores, emprendedores y profesionales que quieren optimizar su tiempo y recursos.
              </p>
              
              <div className="flex gap-3">
                <a href="http://linkedin.com/in/alexmroda" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Linkedin size={14} />
                </a>
                <a href="mailto:soporte@automatizasinlimites.com" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Mail size={14} />
                </a>
                <a href="https://chat.whatsapp.com/JTLA1aII7hsJtYyzxomv6q" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <MessageSquare size={14} />
                </a>
                <a href="http://www.instagram.com/automatizasinlimites" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="http://www.tiktok.com/@automatizasinlimites" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <FaTiktok size={14} />
                </a>
                <a href="https://www.youtube.com/@automatizasinlimites" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Youtube size={14} />
                </a>
                <a
                  href="https://www.facebook.com/automatizasinlimites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-base font-medium mb-4 text-white">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#automatizaciones" className="text-gray-400 hover:text-white transition-colors font-light text-sm flex items-center group">
                    <span>Automatizaciones</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/JTLA1aII7hsJtYyzxomv6q" className="text-gray-400 hover:text-white transition-colors font-light text-sm flex items-center group">
                    <span>Únete a la comunidad</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <div className="mt-6 p-4 bg-[#0A0A1B] rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-colors">
                <p className="text-sm text-gray-300 font-light">
                  ¿Necesitas una automatización personalizada? Podemos desarrollarla específicamente para tu negocio.
                </p>
                <a href="mailto:soporte@automatizasinlimites.com" className="inline-flex items-center gap-1 mt-2 text-sm text-[#4F7FFF] hover:text-[#9747FF] transition-colors">
                  Contacta con nosotros
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#1E1E4A] mt-8 pt-6 text-center text-gray-500 text-xs font-light">
            <p>© {currentYear} automatiza sin límites. Todos los derechos reservados. Una marca de COS Studio Limited.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
