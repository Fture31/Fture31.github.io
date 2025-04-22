import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  centered = false,
}) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <div className="inline-block">
        <span className="text-orange-500 font-semibold">{subtitle}</span>
        <div className="h-1 w-1/2 bg-orange-500 mt-1"></div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-3">{title}</h2>
      {description && <p className="text-gray-600 mt-4 text-lg">{description}</p>}
    </div>
  );
};