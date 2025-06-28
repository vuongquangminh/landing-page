"use client";

import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TextInBanner({
  title,
  subTitle,
  button,
  icon,
  img,
}: {
  title: string;
  subTitle: string;
  button: string;
  icon?: ReactNode;
  img: string;
}) {
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
          markers: false,
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
  return (
    <ReactLenis root>
      <div ref={ref1} className="relative w-full min-h-[600px] aspect-[2/0.7]">
        <img
          loading="lazy"
          decoding="async"
          width="650"
          height="650"
          src={img}
          className="h-full w-full inset-0 object-cover absolute"
          alt=""
        />
        <div className="relative p-8 md:pl-16 top-1/2 transform -translate-y-1/2 max-w-[800px] text-white">
          <h2 className="text-4xl md:text-6xl font-bold font-fantasy ">
            {title}
          </h2>
          <div className="mt-8 max-w-xl whitespace-pre-line">{subTitle}</div>
          <div className="flex items-center mt-8 text-xl font-bold">
            {button}
            {icon}
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
