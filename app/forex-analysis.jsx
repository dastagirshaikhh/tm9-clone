import { Stack } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hamberger from "../components/Hamberger";

/* ---- MOCK DATA ---- */
const DATA = [
  {
    pair: "AUDCAD",
    price: "0.958940",
    chgPct: "+1.00%",
    chg: "+0.009500",
    bid: "0.958430",
    ask: "0.960030",
    high: "0.959160",
    low: "0.946580",
    rating: "Strong Buy",
    positive: true,
  },
  {
    pair: "AUDCHF",
    price: "0.543990",
    chgPct: "+0.95%",
    chg: "+0.005110",
    bid: "0.543540",
    ask: "0.544740",
    high: "0.544850",
    low: "0.536570",
    rating: "Strong Buy",
    positive: true,
  },
  {
    pair: "CADAUD",
    price: "1.0420",
    chgPct: "-0.99%",
    chg: "-0.0104",
    bid: "1.0421",
    ask: "1.0429",
    high: "1.0560",
    low: "1.0420",
    rating: "Strong Sell",
    positive: false,
  },
];

/* ---- SCREEN ---- */
export default function ForexAnalysisScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Forex Analysis", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* HEADER */}
          <Hamberger title="Forex Analysis"/>

          {/* FILTER BAR */}
          <View style={styles.filterBar}>
            <Filter label="Overview" />
            <Filter label="Major, Minor Pairs" />
            <Filter label="Filters" active />
          </View>

          {/* TABLE */}
          <ScrollView horizontal>
            <View>
              {/* TABLE HEADER */}
              <View style={styles.tableHeader}>
                {[
                  "TICKER",
                  "PRICE",
                  "CHG %",
                  "CHG",
                  "BID",
                  "ASK",
                  "HIGH",
                  "LOW",
                  "TECHNICAL RATING",
                ].map((h) => (
                  <Text key={h} style={styles.th}>
                    {h}
                  </Text>
                ))}
              </View>

              {/* ROWS */}
              <FlatList
                data={DATA}
                keyExtractor={(item) => item.pair}
                renderItem={({ item }) => <Row item={item} />}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---- COMPONENTS ---- */

function Filter({ label, active }) {
  return (
    <View style={[styles.filter, active && styles.filterActive]}>
      <Text style={[styles.filterText, active && styles.filterTextActive]}>
        {label}
      </Text>
    </View>
  );
}

function Row({ item }) {
  const color = item.positive ? "#10b981" : "#ef4444";

  return (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.pair]}>{item.pair}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <Text style={[styles.cell, { color }]}>{item.chgPct}</Text>
      <Text style={[styles.cell, { color }]}>{item.chg}</Text>
      <Text style={styles.cell}>{item.bid}</Text>
      <Text style={styles.cell}>{item.ask}</Text>
      <Text style={styles.cell}>{item.high}</Text>
      <Text style={styles.cell}>{item.low}</Text>
      <Text style={[styles.cell, { color }]}>{item.rating}</Text>
    </View>
  );
}

/* ---- STYLES ---- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#070d14",
  },
  container: {
    flex: 1,
    backgroundColor: "#070d14",
  },

  /* Filters */
  filterBar: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  filter: {
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  filterActive: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  filterText: {
    color: "#cbd5e1",
    fontSize: 13,
  },
  filterTextActive: {
    color: "#ffffff",
    fontWeight: "600",
  },

  /* Table */
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#020617",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
  },
  th: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    padding: 10,
    width: 110,
  },

  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
    backgroundColor: "#050a10",
  },
  cell: {
    color: "#e5e7eb",
    fontSize: 13,
    padding: 10,
    width: 110,
  },
  pair: {
    color: "#60a5fa",
    fontWeight: "700",
  },
});
