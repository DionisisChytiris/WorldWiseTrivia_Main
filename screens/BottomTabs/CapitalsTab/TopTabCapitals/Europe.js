import { View, Text} from "react-native";
import React, { useCallback, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import LearnCapitalItem from "../TopTabCapitals/LearnCapitalItem";
import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const EuropeCapital = () => {
  const { flagItemsEu } = useSelector((state) => state.flagsEu);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const flagListRef = useRef();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnCapitalItem {...item} />
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
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
              horizontal={false}
              numColumns={height>900? 3:2}
              estimatedItemSize={200}
            />
          </View>
        </View>
    </View>
    //</ScrollView>
  );
};

export default EuropeCapital;
