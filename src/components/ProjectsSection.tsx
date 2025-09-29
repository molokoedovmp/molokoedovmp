import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Bazar",
    description: "Платформа для продажи подписок на зарубежные сервисы с интеграцией платежных систем и управлением подписками",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/placeholder.svg",
    demo: "https://ai-bazar.ru",
    github: "https://github.com/molokoedovmp/aiBazar"
  },
  {
    title: "Выбор+",
    description: "E-commerce платформа для лесопилки с каталогом продукции, системой фильтров и корзиной заказов",
    technologies: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    image: "/placeholder.svg",
    demo: "https://vyborplus.ru",
    github: "https://github.com/molokoedovmp/lesopilka"
  },
  {
    title: "Matrix Market",
    description: "Интернет-магазин техники Apple с детальными карточками товаров, корзиной и интеграцией оплаты",
    technologies: ["React", "TypeScript", "Tailwind CSS", "E-commerce"],
    image: "/placeholder.svg",
    demo: "https://matrix-market.ru",
    github: "https://github.com/molokoedovmp/matrix"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Проекты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Избранные проекты, демонстрирующие мои навыки в разработке 
            современных веб-приложений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient shadow-apple hover-lift overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;