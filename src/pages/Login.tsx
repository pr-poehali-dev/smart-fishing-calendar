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
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <Icon name="Fish" size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-800">
              Добро пожаловать!
            </CardTitle>
            <CardDescription className="text-blue-600">
              Войдите в свой рыболовный дневник
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            </form>

            <div className="text-center">
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Забыли пароль?
              </Link>
            </div>

            <Separator />

            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <Icon name="Mail" size={16} className="mr-2" />
                Войти через Google
              </Button>

              <Button variant="outline" className="w-full">
                <Icon
                  name="Facebook"
                  size={16}
                  className="mr-2"
                  fallback="Users"
                />
                Войти через VK
              </Button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                Нет аккаунта?{" "}
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Зарегистрироваться
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
