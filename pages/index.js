import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Bivolt Tecnologia - Soluções em Software</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}


