import { MapPin, Package, FileText, Settings, Edit, TrendingUp, Hexagon, MessageSquare, Heart, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Profile() {
  // ... (seus arrays de dados permanecem os mesmos, adicionei apenas o AvatarImage)

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20 bg-slate-50/50 p-4">
      
      {/* 1. PROFILE HEADER - Foco em autoridade */}
      <Card className="p-6 border-none shadow-sm bg-white overflow-hidden relative">
        {/* Detalhe decorativo sutil (favo de mel no fundo) */}
        <Hexagon className="absolute -top-4 -right-4 w-24 h-24 text-amber-50/50 -rotate-12" />
        
        <div className="relative flex items-start justify-between">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-amber-100 shadow-md">
                <AvatarImage src="/src/images/WhatsApp Image 2026-03-21 at 15.24.19.jpeg" />
                <AvatarFallback className="bg-amber-500 text-white text-2xl font-bold">JS</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white" title="Online" />
            </div>
            
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-800">João da Silva</h2>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-medium">São Paulo, Brazil</span>
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
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
            <Edit className="w-4 h-4 text-slate-400" />
          </Button>
        </div>

        <p className="mt-6 text-sm text-slate-600 leading-relaxed italic border-l-2 border-amber-200 pl-3">
          "Criador por paixão há 5 anos. Focado em espécies Melipona. Acredito que o futuro está na preservação das nossas nativas! 🐝"
        </p>

        <div className="grid grid-cols-3 gap-2 mt-6 py-4 bg-slate-50 rounded-xl">
          {[
            { label: "Publicações", value: 24 },
            { label: "Seguidores", value: "342" },
            { label: "Seguindo", value: 178 }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">{stat.label}</p>
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
            <h3 className="font-bold text-slate-800">Meu Meliponário</h3>
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
                  <p className="font-bold text-slate-700 text-sm">{colony.species}</p>
                  <p className="text-xs text-slate-400 font-medium">{colony.count} colônias ativas</p>
                </div>
                <Badge className={`${colony.status === 'Saudável' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} border-none shadow-none capitalize`}>
                  {colony.status}
                </Badge>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>Nível de Produção</span>
                  <span>{colony.val}%</span>
                </div>
                <Progress value={colony.val} className={`h-1.5 bg-slate-100`}>
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
            <div className="p-1.5 bg-slate-800 rounded-lg text-white">
              <Package className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-800">Meus Anúncios</h3>
          </div>
          <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full h-8 gap-1">
            <Plus className="w-3.5 h-3.5" /> Novo
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "Mel de Jataí 240ml", price: "R$ 85,00", img: "/src/images/WhatsApp Image 2026-03-21 at 18.22.24.jpeg", tag: "Ativo" },
            { name: "Caixa INPA Padrão", price: "R$ 45,00", img: "/src/images/WhatsApp Image 2026-03-21 at 18.26.34.jpeg", tag: "Esgotado" }
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden border-none shadow-sm group cursor-pointer">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-white/90 text-slate-800 backdrop-blur-sm border-none shadow-sm">{item.tag}</Badge>
                </div>
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-slate-700 line-clamp-1">{item.name}</h4>
                <p className="text-amber-600 font-extrabold text-sm mt-1">{item.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Botões de Ação Final */}
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="border-slate-200 text-slate-600 font-bold py-6 rounded-2xl hover:bg-slate-50">
          <Settings className="w-4 h-4 mr-2" /> Configurações
        </Button>
        <Button className="bg-slate-800 text-white font-bold py-6 rounded-2xl hover:bg-slate-900 shadow-lg shadow-slate-200">
          Ver Perfil Público
        </Button>
      </div>

    </div>
  );
}