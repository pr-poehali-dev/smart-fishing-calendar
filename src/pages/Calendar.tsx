import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Calendar = () => {
  const forecastDays = [
    {
      date: "20 июня",
      day: "Сегодня",
      index: 8.5,
      weather: "Облачно",
      temp: 18,
      icon: "CloudSun",
    },
    {
      date: "21 июня",
      day: "Завтра",
      index: 9.2,
      weather: "Солнечно",
      temp: 22,
      icon: "Sun",
    },
    {
      date: "22 июня",
      day: "Пт",
      index: 7.1,
      weather: "Дождь",
      temp: 16,
      icon: "CloudRain",
    },
    {
      date: "23 июня",
      day: "Сб",
      index: 8.8,
      weather: "Переменно",
      temp: 20,
      icon: "CloudSun",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-morning-mist pb-20">
      <header className="p-6">
        <h1 className="font-heading text-2xl font-bold mb-2">
          📅 Календарь клева
        </h1>
        <p className="text-muted-foreground">Прогноз на ближайшие дни</p>
      </header>

      <div className="px-4 space-y-4">
        {forecastDays.map((day, index) => (
          <div key={index} className="nature-card p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold">{day.day}</h3>
                <p className="text-sm text-muted-foreground">{day.date}</p>
              </div>
              <Icon name={day.icon} size={32} className="text-primary" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{day.index}</p>
                <p className="text-xs text-muted-foreground">Клев</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">{day.temp}°</p>
                <p className="text-xs text-muted-foreground">{day.weather}</p>
              </div>
              <div className="text-center">
                <div className="text-sm space-y-1">
                  <p className="text-muted-foreground">Лучшее время:</p>
                  <p className="font-medium">6:00-10:00</p>
                  <p className="font-medium">18:00-21:00</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default Calendar;
