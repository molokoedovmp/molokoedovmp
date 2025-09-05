import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "Московский Государственный Технический Университет",
    degree: "Магистр информационных технологий",
    specialization: "Программная инженерия",
    location: "Москва",
    period: "2017 - 2019",
    description: [
      "Изучение современных методологий разработки ПО",
      "Проектирование и анализ алгоритмов",
      "Работа с базами данных и системами управления",
      "Дипломный проект: веб-платформа для онлайн обучения"
    ]
  },
  {
    institution: "Московский Государственный Технический Университет",
    degree: "Бакалавр информатики и вычислительной техники",
    specialization: "Информационные системы и технологии",
    location: "Москва", 
    period: "2013 - 2017",
    description: [
      "Основы программирования на различных языках",
      "Математические методы и дискретная математика",
      "Сетевые технологии и администрирование",
      "Курсовая работа: система управления студенческими данными"
    ]
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Образование</h2>
          <p className="text-lg text-muted-foreground">
            Техническое образование в области информационных технологий
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={edu.institution}
              className="card-gradient shadow-apple p-8 hover-lift animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base font-medium text-foreground mb-1">
                        {edu.specialization}
                      </h4>
                      <h5 className="text-sm text-muted-foreground">
                        {edu.institution}
                      </h5>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:text-right text-muted-foreground mt-4 md:mt-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 ml-14">
                {edu.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed text-sm">
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

export default EducationSection;