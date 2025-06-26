import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function CardImgText({
  span,
  title,
  content,
  img,
  gather,
}: {
  span: number;
  title: string;
  content: string;
  img: string;
  gather?: {
    id: number;
    avatar: string;
    title: string;
    content: string;
    subTitle: string;
  }[];
}) {
  return (
    <Col
      md={span * 2}
      lg={span}
      className=" overflow-hidden p-2 !flex flex-col"
    >
      <Row className="grow relative">
        <div className="absolute bottom-0 text-white p-6">
          <div className="tracking-[3px] uppercase">{title}</div>
          <div className="text-xl font-bold">{content}</div>
        </div>
        <Image
          src={img}
          alt="feature new"
          width={800}
          height={800}
          className=" h-[400px] object-cover"
        />
      </Row>
      <Row className="w-full">
        {gather?.map((item) => (
          <Col
            key={item.id}
            span={24 / gather.length}
            className="pt-4 !flex !items-center"
          >
            <Image
              src={item.avatar}
              alt="feature new"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="px-5 text-black">
              <div className="tracking-[3px] uppercase">{item.title}</div>
              <div className="text-base font-bold">{item.content}</div>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
