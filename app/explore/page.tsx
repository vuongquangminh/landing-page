import { Button, Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import { ReactNode } from "react";
import type { Metadata } from "next";
import MoreNASAImages from "../components/MoreNASAImages";
import TextInBanner from "../components/TextInBanner";
import ImageOfTheDay from "../components/ImageOfTheDay";
import Image from "next/image";

type referenceBannerType = {
  id: number;
  title: string;
  content: string;
  icon: ReactNode;
};

// TODO
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const post = await getBlogPost(params.slug);

//   return {
//     title: post.title,
//     description: post.summary,
//   };
// }

export const metadata: Metadata = {
  title: "NASA",
  description: "Đây là trang chủ của website",
};

export default async function Explore() {
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

  // await new Promise((res) => setTimeout(res, 3000));
  return (
    <div className="relative items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  w-full">
        <div className="relative w-full min-h-[600px] aspect-[2/0.7] ">
          <Image
            src="/images/explore-1.webp"
            width={650}
            height={650}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
            priority={false}
          />
          <div className="relative p-8 md:pl-16 top-1/2 transform -translate-y-1/2 max-w-[800px] text-white">
            <h2 className="text-4xl md:text-6xl font-bold font-fantasy">
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

        <MoreNASAImages />
        <TextInBanner
          img="/images/explore-2.webp"
          title="The Space Between Stars"
          subTitle={`Using data from the Japan-led XRISM (X-ray Imaging and Spectroscopy Mission) spacecraft, astronomers used X-rays from two binary star systems to detect sulfur in the interstellar medium. It’s the first direct measurement of both sulfur’s gas and solid phases, a unique capability of  XRISM’s primary method of studying the cosmos.`}
          button="X-ray Spectroscopy"
          icon={
            <div className="mx-2 bg-[#f64137] rounded-full p-1 ">
              <MoveUpRight color="white" size={14} />
            </div>
          }
        />
        <div className="bg-[#f6f6f6]">
          <ImageOfTheDay
            badge="Earth Information Center"
            title="Explore our changing planet"
            content="For more than 50 years, NASA satellites have provided data on Earth’s land, water, air, temperature, and climate. NASA’s Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture."
            src="/images/explore-3.webp"
            subSrc="A type of phytoplankton called coccolithophores, less common in waters off New England since around 2010, made an impressive appearance in summer 2025."
            textButton="Earth Science"
            urlButton="/#"
            spanColLeft={15}
            spanColRight={9}
          />
        </div>
      </main>
    </div>
  );
}
