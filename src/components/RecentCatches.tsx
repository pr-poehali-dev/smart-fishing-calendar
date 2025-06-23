import Icon from "@/components/ui/icon";

const RecentCatches = () => {
  const recentCatches = [
    { fish: "Щука", weight: 2.3, location: "Озеро Селигер", date: "15 июня" },
    { fish: "Окунь", weight: 0.8, location: "Река Волга", date: "12 июня" },
    {
      fish: "Карп",
      weight: 4.1,
      location: "Пруд Михайловский",
      date: "8 июня",
    },
  ];

  return (
    <div className="nature-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-heading font-semibold">Последние уловы</h4>
        <Icon name="Fish" className="text-accent" size={20} />
      </div>

      <div className="space-y-3">
        {recentCatches.map((catch_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg bg-muted/30"
          >
            <div className="flex-1">
              <p className="font-medium text-sm">{catch_.fish}</p>
              <p className="text-xs text-muted-foreground">{catch_.location}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-sm text-primary">
                {catch_.weight} кг
              </p>
              <p className="text-xs text-muted-foreground">{catch_.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCatches;
