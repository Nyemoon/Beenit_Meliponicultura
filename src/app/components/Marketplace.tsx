
import { useMemo, useState } from "react";
import { Search, MapPin, Filter, Package, Beaker, Box, Star, ShoppingCart, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const marketplaceImage1 = new URL("../../images/WhatsApp Image 2026-03-21 at 18.23.17.jpeg", import.meta.url).href;
const marketplaceImage2 = new URL("../../images/WhatsApp Image 2026-03-21 at 18.28.46.jpeg", import.meta.url).href;
const marketplaceImage3 = new URL("../../images/WhatsApp Image 2026-03-21 at 18.24.57.jpeg", import.meta.url).href;

type Category = {
  name: string;
  icon: typeof Package;
  count: number;
};

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  seller: string;
  location: string;
  rating: number;
  status: string;
  inCart?: boolean;
};

const categories: Category[] = [
  { name: "Enxames", icon: Package, count: 23 },
  { name: "Produtos", icon: Beaker, count: 45 },
  { name: "Equipamentos", icon: Box, count: 38 }
];

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Colônia Uruçu Nordestina (M. scutellaris)",
    category: "Enxames",
    price: "R$ 280,00",
    image: marketplaceImage1,
    seller: "Maria Santos",
    location: "São Paulo, SP",
    rating: 4.8,
    status: "Disponível"
  },
  {
    id: 2,
    name: "Mel de Jataí Puro - 500ml",
    category: "Produtos",
    price: "R$ 45,00",
    image: marketplaceImage2,
    seller: "Carlos Rivera",
    location: "Curitiba, PR",
    rating: 4.9,
    status: "Disponível"
  },
  {
    id: 3,
    name: "Colônia de Jataí em Caixa INPA",
    category: "Enxames",
    price: "R$ 220,00",
    image: marketplaceImage3,
    seller: "Ana Ferreira",
    location: "Belo Horizonte, MG",
    rating: 4.7,
    status: "Reservado"
  }
];

export function Marketplace() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [cartItems, setCartItems] = useState(0);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = selectedCategory === "Tudo" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.seller.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [products, search, selectedCategory]
  );

  const handleAddToCart = (productId: number) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === productId ? { ...product, inCart: true } : product
      )
    );
    setCartItems((count) => count + 1);
  };

  return (
    <div className="max-w-md mx-auto space-y-6 pb-20 bg-background min-h-screen p-4">
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-2xl font-black text-foreground tracking-tight">Mercado</h2>
            <p className="text-sm text-muted-foreground">Encontre colônias, mel e equipamentos com ofertas locais.</p>
          </div>
          <Button variant="ghost" size="icon" className="relative text-muted-foreground">
            <ShoppingCart className="w-6 h-6" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white border-2 border-card">
                {cartItems}
              </span>
            )}
          </Button>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-amber-600 transition-colors" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="O que suas abelhas precisam?"
              className="pl-10 h-12 bg-input-background border-none shadow-sm rounded-2xl focus-visible:ring-2 focus-visible:ring-amber-500/20"
            />
          </div>
          <Button variant="outline" className="h-12 w-12 rounded-2xl border-none bg-card shadow-sm text-muted-foreground hover:text-amber-600">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <section>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
          <Button
            className={`rounded-full px-5 h-10 text-xs font-bold transition ${selectedCategory === "Tudo" ? "bg-amber-500 text-white" : "bg-card text-muted-foreground"}`}
            onClick={() => setSelectedCategory("Tudo")}
          >
            Tudo
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={selectedCategory === cat.name ? "secondary" : "outline"}
              className="rounded-full border-none shadow-sm px-4 h-10 text-xs font-bold gap-2 whitespace-nowrap hover:bg-emerald-50 hover:text-emerald-900 transition-all"
              onClick={() => setSelectedCategory(cat.name)}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.name}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-card rounded-[2rem] cursor-pointer"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <Badge className="bg-card/90 backdrop-blur-md text-foreground border-none text-[10px] font-black uppercase shadow-sm">
                  {product.status}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                <span className="text-[10px] font-black text-foreground">{product.rating}</span>
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h4 className="font-bold text-foreground text-xs leading-tight line-clamp-2 min-h-[2rem]">
                {product.name}
              </h4>

              <p className="text-amber-600 font-black text-base tracking-tight">{product.price}</p>

              <div className="pt-2 border-t border-border/40 space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter truncate">{product.location}</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium truncate">
                  por <span className="text-foreground font-bold">{product.seller}</span>
                </p>
              </div>

              <Button
                onClick={() => handleAddToCart(product.id)}
                className={`w-full rounded-2xl py-3 text-xs font-black transition ${product.inCart ? "bg-muted text-muted-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}`}
              >
                {product.inCart ? "Adicionado" : "Adicionar"}
              </Button>
            </div>
          </Card>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-2 rounded-[2rem] bg-card border border-border/40 p-6 text-center text-muted-foreground">
            Nenhum produto encontrado. Ajuste a busca ou selecione outra categoria.
          </div>
        )}
      </section>

      <Button variant="ghost" className="w-full py-8 text-muted-foreground font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
        Carregar mais produtos
      </Button>
    </div>
  );
}

