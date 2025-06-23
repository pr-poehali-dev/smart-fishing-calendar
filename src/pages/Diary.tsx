import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Diary = () => {
  const entries = [
    {
      date: "15 июня 2024",
      location: "Озеро Селигер",
      fish: "Щука",
      weight: 2.3,
      weather: "Облачно, +18°",
      notes: "Отличный клев с утра, использовал воблер.",
    },
    {
      date: "12 июня 2024",
      location: "Река Волга",
      fish: "Окунь",
      weight: 0.8,
      weather: "Солнечно, +22°",
      notes: "Ловил на червя, много поклевок.",
    },
    {
      date: "8 июня 2024",
      location: "Пруд Михайловский",
      fish: "Карп",
      weight: 4.1,
      weather: "Переменно, +20°",
      notes: "Крупный карп на фидер с кукурузой.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-morning-mist pb-20">
      <header className="p-6 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold mb-2">
            📖 Дневник уловов
          </h1>
          <p className="text-muted-foreground">Твои рыболовные записи</p>
        </div>
        <button className="bg-primary text-primary-foreground p-3 rounded-full">
          <Icon name="Plus" size={24} />
        </button>
      </header>

      <div className="px-4 space-y-4">
        {entries.map((entry, index) => (
          <div key={index} className="nature-card p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-lg">{entry.fish}</h3>
                <p className="text-sm text-muted-foreground">{entry.date}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">
                  {entry.weight} кг
                </p>
                <Icon name="Fish" className="text-accent ml-auto" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-muted-foreground"
                />
                <p className="text-sm">{entry.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CloudSun"
                  size={16}
                  className="text-muted-foreground"
                />
                <p className="text-sm">{entry.weather}</p>
              </div>
              <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">{entry.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default Diary;
