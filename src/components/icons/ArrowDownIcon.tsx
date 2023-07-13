import { FC } from "react";

type Props = {
  className?: string;
}

export const ArrowDownIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Iconly/Light/Arrow - Down">
      <g id="Arrow - Down">
        <path
          id="Stroke 1"
          d="M20.4572 32.9167V7.91667"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Stroke 3"
          d="M30.4978 22.8337L20.4578 32.917L10.4162 22.8337"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
