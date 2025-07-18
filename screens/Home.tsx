import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppNavigatorTypeList } from "../Types/AppNavigatorTypeList";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../utils/ThemeMode/ThemeProvider";
import { Audio } from "expo-av";
import { toggleBoolean } from "../ReduxSetUp/SoundVibration/VibrationSlice";
import { useAppSelector } from "../ReduxSetUp/store";
import RateModal from "./BottomTabs/Templates/components/ReviewModal";
import { useTranslation } from "react-i18next";

type HomeProp = StackNavigationProp<AppNavigatorTypeList, "Home">;

const Home = () => {
  const boolean = useAppSelector((state) => state.boolean.value);
  const navigation = useNavigation<HomeProp>();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#002c54");
  const [circle, setCircle] = useState("#ccc");
  const [text, setText] = useState("#002c54");
  const [text1, setText1] = useState("#9aa3a8");
  // const [show, setShow] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  // const [sound, setSound] = useState<Audio.Sound | null>(null);

  // async function playSound() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/more/AC_DC.mp3")
  //   );
  //   setSound(sound);

  //   await sound.playAsync();
  // }

  // useEffect(()=>{
  //   {!sound && playSound()}
  // },[sound])

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {/* <Pressable onPress={() => setShow(true)}>
        <Text>Button</Text>
      </Pressable>
      <RateModal visible={show} onClose={() => setShow(false)} /> */}
      <View style={{ position: "absolute", top: 150, alignItems: "center" }}>
        <Text style={[styles.title, { color: text1 }]}>World Wise Trivia</Text>
        {/* <Text style={[styles.title, { color: text1 }]}>Trivia</Text> */}
      </View>
      <Pressable
        onPressIn={() => (
          setColor("#ccc"),
          setCircle("#002c54"),
          setText("#ccc"),
          setText1("#002c54")
        )}
        onPressOut={() => {
          setColor("#002c54");
          setCircle("#ccc");
          setText("#002c54");
          setText1("#9aa3a8");
          name
            ? navigation.navigate("Draw", { name: name })
            : navigation.navigate("MultiLanguage");
        }}
        style={[styles.circle, { backgroundColor: circle }]}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={[styles.title, { color: text, marginLeft: 5 }]}>
            Press
          </Text>
          <Text style={[styles.title, { color: text, fontSize: 16 }]}>
            To Enter
          </Text>
        </View>
      </Pressable>
      {name ? (
        <View style={{ position: "absolute", bottom: 150 }}>
          <Text style={{ color: text1, marginBottom: 0 }}>
            {String(t("welcome") ?? "") + String(name ?? "")}!
          </Text>
        </View>
      ) : null}
      <View style={{ position: "absolute", bottom: 40 }}>
        <Text style={{ color: text1, fontSize: 12 }}>2025</Text>
      </View>
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#002c54',
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 60
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#002c54",
  },
});
