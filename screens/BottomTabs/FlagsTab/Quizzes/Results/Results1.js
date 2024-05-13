import { View, Text, Pressable } from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";
import React from 'react'
import { useTheme } from '../../../../../utils/ThemeMode/ThemeProvider';
import ResultsTemplate from './ResultsTemplate';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Results1 = () => {
  const { colors } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const score1 = route.params.score

  const setItem = async()=>{
    try{
      await AsyncStorage.setItem('score1', JSON.stringify(score1))
      navigation.navigate('FlagsHome', {score1: score1})
      // console.log(score1)
    }catch(e){
      console.log(e)
    }
  }

  return (
      // <ResultsTemplate title='Results 1' scoreParam={score1} pressBtn={setItem}/>
    // <View>
    // </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bgFlagsCnt}}>
      <Text>Results1</Text>
      <Text>----</Text>
      <Text>{score1}</Text>
      <Pressable
        onPress={()=>navigation.navigate('FlagsHome', {score1: score1})}
        // onPress={setItem}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  )
}

export default Results1