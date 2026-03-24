import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

export default function AboutHeroSection({ data }: any) {
  const { title, description, image } = data || {};

  const imageUrl = getStrapiMedia(image?.url);

  if (!imageUrl) return null;

  return (
    <div className="lg:h-[70vh]">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between h-full px-6 py-14 lg:py-0 lg:-mt-10 lg:px-24 gap-10 lg:gap-0">
        <div className="flex items-start flex-col gap-5 lg:gap-8 w-full lg:w-auto">
          <h1 className="font-playfair text-3xl lg:text-5xl lg:max-w-2xl">
            {title}
          </h1>

          {/* Added base text-lg for mobile */}
          <p className="text-[#444444] text-base lg:text-xl font-light lg:max-w-lg">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-auto flex justify-center lg:block">
          <Image
            src={imageUrl || ""}
            alt={title || "Hero image"}
            width={500}
            height={500}
            // Added w-full max-w-md h-auto to keep the image responsive and well-proportioned on small screens
            className="object-cover object-center w-full max-w-xl h-auto lg:max-w-none lg:w-130"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
