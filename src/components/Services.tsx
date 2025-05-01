
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const servicesData = [
  {
    icon: 'LineChart',
    title: 'Стратегический анализ',
    description: 'Комплексный анализ бизнеса и рынка для выявления возможностей роста и развития.',
    link: '/services/strategic-analysis'
  },
  {
    icon: 'Users',
    title: 'Управление персоналом',
    description: 'Оптимизация HR-процессов, обучение и развитие команды, построение эффективной структуры.',
    link: '/services/hr-management'
  },
  {
    icon: 'BarChart2',
    title: 'Финансовый консалтинг',
    description: 'Финансовое планирование, бюджетирование, оптимизация расходов и увеличение прибыли.',
    link: '/services/financial-consulting'
  }
];

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем широкий спектр консалтинговых услуг, направленных на рост и развитие вашего бизнеса
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow rounded-none">
              <CardHeader className="pb-2">
                <div className="bg-secondary inline-flex p-3 rounded-md mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-foreground/80">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href={service.link} className="text-primary font-medium text-sm inline-flex items-center group">
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

export default Services;
