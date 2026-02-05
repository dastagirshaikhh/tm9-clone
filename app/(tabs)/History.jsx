import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  const [activeTab, setActiveTab] = useState("POSITIONS");

  const tabs = [
    { label: "POSITIONS", count: 0 },
    { label: "ORDERS", count: 0 },
    { label: "DEALS", count: 0 },
    { label: "TXN", count: 1 },
  ];

  return (
    <LinearGradient
      colors={["#0b1621", "#09121b", "#070d14"]}
      style={styles.container}
    >
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#0b1620" }}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Ionicons name="menu" size={24} color="#fff" />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>History</Text>
            <Text style={styles.subtitle}>All Symbols</Text>
          </View>

          <View style={styles.topIcons}>
            <MaterialIcons name="sync" size={22} color="#fff" />
            <MaterialIcons name="swap-vert" size={22} color="#fff" />
            <Ionicons name="calendar-outline" size={22} color="#fff" />
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.label}
              style={[styles.tab, activeTab === tab.label && styles.activeTab]}
              onPress={() => setActiveTab(tab.label)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab.label && styles.activeTabText,
                ]}
              >
                {tab.label}({tab.count})
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Summary Rows */}
        <View style={styles.section}>
          <InfoRow label="Profit:" value="0.00" highlight />
          <InfoRow label="Swap:" value="0.00" />
          <InfoRow label="Commission:" value="0.00" />
          <InfoRow label="Balance:" value="0.00" />
          <InfoRow label="Total Lots:" value="0.00" />
        </View>

        {/* Date Row */}
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>05-02-2026</Text>
          <Feather name="eye" size={22} color="#fff" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function InfoRow({ label, value, highlight = false }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.dots}>
        {Array.from({ length: 22 }).map((_, i) => (
          <View key={i} style={styles.dot} />
        ))}
      </View>

      <Text style={[styles.value, highlight && styles.highlight]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* Top Bar */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#cbd5e1",
    fontSize: 13,
    marginTop: 2,
  },
  topIcons: {
    flexDirection: "row",
    gap: 14,
  },

  /* Tabs */
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },
  tabText: {
    color: "#9ca3af",
    fontSize: 13,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#3b82f6",
  },
  activeTabText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  /* Summary Section */
  section: {
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    width: 120,
  },
  dots: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#6b7280",
    opacity: 0.6,
  },
  value: {
    color: "#ffffff",
    fontSize: 16,
    width: 80,
    textAlign: "right",
  },
  highlight: {
    color: "#3b82f6",
    fontWeight: "600",
  },

  /* Date Row */
  dateRow: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
