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
import EarthRotate from "../utils/EarthRotate.tsx";

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
        <Text style={[styles.text, { color: colors.textDrawer }]}>
          {String(text ?? "")}
        </Text>
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
              img={require("../assets/more/capitals.webp")}
              text={t("capitals")}
              scores={score}
            />

            {/* Flags */}
            <CategoryItem
              page="Flags"
              img={require("../assets/Flags/flags.png")}
              text={t("flags")}
              scores={score1}
            />

            {/* World Monuments */}
            <CategoryItem
              page="WorldMonuments"
              img={require("../assets/WorldMonuments/worldmnt.webp")}
              text={t("worldMonuments2")}
              scores={score1}
            />

            {/* Natural Monument */}
            <CategoryItem
              page="NaturalMonument"
              img={require("../assets/NaturalMnt/ntrmnt.webp")}
              text={t("naturalMonuments")}
              scores={score1}
            />

            {/* Science */}
            <CategoryItem
              page="MixedQuestions"
              img={require("../assets/more/mixed.webp")}
              text={t("mixedQuestions")}
              scores={score1}
            />

            <View style={{ position: "absolute", bottom: 0 , right: -100}}>
              <EarthRotate />
            </View>
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
