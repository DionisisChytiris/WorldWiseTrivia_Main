import { View, Text } from "react-native";
import React, {useCallback, useMemo} from "react";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";
import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import LearnNaturalMntsItem from "./LearnNaturalMntsItem";
// import AfrMntEn from "../../../../data/naturalMnts/TopTabMnts/AfrMntEn";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Africa = () => {
  const { NtrAfrItems } = useSelector((state) => state.NaturalAfr);
  const { colors } = useTheme();
  const { t } = useTranslation();
  const memoizedData = useMemo(() => NtrAfrItems, [NtrAfrItems]);

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
        {t("africa")}
      </Text>
      <View
        style={{
          width: width / 1.1,
          height: height/1.35,
          // backgroundColor: "gray",
          paddingBottom: 10,
        }}
      >
        <FlashList
          data={memoizedData}
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

export default Africa;
