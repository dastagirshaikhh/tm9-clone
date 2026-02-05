import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Wave from "../../components/wave.jsx";

/* ---------- CARD ---------- */
const PortfolioCard = ({
  small,
  big,
  Wave,
  arrowColor,
  iconName,
  iconLib = "Ionicons",
}) => {
  const Icon =
    iconLib === "MaterialCommunityIcons" ? MaterialCommunityIcons : Ionicons;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.iconCircle}>
          <Icon name={iconName} size={20} color="#0b1620" />
        </View>

        <View>
          <Text style={styles.cardSmall}>{small}</Text>
          <Text style={styles.cardBig}>{big}</Text>
        </View>
      </View>

      {/* WAVE */}
      <Wave />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/copy-trading")}
      >
        <Text style={styles.buttonText}>CLICK HERE</Text>
        <Text style={[styles.buttonArrow, { color: arrowColor }]}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

/* ---------- SCREEN ---------- */
export default function Portfolio() {
  return (
    <SafeAreaView edges={["top"]} style={styles.safe}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="menu" size={22} color="#fff" />
          <Text style={styles.headerTitle}>Portfolio</Text>
        </View>

        {/* Grid */}
        <ScrollView contentContainerStyle={styles.grid}>
          <PortfolioCard
            small="COPY"
            big="TRADING"
            iconName="copy-outline"
            arrowColor="#2aa3ff"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />

          <PortfolioCard
            small="TOP"
            big="TRADERS"
            iconName="account-group-outline"
            iconLib="MaterialCommunityIcons"
            arrowColor="#999"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />

          <PortfolioCard
            small="TOP GAINED"
            big="PAIRS"
            iconName="trending-up-outline"
            arrowColor="#2ecc71"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />

          <PortfolioCard
            small="ACCOUNT GROWTH"
            big="REPORT"
            iconName="bar-chart-outline"
            arrowColor="#ff4d4d"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />

          <PortfolioCard
            small="PRICE"
            big="ALERT"
            iconName="notifications-outline"
            arrowColor="#2aa3ff"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />

          <PortfolioCard
            small="FOREX"
            big="ANALYSIS"
            iconName="chart-line"
            iconLib="MaterialCommunityIcons"
            arrowColor="#999"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b1620",
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 12,
  },

  grid: {
    paddingHorizontal: 14,
    paddingBottom: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#050a10",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    elevation: 8,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#eaeaea",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  cardSmall: {
    color: "#bfc7d5",
    fontSize: 12,
    fontWeight: "600",
  },

  cardBig: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    marginTop: -2,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#141a22",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 22,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 6,
  },

  buttonArrow: {
    fontSize: 20,
    fontWeight: "700",
  },
});
