import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="rounded-lg select-none container mb-[56px] lg:mb-[40px] w-full bg-[url('/public/svg/bg-banner.svg')] 
    py-[65px] lg:py-[40px] bg-no-repeat 
    bg-cover flex flex-col items-center"
    >
      <h3 className="font-bold text-[32px] leading-[45px] text-white">
        هم اکنون ثبت نام کنید!
      </h3>
      <p className="mt-4 mb-6 lg:mt-2 text-slate-400 text-center w-[350px] lg:w-auto">
        ثبت نام در کارت ساز رایگان است.همین الان ثبت نام کنید و کارت ساز را تست
        کنید.
      </p>
      <Link
        to="/"
        className="bg-[#FE3E01] active:scale-95 duration-200 py-4 px-[49.5px] text-white flex items-center gap-2 rounded-full"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 2H8.5C4.5 2 2.5 4 2.5 8V21C2.5 21.55 2.95 22 3.5 22H16.5C20.5 22 22.5 20 22.5 16V8C22.5 4 20.5 2 16.5 2ZM11.61 16.66C11.36 16.91 10.9 17.14 10.56 17.19L8.48 17.48C8.4 17.49 8.32 17.5 8.25 17.5C7.9 17.5 7.58 17.38 7.35 17.15C7.07 16.87 6.95 16.46 7.02 16.02L7.31 13.94C7.36 13.6 7.59 13.13 7.84 12.89L11.61 9.12C11.67 9.3 11.75 9.48 11.84 9.68C11.93 9.86 12.02 10.04 12.12 10.21C12.2 10.35 12.29 10.49 12.37 10.59C12.47 10.74 12.57 10.87 12.64 10.94C12.68 11 12.72 11.04 12.73 11.06C12.95 11.31 13.18 11.55 13.4 11.73C13.46 11.79 13.5 11.82 13.51 11.83C13.64 11.93 13.76 12.04 13.88 12.11C14.01 12.21 14.15 12.3 14.29 12.38C14.46 12.48 14.64 12.58 14.83 12.67C15.02 12.76 15.2 12.83 15.38 12.89L11.61 16.66ZM17.05 11.23L16.27 12.01C16.22 12.06 16.15 12.09 16.08 12.09C16.06 12.09 16.02 12.09 16 12.08C14.28 11.59 12.91 10.22 12.42 8.5C12.39 8.41 12.42 8.31 12.49 8.24L13.28 7.45C14.57 6.16 15.79 6.19 17.05 7.45C17.69 8.09 18.01 8.71 18 9.35C18 9.98 17.69 10.59 17.05 11.23Z"
            fill="white"
          />
        </svg>
        ثبت نام رایگان
      </Link>
    </section>
  );
};

export default Banner;
