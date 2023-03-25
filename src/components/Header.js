import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full fixed top-0 shadow z-50 backdrop-blur-xl">
      <div className="blur-0 px-8 py-5  container flex items-center justify-between">
        <Link
          to="/"
          className="w-[132px] h-[48px] bg-cover bg-[url('/public/svg/logo-cart-saz.svg')]"
        ></Link>
        <nav className="flex items-center">
          <ul className="hidden md:flex items-center gap-8 ml-[72px]">
            <li>
              <Link to="/">آپدیت ها</Link>
            </li>
            <li>
              <Link to="/">سوالات متداول</Link>
            </li>
            <li>
              <Link to="/">تماس با ما</Link>
            </li>
          </ul>
          <Link
            className="active:scale-95 duration-200 py-3 px-8 text-sm border
          hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 rounded-lg"
            to="/"
          >
            ورود یا ثبت نام
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
