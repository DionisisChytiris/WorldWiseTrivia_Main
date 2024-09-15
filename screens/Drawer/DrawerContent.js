import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, TouchableRipple } from "react-native-paper";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { toggleBoolean } from "../../ReduxSetUp/SoundVibration/VibrationSlice.tsx";
import { useAppSelector } from "../../ReduxSetUp/store";
import { toggleSound } from "../../ReduxSetUp/SoundVibration/SoundSlice";
import { useRoute } from "@react-navigation/native";
import actions from '../../utils/DispatchData'
// import { statusActive, statusCancel, toggleValue } from "../../ReduxSetUp/SoundVibration/VibrationSlice.tsx";

const DrawerContent = (props) => {
  const boolean = useAppSelector((state) => state.boolean.value);
  // const { initStatus } = useAppSelector((state) => state.vibrationActive);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { dark, colors, setScheme } = useTheme();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [option, setOption] = useState();
  const [isVibrating, setIsVibrating] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isbg1, setIsbg1] = useState("transparent");
  const [isbg2, setIsbg2] = useState("transparent");
  const lightMode = require("../../assets/settings/day-mode.png");
  const darkMode = require("../../assets/settings/moon.png");
  const route = useRoute();
  const newName = route.params.name
  const [storedString, setStoredString] = useState(''); // Initial state
  const STRING_KEY = 'myStoredString'; // Key for AsyncStorage

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const saveString = async (newString) => {
    try {
      setStoredString(newString); // Update the state
      await AsyncStorage.setItem(STRING_KEY, newString); // Save the new string to AsyncStorage
      console.log('String saved:', newString);
    } catch (error) {
      console.error('Failed to save string to AsyncStorage:', error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("NameInput");
      setName('');
    } catch (error) {
      console.log(error);
    }
  };
  
  const setLanguage = (language) => {
    actions[language].forEach(action => dispatch(action()));
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}
    >
      <Drawer.Section>
        <TouchableRipple>
          <View style={styles.userTitle}>
            <Text style={[styles.userText, { color: colors.textDrawer }]}>
              {t("hello")} {newName ? newName : '...' }!!!
            </Text>
            <Pressable
              style={{ position: "absolute", right: 20 }}
              onPress={removeData}
            >
              <Text style={{ fontSize: 12, color: colors.textDrawer }}>
                Edit
              </Text>
            </Pressable>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <DrawerContentScrollView {...props}>
        <Drawer.Section>
          <TouchableRipple>
            <View style={[styles.flowDirectionRow, { marginBottom: 50 }]}>
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
            <View style={{ marginBottom: 70 }}>
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
              <Pressable
                onPress={() => {
                  dark ? setScheme("light") : setScheme("dark");
                }}
                style={[
                  styles.changeTheme,
                  { backgroundColor: colors.buttonDrawerBackground },
                ]}
              >
                <View style={styles.flowDirectionRow}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={dark ? lightMode : darkMode}
                  />
                  <Text style={{ color: colors.textDrawer, fontSize: 13 }}>
                    {dark ? t("lightMode") : t("darkMode")}
                  </Text>
                </View>
              </Pressable>
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
            <View>
              {/* English */}
              <Pressable
                onPress={() => {
                  // i18next.changeLanguage(Object.keys(languageResources)[0]);
                  // English();
                  setLanguage('en')
                  setOption("En");
                  saveString('En')
                }}
                style={[
                  styles.lngBtn,
                  {
                    backgroundColor:
                      option == "En" ? colors.bgLngBtn1 : colors.bgLngBtn
                  },
                ]}
              >
                <Image
                  source={require("../../assets/Flags/uk.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
                <Text style={{ color: colors.textDrawer }}>English</Text>
              </Pressable>

              {/* Spanish */}
              <Pressable
                onPress={() => {
                  // i18next.changeLanguage(Object.keys(languageResources)[1]);
                  // Spanish();
                  setOption("Es");
                  setLanguage('es')
                  saveString('Es')
                }}
                style={[
                  styles.lngBtn,
                  {
                    backgroundColor:
                      option == "Es" ? colors.bgLngBtn1 : colors.bgLngBtn
                  },
                ]}
              >
                <Image
                  source={require("../../assets/Flags/spain.png")}
                  style={{ width: 22, height: 15, borderRadius: 3 }}
                />
                <Text style={{ color: colors.textDrawer }}>Español</Text>
              </Pressable>

              {/* Greek */}
              <Pressable
                onPress={() => {
                  // i18next.changeLanguage(Object.keys(languageResources)[2]);
                  // Greek();
                  setLanguage('el')
                  setOption("El");
                  saveString('El')
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
                <Text style={{ color: colors.textDrawer }}>Ελληνικά</Text>
              </Pressable>

              <View style={styles.soundVibration}>
                <Pressable
                  onPressIn={() => setIsbg1("lightgray")}
                  onPressOut={() => {
                    setIsPlaying(!isPlaying),
                      dispatch(toggleSound()),
                      setIsbg1("transparent");
                  }}
                  style={{
                    backgroundColor: isbg1,
                    width: "50%",
                    paddingVertical: 20,
                    paddingLeft: 10,
                    borderRadius: 20,
                  }}
                >
                  {isPlaying ? (
                    <View>
                      <Feather name="volume-2" size={24} color={colors.textDrawer} />
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
                </Pressable>
                <Pressable
                  onPressIn={() => setIsbg2(() => setIsbg2("lightgray"))}
                  onPressOut={() => {
                    setIsVibrating(!isVibrating);
                    dispatch(toggleBoolean());
                    setIsbg2(() => setIsbg2("transparent"));
                  }}
                  style={{
                    backgroundColor: isbg2,
                    width: "50%",
                    paddingVertical: 20,
                    alignItems: "flex-end",
                    paddingRight: 20,
                    borderRadius: 20,
                  }}
                >
                  {isVibrating ? (
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
                </Pressable>
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingLeft: 20,
  },
  userTitle: {
    marginTop: 60,
    flexDirection: "row",
    gap: 50,
    alignItems: "center",
  },
  userText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  theme_lngText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  // Change Theme Button
  changeTheme: {
    width: 180,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  // Change Language Button
  lngBtn: {
    flexDirection: "row",
    gap: 10,
    width: 180,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#e8e8e8",
  },
  flowDirectionRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 5,
    alignItems: "center",
  },
  // Change sound-vibrarion Button
  soundVibration: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 0,
    marginRight: 20,
  },
});
