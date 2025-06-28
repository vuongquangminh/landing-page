"use client";
import React, { useRef } from "react";
import ThreeImageRow from "./ThreeImageRow";
import { Row } from "antd";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MoreNASAImages() {
  const ref1 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap code here...
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref1.current,
          start: "top 90%",
          end: "center center",
          scrub: 1,
          // pin: true,
          markers: true,
        },
      });
      tl.from(ref1.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: ref1 }
  );
  const items: {
    id: number;
    imgBig: string;
    imgSmall: {
      id: number;
      img: string;
    }[];
    title: string;
    subTitle: string;
  }[] = [
    {
      id: 1,
      imgBig: "/images/more-nase-image-1.jpg",
      imgSmall: [
        { id: 1, img: "/images/more-nase-image-1.2.jpg" },
        { id: 2, img: "/images/more-nase-image-1.3.jpg" },
      ],
      title: "Wildlife Mammals Gallery",
      subTitle: "19 Images",
    },
    {
      id: 2,
      imgBig: "/images/more-nase-image-2.jpg",
      imgSmall: [
        { id: 1, img: "/images/more-nase-image-2.2.jpg" },
        { id: 2, img: "/images/more-nase-image-2.3.jpg" },
      ],
      title: "Wildlife Reptiles Gallery",
      subTitle: "17 Images",
    },
    {
      id: 3,
      imgBig: "/images/more-nase-image-3.jpg",
      imgSmall: [
        { id: 1, img: "/images/more-nase-image-3.2.jpg" },
        { id: 2, img: "/images/more-nase-image-3.3.jpg" },
      ],
      title: "Wildlife Birds Gallery",
      subTitle: "18 Images",
    },
  ];
  return (
    <ReactLenis root>
      <div ref={ref1} className="container mx-auto mb-20">
        <div className="pb-14 flex justify-between items-center font-bold">
          <h3 className="text-5xl font-fantasy">More NASA Images</h3>
        </div>
        <div className="">
          <Row gutter={30}>
            {items.map((item) => {
              return (
                <ThreeImageRow
                  key={item.id}
                  imgBig={item.imgBig}
                  imgSmall={item.imgSmall}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              );
            })}
          </Row>
        </div>
      </div>
    </ReactLenis>
  );
}
