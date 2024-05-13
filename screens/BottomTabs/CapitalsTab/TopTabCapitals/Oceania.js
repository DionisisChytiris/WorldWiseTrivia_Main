import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { useSelector } from "react-redux";
import LearnCapitalItem from "../TopTabCapitals/LearnCapitalItem";
import { styles } from "./styles";
import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Oceania = () => {
  const { flagItemsOceania } = useSelector((state) => state.flagsOceania);
  const { colors } = useTheme();
  const { t } = useTranslation();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnCapitalItem {...item} />
      </View>
    );
  });

  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.bgFlagsCnt },
        ]}
      >
        <Text style={[styles.continentTitle, { color: colors.text }]}>
        {t("oceania")}
        </Text>
        <View style={styles.flashListContainer}>
          <FlashList
            data={flagItemsOceania}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            estimatedItemSize={200}
          />
        </View>
      </View>
    </View>
  );
};

export default Oceania;
