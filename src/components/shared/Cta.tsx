import Link from "next/link";

export default function Cta({ data }: any) {
  const { title, description, cta } = data || {};

  return (
    <div className="w-full bg-[#222222] py-14 px-6 lg:py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair text-2xl lg:text-4xl text-white mb-4 lg:mb-5 leading-tight">
          {title || "Join Us on This Journey"}
        </h2>

        <p className="text-[#B3B3B3] text-sm lg:text-base leading-relaxed mb-10 max-w-4xl">
          {description}
        </p>

        {cta && (
          <Link
            href={cta.href || "/contact"}
            className="bg-white text-[#111111] px-8 py-3.5 lg:px-10 lg:py-4 rounded-[2px] hover:bg-gray-100 transition-colors text-sm lg:text-base font-medium"
          >
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  );
}
