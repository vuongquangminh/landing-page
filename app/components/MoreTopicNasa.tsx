"use client";

import { Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export default function MoreTopicNasa() {
  const ref1 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap code here...
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 90%",
          end: "center 30%",
          scrub: 1,
          // pin: true,
          markers: false,
        },
      });

      gsap.utils.toArray(".box").forEach((box) => {
        tl.from(box as string, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: {
            each: 0.3, // mỗi box cách nhau 0.3s
            ease: "power3.out",
          },
        });
      });
    },
    { scope: ref1 }
  );
  const listTopics: {
    id: number;
    title: string;
    img: string;
    icon: ReactNode;
  }[] = [
    {
      id: 1,
      title: "Missions",
      img: "/images/missions.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 2,
      title: "Humans In Space",
      img: "/images/human-in-space.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 3,
      title: "Earth",
      img: "/images/earth.jpg",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 4,
      title: "Our Solar System",
      img: "/images/our-sys.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 5,
      title: "Universe",
      img: "/images/universe.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 6,
      title: "Science Missions",
      img: "/images/science.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 7,
      title: "Aeronautics",
      img: "/images/aeron.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 8,
      title: "Technology",
      img: "/images/technology.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
  ];
  return (
    <ReactLenis root>
      <div ref={ref1} className="container mx-auto py-20">
        <div className="pb-14 flex justify-between items-center font-bold">
          <h3 className="text-5xl font-fantasy">More Topics from NASA</h3>
        </div>
        <Row gutter={[16, 16]}>
          {listTopics.map((item) => (
            <Col
              span={24}
              sm={12}
              md={6}
              key={item.id}
              className={`relative flex-1 h-96 box box-${item.id}`}
            >
              <div className="absolute bottom-0 text-white p-4">
                <div className="tracking-[3px] uppercase">{item.title}</div>
              </div>
              <Image
                src={item.img}
                alt="feature new"
                width={600}
                height={600}
                className="h-full rounded-xl object-cover"
              />
            </Col>
          ))}
        </Row>
      </div>
    </ReactLenis>
  );
}
