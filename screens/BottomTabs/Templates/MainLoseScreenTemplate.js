import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";

const MainLoseScreenTemplate = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>{t("quiz")}</Text>
        <Text style={{ color: colors.text, fontWeight: 'bold' }}>{props.number}</Text>
        <Text style={{ color: colors.text, marginLeft: 20, fontWeight: 'bold' }}>{t("results")}</Text>
      </View>
      <View style={{marginVertical: 20, flexDirection: 'row', gap: 50}}>
        <View style={{alignItems: 'center', gap: 5}}>
            <View style={{width: 30, height: 6, backgroundColor: 'lightgreen'}}/>
            <Text style={{color: colors.text,fontSize: 10}}>{t("correct")}</Text>
        </View>
        <View style={{alignItems: 'center', gap: 5}}>
            <View style={{width: 30, height: 6, backgroundColor: 'magenta'}}/>
            <Text style={{color: colors.text,fontSize: 10}}>{t("wrong")}</Text>
        </View>
        <View style={{alignItems: 'center', gap:5}}>
            <View style={{width: 30, height: 6, backgroundColor: 'gray'}}/>
            <Text style={{color: colors.text,fontSize: 10}}>{t("unanswered")}</Text>
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
            <View style={{flexDirection: 'row'}}>
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
            <Text style={{ color: colors.text, marginTop: 40 }}>{t("correctAnswers")}:</Text>
            <Text style={{ color: colors.text, marginTop: 10 }}>{t("percentage")}:</Text>
            <Text style={{ color: colors.text, marginTop: 30 }}>{t("wrongAnswers")}:</Text>
            <Text style={{ color: colors.text, marginTop: 10 }}>{t("percentage")}:</Text>
            <Text style={{ color: colors.text, marginTop: 30 }}>{t("unansweredAnswers")}:</Text>
            <Text style={{ color: colors.text, marginTop: 10 }}>{t("percentage")}:</Text>
            <Text style={{ color: colors.text, marginTop: 30 }}>{t("totalQuestions")}:</Text>
        </View>
        <View style={{ width: "40%"}}>
          <Text style={{ color: colors.greenText, marginTop: 40  }}>{props.numCorAns}</Text>
          <Text style={{ color: colors.greenText, marginTop: 10  }}>{props.percentage}%</Text>
          <Text style={{ color: "magenta", marginTop: 30  }}>3/10</Text>
          <Text style={{ color: "magenta", marginTop: 10  }}>30%</Text>
          <Text style={{ color: colors.textDrawer, marginTop: 30  }}>{props.unanswered}</Text>
          <Text style={{ color: colors.textDrawer, marginTop: 10  }}>{70 - props.percentage}%</Text>
          <Text style={{ color: colors.text, marginTop: 30  }}>10</Text>
        </View>
      </View>
      
    </View>
  );
};

export default MainLoseScreenTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
});
