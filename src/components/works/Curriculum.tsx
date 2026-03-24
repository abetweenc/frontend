import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Curriculum({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair text-2xl lg:text-4xl text-center text-[#111111] mb-10 lg:mb-14">
          {title || "Curriculum & Learning Support"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = getStrapiMedia(card.icon?.url);

              return (
                <div
                  key={card.id || index}
                  className="bg-[#F4F5F6] border border-[#98A0AA] shadow-xl py-8 px-5 lg:px-7 lg:py-10 flex flex-col items-center text-center rounded-[2px]"
                >
                  {iconUrl && (
                    <div className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center shrink-0">
                      <Image
                        src={iconUrl}
                        alt={card.title || "Icon"}
                        width={48}
                        height={48}
                        // Added opacity-70 to match the soft, muted look of the icons in the design
                        className="w-full h-full object-contain opacity-70"
                        unoptimized
                      />
                    </div>
                  )}

                  <h3 className="font-playfair text-lg lg:text-lg font-semibold text-[#111111] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-[#666666] text-sm leading-relaxed">
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
