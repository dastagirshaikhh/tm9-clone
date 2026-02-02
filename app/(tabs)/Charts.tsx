import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CandleChart from "../../components/CandleChart.jsx";

function Charts() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: "#0b1620" }}
    >
      <CandleChart />
    </SafeAreaView>
  );
}

export default Charts;
