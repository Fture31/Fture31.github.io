import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ExternalLink } from 'lucide-react';
import { ProjectModal } from '../ui/ProjectModal';

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'hydraulic', name: 'Hydraulique' },
  { id: 'buildings', name: 'Bâtiments' },
  { id: 'infrastructure', name: 'Infrastructure' },
  { id: 'rural', name: 'Rural' },
];

const projects = [
  {
    id: 1,
    title: "Barrage de Diama",
    category: "hydraulic",
    location: "Amsinnetté Brahim, Canton Bénissette",
    year: "2013-2014",
    image: "https://images.pexels.com/photos/1585330/pexels-photo-1585330.jpeg",
    description: "La maitrise d’œuvre du projet relatif aux travaux de  réalisation d’une pompe d’eau à motricité humaine .",
    details: {
      client: "PROADEL 2",
      duration: "4 mois",
      challenge: "Le principal défi était de moderniser les systèmes de régulation du barrage tout en maintenant son fonctionnement pour ne pas perturber l'approvisionnement en eau des zones agricoles environnantes.",
      solution: "Nous avons mis en place une approche par phases, permettant de remplacer les vannes une par une tout en maintenant la capacité opérationnelle du barrage. L'installation de nouveaux systèmes de contrôle automatisés a permis d'optimiser la gestion des débits.",
      impact: "Le projet a permis d'améliorer l'efficacité du barrage de 40%, réduisant les pertes d'eau et optimisant la distribution pour l'irrigation de plus de 100,000 hectares de terres agricoles.",
      gallery: [
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
        "https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg",
        "https://images.pexels.com/photos/1732408/pexels-photo-1732408.jpeg"
      ]
    }
  },
  {
    id: 2,
    title: "Tour Diamant",
    category: "buildings",
    location: " N’djamena, Tchad",
    year: "2014",
    image: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg",
    description: "Construction d'un complexe de bureaux  avec intégration de solutions énergétiques durables.",
    details: {
      client: "CENTRE NATIONAL DE CURRUCULA ",
      duration: "28 mois",
      challenge: "Construire une tour de bureaux moderne respectant les normes internationales de durabilité tout en s'adaptant aux conditions climatiques locales.",
      solution: "Utilisation de matériaux écologiques et mise en place de systèmes d'énergie solaire intégrés. Installation d'un système de récupération des eaux de pluie et de traitement des eaux usées.",
      impact: "Réduction de 60% de la consommation énergétique par rapport aux bâtiments traditionnels. Certification LEED Gold obtenue.",
      gallery: [
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
        "https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg",
        "https://images.pexels.com/photos/2067048/pexels-photo-2067048.jpeg"
      ]
    }
  },
  // {
  //   id: 3,
  //   title: "Système d'irrigation Bakel",
  //   category: "hydraulic",
  //   location: "Bakel, Sénégal",
  //   year: "2019",
  //   image: "https://images.pexels.com/photos/3736764/pexels-photo-3736764.jpeg",
  //   description: "Conception et installation d'un système d'irrigation moderne couvrant 500 hectares de terres agricoles.",
  //   details: {
  //     client: "Ministère de l'Agriculture",
  //     duration: "12 mois",
  //     challenge: "Développer un système d'irrigation efficace dans une zone aride avec des ressources en eau limitées.",
  //     solution: "Installation d'un système d'irrigation goutte-à-goutte automatisé avec monitoring en temps réel de l'humidité des sols.",
  //     impact: "Augmentation de 75% des rendements agricoles et réduction de 40% de la consommation d'eau.",
  //     gallery: [
  //       "https://images.pexels.com/photos/2132780/pexels-photo-2132780.jpeg",
  //       "https://images.pexels.com/photos/2255355/pexels-photo-2255355.jpeg",
  //       "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
  //     ]
  //   }
  // },
  {
    id: 4,
    title: "travaux de construction de l’école communale de Kinguéli",
    category: "infrastructure",
    location: "koumra, région du mandoul",
    year: "2013",
    image: "https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg",
    description: "Construction d'un pont de 1.2 km reliant les deux rives du fleuve Gambie.",
    details: {
      client: "GENECOBAT ( bureau d’études et de contrôle)",
      duration: "9 mois",
      challenge: "Construction d'un pont majeur dans des conditions fluviales difficiles tout en préservant l'écosystème local.",
      solution: "Utilisation de techniques de construction innovantes et mise en place de mesures de protection environnementale strictes.",
      impact: "Réduction du temps de traversée de 4 heures à 5 minutes. Augmentation des échanges commerciaux de 150%.",
      gallery: [
        "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg",
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg",
        "https://images.pexels.com/photos/1575955/pexels-photo-1575955.jpeg"
      ]
    }
  },
  {
    id: 5,
    title: "centre de santé ",
    category: "buildings",
    location: "Nagatalkadam, Canton de Kadada, Département du Charie",
    year: "2014",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    description: "Construction d'un hôpital moderne de 200 lits avec équipements de pointe.",
    details: {
      client: "PROADEL2 / UGL DE BONGOR ",
      duration: "6mois",
      challenge: "Coordonner les travaux de construction d’un établissement de sante  dans un environnement local tout en respectant les délais impartis.",
    solution: "Planification rigoureuse des travaux, suivi permanent de l’exécution et coordination avec les intervenants techniques.",
    impact: "Création d’un cadre d’apprentissage structuré pour les élèves ; amélioration de l’accès à l’éducation dans la région du Mandoul.",
    poste: "Directeur Général  / Chef de mission",
      gallery: [
        "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
        "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg",
        "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg"
      ]
    }
  },
  // {
  //   id: 6,
  //   title: "Réseau d'eau potable rural",
  //   category: "rural",
  //   location: "Région de Kaffrine",
  //   year: "2021",
  //   image: "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg",
  //   description: "Installation de puits et réseaux de distribution d'eau potable dans 15 villages ruraux.",
  //   details: {
  //     client: "Direction de l'Hydraulique Rurale",
  //     duration: "15 mois",
  //     challenge: "Fournir un accès durable à l'eau potable dans des zones rurales isolées avec des ressources limitées.",
  //     solution: "Installation de pompes solaires et formation des comités villageois pour la maintenance des installations.",
  //     impact: "Accès à l'eau potable pour plus de 25,000 habitants. Réduction des maladies hydriques de 65%.",
  //     gallery: [
  //       "https://images.pexels.com/photos/2537607/pexels-photo-2537607.jpeg",
  //       "https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg",
  //       "https://images.pexels.com/photos/2519390/pexels-photo-2519390.jpeg"
  //     ]
  //   }
  // }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <Container>
        <SectionHeading
          title="Nos Projets"
          subtitle="Découvrez nos réalisations récentes"
          description="Nous sommes fiers de présenter une sélection de nos projets les plus significatifs, témoignant de notre savoir-faire et de notre expertise."
          centered
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <div>
                    <span className="text-white font-medium block">{project.location}</span>
                    <span className="text-orange-300">{project.year}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="bg-white p-2 rounded-full"
                  >
                    <ExternalLink size={16} className="text-blue-900" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {categories.find(c => c.id === project.category)?.name}
                  </span>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                  >
                    Détails
                    <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors inline-flex items-center">
            Voir tous nos projets
            <ExternalLink size={16} className="ml-2" />
          </button>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Container>
    </section>
  );
};