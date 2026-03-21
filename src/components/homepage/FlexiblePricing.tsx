import Link from "next/link";

export default function FlexiblePricing({ data }: any) {
  const { title, cards, cta } = data || {};

  return (
    <div className="py-12 px-6 gap-10 lg:px-0 lg:gap-20 lg:py-16 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-3xl leading-tight lg:leading-20 lg:text-6xl text-center">
        {title}
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto gap-8 lg:gap-20">
        {cards &&
          cards.map((card: any, index: number) => (
            <div
              key={index || card.id}
              className="border border-[#98A0AA] bg-[#EEEEEE] w-full max-w-sm lg:w-fit py-10 px-8 lg:min-h-120 lg:px-15 lg:py-10 flex flex-col items-center justify-center gap-6 lg:gap-8"
            >
              <p className="text-[#A1A1AA] text-4xl lg:text-5xl font-playfair text-center">
                {card.title}
              </p>

              <p className="font-playfair text-2xl lg:text-xl">{card.price}</p>

              <p className="text-[#4A5565] text-center lg:text-sm">
                {card.days}
              </p>

              <div className="flex flex-col items-center gap-3 lg:gap-3">
                {card.lists &&
                  card.lists.map((list: any, listIndex: number) => (
                    <div
                      className="flex items-center gap-2 lg:gap-2"
                      key={listIndex || list.id}
                    >
                      <div className="w-1.5 h-1.5 lg:w-1 lg:h-1 bg-[#4A5565] rounded-full shrink-0"></div>
                      <p className="text-[#4A5565] text-sm lg:text-xs text-center">
                        {list.text}
                      </p>
                    </div>
                  ))}
              </div>

              <Link
                href={card.cta?.href || "/contact"}
                className="text-[#333333] text-base px-6 py-3 lg:px-5 lg:py-3 border border-[#CCCCCC] hover:bg-white transition-colors text-center"
              >
                {card.cta?.text || "Get Started"}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
