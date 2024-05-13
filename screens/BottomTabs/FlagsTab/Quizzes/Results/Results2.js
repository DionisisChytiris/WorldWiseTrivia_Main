import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results2 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score2 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score2', JSON.stringify(score2))
      navigation.navigate('FlagsHome', {score2: score2})
      console.log(score2)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results2</Text>
      <Text>----</Text>
      <Text>{score2}</Text>
      <Pressable
        // onPress={()=>navigation.navigate('FlagsHome', {score2: route.params.score})}
        onPress={setItem}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results2