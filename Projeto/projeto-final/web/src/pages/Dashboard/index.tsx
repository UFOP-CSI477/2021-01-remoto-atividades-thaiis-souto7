import { AboutUs } from '../../components/AboutUs';
import { Banner } from '../../components/Banner';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Partners } from '../../components/Partners';
import { Planning } from '../../components/Planning';
import { Services } from '../../components/Services';
import { GlobalStyles } from '../../styles/global';

const Dashboard: React.FC = () => {
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
};

export default Dashboard;
