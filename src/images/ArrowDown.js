import React from "react";

const ArrowDown = (props) => (
  <svg
    // width="50"
    // height="50"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlnsAvocode="https://avocode.com/"
    viewBox="0 0 50 50"
    onClick={props.onClick}
    className={props.className}
  >
    <defs>
      <clipPath id="ClipPath1051">
        <path
          d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25v0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
          fill="#ffffff"
        ></path>
      </clipPath>
      <clipPath id="ClipPath1060">
        <path
          d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25v0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
          fill="#ffffff"
        ></path>
      </clipPath>
    </defs>
    <path
      d="M25.49998,29.87787c-0.60573,0 -1.21143,-0.23364 -1.67004,-0.69226l-5.64177,-5.64175c-0.25093,-0.25095 -0.25093,-0.66629 0,-0.91721c0.25095,-0.25096 0.66629,-0.25096 0.91722,0l5.64178,5.64175c0.41534,0.41534 1.09027,0.41534 1.5056,0l5.64178,-5.64175c0.25095,-0.25096 0.66631,-0.25096 0.91722,0c0.25093,0.25092 0.25093,0.66626 0,0.91721l-5.64177,5.64175c-0.45862,0.45862 -1.06432,0.69226 -1.67003,0.69226z"
      fill="#ffffff"
      fill-opacity="1"
    />
    <path
      d="M25,50c-13.80712,0 -25,-11.19288 -25,-25v0c0,-13.80712 11.19288,-25 25,-25h0c13.80712,0 25,11.19288 25,25v0c0,13.80712 -11.19288,25 -25,25z"
      fill-opacity="0"
      fill="#ffffff"
      stroke-dashoffset="0"
      stroke-linejoin="miter"
      stroke-linecap="butt"
      stroke-opacity="1"
      stroke="#ffffff"
      stroke-miterlimit="20"
      stroke-width="2"
      clip-path='url("#ClipPath1051")'
    />
  </svg>
);

export default ArrowDown;
