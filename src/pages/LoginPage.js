import { Route, Routes } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import OtpCodeLogin from "../components/OtpCodeLogin";

const LoginPage = () => {
  return (
    <section className="container px-8 min-h-screen flex flex-col items-center justify-center">
      <article className="mb-8 select-none flex flex-col items-center">
        <div className="w-[171px] h-[209px] bg-[url('/public/svg/logo-col.svg')]"></div>
        <h6 className="leading-[22.4px] mt-4 font-bold">
          ورود/ثبت نام فروشگاه
        </h6>
      </article>
      <Routes>
        <Route path="" element={<InputLogin />} />
        <Route path="code" element={<OtpCodeLogin />} />
      </Routes>
    </section>
  );
};

export default LoginPage;
