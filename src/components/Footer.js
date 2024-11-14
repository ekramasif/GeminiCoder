// src/Footer.js
import React from "react";
import { FaGithub } from "react-icons/fa";

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
                  <a href="https://github.com/ekramasif/GeminiCoder/blob/main/README.md" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://aistudio.google.com/app/apikey" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
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
              © {new Date().getFullYear()} 
              <a 
                href="https://www.linkedin.com/in/ekram-asif/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                Ekram Asif
              </a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;