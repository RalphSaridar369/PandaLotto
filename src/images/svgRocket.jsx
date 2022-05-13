const SvgRocket = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient
        id="rocket_svg__b"
        gradientUnits="userSpaceOnUse"
        x1={61.76}
        y1={81.45}
        x2={61.76}
        y2={66.02}
      >
        <stop stopColor="#55fbff" offset={0} />
        <stop stopColor="#51f7fd" offset={0.28} />
        <stop stopColor="#48eef9" offset={0.49} />
        <stop stopColor="#38def1" offset={0.68} />
        <stop stopColor="#21c7e7" offset={0.85} />
        <stop stopColor="#0ab0dd" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__c"
        gradientUnits="userSpaceOnUse"
        x1={47.69}
        y1={62.46}
        x2={75.77}
        y2={62.46}
      >
        <stop stopColor="#f94e41" offset={0.01} />
        <stop stopColor="#f2473a" offset={0.12} />
        <stop stopColor="#d62d20" offset={0.68} />
        <stop stopColor="#cc2417" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__d"
        gradientUnits="userSpaceOnUse"
        x1={16.83}
        y1={61.06}
        x2={36.43}
        y2={61.06}
      >
        <stop stopColor="#ff871a" offset={0.01} />
        <stop stopColor="#fd7c21" offset={0.27} />
        <stop stopColor="#fa6034" offset={0.73} />
        <stop stopColor="#f94e41" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__e"
        gradientUnits="userSpaceOnUse"
        x1={0.27}
        y1={61.06}
        x2={19.87}
        y2={61.06}
      >
        <stop stopColor="#ff871a" offset={0.01} />
        <stop stopColor="#fd7c21" offset={0.27} />
        <stop stopColor="#fa6034" offset={0.73} />
        <stop stopColor="#f94e41" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__g"
        gradientUnits="userSpaceOnUse"
        x1={60.08}
        y1={41.08}
        x2={61.56}
        y2={41.08}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ece9f9" offset={0.16} />
        <stop stopColor="#c5bcee" offset={0.54} />
        <stop stopColor="#ada0e7" offset={0.83} />
        <stop stopColor="#a496e5" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__h"
        gradientUnits="userSpaceOnUse"
        x1={27.17}
        y1={22.2}
        x2={48.16}
        y2={22.2}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ece9f9" offset={0.16} />
        <stop stopColor="#c5bcee" offset={0.54} />
        <stop stopColor="#ada0e7" offset={0.83} />
        <stop stopColor="#a496e5" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__i"
        gradientUnits="userSpaceOnUse"
        x1={74.7}
        y1={18.46}
        x2={92.89}
        y2={18.46}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ece9f9" offset={0.16} />
        <stop stopColor="#c5bcee" offset={0.54} />
        <stop stopColor="#ada0e7" offset={0.83} />
        <stop stopColor="#a496e5" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__j"
        gradientUnits="userSpaceOnUse"
        x1={34.84}
        y1={21.49}
        x2={85.32}
        y2={21.49}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ece9f9" offset={0.16} />
        <stop stopColor="#c5bcee" offset={0.54} />
        <stop stopColor="#ada0e7" offset={0.83} />
        <stop stopColor="#a496e5" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__k"
        gradientUnits="userSpaceOnUse"
        x1={59.71}
        y1={36.1}
        x2={59.71}
        y2={-3.84}
      >
        <stop stopColor="#826ccf" offset={0.01} />
        <stop stopColor="#ab94d3" offset={0.21} />
        <stop stopColor="#d8c0d7" offset={0.46} />
        <stop stopColor="#f4dbda" offset={0.66} />
        <stop stopColor="#ffe6dc" offset={0.77} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__l"
        gradientUnits="userSpaceOnUse"
        x1={43.62}
        y1={17.24}
        x2={83.56}
        y2={17.24}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#ece9f9" offset={0.16} />
        <stop stopColor="#c5bcee" offset={0.54} />
        <stop stopColor="#ada0e7" offset={0.83} />
        <stop stopColor="#a496e5" offset={1} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__m"
        gradientUnits="userSpaceOnUse"
        x1={59.7}
        y1={35.18}
        x2={59.7}
        y2={-2.91}
      >
        <stop stopColor="#ffe6dc" offset={0} />
        <stop stopColor="#f2dada" offset={0.07} />
        <stop stopColor="#c2aad5" offset={0.37} />
        <stop stopColor="#9f88d2" offset={0.64} />
        <stop stopColor="#8973cf" offset={0.85} />
        <stop stopColor="#826ccf" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__n"
        gradientUnits="userSpaceOnUse"
        x1={59.7}
        y1={31.75}
        x2={59.7}
        y2={0.51}
      >
        <stop stopColor="#ffee2f" offset={0.01} />
        <stop stopColor="#ffda2b" offset={0.15} />
        <stop stopColor="#ffad21" offset={0.53} />
        <stop stopColor="#ff911c" offset={0.82} />
        <stop stopColor="#ff871a" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__o"
        gradientUnits="userSpaceOnUse"
        x1={59.71}
        y1={20.85}
        x2={59.71}
        y2={0.51}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#fed" offset={0.15} />
        <stop stopColor="#ffd09f" offset={0.44} />
        <stop stopColor="#ffba71" offset={0.69} />
        <stop stopColor="#ffad55" offset={0.88} />
        <stop stopColor="#ffa84b" offset={0.99} />
      </linearGradient>
      <linearGradient
        id="rocket_svg__p"
        gradientUnits="userSpaceOnUse"
        x1={60.62}
        y1={72.34}
        x2={64.23}
        y2={72.34}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#fed" offset={0.15} />
        <stop stopColor="#ffd09f" offset={0.44} />
        <stop stopColor="#ffba71" offset={0.69} />
        <stop stopColor="#ffad55" offset={0.88} />
        <stop stopColor="#ffa84b" offset={0.99} />
      </linearGradient>
      <radialGradient
        id="rocket_svg__a"
        gradientUnits="userSpaceOnUse"
        cx={61.484}
        cy={75.184}
        r={14.4}
      >
        <stop stopColor="#fff" offset={0} />
        <stop stopColor="#f5f5f5" offset={0.08} />
        <stop stopColor="#dcdcdc" offset={0.22} />
        <stop stopColor="#cacaca" offset={0.31} />
        <stop stopColor="#b5b5b5" offset={0.4} />
        <stop stopColor="#818181" offset={0.59} />
        <stop stopColor="#2f2f2f" offset={0.86} />
        <stop offset={1} />
      </radialGradient>
      <radialGradient
        id="rocket_svg__f"
        gradientUnits="userSpaceOnUse"
        cx={48.631}
        cy={18.182}
        r={48.365}
      >
        <stop stopColor="#ffe6dc" offset={0} />
        <stop stopColor="#f4dcdd" offset={0.16} />
        <stop stopColor="#d8c4df" offset={0.44} />
        <stop stopColor="#ab9ce4" offset={0.81} />
        <stop stopColor="#9185e7" offset={0.99} />
      </radialGradient>
    </defs>
    <g transform="rotate(41 60.095 47.715)" opacity={0.5}>
      <path
        d="M48.591 68.588s-2.115 10.84-.77 15.304l5.193-5.102 8.847 15.092 8.462-14.667 5.385 5.102S77.63 77.09 73.592 68.8c-4.038-8.29-25-.213-25-.213z"
        fill="url(#rocket_svg__a)"
      />
      <path
        d="M53.544 67.906s-1.32 5.805-.48 8.195l3.241-2.731 5.521 8.08 5.282-7.853 3.36 2.732s1.201-3.87-1.32-8.309c-2.52-4.439-15.604-.114-15.604-.114z"
        fill="url(#rocket_svg__b)"
      />
      <path
        d="M55.434 67.48s-.979 4.302-.356 6.074l2.402-2.025 4.092 5.989 3.914-5.82 2.49 2.024s.89-2.868-.978-6.157c-1.868-3.29-11.564-.085-11.564-.085z"
        fill="#e1ffff"
      />
      <path
        d="M75.688 69.096a25.774 25.774 0 0 1-4.614 1.565c-10.921 2.748-23.466-.355-23.466-.355l1.459-8.792 1.116-8.008 22.731-.237z"
        fill="url(#rocket_svg__c)"
      />
      <path
        d="M75.688 69.096a25.77 25.77 0 0 1-4.614 1.565c-6.78-4.365-18.246-8.007-22.007-9.147l1.116-8.008 22.731-.237z"
        fill="#9185e7"
      />
      <path
        d="M36.434 52.475 32.24 65.411l-9.652 29.754S7.856 59.819 25.54 32.106c1.087-1.753 2.33-3.461 3.705-5.147z"
        fill="url(#rocket_svg__d)"
      />
      <path
        d="m30.15 30.188-.916-3.24c-23.298 28.29-6.657 68.228-6.657 68.228l.03-.09c-2.637-9.173-9.928-41.019 7.543-64.898z"
        fill="#ffc82c"
      />
      <path
        d="M36.434 52.475 32.24 65.411c-.332-11.494-4.792-27.137-6.7-33.305 1.087-1.753 2.33-3.461 3.705-5.147z"
        fill="#9185e7"
      />
      <path
        d="m83.753 52.475 4.194 12.936L97.6 95.165s14.733-35.346-2.951-63.059c-1.087-1.753-2.33-3.461-3.706-5.147z"
        fill="url(#rocket_svg__e)"
      />
      <path
        d="m90.038 30.188.915-3.24c23.298 28.29 6.657 68.228 6.657 68.228l-.03-.09c2.638-9.173 9.929-41.019-7.542-64.898z"
        fill="#ffc82c"
      />
      <path
        d="m83.753 52.475 4.194 12.936c.333-11.494 4.793-27.137 6.7-33.305-1.086-1.753-2.329-3.461-3.705-5.147z"
        fill="#9185e7"
      />
      <path
        d="M93.098 29.274c0 12.98-7.122 24.251-17.595 29.91a31.819 31.819 0 0 1-13.046 3.815c-.289.045-.6.045-.888.067-.2.022-.377.022-.555.022-.31.023-.62.023-.931.023-6.28 0-12.16-1.82-17.174-4.97-5.902-3.684-10.584-9.231-13.29-15.843a34.622 34.622 0 0 1-2.308-9.12 19.108 19.108 0 0 1-.133-1.62 25.859 25.859 0 0 1-.09-2.284c0-18.705 14.778-33.837 32.995-33.837 16.53 0 30.22 12.425 32.638 28.667.067.555.133 1.065.178 1.597.133 1.176.2 
