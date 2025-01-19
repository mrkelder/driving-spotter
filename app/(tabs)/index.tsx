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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // Added state for email
  const [shouldDisplayError, setShouldDisplayError] = useState(false); // Added state for error display
  const router = useRouter();

  const sendLoginRequest = async () => {
    // Send the login request here
    const response = await fetch(
      "https://bb96-137-122-64-210.ngrok-free.app/api/v1/user/list",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    const {
      data: { users },
    } = (await response.json()) as {
      data: { users: { email: string; password: string }[] };
    };

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      router.push("/my-reports");
    } else {
      setShouldDisplayError(true);
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
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />

      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Parking Spotter</Text>

      <View style={styles.inputContainer}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail} // Added email input
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword} // Added password input
          secureTextEntry // To hide the password
        />
      </View>

      <RippleButton title="Sign In" onPress={sendLoginRequest} />
      {shouldDisplayError && (
        <Text style={{ color: "red", marginTop: 8 }}>
          Invalid email or password. Please try again.
        </Text>
      )}
      <Link
        style={{
          color: "blue",
          textDecorationLine: "underline",
          fontSize: 18,
          textAlign: "center",
        }}
        href="/sign-up"
      >
        Don't have an account? Register here
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
