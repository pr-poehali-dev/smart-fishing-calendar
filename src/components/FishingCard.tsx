import { ReactNode } from "react";

interface FishingCardProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
  gradient?: "water" | "forest" | "sunset";
  onClick?: () => void;
}

const FishingCard = ({
  title,
  subtitle,
  icon,
  children,
  gradient = "water",
  onClick,
}: FishingCardProps) => {
  const gradientClasses = {
    water: "water-ripple",
    forest: "forest-gradient",
    sunset: "sunset-glow",
  };

  return (
    <div
      className={`nature-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        onClick ? "active:scale-95" : ""
      }`}
      onClick={onClick}
    >
      <div
        className={`inline-flex p-3 rounded-lg mb-4 ${gradientClasses[gradient]}`}
      >
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-lg mb-1">{title}</h3>
      {subtitle && (
        <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default FishingCard;
