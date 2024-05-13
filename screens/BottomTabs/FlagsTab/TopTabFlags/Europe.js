import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import LearnFlagItem from "./LearnFlagItem";
import { FlashList } from "@shopify/flash-list";
// import FlagsEuropeEl from "../../../../data/flags/Europe/FlagsEuropeEl";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Europe = () => {
  const { flagItemsEu } = useSelector((state) => state.flagsEu);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const flagListRef = useRef();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5}}>
        <LearnFlagItem {...item} />
      </View>
    );
  });

  return (
    // <ScrollView >
    <View>
      <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
        <Text style={[styles.continentTitle, { color: colors.text }]}>
          {t("europe")}
        </Text>
       
        <View style={styles.flashListContainer}>
            <FlashList
              ref={flagListRef}
              data={flagItemsEu}
              // data={FlagsEuropeEl}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={height>900 ?2 : 1}
              estimatedItemSize={200}
            />
          </View>
        </View>
    </View>
    //</ScrollView>
  );
};

export default Europe;

/* {flagItems.map((item, index) => {
        return (
          <View key={index}>
            {item.continent === "Europe" && (
              <LearnFlagItem  {...item} />
              )}
          </View>
        );
      })} */

/* {flagItems.map((item, index) => {
        return (
          <View key={index}>
            {item.continent === "Europe" && <LearnFlagItem {...item} />}
          </View>
        );
      })} */
