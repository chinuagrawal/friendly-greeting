import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SeatBooking from "@/components/SeatBooking";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kanha Library - Premium Study Space | Book Your Seat Online</title>
        <meta
          name="description"
          content="Kanha Library offers a peaceful study environment with AC & Non-AC sections, free WiFi, and affordable pricing. Book your seat online today!"
        />
        <meta name="keywords" content="library, study space, book seat, AC library, student library, study room" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <SeatBooking />
          <About />
          <Pricing />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
