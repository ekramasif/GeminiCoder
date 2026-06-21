import React, { useState } from "react";
import { generateIdeaContent } from "./components/apis/geminiAPI";
import DOMPurify from "dompurify";
import { marked } from "marked";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IdeaForm from "./components/IdeaForm";
import GeneratedCode from "./components/GeneratedCode";

const IdeaInput = () => {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");

  const handleIdeaChange = (value) => {
    setIdea(value);
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async () => {
    const wordCount = idea.trim() ? idea.trim().split(/\s+/).length : 0;
    
    if (wordCount < 3) {
      setError("Please add a bit more detail (at least 3 words).");
      return;
    }

    setLoading(true);
    setError(null);
    setHtmlContent("");

    try {
      const markdownCode = await generateIdeaContent(idea, {
        buildMode: { id: "web-app" },
        styleMode: { id: "minimal-mono" },
      });
      const html = marked(markdownCode);
      const cleanHtml = DOMPurify.sanitize(html);
      setHtmlContent(cleanHtml);
    } catch (err) {
      console.error(err);
      setError("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
      <Navbar />
      <main className="flex-1 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 fade-in-up">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#131316_0%,#09090b_100%)] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute left-[-6rem] bottom-[-10rem] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_20rem] lg:items-start">
              <div>
                <Header />
                <IdeaForm
                  idea={idea}
                  setIdea={handleIdeaChange}
                  handleSubmit={handleSubmit}
                  loading={loading}
                  error={error}
                />
              </div>

              <aside className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-zinc-500">
                  Workflow
                </p>
                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-sm font-medium text-zinc-100">1. Describe the product</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      Add the screens, audience, tone, and features you want in the generated interface.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">2. Generate production-minded markup</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      Gemini returns structured HTML and Tailwind CSS aimed at polished app and marketing layouts.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">3. Refine and ship faster</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      Iterate on the prompt until the hierarchy, spacing, and UI details match the product direction.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          {htmlContent && <GeneratedCode htmlContent={htmlContent} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IdeaInput;
