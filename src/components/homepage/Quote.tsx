import Image from "next/image";

export default function Quote({ data }: any) {
  const { quote, name, address } = data || {};

  return (
    <div className="py-12 px-6 gap-10 lg:px-0 lg:gap-20 lg:py-16 w-full flex flex-col items-center justify-center">
      <Image
        src={"/quote.svg"}
        alt="image"
        width={200}
        height={200}
        className="w-5 lg:w-20"
      />

      <p className="font-playfair text-xl lg:max-w-6xl lg:leading-10 lg:text-3xl text-center">
        {quote}
      </p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-[#444444] font-medium text-xl">{name}</p>
        <p className="text-[#444444]">{address}</p>
      </div>
    </div>
  );
}
