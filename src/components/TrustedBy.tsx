"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TrustedBy() {
  const logos = [
    "microsoft1.png",
    "gspann2.png",
    "realme1.png",
    "welspun1.png",
    "enablex1.png",
    "indigo.png",
    "codingninja2.png",
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  // Corrected type for marqueeRef and marqueeContentRef
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeContentRef = useRef<HTMLDivElement>(null); // Specify HTMLDivElement

  useEffect(() => {
    // Ensure both refs are currently pointing to a DOM element
    if (marqueeContentRef.current && marqueeRef.current) {
      // Now TypeScript knows marqueeContentRef.current is an HTMLDivElement
      // and therefore has the scrollWidth property.
      const contentWidth = marqueeContentRef.current.scrollWidth / 2;

      gsap.to(marqueeContentRef.current, {
        x: -contentWidth,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
        },
      });
    }
  }, []);

  return (
    <section className="py-10 bg-white text-center overflow-hidden">
      <p className="text-black text-2xl font-medium mb-6">
        Trusted by Leading Organisations, Schools, Colleges & NGOs
      </p>
      <div
        ref={marqueeRef}
        className="relative w-full overflow-hidden py-6 bg-blue-50"
      >
        <div
          ref={marqueeContentRef}
          className="flex flex-nowrap items-center will-change-transform"
        >
          {duplicatedLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={`/logos/${logo}`}
              alt={logo.replace(".png", "")}
              width={100}
              height={40}
              className="flex-shrink-0 mx-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}