import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (Component) => {
  return (props) => {
    return (
      <>
        <Header />
        <main>{<Component {...props} />}</main>
        <Footer />
      </>
    );
  };
};

export default Layout;
