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
    <div className="relative bg-[#0A0A1B] border border-[#1E1E4A] rounded-2xl overflow-hidden group flex flex-col">
      {discount && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          20% descuento para miembros
        </div>
      )}
      {comingSoonDate && (
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-xs font-medium px-3 py-1.5 rounded-full">
          Disponible el {comingSoonDate}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
            <span className="text-white font-semibold">{price}</span>
          </div>
          <a
            href={link || (comingSoon ? "mailto:soporte@automatizasinlimites.com" : "#")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#4F7FFF] hover:text-[#9747FF] transition-colors"
          >
            {customButtonText || (comingSoon ? "Dame acceso anticipado" : "Ver detalles")}
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
