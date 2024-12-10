import Image from "next/image";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import About from "./Components/About";
import GsapZoomAnimation from "./Components/GsapZoomAnimation";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <GsapZoomAnimation />
    </Layout>
  );
}
