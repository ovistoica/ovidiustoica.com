import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={31}
      height={24}
      viewBox="0 0 31 24"
      fill="none"
      {...props}
      style={{marginRight: '10px'}}
    >
      <path
        d="M30.06 13.06a1.5 1.5 0 000-2.12l-9.545-9.547a1.5 1.5 0 10-2.122 2.122L26.88 12l-8.486 8.485a1.5 1.5 0 102.122 2.122l9.546-9.546zM0 13.5h29v-3H0v3z"
        fill="#3D7DCA"
      />
    </svg>
  );
}

export default SvgComponent;
