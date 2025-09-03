import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">UniRepo</span>
            </div>
            <p className="text-sidebar-foreground/80 mb-4 text-pretty">
              Plataforma acadêmica moderna para acesso a conteúdos educacionais
              e participação em campeonatos universitários.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@uniRepo.edu.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#materiais"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Materiais de Aula
                </a>
              </li>
              <li>
                <a
                  href="#campeonatos"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Campeonatos
                </a>
              </li>
              <li>
                <a
                  href="#recursos"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Recursos Estudantis
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Tutoriais
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sidebar-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center text-sm text-sidebar-foreground/60">
          <p>&copy; 2024 UniRepo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}