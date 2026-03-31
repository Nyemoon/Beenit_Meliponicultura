import { useState } from "react";
import { Home, BookOpen, ShoppingBag, MessageSquare, User, Bell, Search } from "lucide-react";
import { Feed } from "./components/Feed";
import { KnowledgeBase } from "./components/KnowledgeBase";
import { Marketplace } from "./components/Marketplace";
import { Messages } from "./components/Messages";
import { Profile } from "./components/Profile";

type Tab = "feed" | "knowledge" | "marketplace" | "messages" | "profile";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  const tabs = [
    { id: "feed" as Tab, label: "Início", icon: Home },
    { id: "knowledge" as Tab, label: "Saber", icon: BookOpen },
    { id: "marketplace" as Tab, label: "Mercado", icon: ShoppingBag },
    { id: "messages" as Tab, label: "Mensagens", icon: MessageSquare },
    { id: "profile" as Tab, label: "Perfil", icon: User }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto border-x border-border/40">
      
      {/* HEADER: Simples, Branco, Profissional */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Ícone Minimalista: Apenas o Hexágono Limpo */}
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Beenit</h1>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Search className="w-5 h-5 cursor-pointer hover:text-foreground" />
            <div className="relative cursor-pointer hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-amber-500 rounded-full border-2 border-background" />
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO: Sem padding extra aqui, deixa os componentes respirarem */}
      <main className="flex-1 overflow-y-auto pb-20 bg-background">
        {activeTab === "feed" && <Feed />}
        {activeTab === "knowledge" && <KnowledgeBase />}
        {activeTab === "marketplace" && <Marketplace />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "profile" && <Profile />}
      </main>

      {/* NAVEGAÇÃO INFERIOR: Tradicional, Estável e Elegante */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/40 max-w-md mx-auto z-50">
        <div className="grid grid-cols-5 h-[72px] px-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-1.5 transition-all relative ${
                  isActive ? "text-amber-600" : "text-muted-foreground"
                }`}
              >
                {/* Indicador de Seleção Superior Sutil */}
                {isActive && (
                  <div className="absolute top-0 w-8 h-1 bg-amber-500 rounded-b-full" />
                )}
                
                <Icon className={`w-6 h-6 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}