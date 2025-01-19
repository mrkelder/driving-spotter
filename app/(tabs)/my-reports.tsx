import { useState } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/Input";
import RippleButton from "@/components/RippleButton";
import { Link, useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";
import ReportCard from "@/src/components/ReportCard";
import { Report } from "@/src/interfaces/Report";
import { mockReports } from "@/src/mockData/reports"; // Import mock data
import { createContext, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function MyReportsScreen() {
  const [reports, setReports] = useState<Report[]>(mockReports); // Use mock data
  const router = useRouter();
  const userId = useContext(UserContext).userId; // Use UserContext

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: "100%",
      }}
    >
      <FlatList
        data={reports}
        style={{ width: "100%", height: "80%" }}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => <ReportCard report={item} />}
      />
      <View
        style={{
          padding: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#e28a1d",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => router.push("/report")} // Add onPress event
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 5v14M5 12h14"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}
