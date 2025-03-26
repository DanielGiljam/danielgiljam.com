import Link from "next/link";

import { Logo } from "@/components/Logo";

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
    <footer className="bg-white px-4 antialiased 2xl:px-0 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="border-b border-gray-100 py-6 md:py-8 lg:py-16 dark:border-gray-700">
          <div className="items-start gap-6 md:gap-8 lg:flex 2xl:gap-24">
            <div className="grid min-w-0 flex-1 grid-cols-2 gap-6 md:gap-8 xl:grid-cols-3">
              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {" "}
                      Premium{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {" "}
                      Affiliate Program{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {" "}
                      Get Coupon{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Order & Purchases
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Track Your Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Purchase History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Payment Methods
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Support & Services
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Service Centers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Warranty Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Product Manuals
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Partnerships
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Partner With Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Become a Supplier
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Collaboration Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sponsorship Requests
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Payment Options
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Credit & Debit Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      PayPal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Bank Transfers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Installment Plans
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Rewards
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Reward Points
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Referral Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      VIP Membership
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Exclusive Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Redeem Rewards
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Trade Assurance
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      What is Trade Assurance?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Buyer Protection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Seller Guarantee
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Sell on Flowbite
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Seller Registration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      How to Sell
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Seller Policies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Seller Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Seller Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Get Support
                </h6>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Community Forums
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Technical Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
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
