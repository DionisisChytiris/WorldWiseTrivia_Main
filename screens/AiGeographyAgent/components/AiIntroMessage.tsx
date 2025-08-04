import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "../AiAgentStyles";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const AiIntroMessage = ({ onClose1 }) => {
   const { t } = useTranslation();
  return (
    <View>
      <Pressable
        onPress={onClose1}
        style={{
          position: "absolute",
          top: -20,
          right: -30,
          zIndex: 9999,
          padding: 30,
        }}
      >
        <View>
          <Feather name="x" size={24} color="white" />
        </View>
      </Pressable>
      <View
        style={{ padding: 30, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ color: "white", fontSize: 20, marginBottom: 0 }}>
          Geography Ai
        </Text>

        
      </View>
      <ScrollView>

     
      <View style={styles.introMsg}>
        <Text style={styles.introText1}>
          {t("ai1")}
        </Text>
        <Text style={styles.introText2}>
          {t("ai2")}
        </Text>
        <Text style={[styles.introText3, { color: "#21dd40" }]}>
          {t("ai3")}
        </Text>
        <Text style={styles.introText3}>🧠 {t("ai4")}:</Text>
        <Text style={styles.introDotTxt}>
          • {t("ai5")}
        </Text>
        <Text style={styles.introDotTxt}>
          • {t("ai6")}
        </Text>
        <Text style={styles.introDotTxt}>
          • {t("ai7")}
        </Text>
        <Text style={[styles.introText3, { marginTop: 20 }]}>⏳ {t("ai8")}:</Text>
        <Text
          style={{
            paddingBottom: 100,
            color: "lightgrey",
            textAlign: "center",
          }}
        >
          {t("ai9")}
        </Text>
      </View>
       </ScrollView>
    </View>
  );
};

export default AiIntroMessage;
