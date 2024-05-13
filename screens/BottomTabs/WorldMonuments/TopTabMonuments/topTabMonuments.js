import React from 'react'
import { View, Text, Image } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from '../../../../utils/ThemeMode/ThemeProvider';
import Africa from './Africa';
import Asia from './Asia';
import America from './America';
import Europe from './Europe';
import Oceania from './Oceania';

const Tab = createMaterialTopTabNavigator();

const TopTabMonuments = () => {
    const {colors} = useTheme()

  return (
   <Tab.Navigator
    screenOptions={{
        tabBarStyle: {backgroundColor: colors.backgroundMaterialTopTab}
    }}
   >
     <Tab.Screen
        name="Europe"
        component={Europe}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../../assets/continents/europe.png")}
                resizeMode="cover"
              />             
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="America"
        component={America}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../../assets/continents/america.jpg")}
                resizeMode="cover"
              />
            </View>
          ),
        }}
      /> 
        <Tab.Screen
        name="Africa"
        component={Africa}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../../assets/continents/africa.png")}
                resizeMode="cover"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Asia"
        component={Asia}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../../../assets/continents/asia.png")}
                resizeMode="cover"
              />
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Oceania"
        component={Oceania}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../../../assets/continents/Oceani.png")}
              />
            </View>
          ),
        }}
      /> 
   </Tab.Navigator>
  )
}

export default TopTabMonuments