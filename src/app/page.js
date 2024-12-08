import Image from "next/image";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import About from "./Components/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
