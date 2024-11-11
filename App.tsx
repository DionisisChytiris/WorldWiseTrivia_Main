import React, { useState, useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import Splash from "./Splash";
import * as Updates from "expo-updates";
import { Linking, Alert, Platform } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        Alert.alert(
          "Διαθέσιμη Ενημέρωση",
          "Μια νέα έκδοση της εφαρμογής είναι διαθέσιμη. Παρακαλούμε επανεκκινήστε την εφαρμογή για να ενημερωθεί.",
          [
            { text: "Ακύρωση", style: "cancel" },
            {
              text: "Επανεκκίνηση",
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

  const checkVersion = async () => {
    // const appStoreLink = "market://details?id=com.greekgeographyquizapp.dion";

    // const appStoreLink = Platform.OS === 'ios'
    //   ? 'itms-apps://itunes.apple.com/us/app/apple-store-id'   replace with your app's ID
    //   : 'market://details?id=com.greekgeographyquizapp.dion';  replace with your package name

    const appStoreLink =
      Platform.OS === "ios"
        ? "itms-apps://itunes.apple.com/us/app/6670754535"
        : "market://details?id=com.worldwisetrivia.app";

    Alert.alert(
      "Διαθέσιμη Ενημέρωση",
      "Παρακαλούμε ενημερώστε την εφαρμογή στην τελευταία έκδοση.",
      [
        { text: "Ακύρωση", style: "cancel" },
        {
          text: "Ενημέρωση",
          onPress: () => Linking.openURL(appStoreLink),
        },
      ]
    );
  };
  useEffect(() => {
    checkVersion();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        {isLoading ? <Splash setIsLoading={setIsLoading} /> : <AppNavigator />}
      </ThemeProvider>
    </Provider>
  );
}
