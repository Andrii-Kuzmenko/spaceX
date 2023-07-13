import { FC } from "react";

type Props = {
  className?: string;
}

export const ArrowIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Light/Arrow - Right 2">
      <g id="Arrow - Right 2">
        <path
          id="Stroke 1"
          d="M15.5 5L8.5 12L15.5 19"
          stroke="#200E32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
