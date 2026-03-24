import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Safe({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-[#F4F4F4] py-14 px-6 lg:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair text-2xl lg:text-4xl text-center text-[#111111] mb-10 lg:mb-14">
          {title || "Safety & Compliance Standards"}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = getStrapiMedia(card.icon?.url);

              return (
                <div
                  key={card.id || index}
                  // w-full on mobile, 2 columns on tablet, 3 columns on desktop
                  className="bg-white border border-[#EAEAEE] shadow-[0_2px_10px_rgba(0,0,0,0.03)] py-8 px-5 lg:px-7 flex flex-col items-center text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] rounded-[2px]"
                >
                  {iconUrl && (
                    <div className="w-10 h-10 mb-3 lg:mb-4 flex items-center justify-center shrink-0">
                      <Image
                        src={iconUrl}
                        alt={card.title || "Icon"}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  )}

                  <h3 className="font-playfair text-lg lg:text-xl text-[#111111] mb-3">
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
    </div>
  );
}
