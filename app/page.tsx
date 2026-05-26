import { BottomNav } from "../src/components/ui/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f1e8]">
      <div className="pb-24 pt-safe px-4">
        <h1 className="text-2xl font-serif text-[#D4AF37] mt-8">NOD v2.0.0</h1>
        <p className="mt-4 text-[#9A9387]">Interface en cours de chargement</p>
      </div>
      <BottomNav />
    </main>
  );
}
