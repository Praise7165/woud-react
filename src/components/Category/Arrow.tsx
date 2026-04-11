import { forwardRef } from "react";

const Arrow = forwardRef<SVGPathElement>((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <g id="Frame">
        <path
          id="Vector"
          d="M6 26.5L26 6.5M26 6.5H11M26 6.5V21.5"
          stroke="#6a7282"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          ref={ref}
          transform-origin="center"
          className="border transition-transform duration-300 ease-linear"
        />
      </g>
    </svg>
  );
});
export default Arrow;
