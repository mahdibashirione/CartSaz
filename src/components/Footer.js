import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <section className="px-8 container flex flex-wrap items-center justify-center md:justify-between pt-6 pb-14">
      <div className="mb-6 w-full h-2 bg-cover bg-[url('/public/svg/border.svg')]"></div>
      <article className="w-full md:w-auto flex justify-center gap-x-4 items-center">
        <Link
          to="/"
          className="w-[132px] h-[48px] bg-cover bg-[url('/public/svg/logo-cart-saz.svg')]"
        ></Link>
        <span className="hidden md:block select-none leading-[29px] text-[#74787c]">
          کارت ساز - ۱۴۰۱
        </span>
      </article>
      <ul className="flex md:hidden items-center gap-8 mt-10">
        <li>
          <Link
            className={`hover:scale-105 duration-200 ${
              pathname === "/updates" && "text-blue-500"
            }`}
            to="/updates"
          >
            آپدیت ها
          </Link>
        </li>
        <li>
          <Link
            className={`hover:scale-105 duration-200 ${
              pathname === "/questions" && "text-blue-500"
            }`}
            to="/questions"
          >
            سوالات متداول
          </Link>
        </li>
        <li>
          <Link
            className={`hover:scale-105 duration-200 ${
              pathname === "/contactus" && "text-blue-500"
            }`}
            to="/contactus"
          >
            تماس با ما
          </Link>
        </li>
      </ul>
      <article className="flex md:w-auto justify-center mt-[40px] md:mt-0 w-full gap-2">
        <Link
          to="/"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-[#ededed] hover:bg-[#ededed]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
              fill="#74787C"
            />
          </svg>
        </Link>
        <Link
          to="/"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-[#ededed] hover:bg-[#ededed]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.14 2.96004L7.11 5.96004C1.04 7.99004 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87004C22.39 3.82004 20.19 1.61004 16.14 2.96004ZM16.46 8.34004L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.31 11.87 11.31 11.39 11.6 11.1L15.4 7.28004C15.69 6.99004 16.17 6.99004 16.46 7.28004C16.75 7.57004 16.75 8.05004 16.46 8.34004Z"
              fill="#74787C"
            />
          </svg>
        </Link>
      </article>
    </section>
  );
};

export default Footer;
