import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { statusEn, statusEs, statusEl } from "../../ReduxSetUp/QuizLngStatus/LngStatus";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logger from "../../utils/logger";
import { AppNavigatorTypeList } from "../../Types/AppNavigatorTypeList";
import { StackNavigationProp } from "@react-navigation/stack";
import actions from "../../utils/DispatchData";

type MultiLanguageProp = StackNavigationProp<AppNavigatorTypeList, "MultiLanguage">;

const MultiLanguage: React.FC = () => {
  const navigation = useNavigation<MultiLanguageProp>();
  const { colors } = useTheme();
  const [color1, setColor1] = useState<string>("#59aef8ff");
  const [color2, setColor2] = useState<string>("#dbdddd");
  const [color3, setColor3] = useState<string>("#dbdddd");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [storedString, setStoredString] = useState<string>("");
  const STRING_KEY = "myStoredString";

  useEffect(() => {
    getData();
  }, []);

  const getData = (): void => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          const user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      logger.error("Error loading user name from AsyncStorage:", e);
    }
  };

  const saveString = async (newString: string): Promise<void> => {
    try {
      setStoredString(newString);
      await AsyncStorage.setItem(STRING_KEY, newString);
      logger.info("String saved:", newString);
    } catch (error) {
      logger.error("Failed to save string to AsyncStorage:", error);
    }
  };

  const setLanguage = (language: "en" | "es" | "el"): void => {
    const colors = {
      en: ["#59aef8ff", "#dbdddd", "#dbdddd"],
      es: ["#dbdddd", "#59aef8ff", "#dbdddd"],
      el: ["#dbdddd", "#dbdddd", "#59aef8ff"],
    };

    const [newColor1, newColor2, newColor3] = colors[language];
    setColor1(newColor1);
    setColor2(newColor2);
    setColor3(newColor3);

    actions[language].forEach((action) => dispatch(action()));
  };

  return (
    <View style={styles.container}>
      <View
        style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}
      >
        <View style={{ width: "33%", height: 3, backgroundColor: "#0099ffff" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#144999" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#144999" }} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.welcomeTxt}>{t("welcome")}</Text>
        <Text
          style={{ color: "#018afe", fontSize: RFValue(9, 450), marginTop: 20 }}
        >
          {t("change-language")}
        </Text>
      </View>
      <View style={{ margin: 30, gap: 10 }}>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color1 }]}
          onPress={() => {
            setLanguage("en");
            saveString("En");
          }}
        >
          <Image
            source={require("../../assets/Flags/uk.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>English</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color2 }]}
          onPress={() => {
            setLanguage("es");
            saveString("Es");
          }}
        >
          <Image
            source={require("../../assets/Flags/spain.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Español</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color3 }]}
          onPress={() => {
            setLanguage("el");
            saveString("El");
          }}
        >
          <Image
            source={require("../../assets/Flags/greece.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Ελληνικά</Text>
        </Pressable>
      </View>
      <View style={styles.skipNextBtn}>
        <Pressable
          onPress={() => navigation.navigate("Draw", { name: name })}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("ChangeTheme")}
          style={styles.button2}
        >
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MultiLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTxt: {
    color: "#0073d4",
    fontSize: RFValue(11, 420),
    fontWeight: "bold",
    letterSpacing: 0,
  },
  chngLgBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
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
    color: "#3b82f6",
  },
  skipNextBtn: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
});

