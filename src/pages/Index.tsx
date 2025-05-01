
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Products from '@/components/Products'; // Импортируем новый компонент
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products /> {/* Добавляем компонент продукции */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">О нашей компании</h2>
                <p className="text-lg mb-4 text-foreground/80">
                  Мы команда экспертов с обширным опытом работы в различных отраслях бизнеса.
                  Наша миссия — помогать компаниям достигать исключительных результатов через
                  стратегическое планирование и оптимизацию бизнес-процессов.
                </p>
                <p className="text-lg mb-6 text-foreground/80">
                  С 2010 года мы успешно реализовали более 200 проектов для клиентов
                  в сферах производства, ритейла, IT и финансовых услуг.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">Лет опыта</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-4xl font-bold text-primary">200+</p>
                    <p className="text-sm text-muted-foreground">Проектов</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-4xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Экспертов</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-secondary relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Команда консультантов" 
                    className="w-full h-full object-cover mix-blend-multiply" 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-2/3 h-40 border border-primary z-0"></div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Готовы к сотрудничеству?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Свяжитесь с нами сегодня, чтобы обсудить, как мы можем помочь вашему бизнесу расти и развиваться
            </p>
            <a href="/contact" className="inline-block px-8 py-4 bg-white text-primary font-medium hover:bg-secondary transition-colors">
              Связаться с нами
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

