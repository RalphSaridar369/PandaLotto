import * as React from "react";

const SvgDot = (props) => (
  <svg width={45} height={45} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.43}>
      <path
        d="M22.511 24.056a1.614 1.614 0 1 0 0-3.227 1.614 1.614 0 0 0 0 3.227z"
        fill="#b382ec"
        fillOpacity={0.4}
      />
      <path
        d="M22.511 24.056a1.614 1.614 0 1 0 0-3.227 1.614 1.614 0 0 0 0 3.227z"
        fill="none"
        stroke="#b382ec"
        strokeMiterlimit={20}
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgDot;
