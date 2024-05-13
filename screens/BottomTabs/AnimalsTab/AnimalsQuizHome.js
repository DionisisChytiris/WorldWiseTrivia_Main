import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import FlipCard from "react-native-flip-card";

const AnimalsQuizHome = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Geeksforgeeks </Text>
      <TouchableOpacity
        style={styles.card}
        onPress={toggleFlip}
      >
        <FlipCard
          style={[ styles.shadow]}
          friction={8}
          perspective={1000}
          flipHorizontal={false}
          flipVertical={true}
          flip={isFlipped}
          clickable={false}
        >
          {/* Front */}
          <View style={styles.imageContainer1}>
            <Text>Front Page</Text>
            <Text>Front Page</Text>
            <Text>Front Page</Text>
          </View>

          {/* Back */}
          <View style={styles.imageContainer2}>
            <Text>Back Page</Text>
            <Text>Back Page</Text>
            <Text>Back Page</Text>
            <Text>Back Page</Text>
          </View>
        </FlipCard>

        {/* <Text style={styles.buttonText}>Flip</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  heading: {
    marginBottom: 30,
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  card: {
    width: 300,
    height:300,
    borderRadius: 30,
    

    // To prevent shadow from overflowing
    overflow: "hidden",
  },
  shadow: {
    shadowColor: "red",
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  imageContainer1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  imageContainer2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  // image: {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: 4,
  // },
  // button: {
  //   backgroundColor: "green",
  //   padding: "10px 30px 10px 30px",
  //   borderRadius: 5,
  //   marginTop: 20,
  // },
  // buttonText: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: "white",
  // },
});

export default AnimalsQuizHome;
