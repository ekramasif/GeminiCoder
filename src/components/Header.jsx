import React from "react";

const Header = () => {
  return (
    <header className="max-w-4xl text-center">
      <div className="space-y-5">
        <h1 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.1rem]">
          Ready to build something amazing?
        </h1>
        <p className="text-lg font-medium text-zinc-400 sm:text-[2rem] sm:leading-none">
          Try it out and start building for free
        </p>
      </div>
    </header>
  );
};

export default Header;
