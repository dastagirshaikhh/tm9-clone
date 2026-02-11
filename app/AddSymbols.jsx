import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hamberger from "../components/Hamberger";

export default function AddSymbolScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const categories = [
    "Forex",
    "Crypto",
    "Indices",
    "Energies",
    "Stocks",
    "Metals",
    "Spot",
    "Dated Energy",
    "Dated Indices Mini",
  ];

  const filtered = categories.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Stack.Screen options={{ title: "Add Symbol", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <Hamberger title="Add symbol" />

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#9ca3af" />
          <TextInput
            placeholder="Find symbols"
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.divider} />

        {/* List */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity style={styles.row}>
                <MaterialIcons
                  name="folder"
                  size={26}
                  color="#9ca3af"
                  style={{ marginRight: 14 }}
                />
                <Text style={styles.rowText}>{item}</Text>
              </TouchableOpacity>
              <View style={styles.rowDivider} />
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
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 16,
  },

  /* Search */
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    gap: 12,
  },

  searchInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 6,
  },

  divider: {
    height: 1,
    backgroundColor: "#374151",
    marginTop: 10,
  },

  /* Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  rowText: {
    color: "#ffffff",
    fontSize: 18,
  },

  rowDivider: {
    height: 1,
    backgroundColor: "#1f2937",
  },
});
