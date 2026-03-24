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
    <div className="py-10 px-6 gap-8 lg:px-0 lg:gap-20 lg:py-14 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-2xl leading-tight lg:leading-16 lg:text-5xl text-center">
        {title}
      </p>

      <div className="w-full flex flex-col lg:flex-row items-stretch lg:px-24 gap-5 lg:gap-8">
        {cards &&
          cards.map((card: any, index: number) => {
            const imageUrl = getStrapiMedia(card.icon?.url);
            if (!imageUrl) return null;
            return (
              <div
                key={card.id || index} // Added missing React key prop
                className={`${cardColors[index % cardColors.length]} w-full flex flex-col px-5 py-8 gap-6 lg:px-8 lg:py-16 items-center justify-center lg:gap-12`}
              >
                <Image
                  src={imageUrl}
                  alt={card.title || "icon"}
                  width={200}
                  height={200}
                  className="w-16 h-auto lg:w-13"
                  unoptimized
                />

                <div className="flex flex-col items-center justify-center gap-3 lg:gap-6">
                  <p className="font-playfair text-lg lg:text-xl text-white text-center">
                    {card.title}
                  </p>

                  <p className="text-center text-white text-sm">
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
