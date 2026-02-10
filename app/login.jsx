import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hamberger from "../components/Hamberger";

export default function LoginAccountScreen() {
  const [savePassword, setSavePassword] = useState(true);

  return (
    <>
      <Stack.Screen options={{ title: "Login", headerShown: false }} />
      <LinearGradient
        colors={["#0b1621", "#09121b", "#070d14"]}
        style={styles.container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Hamberger title="TM9 Quotes" />
          {/* Demo Account Banner */}
          <TouchableOpacity style={styles.demoRow}>
            <View style={styles.demoIcon}>
              <Ionicons name="swap-vertical" size={20} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={styles.demoTitle}
                onPress={() => {
                  router.push("/OpenAccount");
                }}
              >
                Open a demo account
              </Text>
              <Text style={styles.demoSubtitle}>To test your strategies</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#9ca3af" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.heading}>Login to An Existing Account</Text>

          {/* Table */}
          <View style={styles.table}>
            <Row label="Login">
              <TextInput
                placeholder=""
                placeholderTextColor="#9ca3af"
                style={styles.input}
              />
            </Row>

            <Row label="Password">
              <TextInput
                secureTextEntry
                placeholder=""
                placeholderTextColor="#9ca3af"
                style={styles.input}
              />
            </Row>

            <Row label="Server">
              <View style={styles.serverRow}>
                <Text style={styles.serverText}>Tm9Quotes-Demo</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={22}
                  color="#9ca3af"
                />
              </View>
            </Row>

            <Row label="Save Password">
              <TouchableOpacity
                style={[styles.checkbox, savePassword && styles.checkboxActive]}
                onPress={() => setSavePassword(!savePassword)}
              >
                {savePassword && (
                  <Ionicons name="checkmark" size={18} color="#fff" />
                )}
              </TouchableOpacity>
            </Row>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

/* Row component */
function Row({ label, children }) {
  return (
    <View style={styles.row}>
      <View style={styles.labelCol}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.valueCol}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  /* Demo banner */
  demoRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },
  demoIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  demoTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  demoSubtitle: {
    color: "#9ca3af",
    fontSize: 13,
    marginTop: 2,
  },

  /* Heading */
  heading: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 24,
  },

  /* Table */
  table: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#1f2937",
    minHeight: 56,
  },
  labelCol: {
    width: 140,
    justifyContent: "center",
    paddingLeft: 16,
    borderRightWidth: 1,
    borderColor: "#1f2937",
  },
  valueCol: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
  },

  input: {
    color: "#ffffff",
    fontSize: 16,
  },

  serverRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  serverText: {
    color: "#ffffff",
    fontSize: 16,
  },

  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: "#3b82f6",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: "#1e90ff",
  },

  /* Login button */
  loginBtn: {
    backgroundColor: "#facc15",
    alignSelf: "center",
    marginTop: 40,
    paddingVertical: 14,
    paddingHorizontal: 56,
    borderRadius: 4,
  },
  loginText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
});
