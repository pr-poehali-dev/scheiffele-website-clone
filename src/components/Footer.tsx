
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="font-serif text-2xl font-bold text-primary mb-4 inline-block">
              Консалтинг
            </Link>
            <p className="text-muted-foreground">
              Профессиональные консалтинговые услуги для бизнеса любого размера.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/services/strategic" className="text-muted-foreground hover:text-primary">Стратегический анализ</Link></li>
              <li><Link to="/services/hr" className="text-muted-foreground hover:text-primary">Управление персоналом</Link></li>
              <li><Link to="/services/financial" className="text-muted-foreground hover:text-primary">Финансовый консалтинг</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Все услуги</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">О нас</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary">Команда</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary">Карьера</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2 flex items-start">
                <Icon name="MapPin" size={18} className="mr-2 mt-1 shrink-0" />
                <span>ул. Примерная, 123, Москва, 123456</span>
              </p>
              <p className="mb-2 flex items-center">
                <Icon name="Phone" size={18} className="mr-2 shrink-0" />
                <span>+7 (495) 123-45-67</span>
              </p>
              <p className="flex items-center">
                <Icon name="Mail" size={18} className="mr-2 shrink-0" />
                <span>info@konsalting.ru</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Консалтинг. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
