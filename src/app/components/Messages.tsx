
import { useMemo, useState } from "react";
import { Search, MoreVertical, MessageSquare, ShoppingBag, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Conversation = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  type: string;
};

const initialConversations: Conversation[] = [
  {
    id: 1,
    name: "Maria Santos",
    avatar: "MS",
    lastMessage: "O enxame está pronto para retirada! Me avise quando puder vir.",
    time: "10m",
    unread: 2,
    online: true,
    type: "marketplace"
  },
  {
    id: 2,
    name: "Carlos Rivera",
    avatar: "CR",
    lastMessage: "Obrigado pela dica sobre o pasto apícola!",
    time: "1h",
    unread: 0,
    online: true,
    type: "community"
  },
  {
    id: 3,
    name: "Ana Ferreira",
    avatar: "AF",
    lastMessage: "O extrato de própolis ainda está disponível?",
    time: "3h",
    unread: 1,
    online: false,
    type: "marketplace"
  }
];

const filters = ["Todas", "Marketplace", "Comunidade"];

export function Messages() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<number>(initialConversations[0]?.id ?? 0);

  const visibleConversations = useMemo(
    () =>
      conversations.filter((conv) => {
        const matchesFilter =
          activeFilter === "Todas" ||
          (activeFilter === "Marketplace" && conv.type === "marketplace") ||
          (activeFilter === "Comunidade" && conv.type === "community");
        const matchesSearch =
          conv.name.toLowerCase().includes(search.toLowerCase()) ||
          conv.lastMessage.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
      }),
    [activeFilter, conversations, search]
  );

  const activeConversation = conversations.find((conv) => conv.id === activeConversationId) || conversations[0];

  const selectConversation = (conversationId: number) => {
    setConversations((current) =>
      current.map((conv) =>
        conv.id === conversationId ? { ...conv, unread: 0 } : conv
      )
    );
    setActiveConversationId(conversationId);
  };

  return (
    <div className="max-w-md mx-auto space-y-6 pb-10 bg-background min-h-screen p-4">
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-2xl font-black text-foreground tracking-tight">Conversas</h2>
          <p className="text-sm text-muted-foreground">Filtre e abra mensagens com clientes e colaboradores.</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVertical className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>

      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-amber-500 transition-colors" />
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar criadores ou produtos..."
          className="pl-10 h-12 bg-input-background border-none shadow-sm rounded-2xl focus-visible:ring-2 focus-visible:ring-amber-500/20"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "secondary" : "outline"}
            className="rounded-full border-none px-5 h-9 text-xs font-bold gap-2"
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="space-y-3">
        {visibleConversations.map((conv) => {
          const isActive = conv.id === activeConversationId;
          return (
            <Card
              key={conv.id}
              onClick={() => selectConversation(conv.id)}
              className={`p-4 cursor-pointer border-none shadow-sm transition-all relative overflow-hidden group ${
                isActive ? "ring-2 ring-amber-500 bg-card" : conv.unread > 0 ? "bg-card ring-1 ring-amber-100" : "bg-card/90 opacity-90"
              }`}
            >
              {conv.unread > 0 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="w-12 h-12 border border-border shadow-sm">
                    <AvatarFallback className="bg-amber-100 text-amber-700 font-bold">{conv.avatar}</AvatarFallback>
                  </Avatar>
                  {conv.online && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className={`text-sm tracking-tight ${conv.unread > 0 ? "font-black text-foreground" : "font-bold text-foreground/80"}`}>{conv.name}</h4>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{conv.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm truncate flex-1 ${conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <Badge className="bg-amber-500 text-white border-none h-5 min-w-[1.25rem] px-1.5 text-[10px] font-black rounded-full">{conv.unread}</Badge>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    {conv.type === "marketplace" ? (
                      <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        <ShoppingBag className="w-2.5 h-2.5" /> Negociação
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                        <Users className="w-2.5 h-2.5" /> Comunidade
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {activeConversation && (
        <Card className="p-5 bg-card border-none shadow-sm rounded-[2rem]">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="w-14 h-14 border border-border shadow-sm">
                <AvatarFallback className="bg-amber-100 text-amber-700 font-bold">{activeConversation.avatar}</AvatarFallback>
              </Avatar>
              {activeConversation.online && <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="font-black text-foreground">{activeConversation.name}</p>
                  <p className="text-[11px] text-muted-foreground">{activeConversation.type === "marketplace" ? "Negociação ativa" : "Mensagem da comunidade"}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{activeConversation.lastMessage}</p>
              <Button className="w-full rounded-2xl bg-secondary text-secondary-foreground py-4 font-black hover:bg-secondary/90 transition">
                Responder agora
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl bg-secondary text-secondary-foreground shadow-xl shadow-amber-200 hover:scale-105 transition-transform">
        <MessageSquare className="w-6 h-6" />
      </Button>
    </div>
  );
}

