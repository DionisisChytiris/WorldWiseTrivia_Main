import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const BrokenHeart = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 10,
        // backgroundColor: "#f5f5f5",
        padding: 0,
      }}
    >
      <View
        style={{
        //   position: "absolute",
          width: 100,
          height: 80,
        //   top: 0,
        //   right: -30,
        }}
      >
        <LottieView
          style={{ width: "100%", height: "100%" }}
          source={require("../../../../assets/LottieAnimation/BrokenHeart.json")}
          autoPlay
          loop={true}
        />
      </View>
    </View>
  );
};

export default BrokenHeart;
