"use client";

import Image from "next/image";
import React from "react";
import {
  MdOutlineHowToVote,
  MdOutlineSupportAgent,
  MdOutlineLightbulb,
} from "react-icons/md";

export default function StreffieSection() {
  const featureData = [
    {
      title: "How Streffie Works",
      desc: "Using facial recognition technology, Streffie analyzes micro-expressions to detect stress levels in real time. It then generates a stress score (0–10) and offers personalized suggestions based on the user’s emotional condition.",
      icon: MdOutlineHowToVote,
    },
    {
      title: "Personalized Support",
      desc: "After scanning, Streffie recommends tailored interventions such as breathing exercises, expert consultations, journaling prompts, or calming content to help users reduce stress instantly.",
      icon: MdOutlineSupportAgent,
    },
    {
      title: "Why Streffie Matters",
      desc: "Streffie bridges the gap between awareness and action. By offering instant AI-driven insights, it empowers users to understand their stress patterns and take timely steps toward better mental well-being.",
      icon: MdOutlineLightbulb,
    },
  ];

  return (
    <section className="bg-white pt-10 px-4 sm:px-6 lg:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">
        What is Streffie
      </h2>
      <p className="text-gray-600 text-base max-w-5xl mx-auto mb-4">
        Streffie is an AI-powered stress assessment assistant integrated into
        the Solh Wellness app. It helps users monitor their emotional state
        through non-intrusive facial analysis, making mental health tracking
        simple and accessible.
      </p>

      <div className="mx-auto flex flex-row flex-wrap gap items-center justify-around">
        {/* Left Content - Feature Cards */}
        <div className="max-w-xl flex flex-col gap-2">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Right Image */}
        <div className="flex- relative items-center justify-center">
          <div className="relative w-[350px] h-[250px] md:w-[500px] md:h-[350px] lg:w-[490px] lg:h-[360px] bg-gradient-to-b from-blue-400 to-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
            {/* Left Phone Image */}
            <Image
              src="/iphone2.png"
              alt="Streffie App Left"
              width={250}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-[80%] -translate-y-1/2 rotate-[-2deg] object-contain z-10"
            />
            {/* Right Phone Image */}
            <Image
              src="/streffie-phone.png"
              alt="Streffie App Right"
              width={150}
              height={300}
              className="absolute left-1/2 top-1/2 -translate-x-[35%] -translate-y-1/2 object-contain z-20"
            />
          </div>
          {/* Dots below the phone rectangle */}
          {/* <div className="flex space-x-2 mt-6">
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div> 
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

// FeatureCard component
function FeatureCard({
  title,
  desc,
  icon: IconComponent,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
}) {
  return (
    <div
      className={`group flex gap-4 p-3 rounded-xl shadow-md text-left cursor-pointer transition-all duration-300
                  bg-white text-gray-700 hover:bg-[#406AFF] hover:text-white`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl p-2
                    bg-[#406AFF] text-white group-hover:bg-white group-hover:text-[#406AFF]`}
      >
        <IconComponent size={18} />
      </div>
      <div>
        <h4 className="font-semibold text-md mb-1 text-black group-hover:text-white">
          {title}
        </h4>
        <p className="text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
