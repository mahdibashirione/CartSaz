const AboutProduct = () => {
  return (
    <section className="select-none container px-8 flex flex-col items-center">
      <span
        className="leading-[25px]
       text-sm px-4 text-orange-500 bg-orange-200 
       rounded-full py-0.5 md:mt-11 md:mb-[26px] mt-[40px] mb-[24px]"
      >
        حالت نمایش
      </span>
      <h3
        className="font-bold text-2xl leading-[33.5px]
       lg:leading-[45px] lg:text-[32px] mb-2"
      >
        سیستمی کاملا تحت وب و آنلاین
      </h3>
      <p className=" max-w-[800px] text-center select-none text-slate-400 leading-[29px]">
        سیستم کارت ساز کاملا تحت وب اجرا شده است و نیازی به هیچ سخت افزار خاصی
        برای دیتاهای خود ندارید.به راحتی مشتریان را مدیریت کنید و سفارشات خود را
        به موقع ارسال و آن ها را جمع آوری کنید.
      </p>

      <div
        className="lg:ml-32 bg-[url('/public/svg/image10.svg')] mt-6
      lg:mt-11 bg-cover bg-no-repeat w-[348px] lg:w-[810px] h-[244px] lg:h-[554px] relative"
      >
        <div
          className="bg-[url('/public/svg/image11.svg')] bg-cover bg-no-repeat w-[105px] lg:w-[233px] h-[211px] 
        lg:h-[471px] absolute bottom-0 -left-2 lg:-left-32"
        ></div>
      </div>
    </section>
  );
};

export default AboutProduct;
