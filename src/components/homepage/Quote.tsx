import Image from "next/image";

export default function Quote({ data }: any) {
  const { quote, name, address } = data || {};

  return (
    <div className="py-10 px-6 gap-8 lg:px-0 lg:gap-16 lg:py-14 w-full flex flex-col items-center justify-center">
      <Image
        src={"/quote.svg"}
        alt="image"
        width={200}
        height={200}
        className="w-5 lg:w-16"
      />

      <p className="font-playfair text-lg lg:max-w-5xl lg:leading-9 lg:text-2xl text-center">
        {quote}
      </p>

      <div className="flex flex-col items-center justify-center">
        <p className="text-[#444444] font-medium text-lg">{name}</p>
        <p className="text-[#444444]">{address}</p>
      </div>
    </div>
  );
}
