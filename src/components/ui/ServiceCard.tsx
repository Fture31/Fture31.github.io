import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
}) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-100 text-blue-700',
      orange: 'bg-orange-100 text-orange-700',
      teal: 'bg-teal-100 text-teal-700',
      purple: 'bg-purple-100 text-purple-700',
      red: 'bg-red-100 text-red-700',
      green: 'bg-green-100 text-green-700',
    };
    
    return colorMap[color] || 'bg-gray-100 text-gray-700';
  };
  
  const getHoverClasses = (color: string) => {
    const hoverMap: Record<string, string> = {
      blue: 'group-hover:bg-blue-700 group-hover:text-white',
      orange: 'group-hover:bg-orange-700 group-hover:text-white',
      teal: 'group-hover:bg-teal-700 group-hover:text-white',
      purple: 'group-hover:bg-purple-700 group-hover:text-white',
      red: 'group-hover:bg-red-700 group-hover:text-white',
      green: 'group-hover:bg-green-700 group-hover:text-white',
    };
    
    return hoverMap[color] || 'group-hover:bg-gray-700 group-hover:text-white';
  };
  
  const iconClasses = `p-4 rounded-full transition-colors ${getColorClasses(color)} ${getHoverClasses(color)}`;
  
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group">
      <div className={iconClasses}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mt-6 mb-4 text-blue-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="inline-flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600">
        En savoir plus
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};