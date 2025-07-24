"use client";

import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md"; 

export default function ContactSection() {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8"> 
      <h2 className="text-xl md:text-3xl text-center font-semibold text-black mb-6"> 
            Let’s Build a Healthier, Happier Workplace
          </h2>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8"> 
        {/* Left Image and its Background */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative lg:pr-6"> 
          <div className="relative w-[280px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[450px] lg:h-[300px] bg-gradient-to-b from-purple-200 to-orange-200  rounded-lg shadow-md flex items-center justify-center">
            <Image
              src="/contact.png" 
              alt="Workplace Illustration"
              width={300} 
              height={180} 
              className="object-contain p-2" 
            />
          </div>
        </div>

        <div className="flex-1 w-full mt-8 lg:mt-0"> 
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3"> 
            <div className="relative">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm
                name="firstName"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm
                name="lastName"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, pr, set text-sm
                name="email"
              />
              <MdOutlineMailOutline className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-base" /> {/* Adjusted icon position, size */}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your Role"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm
                name="role"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your Company Name"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm
                name="company"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Employee Name"
                className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm
                name="employees"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-2 rounded-md w-full placeholder-gray-500 text-black text-sm col-span-1 md:col-span-2 h-24 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500" // Reduced padding, set text-sm, reduced height
              name="message"
            />
            <button
              type="submit"
              className="bg-[#406AFF] hover:bg-[#2f4ed6] text-white font-semibold py-2.5 rounded-md  transition-colors duration-200 text-sm" // Reduced padding, set text-sm
            >
              Schedule My Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}