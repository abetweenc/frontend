export default function Questions({ data }: any) {
  const { title, cards } = data || {};

  return (
    <div className="w-full bg-[#F4F4F4] py-14 px-6 lg:py-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="font-playfair text-2xl lg:text-4xl text-[#111111] mb-10 lg:mb-14 text-center">
          {title || "Common Questions Asked"}
        </h2>

        {/* FAQ Cards */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
          {cards &&
            cards.map((card: any, index: number) => (
              <div
                key={card.id || index}
                className="bg-white border border-[#EAEAEE] p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 shadow-sm rounded-[2px]"
              >
                {/* Question */}
                <h3 className="font-playfair text-lg lg:text-xl text-[#111111]">
                  {card.question}
                </h3>

                {/* Answer */}
                <p className="text-[#666666] text-sm lg:text-base leading-relaxed">
                  {card.answer}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
