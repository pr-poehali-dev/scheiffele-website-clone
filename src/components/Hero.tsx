
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Нестандартные решения для стандартных задач
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы помогаем компаниям расти и развиваться, предоставляя экспертные консультации
            и индивидуальные стратегии.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto rounded-none">
              Наши услуги
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 h-auto rounded-none">
              О компании
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
