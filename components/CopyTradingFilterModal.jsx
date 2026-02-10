import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CopyTradingFilterModal({ visible, onClose }) {
  const [returnFilter, setReturnFilter] = useState("<50%");
  const [investors, setInvestors] = useState("50+");
  const [risk, setRisk] = useState(5);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <LinearGradient
          colors={["#0b1621", "#08111a", "#060c12"]}
          style={styles.sheet}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Filter</Text>
            <TouchableOpacity
              onPress={() => {
                setReturnFilter(null);
                setInvestors(null);
                setRisk(5);
              }}
            >
              <Text style={styles.clear}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          {/* Return */}
          <Text style={styles.sectionTitle}>Return</Text>
          <View style={styles.row}>
            {["<50%", "50-100%", ">100%"].map((item) => (
              <Pill
                key={item}
                label={item}
                active={returnFilter === item}
                onPress={() => setReturnFilter(item)}
              />
            ))}
          </View>

          {/* Risk */}
          <View style={styles.riskHeader}>
            <Text style={styles.sectionTitle}>Risk Score</Text>
            <Text style={styles.range}>1-10</Text>
          </View>

          <Slider
            minimumValue={1}
            maximumValue={10}
            step={1}
            value={risk}
            onValueChange={setRisk}
            minimumTrackTintColor="#1e90ff"
            maximumTrackTintColor="#334155"
            thumbTintColor="#1e90ff"
          />

          <View style={styles.scale}>
            {Array.from({ length: 10 }).map((_, i) => (
              <Text key={i} style={styles.scaleText}>
                {i + 1}
              </Text>
            ))}
          </View>

          {/* Investors */}
          <Text style={styles.sectionTitle}>Number of Investors</Text>
          <View style={styles.row}>
            {["50+", "100+", "250+"].map((item) => (
              <Pill
                key={item}
                label={item}
                active={investors === item}
                onPress={() => setInvestors(item)}
              />
            ))}
          </View>

          {/* Buttons */}
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryText}>SHOW RESULTS</Text>
          </TouchableOpacity>

          <Pressable style={styles.secondaryBtn} onPress={onClose}>
            <Text style={styles.secondaryText}>Close</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </Modal>
  );
}

/* ---------- Pill ---------- */
function Pill({ label, active, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.pill, active && styles.pillActive]}
    >
      <Text style={[styles.pillText, active && styles.pillTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  sheet: {
    padding: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  clear: {
    color: "#1e90ff",
    fontSize: 14,
  },

  divider: {
    height: 1,
    backgroundColor: "#1f2933",
    marginVertical: 16,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 22,
  },

  pill: {
    backgroundColor: "#e5e7eb",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
  },

  pillActive: {
    backgroundColor: "#1e90ff",
  },

  pillText: {
    color: "#000",
    fontWeight: "600",
  },

  pillTextActive: {
    color: "#fff",
  },

  riskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  range: {
    color: "#1e90ff",
    fontWeight: "600",
  },

  scale: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  scaleText: {
    color: "#fff",
    fontSize: 12,
  },

  primaryBtn: {
    backgroundColor: "#1e90ff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  primaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryBtn: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  secondaryText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
