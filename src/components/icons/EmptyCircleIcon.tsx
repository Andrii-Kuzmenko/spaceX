import { FC } from "react";

type Props = {
  className?: string;
}

export const EmptyCircleIcon: FC<Props> = ({ className }) => (
  < svg
    className={className}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 3">
      <circle
        id="Ellipse 2"
        cx="12.5"
        cy="12"
        r="11.5"
        stroke="#1E1E1E"
      />
    </g>
  </svg >
);
