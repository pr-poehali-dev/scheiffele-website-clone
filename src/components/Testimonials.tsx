
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    quote: "Работа с командой консультантов принесла нашей компании реальные результаты. За 6 месяцев мы увеличили эффективность бизнес-процессов на 35%.",
    author: "Елена Смирнова",
    position: "Генеральный директор, ООО 'Инновации'"
  },
  {
    quote: "Благодаря профессиональному подходу и глубокому пониманию нашей отрасли, консультанты предложили стратегию, которая помогла нам выйти на новые рынки.",
    author: "Алексей Петров",
    position: "Коммерческий директор, ЗАО 'ТехноПром'"
  },
  {
    quote: "Мы обратились за помощью в критический момент, и команда оперативно разработала план по антикризисному управлению, который помог нам сохранить бизнес.",
    author: "Михаил Иванов",
    position: "Основатель, 'Логистик Плюс'"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас клиенты, которые доверили нам свой бизнес
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="border-0 bg-white shadow-md rounded-none">
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <Icon name="Quote" size={32} className="text-primary opacity-40" />
                      </div>
                      <blockquote className="mb-6 text-lg font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static -translate-y-0 mx-2 bg-transparent hover:bg-white/50 border-primary text-primary" />
              <CarouselNext className="static -translate-y-0 mx-2 bg-transparent hover:bg-white/50 border-primary text-primary" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
