import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results5 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score5 = route.params.score;

  const setItem = async () => {
    try {
      await AsyncStorage.setItem("score5", JSON.stringify(score5));
      navigation.navigate("FlagsHome", { score5: score5 });
      console.log(score5);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Results5</Text>
      <Text>----</Text>
      <Text>{score5}</Text>
      <Pressable
        onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score5: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

export default Results5;
