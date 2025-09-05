import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3"],
    color: "primary"
  },
  {
    category: "Стилизация",
    technologies: ["Tailwind CSS", "Styled Components", "SASS/SCSS", "Material-UI", "Ant Design"],
    color: "secondary"
  },
  {
    category: "Инструменты",
    technologies: ["Git", "Webpack", "Vite", "ESLint", "Prettier", "Figma"],
    color: "accent"
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API", "GraphQL"],
    color: "muted"
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Навыки и технологии</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Постоянно изучаю новые технологии и совершенствую свои навыки 
            для создания лучших пользовательских интерфейсов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category}
              className="card-gradient shadow-apple hover-lift p-8 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;