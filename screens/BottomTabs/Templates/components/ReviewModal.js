import React, { useState } from "react";
import { Modal, View, Text, Button, StyleSheet, Platform } from "react-native";
import { Rating } from 'react-native-ratings';
import * as StoreReview from 'expo-store-review';

export default function RateModal({ visible, onClose }) {
  const [rating, setRating] = useState(0);

  // Function to handle star rating change
  const handleRating = (newRating) => {
    setRating(newRating);

    // If rating is 4 or more, prompt the user to rate the app on the store
    if (newRating >= 4) {
      handleRateApp();
    }
  };

  // Function to trigger the store review prompt
  const handleRateApp = async () => {
    if (StoreReview.isAvailable()) {
      await StoreReview.requestReview();
      console.log('Success')
    } else {
      console.log('Store review not available');
    }

    console.log("Checking store review availability...");

    // Mocking behavior during testing
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      console.log("Simulating review request...");
      // Simulate review request logic
      alert("Simulating review prompt on this platform.");
    } else {
      // If not a real platform, fallback
      console.log('Store review not available');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Our App</Text>
      <Rating
        type='star'
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 },
  rating: { marginVertical: 20 },
  thankYou: { fontSize: 16, color: 'green', marginTop: 10 },
});
