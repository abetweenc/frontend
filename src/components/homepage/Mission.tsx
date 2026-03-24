export default function Mission({ data }: any) {
  const { cards } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 border-b border-gray-200 lg:pl-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-28 items-start">
        {cards &&
          cards.map((card: any, index: number) => (
            <div key={card.id || index} className="flex flex-col gap-6">
              <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] leading-tight">
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
