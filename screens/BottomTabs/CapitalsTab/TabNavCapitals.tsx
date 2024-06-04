import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Pressable, Image, Platform, Text } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import CapitalsQuizHome from "./CapitalsQuizHome";
// import LearnCapitals from "./LearnCapitals";
import Map from "./Map";
import Settings from "../Settings";
import { TopTabCapitalNavigator } from "./TopTabCapitals/topTabCapitalNavigator.js";
import { Quiz1, Quiz2, Quiz3, Quiz4,Quiz5, Quiz6, Quiz7, Quiz8, Quiz9,Quiz10, LoseScreen1, LoseScreen2, LoseScreen3, LoseScreen4, LoseScreen5, LoseScreen6, LoseScreen7, LoseScreen8, LoseScreen9, LoseScreen10 } from "./Quizzes";
import {ResultsCpt1, ResultsCpt2, ResultsCpt3, ResultsCpt4, ResultsCpt5, ResultsCpt6, ResultsCpt7, ResultsCpt8, ResultsCpt9, ResultsCpt10} from "./Quizzes";
import { useTranslation } from "react-i18next";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import ChooseQuizType from "./ChooseQuizType";
import LoseScreen from "./Quizzes/LoseScreen/LoseScreen";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavCapitals = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
        name="CapitalsQuizHome"
        options={{
          headerShown: false,
          tabBarLabel: t("Quizzes"),
          // tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, marginTop: 12 }}
              source={require("../../../assets/settings/apps.png")}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
               {/* <Stack.Screen name="ResultsCpt1" component={ResultsCpt1} />  */}
               {/* <Stack.Screen name="LoseScreen" component={LoseScreen} />  */}
              <Stack.Screen name="ChooseQuizType" component={ChooseQuizType} />
              <Stack.Screen name="CapitalsHome" component={CapitalsQuizHome} />
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
              <Stack.Screen name="ResultsCpt1" component={ResultsCpt1} /> 
              <Stack.Screen name="ResultsCpt2" component={ResultsCpt2} /> 
              <Stack.Screen name="ResultsCpt3" component={ResultsCpt3} /> 
              <Stack.Screen name="ResultsCpt4" component={ResultsCpt4} /> 
              <Stack.Screen name="ResultsCpt5" component={ResultsCpt5} /> 
              <Stack.Screen name="ResultsCpt6" component={ResultsCpt6} /> 
              <Stack.Screen name="ResultsCpt7" component={ResultsCpt7} /> 
              <Stack.Screen name="ResultsCpt8" component={ResultsCpt8} /> 
              <Stack.Screen name="ResultsCpt9" component={ResultsCpt9} /> 
              <Stack.Screen name="ResultsCpt10" component={ResultsCpt10} /> 
              <Stack.Screen name="LoseScreen1" component={LoseScreen1} /> 
              <Stack.Screen name="LoseScreen2" component={LoseScreen2} /> 
              <Stack.Screen name="LoseScreen3" component={LoseScreen3} /> 
              <Stack.Screen name="LoseScreen4" component={LoseScreen4} /> 
              <Stack.Screen name="LoseScreen5" component={LoseScreen5} /> 
              <Stack.Screen name="LoseScreen6" component={LoseScreen6} /> 
              <Stack.Screen name="LoseScreen7" component={LoseScreen7} /> 
              <Stack.Screen name="LoseScreen8" component={LoseScreen8} /> 
              <Stack.Screen name="LoseScreen9" component={LoseScreen9} /> 
              <Stack.Screen name="LoseScreen10" component={LoseScreen10} /> 
              {/* <Stack.Screen name="LoseScreen" component={LoseScreen} />  */}
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="CapitalsScreen"
        options={{
          headerShown: false,
          tabBarLabel: t("Learn"),
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, marginTop: 12, borderRadius: 16 }}
              source={require("../../../assets/QuizScreen/lon.png")}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="TopTabCapitalNavigator"
              component={TopTabCapitalNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="ReturnScreen"
        options={{
          headerShown: false,
          tabBarLabel: t("Map"),
          // tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
          tabBarIcon: () => (
            <View style={{marginBottom: -15}}>
                <MaterialCommunityIcons name="map-marker-radius" size={34} color="white" />
              </View>
            // <Image
            //   style={{ width: 30, height: 30, marginTop: 10 }}
            //   source={require("../../../assets/settings/undo.png")}
            // />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Return" component={Map} options={{ headerShown: false }}/>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="SettingsScreen"
        options={{
          tabBarButton: (props) => (
            <Pressable
              //   title=""
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
              <Text style={{ fontSize: 10, color: "grey" }}>{t("settings")}</Text>
            </Pressable>
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavCapitals;
