import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-full px-5 sm:px-6 matte-nav">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <img
                src="/GeminiCoder.png"
                alt="GeminiCoder Logo"
                className="h-7 w-auto object-contain brightness-110 contrast-110"
              />
            </div>
            <p className="truncate text-sm font-semibold uppercase tracking-[0.3em] text-zinc-200">
              GeminiCoder
            </p>
          </div>

          <a
            href="https://github.com/ekramasif/GeminiCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="GitHub Repository"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
