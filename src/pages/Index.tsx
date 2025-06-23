import Navigation from "@/components/Navigation";
import FishingCard from "@/components/FishingCard";
import WeatherWidget from "@/components/WeatherWidget";
import RecentCatches from "@/components/RecentCatches";
import QuickStats from "@/components/QuickStats";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-morning-mist to-background pb-20">
      {/* Заголовок */}
      <header className="p-6 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
          FishLog
        </h1>
        <p className="text-muted-foreground">Твой помощник на рыбалке</p>
      </header>

      {/* Основные разделы */}
      <div className="px-4 space-y-6">
        {/* Быстрые действия */}
        <div className="grid grid-cols-2 gap-4">
          <FishingCard
            title="Прогноз клева"
            subtitle="Сегодня отлично!"
            icon={<Icon name="Calendar" size={24} className="text-white" />}
            gradient="water"
          >
            <p className="text-sm">
              Индекс: <span className="font-bold text-primary">8.5/10</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Лучшее время: 6:00-10:00
            </p>
          </FishingCard>

          <FishingCard
            title="Новая запись"
            subtitle="Добавить улов"
            icon={<Icon name="Plus" size={24} className="text-white" />}
            gradient="forest"
          >
            <p className="text-sm">Быстрое добавление</p>
            <p className="text-xs text-muted-foreground">Фото + описание</p>
          </FishingCard>
        </div>

        {/* Погода */}
        <WeatherWidget />

        {/* Последние уловы */}
        <RecentCatches />

        {/* Статистика */}
        <QuickStats />

        {/* Карта водоемов */}
        <FishingCard
          title="Карта водоемов"
          subtitle="Найди лучшие места"
          icon={<Icon name="MapPin" size={24} className="text-white" />}
          gradient="sunset"
        >
          <p className="text-sm">🏆 Рейтинговые места</p>
          <p className="text-xs text-muted-foreground">Отзывы рыболовов</p>
        </FishingCard>

        {/* Социальные функции */}
        <FishingCard
          title="Сообщество"
          subtitle="Обмен опытом"
          icon={<Icon name="Users" size={24} className="text-white" />}
          gradient="water"
        >
          <p className="text-sm">💬 Новые отчеты: 12</p>
          <p className="text-xs text-muted-foreground">Читай советы профи</p>
        </FishingCard>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;
