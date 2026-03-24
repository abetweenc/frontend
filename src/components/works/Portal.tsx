export default function Portal({ data }: any) {
  const { tag, title, description } = data || {};

  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20">
      <div className="max-w-7xl mx-auto bg-[#F4F5F6] rounded-xl py-14 px-6 lg:py-16 lg:px-10 flex flex-col items-center text-center">
        {/* Pill Tag */}
        {tag && (
          <div className="bg-white border border-[#EAEAEE] shadow-sm rounded-full px-6 py-2 mb-8">
            <span className="text-[#666666] text-xs lg:text-sm font-medium tracking-wide">
              {tag}
            </span>
          </div>
        )}

        {/* Heading */}
        <h2 className="font-playfair text-2xl lg:text-4xl text-[#111111] mb-5">
          {title || "Digital Portal in Development"}
        </h2>

        {/* Description */}
        <p className="text-[#555555] text-base lg:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
}
