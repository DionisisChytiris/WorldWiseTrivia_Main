import { View, Text } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const Splash = ({ setIsLoading }: SplashProps): JSX.Element => {
  return (


    <View
      style={{
        flex: 1,
        margin: 0,
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {/* <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text> */}
      <LottieView
        style={{ width: "100%", height: "100%" }}
        source={require("./assets/LottieAnimation/splashscreen.json")}
        autoPlay
        loop={false}
        onAnimationFinish={()=>setIsLoading(false)}
      />
    </View>

  );
};

export default Splash;
