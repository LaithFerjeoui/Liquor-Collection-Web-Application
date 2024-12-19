import Image from "next/image";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import About from "./Components/About";
import GsapZoomAnimation from "./Components/GsapZoomAnimation";
import History from "./Components/History";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <GsapZoomAnimation />
      <History />
    </Layout>
  );
}
