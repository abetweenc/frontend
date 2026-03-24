import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Future({ data }: any) {
  const { title, description, cards } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-3 lg:gap-5 mb-14 lg:mb-16 max-w-3xl">
          <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] leading-tight">
            {title || "Built for the Future"}
          </h2>
          <p className="text-[#666666] text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = getStrapiMedia(card.icon?.url);

              return (
                <div
                  key={card.id || index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  {iconUrl && (
                    <div className="w-10 h-10 lg:w-12 lg:h-12 mb-6 flex items-center justify-center shrink-0">
                      <Image
                        src={iconUrl}
                        alt={card.title || "Icon"}
                        width={48}
                        height={48}
                        // Added opacity to match the soft gray look in the design
                        className="w-full h-full object-contain opacity-60"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-playfair text-lg lg:text-xl font-semibold text-[#111111] mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#777777] text-sm leading-relaxed max-w-xs">
                    {card.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
