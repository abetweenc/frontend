export default function Working({ data }: any) {
  const { title, description, cards } = data || {};

  return (
    <div className="w-full bg-[#F4F4F4] py-14 px-6 lg:py-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 lg:gap-14">
        <div className="flex flex-col gap-4 lg:gap-6 items-center">
          <h2 className="font-playfair text-2xl lg:text-4xl text-[#111111] leading-tight">
            {title || "Working with Local Councils & Organizations"}
          </h2>
          <p className="text-[#555555] text-base lg:text-md leading-relaxed max-w-6xl">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {cards &&
            cards.map((card: any, index: number) => (
              <div
                key={card.id || index}
                className="bg-white border border-[#EAEAEE] py-4 px-6 lg:py-5 lg:px-10 shadow-sm rounded-[2px]"
              >
                <p className="text-[#64748B] text-sm lg:text-base font-medium">
                  {card.text}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
