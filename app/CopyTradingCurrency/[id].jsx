import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useContext, useState } from "react";
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
import CopyTradingFilterModal from "../../components/CopyTradingFilterModal";
import { DrawerContext } from "../_layout";

export default function CopyTradingScreen() {
  const { id } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const [activeRange, setActiveRange] = useState("Total");
  const [filter, setFilter] = useState(false);
  const { showdrawer } = useContext(DrawerContext);

  return (
    <>
      <Stack.Screen options={{ title: "Copy Trading", headerShown: false }} />
      <LinearGradient
        colors={["#0b1621", "#08111a", "#060c12"]}
        style={styles.container}
      >
        <SafeAreaView edges={["top"]} style={styles.safe}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              name="menu"
              size={26}
              color="#fff"
              onPress={() => {
                showdrawer(true);
              }}
            />
            <Text style={styles.headerTitle}>Copy Trading</Text>
          </View>

          {/* Filters */}
          <View style={styles.rangeRow}>
            {["1 M", "3 M", "Total"].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.rangeBtn,
                  activeRange === item && styles.rangeBtnActive,
                ]}
                onPress={() => setActiveRange(item)}
              >
                <Text
                  style={[
                    styles.rangeText,
                    activeRange === item && styles.rangeTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Content */}
          <ScrollView
            contentContainerStyle={{ paddingBottom: 140 }}
            showsVerticalScrollIndicator={false}
          >
            <StrategyCard title="Testing strategy" investors={0} />
            <StrategyCard title="Master2 testing" investors={1} />
          </ScrollView>

          {/* Bottom Actions (SAFE) */}
          <View
            style={[styles.bottomBar, { paddingBottom: insets.bottom + 8 }]}
          >
            <TouchableOpacity style={styles.bottomBtn}>
              <Ionicons name="swap-vertical" size={18} color="#fff" />
              <Text style={styles.bottomText}>Sort</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.bottomBtn}
              onPress={() => {
                setFilter(true);
              }}
            >
              <MaterialIcons name="tune" size={18} color="#fff" />
              <Text style={styles.bottomText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <CopyTradingFilterModal
          visible={filter}
          onClose={() => {
            setFilter(false);
          }}
        />
      </LinearGradient>
    </>
  );
}

/* Strategy Card */
function StrategyCard({ title, investors }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.cardRow}>
        <View style={styles.metric}>
          <Ionicons name="repeat" size={16} color="#3b82f6" />
          <Text style={styles.metricText}>0.00%</Text>
        </View>

        <View style={styles.metric}>
          <Ionicons name="cash-outline" size={16} color="#22c55e" />
          <Text style={styles.metricText}>20%</Text>
        </View>

        <Text style={styles.riskText}>Risk 0</Text>

        <Text style={styles.investorsText}>{investors} Investors</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 14,
  },

  /* Range Buttons */
  rangeRow: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  rangeBtn: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#374151",
  },
  rangeBtnActive: {
    borderColor: "#22c55e",
  },
  rangeText: {
    color: "#9ca3af",
    fontWeight: "600",
  },
  rangeTextActive: {
    color: "#22c55e",
  },

  /* Card */
  card: {
    backgroundColor: "#020617",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 16,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  metric: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  metricText: {
    color: "#fff",
    fontSize: 14,
  },
  riskText: {
    color: "#9ca3af",
    marginLeft: "auto",
  },
  investorsText: {
    color: "#3b82f6",
    fontWeight: "700",
    marginLeft: 10,
  },

  /* Bottom Bar */
  bottomBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 0,
    flexDirection: "row",
    gap: 16,
  },
  bottomBtn: {
    flex: 1,
    backgroundColor: "#4b5563",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  bottomText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
