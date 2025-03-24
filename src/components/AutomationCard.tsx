import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AutomationCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
  link: string;
  delay: number;
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  description,
  image,
  price,
  discount,
  link,
  delay
}) => {
  const discountedPrice = discount ? price - (price * (discount / 100)) : price;
  const animationClass = `opacity-0 animate-scaleIn animate-delay-${delay}`;
  
  return (
    <div className={`group relative bg-[#0A0A1B] rounded-xl overflow-hidden border border-[#1E1E4A] transition-all duration-300 hover:border-[#4F7FFF]/50 ${animationClass}`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {discount && (
          <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#9747FF] to-[#4F7FFF] text-white text-xs font-medium px-3 py-1.5 rounded-full">
            20% descuento para miembros
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-medium text-white">{discountedPrice.toLocaleString('es-ES')}€</span>
            {discount && (
              <span className="text-sm text-gray-500 line-through">{price.toLocaleString('es-ES')}€</span>
            )}
          </div>
          
          <a 
            href={link}
            className="inline-flex items-center gap-1.5 text-[#4F7FFF] hover:text-[#9747FF] transition-colors"
          >
            Ver detalles
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AutomationCard;
