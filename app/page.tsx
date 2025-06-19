import { Button } from "antd";
import { ReactNode } from "react";

export default function Home() {
  const itemBanner: {
    id: number;
    title: string;
    subtitle: string;
    icon: ReactNode;
  }[] = [
    {
      id: 1,
      title: "CURRENT MISSION",
      subtitle: "Expedition 73",
      icon: <></>,
    },
    {
      id: 2,
      title: "FUTURE MISSION",
      subtitle: "Axiom Mission 4",
      icon: <></>,
    },
    {
      id: 3,
      title: "MOBILE APP",
      subtitle: "Spot the Station",
      icon: <></>,
    },
  ];

  return (
    <div className="relative items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full">
        <div className="relative w-full aspect-[2/0.7] ">
          <figure className="absolute inset-0 w-full h-full object-cover">
            <video
              className="object-cover w-full h-full"
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
          </figure>
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
          <div className="absolute bottom-0">aaaaa</div>
        </div>
        Part2
      </main>
    </div>
  );
}
