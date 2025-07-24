import Image from "next/image";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-[#1C3B5A] pl-4">
        <Image
          src="/link2.png"
          alt="Solh_logo"
          width={70}
          height={70}
        />
      </div>
      <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 ">
        <a href="#" className="hover:text-blue-800">Home</a>
        <a href="#" className="hover:text-blue-800">Solutions</a>
        <a href="#" className="hover:text-blue-800">Platform</a>
        <a href="#" className="hover:text-blue-800">Impact</a>
        <a href="#" className="hover:text-blue-800">Resources</a>
        <a href="#" className="hover:text-blue-800">About</a>
        <a href="#" className="hover:text-blue-800">Contact</a>
      </nav>
      <button className="hidden md:block bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm">
        Request a Demo
      </button>
    </header>
  );
}
