import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "../AiAgentStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppNavigatorTypeList } from "../../../Types/AppNavigatorTypeList";

type ContactProp = StackNavigationProp<AppNavigatorTypeList, "Contact">;

const AppLogo = () => {
  const navigation = useNavigation<ContactProp>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home");
      }}
      style={styles.logo}
    >
       <Image
          source={require("../../../assets/logo2.png")} // adjust path if needed
          style={{ width: 30, height: 30, resizeMode: "contain" }}
        />
    </TouchableOpacity>
  );
};

export default AppLogo;
