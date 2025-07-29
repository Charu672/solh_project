"use client"; // Mark as Client Component for interactivity

import { CiLock } from "react-icons/ci";
import { LuHeartPulse } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { Inter } from "next/font/google"; // Assuming Inter is used for general text

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Features() {
  const features = [
    {
      title: "RealTime Dashboard",
      description: "Lorem ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: CiLock,
      gradient: "linear-gradient(to top, #A0C0FF, #204080)", // Blue gradient
    },
    {
      title: "AI Powered Interventions",
      description: "Lorem Ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: LuHeartPulse,
      gradient: "linear-gradient(to top, #FF6D33, #FFA07A)", // Orange gradient
    },
    {
      title: "Custom Toolkits",
      description: "Lorem Ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: HiOutlineUserGroup,
      gradient: "linear-gradient(to top, #6B47DC, #9A7AF0)", // Purple gradient
    },
  ];

  return (
    <section className="px-4 md:px-8 bg-white text-center py-12">
      {/* Container for the three feature cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            // Main card wrapper: relative for absolute child, overflow-hidden to clip gradient,
            // group for group-hover, shadow and transition for smooth effects
            className="group relative overflow-hidden p-5 rounded-xl shadow-lg flex-1 text-left cursor-pointer bg-blue-50
                       transition-shadow duration-300"
            style={{ minWidth: '250px', maxWidth: '350px' }}
          >
            {/* The animated layer: absolute, starts at h-0, expands to h-full on group-hover */}
            <div
              className="absolute inset-x-0 bottom-0 w-full h-0 transition-all duration-500 ease-out
                         group-hover:h-full"
              style={{ backgroundImage: feature.gradient, zIndex: 1 }} // Inline style for gradient and z-index
            ></div>

            {/* The actual content of the card: relative and higher z-index to stay on top */}
            <div className="relative z-20">
              {/* Icon Container: default colors, group-hover colors, and transition */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl mb-3 bg-[#406AFF] text-white
                         transition-colors duration-300 group-hover:bg-white group-hover:text-[#406AFF]">
                <feature.icon size={20} />
              </div>
              {/* Title: default color, group-hover color, and transition */}
              <h3 className={`font-semibold ${inter.className} text-lg mb-1.5 text-gray-800
                         transition-colors duration-300 group-hover:text-white`}>
                {feature.title}
              </h3>
              {/* Description: default color, group-hover color, and transition */}
              <p className={`text-sm text-gray-800
                         transition-colors duration-300 group-hover:text-white`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
