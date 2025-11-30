import { View, Text, Pressable, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import LottieView from "lottie-react-native";
import { useAppDispatch } from "../../../ReduxSetUp/store";
import { useTranslation } from "react-i18next";
import {
  statusCapitals,
  statusFlags,
  statusGuess,
} from "../../../ReduxSetUp/QuizStatus/QuizStatus";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

interface MainChooseQuizTypeTemplateProps {
  screen: string;
  image1: ImageSourcePropType;
  image2: ImageSourcePropType;
  lottieHeight: string;
  lottieAnm: any;
  show?: boolean;
}

const MainChooseQuizTypeTemplate: React.FC<MainChooseQuizTypeTemplateProps> = (props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [scale1, setScale1] = useState<number>(1);
  const [scale2, setScale2] = useState<number>(1);
  const [scale3, setScale3] = useState<number>(1);
  const show = props.show;

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            color: colors.textDrawer,
            fontSize:
              windowHeight > 900
                ? windowHeight > 1000
                  ? windowHeight > 1100
                    ? 30
                    : 28
                  : 20
                : 18,
          }}
        >
          {t("type")}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: props.lottieHeight as any,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <LottieView
          style={{ width: "100%", height: "100%" }}
          source={props.lottieAnm}
          autoPlay
          loop
        />
      </View>
      <Pressable
        onPressIn={() => setScale1(1.07)}
        onPressOut={() => {
          navigation.navigate(props.screen as never);
          dispatch(statusFlags());
          setScale1(1);
        }}
        style={[
          styles.button,
          {
            backgroundColor: colors.backgroundMaterialTopTab,
            transform: [{ scale: scale1 }],
          },
        ]}
      >
        <View style={styles.imgView}>
          <Image source={props.image1} style={styles.img} />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text
            style={{
              color: colors.text,
              fontSize:
                windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
            }}
          >
            {t("1 WORD")}
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize:
                windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
            }}
          >
            {t("4 IMAGES")}
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPressIn={() => setScale2(1.07)}
        onPressOut={() => {
          navigation.navigate(props.screen as never);
          dispatch(statusCapitals());
          setScale2(1);
        }}
        style={[
          styles.button,
          {
            backgroundColor: colors.backgroundMaterialTopTab,
            transform: [{ scale: scale2 }],
          },
        ]}
      >
        <View style={styles.imgView}>
          <Image source={props.image2} style={styles.img} />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text
            style={{
              color: colors.text,
              fontSize:
                windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
            }}
          >
            {t("1 IMAGE")}
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize:
                windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
            }}
          >
            {t("4 WORDS")}
          </Text>
        </View>
      </Pressable>
      {show ? (
        <Pressable
          onPressIn={() => setScale3(1.07)}
          onPressOut={() => {
            navigation.navigate(props.screen as never);
            dispatch(statusGuess());
            setScale3(1);
          }}
          style={[
            styles.button,
            {
              backgroundColor: colors.backgroundMaterialTopTab,
              transform: [{ scale: scale3 }],
            },
          ]}
        >
          <View style={styles.imgView}>
            <Image
              source={require("../../../assets/more/guessWord.jpg")}
              style={styles.img}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text
              style={{
                color: colors.text,
                fontSize:
                  windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
              }}
            >
              {t("GUESS")}
            </Text>
            <Text
              style={{
                color: colors.text,
                fontSize:
                  windowHeight > 900 ? (windowHeight > 1000 ? 16 : 13) : 12,
              }}
            >
              {t("THE WORD")}
            </Text>
          </View>
        </Pressable>
      ) : null}
    </View>
  );
};

export default MainChooseQuizTypeTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
  },
  button: {
    marginTop: 20,
    width: windowHeight > 900 ? (windowHeight > 1000 ? "60%" : "70%") : "65%",
    height: windowHeight > 1000 ? 130 : 110,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imgView: {
    width: windowHeight > 900 ? (windowHeight > 1000 ? 130 : 100) : 90,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    borderRadius: 20,
  },
  img: {
    width: windowHeight > 900 ? (windowHeight > 1000 ? 80 : 70) : 50,
    height: windowHeight > 900 ? (windowHeight > 1000 ? 110 : 90) : 80,
    borderRadius: 10,
  },
});

