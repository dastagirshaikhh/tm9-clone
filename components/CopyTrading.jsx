import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CopyTradingScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#0b1621", "#070d14"]} style={styles.container}>
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
          <Text style={styles.headerTitle}>Copy Trading</Text>

          <TouchableOpacity
            style={styles.masterBtn}
            onPress={() => {
              router.push("/CreateMasterTrader");
            }}
          >
            <Text style={styles.masterText}>Be a Master Trader</Text>
            <Ionicons name="trending-up" size={16} color="#2563eb" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* PORTFOLIO VALUE */}
          <View style={styles.portfolioBox}>
            <Text style={styles.portfolioLabel}>PORTFOLIO VALUE</Text>
            <Text style={styles.portfolioValue}>0.00 USD</Text>
          </View>

          {/* BY CURRENCY */}
          <Text style={styles.sectionTitle}>By Currency</Text>

          <View style={styles.currencyRow}>
            <CurrencyCard label="USD" flag="https://flagcdn.com/w80/us.png" />
            <CurrencyCard label="AUD" flag="https://flagcdn.com/w80/au.png" />
            <CurrencyCard label="EUR" flag="https://flagcdn.com/w80/eu.png" />
          </View>

          {/* MOST COPIED */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Most Copied</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          <TraderCard name="Testing strategy" investors="0" />
          <TraderCard name="Master2 testing" investors="1" />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

/* ---------- COMPONENTS ---------- */

function CurrencyCard({ label, flag }) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/CopyTradingCurrency/3");
      }}
    >
      <View style={styles.currencyCard}>
        <Image source={{ uri: flag }} style={styles.flag} />
        <Text style={styles.currencyText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

function TraderCard({ name, investors }) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/StrategyDetailsScreen/2");
      }}
    >
      <View style={styles.traderCard}>
        <View style={styles.traderTop}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>TM9</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.traderName}>{name}</Text>

            <View style={styles.statsRow}>
              <Stat icon="swap-horizontal" value="0.00%" />
              <Stat icon="hand-coin-outline" value="20%" />
              <Text style={styles.statText}>Risk 0</Text>
            </View>
          </View>

          <Text style={styles.investors}>{investors}</Text>
        </View>

        <Text style={styles.investorLabel}>Investors</Text>
      </View>
    </TouchableOpacity>
  );
}

function Stat({ icon, value }) {
  return (
    <View style={styles.stat}>
      <MaterialCommunityIcons name={icon} size={18} color="#3b82f6" />
      <Text style={styles.statText}>{value}</Text>
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
    flex: 1,
  },
  masterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  masterText: {
    color: "#2563eb",
    fontWeight: "600",
    marginRight: 6,
  },

  /* Portfolio */
  portfolioBox: {
    backgroundColor: "#1f2933",
    padding: 20,
    alignItems: "center",
  },
  portfolioLabel: {
    color: "#cbd5e1",
    fontSize: 14,
    letterSpacing: 1,
  },
  portfolioValue: {
    color: "#2563eb",
    fontSize: 34,
    fontWeight: "700",
    marginTop: 6,
  },

  /* Sections */
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    margin: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  seeAll: {
    color: "#60a5fa",
    fontSize: 14,
  },

  /* Currency */
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  currencyCard: {
    backgroundColor: "#1f2933",
    width: 100,
    height: 100,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  flag: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginBottom: 8,
  },
  currencyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  /* Trader Card */
  traderCard: {
    backgroundColor: "#050a10",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 14,
    padding: 14,
  },
  traderTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoText: {
    color: "#facc15",
    fontWeight: "800",
  },
  traderName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 14,
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    color: "#cbd5e1",
    fontSize: 13,
  },
  investors: {
    color: "#3b82f6",
    fontSize: 28,
    fontWeight: "700",
  },
  investorLabel: {
    color: "#cbd5e1",
    fontSize: 13,
    alignSelf: "flex-end",
    marginTop: 4,
  },
});
