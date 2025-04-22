import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Contactez-Nous"
          subtitle="Discutons de votre projet"
          description="Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de votre projet."
          centered
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-1">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Informations de Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-900" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Adresse</h4>
                  <p className="text-gray-600 mt-1">123 Avenue de l'Ingénierie, Dakar, Sénégal</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="text-orange-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Téléphone</h4>
                  <p className="text-gray-600 mt-1">+221 77 123 45 67</p>
                  <p className="text-gray-600">+221 33 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Mail className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">contact@hydrobuild.com</p>
                  <p className="text-gray-600">info@hydrobuild.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Clock className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Heures d'ouverture</h4>
                  <p className="text-gray-600 mt-1">Lundi - Vendredi: 8h00 - 18h00</p>
                  <p className="text-gray-600">Samedi: 8h00 - 12h00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-gray-100 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`} 
                      alt={social} 
                      className="w-5 h-5" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-2">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Envoyez-nous un message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Renseignements</option>
                    <option value="collaboration">Proposition de collaboration</option>
                    <option value="recrutement">Recrutement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="ml-2 text-gray-700">
                  J'accepte que mes données soient traitées conformément à la politique de confidentialité
                </label>
              </div>
              
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                Envoyer le message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Map */}
        {/* <div className="mt-12 rounded-lg overflow-hidden shadow-lg h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123857.36037174966!2d-17.54338555!3d14.72129795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1664992745185!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location"
          ></iframe>
        </div> */}
      </Container>
    </section>
  );
};