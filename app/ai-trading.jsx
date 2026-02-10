import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SYMBOLS = ["AUDCAD", "AUDCHF", "AUDJPY", "AUDNZD", "AUDUSD", "BTCUSD"];

export default function AITradingScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "AI Trading", headerShown: false }} />
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
            <Text style={styles.headerTitle}>AI Trading</Text>

            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="robot"
                size={22}
                color="#fff"
                style={{ marginRight: 14 }}
              />
              <Ionicons name="settings-outline" size={22} color="#fff" />
            </View>
          </View>

          {/* SEARCH */}
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search Symbol"
              placeholderTextColor="#9ca3af"
              style={styles.searchInput}
            />
            <Ionicons name="search" size={20} color="#9ca3af" />
          </View>

          {/* LIST */}
          <ScrollView showsVerticalScrollIndicator={false}>
            {SYMBOLS.map((symbol) => (
              <SymbolCard key={symbol} symbol={symbol} />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENT ---------- */

function SymbolCard({ symbol }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.symbol}>{symbol}</Text>

        <View style={styles.actions}>
          <ActionBtn label="BUY" color="#1e40af" />
          <ActionBtn label="SELL" color="#7f1d1d" />
          <ActionBtn label="BOTH" color="#6b7280" />
        </View>
      </View>

      <View style={styles.cardBottom}>
        <Text style={styles.meta}>Start Callback : 0</Text>
        <Text style={styles.meta}>Lot Size : 0</Text>
      </View>
    </View>
  );
}

function ActionBtn({ label, color }) {
  return (
    <TouchableOpacity style={[styles.actionBtn, { backgroundColor: color }]}>
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
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
    paddingHorizontal: 14,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  /* Search */
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
  },

  /* Card */
  card: {
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 14,
    padding: 14,
    marginBottom: 14,
    backgroundColor: "#050a10",
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  symbol: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  actions: {
    flexDirection: "row",
  },
  actionBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 6,
  },
  actionText: {
    color: "#e5e7eb",
    fontSize: 14,
    fontWeight: "700",
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  meta: {
    color: "#cbd5e1",
    fontSize: 15,
  },
});
