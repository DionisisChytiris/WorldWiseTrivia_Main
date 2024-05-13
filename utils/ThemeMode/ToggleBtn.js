import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { useTranslation } from "react-i18next";

const ToggleBtn = ({navigation}) => {
  const { dark, colors, setScheme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
         <View style={{ marginTop: 150 }}>
        {/* <Text style={{ color: "red" }}>{t("welcome")}</Text> */}
        <Text style={{ color: "yellow", fontSize: 20}}>{t("welcome")}</Text>
      </View>
      <Pressable
        onPress={() => (dark ? setScheme("light") : setScheme("dark"))}
        style={{
          width: 240,
          height: 70,
          backgroundColor: "lightgray",
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 140,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dark? t("darkMode"): t("lightMode")}</Text>
      </Pressable>
      <View style={{ position: "absolute", bottom: 220 }}>
        <Text style={{ color: colors.text1, fontSize: 24, fontWeight: "bold" }}>
          {t("welcome")}
        </Text>
      </View>

      <View style={{position: 'absolute', bottom: 60, flexDirection: 'row', alignContent: 'space-around', gap:10}}>
        <Pressable
          onPress={() => navigation.navigate("Draw")}
          style={styles.button1}
        >
          <Text style={styles.title}>Skip</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("MultiLanguage")}
          style={styles.button2}
        >
          <Text style={styles.title}>Enter Quiz</Text>
        </Pressable>
      </View>
     
    </View>
  );
};

export default ToggleBtn;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
      alignItems: "center",
      // justifyContent: 'center'
    },
    lngBtn: {
      margin: 20,
      backgroundColor: "lightgrey",
      width: 180,
      height: 60,
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
    },
    button1: {
      // position: "absolute",
      // bottom: 50,
      width: 100,
      height: 45,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgreen",
    },
    button2: {
      // position: "absolute",
      // bottom: 50,
      width: 200,
      height: 45,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "lightgreen",
    },
    title: {
      fontSize: 17,
      fontWeight: "bold",
      color: "blue",
    },
  });
  