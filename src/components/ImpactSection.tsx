"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {DM_Sans } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const dmsans = DM_Sans({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});

const testimonials = [
  {
    name: "Charolette Hanlin",
    role: "Co-Founder, Heroes Digital",
    image: "/user.jpg",
    text: "Payments are the main interaction between Accenture's financial services clients and their customers and are core to our relationships beyond that sector too.",
    rating: 5,
  },
  {
    name: "Charolette Hanlin",
    role: "Co-Founder, Heroes Digital",
    image: "/user.jpg",
    text: "Payments are the main interaction between Accenture's financial services clients and their customers and are core to our relationships beyond that sector too.",
    rating: 5,
  },
  {
    name: "Charolette Hanlin",
    role: "Co-Founder, Heroes Digital",
    image: "/user.jpg",
    text: "Payments are the main interaction between Accenture's financial services clients and their customers and are core to our relationships beyond that sector too.",
    rating: 5,
  },
];

export default function ImpactSection() {
  return (
    <section className="bg-[#F5F8FF] py-10 px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-black mb-10">
          Proven Impact Across Industries
        </h2>

        {/* Stats */}
        <div className={`flex flex-row flex-wrap justify-center items-center gap-10 mb-12 ${dmsans.className}`}>
          <StatBox value="10,000" label="Personalized support plans" />
          <StatBox value="32%" label="Context aware recommendations" />
          <StatBox value="6x" label="Integrated ecosystem" />
          <StatBox value="4.8/5" label="Cultural relevance" />
        </div>

        {/* Testimonial */}
        <div className="bg-pink-50 rounded-xl shadow-lg p-10 max-w-5xl mx-auto text-left">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          navigation={false}
          pagination={{ clickable: true }}
          className="testimonial-swiper"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">{t.text}</p>
                <div className="flex items-center gap-4 mb-8">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-black text-lg">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
