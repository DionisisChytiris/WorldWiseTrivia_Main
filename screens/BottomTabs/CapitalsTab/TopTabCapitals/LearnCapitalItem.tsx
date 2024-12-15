import { View, Text, StyleSheet, Image, Pressable, Platform} from "react-native";
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
              shadowOffset: Platform.OS =="ios"? { width: 3, height: 3 }:{ width: 3, height: 3 },
              shadowOpacity: Platform.OS =="ios"? 0.3:1.0,
              borderRadius: 10,
            }}
          >
            <Image style={styles.img} resizeMode="cover" source={img} />
          </View>
          <View style={{ paddingTop: 2, flexDirection: height>1100? "row":"column" , gap: height>1100? 130: 0}}>
            <View style={styles.textBox}>
              <Text
                style={{ fontSize: height>1100? 20: 12, fontWeight: "bold", color: colors.text }}
              >
                {country}
              </Text>
            </View>
            <View style={styles.textBox}>
              <Text
                style={{ fontSize: height>1100? 16:10, fontWeight: "bold", color: colors.text }}
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
              gap: height > 900 ? 1 : 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: height > 900 ? 10: 5,
              }}
            >
              <MaterialIcons
                name="people"
                size={height > 900 ? 16 : 14}
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
              gap: height > 900 ? 1 : 0,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: height > 900 ? 20 : 5, }}
            >
              <Fontisto
                name="money-symbol"
                size={height > 900 ? 14 : 12}
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
              flexDirection: "column" ,
              gap: height > 900 ? 1 : 0,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: height > 900 ? 10 : 5,}}
            >
              <MaterialIcons
                name="language"
                size={height > 900 ? 14: 12}
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
    width: height > 900 ? (height>1100?440: (height>980? 340:190) ): 165,
    height: height > 900 ? (height>1100?220: (height>980? 160:150) ) : 150,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    elevation: Platform.OS =="ios"? 1:5,
    shadowOffset: Platform.OS =="ios"? { width: 0.5, height: 0.5 } : { width: 1, height: 1 },
    shadowOpacity: Platform.OS =="ios"? 0.2: 0.5,
  },
  flagBoxBack: {
    flexDirection: "column",
    width: height > 900 ? 340 : 165,
    height: height > 900 ? 150 : 150,
    backgroundColor: "#F5FAFA",
    borderRadius: 14,
    marginBottom: 30,
    gap: height > 900 ? 12 : 8,
    elevation: Platform.OS =="ios"? 1:5,
    shadowOffset: Platform.OS =="ios"? { width: 0.5, height: 0.5 } : { width: 1, height: 1 },
    shadowOpacity: Platform.OS =="ios"? 0.2: 0.5,
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
    width: height < 900 ? 105 : height>1100? 180:120,
    height: height < 900 ? 75 : height>1100? 120: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: height < 900 ? 10 : 12,
  },
  text: {
    fontSize: height < 900 ? 11 : 14,
    fontWeight: "500",
    fontStyle:'italic'
  },
});
