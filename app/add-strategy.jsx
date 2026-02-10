import { Stack } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Hamberger from "../components/Hamberger";

export default function AddStrategyScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Add Strategy", headerShown: false }} />
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* HEADER */}
          <Hamberger title="Add Strategy"/>

          {/* MAIN CARD */}
          <View style={styles.card}>
            {/* ENTER STRATEGY */}
            <Text style={styles.sectionTitle}>Enter Strategy</Text>
            <TextInput
              placeholder="Strategy"
              placeholderTextColor="#8b93a1"
              style={styles.input}
            />
            <View style={styles.divider} />

            {/* CHECKLIST */}
            <Text style={[styles.sectionTitle, { marginTop: 26 }]}>
              Add Checklist Item
            </Text>
            <TextInput
              placeholder="Checklist Item"
              placeholderTextColor="#8b93a1"
              style={styles.input}
            />
            <View style={styles.divider} />

            {/* ADD RULE */}
            <TouchableOpacity style={styles.addRuleBtn}>
              <Text style={styles.addRuleText}>Add Rule +</Text>
            </TouchableOpacity>

            {/* SAVE STRATEGY */}
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveText}>Save Strategy</Text>
            </TouchableOpacity>

            {/* EDIT DELETE */}
            <TouchableOpacity style={styles.deleteBtn}>
              <Text style={styles.deleteText}>Edit / Delete →</Text>
            </TouchableOpacity>
          </View>

          {/* ACTIVE STRATEGIES */}
          <Text style={styles.activeTitle}>Active Strategies</Text>
          <View style={styles.activeItem}>
            <Text style={styles.activeText}>drygg</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#07121d",
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    backgroundColor: "#07121d",
  },

  /* Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 12,
  },

  /* Card */
  card: {
    backgroundColor: "#2b3a4a",
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 14,
  },

  input: {
    color: "#ffffff",
    fontSize: 18,
    paddingVertical: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
  },

  /* Buttons */
  addRuleBtn: {
    backgroundColor: "#1196ff",
    alignSelf: "flex-start",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 22,
  },
  addRuleText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },

  saveBtn: {
    backgroundColor: "#ffca28",
    paddingVertical: 16,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 30,
  },
  saveText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },

  deleteBtn: {
    backgroundColor: "#e12b2b",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 22,
  },
  deleteText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
  },

  /* Active Strategies */
  activeTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "600",
    marginTop: 26,
    marginBottom: 10,
  },
  activeItem: {
    backgroundColor: "#2b3a4a",
    borderRadius: 10,
    padding: 16,
  },
  activeText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
