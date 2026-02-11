import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function PairScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const tableData = [
    { tf: "5m", trend: "BUY", candle: "SELL" },
    { tf: "15m", trend: "BUY", candle: "SELL" },
    { tf: "1h", trend: "BUY", candle: "BUY" },
    { tf: "4h", trend: "BUY", candle: "SELL" },
    { tf: "1d", trend: "BUY", candle: "BUY" },
  ];

  return (
    <>
    <Stack.Screen options={{ title: "Trading Pairs", headerShown: false }} />
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EURUSD</Text>
      </View>

      {/* Spread Row */}
      <View style={styles.spreadRow}>
        {["-0.5", "-0.1", "-0.01", "0.01", "+0.01", "+0.1", "+0.5"].map(
          (item, i) => (
            <Text key={i} style={styles.spreadText}>
              {item}
            </Text>
          )
        )}
      </View>

      {/* Prices */}
      <View style={styles.priceRow}>
        <Text style={styles.sellPrice}>
          1.19 <Text style={styles.bigRed}>111</Text>
        </Text>

        <Text style={styles.buyPrice}>
          1.19 <Text style={styles.bigBlue}>111</Text>
        </Text>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={[styles.row, styles.tableHeader]}>
          <Text style={styles.headerCell}>Timeframe</Text>
          <Text style={styles.headerCell}>Trend</Text>
          <Text style={styles.headerCell}>Current Candle</Text>
        </View>

        {tableData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.tf}</Text>

            <View
              style={[
                styles.cellBox,
                item.trend === "BUY"
                  ? styles.buyBg
                  : styles.sellBg,
              ]}
            >
              <Text style={styles.cellText}>{item.trend}</Text>
            </View>

            <View
              style={[
                styles.cellBox,
                item.candle === "BUY"
                  ? styles.buyBg
                  : styles.sellBg,
              ]}
            >
              <Text style={styles.cellText}>{item.candle}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Bar */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 8 }]}>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.sellText}>SELL</Text>
          <Text style={styles.sellSub}>at 1.19111</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>BUY</Text>
          <Text style={styles.buySub}>at 1.19111</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b1622",
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 16,
  },

  /* Spread */
  spreadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },
  spreadText: {
    color: "#cbd5e1",
    fontSize: 14,
  },

  /* Prices */
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  sellPrice: {
    color: "#ef4444",
    fontSize: 22,
  },
  buyPrice: {
    color: "#3b82f6",
    fontSize: 22,
  },
  bigRed: {
    fontSize: 32,
    fontWeight: "700",
    color: "#ef4444",
  },
  bigBlue: {
    fontSize: 32,
    fontWeight: "700",
    color: "#3b82f6",
  },

  /* Table */
  table: {
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },

  tableHeader: {
    backgroundColor: "#111827",
  },

  row: {
    flexDirection: "row",
  },

  headerCell: {
    flex: 1,
    padding: 14,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },

  cell: {
    flex: 1,
    padding: 14,
    color: "#fff",
    textAlign: "center",
    borderTopWidth: 1,
    borderColor: "#1f2937",
  },

  cellBox: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#1f2937",
  },

  cellText: {
    color: "#fff",
    fontWeight: "600",
  },

  buyBg: {
    backgroundColor: "#2e9e8e",
  },

  sellBg: {
    backgroundColor: "#ef4444",
  },

  /* Bottom Bar */
  bottomBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  sellButton: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingVertical: 18,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#1f2937",
  },

  buyButton: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingVertical: 18,
    alignItems: "center",
  },

  sellText: {
    color: "#ef4444",
    fontSize: 18,
    fontWeight: "700",
  },

  buyText: {
    color: "#3b82f6",
    fontSize: 18,
    fontWeight: "700",
  },

  sellSub: {
    color: "#ef4444",
    fontSize: 14,
    marginTop: 4,
  },

  buySub: {
    color: "#3b82f6",
    fontSize: 14,
    marginTop: 4,
  },
});
