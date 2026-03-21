import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/utils";

export default function Footer({ data }: any) {
  if (!data) return null;

  const { description, rights, logo, platform, community, contact } = data;
  const logoUrl = getStrapiMedia(logo?.url);

  return (
    <footer className="bg-[#1A1A1A] text-[#A3A3A3] pt-16 pb-8 px-6 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col gap-6">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="ABC Logo"
                width={100}
                height={40}
                className="w-fit h-8 object-contain"
                unoptimized
              />
            ) : (
              <h2 className="text-white text-3xl font-bold tracking-tight">
                ABC
              </h2>
            )}
            <p className="text-sm leading-relaxed whitespace-pre-line max-w-sm">
              {description}
            </p>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">
              Platform
            </h3>
            <ul className="flex flex-col gap-4">
              {platform?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">
              Community
            </h3>
            <ul className="flex flex-col gap-4">
              {community?.map((item: any) => (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              {contact?.map((item: any) => {
                const iconUrl = getStrapiMedia(item.icon?.url);
                const isLinkable =
                  item.info.includes("@") || item.info.includes("+");

                return (
                  <li key={item.id} className="flex items-center gap-3">
                    {iconUrl && (
                      <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                        <Image
                          src={iconUrl}
                          alt="icon"
                          width={20}
                          height={20}
                          className="w-full h-full object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        isLinkable
                          ? "underline decoration-[#A3A3A3] underline-offset-4 hover:text-white transition-colors cursor-pointer"
                          : ""
                      }`}
                    >
                      {item.info}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-[#333333] mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>{rights || "© 2024 ABC Learning Hubs. All rights reserved."}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
