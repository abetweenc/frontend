"use client";

import { useState } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";
import Link from "next/link";

export default function Header({ data }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data || !data.logo) return null;

  const { logo, links, cta } = data;
  const imageUrl = getStrapiMedia(logo.url);

  if (!imageUrl) return null;

  return (
    <header className="relative flex items-center justify-between px-5 py-4 lg:px-20 lg:py-5 bg-white z-50">
      <Link href={"/"}>
        <Image
          src={imageUrl}
          alt={"image"}
          width={200}
          height={200}
          className="w-32 lg:w-40"
        />
      </Link>

      <div className="hidden lg:flex items-center lg:gap-10">
        {links &&
          links.map((link: any) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-[#111111] lg:text-md hover:text-black hover:font-medium"
            >
              {link.text}
            </Link>
          ))}
      </div>

      <div className="hidden lg:block border border-[#CCCCCC] lg:px-5 lg:py-3">
        <Link href={cta.href} className="text-[#333333] lg:text-md">
          {cta.text}
        </Link>
      </div>

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

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-5 lg:hidden">
          {links &&
            links.map((link: any) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className="text-[#111111] text-lg hover:text-black hover:font-medium"
              >
                {link.text}
              </Link>
            ))}

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
