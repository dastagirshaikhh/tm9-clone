import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TopTradersScreen() {
  const [active, setActive] = useState("Today");

  return (
    <>
      <Stack.Screen options={{ title: "Top Traders", headerShown: false }} />
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
            <Text style={styles.headerTitle}>Top Traders</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* SEGMENTED CONTROL */}
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
              {/* 2nd */}
              <Podium
                rank={2}
                name="MUGHAL FAR..."
                color="#caa64a"
                height={90}
              />

              {/* 1st */}
              <Podium
                rank={1}
                name="WAQAS ALI"
                color="#facc15"
                height={130}
                big
              />

              {/* 3rd */}
              <Podium rank={3} name="FOREX TRADE" color="#d1d5db" height={70} />
            </View>

            {/* TABLE HEADER */}
            <View style={styles.tableHeader}>
              <Text style={[styles.th, { color: "#ef4444" }]}>RANK</Text>
              <Text style={[styles.th, { color: "#60a5fa", flex: 1 }]}>
                NAME
              </Text>
              <Text style={styles.th}>PROFIT</Text>
            </View>

            {/* LIST */}
            <TraderRow rank={1} name="WAQAS ALI" profit="$406100.00" />
            <TraderRow rank={2} name="MUGHAL FARZ TA..." profit="$3634.29" />
            <TraderRow rank={3} name="FOREX TRADE" profit="$2627.50" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function Podium({ rank, name, color, height, big }) {
  return (
    <View style={styles.podiumItem}>
      <Text style={styles.podiumName}>{name}</Text>

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

function TraderRow({ rank, name, profit }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rank}>#{rank}</Text>
      <Text style={styles.name}>{name}</Text>
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
  podiumName: {
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
