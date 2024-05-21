import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Pressable,
    StyleSheet,
    Image,
  } from "react-native";
  import React from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { useRoute } from "@react-navigation/native";
  // import LevelImage from "../LevelImage";
  import { useNavigation } from "@react-navigation/native";
  import { QuizBtnItem1, QuizBtnItem2 } from "./FlagsQuizHomeItem";
  
  const FlagsQuizHome = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    // const score1Test = route.params?.score1;
    const score1Test = 20;
    // const score2 = route.params?.score2;
    // const score3 = route.params?.score3;
    const score4 = route.params?.score4;
    const score5 = route.params?.score5;
    const score6 = route.params?.score6;
    const score7 = route.params?.score7;
    const score8 = route.params?.score8;
    const score9 = route.params?.score9;
    const score10 = route.params?.score10;
    const [storeScore1, setStoreScore1] = React.useState(0);
    const [storeScore2, setStoreScore2] = React.useState(0);
    const [storeScore3, setStoreScore3] = React.useState(0);
    const [storeScore4, setStoreScore4] = React.useState(0);
    const [storeScore5, setStoreScore5] = React.useState(0);
    const [storeScore6, setStoreScore6] = React.useState(0);
    const [storeScore7, setStoreScore7] = React.useState(0);
    const [storeScore8, setStoreScore8] = React.useState(0);
    const [storeScore9, setStoreScore9] = React.useState(0);
    const [storeScore10, setStoreScore10] = React.useState(0);
  
    React.useEffect(() => {
      getItem1();
      getItem2();
      getItem3();
      getItem4();
      getItem5();
      getItem6();
      getItem7();
      getItem8();
      getItem9();
      getItem10();
      // getAllKeys();
    }, []);
  
    // const getAllKeys = () => {
    //   try {
    //      AsyncStorage.getAllKeys().then((value) => {
    //       if (value != null) {
    //         let score1 = JSON.parse(value);
    //         let score2 = JSON.parse(value);
    //         let score3 = JSON.parse(value);
    //         let score4 = JSON.parse(value);
    //         let score5 = JSON.parse(value);
    //         setStoreScore1(score1);
    //         setStoreScore2(score2);
    //         setStoreScore3(score3);
    //         setStoreScore4(score4);
    //         setStoreScore5(score5);
    //       }
    //     });
    //     console.log(keys);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    const setItem1 = async () => {
      try {
        await AsyncStorage.setItem("score1", JSON.stringify(storeScore1));
        // navigation.navigate('FlagsHome', {score1: score1Test})
        navigation.navigate("Quiz2");
        // console.log(score1Test);
      } catch (e) {
        console.log(e);
      }
    };
    const getItem1 = () => {
      try {
        AsyncStorage.getItem("score1").then((value) => {
          if (value != null) {
            let score1 = JSON.parse(value);
            setStoreScore1(score1);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem2 = () => {
      try {
        AsyncStorage.getItem("score2").then((value) => {
          if (value != null) {
            let score2 = JSON.parse(value);
            setStoreScore2(score2);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem3 = () => {
      try {
        AsyncStorage.getItem("score3").then((value) => {
          if (value != null) {
            let score3 = JSON.parse(value);
            setStoreScore3(score3);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
  
    const getItem4 = () => {
      try {
        AsyncStorage.getItem("score4").then((value) => {
          if (value != null) {
            let score4 = JSON.parse(value);
            setStoreScore4(score4);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem5 = () => {
      try {
        AsyncStorage.getItem("score5").then((value) => {
          if (value != null) {
            let score5 = JSON.parse(value);
            setStoreScore5(score5);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem6 = () => {
      try {
        AsyncStorage.getItem("score6").then((value) => {
          if (value != null) {
            let score6 = JSON.parse(value);
            setStoreScore6(score6);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem7 = () => {
      try {
        AsyncStorage.getItem("score7").then((value) => {
          if (value != null) {
            let score7 = JSON.parse(value);
            setStoreScore7(score7);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem8 = () => {
      try {
        AsyncStorage.getItem("score8").then((value) => {
          if (value != null) {
            let score8 = JSON.parse(value);
            setStoreScore8(score8);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem9 = () => {
      try {
        AsyncStorage.getItem("score9").then((value) => {
          if (value != null) {
            let score9 = JSON.parse(value);
            setStoreScore9(score9);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
    const getItem10 = () => {
      try {
        AsyncStorage.getItem("score10").then((value) => {
          if (value != null) {
            let score10 = JSON.parse(value);
            setStoreScore10(score10);
          }
        });
      } catch (e) {
        console.log(e);
      }
    };
  
    return (
      <ScrollView horizontal={true}>
        <View style={{}}>
          <ImageBackground
            source={require("../../../assets/continents/worldMap.png")}
            // source={require("../../../assets/mapworld.png")}
            style={{ width: 1000, height: "100%" }}
          >
            <Text>FlagsQuizHome</Text>
            <Text style={{ marginLeft: 40, color: "red" }}>
              {storeScore1 === null ? score1Test : storeScore1}
            </Text>
            <Text style={{ marginLeft: 40, color: "green" }}>{score1Test}</Text>
  
            {/* Photo Level */}
            <View style={{ position: "absolute", bottom: 30, left: 30 }}>
              {/* <LevelImage /> */}
            </View>
            {/* <View style={{ position: "absolute", bottom: 30, left: 30 }}>
            <Image
              source={require("../../../assets/more/university.png")}
              style={{ width: 100, height: 180 }}
            />
            <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18 }}>
              Ambassador
            </Text>
          </View> */}
  
            {/* Quiz 1 */}
            <View
              style={{
                position: "absolute",
                top: "25%",
                left: "14%",
                flexDirection: "row",
              }}
            >
              <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate("Quiz1")}
              >
                <Text>1</Text>
              </Pressable>
              <Text style={{ fontSize: 10 }}>
                {" "}
                {/* {storeScore1 ? storeScore1 : 0}% */}
                {score1Test ? score1Test : 0}%
              </Text>
            </View>
  
            {/* Quiz  2 */}
            {storeScore1 > 60 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={2}
                top1="43%"
                left="14%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={2}
                img={require("../../../assets/more/padlock.png")}
                top1="43%"
                left="14%"
                top2="0"
                right="-40%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  3 */}
            {score1Test > 20 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={3}
                top1="67%"
                left="28%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={3}
                img={require("../../../assets/more/padlock.png")}
                top1="67%"
                left="28%"
                top2="0"
                right="-40%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  4*/}
            {score1Test > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={4}
                top1="68%"
                left="54%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={4}
                img={require("../../../assets/more/padlock.png")}
                top1="68%"
                left="54%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/*  Quiz  5 */}
            {storeScore4 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={5}
                top1="52%"
                left="50%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={5}
                img={require("../../../assets/more/padlock.png")}
                top1="52%"
                left="50%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  6 */}
            {storeScore5 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={6}
                top1="38%"
                left="45%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={6}
                img={require("../../../assets/more/padlock.png")}
                top1="38%"
                left="45%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  7 */}
            {storeScore6 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={7}
                top1="33%"
                left="57%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={7}
                img={require("../../../assets/more/padlock.png")}
                top1="33%"
                left="57%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  8 */}
            {storeScore7 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={8}
                top1="45%"
                left="70%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={8}
                img={require("../../../assets/more/padlock.png")}
                top1="45%"
                left="70%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  9 */}
            {storeScore8 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={9}
                top1="33%"
                left="82%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={9}
                img={require("../../../assets/more/padlock.png")}
                top1="33%"
                left="82%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
  
            {/* Quiz  10 */}
            {storeScore9 > 50 ? (
              <QuizBtnItem1
                screen={setItem1}
                number={9}
                top1="73%"
                left="88%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
                bottom={undefined}
              />
            ) : (
              <QuizBtnItem2
                number={10}
                img={require("../../../assets/more/padlock.png")}
                top1="73%"
                left="88%"
                top2="0"
                right="-45%"
                scoreNext={score1Test}
              />
            )}
          </ImageBackground>
        </View>
      </ScrollView>
    );
  };
  
  export default FlagsQuizHome;
  
  const styles = StyleSheet.create({
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
    },
    img: {
      width: 35,
      height: 35,
      position: "absolute",
      bottom: -10,
      right: -10,
    },
  });
  