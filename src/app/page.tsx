import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { TechShowcase } from "@/components/landing/tech-showcase";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Features />
      <TechShowcase />
      <Footer />
    </main>
  );
}
