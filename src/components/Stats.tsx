import { MdArrowOutward } from "react-icons/md";
export default function Stats() {
  return (
    <section className="px-6 md:px-12 text-center bg-white">
      <h2 className="text-xl md:text-2xl font-medium mb-3 text-black">
        Your Team Is Stressed. And It's Costing You.
      </h2>
      <p className="text-gray-500 text-sm md:text-base mb-10">
        Here's what other people are finding most useful right now.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-6 max-w-7xl">
        <div className="bg-gradient-to-r from-blue-50 to-blue-200 px-6 py-8 rounded-lg shadow w-80">
          <h3 className="text-3xl font-semibold text-black">₹1.1 Lakh Cr</h3>
          <p className="text-sm text-gray-700">
            Annual loss due to poor employee health
          </p>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-200 px-6 py-8 rounded-lg shadow w-80">
          <h3 className="text-3xl font-semibold text-black">₹17.4 Lakh</h3>
          <p className="text-sm text-gray-700">Per employee burnout cost</p>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-200 px-6 py-8 rounded-lg shadow w-80">
          <h3 className="text-3xl font-semibold text-black">&lt;2%</h3>
          <p className="text-sm text-gray-700">
            Utilization of traditional EAPs
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-8 bg-blue-600 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg">
          Learn how Solh delivers 10x higher engagement
          <MdArrowOutward />
        </button>
      </div>
    </section>
  );
}
