import { FunctionComponent } from "react";

export type ArticleType = {
  iconChevronRight?: string;
};

const Article: FunctionComponent<ArticleType> = ({ iconChevronRight }) => {
  return (
    <section className="self-stretch box-border flex flex-row flex-wrap items-start justify-start py-[2rem] pr-[0.188rem] pl-[0rem] gap-[2rem_1.875rem] max-w-full text-left text-[2.25rem] text-orange font-geologica border-b-[1px] border-dashed border-bottom">
      <div className="flex-1 flex flex-col items-start justify-start min-w-[20.938rem] min-h-[5.75rem] max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[2.625rem] font-thin font-inherit mq450:text-[1.375rem] mq450:leading-[1.563rem] mq750:text-[1.813rem] mq750:leading-[2.125rem]">
          Défends ton Asso 2023 Notre jury a délibéré.
        </h1>
      </div>
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.125rem] pl-[0rem] box-border gap-[2.5rem_2.375rem] min-w-[20.938rem] max-w-full text-[1.188rem] text-white font-inter mq750:gap-[2.5rem_1.188rem]">
        <h3 className="m-0 flex-1 relative text-inherit tracking-[-1px] leading-[1.5rem] font-normal font-inherit inline-block min-w-[18.75rem] max-w-[33.75rem] mq675:max-w-full">
          It’s a humanist sans serif font created by Lineto with geometric and
          organic forms. It is a quality sans-serif font with strong geometric
          types. You should utilize it for web sites, prints, and so forth.
        </h3>
        <div className="h-[3rem] w-[7.875rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.875rem] px-[0rem] box-border gap-[0.625rem] text-center text-[0.875rem] font-geologica">
          <b className="flex-1 relative leading-[1.25rem] inline-block min-w-[6.125rem]">
            En savoir plus
          </b>
          <img
            className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={iconChevronRight}
          />
        </div>
      </div>
    </section>
  );
};

export default Article;
