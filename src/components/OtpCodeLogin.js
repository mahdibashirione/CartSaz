import { Link, useLocation } from "react-router-dom";
import InputOtp from "./common/InputOtp";
import { FiChevronRight } from "react-icons/fi";

const OtpCodeLogin = () => {
  const { state } = useLocation();

  return (
    <article className="flex flex-col items-center">
      <div className="w-full max-w-[400px]">
        <span className="text-[#171F26] text-sm leading-[25.2px] w-full block text-right">
          کد به شماره {state.numberPhone} ارسال شد.کد را وارد کنید:
        </span>

        <form className="w-full flex flex-wrap justify-between mt-4">
          <InputOtp />
          <InputOtp />
          <InputOtp />
          <InputOtp />
          <InputOtp />

          <button
            type="submit"
            className="mt-8 w-full rounded-lg py-4 text-sm leading-[23.8px] text-white bg-blue-500 duration-200 active:scale-95"
          >
            ثبت کد
          </button>
        </form>
      </div>
      <Link
        to="/register"
        className="font-medium mt-4 text-blue-500 flex items-center gap-2 text-sm leading-[25.2px]"
      >
        <FiChevronRight className="text-xl" />
        تغییر شماره تلفن
      </Link>
      <span className="select-none mt-10 font-medium leading-[25.2px]">
        ارسال مجدد پس از : 1:23
      </span>
    </article>
  );
};

export default OtpCodeLogin;
