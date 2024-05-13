import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import FlipCard from "react-native-flip-card";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useTranslation } from "react-i18next";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LearnCapitalItem = ({
  img,
  country,
  capital,
  population,
  symbol,
  currency,
  language,
}) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Pressable onPress={toggleFlip}>
      <FlipCard
        // style={[styles.shadow]}
        friction={8}
        perspective={1000}
        flipHorizontal={false}
        flipVertical={true}
        flip={isFlipped}
        clickable={false}
      >
        <View
          style={[
            styles.flagBox,
            { backgroundColor: colors.bgLngFlgs, borderRadius: 15 },
          ]}
        >
          <View
            style={{
              elevation: 15,
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 1.0,
              borderRadius: 10,
            }}
          >
            <Image style={styles.img} resizeMode="cover" source={img} />
          </View>
          <View style={{ paddingTop: 2, flexDirection: "column" }}>
            <View style={styles.textBox}>
              {/* <Text style={{ fontSize: 10 }}>Country:</Text> */}
              <Text
                style={{ fontSize: 12, fontWeight: "bold", color: colors.text }}
              >
                {country}
              </Text>
            </View>
            <View style={styles.textBox}>
              {/* <Text style={{ fontSize: 10 }}>Capital:</Text> */}
              <Text
                style={{ fontSize: 10, fontWeight: "bold", color: colors.text }}
              >
                {capital}
              </Text>
            </View>
          </View>
        </View>

        {/* Back Side */}
        <View
          style={[
            styles.flagBoxBack,
            { backgroundColor: colors.bgLngFlgs, borderRadius: 15 },
          ]}
        >
          <View
            style={{
              alignItems: "center",
              // flexDirection: height > 900 ? "row" : "column",
              gap: height > 900 ? 5 : 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: height > 900 ? 20 : 5,
              }}
            >
              <MaterialIcons
                name="people"
                size={height > 900 ? 20 : 14}
                color="black"
              />
              <Text style={[styles.title, { color: colors.textDrawer }]}>
              {t("population")}
              </Text>
            </View>
            <Text style={[styles.text, { color: colors.textDrawer }]}>
              {population}{" "}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              // flexDirection: height > 900 ? "row" : "column",
              gap: height > 900 ? 5 : 0,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: height > 900 ? 20 : 5, }}
            >
              <Fontisto
                name="money-symbol"
                size={height > 900 ? 20 : 12}
                color="black"
              />
              <Text style={[styles.title, { color: colors.textDrawer }]}>
              {t("currency")}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 15 }}>
            <Text style={[styles.text, { color: colors.textDrawer }]}>
                {symbol}
              </Text>
              <Text style={[styles.text, { color: colors.textDrawer }]}>
                {currency}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              // flexDirection: height > 900 ? "row" : "column",
              flexDirection: "column" ,
              gap: height > 900 ? 5 : 0,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: height > 900 ? 20 : 5,}}
            >
              <MaterialIcons
                name="language"
                size={height > 900 ? 20 : 12}
                color="black"
              />
              <Text style={[styles.title, { color: colors.textDrawer }]}>
              {t("language")}
              </Text>
            </View>
            <Text style={[styles.text, { color: colors.textDrawer }]}>
              {language}
            </Text>
          </View>
        </View>
      </FlipCard>
    </Pressable>
  );
};

export default LearnCapitalItem;

const styles = StyleSheet.create({
  flagBox: {
    flexDirection: "column",
    // width: '95%',
    width: height < 900 ? 165 : 350,
    height: height < 900 ? 150 : 250,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    paddingTop: 10,
    justifyContent: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    alignItems: "center",
    gap: 10,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
  },
  flagBoxBack: {
    flexDirection: "column",
    // width: '95%',
    width: height < 900 ? 165 : 350,
    height: height < 900 ? 150 : 250,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    // paddingTop: 10,
    // paddingLeft: 30,
    gap: height > 900 ? 25 : 8,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: height < 900 ? 105 : 220,
    height: height < 900 ? 75 : 140,
    borderRadius: 10,
  },
  title: {
    fontSize: height < 900 ? 10 : 20,
  },
  text: {
    fontSize: height < 900 ? 11 : 18,
    fontWeight: "500",
    fontStyle:'italic'
  },
});

/* <FastImageView>
        <FastImage
          style={{ width: 200, height: 200 }}
          source={{
              uri: 'https://unsplash.it/400/400?image=1',
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
      />
      </FastImageView> */
