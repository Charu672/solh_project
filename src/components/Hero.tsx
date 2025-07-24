import Image from "next/image";
import { MdArrowOutward } from "react-icons/md"; // Corrected import to MdArrowOutward

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-12 pt-10 pb-0 bg-gradient-to-b from-white to-blue-100"
    // style={{
    //   backgroundImage: "url('/Gradient.png')", 
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    // }}
    > 
      {/* Main content - text and buttons */}
      <div className="space-y-6 text-center flex flex-col justify-center items-center lg:w-3/4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mx-auto">
          Transform Your Workplace with Actionable Mental Health Intelligence
        </h1>
        <p className="text-gray-500 text-base md:text-md mx-auto max-w-3xl">
          Empower your HR and leadership teams with Solh’s AI powered dashboard
          to track stress, predict burnout, and implement timely wellbeing
          interventions.
        </p>
        <div className="flex justify-center items-center space-x-4 bg-white px-6 py-1 rounded-full shadow-lg">
          {/* Overlapping user images */}
          <div className="flex -space-x-4">
            <Image
              src="/user.jpg"
              alt="User 1"
              width={40}
              height={40}
              className="rounded-full border-2 border-white object-cover"
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
        <div className="flex gap-4 flex-row flex-wrap justify-center z-20">
          <button className="bg-blue-600 hover:bg-blue-800 hover:text-white text-white border border-gray-50 shadow font-medium px-6 rounded-lg flex items-center justify-center gap-2">
            Request a Demo
            <MdArrowOutward className="" />
          </button>
          <button className=" border border-gray-50 shadow bg-blue-600 hover:bg-blue-800 hover:text-white text-white font-medium px-6 py-3 rounded-lg w-full sm:w-auto">
            Product Overview
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mt-[-80px]">
        {/* Left Circular Image Group */}
        <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[300px] flex justify-center items-center flex-shrink-0">
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
        <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[300px] flex justify-center items-center flex-shrink-0">
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