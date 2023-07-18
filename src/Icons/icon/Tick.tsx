import * as React from "react";
import { SVGProps } from "react";
const Tick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m3.616 12.884 1.768-1.768 4.066 4.066 9.015-9.016 1.768 1.768L9.45 18.718l-5.834-5.834Z"
      fill="currentColor"
    />
  </svg>
);
export default Tick;
