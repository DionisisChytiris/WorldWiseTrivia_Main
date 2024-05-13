import { View, Text } from 'react-native'
import React from 'react'

const LearnAnimals = () => {
  const data = ['item1', 'item2', 'item3']

  const test = (item, index)=> {
    console.log(`Item ${index + 1}: ${item}`)
  }

  return (
    <View>
      <Text>LearnAnimals</Text>
      {data.map((item, index)=>(
        <Text key={index}>
          {item}
        </Text>
      ))}
    </View>
  )
}

export default LearnAnimals