export default function Happens({ data }: any) {
  const { title, lists } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 border-t border-gray-100 lg:pr-65">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-50 items-center">
        {/* Left Column: Title */}
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <h2 className="font-playfair text-3xl lg:text-4xl text-[#111111] leading-tight text-center md:text-right">
            {title || "What Happens Next?"}
          </h2>
        </div>

        {/* Right Column: Numbered List */}
        <div className="flex flex-col gap-5 lg:gap-6 w-full md:w-1/2 max-w-md mx-auto md:mx-0">
          {lists &&
            lists.map((item: any, index: number) => (
              <div
                key={item.id || index}
                className="flex items-center gap-4 lg:gap-5"
              >
                {/* Number Badge */}
                <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 bg-[#222222] text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>

                {/* Text */}
                <p className="text-[#333333] text-base lg:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
        </div>
      </div>
      {/* l */}
    </div>
  );
}
