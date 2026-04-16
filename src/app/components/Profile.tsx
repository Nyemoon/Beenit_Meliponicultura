import { MapPin, Package, FileText, Settings, Edit, TrendingUp, Hexagon, MessageSquare, Heart, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const profileAvatar = new URL("../../images/WhatsApp Image 2026-03-21 at 15.24.19.jpeg", import.meta.url).href;
const productPhoto1 = new URL("../../images/WhatsApp Image 2026-03-21 at 18.22.24.jpeg", import.meta.url).href;
const productPhoto2 = new URL("../../images/WhatsApp Image 2026-03-21 at 18.26.34.jpeg", import.meta.url).href;

export function Profile() {
  // ... (seus arrays de dados permanecem os mesmos, adicionei apenas o AvatarImage)

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20 bg-background p-4">
      
      {/* 1. PROFILE HEADER - Foco em autoridade */}
      <Card className="p-6 border-none shadow-sm bg-card overflow-hidden relative">
        {/* Detalhe decorativo sutil (favo de mel no fundo) */}
        <Hexagon className="absolute -top-4 -right-4 w-24 h-24 text-amber-50/50 -rotate-12" />
        
        <div className="relative flex items-start justify-between">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-amber-100 shadow-md">
                <AvatarImage src={profileAvatar} />
                <AvatarFallback className="bg-amber-500 text-white text-2xl font-bold">JS</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white" title="Online" />
            </div>
            
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-foreground">João da Silva</h2>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-muted-foreground mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-medium">São Paulo, Brasil</span>
              </div>
              <div className="flex gap-2 mt-3">
                <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none px-3">
                  Especialista Jataí
                </Badge>
                <Badge className="bg-green-100 text-green-700 border-none px-3">
                  Verificado
                </Badge>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted">
            <Edit className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground leading-relaxed italic border-l-2 border-amber-200 pl-3">
          "Criador por paixão há 5 anos. Focado em espécies Melipona. Acredito que o futuro está na preservação das nossas nativas! 🐝"
        </p>

        <div className="grid grid-cols-3 gap-2 mt-6 py-4 bg-muted rounded-xl">
          {[
            { label: "Publicações", value: 24 },
            { label: "Seguidores", value: "342" },
            { label: "Seguindo", value: 178 }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* 2. MEU MELIPONÁRIO - Visualização de Saúde */}
      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-500 rounded-lg text-white">
              <Hexagon className="w-4 h-4 fill-current" />
            </div>
            <h3 className="font-bold text-foreground">Meu Meliponário</h3>
          </div>
          <Button variant="link" size="sm" className="text-amber-600 font-semibold p-0">Ver Detalhes</Button>
        </div>

        <div className="grid gap-3">
          {[
            { species: "Mandaçaia (M. scutellaris)", count: 3, status: "Saudável", color: "bg-green-500", val: 85 },
            { species: "Jataí (T. angustula)", count: 5, status: "Saudável", color: "bg-green-500", val: 92 },
            { species: "Uruçu (M. fasciculata)", count: 2, status: "Atenção", color: "bg-orange-400", val: 45 }
          ].map((colony, index) => (
            <Card key={index} className="p-4 border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="space-y-0.5">
                  <p className="font-bold text-foreground text-sm">{colony.species}</p>
                  <p className="text-xs text-muted-foreground font-medium">{colony.count} colônias ativas</p>
                </div>
                <Badge className={`${colony.status === 'Saudável' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} border-none shadow-none capitalize`}>
                  {colony.status}
                </Badge>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold text-muted-foreground">
                  <span>Nível de Produção</span>
                  <span>{colony.val}%</span>
                </div>
                <Progress value={colony.val} className={`h-1.5 bg-muted`}>
                   <div className={`${colony.color} h-full transition-all`} style={{ width: `${colony.val}%` }} />
                </Progress>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. MARKETPLACE - Visual de Loja Profissional */}
      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-secondary rounded-lg text-secondary-foreground">
              <Package className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-foreground">Meus Anúncios</h3>
          </div>
          <Button size="sm" className="bg-amber-500 hover:bg-emerald-50 hover:text-emerald-900 text-white rounded-full h-8 gap-1">
            <Plus className="w-3.5 h-3.5" /> Novo
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Mel de Jataí 240ml", price: "R$ 85,00", img: productPhoto1, tag: "Ativo" },
            { name: "Caixa INPA Padrão", price: "R$ 45,00", img: productPhoto2, tag: "Esgotado" }
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-sm group cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-card/90 text-foreground backdrop-blur-sm border-none shadow-sm">{item.tag}</Badge>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-foreground line-clamp-1">{item.name}</h4>
                <p className="text-amber-600 font-extrabold text-sm mt-1">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Botões de Ação Final */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="border-border text-muted-foreground font-bold py-6 rounded-2xl hover:bg-emerald-50 hover:text-emerald-900">
          <Settings className="w-4 h-4 mr-2" /> Configurações
        </Button>
        <Button className="bg-secondary text-secondary-foreground font-bold py-6 rounded-2xl hover:bg-emerald-50 hover:text-emerald-900 shadow-lg shadow-amber-200">
          Ver Perfil Público
        </Button>
      </div>

    </div>
  );
}