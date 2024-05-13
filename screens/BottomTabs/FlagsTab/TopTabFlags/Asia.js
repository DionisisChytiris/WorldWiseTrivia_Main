import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import LearnFlagItem from "./LearnFlagItem";
import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Asia = () => {
  const { flagItemAsia } = useSelector((state) => state.flagsAsia);
  const { colors } = useTheme();
  const { t } = useTranslation();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnFlagItem {...item} />
      </View>
    );
  });

  return (
    <View>
      <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
        <Text style={[styles.continentTitle, { color: colors.text }]}>
          {t("asia")}
        </Text>

        <View style={styles.flashListContainer}>
          <FlashList
            data={flagItemAsia}
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
  );
};

export default Asia;
