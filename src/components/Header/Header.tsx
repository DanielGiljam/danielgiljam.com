"use client";

import React from "react";

import { cn } from "@/cn";
import { AnimatingHamburgerIcon } from "@/components/AnimatingHamburgerIcon";
import { Logo } from "@/components/Logo";
import styles from "./Header.module.css";

const externalNavItems = [
  {
    label: "GitHub",
    icon: (
      <span
        aria-hidden={"true"}
        className={"icon-[simple-icons--github] block h-5 w-5"}
      />
    ),
    href: "https://github.com/danielgiljam",
  },
  {
    label: "LinkedIn",
    icon: (
      <span
        aria-hidden={"true"}
        className={"icon-[simple-icons--linkedin] block h-5 w-5"}
      />
    ),
    href: "https://linkedin.com/in/danielgiljam",
  },
];

const internalNavItems = [
  {
    label: "Blog",
    href: "/blog",
  },
];

/**
 * Based on https://flowbite.com/blocks/marketing/header/#default-header-navigation.
 */
export const Header = () => {
  const id = React.useId();
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky inset-0 z-20 -mb-(--header-height)">
      <nav
        className={cn(
          "absolute w-full bg-gradient-to-b from-black to-transparent px-4 py-2.5 not-data-open:h-(--header-height) lg:h-(--header-height) lg:px-6",
          styles.nav,
        )}
        data-open={open || undefined}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-x-8">
          <div className="flex-grow">
            <a
              href="/"
              className={cn("flex w-fit items-center", styles.homeLink)}
            >
              <Logo className="h-8" variant="medium_modified" />
              <span className="sr-only">Daniel Giljam</span>
            </a>
          </div>
          <div className="flex items-center gap-x-4 lg:order-2 lg:gap-x-8">
            <ul className={"flex gap-x-4 lg:gap-x-8"}>
              {externalNavItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    rel={"noreferrer"}
                    className={
                      "flex items-center rounded p-1 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:-m-1 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    }
                    target={"_blank"}
                  >
                    <span className={"sr-only"}>{item.label}</span>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="flex h-7 w-7 items-center justify-center rounded p-1 text-sm text-gray-500 hover:cursor-pointer hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:-m-1 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls={id}
              aria-expanded={open ? "true" : "false"}
              onClick={() => setOpen((open) => !open)}
            >
              <span className="sr-only">
                {open ? "Close main menu" : "Open main menu"}
              </span>
              <AnimatingHamburgerIcon className="h-8" open={open} />
            </button>
          </div>
          <div
            className={cn(
              "w-full items-center justify-between lg:order-1 lg:flex lg:w-auto",
              !open && "hidden",
            )}
            id={id}
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:gap-x-8">
              {internalNavItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
