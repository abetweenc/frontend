import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function ApproachHeroSection({ data }: any) {
  const { title, description, image } = data || {};
  const imageUrl = getStrapiMedia(image?.url);

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] leading-tight">
            {title || "The Learning Hubs"}
          </h2>

          <p className="text-[#555555] text-base lg:text-lg leading-relaxed whitespace-pre-line max-w-lg">
            {description}
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full flex justify-center lg:justify-end">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title || "The Learning Hubs"}
              width={600}
              height={400}
              className="w-full h-auto object-contain lg:max-w-2xl"
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  );
}
