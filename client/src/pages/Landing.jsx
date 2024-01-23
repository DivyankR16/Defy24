import Navbar from "../components/LandingComponents/Navbar";
import Hero from "../components/LandingComponents/Hero";
import Analytics from "../components/LandingComponents/Analytics";
import Newsletter from "../components/LandingComponents/Newsletter";
import Footer from "../components/LandingComponents/Footer";
import Videos from "../components/LandingComponents/Videos";
const Landing = () => {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Hero />
      <Videos/>
      <Analytics />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Landing;
