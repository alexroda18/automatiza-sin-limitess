
import React from 'react';
import { 
  Linkedin, 
  Twitter,
  Mail, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mr-2">
                  A
                </div>
                <span className="text-blue-600 font-normal text-base">Automatiza</span>
                <span className="ml-1.5 text-gray-800 opacity-80 text-base font-light">Sin Límites</span>
              </div>
              
              <p className="text-gray-600 font-light text-sm">
                Soluciones de automatización para creadores, emprendedores y profesionales que quieren optimizar su tiempo y recursos.
              </p>
              
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Linkedin size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Mail size={14} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-base font-light mb-3 text-black">Enlaces rápidos</h3>
              <ul className="space-y-1.5">
                <li>
                  <a href="#automatizaciones" className="text-gray-600 hover:text-blue-600 transition-colors font-light text-sm flex items-center group">
                    <span>Automatizaciones</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#comunidad" className="text-gray-600 hover:text-blue-600 transition-colors font-light text-sm flex items-center group">
                    <span>Comunidad WhatsApp</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-light text-sm flex items-center group">
                    <span>Blog</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <h3 className="text-base font-light mb-3 text-black">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@automatizafacilmente.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-light text-sm group">
                    <Mail size={14} className="text-blue-500" />
                    <span>info@automatizafacilmente.com</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-light text-sm group">
                    <MessageSquare size={14} className="text-blue-500" />
                    <span>Grupo de WhatsApp</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-800 font-light">
                  ¿Necesitas una automatización personalizada? Podemos desarrollarla específicamente para tu negocio.
                </p>
                <a href="#contacto" className="inline-flex items-center gap-1 mt-1.5 text-xs text-blue-600 font-normal hover:underline">
                  Contacta con nosotros
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-6 pt-4 text-center text-gray-500 text-xs font-light">
            <p>© {currentYear} Automatiza Sin Límites. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
