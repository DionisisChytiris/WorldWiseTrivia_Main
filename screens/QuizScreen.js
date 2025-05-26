import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../utils/ThemeMode/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// type Props = {
//   page: any;
//   img: any;
//   text: string;
//   scores: number;
// };

// Category Template
const CategoryItem = ({ page, img, text }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [scale, setScale] = useState(1);

  return (
    <Pressable
      onPressIn={() => setScale(1.08)}
      onPressOut={() => (navigation.navigate(page), setScale(1))}
      style={[
        styles.button,
        {
          backgroundColor: colors.buttonContextQuiz,
          borderColor: colors.borderColor,
          borderWidth: 2,
          transform: [{ scale: scale }],
        },
      ]}
    >
      <View style={styles.buttonContext}>
        <Image style={styles.image} source={img} />
        <Text style={[styles.text, { color: colors.textDrawer }]}>{text}</Text>
      </View>
      {/* <View style={styles.progressBar}>
        <View
          style={[
            styles.progressBarColor,
            { width: `${Math.floor((scores / 100) * 100)}%` },
          ]}
        />
      </View> */}
    </Pressable>
  );
};

// MAIN FUNCTION
const QuizScreen = () => {
  // const navigation = useNavigation();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [score, setScore] = React.useState(0);
  const score1 = 90;

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("score").then((value) => {
        if (value != null) {
          let score = JSON.parse(value);
          setScore(score);
          console.log(score);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.container,
            { backgroundColor: colors.backgroundDrawer },
          ]}
        >
          <View style={styles.title}>
            <Text style={[styles.textTitle, { color: colors.textDrawer }]}>
              {t("categories")}
            </Text>
          </View>
          <View style={styles.content}>
            {/* Capitals */}
            <CategoryItem
              page="Capitals"
              // img={require("../assets/QuizScreen/lon.png")}
              img={require("../assets/more/capitals.webp")}
              text={t("capitals")}
              scores={score}
            />

            {/* Flags */}
            <CategoryItem
              page="Flags"
              img={require("../assets/Flags/flags.png")}
              // img={require("../assets/QuizScreen/flag.png")}
              text={t("flags")}
              scores={score1}
            />

            {/* World Monuments */}
            <CategoryItem
              page="WorldMonuments"
              // img={require("../assets/QuizScreen/monument.jpg")}
              img={require("../assets/WorldMonuments/worldmnt.webp")}
              // text={t("flags")}
              text={t("worldMonuments2")}
              scores={score1}
            />

            {/* Natural Monument */}
            <CategoryItem
              page="NaturalMonument"
              img={require("../assets/NaturalMnt/ntrmnt.webp")}
              // img={require("../assets/QuizScreen/naturalmnt.jpg")}
              text={t("naturalMonuments")}
              scores={score1}
            />

            {/* Science */}
            <CategoryItem
              page="MixedQuestions"
              img={require("../assets/more/mixed.webp")}
              // img={require("../assets/QuizScreen/science.jpg")}
              text={t("mixedQuestions")}
              scores={score1}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    height: height > 1000 ? 1200 : 1000,
    // height: "100%"
  },
  title: { marginTop: 25 },
  content: {
    marginTop: height > 960 ? 34 : height > 900 ? 50 : 20,
    // justifyContent: height > 960 ? "flex-start" : "center",
    justifyContent: "flex-start",
    // marginTop: 0,
    // justifyContent: "flex-start" ,
    // height: "100%",
    // gap:  0,
    gap: height > 1000 ? 10 : 0,
    height: height > 1000 ? 1000 : 700,
    flexWrap: "wrap",
    // backgroundColor: 'grey',
  },
  image: {
    width:
      height > 860 ? width * 0.26 : height < 800 ? width * 0.24 : width * 0.28,
    height:
      height > 900
        ? height > 1000
          ? height * 0.15
          : height * 0.1
        : height * 0.11,
    borderRadius: 20,
  },
  textTitle: {
    fontSize:
      height > 900 ? (height > 1000 ? (height > 1100 ? 32 : 28) : 20) : 22,
    fontWeight: "bold",
  },
  text: {
    fontSize:
      height > 900 ? (height > 1000 ? (height > 1100 ? 20 : 18) : 16) : 16,
    fontWeight: "bold",
    width: width * 0.34,
    // textAlign: height > 1000 ? "center" : null,
    textAlign: "center",
  },
  // progressBar: {
  //   backgroundColor: "#f5f5f5",
  //   width: "90%",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   height: 5,
  //   borderRadius: 20,
  //   justifyContent: "center",
  //   marginTop: "3%",
  //   marginBottom: 5,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },
  // progressBarColor: {
  //   backgroundColor: "lightblue",
  //   borderRadius: 12,
  //   position: "absolute",
  //   left: 0,
  //   height: 5,
  //   right: 0,
  // },
  button: {
    width:
      height > 900
        ? height > 1000
          ? width * 0.328
          : width * 0.36
        : width * 0.4,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: "yellow",
    borderRadius: 10,
    opacity: 1,
  },
  button1: {
    width: width * 0.85,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: "white",
    borderRadius: 10,
    opacity: 0.5,
  },
  buttonContext: {
    // flexDirection: height > 1000 ? "column" : "row",
    flexDirection: "column",
    alignItems: "center",
    // gap: height > 1000 ? width * 0.02 : width * 0.05,
    gap: width * 0.02,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import React from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../utils/ThemeMode/ThemeProvider";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Dimensions } from "react-native";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

// const CategoryItem = ({ page, img, text }) => {
//   const navigation = useNavigation();
//   const { colors } = useTheme();

//   return (
//     <Pressable
//       style={({ pressed }) => [
//         styles.cardButton,
//         { backgroundColor: colors.backgroundPageButton, marginBottom: 20 },
//         pressed && styles.cardPressed,
//       ]}
//       onPress={() => navigation.navigate(page)}
//     >
//       <Image source={img} style={{ width: 100, height: 80, opacity: 1 }} />
//       <View style={{ width: "60%" }}>
//         <Text
//           style={{
//             paddingRight: 20,
//             fontSize: 16,
//             fontWeight: "bold",
//             color: colors.textDrawer,
//           }}
//         >
//           {String(text ?? "")}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

// // MAIN FUNCTION
// const QuizScreen = () => {
//   const { colors } = useTheme();
//   const { t } = useTranslation();
//   // const [score, setScore] = React.useState(0);
//   // const score1 = 90;

//   // React.useEffect(() => {
//   //   getData();
//   // }, []);

//   // const getData = () => {
//   //   try {
//   //     AsyncStorage.getItem("score").then((value) => {
//   //       if (value != null) {
//   //         let score = JSON.parse(value);
//   //         setScore(score);
//   //         console.log(score);
//   //       }
//   //     });
//   //   } catch (e) {
//   //     console.log(e);
//   //   }
//   // };

//   return (
//     <SafeAreaView
//       style={[styles.container, { backgroundColor: colors.backgroundDrawer }]}
//     >
//       <Text style={[styles.header, { color: colors.textDrawer, height: 100 }]}>
//         {String(t("categories") ?? "")}
//       </Text>
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View
//           style={[
//             styles.container,
//             { backgroundColor: colors.backgroundDrawer },
//           ]}
//         >
//           <View style={styles.content}>
//             <CategoryItem
//               page="Capitals"
//               img={require("../assets/more/capitals.webp")}
//               text={String(t("capitals") ?? "")}
//             />

//             <CategoryItem
//               page="Flags"
//               img={require("../assets/Flags/flags.png")}
//               text={String(t("flags") ?? "")}
//             />

//             <CategoryItem
//               page="WorldMonuments"
//               img={require("../assets/WorldMonuments/worldmnt.webp")}
//               text={String(t("worldMonuments2") ?? "")}
//             />

//             <CategoryItem
//               page="NaturalMonument"
//               img={require("../assets/NaturalMnt/ntrmnt.webp")}
//               text={String(t("naturalMonuments") ?? "")}
//             />

//             <CategoryItem
//               page="MixedQuestions"
//               img={require("../assets/more/mixed.webp")}
//               text={String(t("mixedQuestions") ?? "")}
//             />
//           </View>
//         </View>
//       </ScrollView>
//       <View
//         style={{ position: "absolute", bottom: 30, right: 0, left: 0,alignItems: 'center', width: "100%" }}
//       >
//         {/* <ShareButton /> */}
//         <Text>World Wise Trivia</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default QuizScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: height > 1000 ? 32 : 26,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 60,
//     marginBottom: 0,
//     color: "#000",
//   },
//   scrollContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 100,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: 20,
//   },
//   cardWrapper: {
//     width: "48%",
//     marginBottom: 16,
//   },
//   card: {
//     backgroundColor: "#f5f5f5",
//     borderRadius: 16,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//     height: height * 0.27,
//   },
//   cardPressed: {
//     transform: [{ scale: 0.98 }],
//     opacity: 0.9,
//   },
//   cardImage: {
//     width: "100%",
//     height: height * 0.2,
//     aspectRatio: 1.2,
//   },
//   cardTitle: {
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: "#f5f5f5",
//     width: "100%",
//     fontSize: height > 900 ? (height > 1000 ? 18 : 16) : 15,
//     fontWeight: "700",
//     textAlign: "center",
//     paddingVertical: 12,
//     color: "#000",
//   },
//   cardButton: {
//     width: "100%",
//     height: 80,
//     // height: height > 900 ? 80: 55,
//     backgroundColor: "lightgrey",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: 20,
//     borderRadius: 20,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//   },
// });
