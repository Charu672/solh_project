import Image from "next/image";
import {Inter } from "next/font/google";
const inter = Inter({
  subsets: ['latin'], // This is standard for most Latin-based content
  weight: ['400', '500', '600', '700'], // Common weights for Inter (Regular, Medium, SemiBold, Bold)
  // No 'variable' needed if you're not extending tailwind.config.js
});
export default function VideoSection() {
  return (
    <section className="px-6 md:px-12 py-10 text-center bg-white">
      <h2 className="text-3xl font-medium text-black mb-2">
        One Platform. Every Wellness Need Covered.
      </h2>
      <p className={`text-sm text-gray-600 ${inter.className} mb-8 max-w-lg mx-auto`}>
        Lorem Ipsum is simply dummy text of the printing compassionate community dolor lorem Ipsum is simply dummy.
      </p>
      <div className="relative w-full">
        <Image
          src="/video.png"
          alt="Video Preview"
          width={1100}
          height={675}
          className="rounded-lg mx-auto block"
        />
        {/* <div className="absolute inset-0 flex justify-center items-center">
          <button className="bg-white p-3 rounded-full shadow-lg">
            <Image src="/play-icon.svg" alt="Play" width={30} height={30} />
          </button>
        </div> */}
      </div>
    </section>
  );
}