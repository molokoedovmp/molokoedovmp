import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "alexey@example.com",
    href: "mailto:alexey@example.com"
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567"
  },
  {
    icon: MapPin,
    label: "Локация",
    value: "Москва, Россия",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    color: "hover:text-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-600"
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    href: "https://t.me",
    color: "hover:text-blue-500"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 pb-32 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-semibold mb-6">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Готов к новым проектам и интересным предложениям
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient shadow-apple p-8 animate-slide-up">
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Связаться со мной
            </h3>
            
            <div className="space-y-4 mb-8">
              {contacts.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="font-medium">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            
            <div className="border-t pt-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Социальные сети
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 bg-card rounded-lg shadow-apple-subtle transition-all hover:-translate-y-1 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="card-gradient shadow-apple p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold mb-6 text-primary">
              Готов к сотрудничеству
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ищу интересные проекты где смогу применить свои навыки в 
              современной фронтенд разработке. Открыт для обсуждения 
              как постоянной работы, так и проектного сотрудничества.
            </p>
            
            <div className="space-y-4">
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Написать мне
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full hover-lift"
                size="lg"
              >
                Скачать резюме PDF
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Доступен для работы:</strong> Полная занятость, удаленка
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;