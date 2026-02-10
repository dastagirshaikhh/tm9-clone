import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OpenDemoAccountScreen() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Open Account", headerShown: false }} />
      <LinearGradient
        colors={["#0b1621", "#09121b", "#070d14"]}
        style={styles.container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#fff"
              onPress={() => {
                router.back();
              }}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.headerTitle}>Open a demo account</Text>
              <Text style={styles.headerSubtitle}>Personal information</Text>
            </View>
          </View>

          {/* Broker */}
          <View style={styles.brokerRow}>
            <View style={styles.logoPlaceholder}>
              <Text style={styles.logoText}>TM9</Text>
            </View>
            <View>
              <Text style={styles.brokerName}>Tm9Quotes-Demo</Text>
              <Text style={styles.brokerSub}>TM9 Quotes</Text>
            </View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
            {/* PERSONAL INFO */}
            <Section title="PERSONAL INFORMATION" />

            <Row label="First name" hint="min 2 letters" />
            <Row label="Middle name" hint="optional" />
            <Row label="Last name" hint="min 2 letters" />
            <Row label="Phone" hint="+12345678912" />
            <Row label="E-Mail" hint="name@company.com" />

            <Text style={styles.infoText}>
              Personal details are used for opening a trade account and are not
              passed to any third parties. The information is handled securely
              and confidentially.
            </Text>

            {/* ACCOUNT INFO */}
            <Section title="ACCOUNT INFORMATION" />
            <Row label="Country" value="United Arab Emirates" />

            {/* AGREEMENTS */}
            <Section title="AGREEMENTS" />

            <TouchableOpacity
              style={styles.acceptRow}
              onPress={() => setAccepted(!accepted)}
            >
              <Text style={styles.acceptText}>Accept</Text>
              <View
                style={[styles.checkbox, accepted && styles.checkboxActive]}
              >
                {accepted && (
                  <Ionicons name="checkmark" size={18} color="#fff" />
                )}
              </View>
            </TouchableOpacity>

            <Text style={styles.agreementText}>
              By enabling "Accept" you agree with the terms and conditions for
              opening an account and the data protection policy
            </Text>
          </ScrollView>

          {/* REGISTER BUTTON */}
          <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

/* ===== Reusable Components ===== */

function Section({ title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionText}>{title}</Text>
    </View>
  );
}

function Row({ label, hint, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      {value ? (
        <Text style={styles.rowValue}>{value}</Text>
      ) : (
        <Text style={styles.rowHint}>{hint}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },

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
  },
  headerSubtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 2,
  },

  /* Broker */
  brokerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  logoPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 6,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoText: {
    color: "#facc15",
    fontWeight: "800",
  },
  brokerName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  brokerSub: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 2,
  },

  /* Section */
  section: {
    backgroundColor: "#2b3441",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  sectionText: {
    color: "#9ca3af",
    fontSize: 13,
    fontWeight: "600",
  },

  /* Rows */
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },
  rowLabel: {
    color: "#fff",
    fontSize: 16,
  },
  rowHint: {
    color: "#9ca3af",
    fontSize: 14,
  },
  rowValue: {
    color: "#fff",
    fontSize: 14,
  },

  /* Info text */
  infoText: {
    color: "#9ca3af",
    fontSize: 13,
    lineHeight: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  /* Accept */
  acceptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },
  acceptText: {
    color: "#fff",
    fontSize: 16,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: "#9ca3af",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: "#1e90ff",
    borderColor: "#1e90ff",
  },
  agreementText: {
    color: "#9ca3af",
    fontSize: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  /* Register */
  registerBtn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#1f2937",
    paddingVertical: 16,
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
