import { Col, Row } from "antd";
import { MoveRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function SolarSystemExploration() {
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
    <div className="container mx-auto py-20">
      <div className="pb-14 flex justify-between items-center font-bold">
        <h3 className="text-5xl font-fantasy">Solar System Exploration</h3>
        <div className="flex items-center">
          <p>Discover More </p>
          <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
            <MoveUpRight color="white" size={14} />
          </div>
        </div>
      </div>
      <Row gutter={16}>
        {dataChap4.map((item) => {
          return (
            <Col
              sm={24}
              md={12}
              lg={6}
              key={item.id}
              className="relative flex-1 mb-4"
            >
              <div className="absolute bottom-0 z-[1] text-white flex items-center ">
                <div className="tracking-[3px]  uppercase p-6 font-bold">
                  {item.title}
                </div>
                <div className=" mx-2 bg-[#f64137] rounded-full p-1 text-base">
                  {item.icon}
                </div>
              </div>
              <Image
                src={item.image}
                alt="feature new"
                width={800}
                height={800}
                className="h-full min-h-96 object-cover backdrop-brightness-90 "
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
