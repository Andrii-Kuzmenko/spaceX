import { FC } from "react";

type Props = {
  className?: string;
}

export const BurgerIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_264_15)">
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="#0F0E08" />
    </g>
    <defs>
      <clipPath id="clip0_264_15">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
