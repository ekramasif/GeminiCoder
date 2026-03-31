import React from "react";

const GeneratedCode = ({ htmlContent }) => {
  return (
    <section className="mt-10 space-y-4 fade-in-up">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-zinc-50">Output</h2>
        <div className="matte-pill inline-flex items-center rounded-full px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-zinc-400">
          HTML
        </div>
      </div>

      <div className="matte-code overflow-hidden rounded-[1.75rem]">
        <div className="flex items-center gap-4 border-b border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex space-x-2">
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
          </div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">
            response.html
          </p>
        </div>

        <div
          className="generated-markup max-h-[32rem] overflow-auto px-5 py-5 text-sm"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </section>
  );
};

export default GeneratedCode;
