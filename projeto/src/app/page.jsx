import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ContentRepository } from "@/components/content-repository";
import { ChampionshipSection } from "@/components/championship-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ContentRepository />
        <ChampionshipSection />
      </main>
      <Footer />
    </div>
  );
}
