import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

// import AsyncStorage from "@react-native-async-storage/async-storage";

const ResultsCpt1 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // const score1Test = route.params.score

  // const setItem = async()=>{
  //   try{
  //     await AsyncStorage.setItem('score1', JSON.stringify(score1))
  //     navigation.navigate('FlagsHome', {score1: score1})
  //     console.log(score1)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Capitals</Text>
      <Text>Results1</Text>
      <Text>----</Text>
      {/* <Text>{score1Test}</Text> */}
      <Text>hello</Text>
      <Pressable
        onPress={() => navigation.navigate("CapitalsHome")}
        // onPress={()=>navigation.navigate('CapitalsHome', {score1: score1Test, status: route.params.status})}
        // onPress={setItem}
      >
        <Text>Home</Text>
      </Pressable>
    
    </View>
  );
};

export default ResultsCpt1;
