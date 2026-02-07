import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TradeScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#0b1621", "#0a121b", "#070d14"]}
      style={styles.container}
    >
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#0b1620" }}
      >
        {/* Top Bar */}
        <View style={styles.topBar}>
          <Ionicons name="menu" size={24} color="#fff" />

          <Text style={styles.title}>Trade</Text>

          <View style={styles.topIcons}>
            <Ionicons name="refresh" size={22} color="#fff" />
            <View style={styles.aiBadge}>
              <Text style={styles.aiText}>AI</Text>
            </View>
            <FontAwesome5 name="robot" size={18} color="#fff" />
            <MaterialIcons name="swap-vert" size={22} color="#fff" />
            <Ionicons name="add" size={24} color="#fff" />
          </View>
        </View>

        {/* Account Info */}
        <View style={styles.infoSection}>
          <InfoRow label="Balance:" value="10000.00" />
          <InfoRow label="Equity:" value="10000.00" />
          <InfoRow label="Free margin:" value="10000.00" />
        </View>
        {/* Positions Section */}
        <View style={styles.positionsSection}>
          {/* Header */}
          <View style={styles.positionsHeader}>
            <Text style={styles.positionsTitle}>Positions (2)</Text>

            <View style={styles.positionsIcons}>
              <MaterialIcons name="close-fullscreen" size={18} color="#fff" />
              <Ionicons name="ellipsis-horizontal" size={20} color="#fff" />
            </View>
          </View>

          {/* Position Row 1 */}
          <PositionRow
            symbol="BTCUSD"
            type="sell"
            volume="5.00"
            from="8675.28"
            to="8665.11"
            profit="50.85"
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Position Row 2 */}
          <PositionRow
            symbol="BTCUSD"
            type="sell"
            volume="5.00"
            from="8720.33"
            to="8665.11"
            profit="276.10"
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

function PositionRow({ symbol, type, volume, from, to, profit }) {
  return (
    <View style={styles.positionRow}>
      <View>
        <Text style={styles.positionTitle}>
          {symbol},{" "}
          <Text style={styles.sellText}>
            {type} {volume}
          </Text>
        </Text>

        <Text style={styles.positionSub}>
          {from} → {to}
        </Text>
      </View>

      <Text style={styles.profitText}>{profit}</Text>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.dots}>
        {Array.from({ length: 18 }).map((_, i) => (
          <View key={i} style={styles.dot} />
        ))}
      </View>

      <Text style={styles.value}>{value}</Text>
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
    marginLeft: 12,
    flex: 1,
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  aiBadge: {
    backgroundColor: "#ffffff",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  aiText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 12,
  },

  /* Info Section */
  infoSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    width: 110,
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
    opacity: 0.7,
  },
  value: {
    color: "#ffffff",
    fontSize: 16,
    width: 90,
    textAlign: "right",
  },
  /* Positions Section */
  positionsSection: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#1f2937",
  },

  positionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  positionsTitle: {
    color: "#9ca3af",
    fontSize: 14,
  },

  positionsIcons: {
    flexDirection: "row",
    gap: 16,
  },

  positionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  positionTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },

  sellText: {
    color: "#ef4444",
    fontWeight: "600",
  },

  positionSub: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 2,
  },

  profitText: {
    color: "#38bdf8",
    fontSize: 16,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#1f2937",
    marginHorizontal: 16,
  },
});
