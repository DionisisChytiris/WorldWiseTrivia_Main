import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const SuccessAnimation = () => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "70%",
        top: 0,
        right: -30,
      }}
    >
      <LottieView
        style={{ width: "100%", height: "100%" }}
        source={require("../../../../assets/LottieAnimation/Success.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SuccessAnimation;
