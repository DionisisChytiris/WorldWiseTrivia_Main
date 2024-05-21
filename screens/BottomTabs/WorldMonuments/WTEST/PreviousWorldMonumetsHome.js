import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const WorldMonumentsHome = () => {
    const navigation = useNavigation();
  
    return (
      <ScrollView horizontal={true}>
        <View style={{ flex: 1, backgroundColor: "gray" }}>
          <ImageBackground
            source={require('../../../assets/QuizScreen/worldlandmarks.png')}
            style={{width: 1050, height: '100%'}}
          >
            <Pressable
              style={[style.btn, { margin: 30 }]}
              onPress={() => navigation.navigate("Quiz1")}
            >
              <Text>Quiz 1</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 200, marginBottom: 10 }]}
              onPress={() => navigation.navigate("Quiz2")}
            >
              <Text>Quiz 2</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 30, marginBottom: 10 }]}
              onPress={() => navigation.navigate("Quiz3")}
            >
              <Text>Quiz 3</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 200, marginBottom: 30 }]}
              onPress={() => navigation.navigate("Quiz4")}
            >
              <Text>Quiz 4</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 30, marginBottom: 10 }]}
              onPress={() => navigation.navigate("Quiz5")}
            >
              <Text>Quiz 5</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 200, marginBottom: 30 }]}
              onPress={() => navigation.navigate("Quiz6")}
            >
              <Text>Quiz 6</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 30, marginBottom: 10 }]}
              onPress={() => navigation.navigate("Quiz7")}
            >
              <Text>Quiz 7</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 200, marginBottom: 30 }]}
              onPress={() => navigation.navigate("Quiz8")}
            >
              <Text>Quiz 8</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 30, marginBottom: 10 }]}
              onPress={() => navigation.navigate("Quiz9")}
            >
              <Text>Quiz 9</Text>
            </Pressable>
            <Pressable
              style={[style.btn, { marginLeft: 200, marginBottom: 30 }]}
              onPress={() => navigation.navigate("Quiz10")}
            >
              <Text>Quiz 10</Text>
            </Pressable>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  };
  
  export default WorldMonumentsHome;
  
  const style = StyleSheet.create({
    btn: {
      width: 100,
      height: 40,
      backgroundColor: "lightgray",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  