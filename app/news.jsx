import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LEFT_NEWS = [
  {
    date: "Jan 26",
    flag: "🇯🇵🇺🇸",
    title:
      "USD/JPY: Yen Gains 600 Pips in Huge Surge as Japan Warns of Intervention",
  },
  {
    date: "Jan 19",
    flag: "🇯🇵🇺🇸",
    title:
      "USD/JPY: Dollar Reclaims ¥158.00 Ahead of Bank of Japan’s Rate Decision. What to Know.",
  },
  {
    date: "Jan 13",
    flag: "🇯🇵🇺🇸",
    title:
      "USD/JPY: Yen Plunges to 1.5-Year Low as Japan May Seek Snap Election in February",
  },
  {
    date: "Jan 9",
    flag: "🇯🇵🇺🇸",
    title:
      "USD/JPY: Yen Pulls Back as Dollar Eyes ¥158.00 on Rumors Interest Rates Will Stay Flat",
  },
  {
    date: "Jan 5",
    flag: "🇪🇺🇺🇸",
    title:
      "EUR/USD: Euro Resumes Slide Toward $1.16, Nears Two Major Moving Averages",
  },
];

const RIGHT_NEWS = [
  {
    date: "Jan 23",
    flag: "🇯🇵🇺🇸",
    title:
      "USD/JPY: Dollar Pumps Above ¥159 as Yen Gets Battered After Another BOJ Rate Hold",
  },
  {
    date: "Jan 15",
    flag: "🇬🇧🇺🇸",
    title:
      "GBP/USD: Pound Seesaws Around $1.3430 as UK Economy Posts Surprise Growth",
  },
  {
    date: "Jan 12",
    flag: "🇪🇺🇺🇸",
    title:
      "EUR/USD: Euro Jumps to $1.17 After DOJ Takes Aim at Fed Chair Jay Powell",
  },
  {
    date: "Jan 7",
    flag: "🇬🇧🇺🇸",
    title:
      "GBP/USD: Pound Pulls Back from 3-Month High Above $1.3560 Ahead of Key US Data",
  },
  {
    date: "Jan 2",
    flag: "🇪🇺🇺🇸",
    title:
      "EUR/USD: Euro Flatlines in First Trades of 2026. What’s It Gonna Be This Year?",
  },
];

export default function NewsScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "News", headerShown: false }} />
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
            <Text style={styles.headerTitle}>News</Text>
          </View>

          <ScrollView>
            {/* CONTENT PANEL */}
            <View style={styles.panel}>
              <Text style={styles.panelTitle}>Top Stories</Text>

              <View style={styles.columns}>
                {/* LEFT COLUMN */}
                <View style={styles.column}>
                  {LEFT_NEWS.map((item, index) => (
                    <NewsItem key={index} {...item} />
                  ))}
                </View>

                {/* RIGHT COLUMN */}
                <View style={styles.column}>
                  {RIGHT_NEWS.map((item, index) => (
                    <NewsItem key={index} {...item} />
                  ))}

                  <TouchableOpacity>
                    <Text style={styles.keepReading}>Keep reading &gt;</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

/* ---------- COMPONENT ---------- */

function NewsItem({ flag, date, title }) {
  return (
    <View style={styles.newsItem}>
      <Text style={styles.meta}>
        {flag} {date}
      </Text>
      <Text style={styles.headline}>{title}</Text>
    </View>
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
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12,
  },

  /* Panel */
  panel: {
    borderWidth: 1,
    borderColor: "#1f2937",
    margin: 12,
    padding: 12,
    backgroundColor: "#000000",
  },
  panelTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  /* Columns */
  columns: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    paddingRight: 8,
  },

  /* News Item */
  newsItem: {
    marginBottom: 16,
  },
  meta: {
    color: "#9ca3af",
    fontSize: 13,
    marginBottom: 4,
  },
  headline: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 20,
  },

  keepReading: {
    color: "#3b82f6",
    fontSize: 14,
    marginTop: 8,
  },
});
