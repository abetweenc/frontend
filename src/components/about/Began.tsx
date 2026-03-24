export default function Began({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="w-full flex flex-col items-center justify-center py-14 px-6 lg:pb-20 lg:py-0">
      <h2 className="font-playfair text-3xl lg:text-4xl text-center text-[#111111] mb-8 lg:mb-10">
        {title || "How ABC Began"}
      </h2>

      <p className="text-[#555555] text-sm lg:text-base leading-relaxed lg:leading-[1.8] text-center max-w-5xl whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
