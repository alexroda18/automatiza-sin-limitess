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
                <a 
                  href="https://subscribepage.io/automatizasinlimites" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors"
                >
                  <MessageSquare size={14} />
                </a>
                <a href="http://www.instagram.com/alexmroda" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="http://www.tiktok.com/@alexmroda" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <FaTiktok size={14} />
                </a>
                <a href="https://www.youtube.com/@alexmroda" className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors">
                  <Youtube size={14} />
                </a>
                <a
                  href="https://www.facebook.com/alexmroda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0A0A1B] border border-[#1E1E4A] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4F7FFF] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="mt-0 p-2 bg-[#0A0A1B] rounded-lg border border-[#1E1E4A] hover:border-[#4F7FFF]/50 transition-colors">
                <p className="text-sm text-gray-300 font-light">
                ¿Todavía no formas parte de nuestra newsletter gratuita semanal? Únete y recibirás un resumen con lo mejor de la IA y las herramientas digitales explicado de forma simple, tips prácticos y material exclusivo que no comparto en redes.
                </p>
                <a href="https://subscribepage.io/automatizasinlimites" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-[#4F7FFF] hover:text-[#9747FF] transition-colors">
                  Únete aquí
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
