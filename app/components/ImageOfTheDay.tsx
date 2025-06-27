"use client";

import { Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageOfTheDay({
  badge,
  title,
  subTitle,
  content,
  src,
  subSrc,
  textButton,
  urlButton,
  spanColLeft,
  spanColRight,
}: {
  badge?: string;
  title: string;
  subTitle?: string;
  content: string;
  src: string;
  subSrc?: string;
  textButton?: string;
  urlButton?: string;
  spanColLeft: number;
  spanColRight: number;
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 650);

    checkWidth(); // Gọi lần đầu

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);
  return (
    <Row gutter={32} className="px-16 md:px-0 container mx-auto py-20">
      <Col span={24} md={spanColLeft ?? 12} className="px-20">
        <div className="md:pr-30">
          <div className="">
            <p className="uppercase tracking-[3px] text-sm">{badge ?? ""}</p>
            <h2 className="text-5xl font-bold font-fantasy">{title}</h2>
          </div>
          <div className="my-6 md:my-24">
            {isMobile && (
              <div className="bg-[#f6f6f6] flex justify-center items-center">
                <Image
                  src={src}
                  alt="feature new"
                  width={400}
                  height={400}
                  className="h-full object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-medium">{subTitle ?? ""}</h3>
            <p className="text-base my-6 italic">{content}</p>
            <a
              href={urlButton}
              target="_self"
              className="flex items-center text-xl font-medium"
            >
              <span className="text-black">{textButton ?? ""}</span>
              {textButton && (
                <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
                  <MoveUpRight color="white" size={14} />
                </div>
              )}
            </a>
          </div>
        </div>
      </Col>
      {!isMobile && (
        <Col
          span={24}
          md={spanColRight ?? 12}
          className={`bg-[#f6f6f6] !flex justify-center items-center ${
            subSrc && " flex-col"
          }`}
        >
          <Image
            src={src}
            alt="feature new"
            width={400}
            height={400}
            className="max-h-[500px] w-full object-contain"
          />
          <p className="py-6">{subSrc ?? ""}</p>
        </Col>
      )}
    </Row>
  );
}
