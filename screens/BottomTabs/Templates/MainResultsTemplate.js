import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";

const MainResultsTemplate = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <Text style={{ color: colors.text }}>{props.title}</Text>
      <View style={{ marginTop: 50 }} />
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
      {/* <View style={{ marginTop: 50, flexDirection: "row", gap: 20 }}>
        <Text style={{ color: colors.text }}>{props.correctAnswers}:</Text>
        <Text style={{ color: "lightgreen" }}>3/10</Text>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row", gap: 20 }}>
        <Text style={{ color: colors.text }}>{props.textPercentage}:</Text>
        <Text style={{ color: "lightgreen" }}>{props.percentage}%</Text>
      </View>
      <View style={{ marginTop: 40, flexDirection: "row", gap: 20 }}>
        <Text style={{ color: colors.text }}>{props.wrongAnswers}:</Text>
        <Text style={{ color: "lightgreen" }}>{props.percentage}%</Text>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row", gap: 20 }}>
        <Text style={{ color: colors.text }}>{props.textPercentage}:</Text>
        <Text style={{ color: "lightgreen" }}>{props.percentage}%</Text>
      </View> */}
      <View style={{ flexDirection: "row", gap: 15 }}>
        <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Text style={{ color: colors.text, marginTop: 50 }}>{props.correctAnswers}:</Text>
            <Text style={{ color: colors.text, marginTop: 10 }}>{props.textPercentage}:</Text>
            <Text style={{ color: colors.text, marginTop: 30 }}>{props.wrongAnswers}:</Text>
            <Text style={{ color: colors.text, marginTop: 10 }}>{props.textPercentage}:</Text>
        </View>
        <View style={{ width: "40%"}}>
          <Text style={{ color: "lightgreen", marginTop: 50  }}>3/10</Text>
          <Text style={{ color: "lightgreen", marginTop: 10  }}>{props.percentage}%</Text>
          <Text style={{ color: "magenta", marginTop: 30  }}>7/10</Text>
          <Text style={{ color: "magenta", marginTop: 10  }}>{100 - props.percentage}%</Text>
        </View>
      </View>
      
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
    paddingTop: 50,
  },
});
