import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";

const GuessTemplate = (props) => {
  const { colors } = useTheme();
  const DataGuess = props.guessData;
  const imgIndex = props.index;
  const currentQuestion = DataGuess[imgIndex];
  const [chosenLetters, setChosenLetters] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null);

  const letterSelectFunction = (ltr) => {
    if (!chosenLetters.includes(ltr)) {
      setChosenLetters([...chosenLetters, ltr]);
    }
    if (chosenLetters.length === currentQuestion.num) {
      alert("well done");
    }
  };

  const DisplayLettersFunction = () => {
    const letters = currentQuestion.letters;

    return Array.from(letters).map((letter, index) => (
      <Pressable
        key={index}
        disabled={chosenLetters.includes(letter)}
        onPress={() => {
          letterSelectFunction(letter);
          setAnswerStatus(true);
          setSelectedAnswer(imgIndex)
        }}
        style={{ backgroundColor: "transparent", padding: 10 }}
      >
        <Text style={{ margin: 1 }}>
          {chosenLetters.includes(letter) ? "" : letter}
        </Text>
      </Pressable>
    ));
  };
  return (
    <View>
      <View style={styleG.container}>
        <Image source={currentQuestion.img} style={styleG.img} />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          {Array.from(currentQuestion.word).map((letter, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "yellow",
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, padding: 3 }}>
                {chosenLetters.includes(letter) ? letter : ""}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            width: "80%",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            // padding: 20,
          }}
        >
          {/* <Text>{currentQuestion.letters}</Text> */}
          <DisplayLettersFunction />
        </View>
      </View>
    </View>
  );
};

export default GuessTemplate;

const styleG = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 150,
    borderRadius: 20,
  },
  guessWord: {
    color: "green",
    marginTop: 60,
    backgroundColor: "blue",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
