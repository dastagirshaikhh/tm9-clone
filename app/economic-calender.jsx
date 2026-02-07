import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* -------- MOCK DATA -------- */
const CALENDAR = [
  {
    date: "February 10",
    events: [
      {
        time: "19:00",
        flag: "🇺🇸",
        title: "Retail Sales MM",
        actual: "0.4%",
        previous: "0.6%",
      },
    ],
  },
  {
    date: "February 11",
    events: [
      {
        time: "19:00",
        flag: "🇺🇸",
        title: "Non-Farm Payrolls",
        actual: "70K",
        previous: "50K",
      },
      {
        time: "",
        flag: "🇺🇸",
        title: "Unemployment Rate",
        actual: "4.4%",
        previous: "4.4%",
      },
    ],
  },
  {
    date: "February 12",
    events: [
      {
        time: "19:00",
        flag: "🇺🇸",
        title: "Initial Jobless Claims",
        actual: "218K",
        previous: "231K",
      },
      {
        time: "20:30",
        flag: "🇺🇸",
        title: "Existing Home Sales",
        actual: "4.15M",
        previous: "4.35M",
      },
    ],
  },
];

/* -------- SCREEN -------- */
export default function EconomicCalendarScreen() {
  return (
    <>
      <Stack.Screen
        options={{ title: "Economic Calender", headerShown: false }}
      />
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
            <Text style={styles.headerTitle}>Economic Calendar</Text>
          </View>

          {/* MARKET TICKER */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ticker}
          >
            <Ticker text="US 100 Cash CFD  25,016.9  +690.0 (+2.84%)" />
            <Ticker text="EUR / USD  1.18133  +0.00351 (+0.30%)" />
            <Ticker text="Bitcoin  71,145" />
          </ScrollView>

          {/* CALENDAR LIST */}
          <ScrollView>
            {CALENDAR.map((day, i) => (
              <View key={i}>
                <Text style={styles.date}>{day.date}</Text>

                {day.events.map((e, idx) => (
                  <EventRow key={idx} {...e} />
                ))}
              </View>
            ))}

            <Text style={styles.more}>More events ›</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* -------- COMPONENTS -------- */

function Ticker({ text }) {
  return (
    <View style={styles.tickerItem}>
      <Text style={styles.tickerText}>{text}</Text>
    </View>
  );
}

function EventRow({ time, flag, title, actual, previous }) {
  return (
    <View style={styles.row}>
      <Text style={styles.time}>{time}</Text>

      <Text style={styles.flag}>{flag}</Text>

      <MaterialCommunityIcons
        name="signal-cellular-3"
        size={16}
        color="#3b82f6"
        style={{ marginRight: 6 }}
      />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{actual}</Text>
      <Text style={styles.value}>{previous}</Text>
    </View>
  );
}

/* -------- STYLES -------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#070d14",
  },
  container: {
    flex: 1,
    backgroundColor: "#070d14",
  },

  /* Header */
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

  /* Ticker */
  ticker: {
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
    paddingVertical: 6,
  },
  tickerItem: {
    marginHorizontal: 10,
  },
  tickerText: {
    color: "#10b981",
    fontSize: 13,
    fontWeight: "500",
  },

  /* Date */
  date: {
    color: "#9ca3af",
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: "#020617",
  },

  /* Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1f2937",
    backgroundColor: "#000000",
  },
  time: {
    color: "#9ca3af",
    fontSize: 13,
    width: 50,
  },
  flag: {
    fontSize: 16,
    marginHorizontal: 6,
  },
  title: {
    color: "#e5e7eb",
    fontSize: 14,
    flex: 1,
  },
  value: {
    color: "#e5e7eb",
    fontSize: 13,
    width: 70,
    textAlign: "right",
  },

  more: {
    color: "#3b82f6",
    fontSize: 14,
    padding: 16,
  },
});
