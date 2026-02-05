import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CandleSticks from "../../components/CandleSticks.jsx";

export default function ChartScreen() {
  return (
    <LinearGradient colors={["#0b1621", "#070d14"]} style={styles.container}>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#0b1620" }}
      >
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <Ionicons name="menu" size={24} color="#fff" />
          <TouchableOpacity style={styles.symbol}>
            <Text style={styles.symbolText}>XAUUSD</Text>
            <Ionicons name="chevron-down" size={18} color="#fff" />
          </TouchableOpacity>
          <Ionicons name="refresh" size={22} color="#fff" />
          <View style={styles.accountIcon} />
        </View>

        {/* SECOND TOOL BAR */}
        <View style={styles.toolbar}>
          <Ionicons name="add-circle-outline" size={22} color="#fff" />
          <Text style={styles.timeframe}>15m</Text>
          <MaterialIcons name="candlestick-chart" size={22} color="#fff" />
          <Text style={styles.fx}>ƒx</Text>
          <Ionicons name="grid-outline" size={22} color="#fff" />

          <TouchableOpacity style={styles.bulkBtn}>
            <Text style={styles.bulkText}>Bulk Closing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainArea}>
          {/* LEFT TOOLBAR */}
          <View style={styles.leftTools}>
            {[
              "add",
              "trending-up",
              "options",
              "share-2",
              "git-branch",
              "create",
              "text",
              "happy-outline",
              "crop",
              "search",
              "headset",
              "lock-closed",
              "eye",
            ].map((icon, i) => (
              <Ionicons
                key={i}
                name={icon as any}
                size={22}
                color="#cbd5e1"
                style={styles.toolIcon}
              />
            ))}
          </View>

          {/* CHART AREA */}
          <View style={styles.chartArea}>
            <Text style={styles.chartTitle}>XAUUSD · 15 · TM9</Text>
            <Text style={styles.chartPrice}>4861.62 0.00 (0.00%)</Text>

            {/* MOCK CANDLE CHART */}
            <View style={styles.chartMock}>
              <CandleSticks />
            </View>

            {/* PRICE LABELS */}
            <View style={styles.pricePanel}>
              <PriceBox label="Ask" price="4861.85" color="#ef4444" />
              <PriceBox label="Bid" price="4861.77" color="#3b82f6" />
              <PriceBox label="" price="4861.62\n00:31" color="#10b981" />
            </View>

            {/* HIGH / LOW */}
            <View style={styles.highLow}>
              <Text style={styles.hl}>High 5023.85</Text>
              <Text style={styles.hl}>Low 4788.83</Text>
            </View>
          </View>
        </View>

        {/* BOTTOM BAR */}
        <View style={styles.bottomBar}>
          <Text style={styles.bottomText}>Date Range</Text>
          <Text style={styles.bottomText}>03:29:27 (UTC)</Text>
          <Text style={[styles.bottomText, { color: "#3b82f6" }]}>auto</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function PriceBox({ label, price, color }: any) {
  return (
    <View style={[styles.priceBox, { backgroundColor: color }]}>
      {label ? <Text style={styles.priceLabel}>{label}</Text> : null}
      <Text style={styles.priceValue}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  symbol: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 12,
  },
  symbolText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginRight: 4,
  },
  accountIcon: {
    width: 26,
    height: 18,
    borderRadius: 4,
    backgroundColor: "#2563eb",
  },

  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 14,
  },
  timeframe: { color: "#fff", fontSize: 16 },
  fx: { color: "#fff", fontSize: 18 },

  bulkBtn: {
    marginLeft: "auto",
    backgroundColor: "#2563eb",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
  },
  bulkText: { color: "#fff", fontWeight: "600" },

  mainArea: {
    flex: 1,
    flexDirection: "row",
  },

  leftTools: {
    width: 46,
    alignItems: "center",
    paddingTop: 10,
  },
  toolIcon: { marginVertical: 10 },

  chartArea: {
    flex: 1,
    padding: 10,
  },
  chartTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  chartPrice: {
    color: "#10b981",
    marginTop: 4,
  },

  chartMock: {
    flex: 1,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  pricePanel: {
    position: "absolute",
    right: 10,
    top: 150,
    gap: 6,
  },
  priceBox: {
    padding: 6,
    borderRadius: 4,
    minWidth: 90,
  },
  priceLabel: {
    color: "#fff",
    fontSize: 12,
  },
  priceValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  highLow: {
    position: "absolute",
    right: 10,
    bottom: 60,
  },
  hl: {
    color: "#fff",
    fontSize: 13,
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
  },
  bottomText: {
    color: "#cbd5e1",
  },
});
