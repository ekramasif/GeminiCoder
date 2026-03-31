import React from "react";

const Header = () => {
  return (
    <header className="space-y-6">
      <div className="matte-pill inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-zinc-400">
        AI App Builder
      </div>

      <div className="space-y-4 text-left">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-5xl lg:text-6xl">
          Describe the product.
          <br />
          Get the first build.
        </h1>
        <p className="max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          One prompt in. Clean HTML and Tailwind out.
        </p>
      </div>
    </header>
  );
};

export default Header;
