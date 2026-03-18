import { Search, FileText, Download, Eye, BookOpen, Microscope, Leaf, Bug } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function KnowledgeBase() {
  const categories = [
    { name: "Species Guide", icon: Bug, count: 45, color: "bg-accent" },
    { name: "Management", icon: Leaf, count: 38, color: "bg-primary" },
    { name: "Research", icon: Microscope, count: 62, color: "bg-secondary" },
    { name: "Beginner Guide", icon: BookOpen, count: 28, color: "bg-accent" }
  ];

  const documents = [
    {
      id: 1,
      title: "Complete Guide to Melipona scutellaris",
      author: "Dr. Silva Costa",
      category: "Species Guide",
      downloads: 1243,
      views: 3521,
      pages: 42,
      date: "Mar 2026",
      description: "Comprehensive guide covering biology, behavior, and management of Uruçu bee species."
    },
    {
      id: 2,
      title: "Stingless Bee Colony Division Techniques",
      author: "Maria Santos",
      category: "Management",
      downloads: 892,
      views: 2104,
      pages: 18,
      date: "Feb 2026",
      description: "Step-by-step methods for safe and successful colony splitting."
    },
    {
      id: 3,
      title: "Native Bee Foraging Patterns in Urban Areas",
      author: "Carlos Rivera, PhD",
      category: "Research",
      downloads: 567,
      views: 1456,
      pages: 28,
      date: "Jan 2026",
      description: "Research on Tetragonisca angustula foraging preferences in city environments."
    },
    {
      id: 4,
      title: "Propolis Extraction and Processing",
      author: "Ana Ferreira",
      category: "Management",
      downloads: 723,
      views: 1889,
      pages: 15,
      date: "Mar 2026",
      description: "Best practices for harvesting and processing stingless bee propolis."
    },
    {
      id: 5,
      title: "Hive Design for Tropical Climates",
      author: "Pedro Oliveira",
      category: "Beginner Guide",
      downloads: 1034,
      views: 2876,
      pages: 22,
      date: "Feb 2026",
      description: "Optimal hive construction for native bee species in warm regions."
    },
    {
      id: 6,
      title: "Identifying Common Pests and Diseases",
      author: "Dr. Julia Mendes",
      category: "Management",
      downloads: 956,
      views: 2543,
      pages: 35,
      date: "Jan 2026",
      description: "Visual guide to health problems in stingless bee colonies with solutions."
    }
  ];

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search documents, research papers..."
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Card key={category.name} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center mb-2`}>
              <category.icon className="w-5 h-5 text-white" />
            </div>
            <p className="font-medium text-sm mb-1">{category.name}</p>
            <p className="text-xs text-muted-foreground">{category.count} documents</p>
          </Card>
        ))}
      </div>

      {/* Recent Documents */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3>Recent Publications</h3>
          <Button variant="ghost" size="sm" className="text-primary">View All</Button>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <Card key={doc.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3">
                <div className="w-12 h-16 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium mb-1 text-sm line-clamp-1">{doc.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{doc.description}</p>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{doc.category}</Badge>
                    <span className="text-xs text-muted-foreground">{doc.pages} pages</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{doc.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">by {doc.author}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Eye className="w-3 h-3" />
                        <span className="text-xs">{doc.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Download className="w-3 h-3" />
                        <span className="text-xs">{doc.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
