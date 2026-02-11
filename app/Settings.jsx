import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useContext, useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContext } from "./_layout";

export default function SettingsScreen() {
  const [orderSounds, setOrderSounds] = useState(true);
  const [oneClickTrading, setOneClickTrading] = useState(true);
  const [enableNews, setEnableNews] = useState(false);
  const [showTPSL, setShowTPSL] = useState(true);
  const {showdrawer}= useContext(DrawerContext);

  return (
    <>
      <Stack.Screen options={{ title: "Settings", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="menu" size={26} color="#fff" onPress={()=>{
            showdrawer(true);
          }}/>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>
        <ScrollView>
          {/* QUOTES */}
          <Section title="QUOTES">
            <InfoRow
              title="Advanced Mode"
              description="In the advanced mode, the quotes window contains spreads, time data, as well as High and Low prices."
            />

            <SwitchRow
              title="Order sounds"
              description="Play sounds for orders"
              value={orderSounds}
              onChange={setOrderSounds}
            />

            <SwitchRow
              title="One Click Trading"
              description="Allows performing trade operations with a single tap without additional confirmation from the trader"
              value={oneClickTrading}
              onChange={setOneClickTrading}
            />
          </Section>

          {/* NEWS */}
          <Section title="NEWS">
            <SwitchRow
              title="Enable News"
              description="Receive news updates"
              value={enableNews}
              onChange={setEnableNews}
            />
          </Section>

          {/* TRADE */}
          <Section title="TRADE">
            <SwitchRow
              title="Show TP/SL Bar"
              description="User can Show or Hide TP/SL Bar"
              value={showTPSL}
              onChange={setShowTPSL}
            />
          </Section>

          {/* INTERFACE */}
          <Section title="INTERFACE">
            <InfoRow
              title="Choose theme"
              description="Use dark or light theme"
            />
          </Section>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.divider} />
      {children}
    </View>
  );
}

function SwitchRow({ title, description, value, onChange }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowDesc}>{description}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: "#374151", true: "#2563eb" }}
        thumbColor="#ffffff"
      />
    </View>
  );
}

function InfoRow({ title, description }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowDesc}>{description}</Text>
      </View>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b1622",
    paddingHorizontal: 16,
  },

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

  section: {
    marginTop: 26,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#374151",
    marginBottom: 14,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },

  rowText: {
    flex: 1,
    paddingRight: 16,
  },

  rowTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  rowDesc: {
    color: "#9ca3af",
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
});
