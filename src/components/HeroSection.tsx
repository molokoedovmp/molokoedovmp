import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Молокоедов <span className="text-primary">Михаил Павлович</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Frontend разработчик
          </p>
          <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>@molokoedovmp</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>molokoedovm@icloud.com</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Разработка современных веб-приложений и e-commerce решений. 
            Опыт работы с SAP системами и создание полнофункциональных платформ 
            на React, TypeScript и современных технологиях.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 px-8 py-3"
            asChild
          >
            <a href="https://t.me/molokoedovmp" target="_blank" rel="noopener noreferrer">
              Связаться со мной
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/molokoedovmp" 
            className="p-3 rounded-full bg-card shadow-apple-subtle hover-lift"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://t.me/molokoedovmp" 
            className="p-3 rounded-full bg-card shadow-apple-subtle hover-lift"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;