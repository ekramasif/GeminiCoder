import React from "react";

const Header = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
        Turn your <span className="text-blue-600">idea</span> into an{" "}
        <span className="text-blue-600">app</span>
      </h2>
      <p className="mt-4 text-center text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text max-w-xl mx-auto">
        Describe your app idea in detail and let AI help you bring it to life.
      </p>
    </div>
  );
};

export default Header;