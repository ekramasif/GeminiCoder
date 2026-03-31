import React from "react";
import { FaSpinner } from "react-icons/fa";

const IdeaForm = ({
  idea,
  setIdea,
  handleSubmit,
  loading,
  error,
  wordCount,
}) => {
  return (
    <div className="mt-8">
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-sm font-medium text-zinc-200">Prompt</p>
        <span className="text-sm text-zinc-500">{wordCount} words</span>
      </div>

      <textarea
        className={`matte-field min-h-[180px] w-full rounded-[1.5rem] px-5 py-4 text-base leading-7 text-zinc-100 placeholder:text-zinc-500 transition duration-300 focus:outline-none ${
          error ? "matte-field-error" : ""
        }`}
        placeholder="Describe the product, users, and core workflow..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows="6"
        disabled={loading}
      />

      {error && (
        <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-500">Use at least 15 words.</div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="matte-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] disabled:opacity-70"
        >
          <span>{loading ? "Generating" : "Generate"}</span>
          {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
        </button>
      </div>
    </div>
  );
};

export default IdeaForm;
