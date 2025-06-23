import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Map = () => {
  const waterBodies = [
    {
      name: "Озеро Селигер",
      rating: 4.8,
      distance: "25 км",
      fish: ["Щука", "Судак", "Окунь"],
    },
    {
      name: "Река Волга",
      rating: 4.5,
      distance: "12 км",
      fish: ["Лещ", "Окунь", "Плотва"],
    },
    {
      name: "Пруд Михайловский",
      rating: 4.2,
      distance: "8 км",
      fish: ["Карп", "Карась", "Линь"],
    },
    {
      name: "Река Тверца",
      rating: 4.0,
      distance: "18 км",
      fish: ["Щука", "Язь", "Голавль"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-morning-mist pb-20">
      <header className="p-6">
        <h1 className="font-heading text-2xl font-bold mb-2">
          🗺️ Карта водоемов
        </h1>
        <p className="text-muted-foreground">Лучшие места для рыбалки</p>
      </header>

      {/* Макет карты */}
      <div className="mx-4 mb-6">
        <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50 animate-ripple"></div>
          <div className="text-center z-10">
            <Icon name="Map" size={48} className="text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">Интерактивная карта</p>
            <p className="text-sm text-muted-foreground">Загрузка...</p>
          </div>

          {/* Макет точек на карте */}
          <div className="absolute top-4 left-6 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Список водоемов */}
      <div className="px-4 space-y-4">
        {waterBodies.map((body, index) => (
          <div key={index} className="nature-card p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{body.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="text-sm font-medium">{body.rating}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-sm text-muted-foreground">
                    {body.distance}
                  </span>
                </div>
              </div>
              <button className="text-primary">
                <Icon name="Navigation" size={20} />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="Fish" size={16} className="text-muted-foreground" />
                <p className="text-sm">{body.fish.join(", ")}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium">
                  Маршрут
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg text-sm font-medium">
                  Отчеты
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navigation />
    </div>
  );
};

export default Map;
