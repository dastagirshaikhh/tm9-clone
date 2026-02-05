import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Quotes"
        options={{
          title: "Quotes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Charts"
        options={{
          title: "Charts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Trade"
        options={{
          title: "Trade",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-horizontal" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="History"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
