import { View, Text, Pressable, StyleSheet } from "react-native";
import React, {useEffect, useState} from "react";
import { PieChart } from "react-native-gifted-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import LottieView from "lottie-react-native";
import * as StoreReview from 'expo-store-review';
import CustomeAlert from '../Templates/components/CustomAlert'

const MainResultsTemplate = (props: any) => {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [show, setShow] = useState(false)

  const handleQuizCompletion = async() => {
    if (props.percentage >= 90) {
      setShow(true)
     
     if (await StoreReview.hasAction()) {
        StoreReview.requestReview();
      } else {
        console.log('In-app review is not supported on this device.');
      }
      
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleQuizCompletion() 
    }, 2000);

    // Clean up the timeout
    return () => clearTimeout(timeout);
  }, []); 

  useEffect(()=>{
    const timeout1 = setTimeout(() => {
      setShow(false)
    }, 7000);

    return () => clearTimeout(timeout1);
  },[])
  
  

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      {show? 
      <View style={{position: 'absolute', top: 0, left: 0}}>
        <CustomeAlert/>
      </View>
      :null
    }
      <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
        <Text style={{ color: colors.text, fontWeight: "bold" }}>
          {t("quiz")}
        </Text>
        <Text style={{ color: colors.text, fontWeight: "bold" }}>
          {props.number}
        </Text>
        <Text
          style={{ color: colors.text, marginLeft: 20, fontWeight: "bold" }}
        >
          {t("results")}
        </Text>
      </View>
      <View style={{ marginVertical: 20, flexDirection: "row", gap: 50 }}>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View
            style={{ width: 30, height: 6, backgroundColor: "lightgreen" }}
          />
          <Text style={{ color: colors.text, fontSize: 10 }}>
            {t("correct")}
          </Text>
        </View>
        <View style={{ alignItems: "center", gap: 5 }}>
          <View style={{ width: 30, height: 6, backgroundColor: "magenta" }} />
          <Text style={{ color: colors.text, fontSize: 10 }}>{t("wrong")}</Text>
        </View>
      </View>
      <PieChart
        data={props.data}
        donut
        innerCircleColor={colors.bgFlagsCnt}
        radius={80}
        innerRadius={60}
        centerLabelComponent={() => {
          return (
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 30, color: colors.text }}>
                {props.percentage}
              </Text>
              <Text style={{ fontSize: 22, color: colors.text, marginTop: 8 }}>
                %
              </Text>
            </View>
          );
        }}
      />

      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
          <Text style={{ color: colors.text, marginTop: 50 }}>
            {t("correctAnswers")}:
          </Text>
          <Text style={{ color: colors.text, marginTop: 10 }}>
            {t("percentage")}:
          </Text>
          <Text style={{ color: colors.text, marginTop: 30 }}>
            {t("wrongAnswers")}:
          </Text>
          <Text style={{ color: colors.text, marginTop: 10 }}>
            {t("percentage")}:
          </Text>
          <Text style={{ color: colors.text, marginTop: 30 }}>
            {t("totalQuestions")}:
          </Text>
        </View>
        <View style={{ width: "40%" }}>
          <Text style={{ color: colors.greenText, marginTop: 50 }}>
            {props.numCorAns}
          </Text>
          <Text style={{ color: colors.greenText, marginTop: 10 }}>
            {props.percentage}%
          </Text>
          <Text style={{ color: "magenta", marginTop: 30 }}>
            {props.numWrnAns}
          </Text>
          <Text style={{ color: "magenta", marginTop: 10 }}>
            {100 - props.percentage}%
          </Text>
          <Text style={{ color: colors.text, marginTop: 30 }}>10</Text>
        </View>
      </View>

      {props.quizNum === "" ? null : (
        <Pressable
          onPress={() => navigation.navigate(props.quizNum)}
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            borderColor: colors.textDrawer,
            borderWidth: 0.5,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            zIndex: 99999,
          }}
        >
          <Text style={{ color: colors.textDrawer }}>Next Quiz</Text>
        </Pressable>
      )}

      {props.percentage > 60 ? (
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: 500,
            bottom: 0,
          }}
        >
          <LottieView
            style={{ width: "100%", height: "100%" }}
            source={require("../../../assets/LottieAnimation/confeti.json")}
            autoPlay
            loop={false}
          />
        </View>
      ) : null}
    </View>
  );
};

{
  /* <Pressable
  onPress={() => navigation.navigate(props.scrn)}
  onPress={()=>navigation.navigate('CapitalsHome', {score1: score1Test, status: route.params.status})}
  onPress={setItem}
>
  <Text>Home</Text>
</Pressable> */
}
export default MainResultsTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
});
