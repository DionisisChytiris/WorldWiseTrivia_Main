import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppNavigatorTypeList } from "../Types/AppNavigatorTypeList";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// test sound
import { Audio } from "expo-av";
//

type HomeProp = StackNavigationProp<AppNavigatorTypeList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeProp>();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#002c54");
  const [circle, setCircle] = useState("#ccc");
  const [text, setText] = useState("#002c54");

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

  //test sound
  const [sound, setSound] = useState();

  async function playSound() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/more/AC_DC.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          // console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  //

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {name ? (
        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: "white" }}>Welcome to Quizzify {name}</Text>
        </View>
      ) : null}
      <Pressable
        // onPress={()=> navigation.navigate('MultiLanguage')}
        onPressIn={() => (
          setColor("#ccc"), setCircle("#002c54"), setText("#ccc")
        )}
        onPressOut={() => {
          setColor("#002c54");
          setCircle("#ccc");
          setText("#002c54");
          name
            ? navigation.navigate("Draw")
            : navigation.navigate("MultiLanguage");
        }}
        style={[styles.circle, { backgroundColor: circle }]}
      >
        {name ? (
          <Text>Enter</Text>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={[styles.title, { color: text }]}>World Wise</Text>
            <Text style={[styles.title, { color: text }]}>Trivia</Text>
          </View>
        )}
      </Pressable>
      <View style={{position: 'absolute', bottom: 80}}>
        <Pressable onPress={playSound}>
          <Text style={{ color: "white", marginTop: 50 }}>Sound On</Text>
        </Pressable>
        <Pressable onPress={() => setSound(null)}>
          <Text style={{ color: "white", marginTop: 50 }}>Sound Off</Text>
        </Pressable>
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
