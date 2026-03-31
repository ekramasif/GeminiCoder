import React, { useRef, useEffect } from "react";
import { Paperclip, Globe, ChevronDown, MonitorPlay, Sparkles, ArrowUp } from "lucide-react";
import { FaSpinner } from "react-icons/fa";

const IdeaForm = ({
  idea,
  setIdea,
  handleSubmit,
  loading,
  error,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 300)}px`;
    }
  }, [idea]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (idea.trim() && !loading) {
        handleSubmit();
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-6 transition-all duration-300 ease-in-out">
      <div
        className={`relative flex flex-col w-full rounded-2xl bg-[#0F0F12] border transition-all duration-300 shadow-2xl ${
          error ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]" : "border-white/10 hover:border-white/20"
        } p-4 sm:p-5`}
      >
        <textarea
          ref={textareaRef}
          className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-500 text-lg sm:text-lg resize-none outline-none min-h-[140px] max-h-[300px] leading-relaxed custom-scrollbar"
          placeholder="Describe your full-stack web app or site — let's build and deploy it!"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          autoFocus
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <button
              type="button"
              className="text-zinc-500 hover:text-zinc-300 p-2 rounded-full transition-colors flex-shrink-0"
              title="Attach files (coming soon)"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="w-px h-5 bg-white/10 flex-shrink-0" />
            <button
              type="button"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/5 px-3 py-1.5 rounded-full transition-colors text-sm font-medium flex-shrink-0"
            >
              <Globe className="w-4 h-4" />
              Public
              <ChevronDown className="w-3.5 h-3.5 text-zinc-600" />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 hover:bg-white/5 px-3 py-1.5 rounded-full transition-colors text-sm font-medium flex-shrink-0"
            >
              <MonitorPlay className="w-4 h-4" />
              Auto
              <ChevronDown className="w-3.5 h-3.5 text-zinc-600" />
            </button>
          </div>

          <div className="flex items-center justify-end gap-3 flex-shrink-0">
            <button
              type="button"
              className="text-zinc-500 hover:text-zinc-300 hover:bg-white/5 p-2 rounded-full transition-colors"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || !idea.trim()}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                idea.trim() && !loading
                  ? "bg-zinc-200 text-black hover:bg-white hover:scale-105"
                  : "bg-white/10 text-zinc-500 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <FaSpinner className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 flex items-center gap-2 text-sm text-red-400 px-4 animate-in fade-in slide-in-from-top-2">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default IdeaForm;
