import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-morning-mist pb-20">
      <header className="p-6 text-center">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="User" size={48} className="text-primary-foreground" />
        </div>
        <h1 className="font-heading text-2xl font-bold mb-1">
          Алексей Рыбаков
        </h1>
        <p className="text-muted-foreground">Стаж рыбалки: 8 лет</p>
      </header>

      <div className="px-4 space-y-6">
        {/* Достижения */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">🏆 Достижения</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-primary/10 rounded-lg">
              <p className="text-2xl">🎣</p>
              <p className="text-sm font-medium">Новичок</p>
              <p className="text-xs text-muted-foreground">100+ рыб</p>
            </div>
            <div className="text-center p-3 bg-secondary/10 rounded-lg">
              <p className="text-2xl">🎯</p>
              <p className="text-sm font-medium">Точность</p>
              <p className="text-xs text-muted-foreground">50+ щук</p>
            </div>
          </div>
        </div>

        {/* Настройки */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">⚙️ Настройки</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon name="Bell" size={20} className="text-muted-foreground" />
                <span className="text-sm">Уведомления</span>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon name="Moon" size={20} className="text-muted-foreground" />
                <span className="text-sm">Темная тема</span>
              </div>
              <div className="w-12 h-6 bg-muted rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-muted-foreground"
                />
                <span className="text-sm">Геолокация</span>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Статистика профиля */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">📈 Моя статистика</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-primary">127</p>
              <p className="text-xs text-muted-foreground">Всего рыб</p>
            </div>
            <div>
              <p className="text-xl font-bold text-secondary">24</p>
              <p className="text-xs text-muted-foreground">Водоемов</p>
            </div>
            <div>
              <p className="text-xl font-bold text-accent">8</p>
              <p className="text-xs text-muted-foreground">Рекордов</p>
            </div>
          </div>
        </div>

        {/* Действия */}
        <div className="space-y-3">
          <button className="w-full nature-card p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors">
            <Icon name="Share2" size={20} className="text-primary" />
            <span className="text-sm font-medium">Поделиться профилем</span>
          </button>

          <button className="w-full nature-card p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors">
            <Icon name="Download" size={20} className="text-secondary" />
            <span className="text-sm font-medium">Экспорт данных</span>
          </button>

          <button className="w-full nature-card p-4 flex items-center gap-3 hover:bg-destructive/10 transition-colors">
            <Icon name="LogOut" size={20} className="text-destructive" />
            <span className="text-sm font-medium text-destructive">Выйти</span>
          </button>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Profile;
