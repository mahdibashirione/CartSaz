import { Route, Routes } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import OtpCodeLogin from "../components/OtpCodeLogin";

const LoginPage = () => {
  return (
    <section className="container px-8 min-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<InputLogin />} />
        <Route path="/code" element={<OtpCodeLogin />} />
      </Routes>
    </section>
  );
};

export default LoginPage;
