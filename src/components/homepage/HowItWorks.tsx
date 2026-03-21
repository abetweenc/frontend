export default function HowItWorks({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="py-12 px-6 gap-10 lg:px-0 lg:gap-16 lg:py-16 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-3xl leading-tight lg:leading-20 lg:text-6xl text-center">
        {title}
      </p>

      <div className="w-full flex flex-col lg:flex-row items-center lg:px-30 gap-10 lg:gap-20">
        {cards &&
          cards.map((card: any, index: number) => {
            return (
              <div
                key={card.id || index}
                className="flex items-center justify-center flex-col gap-4 lg:gap-6 w-full"
              >
                <p className="text-[#A1A1AA] text-5xl lg:text-6xl font-playfair">
                  {card.count}
                </p>

                <p className="font-playfair text-xl lg:text-3xl text-center">
                  {card.title}
                </p>

                <p className="text-center text-base lg:text-sm max-w-sm lg:max-w-65 text-[#4A5565] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
