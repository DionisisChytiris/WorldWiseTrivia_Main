import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, Platform } from "react-native";
import { Rating } from "react-native-ratings";
import * as StoreReview from "expo-store-review";
import logger from "../../../../utils/logger";

interface ReviewModalProps {
  visible: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ visible, onClose }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (newRating: number): void => {
    setRating(newRating);

    if (newRating >= 4) {
      handleRateApp();
    }
  };

  const handleRateApp = async (): Promise<void> => {
    if (StoreReview.isAvailable()) {
      await StoreReview.requestReview();
      logger.info("Store review requested successfully");
    } else {
      logger.warn("Store review not available on this platform");
    }

    logger.debug("Checking store review availability...");

    // Mocking behavior during testing
    if (Platform.OS === "ios" || Platform.OS === "android") {
      logger.debug("Simulating review request...");
      // Simulate review request logic
      alert("Simulating review prompt on this platform.");
    } else {
      logger.warn("Store review not available on this platform");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Our App</Text>
      <Rating
        type="star"
        ratingCount={5}
        imageSize={40}
        startingValue={rating}
        onFinishRating={handleRating}
        style={styles.rating}
      />
      <Text>Your rating: {rating}</Text>
      {rating >= 4 && (
        <Text style={styles.thankYou}>Thank you for your great rating!</Text>
      )}
    </View>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  rating: {
    marginVertical: 20,
  },
  thankYou: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
  },
});

