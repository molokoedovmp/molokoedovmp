import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "TechCorp",
    position: "Senior Frontend Developer",
    location: "Москва",
    period: "2022 - настоящее время",
    description: [
      "Разработка и поддержка крупного SaaS продукта на React/TypeScript",
      "Оптимизация производительности, уменьшение времени загрузки на 40%",
      "Внедрение современных практик разработки и code review процессов",
      "Менторство junior разработчиков"
    ]
  },
  {
    company: "StartupX",
    position: "Frontend Developer",
    location: "Санкт-Петербург",
    period: "2020 - 2022",
    description: [
      "Создание пользовательских интерфейсов для финтех приложения",
      "Интеграция с REST API и внешними сервисами",
      "Разработка адаптивных интерфейсов для мобильных устройств",
      "Участие в проектировании архитектуры фронтенда"
    ]
  },
  {
    company: "WebStudio",
    position: "Junior Frontend Developer",
    location: "Москва",
    period: "2019 - 2020",
    description: [
      "Верстка лендингов и корпоративных сайтов",
      "Изучение современных фронтенд технологий",
      "Работа с системами управления контентом",
      "Оптимизация сайтов для поисковых систем"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Опыт работы</h2>
          <p className="text-lg text-muted-foreground">
            Более 4 лет опыта в разработке пользовательских интерфейсов
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