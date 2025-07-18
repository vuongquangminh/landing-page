import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ContentSide({
  isMobile,
  badge,
  title,
  subTitle,
  content,
  img,
  button,
  url,
}: {
  isMobile: boolean;
  badge: string;
  title: string;
  subTitle: string;
  content: string;
  img: string;
  button: string;
  url: string;
}) {
  return (
    <div className="md:pr-30">
      <div className="">
        <p className="uppercase tracking-[3px] text-sm">{badge}</p>
        <h2 className="text-5xl font-bold font-fantasy">{title}</h2>
      </div>
      <div className="my-6 md:my-24">
        {isMobile && (
          <div className="bg-[#f6f6f6] flex justify-center items-center">
            <Image
              src={img}
              alt="feature new"
              width={400}
              height={400}
              className="h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-xl font-medium">{subTitle}</h3>
        <p className="text-base my-6 italic">{content}</p>
        <a
          href={url}
          target="_self"
          className="flex items-center text-xl font-medium"
        >
          <span className="text-black">{button}</span>
          <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
            <MoveUpRight color="white" size={14} />
          </div>
        </a>
      </div>
    </div>
    
  );
}
