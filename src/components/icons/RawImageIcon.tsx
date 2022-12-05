import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function RawImageIcon(props: SvgProps) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M36.166.383H3.834A3.838 3.838 0 000 4.217v31.565a3.838 3.838 0 003.834 3.834h32.332A3.838 3.838 0 0040 35.782V4.217A3.838 3.838 0 0036.166.383zm0 3.834l.001 16.77-6.477-6.083a2.385 2.385 0 00-1.633-.66c-.73 0-1.414.344-1.875.94l-7.625 9.874a1.344 1.344 0 01-1.837.26L11.765 21.7c-.493-.36-1.133-.559-1.8-.559-.76 0-1.47.248-2 .697l-4.131 3.505V4.217h32.332z"
        fill="#C4C4C4"
      />
    </Svg>
  );
}

export default RawImageIcon;
