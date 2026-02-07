import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TradingView from "../../components/TradingView.jsx";

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
            <Text style={styles.symbolText}>BTCUSD</Text>
            <Ionicons name="chevron-down" size={18} color="#fff" />
          </TouchableOpacity>
          <Ionicons name="refresh" size={22} color="#fff" />
          <View style={styles.accountIcon} />
        </View>

        <View style={{ flex: 1 }}>
          <TradingView />
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
