export default function GapBetween({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 px-6 lg:px-0 lg:gap-10 lg:py-16">
      <p className="font-playfair text-3xl leading-tight lg:leading-20 lg:text-6xl lg:max-w-5xl text-center">
        {title}
      </p>

      <p className="text-center text-[#444444] text-base lg:text-lg lg:max-w-5xl">
        {description}
      </p>
    </div>
  );
}
