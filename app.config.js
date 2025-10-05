import "dotenv/config";

export default {
  expo: {
    name: "WorldWise Trivia App",
    slug: "WorldWiseTriviaApp",
    version: "1.0.12",
    newArchEnabled: true,
    orientation: "portrait",
    icon: "./assets/logo2.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/logo2.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY_IOS,
      },
      supportsTablet: true,
      bundleIdentifier: "com.worldwisetrivia.app",
    },
    android: {
      package: "com.worldwisetrivia.app",
      compileSdkVersion: 35,
      targetSdkVersion: 35,
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY,
        },
      },
      permissions: ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
      adaptiveIcon: {
        foregroundImage: "./assets/logo1.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "34547de2-ef97-4b54-9135-27df45137c16",
      },
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/34547de2-ef97-4b54-9135-27df45137c16",
      fallbackToCacheTimeout: 0,
    },
    plugins: [
      "expo-font",
      "expo-asset"
    ],
  },
};
