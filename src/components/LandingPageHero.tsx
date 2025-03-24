import Image from "next/image";
import { Logo } from "./Logo";

export const LandingPageHero = () => {
  return (
    <section
      className={"relative flex min-h-[60vh] items-center justify-center"}
    >
      <div
        className={"z-10 flex flex-col items-center gap-[min(3.2vmin,_32px)]"}
      >
        <Logo
          variant={"large"}
          aria-hidden={"true"}
          className={"h-[min(32vmin,_320px)] w-[min(32vmin,_320px)]"}
        />
        <h1
          className={
            "relative end-[-0.1em] text-center font-(family-name:--font-roboto) text-[min(6vmin,_48px)] font-light tracking-[0.2em] text-nowrap uppercase"
          }
        >
          Daniel Giljam
        </h1>
      </div>
      <Image
        className={"-z-10 object-cover"}
        alt={"starfield"}
        aria-hidden={"true"}
        sizes={"100vw"}
        src={"/starfield.png"}
        fill
        priority
      />
    </section>
  );
};
