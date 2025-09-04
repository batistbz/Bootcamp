import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye, Clock } from "lucide-react";

const materials = [
  {
    id: 1,
    title: "Algoritmos e Estruturas de Dados",
    description:
      "Conceitos fundamentais de algoritmos, complexidade e estruturas de dados básicas.",
    category: "Programação",
    type: "PDF",
    size: "2.4 MB",
    downloads: 1250,
    views: 3400,
    lastUpdated: "2 dias atrás",
  },
  {
    id: 2,
    title: "Banco de Dados Relacionais",
    description:
      "Modelagem, normalização e consultas SQL para sistemas de banco de dados.",
    category: "Banco de Dados",
    type: "Video",
    size: "45 min",
    downloads: 890,
    views: 2100,
    lastUpdated: "1 semana atrás",
  },
  {
    id: 3,
    title: "Desenvolvimento Web Frontend",
    description:
      "HTML, CSS, JavaScript e frameworks modernos para desenvolvimento web.",
    category: "Web Development",
    type: "Slides",
    size: "1.8 MB",
    downloads: 1560,
    views: 4200,
    lastUpdated: "3 dias atrás",
  },
  {
    id: 4,
    title: "Redes de Computadores",
    description:
      "Protocolos, arquiteturas e segurança em redes de computadores.",
    category: "Redes",
    type: "PDF",
    size: "3.1 MB",
    downloads: 720,
    views: 1800,
    lastUpdated: "5 dias atrás",
  },
  {
    id: 5,
    title: "Inteligência Artificial",
    description: "Fundamentos de IA, machine learning e algoritmos de busca.",
    category: "IA",
    type: "Video",
    size: "60 min",
    downloads: 980,
    views: 2800,
    lastUpdated: "1 dia atrás",
  },
  {
    id: 6,
    title: "Engenharia de Software",
    description:
      "Metodologias ágeis, padrões de projeto e boas práticas de desenvolvimento.",
    category: "Engenharia",
    type: "Slides",
    size: "2.2 MB",
    downloads: 1100,
    views: 3100,
    lastUpdated: "4 dias atrás",
  },
];

export function ContentRepository() {
  return (
    <section id="materiais" className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
            Repositório de Conteúdos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Acesse materiais de aula organizados por disciplina e categoria.
            Todos os conteúdos são atualizados regularmente pelos professores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card
              key={material.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-balance">
                      {material.title}
                    </CardTitle>
                    <CardDescription className="text-pretty">
                      {material.description}
                    </CardDescription>
                  </div>
                  <BookOpen className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary">{material.category}</Badge>
                  <Badge variant="outline">{material.type}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {material.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {material.views}
                    </span>
                  </div>
                  <span>{material.size}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {material.lastUpdated}
                  </span>
                  <Button size="sm">Acessar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