2.374.2 3.573z"
        fill="url(#rocket_svg__f)"
      />
      <path
        d="M61.562 63.059c-.2.022-.377.022-.555.022l-.932-43.977.555-.022z"
        fill="url(#rocket_svg__g)"
      />
      <path
        d="M48.16 11.227v.555c-.177 0-15.576.288-20.857 21.39a19.052 19.052 0 0 1-.133-1.62c5.703-20.059 20.813-20.325 20.99-20.325z"
        fill="url(#rocket_svg__h)"
      />
      <path
        d="M92.891 25.694c-6.523-13.69-18.06-13.912-18.194-13.912v-.555c.133 0 11.25.2 18.017 12.87.067.554.133 1.064.177 1.597z"
        fill="url(#rocket_svg__i)"
      />
      <path
        d="M84.763 21.493c0 13.957-11.073 25.314-24.684 25.314-13.61 0-24.684-11.357-24.684-25.314 0-13.958 11.073-25.314 24.684-25.314 13.61 0 24.684 11.356 24.684 25.314zm.555 0c0-14.264-11.323-25.869-25.24-25.869-13.915 0-25.238 11.605-25.238 25.869S46.163 47.36 60.079 47.36s25.239-11.604 25.239-25.868z"
        fill="url(#rocket_svg__j)"
      />
      <g transform="rotate(-45 59.71 16.13)">
        <path
          d="M39.74 16.13c0-11.028 8.94-19.969 19.97-19.969 11.028 0 19.968 8.941 19.968 19.97 0 11.028-8.94 19.97-19.969 19.97-11.029-.001-19.97-8.942-19.97-19.97z"
          fill="url(#rocket_svg__k)"
        />
      </g>
      <g transform="rotate(-45 63.59 17.24)">
        <path
          d="M43.623 17.24c0-11.029 8.94-19.97 19.969-19.97 11.029 0 19.97 8.941 19.97 19.97 0 11.029-8.941 19.97-19.97 19.97-11.029 0-19.97-8.941-19.97-19.97z"
          fill="url(#rocket_svg__l)"
        />
      </g>
      <g transform="rotate(-45 59.705 16.135)">
        <path
          d="M40.664 16.13c0-10.517 8.527-19.044 19.045-19.044 10.518 0 19.045 8.527 19.045 19.045 0 10.518-8.527 19.045-19.045 19.045-10.518 0-19.045-8.527-19.045-19.045z"
          fill="url(#rocket_svg__m)"
        />
      </g>
      <path
        d="M42.909 58.14c-5.902-3.683-10.584-9.23-13.29-15.842 3.128-18.438 14-20.058 14-20.058l4.992 7.766c-7.832 5.747-7.233 19.037-5.702 28.134z"
        fill="#fff"
      />
      <g transform="rotate(-45 59.705 16.13)">
        <path
          d="M44.085 16.13C44.085 7.503 51.08.508 59.709.508c8.629 0 15.624 6.995 15.624 15.624 0 8.629-6.995 
