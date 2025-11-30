import { View, Text, Pressable, StyleSheet, Image, Switch } from "react-native";
import React, { useState, useEffect } from "react";
import { DrawerContentScrollView, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer, TouchableRipple } from "react-native-paper";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { toggleBoolean } from "../../ReduxSetUp/SoundVibration/VibrationSlice";
import { useAppSelector } from "../../ReduxSetUp/store";
import { toggleSound } from "../../ReduxSetUp/SoundVibration/SoundSlice";
import { useRoute } from "@react-navigation/native";
import actions from "../../utils/DispatchData";
import { styles } from "./DrawerContentStyle";
import logger from "../../utils/logger";

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const boolean = useAppSelector((state) => state.boolean.value);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { dark, colors, setScheme } = useTheme();
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [option, setOption] = useState<string | undefined>();
  const [isVibrating, setIsVibrating] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isbg1, setIsbg1] = useState<string>("transparent");
  const [isbg2, setIsbg2] = useState<string>("transparent");
  const lightMode = require("../../assets/settings/day-mode.png");
  const darkMode = require("../../assets/settings/moon.png");
  const route = useRoute();
  const newName = (route.params as { name?: string })?.name;
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

  const removeData = async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("NameInput" as never);
      setName("");
    } catch (error) {
      logger.error("Error clearing AsyncStorage:", error);
    }
  };

  const setLanguage = (language: "en" | "es" | "el"): void => {
    actions[language].forEach((action) => dispatch(action()));
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}
    >
      <Drawer.Section>
        <TouchableRipple>
          <View style={styles.userTitle}>
            <Text style={[styles.userText, { color: colors.textDrawer }]}>
              {t("hello")} {newName ? newName : "..."}!!!
            </Text>
            <Pressable
              style={{ position: "absolute", right: 20 }}
              onPress={removeData}
            >
              <Feather name="edit" size={16} color="green" />
            </Pressable>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <TouchableRipple>
            <View style={[styles.flowDirectionRow, { marginBottom: 20 }]}>
              <Image
                style={{ width: 28, height: 28 }}
                source={require("../../assets/settings/settings.png")}
              />
              <Text style={[styles.settingText, { color: colors.textDrawer }]}>
                {t("settings")}
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ marginBottom: 40 }}>
              <View style={styles.flowDirectionRow}>
                <MaterialCommunityIcons
                  name="theme-light-dark"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[styles.theme_lngText, { color: colors.textDrawer }]}
                >
                  {t("change-theme")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={dark ? lightMode : darkMode}
                  />
                  <Text style={{ color: colors.textDrawer, fontSize: 13 }}>
                    {dark ? t("lightMode") : t("darkMode")}
                  </Text>
                </View>
                <Switch
                  value={dark}
                  onValueChange={() => {
                    dark ? setScheme("light") : setScheme("dark");
                  }}
                />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ marginBottom: 20 }}>
              <View style={styles.flowDirectionRow}>
                <MaterialIcons
                  name="language"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[styles.theme_lngText, { color: colors.textDrawer }]}
                >
                  {t("change-language")}
                </Text>
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ flexDirection: "row", gap: 20 }}>
              {}
              <Pressable
                onPress={() => {
                  setLanguage("en");
                  setOption("En");
                  saveString("En");
                }}
                style={[
                  styles.lngBtn,
                  {
                    backgroundColor:
                      option == "En" ? colors.bgLngBtn1 : colors.bgLngBtn,
                  },
                ]}
              >
                <Image
                  source={require("../../assets/Flags/uk.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
              </Pressable>

              {}
              <Pressable
                onPress={() => {
                  setOption("Es");
                  setLanguage("es");
                  saveString("Es");
                }}
                style={[
                  styles.lngBtn,
                  {
                    backgroundColor:
                      option == "Es" ? colors.bgLngBtn1 : colors.bgLngBtn,
                  },
                ]}
              >
                <Image
                  source={require("../../assets/Flags/spain.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
              </Pressable>

              {}
              <Pressable
                onPress={() => {
                  setLanguage("el");
                  setOption("El");
                  saveString("El");
                }}
                style={[
                  styles.lngBtn,
                  {
                    backgroundColor:
                      option == "El" ? colors.bgLngBtn1 : colors.bgLngBtn,
                  },
                ]}
              >
                <Image
                  source={require("../../assets/Flags/greece.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
              </Pressable>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View style={{ marginTop: 60 }}>
              <View style={styles.flowDirectionRow}>
                <MaterialIcons
                  name="apps"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[styles.theme_lngText, { color: colors.textDrawer }]}
                >
                  {t("more")}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {isPlaying ? (
                    <View>
                      <Feather
                        name="volume-2"
                        size={24}
                        color={colors.textDrawer}
                      />
                    </View>
                  ) : (
                    <View>
                      <MaterialIcons
                        name="volume-off"
                        size={24}
                        color={colors.textDrawer}
                      />
                    </View>
                  )}
                  <Text style={{ color: colors.textDrawer }}>{t("sound")}</Text>
                </View>
                <Switch
                  value={isPlaying}
                  onValueChange={() => {
                    setIsPlaying(!isPlaying);
                    dispatch(toggleSound());
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  {!isVibrating ? (
                    <View>
                      <MaterialCommunityIcons
                        name="vibrate-off"
                        size={24}
                        color={colors.textDrawer}
                      />
                    </View>
                  ) : (
                    <View>
                      <MaterialCommunityIcons
                        name="vibrate"
                        size={24}
                        color={colors.textDrawer}
                      />
                    </View>
                  )}
                  <Text style={{ color: colors.textDrawer }}>
                    {t("vibration")}
                  </Text>
                </View>
                <Switch
                  value={isVibrating}
                  onValueChange={() => {
                    setIsVibrating(!isVibrating);
                    dispatch(toggleBoolean());
                  }}
                />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <View>
              <View style={[styles.flowDirectionRow, { marginTop: 50 }]}>
                <MaterialIcons
                  name="message"
                  size={22}
                  color={colors.textDrawer}
                />
                <Text
                  style={[
                    styles.theme_lngText,
                    { color: colors.textDrawer, paddingBottom: 5 },
                  ]}
                >
                  {t("contact")}
                </Text>
              </View>
              <Pressable
                onPress={() => navigation.navigate("Contact" as never)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: 10,
                  paddingVertical: 20,
                  marginTop: -20,
                }}
              >
                <Text style={{ color: colors.textDrawer }}>
                  {t("sendMessage")}
                </Text>
                <Feather
                  name="arrow-right"
                  size={20}
                  color={colors.textDrawer}
                />
              </Pressable>
            </View>
          </TouchableRipple>
          <TouchableRipple>
            <Pressable
              onPress={() => navigation.navigate("AiAgent" as never)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: 10,
                paddingVertical: 20,
                marginTop: 0,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="robot" size={26} color="purple" />
                <Text style={{ color: colors.textDrawer }}>Geography Ai</Text>
              </View>
              <Feather name="arrow-right" size={20} color={colors.textDrawer} />
            </Pressable>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

