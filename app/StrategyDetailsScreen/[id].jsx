import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function StrategyDetailsScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState("Overview");

  const { id } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{ title: "Strategy Details", headerShown: false }}
      />
      <LinearGradient
        colors={["#0b1621", "#08111a", "#060c12"]}
        style={styles.container}
      >
        <SafeAreaView edges={["top"]} style={styles.safe}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#fff"
              onPress={() => {
                router.back();
              }}
            />
            <Text style={styles.headerTitle}>Testing master</Text>
          </View>

          <Text style={styles.mainTitle}>Testing strategy</Text>

          {/* Tabs */}
          <View style={styles.tabs}>
            {["Overview", "Orders"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.tabTextActive,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Content */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          >
            {/* Overview Cards */}
            <View style={styles.cardRow}>
              <View style={[styles.statCard, styles.greenCard]}>
                <Text style={styles.cardTitle}>Return</Text>
                <Text style={styles.cardSubtitle}>LAST 3 MONTHS</Text>
                <Text style={styles.greenValue}>0.00%</Text>
              </View>

              <View style={[styles.statCard, styles.redCard]}>
                <Text style={styles.cardTitle}>Maximum drawdown</Text>
                <Text style={styles.redValue}>0%</Text>
              </View>
            </View>

            {/* Risk Score */}
            <View style={styles.riskCard}>
              <Text style={styles.sectionTitle}>
                Risk Score{" "}
                <Ionicons name="information-circle-outline" size={16} />
              </Text>
              <View style={styles.riskRow}>
                <Text style={styles.riskValue}>0/10</Text>
                <View style={styles.riskMeter} />
              </View>
            </View>

            {/* Details */}
            <Text style={styles.sectionHeader}>Details</Text>

            <View style={styles.detailGrid}>
              <DetailBox label="Profit Sharing" value="20%" />
              <DetailBox label="Investors" value="0" />
              <DetailBox label="Leverage" value="1:500" />
              <DetailBox label="Equity, USD" value="0.00" />
            </View>

            {/* Description */}
            <Text style={styles.sectionHeader}>Description</Text>
            <Text style={styles.description}>
              Strategy for testing purpose only..
            </Text>
            <Text style={styles.descriptionDate}>
              The strategy was created on 01-11-2025
            </Text>

            {/* Symbols */}
            <Text style={styles.sectionHeader}>Symbols</Text>
            <View style={styles.symbolRow}>
              <SymbolChip label="GBPUSD" />
              <SymbolChip label="AUDUSD" />
            </View>
          </ScrollView>

          {/* Bottom Button */}
          <View
            style={[styles.bottomBar, { paddingBottom: insets.bottom + 8 }]}
          >
            <TouchableOpacity style={styles.copyBtn}>
              <Text style={styles.copyText}>Start Copying</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

/* ---------- Components ---------- */

function DetailBox({ label, value }) {
  return (
    <View style={styles.detailBox}>
      <Text style={styles.detailValue}>{value}</Text>
      <Text style={styles.detailLabel}>{label}</Text>
    </View>
  );
}

function SymbolChip({ label }) {
  return (
    <View style={styles.symbolChip}>
      <Text style={styles.symbolText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },

  mainTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#1f2933",
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },
  tabActive: {
    borderBottomWidth: 2,
    borderColor: "#3b82f6",
  },
  tabText: {
    color: "#9ca3af",
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#fff",
  },

  cardRow: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
  },
  greenCard: {
    backgroundColor: "#1f3d2b",
  },
  redCard: {
    backgroundColor: "#3b2a2a",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
  },
  cardSubtitle: {
    color: "#9ca3af",
    fontSize: 11,
    marginVertical: 4,
  },
  greenValue: {
    color: "#22c55e",
    fontSize: 22,
    fontWeight: "700",
  },
  redValue: {
    color: "#ef4444",
    fontSize: 22,
    fontWeight: "700",
  },

  riskCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#020617",
  },
  sectionTitle: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
  },
  riskRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  riskValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  riskMeter: {
    width: 120,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#22c55e",
  },

  sectionHeader: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 12,
    marginHorizontal: 16,
  },

  detailGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    padding: 16,
  },
  detailBox: {
    width: "48%",
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#020617",
  },
  detailValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  detailLabel: {
    color: "#9ca3af",
    marginTop: 4,
  },

  description: {
    color: "#d1d5db",
    marginHorizontal: 16,
    marginTop: 8,
  },
  descriptionDate: {
    color: "#6b7280",
    marginHorizontal: 16,
    marginTop: 6,
    fontSize: 12,
  },

  symbolRow: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  symbolChip: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#374151",
  },
  symbolText: {
    color: "#fff",
    fontWeight: "600",
  },

  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#0b1621",
  },
  copyBtn: {
    backgroundColor: "#1e90ff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  copyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
