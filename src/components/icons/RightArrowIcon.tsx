import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrowIcon(props) {
  return (
    <Svg
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.04 1l6.962 6.963-6.963 6.963"
        stroke="#1B1B1B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default RightArrowIcon
