import { View, Text, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const FlagTemplate = (props) => {
  const [score, setScore] = useState(0);
  const { colors } = useTheme();
  const DataFlags = props.flagsData
  const [index, setIndex] = useState(props.flagIndex);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentQuestion = DataFlags[index];
  const [show, setShow] = useState(null);
  const [img, setImg] = useState(styles.img);
  const [answerStatus, setAnswerStatus] = useState(null);
  
useEffect(() => {
  if (selectedAnswer !== null) {
    if (selectedAnswer === currentQuestion?.correctAnswerIndex) {
      setScore((score) => score + 10);
      setAnswerStatus(true);
      console.log("correct answer");
    } else {
      setAnswerStatus(true);
      setShow(true);
      setImg(styles.img1);
      console.log("wrong answer");
    }
  } else {
    setAnswerStatus(null);
    setShow(null);
    setImg(styles.img);
  }
}, [selectedAnswer]);

useEffect(() => {
  setSelectedAnswer(null);
}, [index]);

  return (
    <>
    <Text>{score}</Text>
      <Text style={[styles.capital, { color: colors.text }]}>
        {currentQuestion.capital}
      </Text>
      <Text style={[styles.country, { color: colors.text }]}>
        {currentQuestion.country}
      </Text>
      <View style={styles.box}>
        {currentQuestion?.options.map((item, index) => (
          <View style={styles.flagBox} key={index}>
            <Pressable
              key={index}
              onPress={() => {
                setSelectedAnswer(index);
              }}
              disabled={
                selectedAnswer === currentQuestion.correctAnswerIndex && true
              }
              style={
                selectedAnswer === index &&
                index === currentQuestion.correctAnswerIndex
                  ? styles.box1
                  : selectedAnswer !== currentQuestion.correctAnswerIndex
                  ? styles.box1
                  : selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex
                  ? styles.box1
                  : styles.box2
              }
            >
              <View>
                <Image source={item.img} style={img} />
              </View>
              {selectedAnswer === index &&
              index === currentQuestion.correctAnswerIndex ? (
                <View style={styles.tick}>
                  <MaterialIcons name="done" size={30} color="white" />
                </View>
              ) : null}
              {selectedAnswer === index &&
              index !== currentQuestion.correctAnswerIndex ? (
                <View style={styles.clear}>
                  <MaterialIcons name="clear" size={30} color="white" />
                </View>
              ) : null}
              {show
                ? index === currentQuestion.correctAnswerIndex && (
                    <View style={styles.tick}>
                      <MaterialIcons name="done" size={30} color="white" />
                    </View>
                  )
                : null}
            </Pressable>
          </View>
        ))}
      </View>
       {/* Arrows */}
       {index > 8 ? null : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", right: 10 }}
          onPress={() => {
            selectedAnswer == null ? null : setIndex(index + 1);
          }}
        >
          {answerStatus === null ? null : (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={40}
              color={colors.text}
            />
          )}
        </Pressable>
      )}

      {/* Arrows */}
      {index == 0 ? null : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", left: 10 }}
          onPress={() => {
            {
              score === 0 ? null : setScore(score - 10);
            }
            setIndex(index - 1);
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={colors.text}
          />
        </Pressable>
      )}
    </>
  );
};

export default FlagTemplate;
