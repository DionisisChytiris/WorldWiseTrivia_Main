import {
  View,
  Text,
  Animated,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import LottieView from "lottie-react-native";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  statusCapitals,
  statusFlags,
} from "../../../ReduxSetUp/QuizStatus/QuizStatus";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChooseQuizType = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);
  const show = true;
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    animateBackground();
  }, []);

  const animateBackground = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      })
    ).start();
  };

  const backgroundColor = animatedValue.interpolate({
    // inputRange: [0, 1],
    // outputRange: ["rgb(0, 0,0)", "rgb(51,250,170)"],

    inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],
    outputRange: [ '#002c54', '#003a6e', '#28678B', '#1F60A9', '#003a6e', '#002c54' ]

  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, { backgroundColor }]} />
      {/* <View>
          <Text style={{color: 'white', fontSize: 26}}>Hello world</Text>
          <Text style={{color: 'white', fontSize: 26}}>Hello world</Text>
          <Text style={{color: 'white', fontSize: 26}}>Hello world</Text>
        </View> */}
      {/* <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}> */}
        <View style={{ padding: 20 }}>
          <Text
            style={{ fontSize: windowHeight> 900 ? (windowHeight>1000? (windowHeight>1100? 30: 28): 20): 18  , paddingBottom: 30,marginTop: -40, fontWeight: "500", color: '#ccc' }}
          >
            {t("type")}
          </Text>
        </View>

        <Pressable
          onPressIn={() => setScale1(1.07)}
          onPressOut={() => {
            navigation.navigate("MixedQstsHome");
            //   navigation.navigate("CapitalsHome");
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
            <Image
              source={require("../../../assets/more/images.jpg")}
              style={styles.img}
              cover="contain"
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text style={{ color: colors.text }}>{t("1 WORD")}</Text>
            <Text style={{ color: colors.text }}>{t("4 IMAGES")}</Text>
          </View>
        </Pressable>
        <Pressable
          onPressIn={() => setScale2(1.07)}
          onPressOut={() => {
            navigation.navigate("MixedQstsHome");
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
            <Image
              source={require("../../../assets/more/words.jpg")}
              style={styles.img}
              cover="contain"
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text style={{ color: colors.text }}>{t("1 IMAGE")}</Text>
            <Text style={{ color: colors.text }}>{t("4 WORDS")}</Text>
          </View>
        </Pressable>
      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    marginTop: 20,
    width: windowHeight> 900 ? windowHeight>1000?"60%":"70%":"65%",
    height:  windowHeight>1000? 130: 110,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imgView: {
    width: windowHeight> 900 ? windowHeight>1000?130: 100: 90,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    borderRadius: 20,
  },
  img: {
    width: windowHeight> 900 ? (windowHeight>1000?80: 70): 50,
    height: windowHeight> 900 ? (windowHeight>1000?110: 90 ): 80,
    borderRadius: 10,
  },
});

export default ChooseQuizType;
