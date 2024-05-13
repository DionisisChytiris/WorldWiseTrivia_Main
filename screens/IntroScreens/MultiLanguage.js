import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import i18next, { languageResources } from "../../MultiLanguage/i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { flagsEl, flagsEn, flagsEs } from "../../ReduxSetUp/flagSlice";
import {
  flgAfEl,
  flgAfEn,
  flgAfEs,
  flgAsEl,
  flgAsEn,
  flgAsEs,
  flgOcEl,
  flgOcEn,
  flgOcEs,
  flagsEuEl,
  flagsEuEn,
  flagsEuEs,
  flgAmEl,
  flgAmEn,
  flgAmEs,
  quiz1El,
  quiz1En,
  quiz1Es,
  quiz2El,
  quiz2En,
  quiz2Es,
  quiz3El,
  quiz3En,
  quiz3Es,
  quiz4El,
  quiz4En,
  quiz4Es,
  quiz5El,
  quiz5En,
  quiz5Es,
  quiz6El,
  quiz6En,
  quiz6Es,
  quiz7El,
  quiz7En,
  quiz7Es,
  quiz8El,
  quiz8En,
  quiz8Es,
  quiz9El,
  quiz9En,
  quiz9Es,
  quiz10El,
  quiz10En,
  quiz10Es,
} from "../../ReduxSetUp/FlagsQuizSlices";
import {
  quizCpt1El,
  quizCpt1En,
  quizCpt1Es,
  quizCpt2El,
  quizCpt2En,
  quizCpt2Es,
  quizCpt3El,
  quizCpt3En,
  quizCpt3Es,
  quizCpt4El,
  quizCpt4En,
  quizCpt4Es,
  quizCpt5El,
  quizCpt5En,
  quizCpt5Es,
  quizCpt6El,
  quizCpt6En,
  quizCpt6Es,
  quizCpt7El,
  quizCpt7En,
  quizCpt7Es,
  quizCpt8El,
  quizCpt8En,
  quizCpt8Es,
  quizCpt9El,
  quizCpt9En,
  quizCpt9Es,
  quizCpt10El,
  quizCpt10En,
  quizCpt10Es,
} from "../../ReduxSetUp/CapitalsQuizSlices";

