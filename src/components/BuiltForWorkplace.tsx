"use client"; // Mark as Client Component for GSAP animations

import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { PiLightbulbFilament } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import { DM_Sans, Inter } from "next/font/google";
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function BuiltForWorkplace() {
  const cardsContainerRef = useRef<HTMLDivElement>(null); // Ref for the container of the cards

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (cardsContainerRef.current) {
      // Get all direct children (the cards) within the container
      const cards = gsap.utils.toArray(cardsContainerRef.current.children);

      // Set initial state for all cards (hidden and slightly below their final position)
      gsap.set(cards, { opacity: 0, y: 50 });

      // Create a ScrollTrigger animation for the cards
      ScrollTrigger.create({
        trigger: cardsContainerRef.current, // The container itself is the trigger
        start: "top 80%", // Animation starts when the top of the container is 80% down the viewport
        end: "bottom center", // Animation ends when the bottom of the container hits the center of the viewport
        // markers: true, // Uncomment for debugging scroll positions
        animation: gsap.to(cards, {
          opacity: 1,
          y: 0, // Animate to their original position
          duration: 0.8,
          stagger: 0.15, // Stagger animation by 0.15 seconds for each card
          ease: "power3.out",
        }),
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      });
    }
  }, []); // Empty dependency array means this effect runs once on mount

  const features = [
    {
      title: "Improved Mental Health",
      description: "Effective work-life stress management contributes to better physical & mental health in a long run.",
      icon: GoPlus,
    },
    {
      title: "Enhanced Mental Resilience",
      description: "You will develop increased tolerance to stress and challenges and the ability to manage more stress in your role.",
      icon: ImPower,
    },
    {
      title: "Better Personal Relationships",
      description: "Reduced stress can lead to improved work-life balance and more effective communication with others.",
      icon: CiHeart,
    },
    {
      title: "Enhanced Work Productivity",
      description: "You will discover increased productivity and enhanced focus, best in your daily role at your work life.",
      icon: PiLightbulbFilament,
    }
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-medium text-black mb-8 text-center">
        Backed by Science. Built for new age Workplaces
      </h2>
      <div
        ref={cardsContainerRef} // Attach ref to the cards container
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" // Added max-w-7xl and mx-auto for centering
      >
        {features.map((item, index) => (
          <div
            key={index}
            // Add 'group' class to make this div a reference for group-hover
            // Apply default white background and dark text
            // Apply hover states for background, text, and border colors
            className="group border border-blue-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer
                       hover:bg-blue-600 hover:border-blue-600" // Added hover background and border
          >
            {/* Icon */}
            <div
              // Apply default blue icon background and white text
              // Apply hover states for icon background and text colors
              className="mb-3 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white
                         group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300" // Added group-hover colors and transition
            >
              <item.icon size={20} />
            </div>
            <h3 className={`text-md font-semibold ${dmsans.className} text-black group-hover:text-white transition-colors duration-300`}> {/* Added group-hover text color */}
              {item.title}
            </h3>
            <p className={`text-gray-600 text-sm ${inter.className} leading-relaxed group-hover:text-white transition-colors duration-300`}> {/* Added group-hover text color */}
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
