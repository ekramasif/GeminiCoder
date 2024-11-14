import React from "react";

const GeneratedCode = ({ htmlContent }) => {
  return (
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
  );
};

export default GeneratedCode;