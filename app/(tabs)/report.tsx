import { useEffect, useState } from "react";
import { StyleSheet, Platform, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/Input";
import RippleButton from "@/components/RippleButton";
import { Link, useRouter } from "expo-router";
import * as Location from "expo-location";

export default function ReportScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [locationAddress, setLocationAddress] = useState<string>("");

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  useEffect(() => {
    async function fetchReports() {
      let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&format=json`
      );

      const jsonResponse = (await response.json()) as {
        address: {
          road: string;
          city: string;
          state: string;
          postcode: string;
        };
      };

      setLocationAddress(
        `${jsonResponse.address.road}, ${jsonResponse.address.city}, ${jsonResponse.address.state}, ${jsonResponse.address.postcode}`
      );
    }
    if (location) fetchReports();
  }, [location]);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: "100%",
        padding: 8,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        Your location is {locationAddress}
      </Text>
    </View>
  );
}
