import Image from "next/image";

import { Logo } from "@/components/Logo";
import { XRLogoWrapper } from "./XRLogoWrapper";
import starfield from "./starfield.png";

export const LandingPageHero = () => {
  return (
    <section
      className={
        "relative flex h-(--landing-page-hero-height) items-center justify-center"
      }
    >
      <div
        className={
          "z-10 mt-(--header-height) flex flex-col items-center gap-(--logo-lockup-gap-size)"
        }
      >
        <Logo
          variant={"large"}
          aria-hidden={"true"}
          className={
            "invisible h-(--logo-lockup-logo-size) w-(--logo-lockup-logo-size)"
          }
        />
        <h1
          className={
            "relative end-[-0.1em] text-center font-(family-name:--font-roboto) text-(length:--logo-lockup-text-size) leading-none font-light tracking-[0.2em] text-nowrap uppercase"
          }
        >
          Daniel Giljam
        </h1>
      </div>
      <XRLogoWrapper />
      <Image
        className={"-z-10 object-cover"}
        alt={"starfield"}
        aria-hidden={"true"}
        sizes={"100vw"}
        src={starfield.src}
        fill
        priority
      />
    </section>
  );
};
