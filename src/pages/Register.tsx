import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    if (!formData.acceptTerms) {
      alert("Необходимо принять условия использования!");
      return;
    }
    // Здесь будет логика регистрации
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="UserPlus" size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">
              Регистрация
            </CardTitle>
            <CardDescription className="text-green-600">
              Создайте свой рыболовный профиль
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  required
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    handleInputChange("acceptTerms", checked as boolean)
                  }
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-none"
                >
                  Я принимаю{" "}
                  <Link to="#" className="text-green-600 hover:text-green-700">
                    условия использования
                  </Link>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Icon name="UserPlus" size={16} className="mr-2" />
                Создать аккаунт
              </Button>
            </form>

            <Separator />

            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <Icon name="Mail" size={16} className="mr-2" />
                Регистрация через Google
              </Button>

              <Button variant="outline" className="w-full">
                <Icon
                  name="Facebook"
                  size={16}
                  className="mr-2"
                  fallback="Users"
                />
                Регистрация через VK
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Уже есть аккаунт?{" "}
                <Link
                  to="/login"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Войти
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
