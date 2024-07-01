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
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

// type Props = {
//   page: any;
//   img: any;
//   text: string;
//   scores: number;
// };

// Category Template
const CategoryItem = ({ page, img, text, scores }) => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const [scale, setScale] = useState(1);

  return (
    <Pressable
      onPressIn={() => (setScale(1.08))}
      onPressOut={() => (navigation.navigate(page),setScale(1))}
      style={[
        styles.button,
        {
          backgroundColor: colors.buttonContextQuiz,
          borderColor: colors.borderColor,
          borderWidth: 2,
          transform: [{scale: scale}]
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
              img={require("../assets/QuizScreen/lon.png")}
              text={t("capitals")}
              scores={score}
            />

            {/* Flags */}
            <CategoryItem
              page="Flags"
              img={require("../assets/QuizScreen/flag.png")}
              text={t("flags")}
              scores={score1}
            />

            {/* World Monuments */}
            <CategoryItem
              page="WorldMonuments"
              img={require("../assets/QuizScreen/monument.jpg")}
              // text={t("flags")}
              text={t("worldMonuments2")}
              scores={score1}
            />

            {/* Natural Monument */}
            <CategoryItem
              page="NaturalMonument"
              img={require("../assets/QuizScreen/animals.jpg")}
              text={t("naturalMonuments")}
              scores={score1}
            />

            {/* Science */}
            <CategoryItem
              page="MixedQuestions"
              img={require("../assets/QuizScreen/science.jpg")}
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
    position: 'relative',
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
  },
  title: { marginTop: 25 },
  content: {
    marginTop: 24,
    justifyContent: "center",
  },
  image: {
    width: width * 0.32,
    height: height> 900? height * 0.17 : height * 0.13,
    // width: width * 0.38,
    // height: height * 0.14,
    borderRadius: 20,
  },
  textTitle: {
    fontSize: RFValue(16, 580),
    fontWeight: "bold",
  },
  text: {
    // fontSize: RFValue(10, 450),
    fontSize: height > 900 ? 28 : 18,
    fontWeight: "bold",
    width: width * 0.34,
  },
  progressBar: {
    backgroundColor: "#f5f5f5",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    height: 5,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "3%",
    marginBottom: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  progressBarColor: {
    backgroundColor: "lightblue",
    borderRadius: 12,
    position: "absolute",
    left: 0,
    height: 5,
    right: 0,
  },
  button: {
    width: width * 0.80,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    opacity: 1,
  },
  button1: {
    width: width * 0.85,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    opacity: 0.5,
  },
  buttonContext: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.05,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});
