import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PropertiesScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Properties", headerShown: false }} />
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
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.symbol}>AUDUSD</Text>
              <Text style={styles.sub}>Australian Dollar vs US Dollar</Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* PROPERTIES */}
            <Section title="PROPERTIES">
              <Row label="Sector" value="Currency" />
              <Row label="Digits" value="5" />
              <Row label="Contract size" value="100000.00000000" />
              <Row label="Spread" value="Floating" />
              <Row label="Margin Currency" value="AUD" />
              <Row label="Profit Currency" value="USD" />
              <Row label="Calculation" value="Forex" />
              <Row label="Trade" value="Full access" />
              <Row label="Execution" value="Market Execution" />
              <Row label="GTC mode" value="Good till cancelled" />
              <Row
                label="Fill policy"
                value="Fill or Kill, immediate or Cancel"
              />
              <Row label="Expiration" value="All" />
              <Row label="Minimal volume" value="100" />
              <Row label="Maximal volume" value="300000" />
              <Row label="Volume step" value="0.01" />
              <Row label="Swap type" value="In points" />
              <Row label="Swap long" value="-3.40000000" />
              <Row label="Swap short" value="-1.50000000" />
              <Row label="Subscription" value="Level 2 realtime" />
            </Section>

            {/* SWAP RATES */}
            <Section title="SWAP RATES">
              <Row label="Monday" value="1.00000000" />
              <Row label="Tuesday" value="1.00000000" />
              <Row label="Wednesday" value="3.00000000" />
              <Row label="Thursday" value="1.00000000" />
              <Row label="Friday" value="1.00000000" />
            </Section>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
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
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  symbol: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  sub: {
    color: "#94a3b8",
    fontSize: 13,
    marginTop: 2,
  },

  /* Section */
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    marginVertical: 14,
  },

  /* Rows */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    color: "#cbd5e1",
    fontSize: 15,
    flex: 1,
    paddingRight: 12,
  },
  value: {
    color: "#ffffff",
    fontSize: 15,
    textAlign: "right",
    flex: 1,
  },
});
