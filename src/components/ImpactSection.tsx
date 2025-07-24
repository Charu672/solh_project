"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
export default function ImpactSection() {
  return (
    <section className="bg-[#F5F8FF] py-10 px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10">
          Proven Impact Across Industries
        </h2>

        {/* Stats */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-10 mb-12">
          <StatBox value="10,000" label="Personalized support plans" />
          <StatBox value="32%" label="Context aware recommendations" />
          <StatBox value="6x" label="Integrated ecosystem" />
          <StatBox value="4.8/5" label="Cultural relevance" />
        </div>

        {/* Testimonial */}
        <div className="bg-pink-50 rounded-xl shadow-lg p-6 max-w-5xl mx-auto text-left">
          <div className="flex flex-row  items-center gap-1 mb-2">
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <FaStar className="text-yellow-500"/>
            <p className="text-black text-sm">4.8</p>
          </div>
          <p className="text-gray-700">
            “Payments are the main interaction point between Accenture’s
            financial services clients and their customers, and we care to our
            relationships beyond that sector too.”
          </p>
          <div className="flex gap-3 items-center my-4">
            <Image
              src="/user.jpg"
              alt="Charlotta Harkin"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="">
              <h4 className="font-semibold text-black">Charlotta Harkin</h4>
              <p className="text-sm text-gray-500">Co-Founder, Hansa Digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-[#406AFF]">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
