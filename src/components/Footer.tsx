
import React from 'react';
import { 
  Linkedin, 
  Twitter,
  Mail, 
  MessageSquare
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-light mb-4 text-black">Automatiza Fácilmente</h3>
              <p className="text-gray-600 mb-4 font-light">
                Soluciones de automatización para creadores, emprendedores y profesionales que quieren optimizar su tiempo y recursos.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4 text-black">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#automatizaciones" className="text-gray-600 hover:text-blue-600 transition-colors font-light">
                    Automatizaciones
                  </a>
                </li>
                <li>
                  <a href="#comunidad" className="text-gray-600 hover:text-blue-600 transition-colors font-light">
                    Comunidad WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4 text-black">Contacto</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@automatizafacilmente.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-light">
                    <Mail size={18} />
                    <span>info@automatizafacilmente.com</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-light">
                    <MessageSquare size={18} />
                    <span>Grupo de WhatsApp</span>
                  </a>
                </li>
              </ul>
              
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 mt-10 pt-6 text-center text-gray-500 text-sm font-light">
            <p>© {currentYear} Automatiza Fácilmente. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
