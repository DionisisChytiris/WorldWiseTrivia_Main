import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useTheme } from "../../../utils/ThemeMode/ThemeProvider";
import { useTranslation } from "react-i18next";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const QuizTemplate = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [test, setTest]=useState(styles.button)
  return (
    <Pressable
      key={props.id}
      onPressIn={()=>setTest(styles.button1)}
      onPressOut={() => (navigation.navigate(props.quiz), setTest(styles.button))}
      // style={[test,{ backgroundColor: colors.backgroundMaterialTopTab}]}
      style={test}
    >
      <Image
        source={props.image}
        style={{width: '100%', height: '100%',borderRadius: 10, opacity: 0.7}}
        resizeMode="cover"
      />
      <View style={{position: 'absolute', bottom: 10}}>
        <Text style={{ color: 'white', fontWeight: 'bold', opacity: 1}}>{t("quiz")}{" "}{props.title}</Text>
      </View>
    </Pressable>
  );
};

const CapitalsQuizHome = () => {
  const { colors } = useTheme();
  const initialValue = 0;
  const translateValue = useRef(new Animated.Value(initialValue)).current;
  

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(initialValue);
      Animated.timing(translateValue, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [0, 0.7, 0.7, 0.7, 1],
    outputRange: [-281, 0, 281, 0, -281],
  });

  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);

  return (
    // <ScrollView horizontal={true}>
      // {/* <View> */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: colors.bgFlagsCnt,
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          flex: 1
        }}
      >
        {/* <ImageBackground
          source={require("../../../assets/QuizScreen/capitals.png")}
          style={{ width: 1200, height: "100%" }}
        > */}
        <AnimatedImage
          resizeMode="repeat"
          style={[
            styles.background,
            {
              transform: [
                {
                  translateX: translateAnimation,
                },
                {
                  translateY: 0,
                },
              ],
            },
          ]}
          source={require("../../../assets/more/worldMap.png")}
        />
        <View style={{width: '80%', height: windowHeight/1.4,flexDirection: 'row', alignItems: 'center', justifyItems: 'center',  marginTop: '10%'}}>
          <View style={{width: '50%', gap: 20}}>
            <QuizTemplate quiz="Quiz1" title="1" image={require('../../../assets/WorldMonuments/Europe/eiffelTower.png')}/>
            <QuizTemplate quiz="Quiz3" title="3" image={require('../../../assets/WorldMonuments/Europe/colosseum.png')}/>
            <QuizTemplate quiz="Quiz5" title="5" image={require('../../../assets/WorldMonuments/Africa/Pyramids.png')}/>
            <QuizTemplate quiz="Quiz7" title="7" image={require('../../../assets/WorldMonuments/Europe/arc-de-triomphe-paris.png')}/>
            <QuizTemplate quiz="Quiz9" title="9" image={require('../../../assets/WorldMonuments/America/Metropolitan-Cathedral_Mexico.png')}/>
          </View>
          <View style={{width: '50%', marginTop: 70,marginLeft: 20, gap: 20}}>
            <QuizTemplate quiz="Quiz2" title="2" image={require('../../../assets/WorldMonuments/Asia/the-grand-palace.png')}/>
            <QuizTemplate quiz="Quiz4" title="4" image={require('../../../assets/WorldMonuments/USA/capitol-building.png')}/>
            <QuizTemplate quiz="Quiz6" title="6" image={require('../../../assets/WorldMonuments/Europe/Acropolis.png')}/>
            <QuizTemplate quiz="Quiz8" title="8" image={require('../../../assets/WorldMonuments/Europe/Brandenburg-Gate-Berlin.png')}/>
            <QuizTemplate quiz="Quiz10" title="10" image={require('../../../assets/WorldMonuments/Asia/forbidden-city.jpg')}/>           
          </View>
          
        </View>

        {/* </ImageBackground> */}
      </View>
    // </ScrollView>
  );
};

export default CapitalsQuizHome;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    // backgroundColor: 'grey',
    //monuments
    // width: windowWidth *1.4,
    // height: windowHeight/2,
    //  top: windowHeight/2.2,
    //capitals
    width: windowWidth * 2,
    height: windowHeight / 4.7,
    top: windowHeight / 1.7,
    //flags
    // width: windowWidth *2,
    // height: windowHeight/6.7,
    // top: windowHeight/1.4,
    // width: 1400,
    // height: 1200,
    opacity: 0.4,
    transform: [
      {
        translateX: 0,
      },
      {
        translateY: 0,
      },
    ],
  },
  button: {
    // backgroundColor: "red",
    width: "85%",
    height: 80,
    margin: '2%',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1
    // position: "absolute",
    // top: 80,
    // left: 80,
  },
  button1: {
    // backgroundColor: "red",
    width: "85%",
    height: 80,
    margin: '2%',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.4
    // position: "absolute",
    // top: 80,
    // left: 80,
  }
});
