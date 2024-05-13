import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import { useTheme } from '../../../../../utils/ThemeMode/ThemeProvider';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const ResultsTemplate = ({title, scoreParam, screen, pressBtn}) => {
  const { colors } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const score1Test = route.params.score

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bgFlagsCnt}}>
      <Text>{title}</Text>
      <Text>----</Text>
      <Text>{scoreParam}</Text>
      <Pressable
        // onPress={()=>navigation.navigate(screen, {score1: scoreParam})}
        onPress={pressBtn}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default ResultsTemplate