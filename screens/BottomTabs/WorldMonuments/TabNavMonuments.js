import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Image, Platform, Pressable } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import React from "react";
import WorldMonumentsHome from "./WorldMonumentsHome";
import { useNavigation } from "@react-navigation/native";
import Map from "./Map";
import Settings from '../Settings'
import { Quiz1, Quiz10, Quiz2, Quiz3, Quiz4, Quiz5, Quiz6, Quiz7, Quiz8, Quiz9, ResultsMnt1, ResultsMnt2, ResultsMnt3, ResultsMnt4, ResultsMnt5, ResultsMnt6, ResultsMnt7, ResultsMnt8, ResultsMnt9, ResultsMnt10, LoseScreen1, LoseScreen3, LoseScreen2, LoseScreen4, LoseScreen5, LoseScreen6, LoseScreen7, LoseScreen8, LoseScreen9, LoseScreen10 } from "./Quizzes";
import TopTabMonuments from "./TopTabMonuments/topTabMonuments";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChooseQuizType from "./ChooseQuizType";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavMonuments = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.backgroundBottomTab
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            tabBarActiveTintColor: 'white',
            tabBarStyle: {
                backgroundColor: colors.backgroundBottomTab,
                height: Platform.OS == 'ios' ? 90 : 70,
                paddingBottom: Platform.OS == 'ios' ? 30: 10,
            }
        }}
    >
      <Tab.Screen
        name='WorldMonumentsScreen'
        options={{
            headerShown: false,
            tabBarLabel: t("Quizzes"),
            tabBarIcon: ()=>(
                <Image
                    style={{width: 30, height: 30, marginTop: 12}}
                    source={require('../../../assets/settings/apps.png')}
                />
            )
        }}
      >
        {() => (
          // <Stack.Navigator initialRouteName="WorldMonumentsHome">
          <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="ChooseQuizType" component={ChooseQuizType} />
              <Stack.Screen
                name="WorldMonumentsHome"
                component={WorldMonumentsHome}
              />
              <Stack.Screen name='Quiz1' component={Quiz1}/>
              <Stack.Screen name='Quiz2' component={Quiz2}/>
              <Stack.Screen name='Quiz3' component={Quiz3}/>
              <Stack.Screen name='Quiz4' component={Quiz4}/>
              <Stack.Screen name='Quiz5' component={Quiz5}/>
              <Stack.Screen name='Quiz6' component={Quiz6}/>
              <Stack.Screen name='Quiz7' component={Quiz7}/>
              <Stack.Screen name='Quiz8' component={Quiz8}/>
              <Stack.Screen name='Quiz9' component={Quiz9}/>
              <Stack.Screen name='Quiz10' component={Quiz10}/>
              <Stack.Screen name='ResultsMnt1' component={ResultsMnt1}/>
              <Stack.Screen name='ResultsMnt2' component={ResultsMnt2}/>
              <Stack.Screen name='ResultsMnt3' component={ResultsMnt3}/>
              <Stack.Screen name='ResultsMnt4' component={ResultsMnt4}/>
              <Stack.Screen name='ResultsMnt5' component={ResultsMnt5}/>
              <Stack.Screen name='ResultsMnt6' component={ResultsMnt6}/>
              <Stack.Screen name='ResultsMnt7' component={ResultsMnt7}/>
              <Stack.Screen name='ResultsMnt8' component={ResultsMnt8}/>
              <Stack.Screen name='ResultsMnt9' component={ResultsMnt9}/>
              <Stack.Screen name='ResultsMnt10' component={ResultsMnt10}/>
              <Stack.Screen name='LoseScreen1' component={LoseScreen1}/>
              <Stack.Screen name='LoseScreen2' component={LoseScreen2}/>
              <Stack.Screen name='LoseScreen3' component={LoseScreen3}/>
              <Stack.Screen name='LoseScreen4' component={LoseScreen4}/>
              <Stack.Screen name='LoseScreen5' component={LoseScreen5}/>
              <Stack.Screen name='LoseScreen6' component={LoseScreen6}/>
              <Stack.Screen name='LoseScreen7' component={LoseScreen7}/>
              <Stack.Screen name='LoseScreen8' component={LoseScreen8}/>
              <Stack.Screen name='LoseScreen9' component={LoseScreen9}/>
              <Stack.Screen name='LoseScreen10' component={LoseScreen10}/>
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name='Learn'
        options={{
            headerShown: false,
            tabBarLabel: t("Learn"),
            tabBarLabelStyle: {marginBottom: -1},
            tabBarIcon: ()=>(
                <Image
                    style={{width: 30, height: 30, marginTop: 14, borderRadius: 16}}
                    // source={require('../../../assets/QuizScreen/monument.jpg')}
                    source={require('../../../assets/WorldMonuments/worldmnt.webp')}
                />
            )
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="TopTabMonument">
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="TopTabMonument"
                component={TopTabMonuments}
              />
            </Stack.Group>
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name='Return'
        options={{
            headerShown: false,
            tabBarLabel: t("Map"),
            tabBarIcon: ()=>(
              <View style={{marginBottom: -15}}>
                <MaterialCommunityIcons name="map-marker-radius" size={32} color="white" />
              </View>
                // <Image
                //     style={{width: 30, height: 30, marginTop: 12}}
                //     source={require('../../../assets/settings/undo.png')}
                // />
            )
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="WorldMonumentsHome">
            <Stack.Group screenOptions={{headerShown: false}}>
              <Stack.Screen
                name="ReturnMonument"
                component={Map}
              />
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

export default TabNavMonuments;
