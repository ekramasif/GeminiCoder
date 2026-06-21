import React, { useRef, useEffect } from "react";
import { Paperclip, Globe, MonitorPlay, Sparkles, ArrowUp } from "lucide-react";
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
    <div className="mt-10 w-full max-w-4xl transition-all duration-300 ease-in-out">
      <div
        className={`relative flex w-full flex-col rounded-[1.75rem] border bg-[#0f1013]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 sm:p-5 ${
          error ? "border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.15)]" : "border-white/10 hover:border-white/20"
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-zinc-100">Prompt</p>
            <p className="mt-1 text-sm text-zinc-500">Focus on layout, sections, tone, and key interactions.</p>
          </div>
          <div className="matte-pill rounded-full px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-zinc-400">
            HTML + Tailwind
          </div>
        </div>

        <textarea
          ref={textareaRef}
          className="custom-scrollbar min-h-[160px] max-h-[300px] w-full resize-none bg-transparent text-lg leading-relaxed text-zinc-100 outline-none placeholder:text-zinc-500 sm:text-lg"
          placeholder="Describe the product you want: pages, sections, user type, content blocks, visual direction, and any premium details you want emphasized."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          autoFocus
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-4">
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2 sm:gap-4 sm:pb-0">
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
              className="flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-200"
            >
              <Globe className="w-4 h-4" />
              Public
            </button>
            <button
              type="button"
              className="flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-200"
            >
              <MonitorPlay className="w-4 h-4" />
              Auto layout
            </button>
          </div>

          <div className="flex items-center justify-end gap-3 flex-shrink-0">
            <button
              type="button"
              className="text-zinc-500 hover:text-zinc-300 hover:bg-white/5 p-2 rounded-full transition-colors"
              aria-label="Enhance prompt"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || !idea.trim()}
              aria-label={loading ? "Generating" : "Generate"}
              className={`flex h-11 items-center justify-center gap-2 rounded-full px-4 transition-all duration-300 ${
                idea.trim() && !loading
                  ? "bg-zinc-100 text-black hover:scale-[1.02] hover:bg-white"
                  : "cursor-not-allowed bg-white/10 text-zinc-500"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="h-4 w-4 animate-spin" />
                  <span className="text-sm font-medium">Generating</span>
                </>
              ) : (
                <>
                  <span className="text-sm font-medium">Generate</span>
                  <ArrowUp className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {error && (
          <div className="mt-4 flex items-center gap-2 px-4 text-sm text-red-400">
            <span>{error}</span>
          </div>
        )}
    </div>
  );
};

export default IdeaForm;
