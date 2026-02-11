import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SelectedSymbolsScreen() {
  const router = useRouter();

  const symbols = [
    { code: "GBPUSD", desc: "Great Britain Pound vs US Dollar" },
    { code: "AUDUSD", desc: "Australian Dollar vs US Dollar" },
    { code: "EURUSD", desc: "Euro vs US Dollar" },
    { code: "XAUUSD", desc: "Gold Ounce vs US Dollar" },
    { code: "NZDUSD", desc: "New Zealand Dollar vs US Dollar" },
    { code: "USDCAD", desc: "US Dollar vs Canadian Dollar" },
    { code: "USDCHF", desc: "US Dollar vs Swiss Franc" },
    { code: "USDJPY", desc: "US Dollar vs Japanese Yen" },
    { code: "BTCUSD", desc: "BitCoin vs US Dollar" },
  ];

  return (
    <>
      <Stack.Screen
        options={{ title: "Selected Symbols", headerShown: false }}
      />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#ffffff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Selected symbols</Text>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="add" size={28} color="#ffffff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <MaterialIcons name="delete-outline" size={26} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* List */}
        <FlatList
          data={symbols}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity style={styles.row}>
                <Text style={styles.symbolCode}>{item.code}</Text>
                <Text style={styles.symbolDesc}>{item.desc}</Text>
              </TouchableOpacity>
              <View style={styles.divider} />
            </>
          )}
        />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b1622",
    paddingHorizontal: 16,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },

  headerTitle: {
    flex: 1,
    marginLeft: 16,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBtn: {
    marginLeft: 18,
  },

  /* Rows */
  row: {
    paddingVertical: 18,
  },

  symbolCode: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },

  symbolDesc: {
    color: "#9ca3af",
    fontSize: 14,
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#1f2937",
  },
});
