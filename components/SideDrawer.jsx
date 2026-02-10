import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default function SideDrawer({ visible, onClose }) {
  const [safeTrader, setSafeTrader] = useState(false);

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <LinearGradient
        colors={["#0b1621", "#08111a", "#060c12"]}
        style={styles.drawer}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.username}>johnny</Text>
            <Text style={styles.account}>910606 - Tm9Quotes-Demo</Text>
            <Text
              style={styles.manage}
              onPress={() => {
                router.push("/AccountScreen/4");
                onClose();
              }}
            >
              Manage accounts
            </Text>
          </View>

          <View style={styles.demoBadge}>
            <Text style={styles.demoText}>DEMO</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* MENU ITEMS */}
        <DrawerItem icon="sliders" label="Trade" lib="Feather" />
        <DrawerItem icon="file-text" label="News" lib="Feather" />
        <DrawerItem icon="mail" label="Mailbox" lib="Feather" badge="0" />
        <DrawerItem icon="book" label="Journal" lib="Feather" />
        <DrawerItem icon="settings" label="Settings" lib="Ionicons" />
        <DrawerItem
          icon="notifications"
          label="Latest Updates"
          lib="Ionicons"
        />
        <DrawerItem icon="alert-circle" label="Report an issue" lib="Feather" />
        <DrawerItem icon="person-add" label="Add Account" lib="Ionicons" />
        <DrawerItem icon="person-add-outline" label="Register" lib="Ionicons" />

        {/* SAFE TRADER */}
        <View style={styles.switchRow}>
          <View style={styles.rowLeft}>
            <Ionicons name="shield-checkmark" size={22} color="#fff" />
            <Text style={styles.label}>Safe Trader</Text>
          </View>

          <Switch
            value={safeTrader}
            onValueChange={setSafeTrader}
            thumbColor="#fff"
            trackColor={{ true: "#2563eb", false: "#374151" }}
          />
        </View>

        {/* VERSION */}
        <Text style={styles.version}>v1.7.10</Text>
      </LinearGradient>
    </Modal>
  );
}

/* -------------------- ITEM -------------------- */

function DrawerItem({ icon, label, badge, lib }) {
  const Icon =
    lib === "Ionicons" ? Ionicons : lib === "Feather" ? Feather : FontAwesome5;

  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.rowLeft}>
        <Icon name={icon} size={22} color="#fff" />
        <Text style={styles.label}>{label}</Text>
      </View>

      {badge !== undefined && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-start",
  },

  drawer: {
    width: "78%",
    height: "100%",
    paddingTop: 60,
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  username: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },

  account: {
    fontSize: 14,
    color: "#9ca3af",
    marginTop: 2,
  },

  manage: {
    fontSize: 16,
    color: "#3b82f6",
    marginTop: 8,
    fontWeight: "600",
  },

  demoBadge: {
    backgroundColor: "#16a34a",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },

  demoText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#1f2933",
    marginVertical: 18,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },

  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  label: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },

  badge: {
    backgroundColor: "#ef4444",
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  version: {
    position: "absolute",
    bottom: 24,
    right: 20,
    color: "#9ca3af",
    fontSize: 14,
  },
});
