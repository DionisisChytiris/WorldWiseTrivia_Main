import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
// import { useAppDispatch, useAppSelector } from "../../../ReduxSetUp/store";
import {
  statusCapitals,
  statusFlags,
  statusGuess,
} from "../../../ReduxSetUp/QuizStatus/QuizStatus";

const ChooseQuizType = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [scale1, setScale1] = React.useState(1);
  const [scale2, setScale2] = React.useState(1);
  const [scale3, setScale3] = React.useState(1);

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.text }}>
          {t("type")}
        </Text>
      </View>
      <Pressable
        onPressIn={() => setScale1(1.07)}
        onPressOut={() => {
          navigation.navigate("CapitalsHome");
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
          navigation.navigate("CapitalsHome");
          dispatch(statusCapitals());
          setScale2(1);
        }}
        style={[
          styles.button,
          { backgroundColor: colors.backgroundMaterialTopTab,transform: [{ scale: scale2 }], },
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
      <Pressable
        onPressIn={() => setScale3(1.07)}
        onPressOut={() => {
          navigation.navigate("CapitalsHome");
          dispatch(statusGuess());
          setScale3(1);
        }}
        style={[
          styles.button,
          { backgroundColor: colors.backgroundMaterialTopTab,transform: [{ scale: scale3 }], },
        ]}
      >
        <View style={styles.imgView}>
          <Image
            source={require("../../../assets/more/guessWord.jpg")}
            style={styles.img}
            cover="contain"
          />
        </View>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Text style={{ color: colors.text }}>{t("GUESS")}</Text>
          <Text style={{ color: colors.text }}>{t("THE WORD")}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ChooseQuizType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: "80%",
    height: 150,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  imgView: {
    width: 130,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    borderRadius: 20,
  },
  img: {
    width: 90,
    height: 120,
    borderRadius: 10,
  },
});
