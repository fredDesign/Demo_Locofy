import { FunctionComponent } from "react";

const ArtHero: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.188rem] pl-[0rem] box-border gap-[2rem_1.875rem] max-w-full text-left text-[2.25rem] text-orange font-geologica">
      <div className="h-[21rem] flex-1 flex flex-col items-start justify-start min-w-[20.938rem] max-w-full">
        <img
          className="w-[37.5rem] flex-1 relative rounded-sm max-h-full object-cover min-w-[18.75rem] max-w-[37.5rem] mq675:max-w-full"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-row flex-wrap items-center justify-start mix-blend-normal min-w-[20.938rem] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pr-[7.125rem] pl-[0rem] box-border gap-[1.5rem] max-w-full mq450:pr-[1.25rem] mq450:box-border mq750:pr-[3.563rem] mq750:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[5.125rem] gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[2.625rem] font-thin font-inherit mq450:text-[1.375rem] mq450:leading-[1.563rem] mq750:text-[1.813rem] mq750:leading-[2.125rem]">
              Défends ton Asso 2023 Notre jury a délibéré.
            </h1>
            <h3 className="m-0 self-stretch relative text-[1.188rem] tracking-[-1px] leading-[1.5rem] font-normal font-inter text-white">
              It’s a humanist sans serif font created by Lineto with geometric
              and organic forms. It is a quality sans-serif font with strong
              geometric types. You should utilize it for web sites, prints, and
              so forth.
            </h3>
          </div>
          <div className="w-full h-[3rem] flex flex-col items-start justify-start min-w-[18.75rem] max-w-[36.25rem] text-center text-[0.875rem] text-white mq675:max-w-full">
            <div className="w-[7.875rem] flex-1 flex flex-row items-start justify-start gap-[1.25rem]">
              <div className="self-stretch flex-1 rounded-11xl overflow-hidden flex flex-row items-center justify-center py-[0.875rem] px-[0rem] gap-[0.625rem]">
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/iconchevron-left.svg"
                />
                <b className="flex-1 relative leading-[1.25rem] inline-block min-w-[6.125rem]">
                  En savoir plus
                </b>
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/iconchevron-right.svg"
                />
              </div>
              <div className="self-stretch rounded-lg overflow-hidden hidden flex-row items-center justify-center py-[0.875rem] px-[1rem] gap-[0.625rem] text-zima-blue border-[2px] border-solid border-zima-blue">
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/iconchevron-left.svg"
                />
                <b className="self-stretch relative leading-[140%]">
                  Download Now
                </b>
                <img
                  className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/iconchevron-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtHero;
