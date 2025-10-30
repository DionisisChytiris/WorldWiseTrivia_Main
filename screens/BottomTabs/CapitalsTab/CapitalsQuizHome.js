import React, { useEffect, useRef} from "react";
import { View, Text, StyleSheet, Dimensions, Alert, Animated, Easing, ImageBackground } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import QuizTemplate from "../Templates/components/QuizTemplate";
import { useAppSelector, useAppDispatch } from "../../../ReduxSetUp/store";
import { decrementCoins, saveCoins } from "../../../ReduxSetUp/CoinsSlice/coinsSlice";
import { loadQuizLockState, setQuizLock } from "../../../ReduxSetUp/QuizLockState/CapitalsQuizLockSlice";
import Quizzes from '../../../data/capitals/CapitalsQuizHome'
import { useSoundEffect } from "../../../Hooks/useSoundEffect";

const { height: windowHeight, width: windowWidth } = Dimensions.get("window");


const CapitalsQuizHome = () => {
  const { colors } = useTheme();
  const coins = useAppSelector((state) => state.coins.coins);
  const quizLocks = useAppSelector((state) => state.quizLockCapitals);
  const dispatch = useAppDispatch();

  // Load quiz locks on mount
  useEffect(() => {
    dispatch(loadQuizLockState());
  }, [dispatch]);

  // Unlock quiz via coins or simulation
  const unlockQuiz = (id, price) => {
    if (coins >= price) {
      dispatch(decrementCoins(price));
      dispatch(saveCoins(coins - price));
      dispatch(setQuizLock({ id, locked: false }));
    } else {
      // Simulate “watch ad” by unlocking immediately for testing
      Alert.alert(
        "Not enough coins",
        "You don't have enough coins. Unlocking for testing purposes.",
        [{ text: "OK", onPress: () => dispatch(setQuizLock({ id, locked: false })) }]
      );
    }
  };

  // Combine quiz lock state
  const quizzesWithLock = Quizzes.map((q) => ({
    ...q,
    locked: quizLocks?.[`quiz${q.id}`] ?? true,
  }));

  const oddQuizzes = quizzesWithLock.filter((q) => Number(q.id) % 2 !== 0);
  const evenQuizzes = quizzesWithLock.filter((q) => Number(q.id) % 2 === 0);

  const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;
  
    useEffect(() => {
      const translate = () => {
        translateValue.setValue(initialValue);
        Animated.timing(translateValue, {
          toValue: 1,
          duration: 10000,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => translate());
      };
  
      translate();
    }, [translateValue]);
  
    const translateAnimation = translateValue.interpolate({
      inputRange: [0, 0.7, 0.7, 0.7, 1],
      outputRange: [-281, 0, 281, 0, -281],
    });
  
    const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
  
    
   const GetCoinsSound = useSoundEffect(
      require("../../../assets/Sounds/coinsDrop.wav")
    );

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <Text style={styles.coins}>💰 Coins: {coins}</Text>
       <AnimatedImage
        resizeMode="repeat"
        style={[
          styles.background,
          {
            transform: [
              {
                translateX: translateAnimation,
              },
              {
                translateY: 0,
              },
            ],
          },
        ]}
        source={require("../../../assets/more/worldMap.png")}
      />


      <View style={styles.quizBtnBox}>
        <View style={styles.quizBtnBoxLeft}>
          {oddQuizzes.map((item) => (
            <QuizTemplate
              key={item.id}
              id={item.id}
              quiz={item.quiz}
              title={item.title}
              image={item.image}
              locked={item.locked}
              price={item.price}
              coins={coins}
              unlockQuiz={() => {unlockQuiz(item.id, item.price), GetCoinsSound()}}
             
            />
          ))}
        </View>

        <View style={styles.quizBtnBoxRight}>
          {evenQuizzes.map((item) => (
            <QuizTemplate
              key={item.id}
              id={item.id}
              quiz={item.quiz}
              title={item.title}
              image={item.image}
              locked={item.locked}
              price={item.price}
              coins={coins}
              unlockQuiz={() => {unlockQuiz(item.id, item.price), GetCoinsSound()}}
             
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CapitalsQuizHome;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 20 },
  coins: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  quizBtnBox: {
    width: windowHeight > 1100 ? "55%" : windowHeight > 1000 ? "50%" : "60%",
    height: windowHeight / 1.4,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  quizBtnBoxLeft: { width: "50%", gap: windowHeight > 1000 ? 60 :  20 },
  quizBtnBoxRight: { width: "50%", marginTop: 70, marginLeft: 20, gap: windowHeight > 1000 ? 60 : 20 },
  background: {
    position: "absolute",
    width: windowWidth * 2,
    height: windowHeight / 4.7,
    top: windowHeight / 1.7,
    opacity: 0.4,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
    ],
  },
});
