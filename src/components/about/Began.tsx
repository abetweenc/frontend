export default function Began({ data }: any) {
  const { title, description } = data || {};

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-6 lg:pb-24 lg:py-0">
      <h2 className="font-playfair text-4xl lg:text-5xl text-center text-[#111111] mb-10 lg:mb-12">
        {title || "How ABC Began"}
      </h2>

      <p className="text-[#555555] text-base lg:text-lg leading-relaxed lg:leading-[1.8] text-center max-w-6xl whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
