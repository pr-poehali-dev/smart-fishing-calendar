import Icon from "@/components/ui/icon";

const WeatherWidget = () => {
  // Мок-данные погоды
  const weatherData = {
    temperature: 18,
    condition: "Облачно",
    windSpeed: 12,
    pressure: 758,
    humidity: 65,
    fishingIndex: 8.5,
  };

  return (
    <div className="nature-card p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-heading font-semibold">Погода и клев</h4>
        <Icon name="CloudSun" className="text-primary" size={20} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">
            {weatherData.temperature}°
          </p>
          <p className="text-xs text-muted-foreground">
            {weatherData.condition}
          </p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">
            {weatherData.fishingIndex}
          </p>
          <p className="text-xs text-muted-foreground">Индекс клева</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="text-center">
          <Icon
            name="Wind"
            size={16}
            className="mx-auto mb-1 text-muted-foreground"
          />
          <p className="text-muted-foreground">{weatherData.windSpeed} м/с</p>
        </div>
        <div className="text-center">
          <Icon
            name="Gauge"
            size={16}
            className="mx-auto mb-1 text-muted-foreground"
          />
          <p className="text-muted-foreground">{weatherData.pressure} мм</p>
        </div>
        <div className="text-center">
          <Icon
            name="Droplets"
            size={16}
            className="mx-auto mb-1 text-muted-foreground"
          />
          <p className="text-muted-foreground">{weatherData.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
