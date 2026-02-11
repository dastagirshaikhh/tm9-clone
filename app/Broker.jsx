import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BrokerScreen() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Stack.Screen options={{ title: "Find Broker", headerShown: false }} />
      <LinearGradient
        colors={["#0b1621", "#08131d", "#050c14"]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.safe}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Broker</Text>

            <MaterialIcons
              name="qr-code"
              size={22}
              color="#fff"
              onPress={() => {
                router.push("/QRScanner");
              }}
            />
          </View>

          {/* Search */}
          <View style={styles.searchRow}>
            <Ionicons name="search" size={20} color="#9ca3af" />
            <TextInput
              placeholder="Find broker"
              placeholderTextColor="#9ca3af"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <View style={styles.divider} />
          {search ? (
            <TouchableOpacity
              onPress={() => {
                router.push("/login");
              }}
            >
              <View style={styles.resultRow}>
                <Image
                  source={{
                    uri: "https://via.placeholder.com/40x40.png?text=TM9",
                  }}
                  style={styles.logo}
                />

                <View style={styles.resultText}>
                  <Text style={styles.resultTitle}>TM9 Quotes</Text>
                  <Text style={styles.resultSub}>TM9 Quotes</Text>
                </View>

                <TouchableOpacity>
                  <Ionicons
                    name="information-circle-outline"
                    size={22}
                    color="#e5e7eb"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.divider} />
            </TouchableOpacity>
          ) : (
            <View style={styles.emptyContainer}>
              <Ionicons
                name="search-outline"
                size={64}
                color="#e5e7eb"
                style={{ marginBottom: 16 }}
              />

              <Text style={styles.emptyTitle}>
                Use search to find a company
              </Text>

              <Text style={styles.paragraph}>
                The application may feature brokerage companies which may not be
                regulated in your country. Exercise caution and responsibility
                before opening an account with any brokerage company.
              </Text>

              <Text style={styles.paragraph}>
                Contact details are provided for each company. Use them to
                further research their regulatory status and services.
                TRADEMASTER may not possess complete and updated information
                about the regulation status of brokerage companies in particular
                countries and does not guarantee their reliability or
                reputation.
              </Text>
            </View>
          )}
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  /* Safe Area */
  safe: {
    flex: 1,
    paddingHorizontal: 16,
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },

  /* Search */
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    gap: 10,
    paddingVertical: 6,
  },

  searchInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 4,
  },

  searchUnderline: {
    height: 1,
    backgroundColor: "#374151",
    marginTop: 10,
    marginBottom: 24,
  },

  /* Result Row */
  resultRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 6,
    marginRight: 14,
  },

  resultText: {
    flex: 1,
  },

  resultTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },

  resultSub: {
    color: "#3b82f6",
    fontSize: 14,
    marginTop: 2,
  },

  resultDivider: {
    height: 1,
    backgroundColor: "#1f2937",
    marginTop: 10,
  },

  /* Empty State */
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 80,
  },

  emptyTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },

  paragraph: {
    color: "#d1d5db",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 14,
  },
});
