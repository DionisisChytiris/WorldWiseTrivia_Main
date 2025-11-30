import "react-native-gesture-handler";
import React, { useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import * as Updates from "expo-updates";
import { Alert, BackHandler, Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from "expo-av";
import logger from "./utils/logger";

export async function setupAudio() {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: false,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeIOS: InterruptionModeIOS.DoNotMix,
    interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
  });
}

if (!(BackHandler as any).removeEventListener) {
  (BackHandler as any).removeEventListener = () => {};
}

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    setupAudio();
  }, []);

  const setupUserId = async () => {
    try {
      let existingUserId = await AsyncStorage.getItem("user_id");
      if (!existingUserId) {
        const newUserId = uuid.v4();
        await AsyncStorage.setItem("user_id", newUserId);
        logger.info("New user_id created:", newUserId);
      }
    } catch (error) {
      logger.error("Error accessing AsyncStorage:", error);
    }
  };

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(t("update"), t("message1"), [
          { text: t("cancel"), style: "cancel" },
          { text: t("restart"), onPress: () => Updates.reloadAsync() },
        ]);
      }
    } catch (e) {
      logger.error("Error checking for updates:", e);
    }
  };

  useEffect(() => {
    setupUserId();
    checkForUpdates();

    // ✅ Modern BackHandler API
    const backAction = () => {
      Alert.alert("Exit", "Do you want to close the app?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // ✅ Proper cleanup
    return () => subscription.remove();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
