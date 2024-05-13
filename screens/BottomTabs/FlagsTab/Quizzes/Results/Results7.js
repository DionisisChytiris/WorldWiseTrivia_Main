import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results7 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score7 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score7', JSON.stringify(score7))
      navigation.navigate('FlagsHome', {score7: score7})
      console.log(score7)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results7</Text>
      <Text>----</Text>
      <Text>{score7}</Text>
      <Pressable
        onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score7: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results7