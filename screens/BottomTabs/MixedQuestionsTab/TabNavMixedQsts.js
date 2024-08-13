import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, Text, Platform } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
// import { TopTabFlagNavigator } from "./TopTabFlags/topTabFlagNavigator";
import MixedQstsQuizHome from "./MixedQstsQuizHome";
import Settings from "../Settings";
import ChooseQuizType from "./ChooseQuizType";


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
