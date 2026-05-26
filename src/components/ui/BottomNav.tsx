'use client';
import { LayoutGrid, Vote, Plus, Trophy, Crown } from 'lucide-react';

export const BottomNav = () => {
  const tabs = [
    { name: 'DIRECT', icon: LayoutGrid },
    { name: 'A-VOTER', icon: Vote },
    { name: 'STUDIO', icon: Plus },
    { name: 'PALMARÈS', icon: Trophy },
    { name: 'TROPHÉE', icon: Crown },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 border-t border-[#d4af37]/20 bg-[#050505]/90 backdrop-blur-lg">
      <div className="flex justify-around py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        {tabs.map((tab) => (
          <button key={tab.name} className="flex flex-col items-center gap-1 text-[10px] text-[#9A9387] hover:text-[#D4AF37]">
            <tab.icon size={20} />
            {tab.name}
          </button>
        ))}
      </div>
    </nav>
  );
};
