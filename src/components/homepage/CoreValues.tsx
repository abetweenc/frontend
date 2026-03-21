import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function CoreValues({ data }: any) {
  const { title, cards } = data || {};

  const cardColors = [
    "bg-[#967BB677]",
    "bg-[#C2B280]",
    "bg-[#3B719F]",
    "bg-[#8A9A5B]",
  ];

  return (
    <div className="py-12 px-6 gap-10 lg:px-0 lg:gap-10 lg:py-16 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-3xl leading-tight lg:leading-20 lg:text-6xl text-center">
        {title}
      </p>

      <div className="w-full flex flex-col lg:flex-row items-center lg:px-30 gap-6 lg:gap-10">
        {cards &&
          cards.map((card: any, index: number) => {
            const imageUrl = getStrapiMedia(card.icon?.url);
            if (!imageUrl) return null;
            return (
              <div
                key={card.id || index} // Added missing React key prop
                className={`${cardColors[index % cardColors.length]} w-full h-auto flex flex-col px-6 py-10 gap-8 lg:px-10 lg:py-20 items-center justify-center lg:gap-16`}
              >
                <Image
                  src={imageUrl}
                  alt={card.title || "icon"}
                  width={200}
                  height={200}
                  className="w-16 h-auto lg:w-13"
                  unoptimized
                />

                <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
                  <p className="font-playfair text-xl lg:text-2xl text-white text-center">
                    {card.title}
                  </p>

                  <p className="text-center text-white text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
