import HerosSection from "@/app/components/ui/HeroSection"
import TableSection from "./components/ui/TableSection";
import Footer from "./components/ui/Footer";
import Instructors from "./components/ui/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
    {/* <HerosSection /> */}
    
    <Instructors />

    <section id="TableSection">
      <TableSection />
    </section>

    <section id="footer">
      <Footer />
    </section>

    </main>
  );
}
