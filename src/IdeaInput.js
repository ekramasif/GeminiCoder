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

const IdeaInput = () => {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");

  const handleSubmit = async () => {
    const wordCount = idea.trim().split(/\s+/).length;
    if (wordCount < 15) {
      setError(
        "Please provide a more detailed description of your idea (at least 15 words)."
      );
      return;
    }

    setLoading(true);
    setError(null);
    setHtmlContent("");

    try {
      const markdownCode = await generateIdeaContent(idea);
      console.log("markdownCode:::::::::::::", markdownCode);
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100 p-8 rounded-2xl shadow-xl">
            <Header />
            <IdeaForm 
              idea={idea} 
              setIdea={setIdea} 
              handleSubmit={handleSubmit} 
              loading={loading} 
              error={error} 
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