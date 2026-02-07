import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default function DrawerLayout({ isOpen, onClose }) {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.6}
      style={styles.modal}
    >
      <View style={styles.drawer}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.symbol}>
            GBPUSD: Great Britain Pound vs US Dollar
          </Text>
        </View>

        {/* OPTIONS */}
        <DrawerItem title="New Order" onClose={onClose} />
        <DrawerItem title="Chart" onClose={onClose} />
        <DrawerItem title="Properties" onClose={onClose} />
        <DrawerItem title="View Mode" onClose={onClose} />
      </View>
    </Modal>
  );
}

/* -------- Drawer Item -------- */
function DrawerItem({ title, onClose }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        switch (title) {
          case "New Order":
            router.push("/market-execution");
            onClose();
            break;
          case "Chart":
            router.push("/(tabs)/Charts");
            onClose();
            break;
          case "Properties":
            router.push("/properties");
            onClose();
          case "View Mode":
            break;
        }
      }}
    >
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
}

/* -------- Styles -------- */
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },

  drawer: {
    backgroundColor: "#2f3f4f",
    paddingBottom: 20,
  },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },

  symbol: {
    color: "#d1d5db",
    fontSize: 16,
    fontWeight: "500",
  },

  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  itemText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "400",
  },
});
