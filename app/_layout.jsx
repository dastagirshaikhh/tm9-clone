import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createContext, useState } from "react";
import SideDrawer from "../components/SideDrawer";

export const unstable_settings = {
  anchor: "(tabs)",
};

export const DrawerContext = createContext(null);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [drawer, showdrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ showdrawer }}>
      <SafeAreaProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          <SideDrawer
            visible={drawer}
            onClose={() => {
              showdrawer(false);
            }}
          />
          <StatusBar style="auto" />
        </ThemeProvider>
      </SafeAreaProvider>
    </DrawerContext.Provider>
  );
}
