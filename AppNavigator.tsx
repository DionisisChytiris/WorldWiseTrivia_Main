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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<AppNavigatorTypeList>();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { initLng } = useAppSelector((state) => state.lngStatus);
  const [storedString, setStoredString] = React.useState(''); // Initial state
  const STRING_KEY = 'myStoredString'; 

  useEffect(() => {
    const loadStoredString = async () => {
      try {
        const value = await AsyncStorage.getItem(STRING_KEY);
        if (value !== null) {
          setStoredString(value); // Set state if a value exists in AsyncStorage
        }
      } catch (error) {
        console.error('Failed to load string from AsyncStorage:', error);
      }
    };

    loadStoredString();
  }, []);

  
  // type Language = 'en' | 'es' | 'el'

  const setLanguage = (language) => {
    actions[language].forEach(action => dispatch(action()));
  };

  useEffect(()=>{
    if(storedString === 'En'){
      setLanguage('en')
    }
    if(storedString ==='Es' ){
      setLanguage('es')
    }
    if(storedString ==='El'){
      setLanguage('el')
    }
    console.log(storedString)
  },[storedString])


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false, orientation: "portrait"}}/>
        <Stack.Screen name="MultiLanguage" component={MultiLanguage} options={{headerShown: false, gestureEnabled: false, orientation: "portrait"}}/>
        <Stack.Screen name="NameInput" component={NameInput} options={{headerShown: false, gestureEnabled: false, orientation: "portrait"}}/>
        <Stack.Screen name="ChangeTheme" component={ChangeTheme} options={{headerShown: false, gestureEnabled: false, orientation: "portrait"}}/>
        <Stack.Screen name="ToggleBtn" component={ToggleBtn} options={{headerShown: false, gestureEnabled: false, orientation: "portrait"}}/>
        <Stack.Screen name="Draw" component={DrawNavigator} options={{headerShown: false, gestureEnabled: false, orientation: "portrait"}}/>
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
};

export default AppNavigator;
