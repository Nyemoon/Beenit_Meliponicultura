import { Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function Feed() {
  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      avatar: "MS",
      time: "2 hours ago",
      content: "Just harvested 2kg of pure Meliponini honey from my Melipona scutellaris colony! The flavor is incredible - floral with hints of citrus. These native bees are such gentle workers. 🍯",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784422",
      likes: 24,
      comments: 8,
      location: "São Paulo, Brazil"
    },
    {
      id: 2,
      author: "Carlos Rivera",
      avatar: "CR",
      time: "5 hours ago",
      content: "New study published on Tetragonisca angustula foraging patterns! They prefer native flowering plants over exotic species. Link to PDF in Knowledge Base.",
      likes: 41,
      comments: 12,
      location: "Costa Rica"
    },
    {
      id: 3,
      author: "Ana Ferreira",
      avatar: "AF",
      time: "1 day ago",
      content: "My first colony split was successful! 🎉 The new hive is already showing great activity. Thanks to everyone who gave me advice in the community.",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      likes: 67,
      comments: 15,
      location: "Portugal"
    },
    {
      id: 4,
      author: "Pedro Oliveira",
      avatar: "PO",
      time: "2 days ago",
      content: "Warning: Phorid fly infestation detected in my area. Check your hives regularly. Sharing prevention tips in the Knowledge Base.",
      likes: 103,
      comments: 28,
      location: "Bahia, Brazil"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Trending Topics */}
      <Card className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-sm">Trending in Meliponiculture</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-white rounded-full text-xs">#NativeBees</span>
          <span className="px-3 py-1 bg-white rounded-full text-xs">#HoneyHarvest</span>
          <span className="px-3 py-1 bg-white rounded-full text-xs">#ColonySplit</span>
        </div>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {post.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.location} • {post.time}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-3 text-sm leading-relaxed">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}

            <div className="flex items-center justify-between pt-3 border-t">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                <Heart className="w-4 h-4" />
                <span className="text-xs">{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{post.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
