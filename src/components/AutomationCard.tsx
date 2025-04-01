import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AutomationCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: boolean;
  comingSoon?: boolean;
  comingSoonDate?: string;
  isFree?: boolean;
  freeForMembers?: boolean;
  image: string;
  link?: string;
  customButtonText?: string;
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  description,
  price,
  originalPrice,
  discount,
  comingSoon,
  comingSoonDate,
  isFree,
  freeForMembers,
  image,
  link,
  customButtonText
}) => {
  return (
    <div className="relative bg-[#1A1A3A] rounded-2xl overflow-hidden border border-[#4F7FFF]/10 hover:border-[#4F7FFF]/20 transition-all duration-300 group">
      {discount && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          20% descuento para miembros
        </div>
      )}
      {comingSoonDate && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#22c55e] to-[#15803d] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          25% descuento para miembros
        </div>
      )}
      {comingSoon && !comingSoonDate && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          Próximamente
        </div>
      )}
      {isFree && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#22c55e] to-[#15803d] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          GRATIS
        </div>
      )}
      {freeForMembers && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#22c55e] to-[#15803d] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          Gratis para miembros
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {comingSoonDate && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-lg font-medium mb-2">Disponible el {comingSoonDate}</p>
              <p className="text-[#c3c5ca] text-sm">
                Descuento de lanzamiento<br />disponible para miembros
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-white">{price}</span>
            {isFree && (
              <span className="text-sm text-[#4F7FFF] bg-[#4F7FFF]/10 px-2 py-1 rounded-full">
                GRATIS
              </span>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white text-center py-3 px-6 rounded-xl font-medium hover:opacity-90 transition-opacity duration-300"
            >
              {customButtonText || (isFree ? 'Obtener ahora' : 'Comprar ahora')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
