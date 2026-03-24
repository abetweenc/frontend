import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function Founder({ data }: any) {
  const { title, name, designation, content, image } = data || {};
  const imageUrl = getStrapiMedia(image?.url);

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
          <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] leading-tight">
            {title || "Meet Our Founder"}
          </h2>

          <div className="flex flex-col gap-2">
            <h3 className="font-playfair text-xl lg:text-2xl text-[#111111]">
              {name}
            </h3>
            <p className="font-sans font-medium text-[#4A5568] text-sm lg:text-base">
              {designation}
            </p>
          </div>

          <p className="text-[#555555] text-base lg:text-lg leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full h-full flex justify-center lg:justify-end order-1 lg:order-2">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name || "Founder"}
              width={600}
              height={500}
              className="w-full h-auto object-cover lg:max-w-2xl border border-gray-200"
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  );
}
