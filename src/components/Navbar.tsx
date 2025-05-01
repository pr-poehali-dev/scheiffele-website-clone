
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            Консалтинг
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Главная</Link></li>
            <li><Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link></li>
            <li><Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">О нас</Link></li>
            <li><Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</Link></li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors">
            Связаться
          </Button>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col py-4">
            <li className="px-4 py-2"><Link to="/" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>Главная</Link></li>
            <li className="px-4 py-2"><Link to="/services" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>Услуги</Link></li>
            <li className="px-4 py-2"><Link to="/about" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>О нас</Link></li>
            <li className="px-4 py-2"><Link to="/contact" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>Контакты</Link></li>
            <li className="px-4 py-2 mt-2">
              <Button variant="outline" className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                Связаться
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
