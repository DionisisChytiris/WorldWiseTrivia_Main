// import "react-native-gesture-handler";
// import React, { useState, useEffect } from "react";
// import AppNavigator from "./AppNavigator";
// import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
// import { store } from "./ReduxSetUp/store";
// import { Provider } from "react-redux";
// import Splash from "./utils/Splash";
// import * as Updates from "expo-updates";
// import { Linking, Alert, Platform, BackHandler } from "react-native";
// import { useTranslation } from "react-i18next";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import uuid from "react-native-uuid";

// // ✅ HOTFIX: Prevent crashes caused by outdated BackHandler usage in dependencies
// // if (!BackHandler.removeEventListener) {
// //   BackHandler.removeEventListener = () => {}; // no-op fallback
// // }

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const { t } = useTranslation();

//   const setupUserId = async () => {
//     try {
//       let existingUserId = await AsyncStorage.getItem("user_id");

//       if (!existingUserId) {
//         const newUserId = uuid.v4(); // Generates UUID
//         await AsyncStorage.setItem("user_id", newUserId);
//         existingUserId = newUserId;
//         console.log("New user_id created and stored:", newUserId);
//       } else {
//         console.log("Retrieved existing user_id:", existingUserId);
//       }

//       // Alert.alert("User ID", existingUserId ?? "No ID");
//     } catch (error) {
//       console.error("Error accessing AsyncStorage:", error);
//       // Alert.alert("Storage Error", error.message);
//     }
//   };

//   // used for minus changesget
//   const checkForUpdates = async () => {
//     try {
//       const update = await Updates.checkForUpdateAsync();
//       if (update.isAvailable) {
//         await Updates.fetchUpdateAsync();
//         Alert.alert(t("update"), t("message1"), [
//           { text: t("cancel"), style: "cancel" },
//           {
//             text: t("restart"),
//             onPress: () => Updates.reloadAsync(),
//           },
//         ]);
//       }
//     } catch (e) {
//       console.log("Error checking for updates:", e);
//     }
//   };

//    if (!BackHandler.removeEventListener) {
//   BackHandler.removeEventListener = () => {}; 
// }
  
//   useEffect(() => {
//     setupUserId();
//     checkForUpdates();
//   }, []);


//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Provider store={store}>
//         <ThemeProvider>
//           <AppNavigator />
//         </ThemeProvider>
//       </Provider>
//     </GestureHandlerRootView>
//   );
// }

import "react-native-gesture-handler";
import React, { useEffect } from "react";
import AppNavigator from "./AppNavigator";
import { ThemeProvider } from "./utils/ThemeMode/ThemeProvider";
import { store } from "./ReduxSetUp/store";
import { Provider } from "react-redux";
import * as Updates from "expo-updates";
import { Alert, BackHandler } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { useTranslation } from "react-i18next";

if (!BackHandler.removeEventListener) {
  BackHandler.removeEventListener = () => {};
}

export default function App() {
  const { t } = useTranslation();

  const setupUserId = async () => {
    try {
      let existingUserId = await AsyncStorage.getItem("user_id");
      if (!existingUserId) {
        const newUserId = uuid.v4();
        await AsyncStorage.setItem("user_id", newUserId);
        console.log("New user_id created:", newUserId);
      }
    } catch (error) {
      console.error("Error accessing AsyncStorage:", error);
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
      console.log("Error checking for updates:", e);
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
