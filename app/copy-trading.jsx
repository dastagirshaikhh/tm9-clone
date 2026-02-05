import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import CopyTradingScreen from "../components/CopyTrading";

export default function CopyTradingComponent() {
  return (
    <>
      <Stack.Screen options={{ title: "Copy Trading", headerShown: false }} />

      <CopyTradingScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1620",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
