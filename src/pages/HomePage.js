import AboutProduct from "../components/AboutProduct";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Options from "../components/Options";
import WhatIsCartSaz from "../components/WhatIsCartSaz";

const HomePage = () => {
  return (
    <>
      <Header />
      <Landing />
      <AboutProduct />
      <Options />
      <Banner />
      <WhatIsCartSaz />
      <Footer />
    </>
  );
};

export default HomePage;
