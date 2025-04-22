import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Amadou Oumar",
    role: "Directeur des Travaux Publics",
    company: "Ministère des Infrastructures",
    content: "La collaboration avec BIAC CONSULTING sur le projet de barrage a été exceptionnelle. Leur expertise technique et leur rigueur professionnelle ont permis de livrer l'ouvrage dans les délais impartis avec une qualité irréprochable.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    id: 2,
    name: "Marie Sène",
    role: "Directrice Générale",
    company: "Groupe Immobilier Teranga",
    content: "Nous avons confié à BIAC CONSULTING la construction de notre nouveau siège social, et le résultat est simplement impressionnant. La qualité de l'exécution et le respect scrupuleux du cahier des charges font d'eux un partenaire de choix.",
    rating: 5,
    image: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg"
  },
  {
    id: 3,
    name: "Ibrahim Ndiaye",
    role: "Maire",
    company: "Mairie de N’Djamena ",
    content: "Le système d'adduction d'eau potable réalisé par BIAC CONSULTING a transformé la vie de nos habitants. Leur approche participative et leur sensibilité aux enjeux locaux ont fait toute la différence dans ce projet vital pour notre communauté.",
    rating: 5,
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
  },
  {
    id: 4,
    name: "Fatou Camara",
    role: "Coordinatrice de Projets",
    company: "ONG Eau pour Tous",
    content: "BIAC CONSULTING a démontré un engagement sincère dans notre projet d'accès à l'eau en zone rurale. Leur expertise technique s'accompagne d'une réelle préoccupation pour l'impact social et environnemental de leurs réalisations.",
    rating: 4,
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionHeading
          title="Témoignages"
          subtitle="Ce que disent nos clients"
          description="La satisfaction de nos clients est notre priorité. Découvrez leurs retours d'expérience sur nos prestations."
          centered
        />

        <div className="mt-16 relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover rounded-full border-4 border-orange-500"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < testimonials[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 text-lg">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-blue-900 text-xl">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors text-blue-900"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-orange-500 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-md hover:bg-blue-50 transition-colors text-blue-900"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-12 left-0 w-32 h-32 bg-orange-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100%", label: "Satisfaction client" },
            { value: "50+", label: "Projets réalisés" },
            { value: "13+", label: "Années d'expérience" },
            { value: "12", label: "villes d'intervention" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};