const MultiLanguage = () => {
  const navigation = useNavigation();
  const [color1, setColor1] = useState("#4ddbdf");
  const [color2, setColor2] = useState("#dbdddd");
  const [color3, setColor3] = useState("#dbdddd");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const English = () => {
    setColor1("#4ddbdf");
    setColor2("#dbdddd");
    setColor3("#dbdddd");
    dispatch(flagsEn());
    dispatch(flagsEuEn());
    dispatch(flgAmEn());
    dispatch(flgAfEn());
    dispatch(flgAsEn());
    dispatch(flgOcEn());
    dispatch(quiz1En());
    dispatch(quiz2En());
    dispatch(quiz3En());
    dispatch(quiz4En());
    dispatch(quiz5En());
    dispatch(quiz6En());
    dispatch(quiz7En());
    dispatch(quiz8En());
    dispatch(quiz9En());
    dispatch(quiz10En());
    dispatch(quizCpt1En());
    dispatch(quizCpt2En());
    dispatch(quizCpt3En());
    dispatch(quizCpt4En());
    dispatch(quizCpt5En());
    dispatch(quizCpt6En());
    dispatch(quizCpt7En());
    dispatch(quizCpt8En());
    dispatch(quizCpt9En());
    dispatch(quizCpt10En());
  };
  const Spanish = () => {
    setColor2("#4ddbdf");
    setColor1("#dbdddd");
    setColor3("#dbdddd");
    dispatch(flagsEs());
    dispatch(flagsEuEs());
    dispatch(flgAmEs());
    dispatch(flgAfEs());
    dispatch(flgAsEs());
    dispatch(flgOcEs());
    dispatch(quiz1Es());
    dispatch(quiz2Es());
    dispatch(quiz3Es());
    dispatch(quiz4Es());
    dispatch(quiz5Es());
    dispatch(quiz6Es());
    dispatch(quiz7Es());
    dispatch(quiz8Es());
    dispatch(quiz9Es());
    dispatch(quiz10Es());
    dispatch(quizCpt1Es());
    dispatch(quizCpt2Es());
    dispatch(quizCpt3Es());
    dispatch(quizCpt4Es());
    dispatch(quizCpt5Es());
    dispatch(quizCpt6Es());
    dispatch(quizCpt7Es());
    dispatch(quizCpt8Es());
    dispatch(quizCpt9Es());
    dispatch(quizCpt10Es());
  };
  const Greek = () => {
    setColor3("#4ddbdf");
    setColor1("#dbdddd");
    setColor2("#dbdddd");
    dispatch(flagsEl());
    dispatch(flagsEuEl());
    dispatch(flgAmEl());
    dispatch(flgAfEl());
    dispatch(flgAsEl());
    dispatch(flgOcEl());
    dispatch(quiz1El());
    dispatch(quiz2El());
    dispatch(quiz3El());
    dispatch(quiz4El());
    dispatch(quiz5El());
    dispatch(quiz6El());
    dispatch(quiz7El());
    dispatch(quiz8El());
    dispatch(quiz9El());
    dispatch(quiz10El());
    dispatch(quizCpt1El());
    dispatch(quizCpt2El());
    dispatch(quizCpt3El());
    dispatch(quizCpt4El());
    dispatch(quizCpt5El());
    dispatch(quizCpt6El());
    dispatch(quizCpt7El());
    dispatch(quizCpt8El());
    dispatch(quizCpt9El());
    dispatch(quizCpt10El());
  };

  return (
    <View style={styles.container}>
      <View
        style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}
      >
        <View style={{ width: "33%", height: 3, backgroundColor: "#3ff769" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.welcomeTxt}>
          {t("welcome")}
        </Text>
        <Text
          style={{ color: "#018afe", fontSize: RFValue(9, 450), marginTop: 20 }}
        >
          {t("change-language")}
        </Text>
      </View>
      <View style={{ margin: 30, gap: 10 }}>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color1 }]}
          onPress={() => {
            i18next.changeLanguage(Object.keys(languageResources)[0]);
            English();
          }}
        >
          <Image
            source={require("../../assets/Flags/uk.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>English</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color2 }]}
          onPress={() => {
            i18next.changeLanguage(Object.keys(languageResources)[1]);
            Spanish();
          }}
        >
          <Image
            source={require("../../assets/Flags/spain.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Español</Text>
        </Pressable>
        <Pressable
          style={[styles.chngLgBtn, { backgroundColor: color3 }]}
          onPress={() => {
            i18next.changeLanguage(Object.keys(languageResources)[2]);
            Greek();
          }}
        >
          <Image
            source={require("../../assets/Flags/greece.png")}
            style={{ width: 26, height: 17 }}
          />
          <Text>Ελληνικά</Text>
        </Pressable>
      </View>
      <View style={styles.skipNextBtn}>
        <Pressable
          onPress={() => navigation.navigate("Draw")}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("ChangeTheme")}
          style={styles.button2}
        >
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MultiLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTxt: {
    color: "#0073d4",
    fontSize: RFValue(11, 420),
    fontWeight: "bold",
    letterSpacing: 0,
  },
  chngLgBtn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  button1: {
    width: "28%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  button2: {
    width: "40%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  title: {
    fontSize: RFValue(9, 450),
    fontWeight: "bold",
    color: "#0cb41f",
  },
  skipNextBtn: {
    marginTop: 40,
    flexDirection: "row",
    gap: 10,
  },
});

// {Object.keys(languageResources).map((item, index) => (
//   <View key={index}>
//     <Pressable
//       onPress={() => {
//         changeLng(item);
//         setScreenIndex(index);
//       }}
//       style={[
//         styles.lngBtn,
//         {
//           backgroundColor:
//             index === screenIndex ? "lightgreen" : "lightgray",
//         },
//       ]}
//     >
//       <Text
//         style={{ color: "green", fontSize: 16, fontWeight: "bold" }}
//       >
//         {languagesList[item].nativeName}
//       </Text>
//     </Pressable>
//   </View>
// ))}

// lngBtn: {
//   margin: 20,
//   backgroundColor: "yellow",
//   width: 180,
//   height: 60,
//   borderRadius: 60,
//   alignItems: "center",
//   justifyContent: "center",
// },
