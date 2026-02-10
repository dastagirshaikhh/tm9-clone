import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Hamberger({ title }) {
  return (
    <View style={styles.header}>
      <Ionicons
        name="arrow-back"
        size={22}
        color="#fff"
        onPress={() => {
          router.back();
        }}
      />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },
});
