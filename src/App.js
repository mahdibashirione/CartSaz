import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFoundPage from "./pages/404Page";
import ContactUsPage from "./pages/ContactUsPage'";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/register/*" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Layout(App);
