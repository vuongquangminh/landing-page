import { Col, Row } from "antd";
import { MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Chapter4() {
  const dataChap4: {
    id: number;
    title: string;
    image: string;
    icon: ReactNode;
  }[] = [
    {
      id: 1,
      title: "Sun",
      image: "/images/chapter-4.1.webp",
      icon: <MoveRight size={14} />,
    },
    {
      id: 2,
      title: "Solar Storms and Flares",
      image: "/images/chapter-4.2.webp",
      icon: <MoveRight size={14} />,
    },
    {
      id: 3,
      title: "Auroras",
      image: "/images/chapter-4.3.webp",
      icon: <MoveRight size={14} />,
    },
    {
      id: 4,
      title: "Sunspots",
      image: "/images/chapter-4.4.webp",
      icon: <MoveRight size={14} />,
    },
  ];
  return (
    <div className="container mx-auto mb-20">
      <div className="py-14 flex justify-between items-center font-bold">
        <h3 className="text-5xl">Solar System Exploration</h3>
        <div className="flex">
          <p>Discover More </p>
          <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
            <MoveUpRight color="white" size={14} />
          </div>
        </div>
      </div>
      <Row gutter={16}>
        {dataChap4.map((item) => {
          return (
            <Col key={item.id} className="relative flex-1">
              <div className="absolute bottom-0 text-white p-4 flex">
                <div className="tracking-[3px] uppercase">{item.title}</div>
                <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
                  {item.icon}
                </div>
              </div>
              <Image
                src={item.image}
                alt="feature new"
                width={300}
                height={300}
                className="h-full object-cover"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
