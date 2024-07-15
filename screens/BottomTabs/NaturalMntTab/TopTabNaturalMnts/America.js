import { View, Text } from "react-native";
import React, {useCallback} from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import { styles } from "./styles";
import { FlashList } from "@shopify/flash-list";
import { useSelector } from "react-redux";
import LearnNaturalMntsItem from "./LearnNaturalMntsItem";
import AmerMntEn from "../../../../data/naturalMnts/TopTabMnts/AmerMntEn";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const America = () => {
  const { NtrAmerItems } = useSelector((state) => state.NaturalAmer);
  const { colors } = useTheme();
  const { t } = useTranslation();

  
  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnNaturalMntsItem {...item} />
      </View>
    );
  });
  return (
    <View style={[styles.container, { backgroundColor: colors.bgFlagsCnt }]}>
      <Text style={[styles.continentTitle, { color: colors.text }]}>
        {t("america")}
      </Text>
      <View
        style={{
          width: width / 1.1,
          height: height/1.5,
          // height: height / 1.7,
          // backgroundColor: "gray",
          paddingBottom: 10,
        }}
      >
        <FlashList
          data={NtrAmerItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
};

export default America;
