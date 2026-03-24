export default function How({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 lg:gap-6">
        <h1 className="font-playfair text-3xl lg:text-5xl text-[#111111] leading-tight">
          {title || "How It Works"}
        </h1>

        <p className="text-[#666666] text-base lg:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}
