import React from "react";
import { View, Text, Pressable, Image, Dimensions, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const windowHeight = Dimensions.get("window").height;

interface QuizTemplateProps {
  id?: string;
  quiz?: string;
  title: string;
  image: any;
  locked?: boolean;
  price?: number;
  coins?: number;
  unlockQuiz?: (id?: string) => void;
}

const QuizTemplate: React.FC<QuizTemplateProps> = ({ id, quiz, title, image, locked = false, price = 0, coins = 0, unlockQuiz }) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handlePress = () => {
    if (!locked) {
      navigation.navigate(quiz as never);
    } else {
      if (coins >= price) {
        Alert.alert(
          "Unlock Quiz",
          `Unlock quiz ${title} for ${price} coins?`,
          [
            { text: "Cancel", style: "cancel" },
            { text: "Unlock", onPress: () => unlockQuiz && unlockQuiz(id) },
          ]
        );
      } else {
        Alert.alert("Not enough coins", "You need more coins to unlock this quiz.");
      }
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
              : '100%',
          borderRadius: 10,
          opacity: 0.7,
        }}
        resizeMode="cover"
      />
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            opacity: 1,
            fontSize: windowHeight > 1000 ? (windowHeight > 1100 ? 26 : 18) : 14,
          }}
        >
          {t("quiz")} {title}
        </Text>
         {locked && (
          <Text style={styles.lockText}>🔒 {price} coins</Text>
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
    margin: 0, // must be number
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    // backgroundColor: 'yellow'
  },
  buttonPressed: {
    opacity: 0.4,
  },
    lockText: {
    marginTop: 5,
    color: "yellow",
    fontWeight: "bold",
  },
});


// const QuizTemplate = (props) => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();
//   const { colors } = useTheme();
//   const [test, setTest] = useState(styles.button);
//   return (
//     <Pressable
//       key={props.id}
//       onPressIn={() => setTest(styles.button1)}
//       onPressOut={() => (
//         navigation.navigate(props.quiz), setTest(styles.button)
//       )}
//       style={test}
//     >
//       <Image
//         source={props.image}
//         style={{
//           width:
//             windowHeight > 900
//               ? windowHeight > 1100
//                 ? 250
//                 : windowHeight > 1000
//                 ? 180
//                 : 130
//               : 120,
//           height:
//             windowHeight > 900
//               ? windowHeight > 1100
//                 ? 150
//                 : windowHeight > 1000
//                 ? 120
//                 : 85
//               : "100%",
//           borderRadius: 10,
//           opacity: 0.7,
//         }}
//         resizeMode="cover"
//       />
//       <View style={{ position: "absolute", bottom: 10 }}>
//         <Text
//           style={{
//             color: "white",
//             fontWeight: "bold",
//             opacity: 1,
//             fontSize:
//               windowHeight > 1000 ? (windowHeight > 1100 ? 26 : 18) : 14,
//           }}
//         >
//           {t("quiz")} {props.title}
//         </Text>
//       </View>
//     </Pressable>
//   );
// };