import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import QuizTemplate from "../Templates/components/QuizTemplate"; // your component
import { useNavigation } from "@react-navigation/native";
import { useAppSelector, useAppDispatch } from "../../../ReduxSetUp/store";
import { decrementCoins, saveCoins } from "../../../ReduxSetUp/CoinsSlice/coinsSlice";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

// Quiz data with lock info
const Quizzes = [
  {
    id: "1",
    quiz: "Quiz1",
    title: "1",
    image: require("../../../assets/WorldMonuments/Europe/eiffelTower.webp"),
    locked: false,
    price: 0,
  },
  {
    id: "2",
    quiz: "Quiz2",
    title: "2",
    image: require("../../../assets/WorldMonuments/Asia/the-grand-palace.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "3",
    quiz: "Quiz3",
    title: "3",
    image: require("../../../assets/WorldMonuments/Europe/colosseum.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "4",
    quiz: "Quiz4",
    title: "4",
    image: require("../../../assets/WorldMonuments/USA/capitol-building.png"),
    locked: true,
    price: 50,
  },
  {
    id: "5",
    quiz: "Quiz5",
    title: "5",
    image: require("../../../assets/WorldMonuments/Africa/Pyramids.png"),
    locked: true,
    price: 50,
  },
  {
    id: "6",
    quiz: "Quiz6",
    title: "6",
    image: require("../../../assets/WorldMonuments/Europe/Acropolis.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "7",
    quiz: "Quiz7",
    title: "7",
    image: require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "8",
    quiz: "Quiz8",
    title: "8",
    image: require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "9",
    quiz: "Quiz9",
    title: "9",
    image: require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.webp"),
    locked: true,
    price: 50,
  },
  {
    id: "10",
    quiz: "Quiz10",
    title: "10",
    image: require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg"),
    locked: true,
    price: 50,
  },
];


const CapitalsQuizHome = () => {
  const { colors } = useTheme();;
  const coins = useAppSelector((state) => state.coins.coins);
  const dispatch = useAppDispatch();

  const [quizzes, setQuizzes] = useState(Quizzes);

  // Unlock quiz function
  const unlockQuiz = (id) => {
    setQuizzes((prev) => {
      const quizToUnlock = prev.find((q) => q.id === id);
      if (!quizToUnlock) {
        console.warn(`Quiz with id ${id} not found`);
        return prev;
      }

      if (coins >= quizToUnlock.price) {
        // ✅ Deduct coins globally (Redux)
        dispatch(decrementCoins(quizToUnlock.price));
        dispatch(saveCoins(coins - quizToUnlock.price))

        // ✅ Unlock quiz locally
        return prev.map((q) =>
          q.id === id ? { ...q, locked: false } : q
        );
      }

      return prev; // not enough coins
    });
  };

  const oddQuizzes = quizzes.filter((q) => Number(q.id) % 2 !== 0);
  const evenQuizzes = quizzes.filter((q) => Number(q.id) % 2 === 0);

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
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
              unlockQuiz={unlockQuiz}
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
              unlockQuiz={unlockQuiz}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CapitalsQuizHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  coins: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quizList: {
    paddingVertical: 20,
  },
  row: {
    justifyContent: "space-around",
    marginBottom: 20,
  },
  quizBtnBox: {
    width:
      windowHeight > 900
        ? windowHeight > 1000
          ? windowHeight > 1100
            ? "55%"
            : "50%"
          : "60%"
        : "65%",
    height: windowHeight / 1.4,
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    gap: 20,
  },
  quizBtnBoxLeft: {
    width: "50%",
    gap:
      windowHeight > 900
        ? windowHeight > 1000
          ? windowHeight > 1100
            ? 100
            : 50
          : 20
        : 20,
  },
  quizBtnBoxRight: {
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
  },
});

// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   Animated,
//   Easing
// } from "react-native";
// import React, { useRef, useEffect, useState } from "react";
// import { Dimensions } from "react-native";
// import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
// import QuizTemplate from "../Templates/components/QuizTemplate";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const QuizTempLocked = (props) => {
//   return (
//     <View>
//       <View style={{ position: "absolute", top: 10, left: 50, zIndex: 50 }}>
//         <Text style={{}}>🔒 50 coins</Text>
//       </View>
//       <View style={{ opacity: 0.4 }}>
//         <QuizTemplate
//           // quiz="Quiz2."
//           title={props.title}
//           image={props.image}
//         />
//       </View>
//     </View>
//   );
// };

// const CapitalsQuizHome = () => {
//   const { colors } = useTheme();
//   const initialValue = 0;
//   const translateValue = useRef(new Animated.Value(initialValue)).current;

//   useEffect(() => {
//     const translate = () => {
//       translateValue.setValue(initialValue);
//       Animated.timing(translateValue, {
//         toValue: 1,
//         duration: 20000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }).start(() => translate());
//     };

//     translate();
//   }, [translateValue]);

//   const translateAnimation = translateValue.interpolate({
//     inputRange: [0, 0.7, 0.7, 0.7, 1],
//     outputRange: [-281, 0, 281, 0, -281],
//   });

//   const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
//   const show = true;

//   return (
//     <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
//       <AnimatedImage
//         resizeMode="repeat"
//         style={[
//           styles.background,
//           {
//             transform: [
//               {
//                 translateX: translateAnimation,
//               },
//               {
//                 translateY: 0,
//               },
//             ],
//           },
//         ]}
//         source={require("../../../assets/more/worldMap.png")}
//       />
//       <View style={styles.quizBtnBox}>
//         <View style={styles.quizBtnBoxLeft}>
//           <QuizTemplate
//             quiz="Quiz1"
//             title="1"
//             image={require("../../../assets/WorldMonuments/Europe/eiffelTower.webp")}
//           />
//           <QuizTemplate
//             quiz="Quiz3"
//             title="3"
//             image={require("../../../assets/WorldMonuments/Europe/colosseum.webp")}
//           />
//           <QuizTemplate
//             quiz="Quiz5"
//             title="5"
//             image={require("../../../assets/WorldMonuments/Africa/Pyramids.png")}
//           />
//           <QuizTemplate
//             quiz="Quiz7"
//             title="7"
//             image={require("../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.webp")}
//           />
//           <QuizTemplate
//             quiz="Quiz9"
//             title="9"
//             image={require("../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.webp")}
//           />
//         </View>
//         <View style={styles.quizBtnBoxRight}>
//           {show ? (
//             <QuizTempLocked
//               title="2"
//               image={require("../../../assets/WorldMonuments/Asia/the-grand-palace.webp")}
//             />
//           ) : (
//             <QuizTemplate
//               quiz="Quiz2"
//               title="2"
//               image={require("../../../assets/WorldMonuments/Asia/the-grand-palace.webp")}
//             />
//           )}
//           <QuizTemplate
//             quiz="Quiz4"
//             title="4"
//             image={require("../../../assets/WorldMonuments/USA/capitol-building.png")}
//           />
//           <QuizTemplate
//             quiz="Quiz6"
//             title="6"
//             image={require("../../../assets/WorldMonuments/Europe/Acropolis.webp")}
//           />
//           <QuizTemplate
//             quiz="Quiz8"
//             title="8"
//             image={require("../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.webp")}
//           />
//           <QuizTemplate
//             quiz="Quiz10"
//             title="10"
//             image={require("../../../assets/WorldMonuments/Asia/forbidden-city.jpg")}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default CapitalsQuizHome;

// const styles = StyleSheet.create({
//   container: {
//     width: windowWidth,
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 15,
//     flex: 1,
//   },
//   quizBtnBox: {
//     width:
//       windowHeight > 900
//         ? windowHeight > 1000
//           ? windowHeight > 1100
//             ? "55%"
//             : "50%"
//           : "60%"
//         : "65%",
//     height: windowHeight / 1.4,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyItems: "center",
//     gap: 20,
//   },
//   quizBtnBoxLeft: {
//     width: "50%",
//     gap:
//       windowHeight > 900
//         ? windowHeight > 1000
//           ? windowHeight > 1100
//             ? 100
//             : 50
//           : 20
//         : 20,
//   },
//   quizBtnBoxRight: {
//     width: "50%",
//     marginTop: 70,
//     marginLeft: 20,
//     gap:
//       windowHeight > 900
//         ? windowHeight > 1000
//           ? windowHeight > 1100
//             ? 100
//             : 50
//           : 20
//         : 20,
//   },
//   background: {
//     position: "absolute",
//     width: windowWidth * 2,
//     height: windowHeight / 4.7,
//     top: windowHeight > 900 ? windowHeight / 1.8 : windowHeight / 2.1,
//     opacity: 0.4,
//     transform: [
//       {
//         translateX: 0,
//       },
//       {
//         translateY: 0,
//       },
//     ],
//   },
//   button: {
//     width: "85%",
//     height: 80,
//     margin: "2%",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     opacity: 1,
//   },
//   button1: {
//     width: "85%",
//     height: 80,
//     margin: "2%",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     opacity: 0.4,
//   },
// });
