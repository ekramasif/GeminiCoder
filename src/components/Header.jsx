import React from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="space-y-8 pt-4 sm:pt-6">
      <div className="matte-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-zinc-300 shadow-sm">
        <Sparkles className="h-3.5 w-3.5" />
        AI Interface Generator
      </div>

      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-[-0.05em] text-zinc-50 sm:text-5xl lg:text-6xl">
          Build a modern product surface from one precise prompt.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Describe the product, user flow, and visual tone. GeminiCoder returns sleek HTML and Tailwind markup designed to feel launch-ready instead of generic.
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
          <div className="matte-pill rounded-full px-4 py-2">Minimal aesthetic</div>
          <div className="matte-pill rounded-full px-4 py-2">Professional hierarchy</div>
          <div className="matte-pill rounded-full px-4 py-2">Responsive by default</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
