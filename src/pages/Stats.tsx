import Navigation from "@/components/Navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Stats = () => {
  const monthlyData = [
    { month: "Янв", catches: 8, weight: 12.5 },
    { month: "Фев", catches: 6, weight: 9.2 },
    { month: "Мар", catches: 12, weight: 18.7 },
    { month: "Апр", catches: 18, weight: 28.4 },
    { month: "Май", catches: 25, weight: 42.1 },
    { month: "Июн", catches: 15, weight: 23.8 },
  ];

  const fishTypes = [
    { name: "Щука", value: 35, color: "#16A34A" },
    { name: "Окунь", value: 25, color: "#0EA5E9" },
    { name: "Карп", value: 20, color: "#F97316" },
    { name: "Лещ", value: 12, color: "#8B5CF6" },
    { name: "Другое", value: 8, color: "#6B7280" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-morning-mist pb-20">
      <header className="p-6">
        <h1 className="font-heading text-2xl font-bold mb-2">📊 Статистика</h1>
        <p className="text-muted-foreground">Анализ твоих уловов</p>
      </header>

      <div className="px-4 space-y-6">
        {/* Общая статистика */}
        <div className="grid grid-cols-2 gap-4">
          <div className="nature-card p-4 text-center">
            <h3 className="text-2xl font-bold text-primary">127</h3>
            <p className="text-sm text-muted-foreground">Всего рыб</p>
          </div>
          <div className="nature-card p-4 text-center">
            <h3 className="text-2xl font-bold text-secondary">45.2</h3>
            <p className="text-sm text-muted-foreground">Общий вес, кг</p>
          </div>
        </div>

        {/* График уловов по месяцам */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">Уловы по месяцам</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Bar dataKey="catches" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* График веса по месяцам */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">Общий вес по месяцам</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#16A34A"
                strokeWidth={3}
                dot={{ fill: "#16A34A", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Распределение видов рыб */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">Виды рыб</h3>
          <div className="flex justify-center mb-4">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={fishTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {fishTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {fishTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-sm">{type.name}</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  {type.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Рекорды */}
        <div className="nature-card p-4">
          <h3 className="font-semibold mb-4">🏆 Твои рекорды</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Самая крупная рыба:</span>
              <span className="font-semibold">Карп 4.8 кг</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Лучший день:</span>
              <span className="font-semibold">8 рыб (15 мая)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Любимое место:</span>
              <span className="font-semibold">Озеро Селигер</span>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Stats;
