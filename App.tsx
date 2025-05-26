import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import Splash from "./Splash";
import * as Updates from "expo-updates";
import { Linking, Alert, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const setupUserId = async () => {
  try {
    let existingUserId = await AsyncStorage.getItem("user_id");

    if (!existingUserId) {
      const newUserId = uuid.v4(); // Generates UUID
      await AsyncStorage.setItem("user_id", newUserId);
      existingUserId = newUserId;
      console.log("New user_id created and stored:", newUserId);
    } else {
      console.log("Retrieved existing user_id:", existingUserId);
    }

    // Alert.alert("User ID", existingUserId ?? "No ID");
  } catch (error) {
    console.error("Error accessing AsyncStorage:", error);
    // Alert.alert("Storage Error", error.message);
  }
};

  // used for minus changesget
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(t("update"), t("message1"), [
          { text: t("cancel"), style: "cancel" },
          {
            text: t("restart"),
            onPress: () => Updates.reloadAsync(),
          },
        ]);
      }
    } catch (e) {
      console.log("Error checking for updates:", e);
    }
  };

  useEffect(() => {
    setupUserId();
    checkForUpdates();
  }, []);

  // used only when create a new build
  // const checkVersion = async () => {
  //   const appStoreLink =
  //     Platform.OS === "ios"
  //       ? "itms-apps://itunes.apple.com/us/app/6670754535"
  //       : "market://details?id=com.worldwisetrivia.app";

  //   Alert.alert(
  //     t("update"),
  //     t("message2"),
  //     [
  //       { text: t("cancel"), style: "cancel" },
  //       {
  //         text: t("restart"),
  //         onPress: () => Linking.openURL(appStoreLink),
  //       },
  //     ]
  //   );
  // };
  // useEffect(() => {
  //   checkVersion();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider>
          {/* {isLoading ? <Splash setIsLoading={setIsLoading} /> : <AppNavigator />} */}
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
