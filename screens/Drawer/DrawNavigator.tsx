import { Platform, StatusBar, Text } from "react-native";
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

  const ANDROID_STATUS_BAR =
    Platform.OS === "android" ? StatusBar.currentHeight ?? 90 : 0;
  const BASE_HEADER_HEIGHT = 60;

  const headerOptions = (title: string) => ({
    // hide default title string so we can render our own Text component
    title: undefined,
    headerTitle: () => (
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: colors.textDrawer,
          textAlign: "center",
          marginTop: Platform.OS === "android" ? ANDROID_STATUS_BAR / 0 : 0,
        }}
      >
        {title}
      </Text>
    ),
    headerTitleAlign: "center" as const,
    headerStyle: {
      backgroundColor: colors.backgroundBottomTab,
      // backgroundColor: 'transparent',
      paddingTop: ANDROID_STATUS_BAR,
      height: BASE_HEADER_HEIGHT + ANDROID_STATUS_BAR,
    },
    headerTintColor: colors.textDrawer,
    gestureEnabled: false,
    headerTitleContainerStyle: {
      paddingTop: Platform.OS === "android" ? 20 : 0,
    },
  });

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
                // backgroundColor: 'transparent',
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
              options={headerOptions(t("capitals"))}
            />
            <Stack.Screen
              name="Flags"
              component={TabNavFlags}
              options={headerOptions(t("flags"))}
            />
            <Stack.Screen
              name="WorldMonuments"
              component={TabNavMonuments}
              options={headerOptions(t("worldMonuments1"))}
            />
            <Stack.Screen
              name="NaturalMonument"
              component={TabNavNaturalMnts}
              options={headerOptions(t("naturalMonuments"))}
            />
            <Stack.Screen
              name="MixedQuestions"
              component={TabNavMixedQsts}
              options={headerOptions(t("mixedQuestions"))}
            />
          </Stack.Navigator>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawNavigator;
