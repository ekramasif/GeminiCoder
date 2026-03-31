import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-[1.75rem] border border-white/8 bg-black/25 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
            <img
              src="/GeminiCoder.png"
              alt="GeminiCoder Logo"
              className="h-7 w-auto object-contain brightness-110 contrast-110"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-200">
              GeminiCoder
            </p>
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
          <a
            href="https://github.com/ekramasif/GeminiCoder/blob/main/README.md"
            className="matte-link"
          >
            Docs
          </a>
          <a
            href="https://aistudio.google.com/app/apikey"
            className="matte-link"
          >
            API Key
          </a>
          <a
            href="https://github.com/ekramasif/GeminiCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="matte-link inline-flex items-center gap-2"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
