import { Search, MoreVertical } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Messages() {
  const conversations = [
    {
      id: 1,
      name: "Maria Santos",
      avatar: "MS",
      lastMessage: "The colony is ready for pickup! Let me know when you can come.",
      time: "10m ago",
      unread: 2,
      online: true,
      type: "marketplace"
    },
    {
      id: 2,
      name: "Carlos Rivera",
      avatar: "CR",
      lastMessage: "Thanks for the advice on the foraging patterns!",
      time: "1h ago",
      unread: 0,
      online: true,
      type: "community"
    },
    {
      id: 3,
      name: "Ana Ferreira",
      avatar: "AF",
      lastMessage: "Is the propolis extract still available?",
      time: "3h ago",
      unread: 1,
      online: false,
      type: "marketplace"
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      avatar: "PO",
      lastMessage: "I can ship the hive to you next week",
      time: "5h ago",
      unread: 0,
      online: false,
      type: "marketplace"
    },
    {
      id: 5,
      name: "Luis Martinez",
      avatar: "LM",
      lastMessage: "That's a beautiful Melipona scutellaris colony!",
      time: "1d ago",
      unread: 0,
      online: false,
      type: "community"
    },
    {
      id: 6,
      name: "Sofia Costa",
      avatar: "SC",
      lastMessage: "What's your honey extraction method?",
      time: "1d ago",
      unread: 0,
      online: true,
      type: "community"
    },
    {
      id: 7,
      name: "Marco Silva",
      avatar: "MS",
      lastMessage: "The starter kit includes everything you need!",
      time: "2d ago",
      unread: 0,
      online: false,
      type: "marketplace"
    },
    {
      id: 8,
      name: "Elena Rodriguez",
      avatar: "ER",
      lastMessage: "I'd love to see photos of your apiary setup",
      time: "3d ago",
      unread: 0,
      online: false,
      type: "community"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search conversations..."
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <Button variant="default" size="sm">
          All Messages
        </Button>
        <Button variant="outline" size="sm">
          Marketplace
        </Button>
        <Button variant="outline" size="sm">
          Community
        </Button>
      </div>

      {/* Conversations List */}
      <div className="space-y-2">
        {conversations.map((conv) => (
          <Card 
            key={conv.id} 
            className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${conv.unread > 0 ? 'bg-primary/5' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div className="relative">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {conv.avatar}
                  </AvatarFallback>
                </Avatar>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-card" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-sm">{conv.name}</h4>
                  <div className="flex items-center gap-2">
                    {conv.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground h-5 min-w-[1.25rem] px-1.5 text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {conv.type === "marketplace" && (
                    <Badge variant="secondary" className="text-xs">
                      Marketplace
                    </Badge>
                  )}
                  <p className="text-sm text-muted-foreground line-clamp-1 flex-1">
                    {conv.lastMessage}
                  </p>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="flex-shrink-0 w-8 h-8">
                <MoreVertical className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
