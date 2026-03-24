import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Journey({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl lg:text-5xl text-center text-[#111111] mb-16 lg:mb-24">
          {title || "Your journey to ABC"}
        </h2>

        <div className="flex flex-col gap-20 lg:gap-32 w-full lg:pl-20">
          {cards &&
            cards.map((card: any, index: number) => {
              const imageUrl = getStrapiMedia(card.image?.url);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={card.id || index}
                  // Using Grid instead of Flex for desktop locks the 50/50 split
                  className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-50 w-full"
                >
                  {/* Image Container */}
                  <div
                    className={`w-full flex justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {imageUrl && (
                      <div className="relative w-full lg:aspect-square max-w-xl overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt={card.title || "Journey step"}
                          fill
                          className="object-cover" // Changed to object-cover for consistency
                          unoptimized
                        />
                      </div>
                    )}
                  </div>

                  {/* Text Container */}
                  <div
                    className={`w-full flex flex-col justify-center ${
                      isEven ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"
                    }`}
                  >
                    <span className="font-playfair text-5xl lg:text-7xl text-[#E5E5E5] mb-4 block leading-none">
                      {card.count}
                    </span>

                    <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-[#111111] mb-4">
                      {card.title}
                    </h3>

                    <p className="text-[#555555] text-base lg:text-lg leading-relaxed mb-8">
                      {card.description}
                    </p>

                    {card.lists && card.lists.length > 0 && (
                      <ul className="flex flex-col gap-4">
                        {card.lists.map((item: any, i: number) => (
                          <li
                            key={item.id || i}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#888888] shrink-0 mt-2.5"></div>
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
