import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "../AiAgentStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { AppNavigatorTypeList } from "../../../Types/AppNavigatorTypeList";

type ContactProp = StackNavigationProp<AppNavigatorTypeList, "Contact">;

const HomeLogo = () => {
  const navigation = useNavigation<ContactProp>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home");
      }}
      style={styles.homeButton}
    >
      <Ionicons name="home" size={24} color="#b423a8" />
    </TouchableOpacity>
  );
};

export default HomeLogo;
