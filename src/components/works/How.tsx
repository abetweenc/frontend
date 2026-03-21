export default function How({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="w-full bg-white py-16 px-6 lg:py-24 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 lg:gap-6">
        <h1 className="font-playfair text-4xl lg:text-6xl text-[#111111] leading-tight">
          {title || "How It Works"}
        </h1>

        <p className="text-[#666666] text-base lg:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}
