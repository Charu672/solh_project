import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-[#1C3B5A] pl-4">
        <Image src="/link2.png" alt="Solh_logo" width={70} height={70} />
      </div>
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 ">
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Solutions
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Platform
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Impact
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Resources
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-blue-800 transition-transform duration-200 hover:scale-105" 
        >
          Contact
        </a>
      </nav>
      <button
        className="hidden md:block bg-[#4E76F0] hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm
                   transition-transform duration-200 hover:scale-105" 
      >
        Request a Demo
      </button>
    </header>
  );
}
