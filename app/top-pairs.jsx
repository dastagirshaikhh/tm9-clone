import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hamberger from "../components/Hamberger";

export default function TopPairsScreen() {
  const [active, setActive] = useState("Yesterday");

  return (
    <>
      <Stack.Screen options={{ title: "Top Pairs", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          {/* HEADER */}
          <Hamberger title="Top Pairs"/>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* SEGMENT */}
            <View style={styles.segment}>
              {["Today", "Yesterday", "Weekly"].map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => setActive(item)}
                  style={[
                    styles.segmentItem,
                    active === item && styles.segmentActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.segmentText,
                      active === item && styles.segmentTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* PODIUM */}
            <View style={styles.podiumContainer}>
              <Podium rank={2} label="XAUUSD" color="#caa64a" height={90} />

              <Podium
                rank={1}
                label="BTCUSD"
                color="#facc15"
                height={130}
                big
              />

              <Podium rank={3} label="XAGUSD" color="#d1d5db" height={70} />
            </View>

            {/* TABLE HEADER */}
            <View style={styles.tableHeader}>
              <Text style={[styles.th, { color: "#ef4444" }]}>RANK</Text>
              <Text style={[styles.th, { color: "#60a5fa", flex: 1 }]}>
                PAIR
              </Text>
              <Text style={styles.th}>PROFIT</Text>
            </View>

            {/* LIST */}
            <PairRow rank={1} pair="BTCUSD" profit="$11815214.42" />
            <PairRow rank={2} pair="XAUUSD" profit="$2417150.25" />
            <PairRow rank={3} pair="XAGUSD" profit="$31336.00" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function Podium({ rank, label, color, height, big }) {
  return (
    <View style={styles.podiumItem}>
      <Text style={styles.podiumLabel}>{label}</Text>

      <MaterialCommunityIcons
        name="trophy"
        size={big ? 70 : 50}
        color={color}
        style={{ marginBottom: 6 }}
      />

      <View
        style={[styles.podiumBlock, { height }, big && styles.podiumBlockBig]}
      >
        <Text style={styles.podiumRank}>{rank}</Text>
      </View>
    </View>
  );
}

function PairRow({ rank, pair, profit }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rank}>#{rank}</Text>
      <Text style={styles.name}>{pair}</Text>
      <View style={styles.profitPill}>
        <Text style={styles.profitText}>{profit}</Text>
      </View>
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

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },

  /* Segment */
  segment: {
    flexDirection: "row",
    backgroundColor: "#2b3644",
    borderRadius: 30,
    margin: 16,
    padding: 4,
  },
  segmentItem: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: "center",
  },
  segmentActive: {
    backgroundColor: "#ffffff",
  },
  segmentText: {
    color: "#cbd5e1",
    fontSize: 16,
    fontWeight: "500",
  },
  segmentTextActive: {
    color: "#000",
    fontWeight: "600",
  },

  /* Podium */
  podiumContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 30,
  },
  podiumItem: {
    alignItems: "center",
  },
  podiumLabel: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  podiumBlock: {
    width: 90,
    backgroundColor: "#0b3b63",
    justifyContent: "center",
    alignItems: "center",
  },
  podiumBlockBig: {
    backgroundColor: "#0b4d8a",
  },
  podiumRank: {
    color: "#facc15",
    fontSize: 42,
    fontWeight: "800",
  },

  /* Table */
  tableHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  th: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
    width: 60,
  },

  /* Rows */
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#050a10",
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 14,
    padding: 14,
  },
  rank: {
    color: "#ffffff",
    fontSize: 16,
    width: 60,
    fontWeight: "700",
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
    flex: 1,
    fontWeight: "600",
  },
  profitPill: {
    backgroundColor: "#0b4d8a",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  profitText: {
    color: "#60a5fa",
    fontSize: 16,
    fontWeight: "700",
  },
});
