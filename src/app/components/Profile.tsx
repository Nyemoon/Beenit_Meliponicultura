import { MapPin, Package, FileText, Settings, Edit, TrendingUp, Hexagon } from "lucide-react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Profile() {
  const userStats = [
    { label: "Posts", value: 24 },
    { label: "Followers", value: 342 },
    { label: "Following", value: 178 }
  ];

  const apiaryData = [
    { species: "Melipona scutellaris", count: 3, status: "Healthy" },
    { species: "Tetragonisca angustula", count: 5, status: "Healthy" },
    { species: "Melipona fasciculata", count: 2, status: "Monitoring" }
  ];

  const myListings = [
    {
      id: 1,
      name: "Jataí Honey - 500ml",
      price: "$45",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784422",
      status: "Active",
      views: 234
    },
    {
      id: 2,
      name: "Propolis Extract",
      price: "$35",
      image: "https://images.unsplash.com/photo-1600255586040-8d90c4c6bb25",
      status: "Sold",
      views: 189
    },
    {
      id: 3,
      name: "Wooden Hive Box",
      price: "$95",
      image: "https://images.unsplash.com/photo-1606318431003-57dad4f2332f",
      status: "Active",
      views: 156
    }
  ];

  const recentPosts = [
    {
      id: 1,
      content: "Just harvested 2kg of pure Meliponini honey from my Melipona scutellaris colony!",
      likes: 24,
      comments: 8,
      time: "2 hours ago"
    },
    {
      id: 2,
      content: "My first colony split was successful! 🎉",
      likes: 67,
      comments: 15,
      time: "1 day ago"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h2>João da Silva</h2>
              <div className="flex items-center gap-1 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">São Paulo, Brazil</span>
              </div>
              <Badge className="mt-2 bg-accent">Verified Keeper</Badge>
            </div>
          </div>
          <Button variant="outline" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Passionate about native stingless bees for 5 years. Specializing in Melipona species. Always happy to share knowledge with fellow beekeepers! 🐝
        </p>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          {userStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-semibold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Apiary Status */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Hexagon className="w-5 h-5 text-primary" />
            <h3>My Apiary</h3>
          </div>
          <Button variant="ghost" size="sm" className="text-primary">
            View Details
          </Button>
        </div>

        <div className="space-y-3">
          {apiaryData.map((colony, index) => (
            <div key={index} className="p-3 bg-muted rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-sm">{colony.species}</p>
                  <p className="text-xs text-muted-foreground">{colony.count} colonies</p>
                </div>
                <Badge 
                  variant={colony.status === "Healthy" ? "default" : "secondary"}
                  className={colony.status === "Healthy" ? "bg-accent" : ""}
                >
                  {colony.status}
                </Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Production</span>
                  <span>{colony.status === "Healthy" ? "85%" : "60%"}</span>
                </div>
                <Progress 
                  value={colony.status === "Healthy" ? 85 : 60} 
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-primary/10 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm">Total colonies: 10</span>
          </div>
          <span className="text-sm font-medium text-primary">+2 this month</span>
        </div>
      </Card>

      {/* My Listings */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-secondary" />
            <h3>My Listings</h3>
          </div>
          <Button variant="ghost" size="sm" className="text-primary">
            + Add New
          </Button>
        </div>

        <div className="space-y-2">
          {myListings.map((listing) => (
            <div key={listing.id} className="flex gap-3 p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
              <img
                src={listing.image}
                alt={listing.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-1">{listing.name}</h4>
                    <p className="text-primary font-semibold text-sm">{listing.price}</p>
                  </div>
                  <Badge 
                    variant={listing.status === "Active" ? "default" : "secondary"}
                    className={listing.status === "Active" ? "bg-accent" : ""}
                  >
                    {listing.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{listing.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Posts */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            <h3>Recent Posts</h3>
          </div>
        </div>

        <div className="space-y-3">
          {recentPosts.map((post) => (
            <div key={post.id} className="p-3 bg-muted rounded-lg">
              <p className="text-sm mb-2">{post.content}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
                <span>{post.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Settings Button */}
      <Button variant="outline" className="w-full gap-2">
        <Settings className="w-4 h-4" />
        Account Settings
      </Button>
    </div>
  );
}
