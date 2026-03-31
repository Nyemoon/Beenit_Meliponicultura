import { useState } from "react";
import { BookOpen, Eye, Facebook, Lock, Mail, ShoppingCart, Users, Hexagon } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

type AuthMode = "entrar" | "cadastrar";

type LoginProps = {
  onEnter?: () => void;
};

export function Login({ onEnter }: LoginProps) {
  const [mode, setMode] = useState<AuthMode>("entrar");

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background px-6 pt-10 pb-6 flex flex-col justify-between">
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center shadow-sm">
            <Hexagon className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">Beenit</h1>
            <p className="text-muted-foreground text-sm">Comunidade de Meliponicultores</p>
          </div>
        </div>

        <div className="h-24 rounded-2xl bg-[url('https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center border border-border/40" />

        <Card className="p-5 border-border/40 shadow-sm bg-card rounded-2xl gap-4">
          <div className="bg-muted rounded-xl p-1 grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setMode("entrar")}
              className={`h-9 rounded-lg text-sm font-semibold transition-colors ${
                mode === "entrar" ? "bg-card text-foreground" : "text-muted-foreground"
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setMode("cadastrar")}
              className={`h-9 rounded-lg text-sm font-semibold transition-colors ${
                mode === "cadastrar" ? "bg-card text-foreground" : "text-muted-foreground"
              }`}
            >
              Cadastrar
            </button>
          </div>

          <div className="space-y-3 pt-1">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-muted-foreground">E-mail</Label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="seu@email.com" className="pl-10" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="senha" className="text-muted-foreground">Senha</Label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input id="senha" type="password" placeholder="••••••••" className="pl-10 pr-10" />
                <Eye className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <Label className="text-muted-foreground font-medium gap-2">
              <Checkbox />
              Lembrar-me
            </Label>
            <button type="button" className="text-amber-600 font-semibold hover:underline">
              Esqueceu a senha?
            </button>
          </div>

          <Button className="w-full h-11 rounded-xl bg-amber-500 text-white hover:bg-emerald-50 hover:text-emerald-900 font-semibold" onClick={onEnter}>
            {mode === "entrar" ? "Entrar" : "Criar conta"}
          </Button>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px bg-border flex-1" />
            <span>ou continue com</span>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="rounded-xl h-10">
              <span className="font-bold">G</span> Google
            </Button>
            <Button variant="outline" className="rounded-xl h-10">
              <Facebook className="w-4 h-4" /> Facebook
            </Button>
          </div>
        </Card>
      </div>

      <div className="pt-6 grid grid-cols-3 text-center text-[11px] text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/60 flex items-center justify-center">
            <Users className="w-4 h-4 text-amber-700" />
          </div>
          Comunidade
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-emerald-700" />
          </div>
          Base de conhecimento
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 text-secondary" />
          </div>
          Marketplace
        </div>
      </div>
    </div>
  );
}
