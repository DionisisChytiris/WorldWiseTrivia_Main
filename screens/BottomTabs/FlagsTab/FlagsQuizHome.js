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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const QuizTemplate = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [test, setTest] = useState(styles.button);
  return (
    <Pressable
      key={props.id}
      onPressIn={() => setTest(styles.button1)}
      onPressOut={() => (
        navigation.navigate(props.quiz), setTest(styles.button)
      )}
      style={[
        test,
        {
          marginLeft: windowHeight>1100? 50: 0,
          backgroundColor: colors.text1,
          height: windowHeight > 900 ? (windowHeight > 1000 ? 120 : 100) : 80,
          width: windowHeight > 900 ? (windowHeight > 1000 ? 170 : 125) : 120,
        },
      ]}
    >
      <Image
        source={props.image}
        style={{
          width: windowHeight> 900 ?  (windowHeight>1100?  250 : (windowHeight>1000? 180:130)): 120,
          height: windowHeight> 900 ? (windowHeight> 1100? 150: (windowHeight>1000? 120: 85)) : "100%",
          borderRadius: 10,
          opacity: 0.9,
        }}
        resizeMode="cover"
      />
      {/* <View style={{position: 'absolute', bottom: 5,backgroundColor:'grey', width: 80, height: 40,borderRadius: 4, opacity: 0.6}}/> */}
      {/* </View> */}
      <View style={{ position: "absolute", bottom: 20 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "900",
            opacity: 1,
            fontSize: windowHeight>1000? (windowHeight>1100? 26:18): 14
          }}
        >
          {t("quiz")} {props.title}
        </Text>
      </View>
    </Pressable>
  );
};

const FlagsQuizHome = () => {
  const { colors } = useTheme();
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
        source={require("../../../assets/more/flags.webp")}
      />
      <View style={styles.quizBtnBox}>
        <View
          style={{
            width: "50%",
            gap: windowHeight> 900 ? (windowHeight>1000? (windowHeight>1100? 100:20):10): 20
          }}
        >
          <QuizTemplate
            quiz="Quiz1"
            title="1"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz3"
            title="3"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz5"
            title="5"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz7"
            title="7"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz9"
            title="9"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
        </View>
        <View
          style={{
            width: "50%",
            marginTop: 70,
            marginLeft: 20,
            gap: windowHeight> 900 ? (windowHeight>1000? (windowHeight>1100? 100:20):10): 20
          }}
        >
          <QuizTemplate
            quiz="Quiz2"
            title="2"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz4"
            title="4"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz6"
            title="6"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz8"
            title="8"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
          <QuizTemplate
            quiz="Quiz10"
            title="10"
            image={require("../../../assets/Flags/World_Flag.png")}
          />
        </View>
      </View>

      {/* </ImageBackground> */}
    </View>
    // </ScrollView>
  );
};

export default FlagsQuizHome;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    flex: 1,
  },
  quizBtnBox: {
    width: windowHeight> 900 ? (windowHeight> 1000 ? (windowHeight>1100? "55%":"50%"):"60%"):"65%",
    height: windowHeight / 1.4,
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center"
  },
  background: {
    position: "absolute",
    width: windowWidth * 2,
    height: windowHeight > 900 ? windowHeight / 1.6 : windowHeight / 4,
    top: windowHeight > 900 ? windowHeight / 1.6 : windowHeight / 2,
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
