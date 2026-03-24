export default function WaitList() {
  return (
    <div className="w-full bg-white py-14 px-6 lg:py-20 flex flex-col items-center justify-center text-center border-b border-gray-200">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 lg:gap-5">
        <h1 className="font-playfair text-3xl lg:text-5xl text-[#111111] leading-tight">
          Join the Waiting List
        </h1>

        <p className="text-[#666666] text-base lg:text-lg leading-relaxed">
          Be among the first families to experience the ABC difference. Complete
          the form below and we'll contact you within 48 hours.
          {/* <label htmlFor=""></label> */}
        </p>
      </div>
    </div>
  );
}
