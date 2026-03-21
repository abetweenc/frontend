import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Journey({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-white py-16 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair text-4xl lg:text-5xl text-center text-[#111111] mb-16 lg:mb-24">
          {title || "Your journey to ABC"}
        </h2>

        <div className="flex flex-col gap-20 lg:gap-32 w-full">
          {cards &&
            cards.map((card: any, index: number) => {
              const imageUrl = getStrapiMedia(card.image?.url);
              // Alternates the layout: Even indices (0, 2) have image on left, odd (1) on right
              const isEven = index % 2 === 0;

              return (
                <div
                  key={card.id || index}
                  className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full"
                >
                  {/* Image Container */}
                  <div
                    className={`w-full lg:w-1/2 flex justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={card.title || "Journey step"}
                        width={500}
                        height={500}
                        className="w-full max-w-md h-auto object-contain"
                        unoptimized
                      />
                    )}
                  </div>

                  {/* Text Container */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-col items-start ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <p className="font-playfair text-5xl lg:text-6xl text-[#B0B0B0] mb-4 lg:mb-6">
                      {card.count}
                    </p>

                    <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-[#111111] mb-4">
                      {card.title}
                    </h3>

                    <p className="text-[#555555] text-sm lg:text-base leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {card.lists && card.lists.length > 0 && (
                      <ul className="flex flex-col gap-3">
                        {card.lists.map((item: any, i: number) => (
                          <li
                            key={item.id || i}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#888888] shrink-0 mt-2"></div>
                            <span className="text-[#555555] text-sm lg:text-base leading-relaxed">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
