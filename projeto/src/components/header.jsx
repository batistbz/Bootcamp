import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Trophy, Users } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary-foreground" />
          <span className="text-xl font-bold text-primary-foreground">
            UniRepo
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            Início
          </a>
          <a
            href="#materiais"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors flex items-center gap-1"
          >
            <BookOpen className="h-4 w-4" />
            Materiais
          </a>
          <a
            href="#campeonatos"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors flex items-center gap-1"
          >
            <Trophy className="h-4 w-4" />
            Campeonatos
          </a>
          <a
            href="#recursos"
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors flex items-center gap-1"
          >
            <Users className="h-4 w-4" />
            Recursos
          </a>
        </nav>

        <Button variant="secondary" size="sm">
          Login
        </Button>
      </div>
    </header>
  );
}