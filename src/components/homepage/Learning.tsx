import Link from "next/link";

export default function Learning({ data }: any) {
  const { title, cta } = data || {};

  return (
    <div className="w-full bg-[#F5F5F5] py-14 px-6 lg:py-20 flex flex-col items-center justify-center border-y border-gray-200">
      <h2 className="font-playfair text-2xl lg:text-4xl text-center text-[#111111] mb-8">
        {title || "Find a Learning Hub Near You"}
      </h2>

      <div className="flex flex-col lg:flex-row items-center w-full max-w-2xl gap-3 mb-8">
        {/* Input Field with Search Icon */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3.5 border border-[#CCCCCC] rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white text-base text-gray-800 placeholder-gray-400"
            placeholder="Enter your city or region..."
          />
        </div>

        <button className="w-full lg:w-auto px-10 py-3.5 bg-[#1E1E1E] cursor-pointer text-white rounded-sm hover:bg-[#333333] transition-colors text-base font-medium shrink-0">
          Search
        </button>
      </div>

      {cta && (
        <Link
          href={cta.href || "#"}
          className="flex items-center gap-2 text-[#444444] text-sm lg:text-base cursor-pointer hover:text-black transition-colors"
        >
          {cta.text}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
