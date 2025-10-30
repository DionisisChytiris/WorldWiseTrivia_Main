import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import QuizTemplate from "../Templates/components/QuizTemplate";
import { useAppSelector, useAppDispatch } from "../../../ReduxSetUp/store";
import { decrementCoins, saveCoins } from "../../../ReduxSetUp/CoinsSlice/coinsSlice";
import { loadQuizLockState, setQuizLockWorldMnt } from "../../../ReduxSetUp/QuizLockState/WorldMntQuizLockSlice";
import Quizzes from '../../../data/worldMonuments/WorldMonumentsHome'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// const Quizzes = [
//   { id: "1", quiz: "Quiz1", title: "1", image: require("../../../assets/WorldMonuments/Oceania/SydneyOperaHouse.webp"), price: 0 },
//   { id: "2", quiz: "Quiz2", title: "2", image: require("../../../assets/WorldMonuments/America/Jesus-Christ-The-Redeemer.png"), price: 50 },
//   { id: "3", quiz: "Quiz3", title: "3", image: require("../../../assets/WorldMonuments/Asia/easterIsland.webp"), price: 50 },
//   { id: "4", quiz: "Quiz4", title: "4", image: require("../../../assets/WorldMonuments/USA/Golden-Gate-San-Francisco.webp"), price: 50 },
//   { id: "5", quiz: "Quiz5", title: "5", image: require("../../../assets/WorldMonuments/America/MachuPicchu.webp"), price: 50 },
//   { id: "6", quiz: "Quiz6", title: "6", image: require("../../../assets/WorldMonuments/Europe/knossos.jpg"), price: 50 },
//   { id: "7", quiz: "Quiz7", title: "7", image: require("../../../assets/WorldMonuments/Europe/duomo-florence.webp"), price: 50 },
//   { id: "8", quiz: "Quiz8", title: "8", image: require("../../../assets/WorldMonuments/USA/statue-of-liberty.webp"), price: 50 },
//   { id: "9", quiz: "Quiz9", title: "9", image: require("../../../assets/WorldMonuments/Asia/Bagan.jpg"), price: 50 },
//   { id: "10", quiz: "Quiz10", title: "10", image: require("../../../assets/WorldMonuments/Asia/terracottArmy.webp"), price: 50 },
// ];

const WorldMonumentsHome = () => {
  const { colors } = useTheme();
  const coins = useAppSelector((state) => state.coins.coins);
    const quizLocks = useAppSelector((state) => state.quizLockWorldMnt);
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
        duration: 20000,
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

  return (
    // <ScrollView horizontal={true}>
    // {/* <View> */}
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      {/* <ImageBackground
          source={require("../../../assets/QuizScreen/capitals.png")}
          style={{ width: 1200, height: "100%" }}
        > */}
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
        source={require("../../../assets/more/worldlandmarks.webp")}
      />
       <Text style={styles.coins}>💰 Coins: {coins}</Text>
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
              unlockQuiz={() => unlockQuiz(item.id, item.price)}
             
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
              unlockQuiz={() => unlockQuiz(item.id, item.price)}
             
            />
          ))}
        </View>
      </View>

      {/* </ImageBackground> */}
    </View>
    // </ScrollView>
  );
};

export default WorldMonumentsHome;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    flex: 1,
  },
  container: { flex: 1, alignItems: "center", paddingTop: 20 },
  coins: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  quizBtnBox: {
    width: windowHeight > 1100 ? "55%" : windowHeight > 1000 ? "50%" : "60%",
    height: windowHeight / 1.4,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  quizBtnBoxLeft: { width: "50%", gap: windowHeight > 1000 ? 60 :20 },
  quizBtnBoxRight: { width: "50%", marginTop: 70, marginLeft: 20, gap:windowHeight > 1000 ? 60 : 20 },
  background: {
    position: "absolute",
    width: windowHeight > 900 ? windowWidth * 2 : windowWidth * 1,
    height: windowHeight > 900 ? windowHeight / 4.7 : windowHeight / 2.7,
    top: windowHeight > 900 ? windowHeight / 1.8 : windowHeight / 2.3,
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
  button: {
    width: "85%",
    height: 80,
    margin: "2%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  button1: {
    width: "85%",
    height: 80,
    margin: "2%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4,
  },
});
