import React from "react";

import { cn } from "@/cn";

export const DeviceOrientationApiPermissionButton = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={cn(
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-md",
        className,
      )}
      type={"button"}
      onClick={onClick}
    >
      <svg
        aria-hidden={"true"}
        className={"h-6 w-6"}
        viewBox={"0 0 24 24"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={"M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"}
          fill={"currentColor"}
        />
        <path
          d={"M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"}
          fill={"currentColor"}
        />
        <path
          d={"M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"}
          fill={"currentColor"}
        />
        <path
          d={"M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"}
          fill={"currentColor"}
        />
        <g
          fill={"none"}
          stroke={"currentColor"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          strokeWidth={"2.5"}
          transform={"translate(12, 12) scale(0.75) translate(-12, -12)"}
        >
          <path
            d={
              "M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12s2.239 10 5 10q.514-.002 1-.2m2.194-8.093l3.814 1.86l-1.86 3.814"
            }
          />
          <path
            d={
              "M19 15.57c-1.804.885-4.274 1.43-7 1.43c-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
            }
          />
        </g>
      </svg>
      <span className={"sr-only"}>Enable gyroscope</span>
    </button>
  );
};
