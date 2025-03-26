import React from "react";

const variants = {
  small: (props) => (
    <svg
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <path
        d="M160 80c0 39.03-28.011 71.57-65.01 78.595v-15.318c23.852-5.638 42.645-24.429 48.286-48.28h-33.32V80H160zM109.081 21.843c-8.753-4.389-18.631-6.86-29.081-6.86v.012c-5.158 0-10.176.602-14.988 1.74v-.013C36.344 23.497 14.983 49.274 14.983 80s21.361 56.503 50.029 63.278V29.33A52.753 52.753 0 0180 27.17V160c-44.153 0-80-35.847-80-80S35.847 0 80 0c12.859 0 25.013 3.04 35.782 8.441l-6.701 13.402z"
        fill="currentColor"
      />
    </svg>
  ),
  medium: (props) => (
    <svg
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <path
        d="M320 160c0 80.687-59.855 147.504-137.548 158.434l.044-22.75c57.872-9.54 103.612-55.263 113.177-113.125h-90.659v-22.515L320 160zM160 41.809V320C71.694 320 0 248.306 0 160S71.694 0 160 0c25.719 0 50.028 6.081 71.567 16.884l-10.056 20.109C202.999 27.708 182.105 22.482 160 22.482v.005c-7.65 0-22.466 1.824-22.466 1.824C72.306 35.048 22.482 91.751 22.482 160s49.824 124.952 115.052 135.689V43.945A118.623 118.623 0 01160 41.809z"
        fill="currentColor"
      />
    </svg>
  ),
  medium_modified: (props) => (
    <svg
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <path
        d="M160 51.809V320C71.694 320 0 248.306 0 160S71.694 0 160 0c25.719 0 50.028 6.081 71.567 16.884l-10.056 20.109C202.999 27.708 182.105 22.482 160 22.482v.005c-7.65 0-22.466 1.824-22.466 1.824C72.306 35.048 22.482 91.751 22.482 160s49.824 124.952 115.052 135.689V53.945A118.623 118.623 0 01160 51.809zM192.452 293.66c53.109-12.87 94.212-56.6 103.221-111.101h-80.659v-22.515L320 160c0 77.185-54.773 141.679-127.548 156.701V293.66z"
        fill="currentColor"
      />
    </svg>
  ),
  large: (props) => (
    <svg
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <path
        d="M385 320h255c0 165.642-126.127 302.059-287.5 318.366v-32.772c132.669-14.99 238.104-120.426 253.094-253.094H385V320z"
        fill="currentColor"
      />
      <path
        d="M318.966 639.998C142.828 639.44 0 496.268 0 320 0 143.387 143.387 0 320 0c51.278 0 99.756 12.087 142.736 33.566l-14.52 29.041c-38.629-19.314-82.201-30.184-128.293-30.184-158.676 0-287.5 128.824-287.5 287.5 0 147.731 111.665 269.586 255.124 285.694V63.59a260.443 260.443 0 0132.335-2.008H320l-1.034 578.416z"
        fill="currentColor"
      />
    </svg>
  ),
} satisfies {
  [key: string]: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

export const Logo = ({
  variant = "medium",
  ...props
}: React.SVGProps<SVGSVGElement> & { variant?: keyof typeof variants }) => {
  return variants[variant](props);
};
