import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, Platform, Text } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import Settings from "../Settings";
import NaturalMntsQuizHome from "./NaturalMntsQuizHome";
// import LearnAnimals from './LearnAnimals'
// import Return from './Return'
import Map from './Map'
import { useTranslation } from "react-i18next";
import TopTabNaturalMntsNavigator from "./TopTabNaturalMnts/topTabNaturalMntsNavigator";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavNaturalMnts = ({ navigation }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.backgroundBottomTab,
          // height: 100
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
        name="NaturalMntsQuizHome"
        options={{
          headerShown: false,
          tabBarLabel: t("Quizzes"),
          tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
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
              <Stack.Screen name="NaturalMntHome" component={NaturalMntsQuizHome} />
              {/* <Stack.Screen name="Quiz1" component={Quiz1} />
              <Stack.Screen name="Quiz2" component={Quiz2} />
              <Stack.Screen name="Quiz3" component={Quiz3} />
              <Stack.Screen name="Quiz4" component={Quiz4} />
              <Stack.Screen name="Quiz5" component={Quiz5} /> */}
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="NaturalMntsScreen"
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
            name="TopTabNaturalMntsNavigator" 
            component={TopTabNaturalMntsNavigator} 
            options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen> 

      <Tab.Screen
        name="MapScreen"
        options={{
          headerShown: false,
          tabBarLabel: t("Map"),
          // tabBarIcon: () => <AntDesign name="home" size={24} color="blue" />,
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
             <Stack.Screen name="Map" component={Map} options={{ headerShown: false }}/>
          </Stack.Navigator>
        )}
      </Tab.Screen> 

      <Tab.Screen
        name="SettingsScreen"
        options={{
          tabBarButton: (props) => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                width: "25%",
                marginTop: 12
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

export default TabNavNaturalMnts;
