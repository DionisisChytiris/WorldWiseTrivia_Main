import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, Text, Platform } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import { TopTabFlagNavigator } from "./TopTabFlags/topTabFlagNavigator";
import FlagsQuizHome from "./FlagsQuizHome";
import Settings from "../Settings";
import {
  Quiz1,
  Quiz2,
  Quiz3,
  Quiz4,
  Quiz5,
  Quiz6,
  Quiz7,
  Quiz8,
  Quiz9,
  Quiz10,
  Results1,
  Results2,
  Results3,
  Results4,
  Results5,
  Results6,
  Results7,
  Results8,
  Results9,
  Results10,
} from "./Quizzes";
import LoseScreen from "./Quizzes/LoseScreen/LoseScreen";
import Return from "./WTEST/Return";
import ChooseQuizType from "./ChooseQuizType";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavFlags = ({ navigation }) => {
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
        name="FlagQuizHome"
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
          // <Stack.Navigator initialRouteName="FlagsHome">
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name="ChooseQuizType" component={ChooseQuizType} />
              <Stack.Screen name="FlagsHome" component={FlagsQuizHome} />
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
              <Stack.Screen name="Results1" component={Results1} />
              <Stack.Screen name="Results2" component={Results2} />
              <Stack.Screen name="Results3" component={Results3} />
              <Stack.Screen name="Results4" component={Results4} />
              <Stack.Screen name="Results5" component={Results5} />
              <Stack.Screen name="Results6" component={Results6} />
              <Stack.Screen name="Results7" component={Results7} />
              <Stack.Screen name="Results8" component={Results8} />
              <Stack.Screen name="Results9" component={Results9} />
              <Stack.Screen name="Results10" component={Results10} />
              <Stack.Screen name="LoseScreen" component={LoseScreen} />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="FlagsScreen"
        options={{
          headerShown: false,
          tabBarLabel: t("Learn"),
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, marginTop: 12, borderRadius: 16 }}
              source={require("../../../assets/QuizScreen/flag.png")}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="TopTabFlagNavigator"
              component={TopTabFlagNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      {/* <Tab.Screen
        name="ReturnQuiz"
        options={{
          headerShown: false,
          tabBarLabel: t("Map"),
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, marginTop: 10 }}
              source={require("../../../assets/settings/undo.png")}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen
                name="Return"
                component={Return}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen> */}

      <Tab.Screen
        name="Open"
        options={{
          headerShown: false,
          tabBarButton: () => (
            <Pressable
              // title=""
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

export default TabNavFlags;
