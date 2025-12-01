import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppNavigatorTypeList } from '../Types/AppNavigatorTypeList';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { toggleBoolean } from "../ReduxSetUp/SoundVibration/VibrationSlice";
import { useAppSelector } from '../ReduxSetUp/store';
// import { useTranslation } from "react-i18next";
import logger from '../utils/logger';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import EarthRotate from '../utils/EarthRotate';

// const { width, height } = Dimensions.get("window");

type HomeProp = StackNavigationProp<AppNavigatorTypeList, 'Home'>;

export default function Home() {
  const coins = useAppSelector(state => state.coins.coins);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<HomeProp>();
  // const { t } = useTranslation();
  const [name, setName] = useState('');

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (name) {
      navigation.navigate('Draw', { name: name });
    } else {
      navigation.navigate('MultiLanguage');
    }
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          const user = JSON.parse(value);
          setName(user.Name);
        }
      });
    } catch (e) {
      logger.error('Error loading user name from AsyncStorage:', e);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient
        colors={['#122646', '#144999', '#3b82f6']}
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
            <View style={styles.earthContainer}>
              <EarthRotate />
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
              <Text style={[styles.statNumber, styles.goldText]}>{coins}</Text>
              <Text style={styles.statLabel}>Coins</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={handleStartQuiz}
            activeOpacity={0.8}
          >
            <LinearGradient colors={['#1037b9', '#050796']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Start Quiz Adventure</Text>
              <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                <Ionicons name="earth" size={35} color="#c5d8ec" />
              </Animated.View>
            </LinearGradient>
          </TouchableOpacity>

          {name && (
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome back, {name}!</Text>
              <Text style={styles.readyText}>Ready to explore the world? 🌍</Text>
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
  buttonGradient: {
    alignItems: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 280,
    paddingHorizontal: 40,
    paddingVertical: RFValue(12),
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginRight: 12,
  },

  // buttonIcon: {
  //   marginLeft: 8,
  // },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 0 : -80,
  },
  earthContainer: {
    height: 200,
    marginBottom: 20,
    marginTop: -100,
    width: 300,
  },
  footer: {
    alignItems: 'center',
  },
  goldText: {
    color: 'gold',
  },
  gradient: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  // logoContainer: {
  //   backgroundColor: "rgba(255, 255, 255, 0.1)",
  //   borderColor: "rgba(193, 194, 196, 0.3)",
  //   borderRadius: 50,
  //   borderWidth: 2,
  //   marginBottom: 20,
  //   padding: 20,
  // },
  readyText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: RFValue(12),
    textAlign: 'center',
  },
  startButton: {
    borderRadius: 30,
    elevation: 8,
    marginBottom: 30,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    borderWidth: 1,
    minWidth: '32%',
    padding: 16,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: RFValue(10),
    fontWeight: '500',
  },
  statNumber: {
    color: '#ffffff',
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: '3%',
    justifyContent: 'space-around',
    marginBottom: 40,
    width: '100%',
  },
  subtitle: {
    color: '#6fbeff',
    fontSize: RFValue(21),
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  tagline: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: RFValue(14),
    lineHeight: 22,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: RFValue(34),
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  // buttonIcon: {
  //   marginLeft: 8,
  // },
  welcomeSection: {
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: RFValue(18),
    fontWeight: '600',
    marginBottom: RFValue(10),
    textAlign: 'center',
  },
  yearText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: RFValue(10),
    fontWeight: '500',
  },
});
