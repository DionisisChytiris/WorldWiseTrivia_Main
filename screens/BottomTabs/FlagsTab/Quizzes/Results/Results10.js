import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results10 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score10 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score10', JSON.stringify(score10))
      navigation.navigate('FlagsHome', {score10: score10})
      console.log(score10)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results10</Text>
      <Text>----</Text>
      <Text>{route.params.score}</Text>
      <Pressable
        onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score10: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results10