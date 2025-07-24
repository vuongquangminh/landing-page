"use client";
import "flowbite";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderApp = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "New", href: "/new" },
    { label: "Explore", href: "/explore" },
  ];
  return (
    <nav className="bg-[#e9e9e9] border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a
          href="./"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/nasa-logo.svg"
            className="h-8"
            alt="Flowbite Logo"
            width={64}
            height={64}
          />

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Nasa
          </span>
        </a>
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 
                  md:hover:bg-transparent md:border-0 md:p-0
                  dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700
                  ${
                    isActive
                      ? "text-blue-600 font-semibold dark:text-blue-500"
                      : "text-gray-900 dark:text-white md:hover:text-blue-600 md:dark:hover:text-blue-500"
                  }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
