import { cn } from "@/cn";
import styles from "./Header.module.css";
import { Logo } from "./Logo";

const navItems = [
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
];

/**
 * Based on https://flowbite.com/blocks/marketing/header/#default-header-navigation.
 */
export const Header = () => {
  return (
    <header className="sticky inset-0 z-20 -mb-(--header-height)">
      <nav
        className={cn(
          "h-(--header-height) bg-gradient-to-b from-black to-transparent px-4 py-2.5 lg:px-6",
          styles.nav,
        )}
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a
            href="/"
            className={cn(
              "invisible flex items-center opacity-0",
              styles.homeLink,
            )}
          >
            <Logo
              className="h-8"
              variant="medium_modified"
              aria-hidden="true"
            />
            <span className="sr-only">Daniel Giljam</span>
          </a>
          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pr-4 pl-3 text-white lg:bg-transparent lg:p-0 dark:text-white"
                    aria-current="page"
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
