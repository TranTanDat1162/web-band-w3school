import Navbar from "@/components/component/Navbar";
import Slider from "@/components/component/Slider";
import TheBand from "@/components/component/TheBand";
import TourDate from "@/components/component/TourDate";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Slider />
      <TheBand />
      <TourDate />
    </main>
  );
}
