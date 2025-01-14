import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Vibration,
  Animated,
} from "react-native";
import PhoneHelpOption from "../Templates/components/PhoneHelpOption";
import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import { MaterialIcons, Zocial } from "@expo/vector-icons";
import { styles } from "../styles";
import { useAppSelector } from "../../../ReduxSetUp/store";
import { Audio } from "expo-av";
import BrokenHeart from "./components/BrokenHeart";
import SuccessAnimation from "./components/SuccessAnimation";
import FailAnimation from "./components/FailAnimation";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const QuizMainTemplate = (props) => {
  const boolean = useAppSelector((state) => state.boolean.value);
  const soundActive = useAppSelector((state) => state.soundActive.value);
  const isBoolean = boolean.toString();
  const navigation = useNavigation();
  const [score, setScore] = React.useState(0);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const data = props.dataQuiz;
  // Filter existing list for retrieving specific items, lines 17,18
  const condition = (item) => item.status == props.status;
  const filterdData = data.filter(condition);
  const [index, setIndex] = useState(0);
  // const currentQuestion = data[index];
  const currentQuestion = filterdData[index];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [show, setShow] = useState(null);
  const [showHeart, setShowHeart] = useState(false);
  const [img, setImg] = useState(styles.img);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [disabled, setDisabled] = useState(null);
  const [disabled1, setDisabled1] = useState(null);
  const [guesses, setGuesses] = useState(0);
  const [heart, setHeart] = useState(["❤️", "❤️", "❤️"]);
  const [apple, setApple] = useState(["🍎", "🍎", "🍎"]);
  const [hint, setHint] = useState(3);
  const status = props.status;
  // const [isVib, setIsVib] = useState(true)

  // const [correctSound, setCorrectSound] = useState();
  async function CorrectPlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/correct1.wav")
      // require("../../../assets/drumroll.mp3")
    );
    // setCorrectSound(correctSound);
    await sound.setVolumeAsync(0.3);
    await sound.playAsync();
  }
  // useEffect(() => {
  //   return correctSound ? () => correctSound.uploadAsync() : undefined;
  // }, [correctSound]);

  // const [wrongSound, setWrongSound] = useState();
  async function WrongPlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/error.mp3")
    );
    // setWrongSound(wrongSound);
    await sound.setVolumeAsync(0.3);
    await sound.playAsync();
  }
  // useEffect(() => {
  //   return wrongSound ? () => wrongSound.uploadAsync() : undefined;
  // }, [wrongSound]);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion?.correctAnswerIndex) {
        setScore((score) => score + 10);
        setAnswerStatus(true);
        setDisabled(true);
        {
          boolean
            ? Vibration.vibrate([100, 50, 200, 100, 200, 100, 300])
            : null;
        }
        {
          soundActive ? null : CorrectPlaySound();
        }
        // CorrectPlaySound()
      } else {
        setDisabled(true);
        setAnswerStatus(true);
        setShow(true);
        setImg(styles.img1);
        setShowHeart(true);
        removeHeart();
        {
          boolean ? Vibration.vibrate() : null;
        }
        {
          soundActive ? null : WrongPlaySound();
        }
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

  // Guess Quiz functions
  const letterSelectFunction = (ltr) => {
    if (!chosenLetters.includes(ltr)) {
      setChosenLetters([...chosenLetters, ltr]);

      if (currentQuestion.word.includes(ltr)) {
        setGuesses(guesses + 1);
      } else {
        removeApple();
      }
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
        }}
        style={stylesMain.selectLetter}
      >
        <Text style={{ margin: 1 }}>
          {chosenLetters.includes(letter) ? "" : letter}
        </Text>
      </Pressable>
    ));
  };

  useEffect(() => {
    if (guesses == currentQuestion.num) {
      setAnswerStatus(true);
      setScore(score + 10);
      setDisabled1(true);
      setShow(true);
    }
  }, [guesses]);

  const restartGuess = () => {
    setChosenLetters([]);
    setGuesses(0);
    setHint(3);
    setShow(null);
    setDisabled1(false);
  };

  const removeHeart = () => {
    const newArray = heart.length - 1;
    heart.pop(newArray);
    {
      newArray === 0 && navigation.navigate(props.loseScreen, { score: score });
    }
  };

  const removeApple = () => {
    const newApple = apple.length - 1;
    apple.pop(newApple);
    {
      newApple === 0 && removeHeart();
      newApple === 0 && (setIndex(index + 1), restartGuess(), restartApple());
    }
  };

  const hintFunction = () => {
    if (hint > 0) {
      const hiddenLetterIndex = currentQuestion.word
        .split("")
        .findIndex((letter) => !chosenLetters.includes(letter));
      setChosenLetters([
        ...chosenLetters,
        currentQuestion.word[hiddenLetterIndex],
      ]);
      setHint(hint - 1);
      setGuesses(guesses + 1);
    }
  };
  // const appleRestart = ["🍎", "🍎", "🍎"];

  const restartApple = () => {
    const appleRestart = ["🍎", "🍎", "🍎"];
    return setApple(appleRestart);
  };

  // Arrange dataLength according the filteredData list
  const dt = data.length - 1;
  const filteredLength = dt / 3;

  // 50/50 logic
  const [fiftyFifty, setFiftyFifty] = useState([]);
  const [fiftyFifty2, setFiftyFifty2] = useState([]);
  // const [soundRoll1, setSoundRoll1] = useState();
  // const [soundRoll2, setSoundRoll2] = useState();
  const [displayNone1, setDisplayNone1] = useState(stylesMain.fiftyfiftybutton);
  const [displayNone2, setDisplayNone2] = useState(stylesMain.fiftyfiftybutton);

  const soundFiles = [
    require("../../../assets/fiftyfifty.mp3"),
    require("../../../assets/timpani1.mp3"),
    require("../../../assets/cymbal.mp3"), // Add more sounds as needed
  ];

  async function playSoundRoll1() {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    const selectedSound = soundFiles[randomIndex];

    const { sound } = await Audio.Sound.createAsync(
      selectedSound
      // require("../../../assets/fiftyfifty.mp3")
    );
    // setSoundRoll1(soundRoll1);
    await sound.setVolumeAsync(0.3);
    await sound.playAsync(); // Play the sound
  }
  async function playSoundRoll2() {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    const selectedSound = soundFiles[randomIndex];
    const { sound } = await Audio.Sound.createAsync(
      selectedSound
      // require("../../../assets/fiftyfifty.mp3")
    );
    // setSoundRoll2(soundRoll2);
    await sound.setVolumeAsync(0.3);
    await sound.playAsync(); // Play the sound
  }

  // useEffect(() => {
  //   return soundRoll1
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [soundRoll1]);

  // useEffect(() => {
  //   return soundRoll2
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [soundRoll2]);

  //1 word-4 images
  const handleFiftyFifty = async () => {
    {
      soundActive ? null : await playSoundRoll1();
    }

    {
      soundActive
        ? setTimeout(() => {
            const wrongAnswers = currentQuestion.options
              .map((option, index) => index)
              .filter((index) => index !== currentQuestion.correctAnswerIndex);

            const randomWrongAnswers = wrongAnswers
              .sort(() => 0.5 - Math.random())
              .slice(0, 2);

            setFiftyFifty(randomWrongAnswers);
          }, 200)
        : setTimeout(() => {
            const wrongAnswers = currentQuestion.options
              .map((option, index) => index)
              .filter((index) => index !== currentQuestion.correctAnswerIndex);

            const randomWrongAnswers = wrongAnswers
              .sort(() => 0.5 - Math.random())
              .slice(0, 2);

            setFiftyFifty(randomWrongAnswers);
          }, 1400);
    }
    {
      setTimeout(() => {
        setDisplayNone1(stylesMain.testFifty);
      }, 100);
    }
  };

  // 1 image- 4 words
  const handleFiftyFifty2 = async () => {
    {
      soundActive ? null : await playSoundRoll2();
    }
    {
      soundActive
        ? setTimeout(() => {
            const wrongAnswers = currentQuestion.options
              .map((option, index) => index)
              .filter((index) => index !== currentQuestion.correctAnswerIndex);

            const randomWrongAnswers = wrongAnswers
              .sort(() => 0.5 - Math.random())
              .slice(0, 2);

            setFiftyFifty2(randomWrongAnswers);
          }, 200)
        : setTimeout(() => {
            const wrongAnswers = currentQuestion.options
              .map((option, index) => index)
              .filter((index) => index !== currentQuestion.correctAnswerIndex);

            const randomWrongAnswers = wrongAnswers
              .sort(() => 0.5 - Math.random())
              .slice(0, 2);

            setFiftyFifty2(randomWrongAnswers);
          }, 1400);
    }
    {
      setTimeout(() => {
        setDisplayNone2(stylesMain.testFifty);
      }, 100);
    }
  };

  const answerAnims = useRef([
    new Animated.Value(0), // Box 0
    new Animated.Value(0), // Box 1
    new Animated.Value(0), // Box 2
    new Animated.Value(0), // Box 3
  ]).current;

  useEffect(() => {
    answerAnims.forEach((anim) => anim.setValue(0));
    setTimeout(() => {
      Animated.stagger(
        150, // Delay between each animation
        answerAnims.map((anim) =>
          Animated.timing(anim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          })
        )
      ).start();
    }, 100);
  }, [index, answerAnims]);

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      {/* Header */}
      <View style={{ flexDirection: "row", gap: 30 }}>
        <Text style={{ color: colors.text }}>
          {index + 1} / {filteredLength}
        </Text>
        <Text style={{ color: colors.text, fontWeight: "500" }}>
          {t("quiz")} {props.quizName}
        </Text>
        <Text style={{ color: colors.text }}>
          {t("score")} {score}
        </Text>
        <Text style={{}}>{heart}</Text>
      </View>

      {/* Show broken heart when you lose a life */}
      {showHeart ? <BrokenHeart /> : null}

      {/* Quiz Template */}
      <View style={styles.quizContainer}>
        {/* Guess Quiz */}
        {currentQuestion.status === status && status === "Guess" && (
          /* {currentQuestion.status  ==="Guess" ? ( */
          <View>
            <View style={styles.guessContainer}>
              <View style={{ position: "absolute", top: 5, left: 15 }}>
                <Text>
                  <Text style={{}}>{apple}</Text>
                </Text>
              </View>
              <View style={{ position: "absolute", top: 5, right: 15 }}>
                <Text style={{ color: colors.textDrawer }}>Hints: {hint}</Text>
              </View>
              {/* <Text>{guesses}</Text> */}
              <View style={{ position: "absolute", top: 25 }}>
                <Text style={{ color: colors.text }}>
                  {currentQuestion.country}
                </Text>
              </View>
              <View style={{ marginTop: 50 }}>
                <Image source={currentQuestion.img} style={styles.guessImg} />
              </View>
              <View
                style={
                  guesses === currentQuestion.num
                    ? styles.guessWordBox
                    : styles.guessWordBox1
                }
              >
                {Array.from(currentQuestion.word).map((letter, index) => (
                  <View key={index} style={styles.guessArrayView}>
                    <Text
                      style={
                        guesses === currentQuestion.num
                          ? { fontSize: 18, color: "white" }
                          : { fontSize: 18, color: "gray" }
                      }
                    >
                      {chosenLetters.includes(letter) ? letter : <Text>_</Text>}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={stylesMain.hintLetterbox}>
                {show ? null : (
                  <Pressable
                    style={stylesMain.hintButton}
                    onPress={hintFunction}
                    disabled={disabled1}
                  >
                    <Text style={{ color: "#f5f5f5" }}>Hint</Text>
                  </Pressable>
                )}
                <View style={styles.guessDisplay}>
                  <DisplayLettersFunction />
                </View>
              </View>
            </View>
          </View>
        )}

        {/* <GuessTemplate guessData={data} index={index}  /> */}

        {/* Flags Quiz (1WORD 4IMAGES)*/}
        {/* {currentQuestion.status === "Flags"  && (  */}
        {currentQuestion.status === status && status === "Flags" && (
          <>
            {/* Testing Material to help user to find correct answer */}
            {currentQuestion.phoneHelp === "" ? null : (
              <PhoneHelpOption helpText={currentQuestion.phoneHelp} />
            )}

            <Pressable onPress={handleFiftyFifty} style={displayNone1}>
              <View>
                <Text
                  style={{
                    fontSize: height > 1000 ? 18 : 13,
                  }}
                >
                  50%
                </Text>
              </View>
            </Pressable>

            <Text style={[styles.smTitle, { color: colors.text }]}>
              {currentQuestion.capital}
            </Text>
            <Text style={[styles.LgTitle, { color: colors.text }]}>
              {currentQuestion.country}
            </Text>
            <View style={styles.box}>
              {currentQuestion?.options.map((item, index) => (
                <View style={styles.flagBoxMedium} key={index}>
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAnswer(index);
                    }}
                    disabled={disabled || fiftyFifty.includes(index)}
                    style={[
                      fiftyFifty.includes(index)
                        ? { opacity: 0.4 }
                        : { opacity: 1 } ||
                          (selectedAnswer === index &&
                            index === currentQuestion.correctAnswerIndex)
                        ? styles.box1
                        : selectedAnswer !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer === index &&
                          index !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : styles.box2,
                    ]}
                  >
                    <Animated.View
                      style={{
                        transform: [
                          {
                            scale: answerAnims[index].interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.5, 1],
                            }),
                          },
                        ],
                      }}
                    >
                      <Image source={item.img} style={img} />
                      {show ? (
                        <Text style={stylesMain.showCountry1}>
                          {item.country}
                        </Text>
                      ) : null}
                    </Animated.View>
                    {/* Correct (Tick) Symbol */}
                    {selectedAnswer === index &&
                    index === currentQuestion.correctAnswerIndex ? (
                      <SuccessAnimation />
                    ) : null}
                    {/* Wrong (clear) Symbol */}
                    {selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex ? (
                      <FailAnimation />
                    ) : null}
                    {show
                      ? index === currentQuestion.correctAnswerIndex && (
                          <View style={styles.tick}>
                            <MaterialIcons
                              name="done"
                              size={30}
                              color="white"
                            />
                          </View>
                        )
                      : null}
                  </Pressable>
                </View>
              ))}
            </View>
          </>
        )}

        {/* Capital Quiz (1IMAGE 4WORDS)*/}
        {/* {currentQuestion.status === "Capitals" && ( */}
        {currentQuestion.status === status && status === "Capitals" && (
          <>
            {/* Testing Material to help user to find correct answer */}
            {currentQuestion.phoneHelp === "" ? null : (
              <PhoneHelpOption helpText={currentQuestion.phoneHelp} />
            )}
            <Pressable
              onPress={handleFiftyFifty2}
              // onPress={()=>alert('hey')}
              style={[displayNone2, { zIndex: 999 }]}
            >
              <View>
                <Text style={{ fontSize: 16 }}>50%</Text>
              </View>
            </Pressable>

            <Text style={[styles.smTitle, { color: colors.text }]}>
              {currentQuestion.country}
            </Text>

            {!currentQuestion.image ? (
              <Text style={[styles.LgTitle, { color: colors.text }]}>
                {currentQuestion.country}
              </Text>
            ) : (
              <View>
                <Image
                  source={currentQuestion.image}
                  style={
                    currentQuestion.img === "L"
                      ? stylesMain.imageQuiz1
                      : stylesMain.imageQuiz
                  }
                />
              </View>
            )}
            <View style={styles.boxCapitals}>
              {currentQuestion?.options.map((item, index) => (
                <View style={styles.flagBox} key={index}>
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAnswer(index);
                    }}
                    disabled={disabled || fiftyFifty2.includes(index)}
                    style={[
                      fiftyFifty2.includes(index)
                        ? { opacity: 0.4 }
                        : { opacity: 1 } ||
                          (selectedAnswer === index &&
                            index === currentQuestion.correctAnswerIndex)
                        ? styles.box1
                        : selectedAnswer !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : selectedAnswer === index &&
                          index !== currentQuestion.correctAnswerIndex
                        ? styles.box1
                        : styles.box2,
                    ]}
                  >
                    {/* <View>
                      <Image source={item.img} style={img} />
                    </View> */}
                    <View
                      style={[
                        img,
                        {
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: colors.bgCapitalsCnt,
                          width: "100%",
                          height: "100%",
                          borderRadius: 10,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          fontSize:
                            item.capital.length > 19
                              ? 14
                              : height > 980
                              ? 19
                              : 15,
                          fontWeight: "500",
                          color: colors.text,
                          textAlign: "center",
                          paddingHorizontal: 20,
                        }}
                      >
                        {item.capital}
                      </Text>
                      {show ? (
                        <Text
                          style={{
                            color: colors.text,
                            position: "absolute",
                            bottom: 10,
                            left: 10,
                          }}
                        >
                          {item.country}
                        </Text>
                      ) : null}
                    </View>
                    {/* Correct (Tick) Symbol */}
                    {selectedAnswer === index &&
                    index === currentQuestion.correctAnswerIndex ? (
                      <SuccessAnimation />
                    ) : null}
                    {/* Wrong (clear) Symbol */}
                    {selectedAnswer === index &&
                    index !== currentQuestion.correctAnswerIndex ? (
                      <FailAnimation />
                    ) : null}
                    {show
                      ? index === currentQuestion.correctAnswerIndex && (
                          <View style={styles.tick}>
                            <MaterialIcons
                              name="done"
                              size={30}
                              color="white"
                            />
                          </View>
                        )
                      : null}
                  </Pressable>
                </View>
              ))}
            </View>
          </>
        )}
      </View>

      {/* Arrow Right*/}
      {/* {index + 1 > data.length - 2 ? ( */}
      <>
        {index + 1 > filteredLength - 1 ? (
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
                  : (setIndex(index + 1), restartApple(), setDisabled(false)),
                  setShowHeart(false),
                  setFiftyFifty([]);
                setFiftyFifty2([]);
                setDisplayNone1(stylesMain.fiftyfiftybutton);
                setDisplayNone2(stylesMain.fiftyfiftybutton);
                // console.log(fiftyFifty);
              }
              if (guesses == currentQuestion.num) {
                setIndex(index + 1);
                restartGuess();
                restartApple();
              }
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
      </>

      {/* Arrow Left*/}
      {/* {index == 0 ? null : (
        <Pressable
          style={{ position: "absolute", bottom: "55%", left: 10 }}
          onPress={() => {
            {
              score === 0 ? null : setScore(score - 10);
            }
            setIndex(index - 1);
            restartGuess();
            restartApple();
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={colors.text}
          />
        </Pressable>
      )} */}
    </View>
  );
};

export default QuizMainTemplate;

const stylesMain = StyleSheet.create({
  fadedOption: {
    opacity: 0.4,
  },
  fiftyfiftybutton: {
    position: "absolute",
    left: height > 1000 ? 85 : 65,
    top: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightgrey",
    justifyContent: "center",
    width: height > 1000 ? 60 : 40,
    height: height > 1000 ? 60 : 40,
    borderRadius: 25,
    zIndex: 999,
  },
  testFifty: {
    display: "none",
  },
  selectLetter: {
    backgroundColor: "white",
    width: 50,
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  hintLetterbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  hintButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  showCountry1: {
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  imageQuiz1: {
    width: height > 980 ? (height > 1100 ? 440 : 400) : 280,
    height: height > 980 ? (height > 1100 ? 310 : 260) : 190,
    borderRadius: 20,
    marginTop: height > 880 ? (height > 1100 ? 120 : 110) : 80,
  },
  imageQuiz: {
    width: height > 980 ? 280 : 200,
    height: height > 980 ? 180 : 140,
    borderRadius: 20,
    marginTop: height > 880 ? (height > 1100 ? 170 : 130) : 100,
  },
  lottiestyle: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 0,
    right: -30,
  },
});
