'use client';
import { motion } from "framer-motion";
import brandMark from "@/public/assets/branding/brand-mark.svg";
import { tokens } from "@/src/lib/tokens";

export const BrandPanel = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mt-10 rounded-[2rem] border bg-[var(--color-bg-monolith)] p-6 shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
      style={{ borderColor: `${tokens.colors.gold}33` }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <motion.img
          src={brandMark}
          alt="NOD brand mark"
          className="h-20 w-20 flex-none rounded-3xl border bg-[var(--color-bg-void)] p-3"
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          style={{ borderColor: `${tokens.colors.gold}40` }}
        />
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-gold)]">
            Dark luxury brutalist
          </p>
          <h2 className="text-4xl font-serif text-[var(--color-champagne)]">
            Editorial motion system
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            Every new visual asset is stored under public/assets and referenced through the
            @{`/public/assets/`} alias to keep the design workflow consistent
          </p>
        </div>
      </div>
    </motion.section>
  );
};
