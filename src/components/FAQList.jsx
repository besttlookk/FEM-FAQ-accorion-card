import React, { useState } from "react";
import dataArr from "../data.json";
import FAQ from "./FAQ";

const FAQList = () => {
  const [activeQuesArr, setActiveuesArr] = useState([]);
  console.log(dataArr);
  return (
    <div>
      {dataArr.map((data) => (
        <FAQ
          data={data}
          key={data.id}
          activeQuesArr={activeQuesArr}
          setActiveuesArr={setActiveuesArr}
        />
      ))}
    </div>
  );
};

export default FAQList;
