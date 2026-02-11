import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifications() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Notifications", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        {/* Top Dark Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={26} color="#ffffff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Notifications</Text>
        </View>

        {/* Sub Header */}
        <View style={styles.subHeader}>
          <Text style={styles.positionsText}>Sample</Text>
        </View>

        {/* Empty Body */}
        <View style={styles.body} />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b1622",
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#0b1622",
  },

  headerTitle: {
    marginLeft: 16,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
  },

  /* Sub Header */
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#0b1622",
  },

  positionsText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },

  /* Body (Grey area) */
  body: {
    flex: 1,
    backgroundColor: "#3a4756",
  },
});
