import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="self-stretch flex flex-row flex-wrap items-center justify-between max-w-full gap-[-0.125rem] text-left text-[4.75rem] text-white font-geologica">
      <div className="w-[71.813rem] flex flex-col items-start justify-start gap-[1.875rem] max-w-full">
        <div className="h-[5.688rem] flex flex-row items-center justify-start gap-[0.75rem] max-w-full">
          <img
            className="h-[3.625rem] w-[4.25rem] relative"
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit whitespace-nowrap">
            Happy culture
          </h1>
        </div>
        <h1 className="m-0 self-stretch relative text-[2.75rem] tracking-[-1px] leading-[3rem] italic font-bold font-inter whitespace-nowrap">
           Cultivons le bzzz !
        </h1>
      </div>
      <button className="cursor-pointer py-[0.75rem] pr-[1.313rem] pl-[1.5rem] bg-[transparent] h-[3rem] rounded-81xl box-border flex flex-row items-center justify-start gap-[0.75rem] whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
        <div className="relative text-[1rem] leading-[150%] font-medium font-geologica text-gray text-left">
          Toutes les actualités
        </div>
        <img
          className="h-[0.938rem] w-[1.913rem] relative"
          alt=""
          src="/arrow.svg"
        />
      </button>
    </header>
  );
};

export default Header;
