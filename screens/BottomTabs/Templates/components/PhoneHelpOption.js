import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const PhoneHelp = (props) => {
  return (
    <>
      <View>
        <Text>{props.helpText1}</Text>
      </View>
    </>
  );
};

const PHoneHelpOption = ({ helpText }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      <View style={{ position: "absolute", left: 30, top: 10 }}>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setShowPhone(!showPhone)}
            style={styles.button}
          >
            <Feather name="phone-call" size={22} color="black" />
          </Pressable>
        </View>
      </View>
      {showPhone ? <PhoneHelp helpText1={helpText} /> : null}
    </>
  );
};

export default PHoneHelpOption;

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightgrey",
    justifyContent: "center",
    width: 50,
    height: 35,
    borderRadius: 10,
  },
});
