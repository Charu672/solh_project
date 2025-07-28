"use client"; // Mark as Client Component for interactivity and GSAP animations

import Image from "next/image";
import React, { useEffect, useRef } from "react"; // Import useEffect and useRef
import {
  MdOutlineHowToVote,
  MdOutlineSupportAgent,
  MdOutlineLightbulb,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules"; // Keep if EffectFade is used for phone slides
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // Keep if EffectFade is used for phone slides
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

export default function StreffieSection() {
  // Ref for the container of the feature cards
  const featureCardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (featureCardsContainerRef.current) {
      // Get all direct children (the FeatureCard components) within the container
      const cards = gsap.utils.toArray(featureCardsContainerRef.current.children);

      // Set initial state for all cards (hidden and slightly to the left of their final position)
      gsap.set(cards, { opacity: 0, x: -50 }); // Changed y to x, and direction to -50 for left-to-right

      // Create a ScrollTrigger animation for the cards
      ScrollTrigger.create({
        trigger: featureCardsContainerRef.current, // The container itself is the trigger
        start: "top 80%", // Animation starts when the top of the container is 80% down the viewport
        end: "bottom center", // Animation ends when the bottom of the container hits the center of the viewport
        // markers: true, // Uncomment for debugging scroll positions
        animation: gsap.to(cards, {
          opacity: 1,
          x: 0, // Animate to their original X position
          duration: 0.8,
          stagger: 0.15, // Stagger animation by 0.15 seconds for each card
          ease: "power3.out",
        }),
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      });
    }
  }, []); // Empty dependency array means this effect runs once on mount

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

  const phoneSlides = [
    {
      leftImage: "/iphone2.png",
      rightImage: "/streffie-phone.png",
    },
    {
      leftImage: "/iphone2.png",
      rightImage: "/streffie-phone.png",
    },
    {
      leftImage: "/iphone2.png",
      rightImage: "/streffie-phone.png",
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

      <div className="mx-auto flex flex-col lg:flex-row flex-wrap gap-8 items-center justify-around"> {/* Adjusted gap and flex-direction for responsiveness */}
        {/* Left Content - Feature Cards */}
        <div ref={featureCardsContainerRef} className="max-w-xl flex flex-col gap-2"> {/* Attach ref here */}
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
            />
          ))}
        </div>

        {/* Right Image - Swiper for Combined Phone Layouts */}
        <div className="flex items-center justify-center mt-8 lg:mt-0"> {/* Added margin top for smaller screens */}
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="w-[350px] h-[250px] md:w-[500px] md:h-[350px] lg:w-[490px] lg:h-[360px]"
          >
            {phoneSlides.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full bg-gradient-to-b from-blue-400 to-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
                  {/* Left Phone Image */}
                  <Image
                    src="/iphone2.png"
                    alt={`Streffie App Left ${index}`}
                    width={250}
                    height={300}
                    className="absolute left-1/2 top-1/2 -translate-x-[80%] -translate-y-1/2 rotate-[-2deg] object-contain z-10"
                  />
                  {/* Right Phone Image */}
                  <Image
                    src="/streffie-phone.png"
                    alt={`Streffie App Right ${index}`}
                    width={150}
                    height={300}
                    className="absolute left-1/2 top-1/2 -translate-x-[35%] -translate-y-1/2 object-contain z-20"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// FeatureCard component (remains unchanged from your provided code)
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
                  bg-white text-gray-700 hover:bg-gradient-to-r from-blue-400 to-blue-700 hover:text-white`}
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
