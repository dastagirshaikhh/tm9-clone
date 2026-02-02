import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Price = ({ value, large, sup }) => (
  <View style={styles.priceWrap}>
    <Text style={styles.priceValue}>{value}</Text>
    <Text style={styles.priceLarge}>{large}</Text>
    <Text style={styles.priceSup}>{sup}</Text>
  </View>
);

const QuoteItem = ({
  symbol,
  change,
  percent,
  bid,
  ask,
  low,
  high,
  volume,
}) => {
  return (
    <View style={styles.row}>
      {/* LEFT CONTENT */}
      <View style={styles.left}>
        <Text style={styles.change}>
          {change} {percent}
        </Text>

        <View style={styles.symbolRow}>
          <Text style={styles.symbol}>{symbol}</Text>
          <Text style={styles.star}>☆</Text>
        </View>

        <Text style={styles.time}>04:54:36 ┤ {volume}</Text>

        <TouchableOpacity style={styles.analyseBtn}>
          <Text style={styles.analyseText}>Analyse</Text>
          <View style={styles.analyseArrowBox}>
            <Text style={styles.analyseArrow}>›</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* RIGHT OVERLAY */}
      <View style={styles.right}>
        <View style={styles.priceRow}>
          <Price value={bid.value} large={bid.large} sup={bid.sup} />
          <Price value={ask.value} large={ask.large} sup={ask.sup} />
        </View>

        <Text style={styles.range}>
          L: {low} H: {high}
        </Text>

        <Text style={styles.neutral}>— NEUTRAL</Text>
      </View>
    </View>
  );
};

export default function Quotes() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#0b1620" }}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>☰</Text>
          <Text style={styles.headerTitle}>Quotes</Text>
          <View style={styles.headerIcons}>
            <Text style={styles.headerIcon}>＋</Text>
            <Text style={styles.headerIcon}>✎</Text>
          </View>
        </View>

        <ScrollView>
          <QuoteItem
            symbol="AUDUSD"
            change="-29.00"
            percent="-0.62%"
            volume="5"
            bid={{ value: "0.69", large: "21", sup: "2" }}
            ask={{ value: "0.69", large: "21", sup: "7" }}
            low="0.69217"
            high="0.69616"
          />

          <QuoteItem
            symbol="BTCUSD"
            change="-21149800.00"
            percent="-2.67%"
            volume="800"
            bid={{ value: "76.76", large: "53", sup: "9" }}
            ask={{ value: "76.72", large: "53", sup: "9" }}
            low="75627.38"
            high="79362.55"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ================= CONTAINER ================= */
  container: {
    flex: 1,
    backgroundColor: "#0b1620",
  },

  /* ================= HEADER ================= */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerIcon: {
    color: "#ffffff",
    fontSize: 22,
    marginHorizontal: 8,
  },

  /* ================= ROW ================= */
  row: {
    position: "relative",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#1f2d3d",
    minHeight: 130, // IMPORTANT: keeps row height consistent
  },

  /* ================= LEFT COLUMN ================= */
  left: {
    width: "55%",
  },

  change: {
    color: "#ff4d4d",
    fontSize: 14,
    fontWeight: "500",
  },

  symbolRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  symbol: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 8,
  },

  star: {
    color: "#9fb3c8",
    fontSize: 20,
  },

  time: {
    color: "#9fb3c8",
    fontSize: 12,
    marginTop: 4,
  },

  /* ================= ANALYSE BUTTON ================= */
  analyseBtn: {
    flexDirection: "row",
    marginTop: 12,
    borderRadius: 4,
    overflow: "hidden",
    alignSelf: "flex-start",
  },

  analyseText: {
    backgroundColor: "#ffffff",
    color: "#000000",
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: "500",
  },

  analyseArrowBox: {
    backgroundColor: "#1c9cff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  analyseArrow: {
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 18,
  },

  /* ================= RIGHT OVERLAY ================= */
  right: {
    position: "absolute",
    right: 16,
    top: 28, // aligns with symbol row
    alignItems: "flex-end",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  priceWrap: {
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 10,
  },

  priceValue: {
    color: "#36a3ff",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 38, // 🔥 important for baseline control
  },

  priceLarge: {
    color: "#36a3ff",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 38,
  },

  priceSup: {
    color: "#36a3ff",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 1, // tighter like original
    transform: [{ translateY: -15 }], // 🔥 true superscript
  },

  range: {
    color: "#9fb3c8",
    fontSize: 12,
    marginTop: 4,
    alignSelf: "flex-end",
  },

  neutral: {
    color: "#9fb3c8",
    fontSize: 12,
    marginTop: 6,
    alignSelf: "flex-end",
  },
});
