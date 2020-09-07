import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={137} height={136} viewBox="0 0 137 136" fill="none" {...props}>
      <path fill="#FFDA27" d="M.216.382h88v90h-88z" />
      <rect
        x={30.913}
        y={4.422}
        width={142.098}
        height={37.718}
        rx={3}
        transform="rotate(45 30.913 4.422)"
        stroke="#011E41"
        strokeWidth={6}
      />
      <path
        stroke="#011E41"
        strokeWidth={5}
        d="M49.034 25.15L38.984 35.2M111.032 86.15l-10.048 10.048"
      />
      <rect
        x={110.583}
        y={4.243}
        width={30.872}
        height={138.369}
        rx={7}
        transform="rotate(45 110.583 4.243)"
        fill="#fff"
        stroke="#011E41"
        strokeWidth={6}
      />
      <path
        d="M87.387 23.382l24.297 24.505M16.816 99.382l-5.6 27 26-6.104"
        stroke="#011E41"
        strokeWidth={6}
      />
      <path d="M88.216 65.882v-35l-59.5 59.5h35l24.5-24.5z" fill="#FFDA27" />
    </svg>
  );
}

export default SvgComponent;
