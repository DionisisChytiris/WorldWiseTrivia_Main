import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import MainResultsTemplate from '../../../Templates/MainResultsTemplate'

const ResNrtMnt10 = () => {
    const route = useRoute();
    const correct = route.params.score
    const wrong = 100 - correct
    const crAns = correct *0.1 + '/10'
    const wrnAns = wrong *0.1 + '/10'
    const data = [
      { value: wrong, color: "magenta" },
      { value: correct, color: "lightgreen" },
    ];
  
    return (
      <MainResultsTemplate
        number='10'
        data={data}
        percentage={correct}
        numCorAns={crAns}
        numWrnAns={wrnAns}
      />
    );
}

export default ResNrtMnt10