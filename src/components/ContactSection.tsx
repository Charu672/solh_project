"use client";

import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { DM_Sans, Inter } from "next/font/google";
const dmsans = DM_Sans({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  // No 'variable' needed if you're not extending tailwind.config.js
});
const inter = Inter({
  subsets: ["latin"], // This is standard for most Latin-based content
  weight: ["400", "500", "600", "700"], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});
export default function ContactSection() {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2
        className={`text-xl md:text-3xl text-center font-medium ${dmsans.className} text-black mb-6`}
      >
        Let&apos;s Build a Healthier, Happier Workplace
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image and its Background */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative lg:pr-6">
          <div className="relative w-[280px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[450px] lg:h-[300px] bg-gradient-to-b from-purple-200 to-orange-200  rounded-lg shadow-md flex items-center justify-center">
            <img
              src="/contact.png"
              alt="Workplace Illustration"
              // width={300}
              // height={180}
              className="object-contain p-2 animate-pulse md:h-78 md:w-80 h-48 w-48"
            />
          </div>
        </div>

        <div className="flex-1 w-full mt-8 lg:mt-0">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-0">
            <div className="relative w-full">
              <label
                htmlFor="firstName"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="lastName"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-md text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <MdOutlineMailOutline className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-base" />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="role"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="Enter your Role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="company"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="employees"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Employees
              </label>
              <input
                type="text"
                id="employees"
                name="employees"
                placeholder="Enter Employee Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-xs text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            {/* Message textarea takes full width */}
            <div className="relative md:col-span-2 w-full">
              <label
                htmlFor="message"
                className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                className="border border-gray-300 pt-4 pb-2 px-4 rounded-md w-full placeholder-gray-500 text-black text-sm h-20 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Button on next line, full width */}
            <div className="md:col-span-2 w-full">
              <button
                type="submit"
                className={`bg-[#3973E1] hover:bg-[#2f4ed6] ${inter.className} text-white font-bold rounded-md transition-colors duration-200 text-sm p-2`}
              >
                Schedule My Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
