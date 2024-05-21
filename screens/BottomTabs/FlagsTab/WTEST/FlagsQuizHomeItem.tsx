import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Pressable,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { useRoute } from "@react-navigation/native";
  import LevelImage from "../LevelImage";
  import { useNavigation } from "@react-navigation/native";
  
  export const QuizBtnItem1 = ({
    scoreNext,
    screen,
    number,
    top1,
    top2,
    left,
    right,
    bottom
  }) => {
  
    return (
      <View style={{ position: "absolute", top: top1, left: left }}>
        <Pressable style={styles.btn} onPress={screen}>
          <Text>{number}</Text>
        </Pressable>
        <Text
          style={{ position: "absolute", top: top2, right: right, fontSize: 10 }}
        >
          {scoreNext ? scoreNext : 0}%
        </Text>
      </View>
    );
  };


export const QuizBtnItem2 = ({
    scoreNext,
    img,
    number,
    top1,
    top2,
    left,
    right,
  }) => {
  
    return (
      <View style={{ position: "absolute", top: top1, left: left }}>
        <Pressable
          style={styles.btn}
          onPress={() => alert("Complete the previous level.")}
        >
          <Text>{number}</Text>
        </Pressable>
        <Image
          source={img}
          style={styles.img}
        />
        <Text style={{ position: "absolute", top: top2, right: right, fontSize: 10 }}>
          {scoreNext ? scoreNext : 0}%
        </Text>
      </View>
    );
  };
  
  
const styles = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      shadowOffset: { width: 1, height: 1},
      shadowOpacity: 0.5,
    },
    img: {
      width: 35,
      height: 35,
      position: "absolute",
      bottom: -10,
      right: -10,
    },
  });
  