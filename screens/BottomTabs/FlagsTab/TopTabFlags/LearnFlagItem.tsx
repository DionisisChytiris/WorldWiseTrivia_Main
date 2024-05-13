import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";

const LearnFlagItem = ({ img, country, capital }) => {
  const { colors } = useTheme();

  return (
    <>
      {/* <View style={[styles.flagBox, { backgroundColor: colors.bgLngFlgs }]}> */}
      <View style={styles.flagBox}>
        {/* <View style={{flexDirection: 'row'}}> */}
          <View style={{ flexDirection: "row", marginTop: 0, alignItems: 'center' }}>
            <Text
              style={{ width: '38%',fontSize: 15, fontWeight: "bold", paddingLeft: 5, color: colors.text }}
            >
              {country}
            </Text>
            <Text
              style={{ width: '40%', fontSize: 14, fontWeight: "bold", color: colors.text }}
            >
              {capital}
            </Text>
          <View>
            <Image style={styles.img} resizeMode="cover" source={img} />
          </View>
          </View>
        {/* </View> */}
      </View>
    </>
  );
};

export default LearnFlagItem;

const styles = StyleSheet.create({
  flagBox: {
    flexDirection: "row",
    width: '100%',
    // height: 130,
    // backgroundColor: 'yellow',
    backgroundColor: 'transparent',
    borderRadius: 14,
    paddingVertical: 15,
    // marginVertical: 2,
    // marginBottom: 40,
    // paddingTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 60,
    height: 40,
    borderRadius: 10,
  },
  // flagBox: {
  //   flexDirection: "column",
  //   width: 150,
  //   height: 130,
  //   backgroundColor: 'transparent',
  //   borderRadius: 14,
  //   marginBottom: 40,
  //   paddingTop: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // img: {
  //   width: 120,
  //   height: 80,
  //   borderRadius: 10,
  // },
});
