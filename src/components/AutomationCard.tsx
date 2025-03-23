
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
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-1 ${animationClass}`}>
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {discount && (
          <div className="absolute top-3 right-3 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-light text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-light text-gray-900">{discountedPrice.toLocaleString('es-ES')}€</span>
            {discount && (
              <span className="text-sm text-gray-500 line-through">{price.toLocaleString('es-ES')}€</span>
            )}
          </div>
          
          <a 
            href={link}
            className="inline-flex items-center gap-1.5 font-light text-blue-600 hover:text-blue-700 transition-colors"
          >
            Ver detalles
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none border-2 border-transparent opacity-0 transition-opacity group-hover:opacity-100 group-hover:border-blue-500/10 rounded-2xl"></div>
    </div>
  );
};

export default AutomationCard;
