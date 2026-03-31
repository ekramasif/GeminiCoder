import React from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center space-y-8 pt-10 pb-4">
      <div className="matte-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-zinc-300 shadow-sm">
        <Sparkles className="h-3.5 w-3.5" />
        Premium AI Builder
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl lg:text-7xl">
          What are we building?
        </h1>
        <p className="text-base leading-relaxed text-zinc-400 sm:text-lg max-w-2xl mx-auto">
          Shape the output with your prompt, and we'll generate a polished, production-ready premium interface in HTML and Tailwind.
        </p>
      </div>
    </header>
  );
};

export default Header;
