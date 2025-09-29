import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Лукойл",
    position: "Разработчик SAP",
    location: "Москва",
    period: "Сентябрь 2023 - Сентябрь 2024",
    description: [
      "Разработка и поддержка рабочих книг для аналитических решений",
      "Создание и оптимизация BEx-query для повышения производительности отчетности",
      "Разработка Calculation Views для интеграции и агрегации данных",
      "Анализ данных для выявления тенденций и поддержки бизнес-решений",
      "Настройка мэппингов и процессов загрузки данных из различных источников",
      "Участие в проекте по инвестициям: миграция данных из старой системы в новую"
    ]
  },
  {
    company: "Фриланс",
    position: "Frontend Developer",
    location: "Удаленно",
    period: "2023 - настоящее время",
    description: [
      "ai-bazar.ru — платформа для продажи подписок на зарубежные сервисы",
      "vyborplus.ru — e-commerce для лесопилки",
      "matrix-market.ru — e-commerce для продажи техники Apple"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Опыт работы</h2>
          <p className="text-lg text-muted-foreground">
            Опыт работы с SAP системами и разработка современных веб-приложений
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="card-gradient shadow-apple p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-medium text-foreground mb-2">
                    {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col md:text-right text-muted-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;