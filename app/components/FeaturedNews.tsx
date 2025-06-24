import { Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import CardImgText from "./CardImgText";
type featuredNewType =
  | {
      id: number;
      title: string;
      content: string;
      span: number;
      img: string;
    }
  | {
      id: number;
      children: {
        id: number;
        title: string;
        content: string;
        span: number;
        img: string;
      }[];
      gather: {
        id: number;
        avatar: string;
        title: string;
        content: string;
        subTitle: string;
      }[];
    };
export default function FeaturedNews() {
  const featuredNew: featuredNewType[] = [
    {
      id: 1,
      title: "3 Min Read",
      img: "/images/feature-1.png",
      content:
        "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
      span: 12,
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new.png",
          title: "5 Min Read",
          content:
            "NASA’s Roman to Peer Into Cosmic ‘Lenses’ to Better Define Dark Matter",
          subTitle: "Article",
        },
        {
          id: 2,
          avatar: "/images/avatar-feature-new-2.png",
          title: "4 Min Read",
          content:
            "NASA+ Documentary “Cosmic Dawn” Reveals Untold Story of James Webb Space Telescope ",
          subTitle: "Article",
        },
      ],
    },
    {
      id: 2,
      title: "1 Min Read",
      img: "/images/feature-2.webp",
      content:
        "NASA Shares New Space Station Ops, Axiom Mission 4 Launch Update",
      span: 6,
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new-3.png",
          title: "5 Min Read",
          content:
            "NASA’s Webb ‘UNCOVERs’ Galaxy Population Driving Cosmic Renovation",
          subTitle: "Article",
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          id: 1,
          title: "3 Min Read",
          img: "/images/feature-3.webp",
          content:
            "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
          span: 6,
        },
        {
          id: 2,
          title: "3 Min Read",
          img: "/images/feature-4.jpg",
          content:
            "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
          span: 6,
        },
      ],
      gather: [
        {
          id: 1,
          avatar: "/images/avatar-feature-new-4.png",
          title: "6 Min Read",
          content: "What’s Up: June 2025 Skywatching Tips from NASA",
          subTitle: "Article",
        },
      ],
    },
  ];
  return (
    <div className="container mx-auto mb-20">
      <div className="py-14 flex justify-between items-center font-bold">
        <h3 className="text-5xl ">Featured News</h3>
        <div className="flex">
          <p>Recently Published</p>
          <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
            <MoveUpRight color="white" size={14} />
          </div>
        </div>
      </div>
      <Row gutter={16} className="">
        {featuredNew.map((item) => {
          if ("children" in item) {
            return (
              <Col key={item.id} className=" overflow-hidden ">
                <div className="flex flex-col h-full gap-4">
                  {item.children.map((child) => (
                    <div key={child.id} className="relative flex-1">
                      <div className="absolute bottom-0 text-white p-4">
                        <div className="tracking-[3px] uppercase">
                          {child.title}
                        </div>
                        <div className="text-lg font-bold">{child.content}</div>
                      </div>
                      <Image
                        src={child.img}
                        alt="feature new"
                        width={300}
                        height={300}
                        className="h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Col>
            );
          } else {
            return (
              <CardImgText
                key={item.id}
                title={item.title}
                content={item.content}
                img={item.img}
                span={item.span}
              />
            );
          }
        })}
      </Row>
      <Row gutter={16} className="">
        {featuredNew.map(
          (item) =>
            "gather" in item &&
            item.gather.map((gatherItem) => (
              <Col
                key={gatherItem.id}
                span={6}
                className="pt-4 !flex !items-center"
              >
                <Image
                  src={gatherItem.avatar}
                  alt="feature new"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="px-5 text-black">
                  <div className="tracking-[3px] uppercase">
                    {gatherItem.title}
                  </div>
                  <div className="text-base font-bold">
                    {gatherItem.content}
                  </div>
                </div>
              </Col>
            ))
        )}
      </Row>
    </div>
  );
}
