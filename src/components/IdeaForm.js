import React from "react";
import { FaSpinner } from "react-icons/fa";

const IdeaForm = ({ idea, setIdea, handleSubmit, loading, error }) => {
  return (
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
    </div>
  );
};

export default IdeaForm;