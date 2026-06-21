import React, { useRef, useEffect } from "react";
import { Plus, ChevronDown, Lightbulb, ArrowRight } from "lucide-react";
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
    <div className="mt-12 w-full max-w-[52rem] transition-all duration-300 ease-in-out">
      <div
        className={`relative flex w-full flex-col rounded-[2rem] border border-[#3a3a43] bg-[#2d2d32]/96 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.55)] transition-all duration-300 sm:p-4 ${
          error ? "shadow-[0_0_15px_rgba(239,68,68,0.18)]" : "hover:border-[#4a4a55]"
        }`}
      >
        <textarea
          ref={textareaRef}
          className="custom-scrollbar min-h-[132px] w-full resize-none rounded-[1.4rem] border border-[#45454d] bg-transparent px-5 pt-8 text-xl font-medium leading-relaxed text-zinc-100 outline-none placeholder:text-zinc-500 sm:min-h-[138px] sm:text-[1.05rem]"
          placeholder="Let's build an admin panel to manage..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          autoFocus
        />

        <div className="mt-4 flex flex-col gap-3 px-2 pb-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              type="button"
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#494951] text-zinc-300 transition-colors hover:border-[#5d5d68] hover:text-white"
              title="Attach files (coming soon)"
            >
              <Plus className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-2 text-[1.05rem] font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Standard
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>
            <button
              type="button"
              className="flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-2 text-[1.05rem] font-medium text-zinc-400 transition-colors hover:text-zinc-200"
            >
              <Lightbulb className="h-4 w-4" />
              Plan
            </button>
          </div>

          <div className="flex flex-shrink-0 items-center justify-end">
            <button
              onClick={handleSubmit}
              disabled={loading || !idea.trim()}
              aria-label={loading ? "Generating" : "Generate"}
              className={`flex h-14 items-center justify-center gap-3 rounded-full px-7 text-[1.1rem] font-semibold transition-all duration-300 ${
                idea.trim() && !loading
                  ? "bg-[#2c7cc6] text-white hover:bg-[#3591e7]"
                  : "cursor-not-allowed bg-[#2f4255] text-zinc-400"
              }`}
            >
              {loading ? (
                <>
                  <FaSpinner className="h-4 w-4 animate-spin" />
                  <span>Building...</span>
                </>
              ) : (
                <>
                  <span>Build now</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-4 px-4 text-sm text-red-400">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default IdeaForm;
