import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

export default function ThreeImageRow({
  imgBig,
  imgSmall,
  title,
  subTitle,
}: {
  imgBig: string;
  imgSmall: { id: number; img: string }[];
  title: string;
  subTitle: string;
}) {
  return (
    <Col span={12} md={8} className="!flex flex-col aaaaa">
      <Row gutter={8} className="grow">
        <Col span={15}>
          <Image
            src={imgBig}
            alt="more-nase-image-1"
            width={300}
            height={300}
            className="h-full object-cover"
          />
        </Col>
        <Col span={9} className="!flex flex-col gap-2 justify-between">
          {imgSmall.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.img}
                alt="more-nase-image-1.2"
                width={300}
                height={200}
                className="h-full object-cover"
              />
            );
          })}
        </Col>
      </Row>
      <div className="">
        <p className="text-base font-semibold py-1">{title}</p>
        <p className="tracking-[3px] text-neutral-800">{subTitle}</p>
      </div>
    </Col>
  );
}
