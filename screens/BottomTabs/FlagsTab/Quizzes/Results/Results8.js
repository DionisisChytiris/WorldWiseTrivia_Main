import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results8 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score8 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score8', JSON.stringify(score8))
      navigation.navigate('FlagsHome', {score8: score8})
      console.log(score8)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results8</Text>
      <Text>----</Text>
      <Text>{score8}</Text>
      <Pressable
      onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score8: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results8