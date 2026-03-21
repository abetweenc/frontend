import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

export default function Drive({ data }: any) {
  const { title, Cards } = data || {};

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 lg:py-24 bg-[#F4F4F4]">
      <h2 className="font-playfair text-4xl lg:text-5xl text-center text-[#111111] mb-12 lg:mb-20">
        {title || "What Drives Us"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-center">
        {Cards &&
          Cards.map((card: any, index: number) => {
            const iconUrl = getStrapiMedia(card.icon?.url);

            return (
              <div
                key={card.id || index}
                className="flex flex-col items-center text-center gap-4 lg:gap-5 py-10 px-6 lg:py-16 lg:px-10 bg-transparent border border-transparent transition-all duration-300 hover:bg-white hover:border-[#E5E5E5] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer"
              >
                {iconUrl && (
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0 mb-2">
                    <Image
                      src={iconUrl}
                      alt={card.title || "icon"}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                )}

                <h3 className="font-playfair text-2xl lg:text-3xl text-[#111111]">
                  {card.title}
                </h3>

                <p className="text-[#666666] text-sm lg:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
