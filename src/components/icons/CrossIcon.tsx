import { FC } from "react";

type Props = {
  className?: string;
}

export const CrossIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clip-path="url(#clip0_24970_357)">
      <path
        d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_24970_357">
        <rect
          width="24"
          height="24"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
