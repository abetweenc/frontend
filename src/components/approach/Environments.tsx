import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Environments({ data }: any) {
  const { cards } = data || {};

  if (!cards || cards.length === 0) return null;

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
        {cards.map((card: any, index: number) => {
          const iconUrl = getStrapiMedia(card.icon?.url);

          return (
            <div
              key={card.id || index}
              className="flex flex-col items-center text-center gap-4 lg:gap-5 py-10 px-7 lg:py-14 lg:px-8 border border-[#98A0AA] bg-[#EEEEEE] shadow-[0_4px_15px_rgba(0,0,0,0.05)] rounded-[2px]"
            >
              {/* Icon */}
              {iconUrl && (
                <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0 mb-2">
                  <Image
                    src={iconUrl}
                    alt={card.title || "Icon"}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="font-playfair text-xl lg:text-2xl text-[#111111]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] text-sm lg:text-base leading-relaxed whitespace-pre-line">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
