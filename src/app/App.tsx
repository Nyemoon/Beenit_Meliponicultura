import { useState } from "react";
import { Home, BookOpen, ShoppingBag, MessageCircle, User, Hexagon } from "lucide-react";
import { Feed } from "./components/Feed";
import { KnowledgeBase } from "./components/KnowledgeBase";
import { Marketplace } from "./components/Marketplace";
import { Messages } from "./components/Messages";
import { Profile } from "./components/Profile";

type Tab = "feed" | "knowledge" | "marketplace" | "messages" | "profile";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("feed");

  const tabs = [
    { id: "feed" as Tab, label: "Feed", icon: Home },
    { id: "knowledge" as Tab, label: "Library", icon: BookOpen },
    { id: "marketplace" as Tab, label: "Market", icon: ShoppingBag },
    { id: "messages" as Tab, label: "Messages", icon: MessageCircle },
    { id: "profile" as Tab, label: "Profile", icon: User }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "feed":
        return <Feed />;
      case "knowledge":
        return <KnowledgeBase />;
      case "marketplace":
        return <Marketplace />;
      case "messages":
        return <Messages />;
      case "profile":
        return <Profile />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Hexagon className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <h1 className="text-xl">Beenit</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          {renderContent()}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg max-w-md mx-auto">
        <div className="grid grid-cols-5 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
