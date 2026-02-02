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

const PortfolioCard = ({ small, big, Wave, arrowColor, icon }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.iconCircle}>{icon}</View>
        <View>
          <Text style={styles.cardSmall}>{small}</Text>
          <Text style={styles.cardBig}>{big}</Text>
        </View>
      </View>

      {/* SVG WAVE */}
      <Wave />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CLICK HERE</Text>
        <Text style={[styles.buttonArrow, { color: arrowColor }]}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Portfolio() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#0b1620" }}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.menu}>☰</Text>
          <Text style={styles.headerTitle}>Portfolio</Text>
        </View>

        {/* Grid */}
        <ScrollView contentContainerStyle={styles.grid}>
          <PortfolioCard
            small="COPY"
            big="TRADING"
            waveColor="#0a4fa3"
            arrowColor="#2aa3ff"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
          <PortfolioCard
            small="TOP"
            big="TRADERS"
            waveColor="#4a4a4a"
            arrowColor="#999"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
          <PortfolioCard
            small="TOP GAINED"
            big="PAIRS"
            waveColor="#0b6b3a"
            arrowColor="#2ecc71"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
          <PortfolioCard
            small="ACCOUNT GROWTH"
            big="REPORT"
            waveColor="#7a1e16"
            arrowColor="#ff4d4d"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
          <PortfolioCard
            small="PRICE"
            big="ALERT"
            waveColor="#0a4fa3"
            arrowColor="#2aa3ff"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
          <PortfolioCard
            small="FOREX"
            big="ANALYSIS"
            waveColor="#4a4a4a"
            arrowColor="#999"
            Wave={() => <Wave stopColor="#0b4d2a" />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1620",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  menu: {
    color: "#fff",
    fontSize: 22,
    marginRight: 12,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
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
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 10,
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

  wave: {
    height: 72,
    borderRadius: 10,
    marginVertical: 16,
    opacity: 0.9,
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
