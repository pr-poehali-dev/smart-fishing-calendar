import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/marker", icon: "Target", label: "Маркер" },
    { path: "/diary", icon: "BookOpen", label: "Дневник" },
    { path: "/map", icon: "Map", label: "Карта" },
    { path: "/stats", icon: "BarChart3", label: "Статистика" },
    { path: "/profile", icon: "User", label: "Профиль" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50 safe-area-pb">
      <div className="flex justify-between items-center px-2 py-1 max-w-screen-sm mx-auto">
        {navItems.map(({ path, icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center py-1 px-1 rounded-lg transition-colors duration-200 min-w-0 flex-1 ${
              location.pathname === path
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Icon name={icon} size={20} />
            <span className="text-[10px] mt-0.5 font-medium truncate leading-tight">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
