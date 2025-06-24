import { Button, Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import { ReactNode } from "react";
import TextInBanner from "./components/TextInBanner";
import Chapter2 from "./components/Chapter2";
import Chapter4 from "./components/Chapter4";

type referenceBannerType = {
  id: number;
  title: string;
  content: string;
  icon: ReactNode;
};

export default function Home() {
  const referenceBanner: referenceBannerType[] = [
    {
      id: 1,
      title: "CURRENT MISSION",
      content: "Expedition 73",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 2,
      title: "FUTURE MISSION",
      content: "Axiom Mission 4",
      icon: <MoveUpRight color="white" size={14} />,
    },
    {
      id: 3,
      title: "MOBILE APP",
      content: "Spot the Station",
      icon: <MoveUpRight color="white" size={14} />,
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
                    {item.content}{" "}
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
        <Chapter2 />

        <TextInBanner
          title="Eruptions from Sun"
          subTitle={`On June 10, NASA’s PUNCH (Polarimeter to Unify the Corona and
              Heliosphere) mission released its first images of large solar
              eruptions, or coronal mass ejections. The mission’s highly
              sensitive, wide-field instruments were able to capture the
              eruptions as they evolved in space, in much greater detail than 
              previously possible.`}
          button="Solar Observations"
          icon={
            <div className="mx-2 bg-[#f64137] rounded-full p-1 ">
              <MoveUpRight color="white" size={14} />
            </div>
          }
        />
        <Chapter4 />
      </main>
    </div>
  );
}
