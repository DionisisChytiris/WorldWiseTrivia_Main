import { View, Text, Pressable, Image, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
// import { styles } from "./styles";
import {styles} from '../../styles'
import { MaterialIcons } from "@expo/vector-icons";

const QuizTemplate = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const data = props.dataQuiz;
  const [index, setIndex] = useState(0);
  const currentQuestion = data[index];
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [disabled1, setDisabled1] = useState(null);
  const [show, setShow] = useState(null);
  const [img, setImg] = useState(styles.img);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion?.correctAnswerIndex) {
        setScore((score) => score + 10);
        setAnswerStatus(true);
        setDisabled(true);
        // setImg(styles.img1);
      } else {
        setDisabled(true);
        setAnswerStatus(true);
        setShow(true);
        setImg(styles.img1);
        // removeHeart();
      }
    } else {
      setDisabled(false);
      setAnswerStatus(null);
      setShow(null);
      setImg(styles.img);
    }
  }, [selectedAnswer]);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [index]);

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      {/* Header */}
      <View style={{ flexDirection: "row", gap: 30 }}>
        <Text style={{ color: colors.text }}>
          {index + 1} / {data.length - 1}
        </Text>
        <Text style={{ color: colors.text, fontWeight: "500" }}>
          {props.quizName}
        </Text>
        <Text style={{ color: colors.text }}>score: {score}</Text>
        <Text style={{ color: colors.text }}>Length ___{data.length}</Text>
      </View>

      {/* Quiz */}
      <View style={styles.quizContainer}>
        <Text style={[styles.smTitle, { color: colors.text }]}>
          {currentQuestion.country}
        </Text>
        <Text style={[styles.LgTitle, { color: colors.text }]}>
          {currentQuestion.monument}
        </Text>

        <View style={styles.box}>
          {currentQuestion?.options.map((item, index) => (
            <View style={styles.flagBox} key={index}>
              <Pressable
                onPress={() => {
                  setSelectedAnswer(index);
                  // setIndex(index + 1);
                }}
                disabled={disabled}
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
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                  <Image
                    source={item.img}
                    style={img}
                    onLoadEnd={() => setLoading(false)}
                  />
                  {show ? (
                    <Text
                      style={{
                        color: "white",
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                  ) : null}
                </View>
                {/* Correct (Tick) Symbol */}
                {selectedAnswer === index &&
                index === currentQuestion.correctAnswerIndex ? (
                  <View style={styles.tick}>
                    <MaterialIcons name="done" size={30} color="white" />
                  </View>
                ) : null}
                {/* Wrong (clear) Symbol */}
                {selectedAnswer === index &&
                index !== currentQuestion.correctAnswerIndex ? (
                  <View style={styles.clear}>
                    <MaterialIcons name="clear" size={30} color="white" />
                  </View>
                ) : null}
              </Pressable>
            </View>
          ))}
        </View>
      </View>
      {index + 1 > data.length - 2 ? (
        <Pressable
          style={{ position: "absolute", bottom: "55%", right: 10 }}
          onPress={() => {
            navigation.navigate(props.results, { score: score });
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
      ) : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", right: 10 }}
          onPress={() => {
            {
              selectedAnswer == null
                ? null
                : (setIndex(index + 1), setDisabled(false));
            }
            // if (guesses == currentQuestion.num) {
            //   setIndex(index + 1);
            //   restartGuess();
            // }
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
    </View>
  );
};

export default QuizTemplate;
