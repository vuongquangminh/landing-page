import { Col } from "antd";
import Image from "next/image";
import React from "react";

export default function CardImgText({
  key,
  span,
  title,
  content,
  img,
}: {
  key?: string | number;
  span: number;
  title: string;
  content: string;
  img: string;
}) {
  return (
    <Col key={key} span={span} className="relative overflow-hidden ">
      <div className="absolute bottom-0 text-white p-6">
        <div className="tracking-[3px] uppercase">{title}</div>
        <div className="text-xl font-bold">{content}</div>
      </div>
      <Image
        src={img}
        alt="feature new"
        width={800}
        height={800}
        className="h-full object-cover"
      />
    </Col>
  );
}
