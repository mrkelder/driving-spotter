import { useState } from "react";
import { StyleSheet, Platform, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Input from "@/components/Input";
import RippleButton from "@/components/RippleButton";
import { Link, useRouter } from "expo-router";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState(""); // Added state for first name
  const [lastName, setLastName] = useState(""); // Added state for last name
  const [driversLicense, setDriversLicense] = useState(""); // Added state for driver's license
  const [homeAddress, setHomeAddress] = useState(""); // Added state for home address
  const [phoneNumber, setPhoneNumber] = useState(""); // Added state for phone number
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
      <Image
        source="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
        style={{ width: 200, height: 120, resizeMode: "contain" }}
      />

      <View style={styles.inputContainer}>
        <Input
          label="First Name"
          value={firstName}
          onChangeText={setFirstName} // Added first name input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Last Name"
          value={lastName}
          onChangeText={setLastName} // Added last name input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Driver's License"
          value={driversLicense}
          onChangeText={setDriversLicense} // Added driver's license input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Home Address"
          value={homeAddress}
          onChangeText={setHomeAddress} // Added home address input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber} // Added phone number input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input label="Email" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <RippleButton title="Sign In" onPress={() => {}} />
      <Link style={{ marginTop: 24 }} href="/">
        Do you have an account already? Click here to sign in
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    maxWidth: 300,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
