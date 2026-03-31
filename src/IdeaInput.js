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
import Features from "./components/Features";

const countWords = (value) => {
  const trimmedValue = value.trim();
  return trimmedValue ? trimmedValue.split(/\s+/).length : 0;
};

const IdeaInput = () => {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");
  const wordCount = countWords(idea);

  const handleSubmit = async () => {
    if (wordCount < 15) {
      setError("Add a bit more detail. Use at least 15 words.");
      return;
    }

    setLoading(true);
    setError(null);
    setHtmlContent("");

    try {
      const markdownCode = await generateIdeaContent(idea);
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
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl fade-in-up">
          <div className="matte-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <Header />
            <IdeaForm
              idea={idea}
              setIdea={setIdea}
              handleSubmit={handleSubmit}
              loading={loading}
              error={error}
              wordCount={wordCount}
            />
            {htmlContent && <GeneratedCode htmlContent={htmlContent} />}
          </div>
        </div>
      </main>
      <Features />
      <Footer />
    </div>
  );
};

export default IdeaInput;
