import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/calendar", icon: "Calendar", label: "Календарь" },
    { path: "/diary", icon: "BookOpen", label: "Дневник" },
    { path: "/map", icon: "Map", label: "Карта" },
    { path: "/stats", icon: "BarChart3", label: "Статистика" },
    { path: "/profile", icon: "User", label: "Профиль" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200 ${
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Icon name={icon} size={24} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
