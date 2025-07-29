"use client"; // Mark as Client Component for GSAP animations

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import React, { useEffect, useRef } from 'react'; // Import useEffect and useRef
import { gsap } from 'gsap'; // Import gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { Typewriter } from 'react-simple-typewriter';
export default function Hero() {
  // Refs for the elements we want to animate
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const userCountRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const leftImageGroupRef = useRef<HTMLDivElement>(null);
  const rightImageGroupRef = useRef<HTMLDivElement>(null);
const userImagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Register ScrollTrigger plugin (do this once per app or component using it)
    gsap.registerPlugin(ScrollTrigger);
if (userImagesRef.current) {
  gsap.to(userImagesRef.current, {
    x: 10, // Move right 10px
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}
    // Ensure all refs are attached to DOM elements before animating
    if (
      sectionRef.current &&
      headingRef.current &&
      paragraphRef.current &&
      userCountRef.current &&
      buttonsRef.current &&
      leftImageGroupRef.current &&
      rightImageGroupRef.current
    ) {
      // --- Initial Load Animation for Text and Buttons ---
      // Set initial state for text and buttons (opacity: 0, slightly down)
      // Keeping opacity-0 in JSX is a good safeguard against FOUC
      gsap.set([headingRef.current, paragraphRef.current, userCountRef.current, buttonsRef.current], { y: 30 });

      const textButtonTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      textButtonTl
        .fromTo(headingRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
        .fromTo(paragraphRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "<0.2" // Starts 0.2 seconds after the heading animation begins
        )
        .fromTo(userCountRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "<0.2"
        )
        .fromTo(buttonsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "<0.2"
        );

      // --- ScrollTrigger Animation for Image Groups ---
      // Set initial state for image groups (opacity: 0, slightly down, off-screen)
      // Keeping opacity-0 in JSX is a good safeguard against FOUC
      gsap.set([leftImageGroupRef.current, rightImageGroupRef.current], { y: 100 }); // Start lower for scroll effect

      ScrollTrigger.create({
        trigger: sectionRef.current, // The section itself is the trigger
        start: "top center", // Animation starts when the top of the section hits the center of the viewport
        end: "bottom top", // Animation ends when the bottom of the section leaves the top of the viewport
        // markers: true, // Uncomment for debugging scroll positions
        animation: gsap.to([leftImageGroupRef.current, rightImageGroupRef.current], {
          opacity: 1,
          y: 0, // Animate to original position
          duration: 1.2,
          stagger: 0.1, // Stagger images slightly
          ease: "power3.out",
        }),
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      });
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section
      ref={sectionRef} // Attach ref to the main section
      className="flex flex-col items-center justify-center px-6 md:px-12 pt-10 pb-0 bg-gradient-to-b from-white to-blue-100"
    >
      {/* Main content - text and buttons */}
      <div className="space-y-6 text-center flex flex-col justify-center items-center lg:w-3/4 max-w-4xl mx-auto">
        <h1
          ref={headingRef} // Attach ref
          className="text-3xl md:text-5xl font-semibold text-gray-900 mx-auto mt-10 opacity-0" // Start opacity-0
        >
          <Typewriter
    words={['Transform Your Workplace with Actionable Mental Health Intelligence']}
    typeSpeed={30}
    deleteSpeed={18}
    delaySpeed={0}
    cursor
    cursorStyle=""
  />
        </h1>
        <p
          ref={paragraphRef} // Attach ref
          className="text-gray-500 text-base md:text-md mx-auto max-w-3xl font-normal opacity-0" // Start opacity-0
        >
          Empower your HR and leadership teams with Solh’s AI powered dashboard
          to track stress, predict burnout, and implement timely wellbeing
          interventions.
        </p>
        <div
          ref={userCountRef} // Attach ref
          className="flex justify-center items-center space-x-4 bg-white px-6 py-1 rounded-full shadow-lg opacity-0" // Start opacity-0
        >
          {/* Overlapping user images */}
          <div className="flex -space-x-4 floating-img  " ref={userImagesRef}>
            <Image
              src="/user.jpg"
              alt="User 1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white object-cover floating-img"
            />
            <Image
              src="/user.jpg"
              alt="User 2"
              width={40}
              height={40}
              className="rounded-full border-2 border-white object-cover"
            />
            <Image
              src="/user.jpg"
              alt="User 3"
              width={40}
              height={40}
              className="rounded-full border-2 border-white object-cover"
            />
          </div>

          <span className="text-sm font-medium text-black">
            Over 1.5k+ Lives Transformed
          </span>
        </div>
        <div
          ref={buttonsRef} // Attach ref
          className="flex gap-4 flex-row flex-wrap justify-center items-center z-20 opacity-0" // Start opacity-0
        >
          <button className="bg-[#4E76F0] hover:bg-blue-600 hover:text-white text-white border border-gray-50 shadow font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 sm:w-auto">
            Request a Demo
            <MdArrowOutward className="" />
          </button>
          <button className=" border border-gray-50 shadow bg-[#4E76F0] hover:bg-blue-600 hover:text-white text-white font-semibold px-6 py-3 flex items-center justify-center gap-2 rounded-lg sm:w-auto">
            Product Overview
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-[-80px]">
        {/* Left Circular Image Group */}
        <div
          ref={leftImageGroupRef} // Attach ref
          className="relative w-[250px] h-[250px] md:w-[500px] md:h-[300px] flex justify-center items-center flex-shrink-0 opacity-0" // Start opacity-0
        >
          <img
            src="/outercircle.png"
            alt="Outer Circle"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img
            src="/innercircle.png"
            alt="Inner Circle"
            className="absolute inset-[15%] w-[70%] h-[85%] object-contain"
          />
          <img
            src="/frame1.png"
            alt="Main Illustration Left"
            className="absolute inset-[30%] w-[40%] h-[80%] object-contain"
          />
        </div>

        {/* Right Circular Image Group */}
        <div
          ref={rightImageGroupRef} // Attach ref
          className="relative w-[250px] h-[250px] md:w-[500px] md:h-[300px] flex justify-center items-center flex-shrink-0 opacity-0" // Start opacity-0
        >
          <img
            src="/outercircle2.png"
            alt="Outer Circle Right"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <img
            src="/innercircle2.png"
            alt="Inner Circle Right"
            className="absolute inset-[15%] w-[70%] h-[85%] object-contain"
          />
          <img
            src="/frame2.png"
            alt="Main Illustration Right"
            className="absolute inset-[25%] w-[50%] h-[95%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
