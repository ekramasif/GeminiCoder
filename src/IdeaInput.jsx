import React, { useState } from "react";
import { generateIdeaContent } from "./components/apis/geminiAPI";
import DOMPurify from "dompurify";
import { marked } from "marked";
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
    <div className="min-h-screen bg-[#0c0c10] text-zinc-300 selection:bg-zinc-800 selection:text-white">
      <main className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(27,89,153,0.5),rgba(12,15,21,0.96)_40%,rgba(11,11,15,1)_72%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-14rem] h-[28rem] rounded-[50%] border-t-[24px] border-white opacity-95 sm:bottom-[-15rem] sm:h-[32rem] sm:border-t-[28px]" />
        <div className="pointer-events-none absolute inset-x-[-2%] bottom-[-13.5rem] h-[28rem] rounded-[50%] border-t-[10px] border-[#52a8ff] opacity-95 blur-[1px] sm:bottom-[-14.5rem] sm:h-[32rem]" />
        <div className="pointer-events-none absolute inset-x-[-4%] bottom-[-13rem] h-[28rem] rounded-[50%] border-t-[18px] border-[#1e7ae6]/80 opacity-80 blur-md sm:bottom-[-14rem] sm:h-[32rem]" />
        <div className="pointer-events-none absolute inset-x-[14%] bottom-[10rem] h-40 rounded-full bg-[#2684ff]/35 blur-[70px] sm:bottom-[12rem] sm:h-44" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl flex-col items-center justify-center fade-in-up">
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
      </main>
    </div>
  );
};

export default IdeaInput;
