import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results6 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score6 = route.params.score;

  const setItem = async () => {
    try {
      await AsyncStorage.setItem("score6", JSON.stringify(score6));
      navigation.navigate("FlagsHome", { score6: score6 });
      console.log(score6);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Results6</Text>
      <Text>----</Text>
      <Text>{score6}</Text>
      <Pressable
        onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score6: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

export default Results6;
