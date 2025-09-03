import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
          Repositório Acadêmico
          <span className="text-primary block">UniRepo</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Acesse conteúdos de aula, participe de campeonatos acadêmicos e
          acompanhe seu progresso em uma plataforma moderna e intuitiva.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Explorar Materiais
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 bg-transparent"
          >
            <Trophy className="h-5 w-5" />
            Ver Campeonatos
          </Button>
        </div>
      </div>
    </section>
  );
}
