import { Search, MapPin, Filter, Package, Beaker, Box } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Marketplace() {
  const categories = [
    { name: "Colonies", icon: Package, count: 23 },
    { name: "Honey", icon: Beaker, count: 45 },
    { name: "Equipment", icon: Box, count: 38 }
  ];

  const products = [
    {
      id: 1,
      name: "Melipona scutellaris Colony",
      price: "$280",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      seller: "Maria Santos",
      location: "São Paulo, BR",
      category: "Colony",
      status: "Available"
    },
    {
      id: 2,
      name: "Pure Jataí Honey - 500ml",
      price: "$45",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784422",
      seller: "Carlos Rivera",
      location: "Costa Rica",
      category: "Honey",
      status: "Available"
    },
    {
      id: 3,
      name: "Tetragonisca angustula Colony",
      price: "$220",
      image: "https://images.unsplash.com/photo-1568526381923-caf3fd520382",
      seller: "Ana Ferreira",
      location: "Portugal",
      category: "Colony",
      status: "Reserved"
    },
    {
      id: 4,
      name: "Premium Propolis Extract",
      price: "$35",
      image: "https://images.unsplash.com/photo-1600255586040-8d90c4c6bb25",
      seller: "Pedro Oliveira",
      location: "Bahia, BR",
      category: "Product",
      status: "Available"
    },
    {
      id: 5,
      name: "Wooden Hive Box - Traditional",
      price: "$95",
      image: "https://images.unsplash.com/photo-1606318431003-57dad4f2332f",
      seller: "Luis Martinez",
      location: "Mexico",
      category: "Equipment",
      status: "Available"
    },
    {
      id: 6,
      name: "Mandaçaia Honey - 1L",
      price: "$65",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc",
      seller: "Sofia Costa",
      location: "Rio, BR",
      category: "Honey",
      status: "Available"
    },
    {
      id: 7,
      name: "Complete Starter Kit",
      price: "$180",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      seller: "Marco Silva",
      location: "São Paulo, BR",
      category: "Equipment",
      status: "Available"
    },
    {
      id: 8,
      name: "Melipona fasciculata Colony",
      price: "$300",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94",
      seller: "Elena Rodriguez",
      location: "Venezuela",
      category: "Colony",
      status: "Available"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Search and Filter */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10 bg-card border-border"
          />
        </div>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button variant="default" size="sm" className="whitespace-nowrap">
          All Items
        </Button>
        {categories.map((cat) => (
          <Button key={cat.name} variant="outline" size="sm" className="whitespace-nowrap gap-2">
            <cat.icon className="w-3 h-3" />
            {cat.name}
            <Badge variant="secondary" className="ml-1">{cat.count}</Badge>
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.status === "Reserved" && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-secondary">Reserved</Badge>
                </div>
              )}
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm mb-1 line-clamp-2 min-h-[2.5rem]">{product.name}</h4>
              <p className="text-primary font-semibold mb-2">{product.price}</p>
              <div className="flex items-center gap-1 text-muted-foreground mb-1">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{product.location}</span>
              </div>
              <p className="text-xs text-muted-foreground">by {product.seller}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <Button variant="outline" className="w-full">
        Load More Products
      </Button>
    </div>
  );
}
