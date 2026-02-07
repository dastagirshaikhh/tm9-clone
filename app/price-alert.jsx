import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreatePriceAlertScreen() {
  const [isBid, setIsBid] = useState(true);
  const [isHigher, setIsHigher] = useState(true);
  const [price, setPrice] = useState("1.36120");

  return (
    <>
      <Stack.Screen options={{ title: "Price Alert", headerShown: false }} />
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
            <Text style={styles.headerTitle}>Create Price Alert</Text>
          </View>

          {/* SELECT SYMBOL */}
          <View style={styles.section}>
            <Text style={styles.label}>Select symbol</Text>
            <View style={styles.selectBox}>
              <Ionicons name="checkmark" size={22} color="#22c55e" />
              <Text style={styles.selectText}>GBPUSD</Text>
              <Ionicons
                name="chevron-down"
                size={22}
                color="#cbd5e1"
                style={{ marginLeft: "auto" }}
              />
            </View>

            <Text style={styles.bidAskText}>Bid: 1.36120; Ask: 1.36120</Text>
          </View>

          {/* NOTIFY WHEN */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Notify me when</Text>

            <Text style={styles.rowText}>Bid</Text>
            <Switch
              value={!isBid}
              onValueChange={() => setIsBid(!isBid)}
              thumbColor="#ffffff"
              trackColor={{ false: "#14b8a6", true: "#14b8a6" }}
            />
            <Text style={styles.rowText}>Ask</Text>
          </View>

          {/* HIGHER / LOWER */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>is</Text>

            <Text style={styles.rowText}>Higher</Text>
            <Switch
              value={!isHigher}
              onValueChange={() => setIsHigher(!isHigher)}
              thumbColor="#ffffff"
              trackColor={{ false: "#14b8a6", true: "#14b8a6" }}
            />
            <Text style={styles.rowText}>Lower</Text>
          </View>

          {/* PRICE INPUT */}
          <View style={styles.section}>
            <Text style={styles.label}>or equal to</Text>
            <View style={styles.priceBox}>
              <TextInput
                value={price}
                onChangeText={setPrice}
                style={styles.priceInput}
                keyboardType="decimal-pad"
              />
              <TouchableOpacity style={styles.stepBtn}>
                <Text style={styles.stepText}>−</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stepBtn}>
                <Text style={styles.stepText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* COMMENT */}
          <View style={styles.section}>
            <TextInput
              placeholder="Comment"
              placeholderTextColor="#94a3b8"
              style={styles.comment}
            />
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Alert</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
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

  /* Section */
  section: {
    marginTop: 20,
  },
  label: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 8,
  },

  /* Select box */
  selectBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 10,
    padding: 14,
  },
  selectText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 12,
  },
  bidAskText: {
    color: "#cbd5e1",
    fontSize: 15,
    marginTop: 10,
  },

  /* Rows */
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  rowLabel: {
    color: "#ffffff",
    fontSize: 18,
    flex: 1,
  },
  rowText: {
    color: "#ffffff",
    fontSize: 16,
    marginHorizontal: 8,
  },

  /* Price box */
  priceBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  priceInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 20,
    paddingVertical: 12,
  },
  stepBtn: {
    width: 40,
    alignItems: "center",
  },
  stepText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "600",
  },

  /* Comment */
  comment: {
    borderWidth: 1,
    borderColor: "#1f2937",
    borderRadius: 10,
    padding: 14,
    color: "#ffffff",
    fontSize: 16,
  },

  /* Button */
  button: {
    backgroundColor: "#16a34a",
    marginTop: 40,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },
});
