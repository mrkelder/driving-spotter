import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Button,
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
import * as Location from "expo-location";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomPicker from "@/components/CustomPicker";

export default function ReportScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [locationAddress, setLocationAddress] = useState("loading...");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef1 = useRef<CameraView | null>(null);
  const cameraRef2 = useRef<CameraView | null>(null);
  const [photo, setNumberPlatesPhoto] = useState("");
  const [step, setStep] = useState(1);
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [violation, setViolation] = useState("");
  const [description, setDescription] = useState("");

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
    requestPermission();
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

  const handleTakePhoto1 = async () => {
    if (cameraRef1.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef1.current.takePictureAsync(options);
      setPhoto1(takedPhoto?.base64 ?? "");
      setStep(step + 1);
    }
  };

  const handleTakePhoto2 = async () => {
    if (cameraRef2.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef2.current.takePictureAsync(options);
      setPhoto2(takedPhoto?.base64 ?? "");
      setStep(step + 1);
    }
  };

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
      {step === 1 && permission?.granted && (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Please take a photo of the number plates
          </Text>
          <CameraView style={{ width: 300, height: 300 }} ref={cameraRef1}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleTakePhoto1}
              >
                <AntDesign name="camera" size={44} color="black" />
              </TouchableOpacity>
            </View>
          </CameraView>
        </>
      )}

      {step === 2 && permission?.granted && (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Please take a photo of the violation
          </Text>
          <CameraView style={{ width: 300, height: 300 }} ref={cameraRef2}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleTakePhoto2}
              >
                <AntDesign name="camera" size={44} color="black" />
              </TouchableOpacity>
            </View>
          </CameraView>
        </>
      )}

      {step === 3 && (
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Your location is {locationAddress}
          </Text>
          <CustomPicker
            label="Violation"
            selectedValue={violation}
            onValueChange={setViolation}
            options={[
              {
                label: "Inappropriate Parking",
                value: "inappropriate_parking",
              },
              { label: "Dangerous Behavior", value: "dangerous_behavior" },
              { label: "Aggressive Driving", value: "aggressive_driving" },
            ]}
          />
          <Input
            label="Description"
            value={description}
            onChangeText={setDescription}
          />
          <RippleButton title="Submit Report" onPress={() => {}} />
        </View>
      )}

      {!permission?.granted && (
        <RippleButton
          title="Please grant the permission to use camera"
          onPress={requestPermission}
        ></RippleButton>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    width: "80%",
    maxWidth: 300,
    gap: 8,
  },
});
