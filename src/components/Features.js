import React from "react";

const featuresData = [
  {
    title: "Fast",
    description: "One prompt to first output.",
  },
  {
    title: "Focused",
    description: "Less noise. More signal.",
  },
  {
    title: "Editable",
    description: "Easy to review and refine.",
  },
];

const Features = () => {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="matte-panel-soft matte-card-hover rounded-[1.5rem] px-5 py-6"
          >
            <p className="text-lg font-semibold text-zinc-50">{feature.title}</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
