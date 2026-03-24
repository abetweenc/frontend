export default function HowItWorks({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="py-10 px-6 gap-8 lg:px-0 lg:gap-14 lg:py-14 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-2xl leading-tight lg:leading-16 lg:text-5xl text-center">
        {title}
      </p>

      <div className="w-full flex flex-col lg:flex-row items-start lg:px-24 gap-8 lg:gap-16">
        {cards &&
          cards.map((card: any, index: number) => {
            return (
              <div
                key={card.id || index}
                className="flex items-center justify-center flex-col gap-4 lg:gap-6 w-full"
              >
                <p className="text-[#A1A1AA] text-4xl lg:text-5xl font-playfair">
                  {card.count}
                </p>

                <p className="font-playfair text-lg lg:text-2xl text-center">
                  {card.title}
                </p>

                <p className="text-center text-base lg:text-sm max-w-sm lg:max-w-66 text-[#4A5565] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
