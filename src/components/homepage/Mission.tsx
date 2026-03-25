export default function Mission({ data }: any) {
  const { cards } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 border-b border-gray-200 lg:pl-30">
      <div className="max-w-310 mx-auto flex flex-wrap items-start gap-y-10">
        {cards &&
          cards.map((card: any, index: number) => (
            <div
              key={card.id || index}
              className="flex flex-col gap-6 w-full md:w-1/2"
            >
              <h2 className="font-playfair text-3xl lg:text-5xl text-[#111111] leading-tight">
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
