import { Navbar } from "../src/components/Navbar";
import { Banner } from "../src/components/Banner";
import { Services } from "../src/components/Services";
import { AboutUs } from "../src/components/AboutUs";
import { Planning } from "../src/components/Planning";
import { Partners } from "../src/components/Partners";
import { Contact } from "../src/components/Contact";
import { Footer } from "../src/components/Footer";

import { GlobalStyles } from './styles/global';

export function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <AboutUs />
      <Planning />
      <Partners />
      <Contact />
      <GlobalStyles />
      <Footer />
      </>
  );
}