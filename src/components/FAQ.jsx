import React from "react";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";

const FAQ = ({ data, setActiveuesArr, activeQuesArr }) => {
  const isActive = activeQuesArr.includes(data.id);

  const handleonClick = () => {
    if (isActive) {
      setActiveuesArr(activeQuesArr.filter((item) => item !== data.id));
    } else {
      setActiveuesArr([...activeQuesArr, data.id]);
    }
  };
  return (
    <div className={`faq ${isActive ? "active" : ""}`}>
      {/* header */}
      <div className="faq__header">
        <p className="cursor-pointer hover:text-red" onClick={handleonClick}>
          {data.question}
        </p>
        <Arrow onClick={handleonClick} className="cursor-pointer" />
      </div>
      <div className="py-2 faq__content">
        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
