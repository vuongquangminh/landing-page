import { Button, Col, Row } from "antd";
import { MoveUpRight } from "lucide-react";
import { ReactNode } from "react";
import type { Metadata } from "next";
import TextInBanner from "./components/TextInBanner";
import FeaturedNews from "./components/FeaturedNews";
import SolarSystemExploration from "./components/SolarSystemExploration";
import ImageOfTheDay from "./components/ImageOfTheDay";
import MoreNASAImages from "./components/MoreNASAImages";
import Image from "next/image";

type referenceBannerType = {
  id: number;
  title: string;
  content: string;
  icon: ReactNode;
};

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default async function Home() {
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
  const listTopics: {
    id: number;
    title: string;
    img: string;
    icon: ReactNode;
  }[] = [
    {
      id: 1,
      title: "Missions",
      img: "/images/missions.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 2,
      title: "Humans In Space",
      img: "/images/human-in-space.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 3,
      title: "Earth",
      img: "/images/earth.jpg",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 4,
      title: "Our Solar System",
      img: "/images/our-sys.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 5,
      title: "Universe",
      img: "/images/universe.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 6,
      title: "Science Missions",
      img: "/images/science.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },

    {
      id: 7,
      title: "Aeronautics",
      img: "/images/aeron.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
    {
      id: 8,
      title: "Technology",
      img: "/images/technology.webp",
      icon: (
        <MoveUpRight color="white" size={14} strokeWidth={3} className="" />
      ),
    },
  ];
  await new Promise((res) => setTimeout(res, 3000));
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

        <FeaturedNews />

        <TextInBanner
          img="/images/sun-1.webp"
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
        <SolarSystemExploration />
        <ImageOfTheDay
          badge="Today"
          title="Image Of The Day"
          subTitle="“Cosmic Dawn” Screening at Greenbelt Cinema"
          src="/images/imageoftheday.webp"
          content="Attendees line up to enter the theater for a screening of the
                new NASA+ documentary “Cosmic Dawn: The Untold Story of the
                James Webb Space Telescope,” Wednesday, June 11, 2025, at the
                Greenbelt Cinema in Greenbelt, Maryland. Featuring
                never-before-seen footage, Cosmic Dawn offers an unprecedented
                glimpse into the assembly, testing, and launch of NASA’s James
                Webb Space Telescope."
          textButton="Browse Image Archive"
          urlButton="https://www.nasa.gov/image-of-the-day/"
          spanColLeft={9}
          spanColRight={15}
        />
        <MoreNASAImages />
        <TextInBanner
          img="/images/star-sky.webp"
          title="Explore the Universe from your Inbox"
          subTitle={`Stay up-to-date on the latest news from NASA–from Earth to the Moon, the Solar System and beyond. \nWe will never share your email address.`}
          button="Sign Up"
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
            src="/images/storm.webp"
            subSrc="Several weeks into the 2025 eastern Pacific hurricane season, a pair of tropical cyclones churned off the western coast of Mexico. The storms—Barbara and Cosme—are visible in this image, acquired on the afternoon of June 9, 2025, by the Visible Infrared Imaging Radiometer Suite on the NOAA-20 satellite."
            textButton="Earth Science"
            urlButton="/#"
            spanColLeft={15}
            spanColRight={9}
          />
        </div>
        <div className="container mx-auto mb-20">
          <div className="pb-14 flex justify-between items-center font-bold">
            <h3 className="text-5xl font-fantasy">More Topics from NASA</h3>
          </div>
          <Row gutter={[16, 16]}>
            {listTopics.map((item) => (
              <Col span={6} key={item.id} className="relative flex-1">
                <div className="absolute bottom-0 text-white p-4">
                  <div className="tracking-[3px] uppercase">{item.title}</div>
                </div>
                <Image
                  src={item.img}
                  alt="feature new"
                  width={600}
                  height={600}
                  className="h-full object-cover"
                />
              </Col>
            ))}
          </Row>
        </div>
      </main>
    </div>
  );
}
