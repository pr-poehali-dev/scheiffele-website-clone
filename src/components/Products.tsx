
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ArrowRight } from 'lucide-react';

const productsData = [
  {
    icon: 'Package',
    title: 'Программное обеспечение',
    description: 'Современные решения для автоматизации бизнес-процессов и повышения эффективности вашей компании.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/products/software'
  },
  {
    icon: 'Layers',
    title: 'Аналитические платформы',
    description: 'Инструменты для сбора и анализа данных, которые помогут принимать обоснованные бизнес-решения.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/products/analytics'
  },
  {
    icon: 'ShieldCheck',
    title: 'Системы безопасности',
    description: 'Комплексные решения для защиты данных и обеспечения информационной безопасности бизнеса.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/products/security'
  }
];

const Products = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Наша продукция</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы разрабатываем инновационные продукты, которые помогают бизнесу расти и развиваться
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {productsData.map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="bg-secondary inline-flex p-3 rounded-md mb-4">
                  <Icon name={product.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80">
                  {product.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href={product.link} className="text-primary font-medium text-sm inline-flex items-center group">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
