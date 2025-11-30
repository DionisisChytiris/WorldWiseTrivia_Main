import { View, Text, Image, Pressable, ImageSourcePropType } from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import logger from "../../../../../utils/logger";

interface FlagQuestion {
  capital: string;
  country: string;
  correctAnswerIndex: number;
  options: string[];
  flag?: ImageSourcePropType;
}

interface FlagTemplateProps {
  flagsData: FlagQuestion[];
  flagIndex: number;
  onAnswerSelect?: (isCorrect: boolean) => void;
  onNext?: () => void;
}

const FlagTemplate: React.FC<FlagTemplateProps> = (props) => {
  const [score, setScore] = useState<number>(0);
  const { colors } = useTheme();
  const DataFlags = props.flagsData;
  const [index, setIndex] = useState<number>(props.flagIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const currentQuestion = DataFlags[index];
  const [show, setShow] = useState<boolean | null>(null);
  const [img, setImg] = useState(styles.img);
  const [answerStatus, setAnswerStatus] = useState<boolean | null>(null);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion?.correctAnswerIndex) {
        setScore((score) => score + 10);
        setAnswerStatus(true);
        logger.debug("Correct answer selected");
      } else {
        setAnswerStatus(true);
        setShow(true);
        setImg(styles.img1);
        logger.debug("Wrong answer selected");
      }
    } else {
      setAnswerStatus(null);
      setShow(null);
      setImg(styles.img);
    }
  }, [selectedAnswer, currentQuestion]);

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
      {currentQuestion.flag && (
        <Image source={currentQuestion.flag} style={styles.flagImage} />
      )}
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, idx) => (
          <Pressable
            key={idx}
            onPress={() => setSelectedAnswer(idx)}
            style={[
              styles.optionButton,
              selectedAnswer === idx && styles.selectedOption,
            ]}
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}
      </View>
      {answerStatus !== null && (
        <View style={styles.feedbackContainer}>
          {answerStatus ? (
            <MaterialIcons name="check-circle" size={24} color="green" />
          ) : (
            <MaterialIcons name="cancel" size={24} color="red" />
          )}
        </View>
      )}
    </>
  );
};

export default FlagTemplate;

