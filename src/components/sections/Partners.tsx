import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const partners = [
  {
    name: "MINISTERE DE LA JEUNESSE ET SPORT",
    logo: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg",
  },
  {
    name: "SOPROFIM",
    logo: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
  },
  {
    name: "Mairie de N'Djamena",
    logo: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
  },
  {
    name: "UNHCR",
    logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    name: "GIZ International",
    logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  }
];

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Nos Partenaires"
          subtitle="Ils nous font confiance"
          description="Nous collaborons avec des institutions et organisations prestigieuses pour offrir l'excellence dans chaque projet."
          centered
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-gray-900">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};