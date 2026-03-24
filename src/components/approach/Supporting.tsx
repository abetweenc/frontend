import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Supporting({ data }: any) {
  const { title, image, lists } = data || {};
  const imageUrl = getStrapiMedia(image?.url);

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] mb-10 lg:mb-16 text-center">
          {title || "Supporting Parents Every Step"}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <div className="flex justify-center lg:justify-start w-full">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title || "Supporting Image"}
                width={600}
                height={500}
                className="w-full max-w-lg h-auto object-contain"
                unoptimized
              />
            )}
          </div>

          <div className="flex flex-col gap-8 lg:gap-12 w-full">
            {lists &&
              lists.map((item: any, index: number) => {
                const iconUrl = getStrapiMedia(item.icon?.url);

                return (
                  <div
                    key={item.id || index}
                    className="flex items-start gap-5 lg:gap-6"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center shrink-0">
                      {iconUrl && (
                        <Image
                          src={iconUrl}
                          alt={item.title || "Icon"}
                          width={24}
                          height={24}
                          className="w-6 h-6 lg:w-7 lg:h-7 object-contain brightness-0 invert"
                          unoptimized
                        />
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-1 lg:mt-1.5">
                      <h3 className="font-playfair text-lg lg:text-xl text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="text-[#666666] text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
