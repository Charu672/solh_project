import { CiLock } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { PiLightbulbFilament } from "react-icons/pi";
import { ImPower } from "react-icons/im";
export default function BuiltForWorkplace() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-medium text-black mb-8 text-center">
        Backed by Science. Built for new age Workplaces
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Improved Mental Health",
            description: "Effective work-life stress management contributes to better physical & mental health in a long run.",
            icon: GoPlus,
          },
          {
            title: "Enhanced Mental Resilience",
            description: "You will develop increased tolerance to stress and challenges and the ability to manage more stress in your role.",
            icon: ImPower,
          },
          {
            title: "Better Personal Relationships",
            description: "Reduced stress can lead to improved work-life balance and more effective communication with others.",
            icon: CiHeart,
          },
          {
            title: "Enhanced Work Productivity",
            description: "You will discover increased productivity and enhanced focus, best in your daily role at your work life.",
            icon: PiLightbulbFilament,
          }
        ].map((item, index) => (
          <div
            key={index}
            className="border border-blue-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div className="mb-3 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white"> {/* Icon background and color based on card color */}
              <item.icon size={20} />
            </div>
            <h3 className="text-md font-semibold text-black">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}