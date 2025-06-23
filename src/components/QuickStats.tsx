import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const QuickStats = () => {
  const monthlyData = [
    { month: "Мар", catches: 12 },
    { month: "Апр", catches: 18 },
    { month: "Май", catches: 25 },
    { month: "Июн", catches: 15 },
  ];

  const fishTypes = [
    { name: "Щука", value: 35, color: "#16A34A" },
    { name: "Окунь", value: 25, color: "#0EA5E9" },
    { name: "Карп", value: 20, color: "#F97316" },
    { name: "Другое", value: 20, color: "#8B5CF6" },
  ];

  return (
    <div className="nature-card p-4">
      <h4 className="font-heading font-semibold mb-4">Статистика за сезон</h4>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">87</p>
          <p className="text-xs text-muted-foreground">Всего рыб</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">23.4</p>
          <p className="text-xs text-muted-foreground">Общий вес, кг</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Уловы по месяцам</p>
        <ResponsiveContainer width="100%" height={80}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <YAxis hide />
            <Bar dataKey="catches" fill="#0EA5E9" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Виды рыб</p>
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={fishTypes}
                cx="50%"
                cy="50%"
                innerRadius={20}
                outerRadius={40}
                dataKey="value"
              >
                {fishTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {fishTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-1">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: type.color }}
              />
              <span className="text-xs text-muted-foreground">{type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
