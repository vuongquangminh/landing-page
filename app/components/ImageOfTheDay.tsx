"use client";

import { Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageOfTheDay() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 650);

    checkWidth(); // Gọi lần đầu

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <div className="container mx-auto">
      <Row gutter={32} className="px-16 md:px-0">
        <Col span={24} md={9} className="px-20">
          <div className="md:pr-30">
            <div className="">
              <p className="uppercase tracking-[3px] text-sm">Today</p>
              <h2 className="text-5xl font-bold font-fantasy">
                Image Of The Day
              </h2>
            </div>
            <div className="my-6 md:my-24">
              {isMobile && (
                <div className="bg-[#f6f6f6] flex justify-center">
                  <Image
                    src="/images/imageoftheday.webp"
                    alt="feature new"
                    width={400}
                    height={400}
                    className="h-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-medium">
                “Cosmic Dawn” Screening at Greenbelt Cinema
              </h3>
              <p className="text-base my-6 italic">
                Attendees line up to enter the theater for a screening of the
                new NASA+ documentary “Cosmic Dawn: The Untold Story of the
                James Webb Space Telescope,” Wednesday, June 11, 2025, at the
                Greenbelt Cinema in Greenbelt, Maryland. Featuring
                never-before-seen footage, Cosmic Dawn offers an unprecedented
                glimpse into the assembly, testing, and launch of NASA’s James
                Webb Space Telescope.
              </p>
              <a
                href="https://www.nasa.gov/image-of-the-day/"
                target="_self"
                className="flex items-center text-xl font-medium"
              >
                <span className="text-black">Browse Image Archive </span>
                <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
                  <MoveUpRight color="white" size={14} />
                </div>
              </a>
            </div>
          </div>
        </Col>
        {!isMobile && (
          <Col span={24} md={15} className="bg-[#f6f6f6] !flex justify-center ">
            <Image
              src="/images/imageoftheday.webp"
              alt="feature new"
              width={400}
              height={400}
              className="h-full object-cover"
            />
          </Col>
        )}
      </Row>
    </div>
  );
}
