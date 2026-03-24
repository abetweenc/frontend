import Link from "next/link";

export default function FlexiblePricing({ data }: any) {
  const { title, cards, cta } = data || {};

  return (
    <div className="py-10 px-6 gap-8 lg:px-0 lg:gap-16 lg:py-14 w-full flex flex-col items-center justify-center">
      <p className="font-playfair text-2xl leading-tight lg:leading-16 lg:text-5xl text-center">
        {title}
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto gap-6 lg:gap-16">
        {cards &&
          cards.map((card: any, index: number) => (
            <div
              key={index || card.id}
              className="border-2 border-[#ccd1d8] bg-[#EEEEEE] w-full max-w-sm lg:w-fit py-8 px-7 lg:min-h-110 lg:px-12 lg:py-8 flex flex-col items-center justify-center gap-5 lg:gap-6"
            >
              <p className="text-[#A1A1AA] text-3xl lg:text-4xl font-playfair text-center">
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
                      className="flex items-center gap-2 lg:gap-2 "
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
