import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const windowHeight = Dimensions.get("window").height;

interface QuizTemplateProps {
  id: string;
  quiz: string;
  title: string;
  image: any;
  locked?: boolean;
  price?: number;
  coins?: number;
  unlockQuiz?: (id?: string) => void;
}

const QuizTemplate: React.FC<QuizTemplateProps> = ({
  id,
  quiz,
  title,
  image,
  locked = false,
  price = 0,
  coins = 0,
  unlockQuiz,
}) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handlePress = () => {
    if (!locked) {
      // Case 1: Already unlocked
      navigation.navigate(quiz as never);
    } else if (coins >= price) {
      // Case 2: Locked, but enough coins
      Alert.alert("Unlock Quiz", `Unlock quiz ${title} for ${price} coins?`, [
        { text: "Cancel", style: "cancel" },
        { text: "Unlock", onPress: () => unlockQuiz?.(id) },
      ]);
    } else {
      // Case 3b: Not enough coins, no ads configured
      Alert.alert(
        "Not enough coins",
        "You need more coins to unlock this quiz."
      );
    }
  };

  return (
    <Pressable
      key={id}
      onPress={handlePress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image
        source={image}
        style={{
          width:
            windowHeight > 900
              ? windowHeight > 1100
                ? 250
                : windowHeight > 1000
                ? 180
                : 130
              : 120,
          height:
            windowHeight > 900
              ? windowHeight > 1100
                ? 150
                : windowHeight > 1000
                ? 120
                : 85
              : "100%",
          borderRadius: 10,
          opacity: locked ? 0.3 : 0.7,
        }}
        resizeMode="cover"
      />
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text
          style={{
            backgroundColor: "#fdfcfcd3",
            borderRadius: 10,
            paddingHorizontal: 8,
            paddingVertical: 3,
            color: !locked ? "black" : "black",
            fontWeight: "bold",
            opacity: 1,
            fontSize:
              windowHeight > 1000 ? (windowHeight > 1100 ? 26 : 18) : 14,
          }}
        >
          {t("quiz")} {title}
        </Text>

        {/* Only show ad/coins row if quiz is locked */}
        {locked && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <View style={{ position: "absolute", top: -40, right: -5 }}>
              <Text style={{ fontSize: 18 }}>🔒</Text>
            </View>
            <View
              style={{
                backgroundColor: "rgba(136, 134, 114, 0.8)",
                paddingTop: 2,
                paddingBottom: 6,
                borderRadius: 5,
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={styles.lockText}> 💰 {price} coins</Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default QuizTemplate;

const styles = StyleSheet.create({
  button: {
    width: "85%",
    height: 80,
    margin: 0,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  buttonPressed: {
    opacity: 0.4,
  },
  lockText: {
    marginTop: 5,
    color: "gold",
    fontWeight: "bold",
    fontSize: 12
  },
});
