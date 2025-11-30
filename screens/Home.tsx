import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppNavigatorTypeList } from "../Types/AppNavigatorTypeList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toggleBoolean } from "../ReduxSetUp/SoundVibration/VibrationSlice";
import { useAppSelector, useAppDispatch } from "../ReduxSetUp/store";
import { useTranslation } from "react-i18next";
import logger from "../utils/logger";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import EarthRotate from '../utils/EarthRotate'

const { width, height } = Dimensions.get("window");

type HomeProp = StackNavigationProp<AppNavigatorTypeList, "Home">;

export default function Home() {
  const coins = useAppSelector((state)=>state.coins.coins)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<HomeProp>();
  const { t } = useTranslation();
  const [name, setName] = useState("");

  useEffect(() => {
    // Start entrance animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Start continuous rotation for globe
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const handleStartQuiz = () => {
    // Animation for button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    name
      ? navigation.navigate("Draw", { name: name })
      : navigation.navigate("MultiLanguage");
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      logger.error("Error loading user name from AsyncStorage:", e);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={["#122646", "#144999", "#3b82f6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }, { scale: scaleAnim }],
            },
          ]}
        >
          <View style={styles.header}>
            <View style={{width: 300, height : 200, marginTop: -100, marginBottom: 20}}>
              <EarthRotate/>
            </View>

            <Text style={styles.title}>World Wise</Text>
            <Text style={styles.subtitle}>Geography Trivia</Text>
            <Text style={styles.tagline}>
              Test your knowledge of countries, capitals, and cultures
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Questions</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>195</Text>
              <Text style={styles.statLabel}>Countries</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber,{color: 'gold'}]}>{coins}</Text>
              <Text style={styles.statLabel}>Coins</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartQuiz}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={["#1037b9", "#050796"]}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Start Quiz Adventure</Text>
              <Animated.View
                style={[
                  { transform: [{ rotate: rotation }] },
                ]}
              >
                <Ionicons name="earth" size={35} color="#c5d8ec" />
              </Animated.View>
            </LinearGradient>
          </TouchableOpacity>

          {name && (
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome back, {name}!</Text>
              <Text style={styles.readyText}>
                Ready to explore the world? 🌍
              </Text>
            </View>
          )}
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.yearText}>2025 Edition</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  decorativeElements: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  floatingIcon: {
    position: "absolute",
  },
  topLeft: {
    top: 120,
    left: 30,
  },
  topRight: {
    top: 180,
    right: 40,
  },
  bottomLeft: {
    bottom: 200,
    left: 50,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 0 : -80,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "rgba(193, 194, 196, 0.3)",
  },
  title: {
    fontSize: RFValue(34),
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: RFValue(21),
    fontWeight: "600",
    color: "#6fbeff",
    marginBottom: 16,
    textAlign: "center",
  },
  tagline: {
    fontSize: RFValue(14),
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 40,
    gap: "3%",
  },
  statCard: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    minWidth: "32%",
  },
  statNumber: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: RFValue(10),
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500",
  },
  startButton: {
    marginBottom: 30,
    borderRadius: 30,
    elevation: 8,
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: RFValue(12),
    paddingHorizontal: 40,
    borderRadius: 30,
    minWidth: 280,
  },
  buttonText: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: "white",
    marginRight: 12,
  },
  buttonIcon: {
    marginLeft: 8,
  },
  welcomeSection: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: RFValue(18),
    fontWeight: "600",
    color: "white",
    marginBottom: RFValue(10),
    textAlign: "center",
  },
  readyText: {
    fontSize: RFValue(12),
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
  },
  yearText: {
    fontSize: RFValue(10),
    color: "rgba(255, 255, 255, 0.6)",
    fontWeight: "500",
  },
});
