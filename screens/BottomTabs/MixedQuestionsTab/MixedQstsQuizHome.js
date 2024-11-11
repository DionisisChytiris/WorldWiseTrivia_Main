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
      style={test}
    >
      <Image
        source={props.image}
        style={{
          width: windowHeight> 900 ?  (windowHeight> 1000? 170: 125 ): 120,
          height: windowHeight> 900 ? (windowHeight> 1000? 110: 85 )  :'100%',
          borderRadius: 10,
          opacity: 0.7,
        }}
        resizeMode="cover"
      />
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text style={{ color: "white", fontWeight: "bold", opacity: 1 }}>
          {t("quiz")} {props.title}
        </Text>
      </View>
    </Pressable>
  );
};

const MixedQstsQuizHome = () => {
  const { colors } = useTheme();
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
    <View style={[styles.container, {backgroundColor: colors.bgFlagsCnt}]}>
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
      {/* <ScrollView style={{backgroundColor: 'yellow'}}> */}
      <View style={styles.quizBtnBox}>
        <View style={{ width: "50%", gap:  windowHeight> 900 ? (windowHeight>1000? 50:30): 20 }}>
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
        </View>
        <View style={{ width: "50%", marginTop: 70, marginLeft: 20, gap:  windowHeight> 900 ? (windowHeight>1000? 50:30): 20 }}>
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
        </View>
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
  quizBtnBox: {
    width: windowHeight> 900 ? windowHeight> 1000 ? "50%":"65%":"70%",
    // height: windowHeight / 1.4,
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
    // margin: 'auto'
  },
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
  button: {
    // width: "85%",
    width: "85%",
    height: 80,
    // height: windowHeight> 900 ? 120 :80,
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
