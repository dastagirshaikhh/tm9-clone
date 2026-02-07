import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MarketExecutionScreen() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Market Execution", headerShown: false }}
      />
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={22}
              color="#fff"
              onPress={() => {
                router.back();
              }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.symbol}>AUDUSD</Text>
              <Text style={styles.sub}>Australian Dollar vs US Dollar</Text>
            </View>
            <Ionicons name="refresh" size={22} color="#fff" />
          </View>

          <ScrollView>
            {/* EXECUTION */}
            <TouchableOpacity style={styles.executionRow}>
              <Text style={styles.executionText}>Market Execution</Text>
              <Ionicons name="chevron-down" size={20} color="#cbd5e1" />
            </TouchableOpacity>

            {/* VOLUME ROW */}
            <View style={styles.volumeRow}>
              {["-0.5", "-0.1", "-0.01", "0.01", "+0.01", "+0.1", "+0.5"].map(
                (v) => (
                  <Text key={v} style={styles.volumeText}>
                    {v}
                  </Text>
                )
              )}
            </View>

            {/* PRICE */}
            <View style={styles.priceRow}>
              <Price value="0.70158" color="#ef4444" />
              <Price value="0.70158" color="#3b82f6" />
            </View>

            {/* SL / TP */}
            <View style={styles.slTpRow}>
              <SLTP label="SL" color="#ef4444" />
              <SLTP label="TP" color="#22c55e" />
            </View>

            {/* CHECK OPTIONS */}
            <CheckRow label="Trailing SL (in points)" />
            <CheckRow label="Remove Default TP/SL for this Trade" />
            <CheckRow label="Break-Even (in Pt)" />

            {/* SUMMARY BOX */}
            <View style={styles.summary}>
              {["TP", "SL", "Trailing SL", "Break-Even"].map((i) => (
                <View key={i} style={styles.summaryRow}>
                  <Text style={styles.summaryText}>{i}</Text>
                  <Text style={styles.summaryText}>-</Text>
                </View>
              ))}
            </View>

            {/* WARNING */}
            <View style={styles.warning}>
              <Text style={styles.warningText}>
                Attention! The trade will be executed at market conditions,
                difference with requested price may be significant!
              </Text>
            </View>
          </ScrollView>

          {/* BOTTOM BUTTONS */}
          <View style={styles.bottom}>
            <TouchableOpacity style={[styles.action, styles.sell]}>
              <Text style={styles.actionTitle}>SELL</Text>
              <Text style={styles.actionSub}>at 0.70158</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.action, styles.buy]}>
              <Text style={styles.actionTitle}>BUY</Text>
              <Text style={styles.actionSub}>at 0.70158</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Price({ value, color }) {
  return (
    <Text style={[styles.price, { color }]}>
      {value.slice(0, -1)}
      <Text style={styles.sup}>{value.slice(-1)}</Text>
    </Text>
  );
}

function SLTP({ label, color }) {
  return (
    <View style={styles.slTp}>
      <Text style={styles.slTpLabel}>{label}</Text>
      <View style={[styles.line, { backgroundColor: color }]} />
    </View>
  );
}

function CheckRow({ label }) {
  return (
    <View style={styles.checkRow}>
      <View style={styles.checkbox} />
      <Text style={styles.checkText}>{label}</Text>
    </View>
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#070d14",
  },
  container: {
    flex: 1,
    backgroundColor: "#070d14",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  symbol: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  sub: {
    color: "#94a3b8",
    fontSize: 13,
  },

  executionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  executionText: {
    color: "#cbd5e1",
    fontSize: 18,
  },

  volumeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
  },
  volumeText: {
    color: "#cbd5e1",
    fontSize: 14,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  price: {
    fontSize: 36,
    fontWeight: "700",
  },
  sup: {
    fontSize: 20,
  },

  slTpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  slTp: {
    width: "48%",
  },
  slTpLabel: {
    color: "#cbd5e1",
    textAlign: "center",
  },
  line: {
    height: 2,
    marginTop: 6,
  },

  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginRight: 10,
  },
  checkText: {
    color: "#fff",
    fontSize: 15,
  },

  summary: {
    margin: 16,
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 8,
    padding: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  summaryText: {
    color: "#cbd5e1",
    fontSize: 15,
  },

  warning: {
    backgroundColor: "#2f3f4f",
    padding: 12,
    marginTop: 10,
  },
  warningText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },

  bottom: {
    flexDirection: "row",
    height: 64,
  },
  action: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sell: {
    backgroundColor: "#3a0d0d",
  },
  buy: {
    backgroundColor: "#0d2a3a",
  },
  actionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  actionSub: {
    color: "#cbd5e1",
    fontSize: 13,
  },
});
