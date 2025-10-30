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

  const imageSize =
    windowHeight > 1100
      ? 200
      : windowHeight > 1000
      ? 180
      : windowHeight > 900
      ? 130
      : 120;

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Image
        source={image}
        style={{
          width: imageSize,
          height: imageSize * 0.6,
          borderRadius: 10,
          opacity: locked ? 0.3 : 0.7,
        }}
        resizeMode="cover"
      />
      
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text
          style={[
            styles.titleText,
            {
              fontSize:
                windowHeight > 1100 ? 26 : windowHeight > 1000 ? 18 : 14,
            },
          ]}
        >
          {t("quiz")} {title}
        </Text>

        {/* Only show ad/coins row if quiz is locked */}
        {locked && (
          <View style={styles.lockContainer}>
            <View
              style={{
                position: "absolute",
                top: windowHeight > 1000 ? -60 : -40,
                right: -5,
              }}
            >
              <Text style={{ fontSize: windowHeight > 1000 ? 34 : 18 }}>
                🔒
              </Text>
            </View>
            <View style={styles.coinBox}>
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
  titleText: {
    backgroundColor: "#fdfcfcd3",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    color: "black",
    fontWeight: "bold",
  },
  lockContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  coinBox: {
    backgroundColor: "rgba(136, 134, 114, 0.8)",
    paddingVertical: 4,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  lockText: {
    marginTop: 5,
    color: "gold",
    fontWeight: "bold",
    fontSize: windowHeight > 1000 ? 16 : 12,
  },
});
