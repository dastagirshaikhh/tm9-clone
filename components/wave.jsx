import React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

export default function Wave({ width = "100%", height = 80, stopColor }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 300 100">
      <Defs>
        <LinearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor="#2aa3ff" />
          <Stop offset="100%" stopColor={stopColor} />
        </LinearGradient>
      </Defs>

      <Path
        d="M0,60
           C30,40 60,80 90,60
           C120,40 150,80 180,60
           C210,40 240,80 270,60
           L300,100 L0,100 Z"
        fill="url(#blueGrad)"
      />
    </Svg>
  );
}
