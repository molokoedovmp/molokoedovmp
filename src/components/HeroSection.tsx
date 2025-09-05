import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Алексей <span className="text-primary">Иванов</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Frontend разработчик
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Москва, Россия</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>alexey@example.com</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Создаю современные веб-приложения с фокусом на пользовательский опыт 
            и производительность. Специализируюсь на React, TypeScript и современных 
            фронтенд технологиях.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 px-8 py-3"
          >
            Связаться со мной
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 hover-lift"
          >
            Скачать резюме
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="#" 
            className="p-3 rounded-full bg-card shadow-apple-subtle hover-lift"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="#" 
            className="p-3 rounded-full bg-card shadow-apple-subtle hover-lift"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;