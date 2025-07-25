import { CiLock } from "react-icons/ci";
import { LuHeartPulse } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import {Inter } from "next/font/google";
const inter = Inter({
  subsets: ['latin'], // This is standard for most Latin-based content
  weight: ['400', '500', '600', '700'], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});
export default function Features() {
  const features = [
    {
      title: "RealTime Dashboard",
      description: "Lorem ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: CiLock, // Removed 'color' prop as it will be dynamic on hover
    },
    {
      title: "AI Powered Interventions",
      description: "Lorem Ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: LuHeartPulse, // Removed 'color' prop
    },
    {
      title: "Custom Toolkits",
      description: "Lorem Ipsum is simply dummy text of the printing lorem Ipsum is simply dummy.",
      icon: HiOutlineUserGroup, // Removed 'color' prop
    },
  ];

  return (
    <section className="px-4 md:px-8 bg-white text-center"> {/* Adjusted padding */}
      {/* Container for the three feature cards */}
      <div className="flex flex-col md:flex-row gap-4 justify-center max-w-5xl mx-auto"> {/* Reduced gap, max-w */}
        {features.map((feature, index) => (
          <div
            key={index}
            // Add 'group' class to make this div a reference for group-hover
            // Apply default white background and gray text
            // Apply hover states for background and text colors
            className={`group p-5 rounded-xl shadow-lg flex-1 text-left cursor-pointer transition-all duration-300
                        bg-blue-50 text-gray-800 hover:bg-[#406AFF] hover:text-white`} // Changed default, added hover states
            style={{ minWidth: '250px', maxWidth: '350px' }} // Adjusted min/max width
          >
            {/* Icon Container */}
            <div
              // Apply default blue icon background and white text
              // Apply hover states for icon background and text colors
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mb-3
                          bg-[#406AFF] text-white group-hover:bg-white group-hover:text-[#406AFF]`} // Changed default, added hover states
            >
              <feature.icon size={20} /> {/* Reduced icon size */}
            </div>
            <h3 className={`font-semibold ${inter.className} text-lg mb-1.5`}>{feature.title}</h3> {/* Adjusted font size, mb */}
            <p className="text-sm">{feature.description}</p> {/* Adjusted text size */}
          </div>
        ))}
      </div>
    </section>
  );
}