15.624-15.624 15.624-8.629 0-15.624-6.995-15.624-15.624z"
          fill="url(#rocket_svg__n)"
        />
      </g>
      <path
        d="M59.709 30.276c-8.38 0-15.198-6.602-15.587-14.885-.011.247-.037.49-.037.74 0 8.629 6.995 15.624 15.624 15.624 8.629 0 15.624-6.995 15.624-15.624 0-.25-.026-.493-.037-.74-.39 8.283-7.208 14.885-15.587 14.885z"
        fill="#fff"
      />
      <path
        d="M59.709 9.937c6.985 0 12.897 4.585 14.896 10.909.471-1.489.728-3.072.728-4.715C75.333 7.5 68.338.507 59.71.507c-8.629 0-15.624 6.995-15.624 15.624 0 1.643.257 3.227.728 4.715 2-6.324 7.911-10.91 14.896-10.91z"
        fill="url(#rocket_svg__o)"
      />
      <path
        d="M57.722 25.792c-.664 1.15-2.672 1.233-4.485.186-1.813-1.046-2.744-2.827-2.08-3.977.664-1.15 2.671-1.233 4.484-.186 1.813 1.047 2.745 2.827 2.081 3.977z"
        fill="#fff"
      />
      <path
        d="M51.182 19.508c-.276.478-1.11.513-1.865.077-.754-.435-1.142-1.176-.866-1.654.277-.478 1.112-.513 1.866-.077.754.435 1.141 1.175.865 1.654z"
        fill="#fff"
      />
      <path
        d="M75.503 59.183A31.819 31.819 0 0 1 62.457 63l-1.398-18.172z"
        fill="#9d99b5"
      />
      <path
        d="M61.059 99.61v.377s-.022-.31-.089-.91l-.022-.31c-.71-7.212-4.194-43.977-3.373-51.477 0 0 1.709-1.952 3.04-2.463v-.133c.067.022.155.045.222.067.067-.022.155-.045.222-.067v.133c1.331.51 3.04 2.463 3.04 2.463.91 
8.32-3.04 52.32-3.04 52.32z"
        fill="#ffc82c"
      />
      <path
        d="M61.059 99.61v.377s-.022-.31-.089-.91l-.022-.31-.333-53.94v-.133c.067.022.155.045.222.067.067-.022.155-.045.222-.067v.133c1.331.51 3.04 2.463 3.04 2.463.91 8.32-3.04 52.32-3.04 52.32z"
        fill="url(#rocket_svg__p)"
      />
    </g>
  </svg>
);

export default SvgRocket;
