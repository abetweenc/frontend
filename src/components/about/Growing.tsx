export default function Growing({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-[#F4F4F4] py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-playfair text-3xl lg:text-4xl text-center text-[#111111] mb-10 lg:mb-14">
          {title || "Our Growing Impact"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {cards &&
            cards.map((card: any, index: number) => (
              <div
                key={card.id || index}
                className="flex flex-col items-center justify-center text-center bg-white border border-[#EAEAEE] py-10 px-5 gap-3 lg:gap-4 shadow-sm"
              >
                <p className="font-playfair text-4xl lg:text-5xl text-[#9CA3AF]">
                  {card.count}
                </p>
                <p className="text-[#555555] text-sm lg:text-base font-medium">
                  {card.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
