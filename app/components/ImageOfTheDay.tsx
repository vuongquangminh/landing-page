import { Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ImageOfTheDay() {
  return (
    <div className="container mx-auto">
      <Row gutter={32}>
        <Col span={9}>
          <div className="">
            <div className="">
              <p className="uppercase tracking-[3px] text-sm">Today</p>
              <h2>Image Of The Day</h2>
            </div>
            <div className="">
              <h3>“Cosmic Dawn” Screening at Greenbelt Cinema</h3>
              <p>
                Attendees line up to enter the theater for a screening of the
                new NASA+ documentary “Cosmic Dawn: The Untold Story of the
                James Webb Space Telescope,” Wednesday, June 11, 2025, at the
                Greenbelt Cinema in Greenbelt, Maryland. Featuring
                never-before-seen footage, Cosmic Dawn offers an unprecedented
                glimpse into the assembly, testing, and launch of NASA’s James
                Webb Space Telescope.
              </p>
              <a href="https://www.nasa.gov/image-of-the-day/" target="_self" className="flex items-center">
                <span className="text-black">Browse Image Archive </span>
                <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
                  <MoveUpRight color="white" size={14} />
                </div>
              </a>
            </div>
          </div>
        </Col>
        <Col span={15} className="bg-[#f6f6f6] !flex justify-center">
          <Image
            src="/images/imageoftheday.webp"
            alt="feature new"
            width={400}
            height={400}
            className="h-full object-cover"
          />
        </Col>
      </Row>
    </div>
  );
}
