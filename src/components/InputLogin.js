const InputLogin = () => {
  return (
    <article className="flex flex-col items-center pt-[88px]">
      <div className="w-[171px] h-[209px] bg-[url('/public/svg/logo-col.svg')]"></div>
      <h6 className="mt-8 leading-[22.4px]">ورود/ثبت نام فروشگاه</h6>
      <form className="w-full max-w-[400px] mt-10">
        <span className="text-[#171F26] text-sm leading-[25.2px] w-full block text-right">
          جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید:
        </span>
        <div className="mt-4 w-full h-12 flex items-center border border-[#cbcbcb] rounded-lg">
          <input
            type={"text"}
            className="text-left w-full p-2 outline-none border-none"
          />
          <p className="text-[12px] leading-[21.6px] text-[#171F26]">98+</p>
          <span className="w-6 min-w-[24px] ml-4 mr-2 h-6 block bg-cover bg-[url('/public/svg/iran-icon.png')]"></span>
        </div>
        <button
          type="submit"
          className="mt-8 w-full rounded-lg py-4 text-sm leading-[23.8px] text-white bg-blue-500 duration-200 active:scale-95"
        >
          ورود
        </button>
      </form>
    </article>
  );
};

export default InputLogin;
