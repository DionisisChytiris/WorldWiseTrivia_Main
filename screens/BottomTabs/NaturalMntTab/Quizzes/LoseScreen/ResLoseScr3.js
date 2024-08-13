import { useRoute } from "@react-navigation/native";
import React from "react";
import MainLoseScreenTemplate from "../../../Templates/MainLoseScreenTemplate";

const ResLoseScr3 = () => {
    const route = useRoute();
    const correct = route.params.score
    const wrong = 30
    const unanswered = 70 - correct
    const crAns = correct *0.1 + '/10'
    const wrnAns = unanswered *0.1 + '/10'
    const data = [
      { value: correct, color: "lightgreen" },
      { value: wrong, color: "magenta" },
      { value: unanswered, color: "gray" },
    ];
  
    return (
      <MainLoseScreenTemplate
        number="3"
        data={data}
        percentage={correct}
        numCorAns={crAns}
        unanswered={wrnAns}
      />
    );
}

export default ResLoseScr3