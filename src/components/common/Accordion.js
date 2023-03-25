import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ label, desc }) => {
  return (
    <div className="rounded-lg w-full select-none max-w-[808px] flex flex-wrap items-center justify-center relative border border-[#cbcbcb]">
      <input
        className="peer absolote top-0 left-0 hidden"
        type={"checkbox"}
        id={label}
      />
      <label
        htmlFor={label}
        className="w-full p-4 flex items-center justify-between cursor-pointer"
      >
        <span className="flex items-center leading-[28.8px]">
          <span className="ml-2 w-2 h-2 rotate-45 bg-blue-500 block"></span>
          {label}
        </span>
        <FiChevronDown />
      </label>
      <p className="p-4 text-slate-400 pt-0 w-full peer-checked:block hidden text-justify">
        {desc.length ? desc : "توضیحی وجود ندارد"}
      </p>
    </div>
  );
};

export default Accordion;
