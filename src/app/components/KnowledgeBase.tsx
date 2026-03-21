import { Search, FileText, Download, Eye, BookOpen, Microscope, Leaf, Bug, ArrowRight, Bookmark } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function KnowledgeBase() {
  const categories = [
    { name: "Guia de Espécies", icon: Bug, count: 45, color: "bg-amber-100 text-amber-700" },
    { name: "Manejo Técnico", icon: Leaf, count: 38, color: "bg-green-100 text-green-700" },
    { name: "Pesquisas", icon: Microscope, count: 62, color: "bg-blue-100 text-blue-700" },
    { name: "Iniciantes", icon: BookOpen, count: 28, color: "bg-purple-100 text-purple-700" }
  ];

  const documents = [
    {
      id: 1,
      title: "Guia Completo: Melipona scutellaris (Uruçu Nordestina)",
      author: "Dra. Silva Costa",
      category: "Guia de Espécies",
      downloads: "1.2k",
      views: "3.5k",
      pages: 42,
      date: "Mar 2026",
      description: "Um estudo aprofundado sobre a biologia, comportamento e manejo específico para a rainha das abelhas do Nordeste."
    },
    {
      id: 2,
      title: "Técnicas de Divisão de Colônias sem Ferrão",
      author: "Maria Santos",
      category: "Manejo Técnico",
      downloads: 892,
      views: "2.1k",
      pages: 18,
      date: "Fev 2026",
      description: "Métodos passo a passo para divisões seguras, evitando ataques de forídeos e garantindo o sucesso do novo enxame."
    }
  ];

  return (
    <div className="max-w-md mx-auto space-y-8 pb-20 bg-slate-50/30 min-h-screen p-4">
      
      {/* HEADER & BUSCA - Foco em Claridade */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight text-balance">Biblioteca do Criador</h2>
          <Button variant="ghost" size="icon" className="text-slate-400">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>

        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-amber-600 transition-colors" />
          <Input
            placeholder="Pesquisar artigos, PDFs ou pesquisas..."
            className="pl-12 h-14 bg-white border-none shadow-sm rounded-2xl text-sm placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-amber-500/20"
          />
        </div>
      </section>

      {/* CATEGORIAS - Cards Coloridos e Dinâmicos */}
      <section>
        <div className="grid grid-cols-2 gap-3 px-1">
          {categories.map((category) => (
            <Card key={category.name} className="p-4 border-none shadow-sm bg-white hover:shadow-md transition-all cursor-pointer group active:scale-95">
              <div className={`w-12 h-12 rounded-2xl ${category.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <category.icon className="w-6 h-6" />
              </div>
              <p className="font-extrabold text-slate-800 text-sm leading-tight mb-1">{category.name}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{category.count} arquivos</p>
            </Card>
          ))}
        </div>
      </section>

      {/* PUBLICAÇÕES RECENTES - Estilo Lista de Artigos */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-1 border-l-4 border-amber-500 pl-3">
          <h3 className="font-black text-slate-800 tracking-tight">Publicações Recentes</h3>
          <Button variant="link" className="text-amber-600 font-bold p-0 flex items-center gap-1 text-xs">
            Ver tudo <ArrowRight className="w-3 h-3" />
          </Button>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="p-5 border-none shadow-sm bg-white hover:ring-1 ring-amber-200 transition-all cursor-pointer group">
              <div className="flex gap-4">
                {/* Visual da Capa do Documento */}
                <div className="w-16 h-20 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors relative overflow-hidden">
                  <FileText className="w-8 h-8 text-slate-400 group-hover:text-amber-600 transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 bg-amber-500/10 rounded-bl-lg" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-extrabold text-slate-800 text-sm leading-snug line-clamp-2">
                      {doc.title}
                    </h4>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 leading-relaxed mb-3 line-clamp-2 font-medium">
                    {doc.description}
                  </p>

                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="outline" className="text-[9px] font-black uppercase tracking-wider text-slate-400 border-slate-200 py-0 px-2 h-5">
                      {doc.category}
                    </Badge>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{doc.pages} pág.</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-50 mt-1">
                    <p className="text-[10px] font-bold text-slate-400">por <span className="text-slate-600 underline">{doc.author}</span></p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-slate-400">
                        <Eye className="w-3 h-3" />
                        <span className="text-[10px] font-black">{doc.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Download className="w-3 h-3" />
                        <span className="text-[10px] font-black">{doc.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* BOTÃO DE CONTRIBUIÇÃO (EXCLUSIVO) */}
      <div className="p-6 bg-slate-900 rounded-[2rem] text-center space-y-3 shadow-xl">
        <h4 className="text-white font-black text-sm uppercase tracking-widest">Quer contribuir?</h4>
        <p className="text-slate-400 text-xs px-4">Compartilhe suas pesquisas e guias com a maior rede de meliponicultores.</p>
        <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-black w-full rounded-xl py-6">
          Enviar Documento
        </Button>
      </div>
    </div>
  );
}