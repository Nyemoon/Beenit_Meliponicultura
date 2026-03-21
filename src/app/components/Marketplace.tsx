import { Search, MapPin, Filter, Package, Beaker, Box, Star, ShoppingCart } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Marketplace() {
  const categories = [
    { name: "Enxames", icon: Package, count: 23 },
    { name: "Produtos", icon: Beaker, count: 45 },
    { name: "Equipamentos", icon: Box, count: 38 }
  ];

  const products = [
    {
      id: 1,
      name: "Colônia Uruçu Nordestina (M. scutellaris)",
      price: "R$ 280,00",
      image: "/src/images/WhatsApp Image 2026-03-21 at 18.23.17.jpeg",
      seller: "Maria Santos",
      location: "São Paulo, SP",
      rating: 4.8,
      status: "Disponível"
    },
    {
      id: 2,
      name: "Mel de Jataí Puro - 500ml",
      price: "R$ 45,00",
      image: "/src/images/WhatsApp Image 2026-03-21 at 18.28.46.jpeg",
      seller: "Carlos Rivera",
      location: "Curitiba, PR",
      rating: 4.9,
      status: "Disponível"
    },
    {
      id: 3,
      name: "Colônia de Jataí em Caixa INPA",
      price: "R$ 220,00",
      image: "../../images/WhatsApp Image 2026-03-21 at 18.24.57.jpeg",
      seller: "Ana Ferreira",
      location: "Belo Horizonte, MG",
      rating: 4.7,
      status: "Reservado"
    }
    // ... mantendo a lógica para os demais
  ];

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20 bg-slate-50/30 min-h-screen p-4">
      
      {/* HEADER & BUSCA */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Mercado</h2>
          <Button variant="ghost" size="icon" className="relative text-slate-600">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full border-2 border-white" />
          </Button>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
            <Input
              placeholder="O que suas abelhas precisam?"
              className="pl-10 h-12 bg-white border-none shadow-sm rounded-2xl focus-visible:ring-2 focus-visible:ring-amber-500/20"
            />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-2xl border-none bg-white shadow-sm text-slate-600 hover:text-amber-600">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* CATEGORIAS COM SCROLL HORIZONTAL */}
      <section>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
          <Button className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 h-10 text-xs font-bold">
            Tudo
          </Button>
          {categories.map((cat) => (
            <Button 
              key={cat.name} 
              variant="outline" 
              className="rounded-full border-none bg-white shadow-sm text-slate-600 px-4 h-10 text-xs font-bold gap-2 whitespace-nowrap hover:bg-amber-50 hover:text-amber-700 transition-all"
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.name}
              <span className="ml-1 text-[10px] opacity-40 font-black">{cat.count}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* PRODUTOS EM GRID */}
      <section className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-[2rem] cursor-pointer"
          >
            {/* CONTAINER DA IMAGEM */}
            <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* STATUS & RATING OVERLAY */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.status === "Reservado" ? (
                  <Badge className="bg-slate-900/80 backdrop-blur-md text-white border-none text-[10px] font-black uppercase">
                    Reservado
                  </Badge>
                ) : (
                  <Badge className="bg-white/90 backdrop-blur-md text-slate-800 border-none text-[10px] font-black uppercase shadow-sm">
                    Novo
                  </Badge>
                )}
              </div>
              
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                <span className="text-[10px] font-black text-slate-800">{product.rating}</span>
              </div>
            </div>

            {/* CONTEÚDO DO CARD */}
            <div className="p-4 space-y-2">
              <h4 className="font-bold text-slate-800 text-xs leading-tight line-clamp-2 min-h-[2rem]">
                {product.name}
              </h4>
              
              <p className="text-amber-600 font-black text-base tracking-tight">
                {product.price}
              </p>

              <div className="pt-2 border-t border-slate-50 space-y-1">
                <div className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter truncate">
                    {product.location}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium truncate">
                  por <span className="text-slate-600 font-bold">{product.seller}</span>
                </p>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* PAGINAÇÃO SUTIL */}
      <Button variant="ghost" className="w-full py-8 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
        Carregar mais produtos
      </Button>
    </div>
  );
}