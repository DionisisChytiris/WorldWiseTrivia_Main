import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import Home from "./screens/Home";
import { StatusBar } from 'expo-status-bar';
import DrawNavigator from "./screens/Drawer/DrawNavigator";
import MultiLanguage from "./screens/IntroScreens/MultiLanguage";
import ToggleBtn from "./utils/ThemeMode/ToggleBtn";
import NameInput from "./screens/IntroScreens/NameInput";
import ChangeTheme from "./screens/IntroScreens/ChangeTheme";
import { AppNavigatorTypeList } from "./Types/AppNavigatorTypeList";
import { useDispatch } from "react-redux";
import actions from './utils/DispatchData'
import { useAppSelector } from "./ReduxSetUp/store";

const Stack = createNativeStackNavigator<AppNavigatorTypeList>();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { initLng } = useAppSelector((state) => state.lngStatus);
  
  // type Language = 'en' | 'es' | 'el'

  const setLanguage = (language) => {
    actions[language].forEach(action => dispatch(action()));
  };

  useEffect(()=>{
    if(initLng === 'En'){
      setLanguage('en')
    }
    if(initLng ==='Es' ){
      setLanguage('es')
    }
    if(initLng ==='El'){
      setLanguage('el')
    }
    console.log(initLng)
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="MultiLanguage" component={MultiLanguage} options={{headerShown: false, gestureEnabled: false}}/>
        <Stack.Screen name="NameInput" component={NameInput} options={{headerShown: false, gestureEnabled: false}}/>
        <Stack.Screen name="ChangeTheme" component={ChangeTheme} options={{headerShown: false, gestureEnabled: false}}/>
        <Stack.Screen name="ToggleBtn" component={ToggleBtn} options={{headerShown: false, gestureEnabled: false}}/>
        <Stack.Screen name="Draw" component={DrawNavigator} options={{headerShown: false, gestureEnabled: false}}/>
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};

export default AppNavigator;
