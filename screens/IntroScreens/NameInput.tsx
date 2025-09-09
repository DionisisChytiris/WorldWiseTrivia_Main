import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import { useAppDispatch } from "../../ReduxSetUp/store";
import { setNameInput } from "../../ReduxSetUp/SetUserName/setUserNameSlice";

const formatName = (input: string) => {
  if (!input) return "User";
  let clean = input.trim();
  if (clean.slice(-1) === "ς" || clean.slice(-1) === "Σ") {
    clean = clean.slice(0, -1);
  }
  return clean[0].toUpperCase() + clean.slice(1);
};

const NameInput = ({ navigation }) => {
  const [name, setName] = useState("");
  const { t } = useTranslation();
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  const storeData = async () => {
    try {
      const userName = formatName(name);
      const user = { Name: userName };

      await AsyncStorage.setItem("UserName", JSON.stringify(user));
      dispatch(setNameInput(userName));

      navigation.navigate("Draw", { name: userName });
      setName(""); // clear input for next time
    } catch (e) {
      console.error("Error saving name:", e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("UserName");
      if (value) {
        const user = JSON.parse(value);
        setName(user.Name);
        dispatch(setNameInput(user.Name)); // keep Redux in sync
      }
    } catch (e) {
      console.error("Error reading name:", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}>
      {/* Progress bar */}
      <View style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}>
        <View style={{ flex: 1, height: 3, backgroundColor: "#046e64" }} />
        <View style={{ flex: 1, height: 3, backgroundColor: "#046e64" }} />
        <View style={{ flex: 1, height: 3, backgroundColor: "#3ff769" }} />
      </View>

      {/* Title + Input */}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.label}>{t("Enter your Name")}</Text>
        <TextInput
          placeholder={t("Enter your Name") + "..."}
          style={styles.textInputS}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsRow}>
        <Pressable
          onPress={() => {
            const userName = formatName(name);
            dispatch(setNameInput(userName));
            navigation.navigate("Draw", { name: userName });
          }}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>

        <Pressable onPress={storeData} style={styles.button2}>
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#0073d4",
    fontSize: RFValue(11, 420),
    fontWeight: "bold",
  },
  textInputS: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e0e9e9",
    textAlign: "center",
  },
  buttonsRow: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
  button1: {
    width: "28%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  button2: {
    width: "40%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  title: {
    fontSize: RFValue(9, 450),
    fontWeight: "bold",
    color: "#0cb41f",
  },
});
