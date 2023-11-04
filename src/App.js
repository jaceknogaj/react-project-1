import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Offer />
      </main>
      <Footer />
    </>
  );
}

export default App;
