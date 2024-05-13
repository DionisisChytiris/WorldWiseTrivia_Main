import { View, Text, FlatList } from "react-native";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../utils/ThemeMode/ThemeProvider";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { FlashList } from "@shopify/flash-list";
import { Dimensions } from "react-native";
import LearnCapitalItem from "./LearnCapitalItem";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Africa = () => {
  const { flagItemsAfrica } = useSelector((state) => state.flagsAfrica);
  const { colors } = useTheme();
  const { t } = useTranslation();

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <LearnCapitalItem {...item}/>
      </View>
    );
  });

  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.bgFlagsCnt},
        ]}
      >
        <Text style={[styles.continentTitle, { color: colors.text }]}>
        {t("africa")}
        </Text>

        <View style={styles.flashListContainer}>
          <FlashList
            data={flagItemsAfrica}
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

export default Africa;

// const renderItem = useCallback(({ item }) => {
//   return (
//     <View>
//       {item.continent === "Africa" && (
//         <LearnFlagItem {...item} />
//       )}
//     </View>
//   );
// })
