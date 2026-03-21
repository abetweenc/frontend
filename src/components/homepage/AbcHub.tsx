import Image from "next/image";

export default function AbcHub({ data }: any) {
  const { title, lists, description, image } = data || {};

  return (
    <div className="py-12 px-6 gap-10 lg:px-0 lg:gap-30 lg:py-16 flex flex-col items-center justify-center">
      
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-10">
        <p className="font-playfair text-3xl leading-tight lg:leading-20 lg:text-6xl text-center">
          {title}
        </p>
        {/* Added text-base and leading for mobile readability */}
        <p className="text-[#444444] text-base leading-relaxed lg:text-2xl lg:max-w-5xl text-center">
          {description}
        </p>
      </div>

      {/* Changed to flex-col for mobile to stack the list and image. Added gap-12 for spacing between them. */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:px-30 justify-between gap-12 lg:gap-10">
        
        {/* Added gap-8 so the list items aren't touching on mobile */}
        <div className="flex flex-col items-start gap-8 lg:gap-10 w-full lg:w-1/2">
          {lists &&
            lists.map((list: any, index: number) => (
              // Added missing key prop and a default gap-4 for the circle and text
              <div key={list.id || index} className="flex items-center gap-4 lg:gap-6 w-full">
                
                {/* Added w-16 h-16 and shrink-0 to prevent the circle from squishing on small screens */}
                <div className="border border-[#1E1E1EBF] w-16 h-16 lg:w-26 lg:h-26 p-2 lg:p-3 shrink-0 rounded-full flex items-center justify-center font-playfair text-center text-sm lg:text-base">
                  <p>{list.time}</p>
                </div>

                {/* Added gap-1 for the title and description */}
                <div className="flex flex-col items-start gap-1 lg:gap-2">
                  <p className="font-playfair text-xl lg:text-2xl">{list.title}</p>
                  <p className="text-[#444444] text-base">{list.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Added w-full and centered the image wrapper for mobile */}
        <div className="h-full w-full lg:w-auto flex justify-center">
          {image?.url && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
              width={600}
              height={600}
              alt={title || "image"}
              unoptimized
              // Added w-full max-w-md h-auto so the image scales perfectly on phones
              className="w-full max-w-md h-auto lg:max-w-none lg:w-160 object-cover"
            />
          )}
        </div>
      </div>
      
    </div>
  );
}