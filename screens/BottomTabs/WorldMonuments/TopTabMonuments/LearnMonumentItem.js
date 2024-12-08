import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LearnMonumentItem = ({ img, name, country, city, date }) => {
  const { colors } = useTheme();
  const [loaded, setLoaded] = useState(true);

  return (
    <View style={{ alignItems: "center", paddingBottom: 10 }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.bgFlagsCnt1,
            borderColor: colors.borderColor,
            borderWidth: 2,
          },
        ]}
      >
        {loaded && <ActivityIndicator size={"large"} />}
        <View>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={img}
            onLoadEnd={() => setLoaded(false)}
          />
        </View>
        <View
          style={{
            flexDirection: height > 1100 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: height > 1100 ? 150 : 0,
            paddingTop: height > 1100 ? 10 : 0,
          }}
        >
          <Text
            style={{
              fontSize:
                height < 880
                  ? 15
                  : height > 1100
                  ? 26
                  : height > 1000
                  ? 20
                  : 16,
              fontWeight: "bold",
              textAlign: "center",
              color: colors.text,
              paddingVertical: 5,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: height > 1100 ? 25 : 50,
              paddingBottom: height > 1100 ? 0 : 20,
            }}
          >
            <Text
              style={{
                fontSize: height < 880 ? 12 : height > 1000 ? 16 : 13,
                fontWeight: "400",
                color: colors.text,
              }}
            >
              {city}
            </Text>
            <Text
              style={{
                fontSize: height < 880 ? 12 : height > 1000 ? 16 : 13,
                fontWeight: "bold",
                color: colors.text,
              }}
            >
              {country}
            </Text>
            <Text
              style={{
                fontSize: height < 880 ? 12 : height > 1000 ? 16 : 13,
                fontWeight: "400",
                color: colors.text,
              }}
            >
              {date}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LearnMonumentItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height:
      height < 880
        ? height / 2.7
        : height > 1100
        ? height / 2.2
        : height > 1000
        ? height / 2
        : height / 3,
    // backgroundColor: "blue",
    borderRadius: 14,
    marginBottom: height > 900 ? 30 : 15,
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width / 1.25,
    height:
      height > 880
        ? height > 1100
          ? height / 2.7
          : height > 1000
          ? height / 2.5
          : height / 4
        : height / 3.8,
    borderRadius: 10,
  },
});
