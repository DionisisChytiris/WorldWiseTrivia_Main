import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results4 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const score4 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score4', JSON.stringify(score4))
      navigation.navigate('FlagsHome', {score4: score4})
      console.log(score4)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Results4</Text>
      <Text>----</Text>
      <Text>{score4}</Text>
      <Pressable
        onPress={setItem}
        // onPress={()=>navigation.navigate('FlagsHome', {score4: route.params.score})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results4