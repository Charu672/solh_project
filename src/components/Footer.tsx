import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"; 
import Image from "next/image"; 

export default function Footer() {
  return (
    <footer className="bg-[#0C1220] text-white py-10 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-20">
        <div className="flex flex-col flex-">
          <Image
            src="/link2.png"
            alt="Solh Logo"
            width={60}
            height={30}
            className="mb-4"
          />
          <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-xl">
            We are mental health experienced therapists that are passionate
            about our goal on empowering you mentally with our wellness journey.
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter email address for newsletter …"
              className="w-full pl-4 pr-12 py-2 rounded-3xl bg-[#0C1220] text-sm text-gray-200 border border-gray-700 placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 text-gray-400 w-10 h-7 rounded-md flex items-center justify-center" 
            >
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col flex-wrap justify-between gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Platform
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms/Privacy
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 text-xl sm:self-start sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#406AFF]">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#406AFF]">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#406AFF]">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Solh. All rights reserved.</p>
      </div>
    </footer>
  );
}
