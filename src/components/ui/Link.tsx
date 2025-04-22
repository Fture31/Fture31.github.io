import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'transition-colors duration-200';
  const combinedClassName = `${baseStyles} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth',
        });
      }
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };
  
  return (
    <a href={href} className={combinedClassName} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};