import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import WhatIsCartSaz from "../components/WhatIsCartSaz";

const Layout = (Component) => {
  return (props) => {
    return (
      <>
        <Header />
        <main>{<Component {...props} />}</main>
        <Banner />
        <WhatIsCartSaz />
        <Footer />
      </>
    );
  };
};

export default Layout;
