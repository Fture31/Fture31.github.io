import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Container } from '../ui/Container';
import { Link } from '../ui/Link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-orange-500 mr-1">H</span>ydro<span className="text-orange-500">B</span>uild
            </div>
            <p className="text-gray-400 mb-6">
              Expert en maîtrise d'œuvre, études architecturales et techniques, contrôle, 
              supervision, construction et réfection des ouvrages hydrauliques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-orange-500">
              Nos Services
            </h3>
            <ul className="space-y-3">
              {[
                "Études architecturales",
                "Ouvrages hydrauliques",
                "Construction de bâtiments",
                "Génie civil",
                "Supervision de chantier",
                "Topographie"
              ].map((service, index) => (
                <li key={index}>
                  <Link href="#services" className="text-gray-400 hover:text-white flex items-center">
                    <ArrowRight size={14} className="mr-2 text-orange-500" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-orange-500">
              Liens Rapides
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#home" },
                { name: "À propos", href: "#about" },
                { name: "Projets", href: "#projects" },
                { name: "Témoignages", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white flex items-center">
                    <ArrowRight size={14} className="mr-2 text-orange-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-orange-500">
              Contactez-nous
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400"> Amtoukouin, Ndjamena, Tchad</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+235 66130277 </span>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">biacconsulting@yahoo.fr</span>
              </div>
              <div className="flex items-start">
                <Clock className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">Lun - Ven: 8h00 - 18h00<br />Sam: 8h00 - 12h00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} HydroBuild. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">Mentions Légales</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">Politique de Confidentialité</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};