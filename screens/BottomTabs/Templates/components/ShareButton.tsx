import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Share, Alert, Pressable, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

const ShareButton = () => {
  const { t } = useTranslation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Check out this awesome app: World Wise Trivia! 🌍📍 Download it now: https://play.google.com/store/apps/details?id=com.worldwisetrivia.app",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared via", result.activityType);
        } else {
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong while sharing.");
      console.error(error);
    }
  };

  return (
    <View style={{ flex:1,margin: 20 }}>
       <Pressable 
        style={({pressed}) => [
          styles.shareButton,
          pressed && styles.shareButtonPressed
        ]}
        // style={styles.shareButton}
        onPress={onShare}
      >
        <Entypo name="share" size={20} color="white" />
        <Text style={styles.shareButtonText}>{t("ShareButton")}</Text>
      </Pressable>
      {/* <Button title="Share this app" onPress={onShare} /> */}
    </View>
  );
};

export default ShareButton;


const styles = StyleSheet.create({
  shareButton: {
    // position: 'absolute',
    // bottom: 40,
    // left: 20,
    // right: 20,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  shareButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})