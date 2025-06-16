import { Button } from "antd";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full">
        <div className="bg-[url('/images/banner.webp')] w-full text-white">
          <h2 className="text-6xl font-bold">Helping American Communitiesv</h2>
          <p>
            With the Atlantic hurricane season underway, NASA is gearing up to
            produce cutting-edge research that strengthens the nation’s ability
            to prepare for and respond to severe weather.
          </p>
          <Button color="danger" variant="solid">
            Solid
          </Button>
        </div>
      </main>
    </div>
  );
}
