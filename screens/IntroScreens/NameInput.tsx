import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NameInput = ({navigation}) => {
  const [name, setName] = useState("");
  const { t } = useTranslation();

  const setData = async()=>{
    if(name.length == 0) {
      alert('warning!')
    } else {
      try{
        var user ={
          Name: 
          name.slice(-1) === "ς" || name.slice(-1) === "Σ"  
          ? name[0].toUpperCase() + name.slice(1, -1)
          : name[0].toUpperCase() + name.slice(1)
        }
        await AsyncStorage.setItem('UserName', JSON.stringify(user))
        navigation.navigate("Draw")
        setName('')
      }catch(e){
        console.log(e)
      }
    }
  }

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
    <View style={styles.container}>
      <View
        style={{ width: "50%", flexDirection: "row", gap: 5, marginBottom: 70 }}
      >
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#046e64" }} />
        <View style={{ width: "33%", height: 3, backgroundColor: "#3ff769" }} />
      </View>

        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "#0073d4",
                fontSize: RFValue(11, 420),
                fontWeight: "bold",
                letterSpacing: 0,
              }}
            >
              {t("Enter your Name")}
            </Text>
            <Text>{name}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <TextInput
              placeholder={t("Enter your Name") + "..."}
              style={styles.textInputS}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Pressable
          onPress={()=>navigation.navigate("Draw")}
          style={styles.button1}
        >
          <Text style={styles.title}>{t("skip")}</Text>
        </Pressable>
        <Pressable
          onPress={setData}
          style={styles.button2}
        >
          <Text style={styles.title}>{t("next-step")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NameInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputS: {
    marginVertical: 80,
    paddingHorizontal: 40,
    // width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e0e9e9",
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
