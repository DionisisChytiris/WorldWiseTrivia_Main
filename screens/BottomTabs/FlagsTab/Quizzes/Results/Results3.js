import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results3 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score3 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score3', JSON.stringify(score3))
      navigation.navigate('FlagsHome', {score3: score3})
      console.log(score3)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results3</Text>
      <Text>----</Text>
      <Text>{score3}</Text>
      <Pressable
        // onPress={()=>navigation.navigate('FlagsHome', {score3: route.params.score})}
        onPress={setItem}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results3