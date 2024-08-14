import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, Text, Platform } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
// import { TopTabFlagNavigator } from "./TopTabFlags/topTabFlagNavigator";
import MixedQstsQuizHome from "./MixedQstsQuizHome";
import Settings from "../Settings";
import ChooseQuizType from "./ChooseQuizType";
import { MixedLoseScr1, MixedLoseScr10, MixedLoseScr2, MixedLoseScr3, MixedLoseScr4, MixedLoseScr5, MixedLoseScr6, MixedLoseScr7, MixedLoseScr8, MixedLoseScr9, MixedRes1, MixedRes10, MixedRes2, MixedRes3, MixedRes4, MixedRes5, MixedRes6, MixedRes7, MixedRes8, MixedRes9, Quiz1, Quiz10, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8, Quiz9 } from "./Quizzes";




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavMixedQsts= ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundBottomTab,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: colors.backgroundBottomTab,
          height: Platform.OS == "ios" ? 90 : 70,
          paddingBottom: Platform.OS == "ios" ? 30 : 10,
        },
      }}
    >
      <Tab.Screen
        name="MixedQuizHome"
        options={{
          headerShown: false,
          tabBarLabel: t("Quizzes"),
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, marginTop: 12 }}
              source={require("../../../assets/settings/apps.png")}
            />
          ),
        }}
      >
        {() => (
          // <Stack.Navigator initialRouteName="MixedQstsHome">
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="ChooseQuizTypeMixed" component={ChooseQuizType} />
              <Stack.Screen name="MixedQstsHome" component={MixedQstsQuizHome} />
              <Stack.Screen name="Quiz1" component={Quiz1} />
              <Stack.Screen name="Quiz2" component={Quiz2} />
              <Stack.Screen name="Quiz3" component={Quiz3} />
              <Stack.Screen name="Quiz4" component={Quiz4} />
              <Stack.Screen name="Quiz5" component={Quiz5} />
              <Stack.Screen name="Quiz6" component={Quiz6} />
              <Stack.Screen name="Quiz7" component={Quiz7} />
              <Stack.Screen name="Quiz8" component={Quiz8} />
              <Stack.Screen name="Quiz9" component={Quiz9} />
              <Stack.Screen name="Quiz10" component={Quiz10} />
              <Stack.Screen name="MixedLoseScr1" component={MixedLoseScr1} />
              <Stack.Screen name="MixedLoseScr2" component={MixedLoseScr2} />
              <Stack.Screen name="MixedLoseScr3" component={MixedLoseScr3} />
              <Stack.Screen name="MixedLoseScr4" component={MixedLoseScr4} />
              <Stack.Screen name="MixedLoseScr5" component={MixedLoseScr5} />
              <Stack.Screen name="MixedLoseScr6" component={MixedLoseScr6} />
              <Stack.Screen name="MixedLoseScr7" component={MixedLoseScr7} />
              <Stack.Screen name="MixedLoseScr8" component={MixedLoseScr8} />
              <Stack.Screen name="MixedLoseScr9" component={MixedLoseScr9} />
              <Stack.Screen name="MixedLoseScr10" component={MixedLoseScr10} />
              <Stack.Screen name="MixedRes1" component={MixedRes1} />
              <Stack.Screen name="MixedRes2" component={MixedRes2} />
              <Stack.Screen name="MixedRes3" component={MixedRes3} />
              <Stack.Screen name="MixedRes4" component={MixedRes4} />
              <Stack.Screen name="MixedRes5" component={MixedRes5} />
              <Stack.Screen name="MixedRes6" component={MixedRes6} />
              <Stack.Screen name="MixedRes7" component={MixedRes7} />
              <Stack.Screen name="MixedRes8" component={MixedRes8} />
              <Stack.Screen name="MixedRes9" component={MixedRes9} />
              <Stack.Screen name="MixedRes10" component={MixedRes10} />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Open"
        options={{
          headerShown: false,
          tabBarButton: () => (
            <Pressable
              title=" "
              onPress={() => navigation.openDrawer()}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                width: "25%",
                marginTop: 12,
              }}
            >
              <Image
                style={{ width: 35, height: 35, marginBottom: -2 }}
                source={require("../../../assets/settings/settings.png")}
              />
              <Text style={{ fontSize: 10, color: "gray" }}>
                {t("settings")}
              </Text>
            </Pressable>
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavMixedQsts;
