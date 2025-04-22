import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Expertise en Ouvrages Hydrauliques",
    subtitle: "Construction et réhabilitation professionnelle",
    image: "https://images.pexels.com/photos/2470080/pexels-photo-2470080.jpeg",
  },
  {
    id: 2,
    title: "Études Architecturales et Techniques",
    subtitle: "Des solutions sur mesure pour vos projets",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
  },
  {
    id: 3,
    title: "Construction de Bâtiments",
    subtitle: "Excellence et innovation dans chaque projet",
    image: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg", 
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] flex items-center text-white overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-gray-300 mb-8 max-w-xl">
            Nous sommes experts en maîtrise d'œuvre, études architecturales et hydrauliques, 
            contrôle et supervision de projets de construction d'envergure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Nos Services
            </Button>
            <Button variant="outline" size="lg" className="flex items-center">
              Nos Réalisations
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-orange-500 w-10' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};