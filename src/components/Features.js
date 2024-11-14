import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faRobot, faHandPointer, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const featuresData = [
  {
    title: "Free",
    description: "This service is free to start.",
    icon: faCheckCircle,
  },
  {
    title: "AI",
    description: "This service uses Gemini's API.",
    icon: faRobot,
  },
  {
    title: "Simple",
    description: "Just press one button.",
    icon: faHandPointer,
  },
  {
    title: "Ideas",
    description: "The title and details of the app is output.",
    icon: faLightbulb,
  },
];

const Features = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 neumorphic">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={feature.icon} className="text-blue-600 w-8 h-8 mr-2" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;