import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function TradingView() {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body, #tv {
            margin: 0;
            padding: 0;
            height: 100%;
            background: #000;
          }
        </style>
      </head>
      <body>
        <div id="tv"></div>

        <script src="https://s3.tradingview.com/tv.js"></script>
        <script>
          new TradingView.widget({
            autosize: true,
            symbol: "OANDA:XAUUSD",
            interval: "15",
            timezone: "Asia/Kolkata",
            theme: "dark",
            style: "1",
            locale: "en",
            hide_top_toolbar: false,
            hide_legend: false,
            container_id: "tv"
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ html }}
        originWhitelist={["*"]}
        javaScriptEnabled
        domStorageEnabled
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
