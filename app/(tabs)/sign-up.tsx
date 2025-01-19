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

export default function SignUpScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [driversLicense, setDriversLicense] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
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

      {step === 1 && (
        <View style={styles.inputContainer}>
          <Input label="Email" value={email} onChangeText={setEmail} />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <RippleButton title="Next" onPress={() => setStep(2)} />
          <Link href="/">
            Do you have an account already? Click here to sign in
          </Link>
        </View>
      )}

      {step === 2 && (
        <View style={styles.inputContainer}>
          <Input
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <Input
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <Input
            label="Driver's License"
            placeholder="A0000-00000-00000"
            value={driversLicense}
            onChangeText={setDriversLicense}
          />
          <Input
            label="Home Address"
            value={homeAddress}
            onChangeText={setHomeAddress}
          />
          <Input
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <RippleButton title="Sign Up" onPress={() => {}} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    maxWidth: 300,
    gap: 8,
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
