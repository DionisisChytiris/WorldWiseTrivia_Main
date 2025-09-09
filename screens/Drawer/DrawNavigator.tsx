import { Platform, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from "../QuizScreen";
import DrawerContent from "./DrawerContent";
import TabNavCapitals from "../BottomTabs/CapitalsTab/TabNavCapitals";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import TabNavFlags from "../BottomTabs/FlagsTab/TabNavFlags";
import React from "react";
// import TabNavAnimals from "../BottomTabs/AnimalsTab/TabNavAnimals";
import TabNavMixedQsts from "../BottomTabs/MixedQuestionsTab/TabNavMixedQsts";
import TabNavMonuments from "../BottomTabs/WorldMonuments/TabNavMonuments";
import TabNavNaturalMnts from "../BottomTabs/NaturalMntTab/TabNavNaturalMnts";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawNavigator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  // const [show, setShow] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 3000);
  // }, []);

  return (
    <Drawer.Navigator
      id={undefined}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Drawer" options={{ headerShown: false }}>
        {() => (
          <Stack.Navigator
            id={undefined}
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.backgroundBottomTab,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                color: colors.textDrawer,
              },
              orientation: "portrait",
            }}
          >
            {/* <Stack.Screen name="Hello" component={Hello} /> */}
            <Stack.Screen
              name="Home"
              component={QuizScreen}
              options={{
                title: "",
                // title: t("welcome"),
               
                headerShown: true,
                headerStyle: {
                  backgroundColor: colors.backgroundBottomTab,
                },
                headerTintColor: colors.textDrawer,
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 14,
                },
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Capitals"
              component={TabNavCapitals}
              options={{
                title: t("capitals"),
                
                headerShown: true,
                // gestureEnabled: true,
                // headerBackVisible: true,
                gestureEnabled: false,
                headerTitleStyle: { fontSize: 16, fontWeight: "bold" },
                headerTintColor: colors.textDrawer,
              }}
            />
            <Stack.Screen
              name="Flags"
              component={TabNavFlags}
              options={{
                title: t("flags"),
                headerShown: true,
                gestureEnabled: false,
                headerTitleStyle: { fontSize: 16, fontWeight: "bold" },
                headerTintColor: colors.textDrawer,
              }}
            />
            <Stack.Screen
              name="WorldMonuments"
              component={TabNavMonuments}
              options={{
                title: t("worldMonuments1"),
                headerShown: true,
                gestureEnabled: false,
                headerTitleStyle: { fontSize: 16, fontWeight: "bold" },
                headerTintColor: colors.textDrawer,
              }}
            />
            <Stack.Screen
              name="NaturalMonument"
              component={TabNavNaturalMnts}
              options={{
                title: t("naturalMonuments"),
                headerShown: true,
                gestureEnabled: false,
                headerTitleStyle: { fontSize: 16, fontWeight: "bold" },
                headerTintColor: colors.textDrawer,
              }}
            />
            <Stack.Screen
              name="MixedQuestions"
              component={TabNavMixedQsts}
              options={{
                title: t("mixedQuestions"),
                headerShown: true,
                gestureEnabled: false,
                headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
                headerTintColor: colors.textDrawer,
              }}
            />
          </Stack.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
