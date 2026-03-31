// src/IdeaInput.js
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
        // We removed the active modes from component state, 
        // so we can hardcode default fallback options here to maintain API expected params
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
      <main className="flex-1 px-4 pb-20 pt-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl fade-in-up">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/5 shadow-2xl p-6 sm:p-10 lg:p-16">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[80%] h-[400px] bg-zinc-600/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <Header />
              <IdeaForm
                idea={idea}
                setIdea={handleIdeaChange}
                handleSubmit={handleSubmit}
                loading={loading}
                error={error}
              />
              {htmlContent && <GeneratedCode htmlContent={htmlContent} />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IdeaInput;
