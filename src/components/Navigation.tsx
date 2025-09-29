import { Card } from "@/components/ui/card";
import { Home, User, Briefcase, GraduationCap, FolderOpen, Mail } from "lucide-react";

const navigationItems = [
  {
    icon: Home,
    label: "Главная",
    href: "#hero",
    color: "hover:text-primary"
  },
  {
    icon: User,
    label: "Навыки",
    href: "#skills",
    color: "hover:text-primary"
  },
  {
    icon: Briefcase,
    label: "Опыт",
    href: "#experience",
    color: "hover:text-primary"
  },
  {
    icon: GraduationCap,
    label: "Образование",
    href: "#education",
    color: "hover:text-primary"
  },
  {
    icon: FolderOpen,
    label: "Проекты",
    href: "#projects",
    color: "hover:text-primary"
  },
  {
    icon: Mail,
    label: "Контакты",
    href: "#contact",
    color: "hover:text-primary"
  }
];

const Navigation = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
      <Card className="glass-effect shadow-apple-large border border-border/50">
        <div className="flex items-center gap-2 p-3">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-300 ${item.color} hover:bg-accent/50 group`}
                title={item.label}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </Card>
    </nav>
  );
};

export default Navigation;