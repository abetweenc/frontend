import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Safe({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-[#F4F4F4] py-14 px-6 lg:py-20">
      <div className="max-w-320 mx-auto flex flex-col items-center lg:pl-20">
        {title && (
          <h2 className="font-playfair text-2xl lg:text-4xl text-center text-[#111111] mb-10 lg:mb-14">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const iconUrl = getStrapiMedia(card.icon?.url);

              return (
                <div
                  key={card.id || index}
                  className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start justify-between w-full"
                >
                  {/* Text Content */}
                  <div className="flex flex-col gap-4 lg:gap-5 w-full items-start">
                    <h3 className="font-playfair text-2xl lg:text-3xl text-[#111111] leading-tight lg:max-w-lg">
                      {card.title}
                    </h3>

                    <div className="flex items-center justify-center">
                      <p className="text-[#555555] text-base lg:text-lg leading-relaxed lg:max-w-sm">
                        {card.description}
                      </p>
                      {iconUrl && (
                        <div className="w-20 h-20 lg:w-50 lg:h-24 shrink-0 flex items-start justify-center mt-4 sm:mt-0">
                          <Image
                            src={iconUrl}
                            alt={card.title || "Icon"}
                            width={200}
                            height={200}
                            className="w-full h-full object-contain lg:w-100"
                            unoptimized
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
