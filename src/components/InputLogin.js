import { useState } from "react";
import { Link } from "react-router-dom";

const InputLogin = () => {
  const [numberPhone, setNumberPhone] = useState("");

  return (
    <article className="flex flex-col items-center">
      <div className="w-full max-w-[400px]">
        <span className="text-[#171F26] text-sm leading-[25.2px] w-full block text-right">
          جهت ورود به پنل ابتدا شماره تماس خود را وارد کنید:
        </span>
        <div className="mt-4 w-full h-12 flex items-center border border-[#cbcbcb] rounded-lg">
          <input
            onChange={(e) => setNumberPhone(e.target.value)}
            maxLength={11}
            placeholder="5687 245 0930"
            type={"text"}
            className="text-left w-full p-2 outline-none border-none"
          />
          <p className="text-[12px] leading-[21.6px] text-[#171F26]">98+</p>
          <span className="w-6 min-w-[24px] ml-4 mr-2 h-6 block bg-cover bg-[url('/public/svg/iran-icon.png')]"></span>
        </div>
        <Link
          to={"/register/code"}
          state={{ numberPhone }}
          className="mt-8 w-full block text-center rounded-lg py-4 text-sm leading-[23.8px] text-white bg-blue-500 duration-200 active:scale-95"
        >
          ورود
        </Link>
      </div>
    </article>
  );
};

export default InputLogin;
