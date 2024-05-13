import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../utils/ThemeMode/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChangeTheme= () => {
  const navigation = useNavigation();
  const { dark, colors, setScheme}= useTheme();
  const { t } = useTranslation();
  const [bgColor1, setBgColor1] = useState('white')
  const [bgColor2, setBgColor2] = useState('lightgreen')
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData= ()=>{
    try{
      AsyncStorage.getItem('UserName')
      .then((value)=>{
        if(value !=null){
          let user = JSON.parse(value)
          setName(user.Name)
        }
      })
    }catch(e){
      console.log(e)
    }
  }

  return (
    <View style={[styles.container, {backgroundColor: colors.backgroundDrawer}]}>
      <View
        style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}
      >
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#3ff769" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
      </View>

      {/* <Pressable
        onPress={() => (dark ? setScheme("light") : setScheme("dark"))}
        style={styles.pressableStyle}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{dark? t("darkMode"): t("lightMode")}</Text>
      </Pressable> */}

      <Pressable
        onPress={() =>{ 
          (!dark ? setScheme("dark") : null)
          // alert('hey')
          setBgColor1('lightgreen')
          setBgColor2('white')
        }}
        style={[styles.pressableStyle, {backgroundColor: bgColor1}]}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{t("darkMode")}</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          (dark ? setScheme("light") : null)
          // alert('hey')
          setBgColor2('lightgreen')
          setBgColor1('white')
      }}
        style={[styles.pressableStyle, {backgroundColor: bgColor2}]}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{t("lightMode")}</Text>
      </Pressable>
     

      <View
        style={{
          marginTop: 80,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Draw")}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("NameInput")
          }}
          style={styles.button2}
        >
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
      {/* <View style={{marginTop: 20}}>
        <Text>Hello {name}</Text>
      </View> */}
    </View>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  pressableStyle: {
    width: 200,
    height: 45,
    backgroundColor: "lightgray",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  button1: {
    width: "28%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  button2: {
    width: "40%",
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d5e5e7",
  },
  title: {
    fontSize: RFValue(9, 450),
    fontWeight: "bold",
    color: "#0cb41f",
  },
});
