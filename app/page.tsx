import { Button, Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

type referenceBannerType = {
  id: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
};

type featuredNewType =
  | {
      id: number;
      title: string;
      subtitle: string;
      span: number;
      img: string;
    }
  | {
      id: number;
      children: {
        id: number;
        title: string;
        subtitle: string;
        span: number;
        img: string;
      }[];
    };

export default function Home() {
  const referenceBanner: referenceBannerType[] = [
    {
      id: 1,
      title: "CURRENT MISSION",
      subtitle: "Expedition 73",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 2,
      title: "FUTURE MISSION",
      subtitle: "Axiom Mission 4",
      icon: <MoveUpRight color="white" size={14} />,
    },
    {
      id: 3,
      title: "MOBILE APP",
      subtitle: "Spot the Station",
      icon: <MoveUpRight color="white" size={14} />,
    },
  ];

  const featuredNew: featuredNewType[] = [
    {
      id: 1,
      title: "3 Min Read",
      img: "/images/feature-1.png",
      subtitle:
        "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
      span: 12,
    },
    {
      id: 2,
      title: "1 Min Read",
      img: "/images/feature-2.webp",
      subtitle:
        "NASA Shares New Space Station Ops, Axiom Mission 4 Launch Update",
      span: 6,
    },
    {
      id: 3,
      children: [
        {
          id: 1,
          title: "3 Min Read",
          img: "/images/feature-3.webp",
          subtitle:
            "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
          span: 6,
        },
        {
          id: 2,
          title: "3 Min Read",
          img: "/images/feature-4.jpg",
          subtitle:
            "NASA Engineers Simulate Lunar Lighting for Artemis III Moon Landing",
          span: 6,
        },
      ],
    },
  ];

  return (
    <div className="relative items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  w-full">
        <div className="relative w-full min-h-[600px] aspect-[2/0.7] ">
          <video
            className=" absolute inset-0 object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            id="html5_media_bu69gubpgij"
          >
            <source
              src="https://www.nasa.gov/wp-content/uploads/2025/05/iss-intro.mp4"
              type="video/mp4"
            />
          </video>
          <div className="relative p-8 md:pl-16 top-1/2 transform -translate-y-1/2 max-w-[800px] text-white">
            <h2 className="text-4xl md:text-6xl font-bold">
              Your Orbiting Laboratory
            </h2>
            <p className="mt-4 max-w-xl">
              Since the first crew’s arrival aboard over twenty years ago, the
              International Space Station has evolved into a state-of-the-art
              scientific lab.
            </p>
            <Button type="primary" danger className="mt-4">
              Space Station Updates
            </Button>
          </div>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            className="absolute w-full bottom-0 flex text-white p-8 md:pl-16"
          >
            {referenceBanner.map((item) => (
              <Col key={item.id} className="gutter-row" span={6}>
                <div className="border-0 border-t border-solid border-inherit">
                  <div className="text-xs font-semibold tracking-[3px] py-4">
                    {item.title}
                  </div>
                  <div className="text-lg font-bold flex items-center">
                    {item.subtitle}{" "}
                    <span className="mx-2 bg-[#f64137] rounded-full p-1 text-base">
                      {item.icon}
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div></div>
        </div>
        <div className="container mx-auto">
          <div className="py-14 flex justify-between items-center font-bold">
            <h3 className="text-5xl ">Featured News</h3>
            <div className="flex">
              <p>Recently Published</p>
              <div className=" inline-block mx-2 bg-[#f64137] rounded-full p-1 text-base">
                <MoveUpRight color="white" size={14} />
              </div>
            </div>
          </div>
          <Row gutter={16}>
            {featuredNew.map((item) => {
              if ("children" in item) {
                item.children.map((child) => {
                  return (
                    <Col
                      key={child.id}
                      span={child.span}
                      className="relative overflow-hidden"
                    >
                      <div className="absolute bottom-0 p-6 text-white">
                        <div className="tracking-[3px] uppercase">
                          {child.title}
                        </div>
                        <div className="text-xl font-bold">
                          {child.subtitle}
                        </div>
                      </div>
                      <Image
                        src={child.img}
                        alt="feature new"
                        width={800}
                        height={800}
                        className="object-cover"
                      />
                    </Col>
                  );
                });
              } else {
                return (
                  <Col
                    key={item.id}
                    span={item.span}
                    className="relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 p-6 text-white">
                      <div className="tracking-[3px] uppercase">
                        {item.title}
                      </div>
                      <div className="text-xl font-bold">{item.subtitle}</div>
                    </div>
                    <Image
                      src={item.img}
                      alt="feature new"
                      width={800}
                      height={800}
                      className="h-full object-cover"
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </div>
        aaaaaa
      </main>
    </div>
  );
}
