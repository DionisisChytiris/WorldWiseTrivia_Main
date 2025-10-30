import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import QuizTemplate from "../Templates/components/QuizTemplate";
import { useAppSelector, useAppDispatch } from "../../../ReduxSetUp/store";
import {
  decrementCoins,
  saveCoins,
} from "../../../ReduxSetUp/CoinsSlice/coinsSlice";
import {
  loadQuizLockState,
  setQuizLockMixed,
} from "../../../ReduxSetUp/QuizLockState/MixedQuizLockSlice";
import Quizzes from '../../../data/mixedQuestions/MixedQuizHome'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

//   {
//     id: "1",
//     quiz: "Quiz1",
//     title: "1",
//     image: require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp"),
//     price: 0,
//   },
//   {
//     id: "2",
//     quiz: "Quiz2",
//     title: "2",
//     image: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
//     price: 50,
//   },
//   {
//     id: "3",
//     quiz: "Quiz3",
//     title: "3",
//     image: require("../../../assets/WorldMonuments/Oceania/Gold_Coast.jpg"),
//     price: 50,
//   },
//   {
//     id: "4",
//     quiz: "Quiz4",
//     title: "4",
//     image: require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp"),
//     price: 50,
//   },
//   {
//     id: "5",
//     quiz: "Quiz5",
//     title: "5",
//     image: require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp"),
//     price: 50,
//   },
//   {
//     id: "6",
//     quiz: "Quiz6",
//     title: "6",
//     image: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
//     price: 50,
//   },
//   {
//     id: "7",
//     quiz: "Quiz7",
//     title: "7",
//     image: require("../../../assets/WorldMonuments/USA/Empire-State-Building.jpg"),
//     price: 50,
//   },
//   {
//     id: "8",
//     quiz: "Quiz8",
//     title: "8",
//     image: require("../../../assets/NaturalMnt/Europe/eyelake.jpg"),
//     price: 50,
//   },
//   {
//     id: "9",
//     quiz: "Quiz9",
//     title: "9",
//     image: require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp"),
//     price: 50,
//   },
//   {
//     id: "10",
//     quiz: "Quiz10",
//     title: "10",
//     image: require("../../../assets/WorldMonuments/Europe/cathedralMilan.png"),
//     price: 50,
//   },
// ];

// const QuizTemplate = (props) => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const [test, setTest] = useState(styles.button);
//   return (
//     <Pressable
//       key={props.id}
//       onPressIn={() => setTest(styles.button1)}
//       onPressOut={() => (
//         navigation.navigate(props.quiz), setTest(styles.button)
//       )}
//       style={test}
//     >
//       <Image
//         source={props.image}
//         style={{
//           width: windowHeight> 900 ?  (windowHeight>1100?  250 : (windowHeight>1000? 180:130)): 120,
//           height: windowHeight> 900 ? (windowHeight> 1100? 150: (windowHeight>1000? 120: 85)) : "100%",
//           borderRadius: 10,
//           opacity: 0.7,
//         }}
//         resizeMode="cover"
//       />
//       <View style={{ position: "absolute", bottom: 10 }}>
//         <Text style={{ color: "white", fontWeight: "bold", opacity: 1, fontSize: windowHeight>1000? windowHeight>1100? 26:18: 14 }}>
//           {t("quiz")} {props.title}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

const MixedQstsQuizHome = () => {
  const { colors } = useTheme();
  const coins = useAppSelector((state) => state.coins.coins);
  const quizLocks = useAppSelector((state) => state.quizLockMixed);
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
      dispatch(setQuizLockNaturalMnt({ id, locked: false }));
    } else {
      // Simulate “watch ad” by unlocking immediately for testing
      Alert.alert(
        "Not enough coins",
        "You don't have enough coins. Unlocking for testing purposes.",
        [
          {
            text: "OK",
            onPress: () => dispatch(setQuizLock({ id, locked: false })),
          },
        ]
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
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
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
      <Text style={styles.coins}>💰 Coins: {coins}</Text>
      {/* <ScrollView style={{backgroundColor: 'yellow'}}> */}
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
        {/* <View
          style={{
            width: "50%",
            gap:
              windowHeight > 900
                ? windowHeight > 1000
                  ? windowHeight > 1100
                    ? 100
                    : 50
                  : 20
                : 20,
          }}
        >
          <QuizTemplate
            quiz="Quiz1"
            title="1"
            image={require("../../../assets/NaturalMnt/America/Antelope-Canyon.webp")}
          />
          <QuizTemplate
            quiz="Quiz3"
            title="3"
            image={require("../../../assets/WorldMonuments/Oceania/Gold_Coast.jpg")}
          />
          <QuizTemplate
            quiz="Quiz5"
            title="5"
            image={require("../../../assets/NaturalMnt/Africa/CapeofGoodHope.webp")}
          />
          <QuizTemplate
            quiz="Quiz7"
            title="7"
            image={require("../../../assets/WorldMonuments/USA/Empire-State-Building.jpg")}
          />
          <QuizTemplate
            quiz="Quiz9"
            title="9"
            image={require("../../../assets/NaturalMnt/Europe/CliffsofMoher.webp")}
          />
        </View> */}
        {/* <View
          style={{
            width: "50%",
            marginTop: 70,
            marginLeft: 20,
            gap:
              windowHeight > 900
                ? windowHeight > 1000
                  ? windowHeight > 1100
                    ? 100
                    : 50
                  : 20
                : 20,
          }}
        >
          <QuizTemplate
            quiz="Quiz2"
            title="2"
            image={require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg")}
          />
          <QuizTemplate
            quiz="Quiz4"
            title="4"
            image={require("../../../assets/NaturalMnt/America/Great-Blue-Hole.webp")}
          />
          <QuizTemplate
            quiz="Quiz6"
            title="6"
            image={require("../../../assets/WorldMonuments/Europe/Acropolis.webp")}
          />
          <QuizTemplate
            quiz="Quiz8"
            title="8"
            image={require("../../../assets/NaturalMnt/Europe/eyelake.jpg")}
          />
          <QuizTemplate
            quiz="Quiz10"
            title="10"
            image={require("../../../assets/WorldMonuments/Europe/cathedralMilan.png")}
          />
        </View> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default MixedQstsQuizHome;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    flex: 1,
  },
  coins: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
   quizBtnBox: {
     width: windowHeight > 1100 ? "55%" : windowHeight > 1000 ? "50%" : "60%",
     height: windowHeight / 1.4,
     flexDirection: "row",
     alignItems: "center",
     gap: 20,
   },
   quizBtnBoxLeft: { width: "50%", gap: windowHeight > 1000 ? 60 :20 },
   quizBtnBoxRight: { width: "50%", marginTop: 70, marginLeft: 20, gap: windowHeight > 1000 ? 60 :20 },
  // quizBtnBox: {
  //   width:
  //     windowHeight > 900
  //       ? windowHeight > 1000
  //         ? windowHeight > 1100
  //           ? "55%"
  //           : "50%"
  //         : "60%"
  //       : "65%",
  //   // height: windowHeight / 1.4,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyItems: "center",
  //   // margin: 'auto'
  // },
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
  // button: {
  //   // width: "85%",
  //   width: "85%",
  //   height: 80,
  //   // height: windowHeight> 900 ? 120 :80,
  //   margin: "2%",
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   opacity: 1,
  // },
  // button1: {
  //   width: "85%",
  //   height: 80,
  //   margin: "2%",
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   opacity: 0.4,
  // },
});
