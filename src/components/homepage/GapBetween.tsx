export default function GapBetween({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10 px-6 lg:px-0 lg:gap-8 lg:py-14 border-b border-gray-200">
      <p className="font-playfair text-2xl leading-tight lg:leading-16 lg:text-5xl lg:max-w-4xl text-center">
        {title}
      </p>

      <p className="text-center text-[#444444] text-sm lg:text-xl lg:max-w-6xl">
        {description}
      </p>
    </div>
  );
}
