import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Layout = (Component) => {
  const NewComponent = (props) => {
    const { pathname } = useLocation();
    let isShow = pathname.includes("register");

    return (
      <>
        {!isShow && <Header />}
        <main>{<Component {...props} />}</main>
        {!isShow && <Footer />}
      </>
    );
  };
  return NewComponent;
};

export default Layout;
