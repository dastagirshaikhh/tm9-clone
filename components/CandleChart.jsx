import React from "react";
import { View } from "react-native";
import Svg, { Line, Rect } from "react-native-svg";

const generateCandles = (count = 30, start = 100) => {
  let price = start;
  return Array.from({ length: count }).map(() => {
    const open = price;
    const close = open + (Math.random() - 0.5) * 8;
    const high = Math.max(open, close) + Math.random() * 4;
    const low = Math.min(open, close) - Math.random() * 4;
    price = close;

    return { open, close, high, low };
  });
};

export default function CandleChart({
  width = 360,
  height = 220,
  candles = generateCandles(),
}) {
  const candleWidth = width / candles.length;
  const prices = candles.flatMap((c) => [c.high, c.low]);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const scaleY = (price) =>
    height - ((price - minPrice) / (maxPrice - minPrice)) * height;

  return (
    <View style={{ backgroundColor: "#0b1620", padding: 10 }}>
      <Svg width={width} height={height}>
        {candles.map((candle, index) => {
          const x = index * candleWidth + candleWidth * 0.25;
          const isBull = candle.close >= candle.open;
          const color = isBull ? "#2ecc71" : "#ff4d4d";

          return (
            <React.Fragment key={index}>
              {/* Wick */}
              <Line
                x1={x + candleWidth * 0.25}
                x2={x + candleWidth * 0.25}
                y1={scaleY(candle.high)}
                y2={scaleY(candle.low)}
                stroke={color}
                strokeWidth={1}
              />

              {/* Body */}
              <Rect
                x={x}
                y={scaleY(Math.max(candle.open, candle.close))}
                width={candleWidth * 0.5}
                height={Math.max(
                  2,
                  Math.abs(scaleY(candle.open) - scaleY(candle.close))
                )}
                fill={color}
                rx={1}
              />
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
}
