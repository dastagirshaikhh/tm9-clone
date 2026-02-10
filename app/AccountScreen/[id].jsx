import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, Stack } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContext } from "../../app/_layout";

export default function AccountsScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { showdrawer } = useContext(DrawerContext);
  return (
    <>
      <Stack.Screen
        options={{ title: "Manage Accounts", headerShown: false }}
      />
      <LinearGradient
        colors={["#0b1621", "#0a121b", "#070d14"]}
        style={styles.container}
      >
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <Ionicons
              name="menu"
              size={24}
              color="#fff"
              onPress={() => {
                showdrawer(true);
              }}
            />

            <Text style={styles.title}>Accounts</Text>

            <View style={styles.topIcons}>
              <Ionicons name="search" size={22} color="#fff" />
              <Ionicons name="add" size={26} color="#fff" />
              <TouchableOpacity onPress={() => setMenuVisible(true)}>
                <MaterialIcons name="more-vert" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Account Card */}
          <View style={styles.card}>
            {/* DEMO Ribbon */}
            <View style={styles.demoRibbon}>
              <Text style={styles.demoText}>DEMO</Text>
            </View>

            {/* Logo */}
            <View style={styles.logoWrap}>
              <Text style={styles.logo}>TM9</Text>
            </View>

            {/* User Info */}
            <Text style={styles.username}>johnny</Text>
            <Text style={styles.platform}>TM9 Quotes</Text>

            <Text style={styles.accountInfo}>910606 - TM9 Quotes</Text>
            <Text style={styles.accountInfo}>Access Point #1, Hedge</Text>

            {/* Balance */}
            <View style={styles.balanceRow}>
              <Ionicons name="qr-code-outline" size={28} color="#fff" />
              <Text style={styles.balance}>10000.13 USD</Text>
              <Ionicons name="notifications-outline" size={26} color="#fff" />
            </View>
          </View>
        </SafeAreaView>
        <Modal
          transparent
          animationType="fade"
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          {/* Overlay */}
          <Pressable
            style={styles.menuOverlay}
            onPress={() => setMenuVisible(false)}
          />

          {/* Menu */}
          <View style={styles.menuContainer}>
            <MenuItem
              label="Change Password"
              onPress={() => {
                setMenuVisible(false);
                // navigate or logic
              }}
            />
            <MenuItem
              label="Clear Saved Password"
              onPress={() => {
                setMenuVisible(false);
              }}
            />
            <MenuItem
              label="Delete Account"
              danger
              onPress={() => {
                setMenuVisible(false);
                router.push("/login");
              }}
            />
          </View>
        </Modal>
      </LinearGradient>
    </>
  );
}

function MenuItem({ label, onPress, danger = false }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItem}>
      <Text style={[styles.menuText, danger && { color: "#ef4444" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  menuContainer: {
    position: "absolute",
    top: 56, // aligns under top bar
    right: 12,
    width: 260,
    backgroundColor: "#0b1620",
    borderRadius: 8,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
  },

  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderColor: "#1f2937",
  },

  menuText: {
    color: "#ffffff",
    fontSize: 16,
  },

  /* Top Bar */
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  /* Card */
  card: {
    margin: 16,
    marginTop: 12,
    backgroundColor: "#2b3744",
    borderRadius: 14,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    position: "relative",
  },

  /* DEMO Ribbon */
  demoRibbon: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#57c800",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  demoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },

  /* Logo */
  logoWrap: {
    marginBottom: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#facc15",
  },

  username: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 4,
  },

  platform: {
    color: "#3b82f6",
    fontSize: 16,
    marginTop: 6,
  },

  accountInfo: {
    color: "#9ca3af",
    fontSize: 14,
    marginTop: 4,
  },

  /* Balance Row */
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 28,
  },

  balance: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "700",
  },
});
