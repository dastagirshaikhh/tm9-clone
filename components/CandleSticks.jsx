import { ScrollView, StyleSheet, View } from "react-native";

export default function MockCandleChart() {
  // fake candle data
  const candles = [
    { open: 280, close: 350 },
    { open: 270, close: 250 },
    { open: 110, close: 250 },
    { open: 400, close: 360 },
    { open: 360, close: 140 },
    { open: 290, close: 430 },
    { open: 390, close: 230 },
    { open: 435, close: 270 },
    { open: 350, close: 550 },
    { open: 450, close: 290 },
    { open: 390, close: 320 },
    { open: 360, close: 425 },
    { open: 280, close: 350 },
    { open: 270, close: 250 },
    { open: 110, close: 250 },
    { open: 400, close: 360 },
    { open: 280, close: 350 },
    { open: 270, close: 250 },
    { open: 110, close: 250 },
    { open: 400, close: 360 },
    { open: 360, close: 140 },
    { open: 290, close: 430 },
    { open: 390, close: 230 },
    { open: 435, close: 270 },
    { open: 350, close: 550 },
    { open: 450, close: 290 },
    { open: 390, close: 320 },
    { open: 360, close: 425 },
    { open: 280, close: 350 },
    { open: 270, close: 250 },
    { open: 110, close: 250 },
    { open: 400, close: 360 },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.candleChart}
    >
      {candles.map((candle, index) => {
        const isBull = candle.close > candle.open;
        const bodyHeight = Math.abs(candle.close - candle.open);

        return (
          <View key={index} style={styles.candleWrapper}>
            {/* Wick */}
            <View style={{ ...styles.wick, height: bodyHeight + 30 }} />

            {/* Body */}
            <View
              style={[
                styles.body,
                {
                  height: bodyHeight,
                  backgroundColor: isBull ? "#10b981" : "#ef4444",
                  marginBottom: isBull ? candle.open : candle.close,
                },
              ]}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  candleChart: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    gap: 6,
  },

  candleWrapper: {
    width: 10,
    alignItems: "center",
    position: "relative",
  },

  wick: {
    position: "absolute",
    width: 2,
    backgroundColor: "#94a3b8",
    opacity: 0.6,
  },

  body: {
    width: 8,
    borderRadius: 2,
  },
});
