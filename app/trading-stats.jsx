import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ReportScreen() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Trading Statistics", headerShown: false }}
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
            <Text style={styles.headerTitle}>Report</Text>
            <Ionicons name="person" size={22} color="#fff" />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* TRADING STATISTICS */}
            <Text style={styles.title}>Trading Statistics</Text>
            <Text style={styles.subTitle}>07 January - 07 February</Text>

            {/* BUY / SELL */}
            <View style={styles.bsRow}>
              <Text style={styles.bsText}>Buy 0</Text>
              <Text style={styles.bsText}>Sell 1</Text>
            </View>

            <View style={styles.progressBg}>
              <View style={styles.progressSell} />
            </View>

            <View style={styles.bsRow}>
              <Text style={styles.percent}>0%</Text>
              <Text style={styles.percent}>100%</Text>
            </View>

            {/* STATS CARDS */}
            <View style={styles.cardRow}>
              <StatCard title="Trades / Lots" value="1 / 0.010" />
              <StatCard title="Profit/Loss" value="0.13" />
            </View>

            {/* FAVOURITE SYMBOLS */}
            <Text style={styles.title}>Favourite Symbols</Text>
            <Text style={styles.subTitle}>07 January - 07 February</Text>

            <Text style={styles.desc}>
              You closed 1 trades this month. Your most popular symbols :
            </Text>

            <View style={styles.symbolRow}>
              <Text style={styles.symbol}>AUD / USD</Text>
              <Text style={styles.symbolPercent}>100%</Text>
            </View>

            <View style={styles.progressBg}>
              <View style={styles.progressBuy} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({ title, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
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
    paddingHorizontal: 16,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
    marginLeft: 12,
  },

  /* Titles */
  title: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 16,
  },
  subTitle: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 6,
  },

  /* Buy Sell */
  bsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  bsText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  percent: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },

  progressBg: {
    height: 12,
    backgroundColor: "#1f2937",
    borderRadius: 8,
    marginVertical: 10,
    overflow: "hidden",
  },
  progressSell: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ef4444",
  },
  progressBuy: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1d9bf0",
  },

  /* Cards */
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 14,
    padding: 16,
  },
  cardTitle: {
    color: "#94a3b8",
    fontSize: 16,
  },
  cardValue: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  /* Favourite symbols */
  desc: {
    color: "#cbd5e1",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 18,
  },
  symbolRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  symbol: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  symbolPercent: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
