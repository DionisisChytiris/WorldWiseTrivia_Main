import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LearnNaturalMntsItem = () => {
  const { colors } = useTheme();
  const [loaded, setLoaded] = useState(true);

  return (
    <View style={{ alignItems: "center", paddingBottom: 10}}>
      <Text>LearnNaturalMntsItem</Text>
    </View>
  );
};

export default LearnNaturalMntsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: height < 880 ? height / 2.7 : height / 2,
    // backgroundColor: "blue",
    borderRadius: 14,
    marginBottom: 40,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width / 1.25,
    height: height > 880 ? height / 2.5 : height / 3.8,
    borderRadius: 10,
  },
});
