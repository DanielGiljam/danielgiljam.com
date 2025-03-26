import Link from "next/link";

import { Logo } from "@/components/Logo";

const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded-sm bg-gray-100/50 px-1.5 py-0.5 text-[smaller] hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700">
    {children}
  </code>
);

const links = [
  {
    heading: "Degree thesis",
    links: [
      {
        label: "Web edition",
        href: "/degree-thesis",
      },
      {
        label: "Print edition",
        href: "https://www.theseus.fi/handle/10024/800032",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        icon: (
          <span
            className={"icon-[simple-icons--github] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>tanstack-query-with-orbitjs</InlineCode>,
        href: "https://github.com/DanielGiljam/tanstack-query-with-orbitjs#readme",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        icon: (
          <span
            className={"icon-[simple-icons--npm] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>@tanstack-query-with-orbitjs/core</InlineCode>,
        href: "https://www.npmjs.com/package/@tanstack-query-with-orbitjs/core",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        icon: (
          <span
            className={"icon-[simple-icons--npm] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>@tanstack-query-with-orbitjs/react</InlineCode>,
        href: "https://www.npmjs.com/package/@tanstack-query-with-orbitjs/react",
        target: "_blank",
        rel: "noreferrer",
      },
    ],
  },
  {
    heading: "Offline full-text search in web app",
    links: [
      {
        label: "Demo note taking app",
        href: "/offline-full-text-search-in-web-app/demo-note-taking-app",
      },
    ],
  },
  {
    heading: "Orbit utils",
    links: [
      {
        icon: (
          <span
            className={"icon-[simple-icons--github] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>orbit-utils</InlineCode>,
        href: "https://github.com/danielgiljam/orbit-utils#readme",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        icon: (
          <span
            className={"icon-[simple-icons--npm] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>@orbit-utils/zod-to-model-definition</InlineCode>,
        href: "https://www.npmjs.com/package/@orbit-utils/zod-to-model-definition",
        target: "_blank",
        rel: "noreferrer",
      },
    ],
  },
  {
    heading: "Miscellaneous",
    links: [
      {
        icon: (
          <span
            className={"icon-[simple-icons--github] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: (
          <InlineCode>
            nx-supabase-payload-nextjs-shadcn-storybook-monorepo
          </InlineCode>
        ),
        href: "https://github.com/DanielGiljam/nx-supabase-payload-nextjs-shadcn-storybook-monorepo#readme",
        target: "_blank",
        rel: "noreferrer",
      },
      {
        icon: (
          <span
            className={"icon-[simple-icons--github] relative -bottom-[0.2em]"}
            aria-hidden={"true"}
          />
        ),
        label: <InlineCode>ai-document-outline-generator</InlineCode>,
        href: "https://github.com/DanielGiljam/ai-document-outline-generator#readme",
        target: "_blank",
        rel: "noreferrer",
      },
    ],
  },
  {
    heading: "Time travel",
    links: [
      {
        label: "2018",
        href: "/time-travel/2018",
      },
    ],
  },
];

const bottomLinks = [
  {
    label: "Credits & attributions",
    href: "/credits",
  },
  {
    label: "Source code",
    title: "This website's source code on GitHub",
    href: "https://github.com/danielgiljam/danielgiljam.com",
    target: "_blank",
    rel: "noreferrer",
  },
];

/**
 * Based on https://flowbite.com/blocks/e-commerce/mega-footers/#default-mega-footer.
 */
export const Footer = () => {
  return (
    <footer className="px-4 antialiased lg:px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="border-b border-gray-100 py-6 md:py-8 lg:py-16 dark:border-gray-700/50">
          <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
            <div className="mt-6 min-w-0 flex-1 md:columns-2 md:gap-8 lg:mt-0 lg:-mb-12 xl:columns-3">
              {links.map(({ heading, links }) => (
                <div key={heading} className="mb-12">
                  <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    {heading}
                  </h6>
                  <ul className="space-y-3">
                    {links.map(({ icon, label, ...props }, index) => (
                      <li key={index}>
                        <Link
                          {...props}
                          className="block truncate text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                          {icon}
                          <span className="not-only:ms-2">{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 md:py-8">
          <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
            <p className="flex items-center gap-3">
              <Logo className="h-6 w-auto" variant="medium_modified" />
              <span
                className={
                  "relative end-[-0.1em] text-center font-(family-name:--font-roboto) text-lg leading-none font-light tracking-[0.2em] text-nowrap uppercase"
                }
              >
                Daniel Giljam
              </span>
            </p>

            <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 xl:justify-center dark:text-white">
              {bottomLinks.map(({ label, ...props }) => (
                <li key={label}>
                  <Link {...props} className="font-medium hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Daniel Giljam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
