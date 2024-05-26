import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../../../utils/ThemeMode/ThemeProvider'
import { useTranslation } from "react-i18next";
import { Dimensions } from "react-native";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Oceania = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  return (
    <View>
      <View
          style={[
            styles.container,
            { backgroundColor: colors.bgFlagsCnt},
          ]}
        >
        <Text style={[styles.continentTitle, { color: colors.text }]}>
          {t("oceania")}
          </Text>
      </View>
      <View style={styles.flashListContainer}>
          <Text>List...</Text>
        </View>
    </View>
  )
}

export default Oceania