import Image from "next/image";

import { Logo3D } from "./Logo3D";
import starfield from "./starfield.png";

import { Logo } from "@/components/Logo";

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
          aria-hidden={"true"}
          className={
            "invisible h-(--logo-lockup-logo-size) w-(--logo-lockup-logo-size)"
          }
          variant={"large"}
        />
        <h1
          className={
            "relative end-[-0.1em] text-center font-(family-name:--font-roboto) text-(length:--logo-lockup-text-size) leading-none font-light tracking-[0.2em] text-nowrap uppercase"
          }
        >
          Daniel Giljam
        </h1>
      </div>
      <Logo3D />
      <Image
        alt={"starfield"}
        aria-hidden={"true"}
        className={"-z-10 object-cover"}
        sizes={"100vw"}
        src={starfield.src}
        fill
        priority
      />
    </section>
  );
};
