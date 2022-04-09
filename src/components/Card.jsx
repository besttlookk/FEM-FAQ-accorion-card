import React from "react";
import mobileIllustration from "../images/illustration-woman-online-mobile.svg";
import mobilePattern from "../images/bg-pattern-mobile.svg";
import desktopIllustration from "../images/illustration-woman-online-desktop.svg";
import desktopPattern from "../images/bg-pattern-desktop.svg";
import boxIcon from "../images/illustration-box-desktop.svg";
import FAQList from "./FAQList";

const Card = () => {
  return (
    <div className="relative max-w-sm px-5 bg-white shadow-2xl rounded-3xl w-90w lg:max-w-3xl">
      <div className="absolute top-0 transform -translate-y-1/2 lg:hidden left-12 right-12">
        <img alt="illustration" src={mobileIllustration} className="w-72" />
      </div>

      <div className="absolute transform top-4 lg:hidden left-12 right-12">
        <img alt="mobile-pattern" src={mobilePattern} className="w-72" />
      </div>

      <div className="absolute hidden transform -translate-y-1/2 -left-12 lg:block top-1/2">
        <img alt="illustration" src={desktopIllustration} className="w-80" />
      </div>
      <div className="absolute hidden transform -translate-y-1/2 -left-12 lg:block top-1/2">
        <img alt="illustration" src={desktopPattern} className="w-80" />
      </div>
      <div className="absolute hidden transform -translate-y-16 -left-20 lg:block top-1/2">
        <img alt="illustration" src={boxIcon} className="w-44" />
      </div>
      {/* main section */}
      <div className="pt-40 lg:pl-80 pb-14 lg:pt-14 lg:pr-16">
        <h1 className="mb-4 text-4xl font-bold text-center lg:text-left">
          FAQ
        </h1>
        <FAQList />
      </div>
    </div>
  );
};

export default Card;
