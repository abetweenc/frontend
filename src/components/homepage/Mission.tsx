export default function Mission({ data }: any) {
  const { cards } = data || {};

  return (
    <div className="w-full bg-white py-16 px-6 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-start">
        {cards &&
          cards.map((card: any, index: number) => (
            <div key={card.id || index} className="flex flex-col gap-6">
              <h2 className="font-playfair text-4xl lg:text-5xl text-[#111111] leading-tight">
                {card.title}
              </h2>
              <p className="text-[#555555] text-base lg:text-lg leading-relaxed max-w-sm whitespace-pre-line">
                {card.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
