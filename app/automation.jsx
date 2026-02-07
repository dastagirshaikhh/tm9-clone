import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AutomationScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Automation", headerShown: false }} />
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
            <Text style={styles.headerTitle}>Automation</Text>
          </View>

          {/* CARD */}
          <View style={styles.card}>
            {/* TP */}
            <Text style={styles.label}>Default TP :</Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="Enter default TP"
                placeholderTextColor="#9ca3af"
                style={styles.input}
              />
              <Text style={styles.unit}>Points</Text>
            </View>
            <View style={styles.divider} />

            {/* SL */}
            <Text style={[styles.label, { marginTop: 22 }]}>Default SL :</Text>
            <View style={styles.inputRow}>
              <TextInput
                placeholder="Enter default SL"
                placeholderTextColor="#9ca3af"
                style={styles.input}
              />
              <Text style={styles.unit}>Points</Text>
            </View>
            <View style={styles.divider} />

            {/* NOTE */}
            <Text style={styles.note}>
              #NOTE : These values will be automatically applicable{"\n"}
              for all New Orders.
            </Text>
          </View>

          {/* SAVE BUTTON */}
          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#07121d",
  },
  container: {
    flex: 1,
    backgroundColor: "#07121d",
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
    marginLeft: 12,
  },

  /* Card */
  card: {
    backgroundColor: "#000000",
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },

  label: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 6,
  },
  unit: {
    color: "#ffffff",
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: "#2b4a66",
    marginTop: 10,
  },

  note: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 22,
    lineHeight: 22,
  },

  /* Save Button */
  saveBtn: {
    backgroundColor: "#1e6fd9",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 28,
  },
  saveText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
});
