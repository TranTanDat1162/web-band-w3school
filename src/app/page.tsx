import Contact from "@/components/component/Contact";
import Navbar from "@/components/component/Navbar";
import Slider from "@/components/component/Slider";
import TheBand from "@/components/component/TheBand";
import TourDate from "@/components/component/TourDate";
import Map from "@/components/component/Map";
import Footer from "@/components/component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <TheBand />
      <TourDate />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}
