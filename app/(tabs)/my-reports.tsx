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

export default function MyReportsScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Added state for email
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      userId: 1,
      violationDescription: "Parking in a no parking zone",
      location: "1234 Elm St",
      datetime: "2021-09-01T12:00:00",
      licensePlate:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.5081756.1554232591!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_780%2Fontario-licence-plate.jpg&f=1&nofb=1&ipt=64c544774b00759a5a2c8e0d729f2c8edbe12a98cbe76e2d2cbcc69825c33289&ipo=images",
      evidenceImg:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.huffpost.com%2Fgen%2F1478707%2Fimages%2Fo-PARKING-FAIL-facebook.jpg&f=1&nofb=1&ipt=d04a4c0448a4c56480a541151526b3c441cf29ec8bccfb5e3c2666ce7d6dadf9&ipo=images",
      licensePlateText: "CASZ203",
    },
  ]);
  const router = useRouter();

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
      <ScrollView style={{ width: "100%", height: "80%" }}>
        <FlatList
          data={reports}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => <ReportCard report={item} />}
        />
      </ScrollView>
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
