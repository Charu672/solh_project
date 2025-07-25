"use client";

import Image from "next/image";
import {Inter } from "next/font/google";
const inter = Inter({
  subsets: ['latin'], // This is standard for most Latin-based content
  weight: ['400', '500', '600', '700'], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});
export default function AboutSolhApp() {
  return (
    <section className="bg-white">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-medium text-black mb-4">
          About Solh Wellness App
        </h2>
        <p className={`text-gray-600 text-base ${inter.className} max-w-3xl mx-auto`}>
          Solh Wellness is a mental health app that offers 360° support for
          emotional well-being. It helps users manage stress, track mental
          health, and access expert support.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-300 to-blue-100 p-12">
        {/* Main visual container for the central phone and its concentric circles */}
        <div className="relative h-[600px] md:h-[700px] lg:h-[540px] flex items-center justify-center">
          {/* Outermost Circle */}
          <Image
            src="/circle1.png"
            alt="Outer Decorative Circle"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-full object-contain z-0 opacity-80"
          />

          {/* Inner Circle */}
          <Image
            src="/circle2.png"
            alt="Inner Decorative Circle"
            width={350}
            height={450}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-10 opacity-90"
          />

          {/* Central Phone Image (Innermost) */}
          <Image
            src="/iphone1.png"
            alt="Solh App Main Screen"
            width={220}
            height={400} // (approx 1:2 aspect ratio)
            className="relative z-20 object-contain shadow-xl rounded-3xl"
          />

          {/* Top-Left Card */}
          <div className="absolute top-1/7 md:left-1/4 lg:left-1/3 transform md:-translate-x-1/2 -translate-y-1/2 text-center w-[140px] p-2 bg-white rounded-full shadow-md z-30">
            <Image
              src="/link2.png"
              alt="Solh_logo"
              width={80}
              height={70}
              className="mx-auto"
            />
          </div>

          {/* Top-Right Card */}
          <div className="absolute top-1/7 right-1/4 transform translate-x-full md:translate-x-1/2 -translate-y-1/2 w-[350px] p-4 bg-white rounded-xl shadow-md text-left z-30">
            <h4 className="text-md font-semibold text-blue-900">
              Smart Stress Monitoring
            </h4>
            <hr className=" border-black my-2" />
            <p className="text-xs text-gray-700">
              The app features Streffie, an AI assistant that analyzes facial
              cues to detect stress levels and suggests real-time interventions
              for self-care and relief.
            </p>
          </div>

          <Image
            src="/stresscard.png"
            alt="Stress Card"
            width={80}
            height={80}
            className="absolute top-[1%] right-0 md:right-[15%] lg:right-[40%] transform translate-x-1/2 -translate-y-1/2 z-40"
          />

          <Image
            src="/streffiecard.png"
            alt="Streffie Card"
            width={200}
            height={100}
            className="absolute top-[30%] right-0 md:right-[15%] lg:right-[12%] transform translate-x-1/2 -translate-y-1/2 z-40"
          />

          <Image
            src="/graph.png"
            alt="Graph Card"
            width={110}
            height={100}
            className="absolute top-[12%] right-0 md:right-[15%] lg:right-[9%] transform translate-x-1/2 -translate-y-1/2 z-40"
          />

          {/* Bottom-Left Card */}
          <div className="absolute bottom-1/6 left-1/4 transform -translate-x-full md:-translate-x-1/2 translate-y-1/2 w-[350px] p-4 bg-white rounded-xl shadow-md text-left z-30">
            <h4 className="text-md font-semibold text-blue-900">
              Holistic Wellness Tools
            </h4>
            <hr className=" border-black my-2" />
            <p className="text-xs text-gray-700">
              Users can access expressive journaling, expert-led sessions,
              customized wellness plans (based on the REACH model), and
              community support for daily mental health needs.
            </p>
          </div>

          {/* 6 Circle Images around "Holistic Wellness Tools" card */}
          <Image
            src="/baby.png"
            alt="User Avatar 3"
            width={40}
            height={40}
            className="absolute bottom-35 left-20 -translate-y-1/2 z-40"
          />
          <Image
            src="/prayer.png"
            alt="User Avatar 3"
            width={40}
            height={40}
            className="absolute bottom-45 left-29 -translate-y-1/2 z-40"
          />
          <Image
            src="/music.png"
            alt="User Avatar 3"
            width={40}
            height={40}
            className="absolute bottom-37 left-39 -translate-y-1/2 z-40"
          />
          <Image
            src="/medicine.png"
            alt="User Avatar 3"
            width={40}
            height={40}
            className="absolute bottom-37 left-100 -translate-y-1/2 z-40"
          />
          <Image
            src="/ai.png"
            alt="User Avatar 3"
            width={40}
            height={40}
            className="absolute bottom-37 left-112 -translate-y-1/2 z-40"
          />
          <Image
            src="/yoga.png"
            alt="User Avatar 5"
            width={60}
            height={60}
            className="absolute bottom-30 left-1/9 -translate-x-1/2 z-40"
          />

          {/* Bottom-Right Card */}
          <div className="absolute bottom-1/6 right-1/4 transform translate-x-full md:translate-x-1/2 translate-y-1/2 w-[350px] p-4 bg-white rounded-xl shadow-md text-left z-30">
            <h4 className="text-md font-semibold text-blue-900">
              Built for Individuals & Organizations
            </h4>
            <hr className=" border-black my-2" />
            <p className="text-xs text-gray-700">
              Whether you're an individual seeking peace of mind or a company
              aiming to boost employee well-being, Solh offers dashboards,
              assessments, and engagement tools for impactful results.
            </p>
          </div>

          {/*"Activity Reports"*/}
          <Image
            src="/report2.png"
            alt="Activity Reports Card"
            width={160}
            height={100}
            className="absolute bottom-[32%] right-0 md:right-[15%] lg:right-[10%] transform translate-x-1/2 translate-y-1/2 z-40"
          />
          <Image
            src="/report1.png"
            alt="Reports Card"
            width={160}
            height={100}
            className="absolute bottom-[2%] right-0 md:right-[15%] lg:right-[6%] transform translate-x-1/2 -translate-y-1/2 z-40"
          />
        </div>
      </div>
    </section>
  );
}
