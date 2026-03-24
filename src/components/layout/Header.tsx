"use client";

import { useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Hard-coded navigation values
const NAV_LINKS = [
  { text: "About Us", href: "/about" },
  { text: "Our Approach", href: "/approach" },
  { text: "How it Works", href: "/works" },
];

export default function Header({ data }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  if (!data || !data.logo) return null;

  const { logo, cta } = data;
  const imageUrl = getStrapiMedia(logo.url);

  if (!imageUrl) return null;

  return (
    <header className="relative flex items-center justify-between px-5 py-4 lg:px-20 lg:py-5 bg-white z-50">
      <Link href={"/"}>
        <Image
          src={imageUrl}
          alt={"logo"}
          width={200}
          height={200}
          className="w-32 lg:w-40"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center lg:gap-10">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[#111111] lg:text-md hover:text-black transition-colors ${
                isActive ? "font-bold" : "font-normal"
              }`}
            >
              {link.text}
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="hidden lg:block border border-[#CCCCCC] lg:px-5 lg:py-3">
        <Link href={cta.href} className="text-[#333333] lg:text-md">
          {cta.text}
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        className="block lg:hidden text-gray-800 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-5 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg ${
                  isActive
                    ? "font-medium text-black"
                    : "font-normal text-[#111111]"
                }`}
              >
                {link.text}
              </Link>
            );
          })}

          {cta && (
            <div className="border border-[#CCCCCC] px-6 py-3 mt-2">
              <Link
                href={cta.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#333333] text-lg"
              >
                {cta.text}
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
