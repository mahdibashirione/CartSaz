const Landing = () => {
  return (
    <section className="bg-[url('/public/svg/bg-landing.svg')] bg-no-repeat bg-top container px-8 flex flex-col items-center mt-[120px]">
      <h1 className="text-[32px] leading-[140%] lg:text-[64px] text-center select-none font-bold mt-[61px]">
        سامانه مدیریت <span className="text-blue-500">هوشمند</span>
        <br /> سفارش های اینترنتی
      </h1>
      <button className="bg-blue-500 active:scale-95 duration-200 text-white rounded-full hover:bg-blue-600 px-[30px] py-4 flex items-center gap-2 my-6">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z"
            fill="white"
          />
        </svg>
        مشاهده ویدئو معرفی
      </button>
      <p className="max-w-[800px] text-center leading-[29px] select-none text-slate-400">
        کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا سررسید
        نباشید.به راحتی سفارشات خود را مدیریت کنید و آن ها را تعیین وضعیت
        کنید.حتی به راحتی برگه ارسال پرینت کنید و آن را اختصاصی استفاده کنید.
      </p>
      <span className="my-14 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.25C11.81 21.25 11.62 21.18 11.47 21.03L5.4 14.96C5.11 14.67 5.11 14.19 5.4 13.9C5.69 13.61 6.17 13.61 6.46 13.9L12 19.44L17.54 13.9C17.83 13.61 18.31 13.61 18.6 13.9C18.89 14.19 18.89 14.67 18.6 14.96L12.53 21.03C12.38 21.18 12.19 21.25 12 21.25Z"
            fill="#74787C"
          />
          <path
            d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z"
            fill="#74787C"
          />
        </svg>
      </span>
      <div className="mb-6 w-full h-2 bg-cover bg-[url('/public/svg/border.svg')]"></div>
    </section>
  );
};

export default Landing;
