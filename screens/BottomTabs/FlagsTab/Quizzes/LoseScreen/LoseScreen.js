import { View, Text, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const LoseScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>LoseScreen</Text>
      <Text>----</Text>
      <Pressable
        onPress={()=>navigation.navigate('FlagsHome')}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default LoseScreen