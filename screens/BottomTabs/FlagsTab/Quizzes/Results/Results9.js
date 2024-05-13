import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results9 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score9 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score9', JSON.stringify(score9))
      navigation.navigate('FlagsHome', {score9: score9})
      console.log(score9)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results9</Text>
      <Text>----</Text>
      <Text>{score9}</Text>
      <Pressable
      onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score9: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results9