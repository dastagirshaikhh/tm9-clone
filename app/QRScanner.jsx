import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const BOX_SIZE = width * 0.7;

export default function QRScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission?.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={{ color: "#fff" }}>Camera permission required</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text style={{ color: "#1e90ff", marginTop: 10 }}>
            Grant Permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleScan = ({ data }) => {
    if (scanned) return;
    setScanned(true);
    console.log("QR Data:", data);
    // navigation.goBack();
  };

  return (
    <>
      <Stack.Screen options={{ title: "QR Scanner", headerShown: false }} />
      <View style={styles.container}>
        <CameraView
          style={StyleSheet.absoluteFill}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={scanned ? undefined : handleScan}
        />

        {/* Header */}
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign In with QR code</Text>
        </SafeAreaView>

        {/* Overlay */}
        <View style={styles.overlay}>
          <View style={styles.topOverlay} />

          <View style={styles.middleRow}>
            <View style={styles.sideOverlay} />

            {/* Scan Box */}
            <View style={styles.scanBox} />

            <View style={styles.sideOverlay} />
          </View>

          <View style={styles.bottomOverlay} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  safe: {
    flex: 1,
    backgroundColor: "#070d14",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 10,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 12,
    fontWeight: "600",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  topOverlay: {
    width: "100%",
    height: (height - BOX_SIZE) / 2,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  bottomOverlay: {
    width: "100%",
    height: (height - BOX_SIZE) / 2,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  middleRow: {
    flexDirection: "row",
  },

  sideOverlay: {
    width: (width - BOX_SIZE) / 2,
    height: BOX_SIZE,
    backgroundColor: "rgba(0,0,0,0.65)",
  },

  scanBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderWidth: 3,
    borderColor: "#22c55e", // green border like your image
    backgroundColor: "transparent",
  },

  permissionContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
