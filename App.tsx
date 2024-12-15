import React, { useState, useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import Splash from "./Splash";
import * as Updates from "expo-updates";
import { Linking, Alert, Platform } from "react-native";
import { useTranslation } from "react-i18next";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  // used for minus changes
  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          t("update"),
          t("message1"),
          [
            { text: t("cancel"), style: "cancel" },
            {
              text: t("restart"),
              onPress: () => Updates.reloadAsync(),
            },
          ]
        );
      }
    } catch (e) {
      console.log("Error checking for updates:", e);
    }
  };

  useEffect(() => {
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
    <Provider store={store}>
      <ThemeProvider>
        {/* {isLoading ? <Splash setIsLoading={setIsLoading} /> : <AppNavigator />} */}
         <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
