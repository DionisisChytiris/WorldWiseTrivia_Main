import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  ActivityIndicatorBase,
  ActionSheetIOS,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Feather from "@expo/vector-icons/Feather";
import Modal from "react-native-modal";
import { Audio } from "expo-av";
import { useAppSelector } from "../../../../ReduxSetUp/store.tsx";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PhoneHelpOption = ({ helpText }) => {
  const [showPhone, setShowPhone] = useState(false);
  const soundActive = useAppSelector((state) => state.soundActive.value);
  const [popUpSound, setPopUpSound] = useState();
  const [dial, setDial] = useState();
  const [showBtn, setShowBtn] = useState(styles.button);
  const [test, setTest] = useState(false);
  const [test1, setTest1] = useState(false);

  async function popUpPlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/popup.mp3")
      // require("../../../assets/drumroll.mp3")
    );
    setPopUpSound(popUpSound);
    await sound.setVolumeAsync(0.1);
    await sound.playAsync();
  }

  async function DialNumberPlaySound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/dianNumber.mp3")
    );
    setDial(dial);
    await sound.setVolumeAsync(0.1);
    await sound.playAsync();
  }

  async function MessageSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/message.mp3")
    );
    // setDial(dial);
    await sound.setVolumeAsync(0.1);
    await sound.playAsync();
  }

  async function DialPhoneNumber() {
    {
      soundActive
        ? setTimeout(() => {
            DialNumberPlaySound();
          }, 400)
        : setTimeout(() => {
            DialNumberPlaySound();
          }, 1000);
    }
  }

  async function MessageNotification() {
    {
      soundActive
        ? null
        : setTimeout(() => {
            MessageSound();
          }, 2600);
    }
  }

  useEffect(() => {
    return popUpSound ? () => popUpSound.uploadAsync() : undefined;
  }, [popUpSound]);

  const testNote1 = () => {
    const timeoutFc1 = setTimeout(() => {
      setTest(true);
    }, 4000);

    return () => clearTimeout(timeoutFc1);
  };

  const testNote2 = () => {
    const timeoutFc2 = setTimeout(() => {
      setTest1(true);
    }, 3000);

    return () => clearTimeout(timeoutFc2);
  };

  // useEffect(() => {
  //   const timeoutFc1 = setTimeout(() => {
  //     setTest(true);
  //   }, 4000);
  //   const timeoutFc2 = setTimeout(() => {
  //     setTest1(true);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeoutFc1);
  //     clearTimeout(timeoutFc2);
  //   };
  // }, [showPhone]);

  return (
    <>
      <View style={{ position: "absolute", left: 15, top: 10 }}>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              setShowPhone(!showPhone);
              {
                soundActive ? null : popUpPlaySound();
              }
              {
                soundActive ? null : DialPhoneNumber();
              }
              MessageNotification();
              testNote1();
              testNote2();
            }}
            style={showBtn}
          >
            <Feather name="phone-call" size={22} color="black" />
          </Pressable>
        </View>
      </View>
      {/* {showPhone ? <PhoneHelp helpText1={helpText} /> : null} */}
      <Modal
        isVisible={showPhone}
        onBackdropPress={() => {
          setShowPhone(false), setTest(false), setTest1(false);
        }}
      >
        <View
          style={{
            borderRadius: 25,
            marginHorizontal: "auto",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            padding: 30,
            // height: 150,
            backgroundColor: "lightgrey",
          }}
        >
          {test ? (
            <View style={[{ position: "absolute", top: -250, right: -20 }]}>
              <Text style={{ width: 110, color: "white" }}>
                Tap anywhere outside the box to close
              </Text>
            </View>
          ) : null}
          {test1 ? (
            <View>
              <View
                style={{
                  position: "absolute",
                  top: -45,
                  left: -40,
                  width: 50,
                  height: 40,
                  backgroundColor: "#f5f5f5",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  transform: [{ rotate: "-15deg" }],
                }}
              >
                <FontAwesome6
                  name="envelope-circle-check"
                  size={24}
                  color="green"
                />
              </View>
              <View>
                <Text>{helpText}</Text>
              </View>
            </View>
          ) : (
            <View>
              <View style={{position: 'absolute', top: 0, left: -80}}>
                <Feather name="phone-call" size={24} color="green" />
              </View>
              <View>
                <Text>... ... ...</Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default PhoneHelpOption;

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
    height: 50,
    borderRadius: "50%",
  },
  button1: {
    display: "none",
  },
});
