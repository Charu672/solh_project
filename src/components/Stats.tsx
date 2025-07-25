"use client"; // Mark as Client Component for GSAP animations

import { Inter } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import { gsap } from 'gsap'; // Import gsap

const inter = Inter({
  subsets: ['latin'], // This is standard for most Latin-based content
  weight: ['400', '500', '600', '700'], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});

export default function Stats() {
  // Refs for each stat card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure refs are attached to DOM elements
    if (card1Ref.current && card2Ref.current && card3Ref.current) {
      // Function to apply the background animation to a single card
      const animateCardBackground = (element: HTMLElement) => {
        gsap.to(element, {
          backgroundPosition: "100% 0%", // Animate from 0% to 100% horizontally
          duration: 2, // Adjusted duration for faster, more visible movement
          ease: "none", // Linear animation for smooth continuous movement
          repeat: -1, // Infinite loop
        });
      };

      // Apply animation to each card
      animateCardBackground(card1Ref.current);
      animateCardBackground(card2Ref.current);
      animateCardBackground(card3Ref.current);
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="px-6 md:px-12 text-center bg-white py-16"> {/* Added vertical padding */}
      <h2 className="text-xl md:text-2xl font-medium mb-3 text-black">
        Your Team Is Stressed. And It's Costing You.
      </h2>
      <p className="text-gray-500 text-sm md:text-base font-normal mb-10">
        Here's what other people are finding most useful right now.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-7xl mx-auto"> {/* Added mx-auto for centering */}
        {/* Card 1: Blue Gradient */}
        <div
          ref={card1Ref} // Attach ref
          className="px-6 py-8 rounded-lg shadow w-80 overflow-hidden" // Added overflow-hidden
          style={{
            backgroundImage: "linear-gradient(to right, #E2EAFE 0%, #BFD7F2 50%, #E2EAFE 100%)", // Custom wider gradient
            backgroundSize: "300% 100%", // Increased background size for a more visible run
            backgroundPosition: "0% 0%", // Initial position
          }}
        >
          <h3 className={`text-3xl font-semibold ${inter.className} text-black`}>₹1.1 Lakh Cr</h3>
          <p className="text-sm text-gray-700">
            Annual loss due to poor employee health
          </p>
        </div>
        {/* Card 2: Purple Gradient */}
        <div
          ref={card2Ref} // Attach ref
          className="px-6 py-8 rounded-lg shadow w-80 overflow-hidden" // Added overflow-hidden
          style={{
            backgroundImage: "linear-gradient(to right, #F0EAFE 0%, #D8C2F2 50%, #F0EAFE 100%)", // Custom wider gradient
            backgroundSize: "300% 100%", // Increased background size
            backgroundPosition: "0% 0%",
          }}
        >
          <h3 className={`text-3xl font-semibold ${inter.className} text-black`}>₹17.4 Lakh</h3>
          <p className="text-sm text-gray-700">Per employee burnout cost</p>
        </div>
        {/* Card 3: Orange Gradient */}
        <div
          ref={card3Ref} // Attach ref
          className="px-6 py-8 rounded-lg shadow w-80 overflow-hidden" // Added overflow-hidden
          style={{
            backgroundImage: "linear-gradient(to right, #FFF0E2 0%, #FFD7B3 50%, #FFF0E2 100%)", // Custom wider gradient
            backgroundSize: "300% 100%", // Increased background size
            backgroundPosition: "0% 0%",
          }}
        >
          <h3 className={`text-3xl font-semibold ${inter.className} text-black`}>&lt;2%</h3>
          <p className="text-sm text-gray-700">
            Utilization of traditional EAPs
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-8 bg-blue-600 hover:bg-blue-800 hover:transition-transform-300 hover:scale-105 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg">
          Learn how Solh delivers 10x higher engagement
          <MdArrowOutward />
        </button>
      </div>
    </section>
  );
}
