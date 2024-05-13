import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'

const ResultsMnt9 = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>WorldMonuments</Text>
      <Text>Results9</Text>
      <Text>----</Text>
      {/* <Text>{score1Test}</Text> */}
      <Pressable
        onPress={()=>navigation.navigate('WorldMonumentsHome')}
        // onPress={()=>navigation.navigate('CapitalsHome', {score1: score1Test})}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default ResultsMnt9