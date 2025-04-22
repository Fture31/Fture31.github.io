import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Notre Histoire et Notre Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Depuis plus de 13 ans, <span className="font-semibold">BEAC CONSULTING</span> s'impose comme 
              un leader dans le domaine de la construction et de l'ingénierie hydraulique en Afrique de l'Ouest. 
              Notre équipe pluridisciplinaire apporte son expertise technique et son savoir-faire à chaque projet.
            </p>
            <p className="text-gray-600 mb-8">
              Nous nous distinguons par notre approche intégrée qui combine maîtrise d'œuvre, 
              études techniques approfondies et supervision rigoureuse pour garantir l'excellence 
              dans tous nos projets, qu'il s'agisse d'ouvrages hydrauliques complexes, de bâtiments 
              modernes ou d'infrastructures critiques.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: CheckCircle, text: "Certification ISO 9001" },
                { icon: Award, text: "Projets primés" },
                { icon: Users, text: "Équipe d'experts" },
                { icon: Clock, text: "Livraison dans les délais" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <item.icon className="text-orange-500 mr-2" size={20} />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition">
                En savoir plus
              </button>
              <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded hover:bg-blue-50 transition">
                Notre équipe
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg" 
                  alt="Construction site" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg" 
                  alt="Engineering team" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg" 
                  alt="Hydraulic infrastructure" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" 
                  alt="Building project" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">50+</p>
                  <p className="text-gray-600">Projets réalisés</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">13+</p>
                  <p className="text-gray-600">Années d'expérience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">10+</p>
                  <p className="text-gray-600">Experts & ingénieurs</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-900">15</p>
                  <p className="text-gray-600">villes d'intervention</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-32">
          <SectionHeading
            title="Nos Valeurs"
            subtitle="Ce qui guide notre travail au quotidien"
            description="Chez BIAC CONSULTING, nos valeurs sont le fondement de toutes nos actions et décisions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                description: "Nous visons l'excellence dans chaque aspect de notre travail, de la conception à la réalisation.",
                color: "bg-blue-100 text-blue-900"
              },
              {
                title: "Innovation",
                description: "Nous recherchons constamment de nouvelles solutions pour répondre aux défis techniques les plus complexes.",
                color: "bg-orange-100 text-orange-900"
              },
              {
                title: "Intégrité",
                description: "Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.",
                color: "bg-teal-100 text-teal-900"
              },
              {
                title: "Durabilité",
                description: "Nous concevons nos projets dans une perspective de développement durable et respectueux de l'environnement.",
                color: "bg-purple-100 text-purple-900"
              }
            ].map((value, index) => (
              <div key={index} className={`p-6 rounded-lg ${value.color} h-full`}>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};