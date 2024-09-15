import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { statusEn, statusEs, statusEl } from "../../ReduxSetUp/QuizLngStatus/LngStatus";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { AppNavigatorTypeList } from "../../Types/AppNavigatorTypeList";
// import { StackNavigationProp } from "@react-navigation/stack";

// type ChangeThemeProp = StackNavigationProp<AppNavigatorTypeList, 'Draw'>
import actions from '../../utils/DispatchData'

const MultiLanguage = () => {
  // const navigation = useNavigation<ChangeThemeProp>();
  const navigation = useNavigation();
  const [color1, setColor1] = useState("#4ddbdf");
  const [color2, setColor2] = useState("#dbdddd");
  const [color3, setColor3] = useState("#dbdddd");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [storedString, setStoredString] = useState(''); // Initial state
  const STRING_KEY = 'myStoredString'; // Key for AsyncStorage


  useEffect(() => {
    getData();
  }, []);

  const getData= ()=>{
    try{
      AsyncStorage.getItem('UserName')
      .then((value)=>{
        if(value !=null){
          let user = JSON.parse(value)
          setName(user.Name)
        }
      })
    }catch(e){
      console.log(e)
    }
  }

  
  const saveString = async (newString) => {
    try {
      setStoredString(newString); // Update the state
      await AsyncStorage.setItem(STRING_KEY, newString); // Save the new string to AsyncStorage
      console.log('String saved:', newString);
    } catch (error) {
      console.error('Failed to save string to AsyncStorage:', error);
    }
  };

  const setLanguage = (language) => {
    const colors = {
      en: ["#4ddbdf", "#dbdddd", "#dbdddd"],
      es: ["#dbdddd", "#4ddbdf", "#dbdddd"],
      el: ["#dbdddd", "#dbdddd", "#4ddbdf"]
    };

    const [newColor1, newColor2, newColor3] = colors[language];
    setColor1(newColor1);
    setColor2(newColor2);
    setColor3(newColor3);

    actions[language].forEach(action => dispatch(action()));
  };

  return (
    <View style={styles.container}>
      <View
        style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}
      >
        <View style={{ width: "33%", height: 3, backgroundColor: "#3ff769" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.welcomeTxt}>
          {t("welcome")}
        </Text>
        <Text
          style={{ color: "#018afe", fontSize: RFValue(9, 450), marginTop: 20 }}
        >
          {t("change-language")}
        </Text>
      </View>
      <View style={{ margin: 30, gap: 10 }}>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color1 }]}
          onPress={() => {
            // i18next.changeLanguage(Object.keys(languageResources)[0]);
            // English();
            setLanguage('en')
            // dispatch(statusEn())
            saveString('En')
          }}
        >
          <Image
            source={require("../../assets/Flags/uk.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>English</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color2 }]}
          onPress={() => {
            // i18next.changeLanguage(Object.keys(languageResources)[1]);
            // Spanish();
            setLanguage('es')
            // dispatch(statusEs())
            saveString('Es')
          }}
        >
          <Image
            source={require("../../assets/Flags/spain.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Español</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color3 }]}
          onPress={() => {
            // i18next.changeLanguage(Object.keys(languageResources)[2]);
            // Greek();
            setLanguage('el')
            // dispatch(statusEl())
            saveString('El')
          }}
        >
          <Image
            source={require("../../assets/Flags/greece.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Ελληνικά</Text>
        </Pressable>
      </View>
      <View style={styles.skipNextBtn}>
        <Pressable
          onPress={() => navigation.navigate("Draw", {name: name})}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("ChangeTheme")}
          style={styles.button2}
        >
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MultiLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTxt: {
    color: "#0073d4",
    fontSize: RFValue(11, 420),
    fontWeight: "bold",
    letterSpacing: 0,
  },
  chngLgBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  button1: {
    width: "28%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  button2: {
    width: "40%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  title: {
    fontSize: RFValue(9, 450),
    fontWeight: "bold",
    color: "#0cb41f",
  },
  skipNextBtn: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
});

// {Object.keys(languageResources).map((item, index) => (
//   <View key={index}>
//     <Pressable
//       onPress={() => {
//         changeLng(item);
//         setScreenIndex(index);
//       }}
//       style={[
//         styles.lngBtn,
//         {
//           backgroundColor:
//             index === screenIndex ? "lightgreen" : "lightgray",
//         },
//       ]}
//     >
//       <Text
//         style={{ color: "green", fontSize: 16, fontWeight: "bold" }}
//       >
//         {languagesList[item].nativeName}
//       </Text>
//     </Pressable>
//   </View>
// ))}

// lngBtn: {
//   margin: 20,
//   backgroundColor: "yellow",
//   width: 180,
//   height: 60,
//   borderRadius: 60,
//   alignItems: "center",
//   justifyContent: "center",
// },
