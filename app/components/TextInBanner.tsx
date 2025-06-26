/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

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
  return (
    <div className="relative w-full min-h-[600px] aspect-[2/0.7]">
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
  );
}
