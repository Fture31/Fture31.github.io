import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from '../ui/Link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projets', href: '#projects' },
  { name: 'À propos', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900 flex items-center">
              <span className="text-orange-500 mr-1">B</span>IAC<span className="text-orange-500">C</span>ONSULTING
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-blue-900' : 'text-white hover:text-orange-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant={scrolled ? "primary" : "outline"}
              className="flex items-center"
            >
              <Globe size={16} className="mr-2" />
              <span>FR</span>
              <ChevronDown size={16} className="ml-1" />
            </Button>
            <Button>Devis Gratuit</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-1 sm:px-3 bg-white rounded-b-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-3 flex items-center space-x-2">
              <Button variant="primary" size="sm" className="flex items-center">
                <Globe size={16} className="mr-2" />
                <span>FR</span>
                <ChevronDown size={16} className="ml-1" />
              </Button>
              <Button size="sm">Devis Gratuit</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};