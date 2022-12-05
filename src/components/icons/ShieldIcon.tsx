import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ShieldIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.368.75c.214-.046.438-.086.617-.086.178 0 .402.04.616.087.228.05.499.12.792.205.587.167 1.29.395 1.977.638.688.242 1.371.503 1.92.738.273.117.52.23.72.336.178.092.39.213.529.352.192.193.34.41.423.731.072.277.09.614.093 1.031.002.343-.006.783-.016 1.35l-.008.45c-.014.795-.028 1.818-.028 3.148 0 2.952-1.777 4.935-3.457 6.145a12.968 12.968 0 01-3.355 1.718l-.017.005-.005.002h-.002l-.182-.598-.182.598H7.8l-.005-.002-.017-.005a4.868 4.868 0 01-.281-.097 12.97 12.97 0 01-3.074-1.622C2.743 14.665.966 12.683.966 9.73A176.413 176.413 0 00.93 6.134C.92 5.566.912 5.125.915 4.782c.003-.418.02-.754.092-1.031.084-.321.232-.538.424-.73.14-.14.35-.26.528-.353.2-.105.448-.22.72-.336.549-.235 1.232-.496 1.92-.738A35.86 35.86 0 016.576.956C6.87.872 7.14.8 7.368.75zm.617 16.252l-.182.598a.627.627 0 00.363 0l-.181-.598zm0-.659l.061-.022a11.722 11.722 0 002.77-1.461c1.517-1.092 2.937-2.746 2.937-5.13 0-1.34.014-2.37.028-3.17l.008-.461c.01-.564.018-.983.016-1.307-.003-.418-.024-.615-.053-.728-.018-.068-.033-.096-.097-.16.003.003.002.002-.006-.002a2.19 2.19 0 00-.217-.126 9.561 9.561 0 00-.635-.295 31.48 31.48 0 00-1.842-.708 34.658 34.658 0 00-1.906-.616c-.279-.08-.522-.143-.716-.185a2.192 2.192 0 00-.348-.058c-.032 0-.14.012-.349.058-.194.042-.437.106-.716.185-.557.16-1.235.38-1.906.616a31.4 31.4 0 00-1.842.708 9.55 9.55 0 00-.634.295 2.191 2.191 0 00-.223.128c-.064.064-.08.092-.098.16-.029.113-.05.31-.052.728-.003.325.005.744.015 1.31l.008.458c.014.8.028 1.83.028 3.17 0 2.384 1.42 4.038 2.937 5.13a11.719 11.719 0 002.832 1.483zm.181.061zm-.363 0z"
        fill="#1B1B1B"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.087 6.777a.625.625 0 010 .884L7.84 10.91a.625.625 0 01-.884 0L5.378 9.33a.625.625 0 01.885-.883l1.134 1.136 2.806-2.807a.625.625 0 01.884 0z"
        fill="#1B1B1B"
      />
    </Svg>
  );
}

export default ShieldIcon;
