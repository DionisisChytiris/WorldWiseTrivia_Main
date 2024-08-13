import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Image, Platform, Text } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import Settings from "../Settings";
import NaturalMntsQuizHome from "./NaturalMntsQuizHome";
import { Quiz1, Quiz10, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8,Quiz9, ResLoseScr1, ResLoseScr10, ResLoseScr2, ResLoseScr3, ResLoseScr4, ResLoseScr5, ResLoseScr6, ResLoseScr7, ResLoseScr8, ResLoseScr9, ResNrtMnt1, ResNrtMnt10, ResNrtMnt2, ResNrtMnt3, ResNrtMnt4, ResNrtMnt5, ResNrtMnt6, ResNrtMnt7, ResNrtMnt8, ResNrtMnt9 } from "./Quizzes";
// import LearnAnimals from './LearnAnimals'
// import Return from './Return'
import Map from './Map'
import { useTranslation } from "react-i18next";
import TopTabNaturalMntsNavigator from "./TopTabNaturalMnts/topTabNaturalMntsNavigator";
import ChooseQuizType from "./ChooseQuizType";

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
              <Stack.Screen name="ChooseQuizType" component={ChooseQuizType} />
              <Stack.Screen name="NaturalMntHome" component={NaturalMntsQuizHome} />
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
              <Stack.Screen name="ResNrtMnt1" component={ResNrtMnt1} />
              <Stack.Screen name="ResNrtMnt2" component={ResNrtMnt2} />
              <Stack.Screen name="ResNrtMnt3" component={ResNrtMnt3} />
              <Stack.Screen name="ResNrtMnt4" component={ResNrtMnt4} />
              <Stack.Screen name="ResNrtMnt5" component={ResNrtMnt5} />
              <Stack.Screen name="ResNrtMnt6" component={ResNrtMnt6} />
              <Stack.Screen name="ResNrtMnt7" component={ResNrtMnt7} />
              <Stack.Screen name="ResNrtMnt8" component={ResNrtMnt8} />
              <Stack.Screen name="ResNrtMnt9" component={ResNrtMnt9} />
              <Stack.Screen name="ResNrtMnt10" component={ResNrtMnt10} />
              <Stack.Screen name="ResLoseScr1" component={ResLoseScr1} />
              <Stack.Screen name="ResLoseScr2" component={ResLoseScr2} />
              <Stack.Screen name="ResLoseScr3" component={ResLoseScr3} />
              <Stack.Screen name="ResLoseScr4" component={ResLoseScr4} />
              <Stack.Screen name="ResLoseScr5" component={ResLoseScr5} />
              <Stack.Screen name="ResLoseScr6" component={ResLoseScr6} />
              <Stack.Screen name="ResLoseScr7" component={ResLoseScr7} />
              <Stack.Screen name="ResLoseScr8" component={ResLoseScr8} />
              <Stack.Screen name="ResLoseScr9" component={ResLoseScr9} />
              <Stack.Screen name="ResLoseScr10" component={ResLoseScr10} />
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
