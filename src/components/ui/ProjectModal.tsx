import React from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    description: string;
    details?: {
      client?: string;
      duration?: string;
      challenge?: string;
      solution?: string;
      impact?: string;
      gallery?: string[];
    };
  };
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Main Image */}
          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Localisation</h3>
              <p className="text-gray-600">{project.location}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Année</h3>
              <p className="text-gray-600">{project.year}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">Catégorie</h3>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Description du Projet</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>

            {project.details?.challenge && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Le Défi</h3>
                <p className="text-gray-600">{project.details.challenge}</p>
              </div>
            )}

            {project.details?.solution && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Notre Solution</h3>
                <p className="text-gray-600">{project.details.solution}</p>
              </div>
            )}

            {project.details?.impact && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Impact</h3>
                <p className="text-gray-600">{project.details.impact}</p>
              </div>
            )}

            {/* Gallery */}
            {project.details?.gallery && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Galerie</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.details.gallery.map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};