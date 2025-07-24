import type { Metadata } from "next";
import FeaturedNews from "../components/FeaturedNews";
import ImageOfTheDay from "../components/ImageOfTheDay";

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

export default async function New() {
  return (
    <div className="relative items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col  w-full">
        <FeaturedNews />

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
      </main>
    </div>
  );
}
