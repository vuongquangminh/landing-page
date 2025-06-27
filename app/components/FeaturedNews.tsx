"use client";

import { Row } from "antd";
import { MoveUpRight } from "lucide-react";
import React, { useRef } from "react";
import CardImgText from "./CardImgText";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

type featuredNewType = {
  id: number;
  title: string;
  content: string;
  span: number;
  img: string;
  gather: {
    id: number;
    avatar: string;
    title: string;
    content: string;
    subTitle: string;
  }[];
};

export default function FeaturedNews() {
  const ref1 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap code here...
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
          // pin: true,
          markers: true,
        },
      });
      tl.to(".text", {
        // y: "-=100",
        opacity: 1,
        scale: 3,
      });
    },
    { scope: ref1 }
  ); // <-- scope is for selector text (optional)

  const featuredNew: featuredNewType[] = [
    {
      id: 1,
      title: "3 Min Read",
      img: "/images/feature-1.png",
      content:
        "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
      span: 12,
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new.png",
          title: "5 Min Read",
          content:
            "NASA’s Roman to Peer Into Cosmic ‘Lenses’ to Better Define Dark Matter",
          subTitle: "Article",
        },
        {
          id: 2,
          avatar: "/images/avatar-feature-new-2.png",
          title: "4 Min Read",
          content:
            "NASA+ Documentary “Cosmic Dawn” Reveals Untold Story of James Webb Space Telescope ",
          subTitle: "Article",
        },
      ],
    },
    {
      id: 2,
      title: "1 Min Read",
      img: "/images/feature-2.webp",
      content:
        "NASA Shares New Space Station Ops, Axiom Mission 4 Launch Update",
      span: 6,
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new-3.png",
          title: "5 Min Read",
          content:
            "NASA’s Webb ‘UNCOVERs’ Galaxy Population Driving Cosmic Renovation",
          subTitle: "Article",
        },
      ],
    },
    {
      id: 3,
      title: "3 Min Read",
      img: "/images/feature-3.webp",
      content:
        "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
      span: 6,
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new-4.png",
          title: "6 Min Read",
          content: "What’s Up: June 2025 Skywatching Tips from NASA",
          subTitle: "Article",
        },
      ],
    },
  ];
  return (
    <div ref={ref1} className="container mx-auto mb-20 box">
      <div className="py-14 flex justify-between items-center font-bold">
        <h3 className="text-5xl font-fantasy text">Featured News</h3>
        <div className="flex items-center">
          <p>Recently Published</p>
          <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
            <MoveUpRight color="white" size={14} />
          </div>
        </div>
      </div>
      <Row>
        {featuredNew.map((item) => {
          return (
            <CardImgText
              key={item.id}
              title={item.title}
              content={item.content}
              img={item.img}
              span={item.span}
              gather={item.gather}
            />
          );
        })}
      </Row>
    </div>
  );
}
