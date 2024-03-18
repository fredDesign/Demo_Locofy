import { FunctionComponent } from "react";
import Header from "../components/Header";
import ArtHero from "../components/ArtHero";
import Article from "../components/Article";

const ArtComponent: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-midnightblue flex flex-col items-center justify-start py-[6rem] px-[4rem] box-border gap-[2.5rem] tracking-[normal] mq450:gap-[1.25rem_2.5rem] mq750:pl-[2rem] mq750:pr-[2rem] mq750:box-border">
      <Header />
      <main className="self-stretch flex flex-col items-center justify-start gap-[3.125rem] max-w-full mq675:gap-[1.563rem_3.125rem]">
        <ArtHero />
        <Article iconChevronRight="/iconchevron-right-1.svg" />
        <Article iconChevronRight="/iconchevron-right-1.svg" />
        <Article iconChevronRight="/iconchevron-right-3.svg" />
      </main>
    </div>
  );
};

export default ArtComponent;
