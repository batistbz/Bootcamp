import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Award, Target, Zap } from "lucide-react";

const championships = [
  {
    id: 1,
    title: "Hackathon de Inovação 2024",
    description:
      "Desenvolva soluções inovadoras para problemas reais em 48 horas.",
    participants: 156,
    prize: "R$ 5.000",
    deadline: "15 dias",
    status: "Inscrições Abertas",
    category: "Desenvolvimento",
    difficulty: "Avançado",
  },
  {
    id: 2,
    title: "Competição de Algoritmos",
    description: "Resolva problemas complexos de programação e algoritmos.",
    participants: 89,
    prize: "R$ 2.500",
    deadline: "8 dias",
    status: "Em Andamento",
    category: "Programação",
    difficulty: "Intermediário",
  },
  {
    id: 3,
    title: "Desafio de Machine Learning",
    description: "Crie modelos de IA para análise de dados e predições.",
    participants: 67,
    prize: "R$ 3.000",
    deadline: "22 dias",
    status: "Inscrições Abertas",
    category: "IA/ML",
    difficulty: "Avançado",
  },
  {
    id: 4,
    title: "Maratona de Programação",
    description: "Competição em equipe para resolver problemas de programação.",
    participants: 124,
    prize: "R$ 4.000",
    deadline: "5 dias",
    status: "Últimos Dias",
    category: "Programação",
    difficulty: "Intermediário",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Inscrições Abertas":
      return "bg-green-500/10 text-green-700 border-green-200";
    case "Em Andamento":
      return "bg-blue-500/10 text-blue-700 border-blue-200";
    case "Últimos Dias":
      return "bg-orange-500/10 text-orange-700 border-orange-200";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const getDifficultyIcon = (difficulty: string) => {
  switch (difficulty) {
    case "Avançado":
      return <Zap className="h-3 w-3" />;
    case "Intermediário":
      return <Target className="h-3 w-3" />;
    default:
      return <Award className="h-3 w-3" />;
  }
};

export function ChampionshipSection() {
  return (
    <section id="campeonatos" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Campeonatos Acadêmicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Participe de competições que desafiam suas habilidades e conectam
            você com outros estudantes. Ganhe prêmios e reconhecimento
            acadêmico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {championships.map((championship) => (
            <Card
              key={championship.id}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-balance flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      {championship.title}
                    </CardTitle>
                    <CardDescription className="text-pretty mb-3">
                      {championship.description}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge className={getStatusColor(championship.status)}>
                    {championship.status}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    {getDifficultyIcon(championship.difficulty)}
                    {championship.difficulty}
                  </Badge>
                  <Badge variant="secondary">{championship.category}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{championship.participants} participantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold text-primary">
                      {championship.prize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Prazo: {championship.deadline}</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  {championship.status === "Inscrições Abertas"
                    ? "Inscrever-se"
                    : "Ver Detalhes"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Campeonatos
          </Button>
        </div>
      </div>
    </section>
  );
}
