import React, { useState } from "react";
import { FaSpinner, FaGithub } from "react-icons/fa";
import { generateIdeaContent } from "./geminiAPI";
import DOMPurify from "dompurify";
import { marked } from "marked";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/GeminiCoder.png"
              alt="GeminiCoder Logo"
              className="h-8 w-auto sm:h-10 md:h-12 object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/ekramasif/GeminiCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and About Section */}
            <div>
              <div className="flex items-center">
                <img 
                  src="/GeminiCoder.png" 
                  alt="GeminiCoder Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Transform your ideas into reality with GeminiCoder. 
                Get detailed technical specifications powered by AI.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a 
                    href="https://github.com/ekramasif/GeminiCoder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors flex items-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} GeminiCoder. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

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
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
              Turn your <span className="text-blue-600">idea</span> into an{" "}
              <span className="text-blue-600">app</span>
            </h2>
            <p className="mt-4 text-center text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text max-w-xl mx-auto">
              Describe your app idea in detail and let AI help you bring it to
              life.
            </p>

            <div className="mt-8">
              <textarea
                className={`w-full p-4 bg-white/50 backdrop-blur-sm border rounded-xl text-gray-700 shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                ${error ? "border-red-300" : "border-gray-200"}`}
                placeholder="Describe the app you want to build..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows="3"
                disabled={loading}
              />
              <div className="flex justify-between text-gray-500 text-sm mt-2 px-1">
                <span>Minimum 15 words</span>
                <span>{idea.trim().split(/\s+/).length} words</span>
              </div>
              {error && (
                <div className="mt-2 text-red-500 text-sm bg-red-50 p-2 rounded-lg">
                  {error}
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                rounded-xl font-medium flex items-center space-x-2 hover:shadow-lg 
                transition-all duration-300 disabled:opacity-70"
              >
                <span>{loading ? "Generating..." : "Generate App"}</span>
                {loading && <FaSpinner className="animate-spin ml-2" />}
              </button>
            </div>

            {htmlContent && (
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                  Generated HTML Code
                </h3>
                <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <pre className="overflow-auto p-4 pt-12 text-sm">
                    <code
                      className="language-html"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IdeaInput;
