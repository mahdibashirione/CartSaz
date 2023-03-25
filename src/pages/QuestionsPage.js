import Accordion from "../components/common/Accordion";

const QuestionsPage = () => {
  const options = [
    { id: 1, label: "کارت ساز چیست و به چه کاری می آید؟", desc: "" },
    { id: 2, label: "کارت ساز چطور به کسب و کار من کمک میکند؟", desc: "" },
    { id: 3, label: "آیا کارت ساز رایگان است؟", desc: "" },
    { id: 4, label: "راه های ارتباطی در کارت ساز چگونه است؟", desc: "" },
    { id: 5, label: "آیا اطلاعات من محفوظ است؟", desc: "" },
    { id: 6, label: "کارت ساز توسط چه کسانی اداره میشود؟", desc: "" },
    {
      id: 7,
      label: "کارت ساز قابلیت پرداخت سبد خرید ها را نیز فراهم کرده است؟",
      desc: "",
    },
  ];

  return (
    <section className="container flex flex-col gap-4 items-center px-8 pt-[122px] mb-[58px]">
      <h3 className="text-[32px] w-full text-right mb-[60px] leading-[44.8px] text-blue-500">
        سوالات متداول
      </h3>
      {options.map((question) => (
        <Accordion
          key={question.id}
          label={question.label}
          desc={question.desc}
        />
      ))}
    </section>
  );
};

export default QuestionsPage;
