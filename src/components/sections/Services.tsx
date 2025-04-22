import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Droplet, Building, Compass, Ruler, Users, ClipboardCheck } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    id: 1,
    title: "Ouvrages Hydrauliques",
    description: "Construction et réhabilitation d'infrastructures hydrauliques urbaines et rurales pour l'approvisionnement en eau.",
    icon: Droplet,
    color: "blue"
  },
  {
    id: 2,
    title: "Construction de Bâtiments",
    description: "Édification de structures résidentielles, commerciales et industrielles selon les plus hauts standards de qualité.",
    icon: Building,
    color: "orange"
  },
  {
    id: 3,
    title: "Études Architecturales",
    description: "Conception et planification détaillée de projets architecturaux innovants et fonctionnels.",
    icon: Compass,
    color: "teal"
  },
  {
    id: 4,
    title: "Topographie",
    description: "Relevés topographiques précis et cartographie détaillée des terrains pour une planification optimale.",
    icon: Ruler,
    color: "purple"
  },
  {
    id: 5,
    title: "Supervision de Chantier",
    description: "Contrôle rigoureux et suivi expert des travaux pour garantir la conformité aux plans et aux normes.",
    icon: ClipboardCheck,
    color: "red"
  },
  {
    id: 6,
    title: "Consultation Technique",
    description: "Expertise et conseils professionnels pour optimiser vos projets de construction et d'ingénierie.",
    icon: Users,
    color: "green"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Nos Services"
          subtitle="Solutions complètes d'ingénierie et de construction"
          description="Nous proposons une gamme complète de services d'ingénierie et de construction pour répondre à tous vos besoins en matière d'infrastructures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Notre équipe d'experts est prête à relever tous vos défis techniques et à vous accompagner 
            à chaque étape de votre projet, de la conception à la réalisation.
          </p>
          <button className="btn-primary text-white bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-md font-medium transition-colors">
            Demander un Devis
          </button>
        </div>
      </Container>
    </section>
  );
};