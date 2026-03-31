// Adicionei o 'Plus' aqui no final da lista
import { Heart, MessageCircle, Share2, TrendingUp, MoreHorizontal, MapPin, Clock, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Feed() {
  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      avatar: "MS",
      time: "2h atrás",
      content: "Acabei de colher 2kg de mel puro de Uruçu Nordestina! O sabor é incrível - floral com notas cítricas. Essas abelhas nativas são trabalhadoras tão gentis. 🍯",
      image: "../../images/WhatsApp Image 2026-03-21 at 18.45.10.jpeg",
      likes: 24,
      comments: 8,
      location: "São Paulo, SP"
    },
    {
      id: 2,
      author: "Carlos Rivera",
      avatar: "CR",
      time: "5h atrás",
      content: "Novo estudo publicado sobre os padrões de forrageamento da Jataí! Elas preferem plantas nativas a espécies exóticas. Link para o PDF na nossa Biblioteca.",
      likes: 41,
      comments: 12,
      location: "Curitiba, PR"
    },
    {
      id: 3,
      author: "Pedro Oliveira",
      avatar: "PO",
      time: "2 dias atrás",
      content: "Atenção: Infestação de forídeos detectada na minha região (Bahia). Verifiquem suas caixas regularmente. Compartilhando dicas de prevenção na aba de Manejo.",
      likes: 103,
      comments: 28,
      location: "Salvador, BA"
    }
  ];

  return (
    <div className="max-w-md mx-auto space-y-6 pb-24 bg-background min-h-screen p-4">
      
      {/* 1. TRENDING TOPICS - Visual de Painel de Controle */}
      <Card className="p-5 bg-card border-none shadow-sm rounded-[2rem] overflow-hidden relative">
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <TrendingUp className="w-16 h-16 text-amber-600" />
        </div>
        
        <div className="relative flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-500 rounded-xl">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-black text-foreground tracking-tight">Bombando na MelipoRede</h3>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            {["#AbelhasNativas", "#ColheitaMel", "#DivisaoDeEnxame", "#DicasDeManejo"].map((tag) => (
              <Badge key={tag} className="bg-muted hover:bg-amber-100 text-muted-foreground hover:text-amber-700 border-none px-3 py-1 text-[10px] font-bold rounded-full transition-colors cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>

      {/* 2. FEED DE POSTS */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-sm bg-card rounded-[2.5rem]">
            <div className="p-5">
              
              {/* Header do Post */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-11 h-11 border border-amber-100">
                    <AvatarFallback className="bg-amber-500 text-white font-black text-sm">
                      {post.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-black text-foreground text-sm tracking-tight">{post.author}</p>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                      <MapPin className="w-3 h-3 text-amber-500" /> {post.location} 
                      <span className="mx-1">•</span> 
                      <Clock className="w-3 h-3" /> {post.time}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>

              {/* Conteúdo do Texto */}
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed font-medium">
                {post.content}
              </p>

              {/* Imagem do Post (com proporção de rede social moderna) */}
              {post.image && (
                <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-4 bg-muted">
                  <img
                    src={post.image}
                    alt="Conteúdo do Post"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Ações do Post */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-emerald-900 hover:bg-emerald-50 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-xs font-black">{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full gap-2 text-muted-foreground hover:text-emerald-900 hover:bg-emerald-50 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-black">{post.comments}</span>
                  </Button>
                </div>
                
                <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground hover:text-emerald-900 hover:bg-emerald-50">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* 3. BOTÃO DE POSTAGEM RÁPIDA (FAB) */}
      <Button className="fixed bottom-24 right-6 w-14 h-14 rounded-2xl bg-amber-500 hover:bg-emerald-50 hover:text-emerald-900 text-white shadow-xl shadow-amber-200 transition-all hover:scale-110 active:scale-95">
        <Plus className="w-6 h-6" />
      </Button>

    </div>
  );
}