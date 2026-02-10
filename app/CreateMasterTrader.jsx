import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";

export default function CreateMasterTrader() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Create Master Trader", headerShown: false }}
      />
      <LinearGradient
        colors={["#0b1621", "#08111a", "#060c12"]}
        style={styles.container}
      >
        <SafeAreaView edges={["top"]} style={styles.safe}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={22}
              color="#fff"
              onPress={() => {
                router.back();
              }}
            />
            <Text style={styles.headerTitle}>Create Master Trader</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Input label="Name" placeholder="Enter Display Name" />

            <Input label="Strategy Name" placeholder="Enter Strategy Name" />

            <Input
              label="Strategy Description"
              placeholder="Enter Strategy Description"
            />

            <Input
              label="Profit Sharing (%)"
              placeholder="Enter % of share from profit"
              rightText="Max. 50%"
              keyboardType="numeric"
            />

            <Input
              label="Minimum Balance ($)"
              placeholder="Enter min. Balance required to copy"
              keyboardType="numeric"
            />

            <Dropdown label="Trading Pair" placeholder="Select Pairs" />

            {/* Button */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CREATE</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

/* ---------------- Components ---------------- */

function Input({ label, placeholder, rightText, keyboardType = "default" }) {
  return (
    <View style={styles.inputGroup}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      </View>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        style={styles.input}
        keyboardType={keyboardType}
      />

      <View style={styles.line} />
    </View>
  );
}

function Dropdown({ label, placeholder }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.dropdown}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Ionicons name="chevron-down" size={18} color="#9ca3af" />
      </View>

      <View style={styles.line} />
    </View>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safe: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 16,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  form: {
    marginTop: 10,
  },

  inputGroup: {
    marginBottom: 26,
  },

  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
  },

  rightText: {
    color: "#9ca3af",
    fontSize: 13,
  },

  input: {
    color: "#ffffff",
    fontSize: 15,
    paddingVertical: 6,
  },

  placeholder: {
    color: "#9ca3af",
    fontSize: 15,
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },

  line: {
    height: 1,
    backgroundColor: "#6b7280",
    opacity: 0.6,
    marginTop: 6,
  },

  button: {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#fbbf24",
    paddingHorizontal: 50,
    paddingVertical: 14,
    borderRadius: 6,
  },

  buttonText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 1,
  },
});
